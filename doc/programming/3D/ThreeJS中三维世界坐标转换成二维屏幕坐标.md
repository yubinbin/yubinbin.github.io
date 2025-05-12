### ThreeJS中三维世界坐标转换成二维屏幕坐标

Threejs全称是“Javascript 3D library”。WebGL是openGL在浏览器上的一个实现。Threejs对WebGL进行了封装，让前端开发人员在不需要掌握很多数学知识和绘图知识的情况下轻松进行web 3D开发，简单易用。

**三维开发中最常用的是三维坐标和二维坐标的转换**，比如说：**给一个三维模型中动态赋予一个文字标签进行展示**，以前使用OpenGL处理起来比较麻烦，使用Threejs就简单了很多。

关键一步：```vector.project(camera)``` ，表示将该三维坐标投影到视角相机平面上，变成一个二维坐标，结果为一个单位向量（标准向量），返回的结果是世界坐标worldVector在camera相机对象矩阵变化下对应的标准设备坐标， 标准设备坐标xyz的范围是[-1,1]。

![img](/assets/img/program/3D/3%E7%BB%B4%E5%9D%90%E6%A0%87%E8%BD%AC2%E7%BB%B4.png)

因为canvas画布是全屏状态，完全填充浏览器窗口的客户区，canvas画布的宽高尺寸就是window.innerWidth、window.innerHeight。画布的中心从屏幕坐标系的角度看是坐标是(window.innerWidth/2,window.innerHeight/2),从WebGL标准设备坐标系的角度看是坐标原点(0,0)。
```
var vector = worldVector.project(camera);//通过世界坐标获取转标准设备坐标
var w = window.innerWidth / 2;
var h = window.innerHeight / 2;
var x = Math.round(vector.x *w + w);//标准设备坐标转屏幕坐标
var y = Math.round(-vector.y * h + h);
```
***3D坐标转换成2D坐标，是一种降维度操作，统称为投影。***

同理使用函数vector.unproject(camera)则可以从屏幕2d坐标转换为3d空间坐标

```
var vector = new THREE.Vector3(mX, mY, 0.5 );//这里定义深度值为0.5

//将鼠标坐标转换为3D空间坐标

vector.unproject(camera);

```