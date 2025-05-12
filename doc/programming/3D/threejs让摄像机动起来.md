### threejs让摄像机动起来

在webGL中文网学习threejs基础篇——让物体动起来中的第一个demo

一、初入——直接使用课程中的例子

```
<template>
    <div id='demo3' class='demo'></div>
</template>
<script>
import * as THREE from 'three'
export default {
    data() {
        return {
            renderer:null,
            camera:null,
            scene:null,
            light:null,
            cube:null,
            width:0,
            heigh:0,
            r:800
        }
    },
    methods: {
        initThree(){
            this.width=document.getElementById('demo3').clientWidth
            this.height=document.getElementById('demo3').clientHeight
            this.renderer=new THREE.WebGLRenderer({
                antialias:true
            })
            this.renderer.setSize(this.width,this.height)
            document.getElementById('demo3').appendChild(this.renderer.domElement)
            this.renderer.setClearColor(0xf5f5f5,1.0)
        },
        initCamera(){
            this.camera=new THREE.PerspectiveCamera(45,this.width/this.height,1,10000)
            this.camera.position.x=this.r
            this.camera.position.y=0
            this.camera.position.z=0
            this.camera.up.x=0
            this.camera.up.y=1
            this.camera.up.z=0
            this.camera.lookAt(0,0,0)
        },
        initScene(){
            this.scene=new THREE.Scene()
        },
        initLight(){
            this.light=new THREE.AmbientLight(0xffffff)
            this.light.position.set(100,100,200)
            this.scene.add(this.light)
            this.light=new THREE.PointLight(0x00ff00)
            this.light.position.set(0,0,300)
            this.scene.add(this.light)
        },
        initObject(){
            let geometry=new THREE.CylinderGeometry(100,150,400)
            let material=new THREE.MeshLambertMaterial({color:0x00f600})
            let mesh=new THREE.Mesh(geometry,material)
            //mesh.position=new THREE.Vector3( 0, 1, 0 );
            mesh.position.x=0
            mesh.position.y=0
            mesh.position.z=0
            this.scene.add(mesh)
            
        },
        animations(){
            this.camera.position.x=this.camera.position.z+1
            this.renderer.render(this.scene,this.camera)
            requestAnimationFrame(this.animations)
        },
        threeStart(){
            this.initThree()
            this.initCamera()
            this.initScene()
            this.initLight()
            this.initObject()
            this.animations()
        }
    },
    mounted() {
        this.threeStart()
    },
}
</script>
```

我们现在结合图片来看下(ps:摄像机位置是800,0）

![img](/assets/img/program/3D/%E8%AE%A9camera%E5%8A%A8%E8%B5%B7%E6%9D%A5/1.png)

这个demo实现物体运动是让摄像机运动沿着y轴运动，以此达到物体看起运动的效果。再次我就产生了一个想法，我能不能让摄像机盯着物体做圆周运动，然后让我们进入第二节

二、提升——摄像机做圆周运动
因为摄像机y轴不改变（即高度没改变），所以就是简单的二维几何问题，废话不多说，直接代码

```
<template>
    <div id='demo3' class='demo'></div>
</template>
<script>
import * as THREE from 'three'
export default {
    data() {
        return {
            renderer:null,
            camera:null,
            scene:null,
            light:null,
            cube:null,
            width:0,
            heigh:0,
            r:800,
            angle:0
        }
    },
    methods: {
        initThree(){
            this.width=document.getElementById('demo3').clientWidth
            this.height=document.getElementById('demo3').clientHeight
            this.renderer=new THREE.WebGLRenderer({
                antialias:true
            })
            this.renderer.setSize(this.width,this.height)
            document.getElementById('demo3').appendChild(this.renderer.domElement)
            this.renderer.setClearColor(0xf5f5f5,1.0)
        },
        initCamera(){
            this.camera=new THREE.PerspectiveCamera(45,this.width/this.height,1,10000)
            this.camera.position.x=this.r
            this.camera.position.y=0
            this.camera.position.z=0
            this.camera.up.x=0
            this.camera.up.y=1
            this.camera.up.z=0
            this.camera.lookAt(0,0,0)
        },
        initScene(){
            this.scene=new THREE.Scene()
        },
        initLight(){
            this.light=new THREE.AmbientLight(0xffffff)
            this.light.position.set(100,100,200)
            this.scene.add(this.light)
            this.light=new THREE.PointLight(0x00ff00)
            this.light.position.set(0,0,300)
            this.scene.add(this.light)
        },
        initObject(){
            let geometry=new THREE.CylinderGeometry(100,150,400)
            let material=new THREE.MeshLambertMaterial({color:0x00f600})
            //mesh.position=new THREE.Vector3( 0, 1, 0 );
            mesh.position.x=0
            mesh.position.y=0
            mesh.position.z=0
            this.scene.add(mesh)
            
        },
        animations(){
            this.angle++
            this.camera.position.x=this.r*Math.cos(this.angle*Math.PI/180)
            this.camera.position.z=this.r*Math.sin(this.angle*Math.PI/180)
            this.renderer.render(this.scene,this.camera)
            requestAnimationFrame(this.animations)
        },
        threeStart(){
            this.initThree()
            this.initCamera()
            this.initScene()
            this.initLight()
            this.initObject()
            this.animations()
        }
    },
    mounted() {
        this.threeStart()
    },
}
</script>
```

但是实际情况似乎和我预想似乎不大一样啊，怎么回事，为什么只有一小段时间有看得见物体。经过一番思考，我觉定多添加几个物体进行参考

```
initObject(){
            let geometry=new THREE.CylinderGeometry(100,150,400)
            let material=new THREE.MeshLambertMaterial({color:0x00f600})
            let pos=[[0,0,0],[-800,0,-800],[-800,1,800],[-1600,0,0]]
            for(var i=0;i<4;i++){
            let mesh=new THREE.Mesh(geometry,material)
            //mesh.position=new THREE.Vector3( 0, 1, 0 );
            mesh.position.x=pos[i][0]
            mesh.position.y=pos[i][1]
            mesh.position.z=pos[i][2]
            this.scene.add(mesh)
            }
        },
```

于是我增加了三个物体作为参照物，于是我确定了，原来是镜头没有改变（参考图）

![img](/assets/img/program/3D/%E8%AE%A9camera%E5%8A%A8%E8%B5%B7%E6%9D%A5/2.png)

但我了解的是this.camera.lookAt(0,0,0)让摄像头看着原点啊，当我一筹莫展时，直觉驱使我增加了一行代码

```
animations(){
            this.angle++
            this.camera.position.x=this.r*Math.cos(this.angle*Math.PI/180)
            this.camera.position.z=this.r*Math.sin(this.angle*Math.PI/180)
            //每帧都重新设置lookAt可以达到摄像机围绕物体旋转
            this.camera.lookAt(0,0,0) // 重点
            this.renderer.render(this.scene,this.camera)
            requestAnimationFrame(this.animations)
        },
```

运行后我豁然开朗，修改位置后我需要重新制定摄像中心点，来调整偏转角