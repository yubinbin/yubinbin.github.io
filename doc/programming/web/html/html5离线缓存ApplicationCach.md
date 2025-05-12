### html5 离线缓存（Application Cache）

HTML5引入离线缓存（Application Cache），这意味着web应用可进行缓存，并可在没有因特网连接时进行访问。最根本的感觉是它使得WEB从online可以延伸到了offline领域。

#### 优势
离线浏览 - 用户可在应用离线时使用它们。
速度 - 已缓存资源加载得更快。
减少服务器负载 - 浏览器将只从服务器下载更新过或更改过的资源。
应用场景
h5游戏及一些页面内容不经常会变动、相对较为固定的内容。

#### 原理
HTML5的离线存储是基于一个manifest文件(缓存清单文件，后缀为.appcache)的缓存机制(不是存储技术)，通过这个文件上的清单解析离线存储资源，这些资源就会像cookie一样被存储了下来。之后当网络在处于离线状态时，浏览器会通过被离线存储的数据进行页面展示。

#### 如何使用？
首先在文档的html标签中设置manifest属性，引用manifest文件 。
然后配置manifest文件，在manifest文件中编写离线存储的资源。
最后操作window.applicationCache进行需求实现。
此外，必须要在服务器端正确的配置MIME-type。
接下来，用具体实例来看一下如何使用离线缓存。

demo文件夹目录如下：

step1:在文档的html标签中设置manifest属性，引用manifest文件 。

要将清单与网页关联，需将html 元素的 manifest 属性值设置为manifest文件名 。

manifest 属性可指向绝对网址或相对路径，但绝对网址必须与相应的网络应用同源。清单文件可使用任何文件扩展名，但必须以正确的 MIME 类型提供（参见下文），“.appcache"是官方推荐的文件扩展名。

demo.html代码如下：
```
<!DOCTYPE html>
<html lang="en" manifest="demo.appcache">
<head>
    <meta charset="UTF-8">
    <title>demo</title>
</head>
<body>
    <img src="img.jpg" height="500" width="900" alt="">
    其它内容...
</body>
</html>

```

<!DOCTYPE> 声明不是 HTML 标签；它是指示 web 浏览器关于页面使用哪个 HTML 版本进行编写的指令。

HTML5 <!DOCTYPE> 声明只有一种：

<!DOCTYPE html>

step2:配置manifest文件，在manifest文件中编写离线存储的资源。

manifest 文件是简单的文本文件，它告知浏览器被缓存的内容（以及不缓存的内容）。

manifest 文件可分为三个部分：

CACHE - 在此标题下列出的文件将在首次下载后进行缓存。
NETWORK- 在此标题下列出的文件需要与服务器连接，且不会被缓存。可以使用*，表示除CACHE 外的所有其他资源/文件都需要因特网连接。
FALLBACK- 在此标题下列出的文件规定当页面无法访问时的替代页面。
注意：CACHE MANIFEST写在第一行

demo.appcache代码如下：
```
CACHE MANIFEST
#version 1.0
CACHE：
    img.jpg
NETWORK:
    *
FALLBACK:
    /demo/ /404.html

```    
demo.appcache中的配置意为：

demo.html中的img在首次下载后进行缓存；其他文件内容都需要因特网连接；如果无法建立因特网连接，则用 "404.html" 替代/demo/目录中的所有文件。

step3.操作window.applicationCache进行需求实现。

window.applicationCache对象是对浏览器的应用缓存的编程访问方式。其status属性可用于查看缓存的当前状态。

status 属性值：

0（UNCACHED） :

无缓存， 即没有与页面相关的应用缓存。

1（IDLE） :

闲置，即应用缓存未得到更新。

2 （CHECKING） :

检查中，即正在下载描述文件并检查更新。

3 （DOWNLOADING） :

下载中，即应用缓存正在下载描述文件中指定的资源。

4 （UPDATEREADY） :

更新完成，所有资源都已下载完毕。

5 （IDLE） :

废弃，即应用缓存的描述文件已经不存在了，因此页面无法再访问应用缓存。

以下代码使用status属性为当前通过网页所加载的文档确定应用程序缓存的状态。
```
var oAppCache = window.applicationCache; 
var sCacheStatus = "Not supported";
switch (oAppCache.status) { 
    case 0: // UNCACHED == 0 
       sCacheStatus ='（UNCACHED） : 无缓存， 即没有与页面相关的应用缓存'; 
    break; 
    case 1: // IDLE == 1 
        sCacheStatus = '（IDLE） : 闲置，即应用缓存未得到更新'; 
    break; 
    case 2: // CHECKING == 2 
        sCacheStatus = '（CHECKING） : 检查中，即正在下载描述文件并检查更新'; 
    break; 
    case 3: // DOWNLOADING == 3 
        sCacheStatus ='（DOWNLOADING） : 下载中，即应用缓存正在下载描述文件'; 
    break; 
    case 4: // UPDATEREADY == 4 
        sCacheStatus ='（UPDATEREADY） : 更新完成，所有资源都已下载完毕';
    break; 
    case 5: // OBSOLETE == 5 
        sCacheStatus ='（IDLE） : 废弃，即应用缓存的描述文件已经不存在了，因此页面无法再访问应用缓存'); 
    break; 
    default: 
        console.log( 'UKNOWN CACHE STATUS'); 
    break; 
}; 
```

