import{_ as a,c as n,a2 as p,o as e}from"./chunks/framework.CqbvlPrP.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"programming/3D/使用物理引擎为三维场景增加物理效果2.md","filePath":"programming/3D/使用物理引擎为三维场景增加物理效果2.md"}'),l={name:"programming/3D/使用物理引擎为三维场景增加物理效果2.md"};function t(o,s,i,c,r,m){return e(),n("div",null,s[0]||(s[0]=[p(`<h3 id="使用物理引擎为三维场景增加物理效果-2" tabindex="-1">使用物理引擎为三维场景增加物理效果（2）== <a class="header-anchor" href="#使用物理引擎为三维场景增加物理效果-2" aria-label="Permalink to &quot;使用物理引擎为三维场景增加物理效果（2）==&quot;">​</a></h3><p>接下来我们增加更多的模型来丰富三维场景，<strong>我们可以设置mass属性为0，这意味着这个模型质量为0，会参与碰撞而自身位置不会产生变化。这样会形成类似于变化“地形”的效果。</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>pos.set( 0, 1.2, 0 );</span></span>
<span class="line"><span>quat.setFromAxisAngle( new THREE.Vector3( 0, 0, 1 ), 30 * Math.PI / 180 );</span></span>
<span class="line"><span>var obstacle = createParalellepiped( 10, 1, 4, 0, pos, quat, new THREE.MeshPhongMaterial( { color: 0x606060 } ) );</span></span>
<span class="line"><span>obstacle.castShadow = true;</span></span>
<span class="line"><span>obstacle.receiveShadow = true;</span></span></code></pre></div><p>接下来我们写个简单的循环，随机生成更多的三维模型。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>for (var i = 0; i &lt; 20; i++) {</span></span>
<span class="line"><span>    pos.set(Math.random() - 10, 2 * (i + 1), Math.random() + 10);</span></span>
<span class="line"><span>    quat.set(0, 0, 0, 1);</span></span>
<span class="line"><span>    createParallellepiped(1, 1, 1, 1, pos, quat, createRendomColorObjectMeatrial());</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>这里存在两类模型，刚体和柔体，会在物理引擎下运动，真实模拟一个物体在现实世界中受到力后的行为。</p><p>上面我们添加的模型都是刚体，<strong>刚体碰撞自身形状不会发生变化，而柔体会在受到外力的时候发生变形，产生类似气球的效果</strong>。</p><p>添加柔体模型：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>var boxGeometry = new THREE.BufferGeometry().fromGeometry( new THREE.BoxGeometry( 1, 1, 5, 4, 4, 20 ) );</span></span>
<span class="line"><span>boxGeometry.translate( -2, 5, 0 );</span></span>
<span class="line"><span>createSoftVolume( boxGeometry, volumeMass, 120 );</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>function createSoftVolume( bufferGeom, mass, pressure ) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>processGeometry( bufferGeom );</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var volume = new THREE.Mesh( bufferGeom, new THREE.MeshPhongMaterial( { color: 0xFFFFFF } ) );</span></span>
<span class="line"><span>volume.castShadow = true;</span></span>
<span class="line"><span>volume.receiveShadow = true;</span></span>
<span class="line"><span>volume.frustumCulled = false;</span></span>
<span class="line"><span>scene.add( volume );</span></span>
<span class="line"><span></span></span>
<span class="line"><span>textureLoader.load( &quot;textures/colors.png&quot;, function( texture ) {</span></span>
<span class="line"><span>    volume.material.map = texture;</span></span>
<span class="line"><span>    volume.material.needsUpdate = true;</span></span>
<span class="line"><span>} );</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Volume physic object</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var volumeSoftBody = softBodyHelpers.CreateFromTriMesh(</span></span>
<span class="line"><span>    physicsWorld.getWorldInfo(),</span></span>
<span class="line"><span>    bufferGeom.ammoVertices,</span></span>
<span class="line"><span>    bufferGeom.ammoIndices,</span></span>
<span class="line"><span>    bufferGeom.ammoIndices.length / 3,</span></span>
<span class="line"><span>    true );</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var sbConfig = volumeSoftBody.get_m_cfg();</span></span>
<span class="line"><span>sbConfig.set_viterations( 40 );</span></span>
<span class="line"><span>sbConfig.set_piterations( 40 );</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Soft-soft and soft-rigid collisions</span></span>
<span class="line"><span>sbConfig.set_collisions( 0x11 );</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Friction</span></span>
<span class="line"><span>sbConfig.set_kDF( 0.1 );</span></span>
<span class="line"><span>// Damping</span></span>
<span class="line"><span>sbConfig.set_kDP( 0.01 );</span></span>
<span class="line"><span>// Pressure</span></span>
<span class="line"><span>sbConfig.set_kPR( pressure );</span></span>
<span class="line"><span>// Stiffness</span></span>
<span class="line"><span>volumeSoftBody.get_m_materials().at( 0 ).set_m_kLST( 0.9 );</span></span>
<span class="line"><span>volumeSoftBody.get_m_materials().at( 0 ).set_m_kAST( 0.9 );</span></span>
<span class="line"><span></span></span>
<span class="line"><span>volumeSoftBody.setTotalMass( mass, false )</span></span>
<span class="line"><span>Ammo.castObject( volumeSoftBody, Ammo.btCollisionObject ).getCollisionShape().setMargin( margin );</span></span>
<span class="line"><span>physicsWorld.addSoftBody( volumeSoftBody, 1, -1 );</span></span>
<span class="line"><span>volume.userData.physicsBody = volumeSoftBody;</span></span>
<span class="line"><span>// Disable deactivation</span></span>
<span class="line"><span>volumeSoftBody.setActivationState( 4 );</span></span>
<span class="line"><span></span></span>
<span class="line"><span>softBodies.push( volume );</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre></div>`,10)]))}const f=a(l,[["render",t]]);export{u as __pageData,f as default};
