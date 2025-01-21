import{_ as n,c as a,a2 as p,o as e}from"./chunks/framework.CqbvlPrP.js";const l="/assets/img/program/3D/%E6%A8%A1%E5%9E%8B%E9%98%B4%E5%BD%B1.png",b=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"programming/3D/threejs实现一个3d场景中的阴影效果.md","filePath":"programming/3D/threejs实现一个3d场景中的阴影效果.md"}'),i={name:"programming/3D/threejs实现一个3d场景中的阴影效果.md"};function c(t,s,o,r,d,h){return e(),a("div",null,s[0]||(s[0]=[p(`<h3 id="threejs如何实现一个3d场景中的阴影效果" tabindex="-1">threejs如何实现一个3d场景中的阴影效果 <a class="header-anchor" href="#threejs如何实现一个3d场景中的阴影效果" aria-label="Permalink to &quot;threejs如何实现一个3d场景中的阴影效果&quot;">​</a></h3><p>跟OpenGL不同，在threejs中实现一个阴影效果很简单，只需要简单的几个设置。</p><p>在Three.js中，物体可以形成阴影投影效果，<strong>但是由于渲染阴影需要消耗计算机大量资源，所以Three.js在默认情况下是不会渲染阴影的</strong>，所以需要我手工设置开启阴影效果。</p><ol><li>renderer设置</li></ol><p>首先我们需要告诉renderer我们需要显示阴影效果：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//告诉渲染器需要阴影效果</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">renderer.shadowMap.enabled </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">renderer.shadowMap.type </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> THREE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.PCFSoftShadowMap;</span></span></code></pre></div><ol start="2"><li>光源设置</li></ol><p>其次需要设置正确的光源，光影，有光才有影。现实环境中，人们之所以能看得到物体，是因为有光，物体的材质反射光到人眼中。在ThreeJS中有几种光源，去模拟现实环境。</p><p><strong>最常见的四种为</strong>：</p><p>环境光( <code>AmbientLight</code> )：笼罩在整个空间无处不在的光</p><p>点光源( <code>PointLight</code> )：向四面八方发射的单点光源</p><p>聚光灯( <code>SpotLight</code> )：发射出锥形状的光， 模拟手电筒，台灯等光源</p><p>平行光( <code>DirectinalLight</code> )：平行的一束光，模拟从很远处照射的太阳光</p><p>环境光可以说是场景的整体基调，需要注意的是，<strong>由于环境光无处不在，也就是说它是没有方向的，当然不能产生阴影</strong>。而且，它也不能作为环境中唯一的光源。我们来看一下只有环境光的效果。</p><p>显然，只有环境光的场景是不真实的。环境光可以弱化阴影或者给场景添加一些颜色。<strong>而环境光又是必不可少的光源，如果没有环境光，整个3d场景就是一片漆黑（除了某些跟光照无关的材质可以显示）</strong>。</p><p>聚光灯( <code>SpotLight</code> )是产生阴影效果最常见的光源，能做出类似舞台的效果。平行光或者说方向光可以看成是另类的聚光灯，距离太远以至于光线基本平行了，就像太阳对于我们来说一样。它与聚光灯不同的一点是，它在任何地方的强度都是一样的。当然它也是可以产生阴影的。创建平行光的接口与环境光一致。实际使用过程中具体需要用到光源，怎么去布置光源，需要根据具体应用场景来定。</p><p>创建好光源之后，需要设置<code>castShadow</code>属性告诉光源开启阴影投射。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>//需要开启阴影投射</span></span>
<span class="line"><span>light.castShadow = true;</span></span></code></pre></div><p>可以在场景中添加多个不同的光源，同时显示不同方向的阴影效果。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>scene.add(new THREE.AmbientLight(0x444444));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>light = new THREE.SpotLight(0xffffff);</span></span>
<span class="line"><span>light.position.set(-60,30,0);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//需要开启阴影投射</span></span>
<span class="line"><span>light.castShadow = true;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>scene.add(light);</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>var directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );</span></span>
<span class="line"><span>directionalLight.position.set( 1, 1, 0 );</span></span>
<span class="line"><span>directionalLight.castShadow = true;</span></span>
<span class="line"><span>scene.add( directionalLight );</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>light = new THREE.PointLight( 0xffffff, 1, 100 );</span></span>
<span class="line"><span>light.position.set( 50, 50, 50 );</span></span>
<span class="line"><span>light.castShadow = true;</span></span>
<span class="line"><span>scene.add( light );</span></span></code></pre></div><p><img src="`+l+`" alt="图片"></p><ol start="3"><li>材质和模型设置 再次，添加不同材质的模型，设置属性使模型可以产生阴影效果。</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>//告诉立方体需要投射阴影</span></span>
<span class="line"><span>cube.castShadow = true;</span></span></code></pre></div><p><strong>模型的材质也要选择对灯光有反应的材质，否则也不会出现效果。</strong></p><h4 id="常用的网格材质有以下几种" tabindex="-1">常用的网格材质有以下几种： <a class="header-anchor" href="#常用的网格材质有以下几种" aria-label="Permalink to &quot;常用的网格材质有以下几种：&quot;">​</a></h4><p>基础网孔材料（<code>MeshBasicMaterial</code>）</p><p>一个以简单着色（平面或线框）方式来绘制几何形状的材料。该材料不受光照影响，没有光照也能着色。</p><p>默认将呈现为平面多边形。要把网孔绘制为线框，只需设置“线框（<code>wireframe</code>）”属性设置为true。</p><p>深度网孔材料（<code>MeshDepthMaterial</code>）</p><p>一种通过深度绘制几何体的材料。深度基于相机的远近平面。白色是最近的，黑色是最远的。</p><p>兰伯特网孔材料（<code>MeshLambertMaterial</code>）</p><p>一种非发光材料（兰伯特）的表面，计算每个顶点。</p><p>法向量网孔材料（<code>MeshNormalMaterial</code>）</p><p>一种把法向量映射到RGB颜色的材料。</p><p>基础网孔材料（<code>MeshStandardMaterial</code>）</p><p>我们添加不同材质的立方体模型到场景中，并设置好属性产生阴影。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>var cubeGeometry = new THREE.CubeGeometry(10,10,8);</span></span>
<span class="line"><span>var cubeMaterial = new THREE.MeshPhongMaterial({color:0x444fff});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);</span></span>
<span class="line"><span>cube.position.x = 25;</span></span>
<span class="line"><span>cube.position.y = 5;</span></span>
<span class="line"><span>cube.position.z = -5;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//告诉立方体需要投射阴影</span></span>
<span class="line"><span>cube.castShadow = true;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>scene.add(cube);</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>//立方体</span></span>
<span class="line"><span>cubeGeometry = new THREE.CubeGeometry(10,10,8);</span></span>
<span class="line"><span>cubeMaterial = new THREE.MeshBasicMaterial({color:0x444fff});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>cube = new THREE.Mesh(cubeGeometry, cubeMaterial);</span></span>
<span class="line"><span>cube.position.x = 15;</span></span>
<span class="line"><span>cube.position.y = 5;</span></span>
<span class="line"><span>cube.position.z = -25;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//告诉立方体需要投射阴影</span></span>
<span class="line"><span>cube.castShadow = true;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>scene.add(cube);</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>//立方体</span></span>
<span class="line"><span>cubeGeometry = new THREE.CubeGeometry(10,10,8);</span></span>
<span class="line"><span>cubeMaterial = new THREE.MeshDepthMaterial({color:0x444fff});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>cube = new THREE.Mesh(cubeGeometry, cubeMaterial);</span></span>
<span class="line"><span>cube.position.x = 15;</span></span>
<span class="line"><span>cube.position.y = 5;</span></span>
<span class="line"><span>cube.position.z = 25;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//告诉立方体需要投射阴影</span></span>
<span class="line"><span>cube.castShadow = true;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>scene.add(cube);</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //立方体</span></span>
<span class="line"><span>cubeGeometry = new THREE.CubeGeometry(10,10,8);</span></span>
<span class="line"><span>cubeMaterial = new THREE.MeshLambertMaterial({color:0x444fff});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>cube = new THREE.Mesh(cubeGeometry, cubeMaterial);</span></span>
<span class="line"><span>cube.position.x = -15;</span></span>
<span class="line"><span>cube.position.y = 5;</span></span>
<span class="line"><span>cube.position.z = 25;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//告诉立方体需要投射阴影</span></span>
<span class="line"><span>cube.castShadow = true;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>scene.add(cube);</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //立方体</span></span>
<span class="line"><span>cubeGeometry = new THREE.CubeGeometry(10,10,8);</span></span>
<span class="line"><span>cubeMaterial = new THREE.MeshStandardMaterial({color:0x444fff});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>cube = new THREE.Mesh(cubeGeometry, cubeMaterial);</span></span>
<span class="line"><span>cube.position.x = -15;</span></span>
<span class="line"><span>cube.position.y = 5;</span></span>
<span class="line"><span>cube.position.z = -25;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//告诉立方体需要投射阴影</span></span>
<span class="line"><span>cube.castShadow = true;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>scene.add(cube);</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //立方体</span></span>
<span class="line"><span>cubeGeometry = new THREE.CubeGeometry(10,10,8);</span></span>
<span class="line"><span>cubeMaterial = new THREE.MeshNormalMaterial({color:0x444fff});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>cube = new THREE.Mesh(cubeGeometry, cubeMaterial);</span></span>
<span class="line"><span>cube.position.x = -15;</span></span>
<span class="line"><span>cube.position.y = 5;</span></span>
<span class="line"><span>cube.position.z = -10;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//告诉立方体需要投射阴影</span></span>
<span class="line"><span>cube.castShadow = true;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>scene.add(cube);</span></span></code></pre></div><ol start="4"><li>创建底部平面接收阴影设置 最后，添加一个接收阴影的平面，通过receiveShadow属性设置平面接收阴影。</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>//平面</span></span>
<span class="line"><span>var planeGeometry = new THREE.PlaneGeometry(100,100);</span></span>
<span class="line"><span>var planeMaterial = new THREE.MeshStandardMaterial({color:0xcccccc});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var plane = new THREE.Mesh(planeGeometry, planeMaterial);</span></span>
<span class="line"><span>plane.rotation.x = - 0.5 * Math.PI;</span></span>
<span class="line"><span>plane.position.y = -0;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//设置平面需要接收阴影</span></span>
<span class="line"><span>plane.receiveShadow = true;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>scene.add(plane);</span></span></code></pre></div>`,39)]))}const g=n(i,[["render",c]]);export{b as __pageData,g as default};
