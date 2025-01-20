import{_ as n,c as a,a2 as p,o as e}from"./chunks/framework.CqbvlPrP.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"programming/3D/使用物理引擎为三维场景增加物理效果1.md","filePath":"programming/3D/使用物理引擎为三维场景增加物理效果1.md"}'),l={name:"programming/3D/使用物理引擎为三维场景增加物理效果1.md"};function i(t,s,o,c,r,d){return e(),a("div",null,s[0]||(s[0]=[p(`<h3 id="使用物理引擎为三维场景增加物理效果" tabindex="-1">使用物理引擎为三维场景增加物理效果 <a class="header-anchor" href="#使用物理引擎为三维场景增加物理效果" aria-label="Permalink to &quot;使用物理引擎为三维场景增加物理效果&quot;">​</a></h3><p>在threejs中使用<code>Ammo.js</code>来实现物理效果，Ammo.js 使用Emscripten将 Bullet物理引擎 直接移植到JavaScript。源代码被直接翻译成JavaScript，未进行人工重写，因此功能与原始项目相同。</p><p>Bullet Physics是一个开源的物理模拟引擎，世界三大物理引擎之一,功能强大。</p><p>三维场景中的对象只需要用特定的Physijs对象封装一下便可以在场景中展现物理效果(重力、碰撞检测等)。</p><p>第一步：需要引入Ammo库</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;script src=&quot;js/libs/ammo.js&quot;&gt;&lt;/script&gt;</span></span></code></pre></div><p>第二步：创建物理引擎对象</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>var collisionConfiguration = new Ammo.btSoftBodyRigidBodyCollisionConfiguration();</span></span>
<span class="line"><span>var dispatcher = new Ammo.btCollisionDispatcher( collisionConfiguration );</span></span>
<span class="line"><span>var broadphase = new Ammo.btDbvtBroadphase();</span></span>
<span class="line"><span>var solver = new Ammo.btSequentialImpulseConstraintSolver();</span></span>
<span class="line"><span>var softBodySolver = new Ammo.btDefaultSoftBodySolver();</span></span>
<span class="line"><span>physicsWorld = new Ammo.btSoftRigidDynamicsWorld( dispatcher, broadphase, solver, collisionConfiguration, softBodySolver);</span></span>
<span class="line"><span>physicsWorld.setGravity( new Ammo.btVector3( 0, gravityConstant, 0 ) );</span></span>
<span class="line"><span>physicsWorld.getWorldInfo().set_m_gravity( new Ammo.btVector3( 0, gravityConstant, 0 ) );</span></span></code></pre></div><p>第三步、创建一个不能移动的地面</p><p>物理引擎加载场景之后，加载的物体都有默认的向Y轴负方向大小为10的加速度，可以通过setGravity 设置。通过设置mass 为 0 可以添加一个静止的地面。这里mass可以理解为物体的质量，为0物体静止不动，默认值为1，设置为一个很小的小数如0.01则表示一个很轻的物体，比如被撞一下就可以撞飞了。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>pos.set( 0, - 0.5, 0 );</span></span>
<span class="line"><span>quat.set( 0, 0, 0, 1 );</span></span>
<span class="line"><span>var ground = createParalellepiped( 40, 1, 40, 0, pos, quat, new THREE.MeshPhongMaterial( { color: 0xFFFFFF } ) );</span></span>
<span class="line"><span>ground.castShadow = true;</span></span>
<span class="line"><span>ground.receiveShadow = true;</span></span>
<span class="line"><span>textureLoader.load( &quot;textures/grid.png&quot;, function( texture ) {</span></span>
<span class="line"><span>    texture.wrapS = THREE.RepeatWrapping;</span></span>
<span class="line"><span>    texture.wrapT = THREE.RepeatWrapping;</span></span>
<span class="line"><span>    texture.repeat.set( 80, 80 );</span></span>
<span class="line"><span>    ground.material.map = texture;</span></span>
<span class="line"><span>    ground.material.needsUpdate = true;</span></span>
<span class="line"><span>} );</span></span>
<span class="line"><span>function createParalellepiped( sx, sy, sz, mass, pos, quat, material ) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var threeObject = new THREE.Mesh( new THREE.BoxGeometry( sx, sy, sz, 1, 1, 1 ), material );</span></span>
<span class="line"><span>var shape = new Ammo.btBoxShape( new Ammo.btVector3( sx * 0.5, sy * 0.5, sz * 0.5 ) );</span></span>
<span class="line"><span>shape.setMargin( margin );</span></span>
<span class="line"><span></span></span>
<span class="line"><span>createRigidBody( threeObject, shape, mass, pos, quat );</span></span>
<span class="line"><span></span></span>
<span class="line"><span>return threeObject;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>function createRigidBody( threeObject, physicsShape, mass, pos, quat ) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>threeObject.position.copy( pos );</span></span>
<span class="line"><span>threeObject.quaternion.copy( quat );</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var transform = new Ammo.btTransform();</span></span>
<span class="line"><span>transform.setIdentity();</span></span>
<span class="line"><span>transform.setOrigin( new Ammo.btVector3( pos.x, pos.y, pos.z ) );</span></span>
<span class="line"><span>transform.setRotation( new Ammo.btQuaternion( quat.x, quat.y, quat.z, quat.w ) );</span></span>
<span class="line"><span>var motionState = new Ammo.btDefaultMotionState( transform );</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var localInertia = new Ammo.btVector3( 0, 0, 0 );</span></span>
<span class="line"><span>physicsShape.calculateLocalInertia( mass, localInertia );</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var rbInfo = new Ammo.btRigidBodyConstructionInfo( mass, motionState, physicsShape, localInertia );</span></span>
<span class="line"><span>var body = new Ammo.btRigidBody( rbInfo );</span></span>
<span class="line"><span></span></span>
<span class="line"><span>threeObject.userData.physicsBody = body;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>scene.add( threeObject );</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if ( mass &gt; 0 ) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    rigidBodies.push( threeObject );</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // Disable deactivation</span></span>
<span class="line"><span>    body.setActivationState( 4 );</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>physicsWorld.addRigidBody( body );</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return body;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>第四步、添加鼠标事件，鼠标点击生成一个球体，滚向地面。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>raycaster.setFromCamera( mouseCoords, camera );</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Creates a ball</span></span>
<span class="line"><span>var ballMass = 3;</span></span>
<span class="line"><span>var ballRadius = 0.4;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var ball = new THREE.Mesh( new THREE.SphereGeometry( ballRadius, 18, 16 ), createRendomColorObjectMeatrial() );</span></span>
<span class="line"><span>ball.castShadow = true;</span></span>
<span class="line"><span>ball.receiveShadow = true;</span></span>
<span class="line"><span>var ballShape = new Ammo.btSphereShape( ballRadius );</span></span>
<span class="line"><span>ballShape.setMargin( margin );</span></span>
<span class="line"><span>pos.copy( raycaster.ray.direction );</span></span>
<span class="line"><span>pos.add( raycaster.ray.origin );</span></span>
<span class="line"><span>quat.set( 0, 0, 0, 1 );</span></span>
<span class="line"><span>var ballBody = createRigidBody( ball, ballShape, ballMass, pos, quat );</span></span>
<span class="line"><span>ballBody.setFriction( 0.5 );</span></span>
<span class="line"><span></span></span>
<span class="line"><span>pos.copy( raycaster.ray.direction );</span></span>
<span class="line"><span>pos.multiplyScalar( 14 );</span></span>
<span class="line"><span>ballBody.setLinearVelocity( new Ammo.btVector3( pos.x, pos.y, pos.z ) );</span></span>
<span class="line"><span></span></span>
<span class="line"><span>clickRequest = false;</span></span></code></pre></div><p>第五步、更新模型</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>function animate() {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>requestAnimationFrame( animate );</span></span>
<span class="line"><span></span></span>
<span class="line"><span>render();</span></span>
<span class="line"><span>stats.update();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function render() {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var deltaTime = clock.getDelta();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>updatePhysics( deltaTime );</span></span>
<span class="line"><span></span></span>
<span class="line"><span>processClick();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>renderer.render( scene, camera );</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function updatePhysics( deltaTime ) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Step world</span></span>
<span class="line"><span>physicsWorld.stepSimulation( deltaTime, 10 );</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Update soft volumes</span></span>
<span class="line"><span>for ( var i = 0, il = softBodies.length; i &lt; il; i++ ) {</span></span>
<span class="line"><span>    var volume = softBodies[ i ];</span></span>
<span class="line"><span>    var geometry = volume.geometry;</span></span>
<span class="line"><span>    var softBody = volume.userData.physicsBody;</span></span>
<span class="line"><span>    var volumePositions = geometry.attributes.position.array;</span></span>
<span class="line"><span>    var volumeNormals = geometry.attributes.normal.array;</span></span>
<span class="line"><span>    var association = geometry.ammoIndexAssociation;</span></span>
<span class="line"><span>    var numVerts = association.length;</span></span>
<span class="line"><span>    var nodes = softBody.get_m_nodes();</span></span>
<span class="line"><span>    for ( var j = 0; j &lt; numVerts; j ++ ) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    var node = nodes.at( j );</span></span>
<span class="line"><span>    var nodePos = node.get_m_x();</span></span>
<span class="line"><span>    var x = nodePos.x();</span></span>
<span class="line"><span>    var y = nodePos.y();</span></span>
<span class="line"><span>    var z = nodePos.z();</span></span>
<span class="line"><span>    var nodeNormal = node.get_m_n();</span></span>
<span class="line"><span>    var nx = nodeNormal.x();</span></span>
<span class="line"><span>    var ny = nodeNormal.y();</span></span>
<span class="line"><span>    var nz = nodeNormal.z();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    var assocVertex = association[ j ];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    for ( var k = 0, kl = assocVertex.length; k &lt; kl; k++ ) {</span></span>
<span class="line"><span>        var indexVertex = assocVertex[ k ];</span></span>
<span class="line"><span>        volumePositions[ indexVertex ] = x;</span></span>
<span class="line"><span>        volumeNormals[ indexVertex ] = nx;</span></span>
<span class="line"><span>        indexVertex++;</span></span>
<span class="line"><span>        volumePositions[ indexVertex ] = y;</span></span>
<span class="line"><span>        volumeNormals[ indexVertex ] = ny;</span></span>
<span class="line"><span>        indexVertex++;</span></span>
<span class="line"><span>        volumePositions[ indexVertex ] = z;</span></span>
<span class="line"><span>        volumeNormals[ indexVertex ] = nz;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    geometry.attributes.position.needsUpdate = true;</span></span>
<span class="line"><span>    geometry.attributes.normal.needsUpdate = true;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Update rigid bodies</span></span>
<span class="line"><span>for ( var i = 0, il = rigidBodies.length; i &lt; il; i++ ) {</span></span>
<span class="line"><span>    var objThree = rigidBodies[ i ];</span></span>
<span class="line"><span>    var objPhys = objThree.userData.physicsBody;</span></span>
<span class="line"><span>    var ms = objPhys.getMotionState();</span></span>
<span class="line"><span>    if ( ms ) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    ms.getWorldTransform( transformAux1 );</span></span>
<span class="line"><span>    var p = transformAux1.getOrigin();</span></span>
<span class="line"><span>    var q = transformAux1.getRotation();</span></span>
<span class="line"><span>    objThree.position.set( p.x(), p.y(), p.z() );</span></span>
<span class="line"><span>    objThree.quaternion.set( q.x(), q.y(), q.z(), q.w() );</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre></div>`,15)]))}const h=n(l,[["render",i]]);export{u as __pageData,h as default};
