Three.js屏幕坐标与世界坐标之间的变换


0、渲染管线中坐标系变换:

局部坐标 -> 世界坐标 -> 观察空间坐标 -> 裁剪空间坐标 -> NDC坐标 -> 屏幕空间坐标

![img](/assets/img/program/3D/threejs%E5%B1%8F%E5%B9%95%E5%9D%90%E6%A0%87%E4%B8%8E%E4%B8%96%E7%95%8C%E5%9D%90%E6%A0%87%E4%B9%8B%E9%97%B4%E7%9A%84%E8%BD%AC%E6%8D%A2/1.jpg)

1、浏览器屏幕坐标系(canvas坐标)，原点在左上角,注意和PC客户端的屏幕坐标系Y轴是翻转的
![img](/assets/img/program/3D/threejs%E5%B1%8F%E5%B9%95%E5%9D%90%E6%A0%87%E4%B8%8E%E4%B8%96%E7%95%8C%E5%9D%90%E6%A0%87%E4%B9%8B%E9%97%B4%E7%9A%84%E8%BD%AC%E6%8D%A2/2.jpg)

2、PC客户端屏幕坐标系，即通常非web渲染中的，也是OpenGL中默认的屏幕坐标系，原点在左下角

![img](/assets/img/program/3D/threejs%E5%B1%8F%E5%B9%95%E5%9D%90%E6%A0%87%E4%B8%8E%E4%B8%96%E7%95%8C%E5%9D%90%E6%A0%87%E4%B9%8B%E9%97%B4%E7%9A%84%E8%BD%AC%E6%8D%A2/3.jpg)


3、NDC坐标系（二维）,OpenGL中NDC的Z轴由屏幕向内,即左手坐标系,原点在中心

![img](/assets/img/program/3D/threejs%E5%B1%8F%E5%B9%95%E5%9D%90%E6%A0%87%E4%B8%8E%E4%B8%96%E7%95%8C%E5%9D%90%E6%A0%87%E4%B9%8B%E9%97%B4%E7%9A%84%E8%BD%AC%E6%8D%A2/4.jpg)

4、1和3合起来看

5、假设画布canvas的高为h, 宽为w, 且坐标系中有一点(x, y), 这一点在NDC中为(x1, y1), 那么转换公式为:

```
x1=(x/w)∗2−1

y1=−(y/h)∗2+1
```
canvas的宽高根据具体设定决定, 比如全屏时是window.innerWidth和window.innerHeight , 如果canvas有偏移量,那么往往是canvas.offsetWidth和canvas.offsetHeight

6、5的推导如下:

①首先根据4, 世界空间中的坐标与屏幕关系如下(即4中红色原点与画布长宽):
```
cx = w / 2

cy = h / 2
```
②那么，屏幕坐标系中的点 ( x', y' )应用这个原点 ( cx ,cy )后的表示为：
```
x′ = x − cx

y′ = cy − y （因为这两个坐标系的 y 轴方向是相反的）
```
③然后再将 ( x ′ , y ′ )标准化到[-1, 1]之间，也就是分别除以cx ,c y ：
![img](/assets/img/program/3D/threejs%E5%B1%8F%E5%B9%95%E5%9D%90%E6%A0%87%E4%B8%8E%E4%B8%96%E7%95%8C%E5%9D%90%E6%A0%87%E4%B9%8B%E9%97%B4%E7%9A%84%E8%BD%AC%E6%8D%A2/5.png)

同理:

![img](/assets/img/program/3D/threejs%E5%B1%8F%E5%B9%95%E5%9D%90%E6%A0%87%E4%B8%8E%E4%B8%96%E7%95%8C%E5%9D%90%E6%A0%87%E4%B9%8B%E9%97%B4%E7%9A%84%E8%BD%AC%E6%8D%A2/6.png)
7、 用代码表示threejs中屏幕坐标转世界坐标

假设有鼠标单击事件
```
const x = event.clientX;//鼠标单击坐标X
const y = event.clientY;//鼠标单击坐标Y

// 屏幕坐标转标准设备坐标
const x1 = ( x / window.innerWidth ) * 2 - 1;
const y1 = -( y / window.innerHeight ) * 2 + 1;
//标准设备坐标(z=0.5这个值比较靠经验)
const stdVector = new Vector3(x1, y1, 0.5);
//世界坐标
const worldVector = stdVector.unproject(camera);
```
8、 世界坐标转屏幕坐标, 将5公式反着推即可, 即
![img](/assets/img/program/3D/threejs%E5%B1%8F%E5%B9%95%E5%9D%90%E6%A0%87%E4%B8%8E%E4%B8%96%E7%95%8C%E5%9D%90%E6%A0%87%E4%B9%8B%E9%97%B4%E7%9A%84%E8%BD%AC%E6%8D%A2/7.jpg)
