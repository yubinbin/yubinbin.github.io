### threejs选中模型描边

导入相关依赖

``` html
 <!-- 点击选中高亮 -->
<script src="./three/examples/js/shaders/CopyShader.js"></script>
<script src="./three/examples/js/postprocessing/EffectComposer.js"></script>
<script src="./three/examples/js/postprocessing/RenderPass.js"></script>
<script src="./three/examples/js/postprocessing/OutlinePass.js"></script>
<script src="./three/examples/js/postprocessing/ShaderPass.js"></script>
<script src="./three/examples/js/shaders/FXAAShader.js"></script>
```
---
1. EffectComposer: 效果组合器
2. RenderPass: 在指定的场景和相机的基础上渲染出一个新场景
3. OutlinePass: -物体边界线条
4. ShaderPass: 使用该通道你可以传入一个自定义的着色器，用来生成高级的、自定义的后期处理通道
5. FXAAShader: 着色器主要功能是解决锯齿问题
---

1. 初始化描边

``` js
 /**
 *  高亮选中的模型
 */
function addColor() {
    // 创建一个EffectComposer（效果组合器）对象，然后在该对象上添加后期处理通道。
    that.composer = new THREE.EffectComposer(that.renderer)
    // 新建一个场景通道  为了覆盖到原理来的场景上
    that.renderPass = new THREE.RenderPass(that.scene, that.camera)
    that.composer.addPass(that.renderPass);
    // 物体边缘发光通道
    that.outlinePass = new THREE.OutlinePass(new THREE.Vector2(window.innerWidth, window.innerHeight), that.scene, that.camera)
    // that.outlinePass.selectedObjects = selectedObjects
    that.outlinePass.edgeStrength = 20.0 // 边框的亮度
    that.outlinePass.edgeGlow = 1// 光晕[0,1]
    that.outlinePass.usePatternTexture = false // 是否使用父级的材质
    that.outlinePass.edgeThickness = 1.0 // 边框宽度
    that.outlinePass.downSampleRatio = 1 // 边框弯曲度
    that.outlinePass.pulsePeriod = 5 // 呼吸闪烁的速度
    that.outlinePass.visibleEdgeColor.set(parseInt(0xff0000)) // 呼吸显示的颜色
    that.outlinePass.hiddenEdgeColor = new THREE.Color(0, 0, 0) // 呼吸消失的颜色
    that.outlinePass.clear = true
    that.composer.addPass(that.outlinePass)
    // 自定义的着色器通道 作为参数
    var effectFXAA = new THREE.ShaderPass(THREE.FXAAShader)
    effectFXAA.uniforms.resolution.value.set(1 / window.innerWidth, 1 / window.innerHeight)
    effectFXAA.renderToScreen = true
    that.composer.addPass(effectFXAA)
}
```

2. 设置高亮的模型 一般为选择中模型 

```js
that.outlinePass.selectedObjects = intersects.map((intersect) => {
    return intersect.object;
})
```



---

```
/*
     import {RenderPass, EffectComposer, OutlinePass} from "three-outlinepass";
*/
function outline (selectedObjects, color = 0x15c5e8) {
    const [w, h] = [window.innerWidth, window.innerHeight];
    let compose = new EffectComposer(this.renderer);
    let renderPass = new RenderPass(this.scene, this.camera);
    let outlinePass = new OutlinePass(
        new THREE.Vector2(w, h),
        this.scene,
        this.camera,
        selectedObjects
    );
    outlinePass.renderToScreen = true;
    outlinePass.selectedObjects = selectedObjects;
    compose.addPass(renderPass);  // 过程链先处理renderPass,渲染场景，不然除了outline高亮轮廓，否则会失去其他所有mesh
    compose.addPass(outlinePass); // 渲染完原场景，处理outline管道
    const params = {
        edgeStrength: 3,
        edgeGlow: 0,
        edgeThickness: 20,
        pulsePeriod: 1,
        usePatternTexture: false
    };
    outlinePass.edgeStrength = params.edgeStrength;
    outlinePass.edgeGlow = params.edgeGlow;
    outlinePass.visibleEdgeColor.set(color);
    outlinePass.hiddenEdgeColor.set(color);
    compose.render(this.scene, this.camera);
    this.compose = compose
}
```