### Canvas中如何画一条清晰的线宽为奇数（如1px逻辑像素）的线

在开发中使用canvas的机会不是很多，但是第一次实际使用中就遇到了问题，“很久很久以前，我自己画了一个雷达图，线宽都是1像素,但是显示效果不如期望，这才发现canvas中的画线还是有坑的”，对比一下两个图，可以发现下图比较清晰。
Canvas中如何画一条清晰的线宽为奇数（如1px逻辑像素）的线?

![img](/assets/img/program/canvas/%E7%BA%BF%E5%AE%BD%E4%B8%BA1px/1.jpg)
 

![img](/assets/img/program/canvas/%E7%BA%BF%E5%AE%BD%E4%B8%BA1px/2.jpg)
 

我们先画一个线宽为1像素的线，代码和显示效果如下：
```
  const ctx = document.getElementById(canvas).getContext("2d");

  ctx.strokeStyle = "red";

  ctx.lineWidth =1;

  ctx.moveTo(50, 10);

  ctx.lineTo(200, 10);

  ctx.stroke();
```  

![img](/assets/img/program/canvas/%E7%BA%BF%E5%AE%BD%E4%B8%BA1px/3.jpg)
 

不对呀，这条线咋这么模糊，而且宽度貌似也不是1px

为了画这条线，浏览器首先到达初始起点(50，10)。这条线宽1px，所以两边各留0.5px。所以基本上初始起点是从(50，9.5)延伸到(50，10.5)。现在浏览器不能在屏幕上显示0.5像素——最小阈值是1像素。浏览器别无选择，只能将起点的边界延伸到屏幕上的实际像素边界。它会在两边再加0.5倍的“垃圾”。所以现在，最初的起点是从(50，9)扩展到(50，11)，所以看起来有2px宽。情况如下:

![img](/assets/img/program/canvas/%E7%BA%BF%E5%AE%BD%E4%B8%BA1px/4.jpg)

下面是真实的2px宽的线，作为对照，可以发现，上面的线宽确实占据了2px,只是边缘显示非常模糊

![img](/assets/img/program/canvas/%E7%BA%BF%E5%AE%BD%E4%B8%BA1px/5.jpg)

**那如何绘制1像素的线呢？本文总结了三种方法。**

1. **将划线起始点移动到x.5的位置**

既然1px宽的线是向两边各延伸0.5px,那如果我们的起点直接放在x.5的位置，向左右扩展则刚好占据1px,如下图所示：

修改代码
```
  ctx.moveTo(50, 10.5);

  ctx.lineTo(200, 10.5);
```

![img](/assets/img/program/canvas/%E7%BA%BF%E5%AE%BD%E4%B8%BA1px/6.jpg)

**上面的方法有个坏处是我们要修改现有的计算逻辑，时刻留意要多出0.5px**

2. **绘制上下文整体移动x.5**
这个方法的好处是不扰乱我们的设计尺寸和计算逻辑，操作也很简单，只需要正常画好线后，上下文整体移动。

```ctx.translate(0, 0.5);```


> 控制canvas元素大小与绘制上下文大小的比率

> canvas有两个尺寸，一个是元素本身的css尺寸，一个是绘上下文的尺寸（画布的尺寸），默认情况下，canvas的画布尺寸和元素尺寸都是300*150.比率为1.画布尺寸是通过直接在元素上添加width和height属性设置的，css尺寸则是通过css样式属性设置的，需要注意的是：

> 1.如果仅在元素上添加width和height属性来设置画布尺寸，实际表现则同时设置了画布尺寸和css尺寸为相同的大小;
> 2.如果仅设置了css尺寸，则画布尺寸还是默认的300*150,并不会改变;
> 3.如果同时设置了画布尺寸和css尺寸，浏览器会缩放画布尺寸来适应css尺寸;
 
3. **上面的第三条规则给我们画1px线宽提供了另一种方法**，具体方法是设置canvas的画布尺寸是css尺寸的两倍，这样我们只需要按照两倍的设计尺寸(2px)来画线，这样就不会存在占用半个像素导致模糊的问题，浏览器会自动压缩画布到它的一半大小，原来2px的线宽会压缩显示成1px。

``` html 

<canvas id="canvas5" width="600" height="300"> </canvas>
<canvas id="canvas6" width="600" height="300"> </canvas>

```

``` css

#canvas5 {
    width: 300px;
    height: 150px;
}

#canvas6 {
    transform-origin: top left;
    transform: scale(0.5);
}

```
如果想画出真实的物理1px的线，可以将画布尺寸继续放大widow.devicePixelRatio倍