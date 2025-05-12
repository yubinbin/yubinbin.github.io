### 字体是Cascadia,下面是设置方法：

步骤一：下载字体

<!-- [github字体下载链接](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fmicrosoft%2Fcascadia-code%2Freleases) -->

<!-- [本地字体下载链接](http://localhost:3000/assets/img/program/%E5%BC%80%E5%8F%91%E5%B7%A5%E5%85%B7/CascadiaCode-2111.01.zip) -->

我用的是里面的

<!-- ![图片](/assets/img/program/%E5%BC%80%E5%8F%91%E5%B7%A5%E5%85%B7/vscode%E5%AD%97%E4%BD%93%E9%80%89%E6%8B%A9.awebp) -->

步骤二：把下载的字体放到电脑系统中
路径：控制面板 > 字体
步骤三：在vscode中使用
在setting.json中将配置项editor.fontFamily和editor.fontLigatures修改如下：

```
"editor.fontFamily": "'Cascadia Code',  Consolas, 'Courier New', monospace",   
"editor.fontLigatures": true,
```