浏览器会对下载进度、应用缓存更新和错误状态等情况触发相应事件。

APPCACHE 事件 ：

checking :

每当应用程序载入的时候，都会检查该清单文件,也总会首先触发“checking”事件。

noupdate :

如果没有改动，同时应用程序也已经缓存了“noupdate”事件被触发，整个过程结束 。

downloading :

如果还未缓存应用程序，或者清单文件有改动,那么浏览器会下载并缓存清单中的所有资源 ,触发"downloading"事件，同时意味着下载过程开始。

progress：

在下载过程中会间断性触发“progress”事件，通常是在每个文件下载完毕的时候 。

cached :

下载完成并且首次将应用程序下载到缓存中时，浏览器会触发“cached“事件 。

updateready :

当下载完成并将缓存中的应用程序更新后，浏览器会触发”updateready ”事件。

error :

如果浏览器处于离线状态，检查清单列表失败，则会触发“error“事件，当一个未缓存的应用程序引用一个不存在的清单文件，也会触发此事件

obsolete :

如果一个缓存的应用程序引用一个不存在的清单文件，会触发“obsolete“，同时将应用从缓存中移除之后不会从缓存而是通过网络加载资源

以下代码段为每种缓存事件类型设置了事件监听器：
```
    function handleCacheEvent(e) { 
        对应操作...
    } 
    function handleCacheError(e) { 
       alert('Error: Cache failed to update!'); 
    }; 
    //在浏览器为应用缓存查找更新时触发
    oAppCache.addEventListener('checking', handleCacheEvent, false); 
    //在检查描述文件发现文件无变化时触发
    oAppCache.addEventListener('noupdate', handleCacheEvent, false); 
    // 在开始下载应用缓存资源时触发
    oAppCache.addEventListener('downloading', handleCacheEvent, false); 
    //在文件下载应用缓存的过程中持续不断地下载地触发
    oAppCache.addEventListener('progress', handleCacheEvent, false); 
    //在应用缓存完整可用时触发 
    oAppCache.addEventListener('cached', handleCacheEvent, false); 
    //在页面新的应用缓存下载完毕触发
    oAppCache.addEventListener('updateready', function(){
          oAppCache.swapCache();// 更新本地缓存
          location.reload();    //重新加载页面页面
        }, false); 
    //在检查更新或下载资源期间发送错误时触发
    oAppCache.addEventListener('error', handleCacheError, false); 
    //缓存清单不存在时触发
    oAppCache.addEventListener('obsolete', handleCacheEvent, false); 
```    
step4:在服务器端正确的配置MIME-type。

若遇到如此报错“Application Cache Error event: Manifest fetch failed (404)”,其原因是manifest文件需要正确的配置MIME-type（描述该消息的媒体类型），即“text/cache-manifest”，必须在服务器端进行配置。不同服务器配置方式不一样，举在tomcat服务器配置的例子。

在tomcat服务器中的conf/web.xml中添加：

```
<mime-mapping>
    <extension>manifest</extension>
    <mime-type>text/cache-manifest</mime-type>
</mime-mapping>
```

在开发者工具的Network面板下，可以看到img.jpg的Size为(from disk cache)，意味着是从缓存中读取的。




更新缓存
一旦应用被缓存，它就会保持缓存直到发生下列情况：

用户清空浏览器缓存。
manifest 文件被修改。
由程序来更新应用缓存。
由程序来更新应用缓存:
```
oAppCache.addEventListener('updateready', function(){
          oAppCache.swapCache();// 更新本地缓存
          location.reload();    //重新加载页面页面
        }, false); 
```

#### 注意事项
更新清单中列出的某个文件并不意味着浏览器会重新缓存该资源，清单文件本身必须进行更改。
浏览器对缓存数据的容量限制可能不太一样（某些浏览器设置的限制是每个站点5MB）。
如果manifest文件，或者内部列举的某一个文件不能正常下载，整个更新过程都将失败，浏览器继续全部使用老的缓存。
引用manifest的html必须与manifest文件同源，在同一个域下。FALLBACK中的资源必须和manifest文件同源。
浏览器会自动缓存引用manifest文件的HTML文件，这就导致如果改了HTML内容，也需要更新manifest 文件版本或者由程序来更新应用缓存才能做到更新。
与传统浏览器缓存区别
离线缓存是针对整个应用，浏览器缓存是单个文件。
离线缓存断网了还是可以打开页面，浏览器缓存不行。
离线缓存可以主动通知浏览器更新资源。