### threejs如何实现一个3d场景中的阴影效果

跟OpenGL不同，在threejs中实现一个阴影效果很简单，只需要简单的几个设置。

在Three.js中，物体可以形成阴影投影效果，**但是由于渲染阴影需要消耗计算机大量资源，所以Three.js在默认情况下是不会渲染阴影的**，所以需要我手工设置开启阴影效果。

1. renderer设置

首先我们需要告诉renderer我们需要显示阴影效果：
``` js
//告诉渲染器需要阴影效果
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
```
2. 光源设置

其次需要设置正确的光源，光影，有光才有影。现实环境中，人们之所以能看得到物体，是因为有光，物体的材质反射光到人眼中。在ThreeJS中有几种光源，去模拟现实环境。

**最常见的四种为**：

环境光( ```AmbientLight``` )：笼罩在整个空间无处不在的光

点光源( ```PointLight``` )：向四面八方发射的单点光源

聚光灯( ```SpotLight``` )：发射出锥形状的光， 模拟手电筒，台灯等光源

平行光( ```DirectinalLight``` )：平行的一束光，模拟从很远处照射的太阳光

环境光可以说是场景的整体基调，需要注意的是，**由于环境光无处不在，也就是说它是没有方向的，当然不能产生阴影**。而且，它也不能作为环境中唯一的光源。我们来看一下只有环境光的效果。


显然，只有环境光的场景是不真实的。环境光可以弱化阴影或者给场景添加一些颜色。**而环境光又是必不可少的光源，如果没有环境光，整个3d场景就是一片漆黑（除了某些跟光照无关的材质可以显示）**。


聚光灯( ```SpotLight``` )是产生阴影效果最常见的光源，能做出类似舞台的效果。平行光或者说方向光可以看成是另类的聚光灯，距离太远以至于光线基本平行了，就像太阳对于我们来说一样。它与聚光灯不同的一点是，它在任何地方的强度都是一样的。当然它也是可以产生阴影的。创建平行光的接口与环境光一致。实际使用过程中具体需要用到光源，怎么去布置光源，需要根据具体应用场景来定。

创建好光源之后，需要设置```castShadow```属性告诉光源开启阴影投射。

```
//需要开启阴影投射
light.castShadow = true;
```        
可以在场景中添加多个不同的光源，同时显示不同方向的阴影效果。
```
scene.add(new THREE.AmbientLight(0x444444));

light = new THREE.SpotLight(0xffffff);
light.position.set(-60,30,0);

//需要开启阴影投射
light.castShadow = true;

scene.add(light);


var directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
directionalLight.position.set( 1, 1, 0 );
directionalLight.castShadow = true;
scene.add( directionalLight );


light = new THREE.PointLight( 0xffffff, 1, 100 );
light.position.set( 50, 50, 50 );
light.castShadow = true;
scene.add( light );
```

![图片](/assets/img/program/3D/%E6%A8%A1%E5%9E%8B%E9%98%B4%E5%BD%B1.png)

3. 材质和模型设置
再次，添加不同材质的模型，设置属性使模型可以产生阴影效果。
```
//告诉立方体需要投射阴影
cube.castShadow = true;
```
**模型的材质也要选择对灯光有反应的材质，否则也不会出现效果。**

#### 常用的网格材质有以下几种：

基础网孔材料（```MeshBasicMaterial```）

一个以简单着色（平面或线框）方式来绘制几何形状的材料。该材料不受光照影响，没有光照也能着色。

默认将呈现为平面多边形。要把网孔绘制为线框，只需设置“线框（```wireframe```）”属性设置为true。

深度网孔材料（```MeshDepthMaterial```）

一种通过深度绘制几何体的材料。深度基于相机的远近平面。白色是最近的，黑色是最远的。

兰伯特网孔材料（```MeshLambertMaterial```）

一种非发光材料（兰伯特）的表面，计算每个顶点。

法向量网孔材料（```MeshNormalMaterial```）

一种把法向量映射到RGB颜色的材料。

基础网孔材料（```MeshStandardMaterial```）

我们添加不同材质的立方体模型到场景中，并设置好属性产生阴影。
```
var cubeGeometry = new THREE.CubeGeometry(10,10,8);
var cubeMaterial = new THREE.MeshPhongMaterial({color:0x444fff});

var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
cube.position.x = 25;
cube.position.y = 5;
cube.position.z = -5;

//告诉立方体需要投射阴影
cube.castShadow = true;

scene.add(cube);



//立方体
cubeGeometry = new THREE.CubeGeometry(10,10,8);
cubeMaterial = new THREE.MeshBasicMaterial({color:0x444fff});

cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
cube.position.x = 15;
cube.position.y = 5;
cube.position.z = -25;

//告诉立方体需要投射阴影
cube.castShadow = true;

scene.add(cube);


//立方体
cubeGeometry = new THREE.CubeGeometry(10,10,8);
cubeMaterial = new THREE.MeshDepthMaterial({color:0x444fff});

cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
cube.position.x = 15;
cube.position.y = 5;
cube.position.z = 25;

//告诉立方体需要投射阴影
cube.castShadow = true;

scene.add(cube);


    //立方体
cubeGeometry = new THREE.CubeGeometry(10,10,8);
cubeMaterial = new THREE.MeshLambertMaterial({color:0x444fff});

cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
cube.position.x = -15;
cube.position.y = 5;
cube.position.z = 25;

//告诉立方体需要投射阴影
cube.castShadow = true;

scene.add(cube);


    //立方体
cubeGeometry = new THREE.CubeGeometry(10,10,8);
cubeMaterial = new THREE.MeshStandardMaterial({color:0x444fff});

cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
cube.position.x = -15;
cube.position.y = 5;
cube.position.z = -25;

//告诉立方体需要投射阴影
cube.castShadow = true;

scene.add(cube);


    //立方体
cubeGeometry = new THREE.CubeGeometry(10,10,8);
cubeMaterial = new THREE.MeshNormalMaterial({color:0x444fff});

cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
cube.position.x = -15;
cube.position.y = 5;
cube.position.z = -10;

//告诉立方体需要投射阴影
cube.castShadow = true;

scene.add(cube);
```
4. 创建底部平面接收阴影设置
最后，添加一个接收阴影的平面，通过receiveShadow属性设置平面接收阴影。
```
//平面
var planeGeometry = new THREE.PlaneGeometry(100,100);
var planeMaterial = new THREE.MeshStandardMaterial({color:0xcccccc});

var plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.rotation.x = - 0.5 * Math.PI;
plane.position.y = -0;

//设置平面需要接收阴影
plane.receiveShadow = true;

scene.add(plane);
```
