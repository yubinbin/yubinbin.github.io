### CSS文本超出隐藏，并显示省略号

可以使用
```css 
overflow:hidden;
```
来把超出的部分隐藏，

使用
``` css 
text-overflow:ellipsis;
```
当文本对象溢出是显示为省略号。

使用

```css
    white-space: nowrap;
```
当文本溢出时是否换行

**以下是可直接使用的代码：**

1. 超出一行，隐藏文本并显示省略号

``` css
/**超出一行省略号*/
overflow: hidden;
white-space: nowrap;
text-overflow: ellipsis;
```
2. 超出两行甚至多行，隐藏文本并显示省略号

```css
/**超出两行省略号*/
 text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
```