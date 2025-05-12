### Threejs三维模型添加文字标签，及添加文字的方式

上次在文章ThreeJS中三维世界坐标转换成二维屏幕坐标介绍了三维二维坐标的转换方法，今天结合一个用例具体说下用法。

在三维模型场景展示中，**经常会需要对各个模型加上文字标签，而无论三维场景如果旋转变换一般文字标签总是需要面向摄像机方向，这时候代表深度的z坐标失去作用，只需用到x,y坐标**。这时候需要把三维坐标转换为基于屏幕上的二维坐标。

三维模型上加文字标签最常用的方法应该就是（DOM + CSS）基于传统html5的文字实现，用于添加描述性叠加文字的方法。具体实现是声明一个绝对定位的DIV，并且保证z-index够大，保证能够显示在3D场景之上。然后计算三维坐标对应的二维坐标，根据二维坐标去设置DIV的left和top属性，让DIV在需要的位置进行展示。这种方式实现简单，DIV可方便使用页面CSS效果进行UI设置。

在三维场景上增加一个立方体，在球体和立方体上分别加上个文字标签。

添加立方体模型：
``` javaScript
var cubeMaterial = new THREE.MeshStandardMaterial({color:0x00ffff});

cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

cube.position.set(300,100,100);

scene.add(cube);

页面上添加两个div及css样式：

<div id="info1">这是球体</div>

<div id="info2">这是立方体</div>

#info1 {

position: absolute;

top: 0;

width: 100px;

height: 50px;

text-align: center;

z-index: 100;

display:block;

padding: 10px;

background: rgba(255, 255, 255, 0.8);

line-height: 1;

border-radius: 5px;

}

#info2 {

position: absolute;

top: 0;

width: 100px;

height: 50px;

text-align: center;

z-index: 100;

display:block;

padding: 10px;

background: rgba(255, 255, 255, 0.8);

line-height: 1;

border-radius: 5px;

}
```
在OnRender方法中写坐标系转换代码：
```
var halfWidth=window.innerWidth/2;
var halfHeight=window.innerHeight/2;											
    
var vectSphere = new THREE.Vector3(sphere.position.x,sphere.position.y,sphere.position.z);
var posiSphere =vectSphere.project(camera);;

$("#info1").css({
        left:posiSphere.x*halfWidth+halfWidth,
        top:-posiSphere.y*halfHeight+halfHeight,
    });							

var vectCube = new THREE.Vector3(cube.position.x,cube.position.y,cube.position.z);
var posiCube =vectCube.project(camera);

$("#info2").css({
    left:posiCube.x*halfWidth+halfWidth,
    top:-posiCube.y*halfHeight+halfHeight,
});
	
```
这样无论我怎么旋转缩放或移动三维模型，文本DIV标签都能显示在合适的位置。

![图片](/assets/img/program/3D/%E6%A8%A1%E5%9E%8B%E4%BF%A1%E6%81%AF%E6%A0%87%E7%AD%BE1.jpeg)

![图片](/assets/img/program/3D/%E6%A8%A1%E5%9E%8B%E4%BF%A1%E6%81%AF%E6%A0%87%E7%AD%BE2.png)

在Threejs三维场景中添加文字有很多不同的方法，**上面说的DIV+CSS的方式应该是最简单也最快速方式**。

**如果希望在三维模型中绘制文本，可以把文字图片用作Texture（纹理），绘制在模型表面**。

另一种常用的方式是**使用three.js自带的文字几何体来添加3d或2d的文字**，这种方法可以创建能够由程序改变的、动态的3D文字，可以创建一个其几何体为```THREE.TextGeometry```的实例的网格。需要把字体文件添加进来，在示例font目录下有json格式的几种字体。

示例：
``` javaScript

var loader = new THREE.FontLoader();

loader.load( 'fonts/SimHei_Regular.json', function ( font ) {

var geometry = new THREE.TextGeometry( 'Hello three.js!测试', {
    font: font,
    size: 50,
    height: 1,
    curveSegments: 12,
    bevelEnabled: true,
    bevelThickness: 10,
    bevelSize: 8,
    bevelSegments: 5
});
var fontMaterial = new THREE.MeshLambertMaterial({
    color: 0x808080
});

var fontModel = new THREE.Mesh(geometry,fontMaterial);
scene.add(fontModel);
```

![图片](/assets/img/program/3D/%E6%A8%A1%E5%9E%8B%E4%BF%A1%E6%81%AF%E6%A0%87%E7%AD%BE3.jpeg)


接着我们在添加一个2d文字

``` javaScript

var font2dMaterial = new THREE.MeshLambertMaterial({
    color: 0x912CEE,
side: THREE.DoubleSide
});

var shapes = font.generateShapes("2d文字测试", 100, 1);
var font2dGeometry = new THREE.ShapeGeometry(shapes);


font2dGeometry.computeBoundingBox();
var font2d = new THREE.Mesh(font2dGeometry, font2dMaterial);
font2d.position.x = -0.5 * (font2dGeometry.boundingBox.max.x - font2dGeometry.boundingBox.min.x);
font2d.position.z += 1;
scene.add(font2d);
```

![图片](/assets/img/program/3D/%E6%A8%A1%E5%9E%8B%E4%BF%A1%E6%81%AF%E6%A0%87%E7%AD%BE4.jpeg)

**需要注意一点，在Threejs包中提供的字体都是英文字体，如果想显示中文需要加入中文字体的json文件**。

可以通过``Facetype.js``把中文字体文件转成json格式。

还有**另一种更简单地添加文字的方式是使用精灵对象添加文字，不需要引入什么字体，使用Cavas直接绘制文字，因为精灵对象总是面向摄像头的，处理起来也方便**。

代码：
```
let canvas = document.createElement("canvas");
canvas.width =400;
canvas.height = 100;
let ctx = canvas.getContext("2d");
ctx.fillStyle = "#ffff00";
ctx.font = "Bold 100px 宋体";
ctx.lineWidth = 4;
ctx.fillText("精灵中文字体",4,104);
let texture = new THREE.Texture(canvas);
texture.needsUpdate = true;
let material = new THREE.SpriteMaterial({map:texture});
let text = new THREE.Sprite(material);
text.scale.set(0.5 * 100, 0.25 * 100, 0.75 * 100);
text.position.set(0,0,50);
scene.add(text)
```

![图片](/assets/img/program/3D/%E6%A8%A1%E5%9E%8B%E4%BF%A1%E6%81%AF%E6%A0%87%E7%AD%BE5.png)

**最后一种添加文字的方式是**使用```BMFonts``` (位图字体) ，可以将字形批处理为单个```BufferGeometry```。位图字体渲染支持自动换行、字母间距、字句调整等很多特性，有兴趣的朋友可以去Github看一下这个开源项目```three-bmfont-text```。