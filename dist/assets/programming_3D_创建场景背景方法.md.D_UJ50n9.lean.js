import{_ as a,c as n,a2 as p,o as e}from"./chunks/framework.CqbvlPrP.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"programming/3D/创建场景背景方法.md","filePath":"programming/3D/创建场景背景方法.md"}'),t={name:"programming/3D/创建场景背景方法.md"};function l(i,s,o,c,r,d){return e(),n("div",null,s[0]||(s[0]=[p(`<h3 id="这里创建背景有3种办法-各有优劣。" tabindex="-1">这里创建背景有3种办法，各有优劣。 <a class="header-anchor" href="#这里创建背景有3种办法-各有优劣。" aria-label="Permalink to &quot;这里创建背景有3种办法，各有优劣。&quot;">​</a></h3><ol><li>直接加载一张贴图作为场景的background。</li></ol><p>优点：十分简单易于使用。 缺点：始终是一张平行与屏幕的平面，无法随鼠标移动拖拽而变换。</p><p>//创建宇宙背景</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>    createUniverse() {</span></span>
<span class="line"><span>      let texture = new THREE.TextureLoader().load(BgImg); //加载背景贴图</span></span>
<span class="line"><span>      this.scene.background = texture; //设置场景背景</span></span>
<span class="line"><span>    },</span></span></code></pre></div><ol start="2"><li>使用天空盒子，加载CubeTextureLoader纹理，再将该纹理设为场景的background。</li></ol><p>优点：可随鼠标移动拖拽而变换。 缺点：需要特制的六张天空盒子贴图，贴图不吻合时，立方体空间边缘会出现明显割裂感，视角两侧贴图会被拉伸。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import right from &quot;@/assets/img/space1/right.jpg&quot;;</span></span>
<span class="line"><span>import left from &quot;@/assets/img/space1/left.jpg&quot;;</span></span>
<span class="line"><span>import top from &quot;@/assets/img/space1/top.jpg&quot;;</span></span>
<span class="line"><span>import bottom from &quot;@/assets/img/space1/bottom.jpg&quot;;</span></span>
<span class="line"><span>import front from &quot;@/assets/img/space1/front.jpg&quot;;</span></span>
<span class="line"><span>import back from &quot;@/assets/img/space1/back.jpg&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //创建天空盒子</span></span>
<span class="line"><span>    createSkyBox() {</span></span>
<span class="line"><span>      //加载天空盒子纹理</span></span>
<span class="line"><span>      let cubeTexture = new THREE.CubeTextureLoader().load([</span></span>
<span class="line"><span>        right,</span></span>
<span class="line"><span>        left,</span></span>
<span class="line"><span>        top,</span></span>
<span class="line"><span>        bottom,</span></span>
<span class="line"><span>        front,</span></span>
<span class="line"><span>        back,</span></span>
<span class="line"><span>      ]);</span></span>
<span class="line"><span>      this.scene.background = cubeTexture; //设置场景背景</span></span>
<span class="line"><span>    },</span></span></code></pre></div><ol start="3"><li>创建一个较大的球体，将场景内的物体全部放入球体内部，此思路也是全景图原理，在vr看房项目中大多能遇见。 优点：可随鼠标移动拖拽而变换，由于球心距球壳距离相等，不会出现视角两侧贴图拉伸。 缺点：需要调节球体半径到合适的尺度，保证空间相机在球体内部，否则空间会出现黑块。需要保证贴图为360全景图。否则球壳拼接边缘会出现明显空间割裂。</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>    //创建全景背景</span></span>
<span class="line"><span>    createPanoramicBj() {</span></span>
<span class="line"><span>      let geometry = new THREE.SphereGeometry(10000, 100, 100); //几何体</span></span>
<span class="line"><span>      let material = new THREE.MeshBasicMaterial({</span></span>
<span class="line"><span>        map: new THREE.TextureLoader().load(panoramicImg), //导入图片纹理</span></span>
<span class="line"><span>        color: 0xffffff,</span></span>
<span class="line"><span>        //材质背面显示</span></span>
<span class="line"><span>        side: THREE.BackSide,</span></span>
<span class="line"><span>      });</span></span>
<span class="line"><span>      let mesh = new THREE.Mesh(geometry, material);</span></span>
<span class="line"><span>      this.scene.add(mesh);</span></span>
<span class="line"><span>    },</span></span></code></pre></div>`,10)]))}const g=a(t,[["render",l]]);export{u as __pageData,g as default};
