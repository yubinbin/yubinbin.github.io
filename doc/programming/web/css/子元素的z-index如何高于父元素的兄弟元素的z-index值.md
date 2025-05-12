### 子元素的z-index如何高于父元素的兄弟元素的z-index值

1. 文字描述如下：

有A、B两个同级div，A的z-index为888，B的z-index为999，A下有H，z-index为1000,但是发现H并没有在B的上层，不改变层次结构能否使H在B的上层？

2. 代码描述如下
``` html
<div class='A' style="background-color:rgba(0, 0, 0, 0.9);position: absolute;z-index: 888;">
    <h1 class='H' style="position: absolute;color: #fff;z-index: 1000;display: block;">
        This is a heading
    </h1>
</div>

<div class='B' style="position: absolute;height: 100%;width: 100%;background: #000;z-index: 999;"></div>
```
3. 可以改变任意样式，但是不能改变（A>H,B）的层次结构以及他们的z-index，如何使得H在B之上?

4. 划重点！！！！

仅不能改变（A>H,B）的层次结构以及他们的z-index，其他style随便，包括但不限于position、width，height随便改，随便加，随便减”
仅不能改变（A>H,B）的层次结构以及他们的z-index，其他style随便，包括但不限于position、width，height随便改，随便加，随便减”
仅不能改变（A>H,B）的层次结构以及他们的z-index，其他style随便，包括但不限于position、width，height随便改，随便加，随便减


根据规范，**z-index是应用到定位元素的，也就是position属性不为static的元素**（感谢@a_dust和@ymwangel），否则，设置z-index是没有意义的；

**z-index的作用有两点:**

一. 是设置在当前堆叠上下文(stacking context)中的层级；
二. 是创建一个新的堆叠上下文；

z-index并不是设置的值越高，就会越靠近用户，还和堆叠上下文有关系；

在同一个堆叠上下文中的元素，z-index越高越靠近用户；
在不同堆叠上下文中的元素，如果堆叠上下文一距离用户更近，那么它的所有子元素都在另一个堆叠上下文子元素的前面，也就是离用户更近，不同堆叠上下文中的子元素不可能发生交叉；

**所以，z-index其实不是一个绝对值，而是一个相对值；**

1. z-index 只有在 position 为 absolute | fixed | relative | sticky 时才生效.
2. 当父元素设置了 z-index 后，其子元素所设置的 z-index 都将在父元素内进行排列，这种情况下的子元素不会与父元素外部其他元素出现渲染层次交叉的情况

那我们不用z-index实现B>A不可以吗，定位的基础知识，当使用定位时，后写的盒子会覆盖前面的盒子，说白了就是同一层级先写A盒子再写B盒子，这时候B就是在A上面的，然后H给z-index就可以生效了，因为它是唯一一个

```html
<div class='A' style="background-color:rgba(0, 0, 0, 0.9);position: absolute">
    <h1 class='H' style="position: absolute;color: #fff;z-index: 1000;display: block;">
        This is a heading
    </h1>
</div>
<div class='B' style="position: absolute;height: 100%;width: 100%;background: #000"></div>
```
楼主的代码就把A、B的z-index删掉就实现了你的要求了啊