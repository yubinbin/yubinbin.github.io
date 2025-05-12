# web canvas中的字体模糊

网上有很多解决方法，原理都差不多，我是采用这个https://blog.csdn.net/weixin_34187822/article/details/93838104

这是我项目中直接就处理了，没有算ratio

```javascript
var cav = document.createElement('CANVAS');    
cav.width = 207 * 2;
cav.height = 200 * 2;
cav.style.width = 207 + "px";
cav.style.height = 200 + "px";
var ctx1 = cav.getContext("2d");
ctx1.scale(2,2);
```
--------

最近在使用 canvas 画图的时候，遇到了图像文字模糊的问题，解决思路就是根据分辨率创建不同尺寸的画布。以下是创建高分辨率画布的代码：

```javascript
/**
 * 创建高分辨率画布
 * @param w     画布宽
 * @param h     画布高
 * @param ratio 屏幕分辨率
 */
function createHiDPICanvas(w, h, ratio?) {
 
  const PIXEL_RATIO = (function () {
    const c = <HTMLCanvasElement>document.createElement("canvas"),
      ctx = c.getContext("2d"),
      dpr = window.devicePixelRatio || 1,
      bsr = ctx['webkitBackingStorePixelRatio'] ||
        ctx['mozBackingStorePixelRatio'] ||
        ctx['msBackingStorePixelRatio'] ||
        ctx['oBackingStorePixelRatio'] ||
        ctx['backingStorePixelRatio'] || 1;
 
    return dpr / bsr;
  })();
 
  if (!ratio) { ratio = PIXEL_RATIO; }
  const can = document.createElement("canvas");
  can.width = w * ratio;
  can.height = h * ratio;
  can.style.width = w + "px";
  can.style.height = h + "px";
  can.getContext("2d").setTransform(ratio, 0, 0, ratio, 0, 0);
  return can;
}
 
// 不创建高分辨率画布
const canvas = document.createElement("canvas");
canvas.width = 100;
canvas.height = 100;
 
// 创建使用默认分辨率的画布
const myCanvas = this.createHiDPICanvas(100, 100);
 
// 创建分辨率为 3 的画布
const myCustomCanvas = this.createHiDPICanvas(100, 100, 3);

```

最后，贴一个高分辨率画布的开源库

https://github.com/jondavidjohn/hidpi-canvas-polyfill