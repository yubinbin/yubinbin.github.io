import{_ as n,c as a,a2 as p,o as e}from"./chunks/framework.CqbvlPrP.js";const i="/assets/img/program/3D/%E8%AE%A9camera%E5%8A%A8%E8%B5%B7%E6%9D%A5/1.png",l="/assets/img/program/3D/%E8%AE%A9camera%E5%8A%A8%E8%B5%B7%E6%9D%A5/2.png",E=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"programming/3D/threejs让摄像机动起来.md","filePath":"programming/3D/threejs让摄像机动起来.md"}'),t={name:"programming/3D/threejs让摄像机动起来.md"};function c(h,s,r,o,m,d){return e(),a("div",null,s[0]||(s[0]=[p(`<h3 id="threejs让摄像机动起来" tabindex="-1">threejs让摄像机动起来 <a class="header-anchor" href="#threejs让摄像机动起来" aria-label="Permalink to &quot;threejs让摄像机动起来&quot;">​</a></h3><p>在webGL中文网学习threejs基础篇——让物体动起来中的第一个demo</p><p>一、初入——直接使用课程中的例子</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    &lt;div id=&#39;demo3&#39; class=&#39;demo&#39;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>import * as THREE from &#39;three&#39;</span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>    data() {</span></span>
<span class="line"><span>        return {</span></span>
<span class="line"><span>            renderer:null,</span></span>
<span class="line"><span>            camera:null,</span></span>
<span class="line"><span>            scene:null,</span></span>
<span class="line"><span>            light:null,</span></span>
<span class="line"><span>            cube:null,</span></span>
<span class="line"><span>            width:0,</span></span>
<span class="line"><span>            heigh:0,</span></span>
<span class="line"><span>            r:800</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    methods: {</span></span>
<span class="line"><span>        initThree(){</span></span>
<span class="line"><span>            this.width=document.getElementById(&#39;demo3&#39;).clientWidth</span></span>
<span class="line"><span>            this.height=document.getElementById(&#39;demo3&#39;).clientHeight</span></span>
<span class="line"><span>            this.renderer=new THREE.WebGLRenderer({</span></span>
<span class="line"><span>                antialias:true</span></span>
<span class="line"><span>            })</span></span>
<span class="line"><span>            this.renderer.setSize(this.width,this.height)</span></span>
<span class="line"><span>            document.getElementById(&#39;demo3&#39;).appendChild(this.renderer.domElement)</span></span>
<span class="line"><span>            this.renderer.setClearColor(0xf5f5f5,1.0)</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        initCamera(){</span></span>
<span class="line"><span>            this.camera=new THREE.PerspectiveCamera(45,this.width/this.height,1,10000)</span></span>
<span class="line"><span>            this.camera.position.x=this.r</span></span>
<span class="line"><span>            this.camera.position.y=0</span></span>
<span class="line"><span>            this.camera.position.z=0</span></span>
<span class="line"><span>            this.camera.up.x=0</span></span>
<span class="line"><span>            this.camera.up.y=1</span></span>
<span class="line"><span>            this.camera.up.z=0</span></span>
<span class="line"><span>            this.camera.lookAt(0,0,0)</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        initScene(){</span></span>
<span class="line"><span>            this.scene=new THREE.Scene()</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        initLight(){</span></span>
<span class="line"><span>            this.light=new THREE.AmbientLight(0xffffff)</span></span>
<span class="line"><span>            this.light.position.set(100,100,200)</span></span>
<span class="line"><span>            this.scene.add(this.light)</span></span>
<span class="line"><span>            this.light=new THREE.PointLight(0x00ff00)</span></span>
<span class="line"><span>            this.light.position.set(0,0,300)</span></span>
<span class="line"><span>            this.scene.add(this.light)</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        initObject(){</span></span>
<span class="line"><span>            let geometry=new THREE.CylinderGeometry(100,150,400)</span></span>
<span class="line"><span>            let material=new THREE.MeshLambertMaterial({color:0x00f600})</span></span>
<span class="line"><span>            let mesh=new THREE.Mesh(geometry,material)</span></span>
<span class="line"><span>            //mesh.position=new THREE.Vector3( 0, 1, 0 );</span></span>
<span class="line"><span>            mesh.position.x=0</span></span>
<span class="line"><span>            mesh.position.y=0</span></span>
<span class="line"><span>            mesh.position.z=0</span></span>
<span class="line"><span>            this.scene.add(mesh)</span></span>
<span class="line"><span>            </span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        animations(){</span></span>
<span class="line"><span>            this.camera.position.x=this.camera.position.z+1</span></span>
<span class="line"><span>            this.renderer.render(this.scene,this.camera)</span></span>
<span class="line"><span>            requestAnimationFrame(this.animations)</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        threeStart(){</span></span>
<span class="line"><span>            this.initThree()</span></span>
<span class="line"><span>            this.initCamera()</span></span>
<span class="line"><span>            this.initScene()</span></span>
<span class="line"><span>            this.initLight()</span></span>
<span class="line"><span>            this.initObject()</span></span>
<span class="line"><span>            this.animations()</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    mounted() {</span></span>
<span class="line"><span>        this.threeStart()</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><p>我们现在结合图片来看下(ps:摄像机位置是800,0）</p><p><img src="`+i+`" alt="img"></p><p>这个demo实现物体运动是让摄像机运动沿着y轴运动，以此达到物体看起运动的效果。再次我就产生了一个想法，我能不能让摄像机盯着物体做圆周运动，然后让我们进入第二节</p><p>二、提升——摄像机做圆周运动 因为摄像机y轴不改变（即高度没改变），所以就是简单的二维几何问题，废话不多说，直接代码</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    &lt;div id=&#39;demo3&#39; class=&#39;demo&#39;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>import * as THREE from &#39;three&#39;</span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>    data() {</span></span>
<span class="line"><span>        return {</span></span>
<span class="line"><span>            renderer:null,</span></span>
<span class="line"><span>            camera:null,</span></span>
<span class="line"><span>            scene:null,</span></span>
<span class="line"><span>            light:null,</span></span>
<span class="line"><span>            cube:null,</span></span>
<span class="line"><span>            width:0,</span></span>
<span class="line"><span>            heigh:0,</span></span>
<span class="line"><span>            r:800,</span></span>
<span class="line"><span>            angle:0</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    methods: {</span></span>
<span class="line"><span>        initThree(){</span></span>
<span class="line"><span>            this.width=document.getElementById(&#39;demo3&#39;).clientWidth</span></span>
<span class="line"><span>            this.height=document.getElementById(&#39;demo3&#39;).clientHeight</span></span>
<span class="line"><span>            this.renderer=new THREE.WebGLRenderer({</span></span>
<span class="line"><span>                antialias:true</span></span>
<span class="line"><span>            })</span></span>
<span class="line"><span>            this.renderer.setSize(this.width,this.height)</span></span>
<span class="line"><span>            document.getElementById(&#39;demo3&#39;).appendChild(this.renderer.domElement)</span></span>
<span class="line"><span>            this.renderer.setClearColor(0xf5f5f5,1.0)</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        initCamera(){</span></span>
<span class="line"><span>            this.camera=new THREE.PerspectiveCamera(45,this.width/this.height,1,10000)</span></span>
<span class="line"><span>            this.camera.position.x=this.r</span></span>
<span class="line"><span>            this.camera.position.y=0</span></span>
<span class="line"><span>            this.camera.position.z=0</span></span>
<span class="line"><span>            this.camera.up.x=0</span></span>
<span class="line"><span>            this.camera.up.y=1</span></span>
<span class="line"><span>            this.camera.up.z=0</span></span>
<span class="line"><span>            this.camera.lookAt(0,0,0)</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        initScene(){</span></span>
<span class="line"><span>            this.scene=new THREE.Scene()</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        initLight(){</span></span>
<span class="line"><span>            this.light=new THREE.AmbientLight(0xffffff)</span></span>
<span class="line"><span>            this.light.position.set(100,100,200)</span></span>
<span class="line"><span>            this.scene.add(this.light)</span></span>
<span class="line"><span>            this.light=new THREE.PointLight(0x00ff00)</span></span>
<span class="line"><span>            this.light.position.set(0,0,300)</span></span>
<span class="line"><span>            this.scene.add(this.light)</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        initObject(){</span></span>
<span class="line"><span>            let geometry=new THREE.CylinderGeometry(100,150,400)</span></span>
<span class="line"><span>            let material=new THREE.MeshLambertMaterial({color:0x00f600})</span></span>
<span class="line"><span>            //mesh.position=new THREE.Vector3( 0, 1, 0 );</span></span>
<span class="line"><span>            mesh.position.x=0</span></span>
<span class="line"><span>            mesh.position.y=0</span></span>
<span class="line"><span>            mesh.position.z=0</span></span>
<span class="line"><span>            this.scene.add(mesh)</span></span>
<span class="line"><span>            </span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        animations(){</span></span>
<span class="line"><span>            this.angle++</span></span>
<span class="line"><span>            this.camera.position.x=this.r*Math.cos(this.angle*Math.PI/180)</span></span>
<span class="line"><span>            this.camera.position.z=this.r*Math.sin(this.angle*Math.PI/180)</span></span>
<span class="line"><span>            this.renderer.render(this.scene,this.camera)</span></span>
<span class="line"><span>            requestAnimationFrame(this.animations)</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        threeStart(){</span></span>
<span class="line"><span>            this.initThree()</span></span>
<span class="line"><span>            this.initCamera()</span></span>
<span class="line"><span>            this.initScene()</span></span>
<span class="line"><span>            this.initLight()</span></span>
<span class="line"><span>            this.initObject()</span></span>
<span class="line"><span>            this.animations()</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    mounted() {</span></span>
<span class="line"><span>        this.threeStart()</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><p>但是实际情况似乎和我预想似乎不大一样啊，怎么回事，为什么只有一小段时间有看得见物体。经过一番思考，我觉定多添加几个物体进行参考</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>initObject(){</span></span>
<span class="line"><span>            let geometry=new THREE.CylinderGeometry(100,150,400)</span></span>
<span class="line"><span>            let material=new THREE.MeshLambertMaterial({color:0x00f600})</span></span>
<span class="line"><span>            let pos=[[0,0,0],[-800,0,-800],[-800,1,800],[-1600,0,0]]</span></span>
<span class="line"><span>            for(var i=0;i&lt;4;i++){</span></span>
<span class="line"><span>            let mesh=new THREE.Mesh(geometry,material)</span></span>
<span class="line"><span>            //mesh.position=new THREE.Vector3( 0, 1, 0 );</span></span>
<span class="line"><span>            mesh.position.x=pos[i][0]</span></span>
<span class="line"><span>            mesh.position.y=pos[i][1]</span></span>
<span class="line"><span>            mesh.position.z=pos[i][2]</span></span>
<span class="line"><span>            this.scene.add(mesh)</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        },</span></span></code></pre></div><p>于是我增加了三个物体作为参照物，于是我确定了，原来是镜头没有改变（参考图）</p><p><img src="`+l+`" alt="img"></p><p>但我了解的是this.camera.lookAt(0,0,0)让摄像头看着原点啊，当我一筹莫展时，直觉驱使我增加了一行代码</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>animations(){</span></span>
<span class="line"><span>            this.angle++</span></span>
<span class="line"><span>            this.camera.position.x=this.r*Math.cos(this.angle*Math.PI/180)</span></span>
<span class="line"><span>            this.camera.position.z=this.r*Math.sin(this.angle*Math.PI/180)</span></span>
<span class="line"><span>            //每帧都重新设置lookAt可以达到摄像机围绕物体旋转</span></span>
<span class="line"><span>            this.camera.lookAt(0,0,0) // 重点</span></span>
<span class="line"><span>            this.renderer.render(this.scene,this.camera)</span></span>
<span class="line"><span>            requestAnimationFrame(this.animations)</span></span>
<span class="line"><span>        },</span></span></code></pre></div><p>运行后我豁然开朗，修改位置后我需要重新制定摄像中心点，来调整偏转角</p>`,16)]))}const u=n(t,[["render",c]]);export{E as __pageData,u as default};
