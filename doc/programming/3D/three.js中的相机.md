### three.js中的相机

所有的3D编程中都有一个避免不了的话题就是相机，**相机就是这样一个抽象，它定义了三维空间到二维屏幕的投影方式，用“照相机”这样一个类比，可以使我们直观地理解这一投影方式**。而针对投影方式的不同，**照相机又分为正交投影照相机与透视投影照相机。**

```PerspectiveCamera```(透视相机)
这种投影模式是被设计用来模拟人类眼睛观察事物的方式。这是3d渲染中最经常使用的投影模式。

``` PerspectiveCamera( fov : Number, aspect : Number, near : Number, far : Number ) ```

fov: 可视角度
aspect: 为width/height,通常设置为canvas元素的高宽比。
near: 近端距离
far: 远端距离

![img](/assets/img/program/3D/%E7%9B%B8%E6%9C%BA.jpeg)

另一种常用的相机就是正交相机，

```OrthographicCamera```(正交相机)

使用这种投影模式，**无论物体离照相机的距离是多少，物体的大小始终保持不变**。这在渲染2d场景、UI元素以及其他场景是很有用的。一般说来，对于制图、建模软件通常使用正交投影，这样不会因为投影而改变物体比例。

``` javaScript

OrthographicCamera( left : Number, right : Number, top : Number, bottom : Number, near : Number, far : Number )

```

left: 视锥左侧面
right: 视锥右侧面
top: 视锥上侧面
bottom: 视锥下侧面
near: 近端距离
far: 远端距离

![img](/assets/img/program/3D/%E7%9B%B8%E6%9C%BA2.jpeg)

**除了这两种常用的相机，还有一类特殊的相机**

```CubeCamera```(立方体相机或全景相机)
``` CubeCamera( near : Number, far : Number, cubeResolution : Number ) ```

near: 近端距离
far: 远端距离
cubeResolution: 立方体的长度
其实全景相机就是前后左右上下六个方向都加上一个透视相机。

```StereoCamera```(3D相机)
双相机，被用于需要3d立体效果，视差栅栏的场景
其实本质就是左右两个透视相机。
![img](/assets/img/program/3D/%E7%9B%B8%E6%9C%BA3.jpeg)
