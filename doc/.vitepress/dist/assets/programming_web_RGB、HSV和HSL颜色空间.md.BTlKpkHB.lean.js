import{_ as a,c as n,a2 as p,o as e}from"./chunks/framework.CqbvlPrP.js";const i="/assets/img/program/rgba/HSV.jpg",l="/assets/img/program/rgba/2.webp",r="/assets/img/program/rgba/3.jpg",c="/assets/img/program/rgba/4.jpg",t="/assets/img/program/rgba/5.webp",o="/assets/img/program/rgba/6.jpg",m="/assets/img/program/rgba/7.jpg",g="/assets/img/program/rgba/8.webp",v="/assets/img/program/rgba/9.jpg",_="/assets/img/program/rgba/10.jpg",R=JSON.parse('{"title":"三分钟带你快速学习RGB、HSV和HSL颜色空间","description":"","frontmatter":{},"headers":[],"relativePath":"programming/web/RGB、HSV和HSL颜色空间.md","filePath":"programming/web/RGB、HSV和HSL颜色空间.md"}'),d={name:"programming/web/RGB、HSV和HSL颜色空间.md"};function h(H,s,S,u,b,V){return e(),n("div",null,s[0]||(s[0]=[p('<h1 id="三分钟带你快速学习rgb、hsv和hsl颜色空间" tabindex="-1">三分钟带你快速学习RGB、HSV和HSL颜色空间 <a class="header-anchor" href="#三分钟带你快速学习rgb、hsv和hsl颜色空间" aria-label="Permalink to &quot;三分钟带你快速学习RGB、HSV和HSL颜色空间&quot;">​</a></h1><p>在平时工作中，你可能会遇到需要使用不同颜色空间的情况，但是它们到底有什么区别，分别针对什么场景去使用，这篇文章能给你答案，一定要看到最后，保证能让你了如指掌。</p><p>目录：</p><p>RGB 的局限性 HSV 颜色空间 HSL 颜色空间 HSV 应用例子 使用 HSV 图像分割</p><p>RGB 的局限性 RGB 是我们接触最多的颜色空间，由三个通道表示一幅图像，分别为红色(R)，绿色(G)和蓝色(B)。这三种颜色的不同组合可以形成几乎所有的其他颜色。</p><p>RGB 颜色空间是图像处理中最基本、最常用、面向硬件的颜色空间，比较容易理解。</p><p>RGB 颜色空间利用三个颜色分量的线性组合来表示颜色，任何颜色都与这三个分量有关，而且这三个分量是高度相关的，所以连续变换颜色时并不直观，想对图像的颜色进行调整需要更改这三个分量才行。</p><p>自然环境下获取的图像容易受自然光照、遮挡和阴影等情况的影响，即对亮度比较敏感。而 RGB 颜色空间的三个分量都与亮度密切相关，即只要亮度改变，三个分量都会随之相应地改变，而没有一种更直观的方式来表达。</p><p>但是人眼对于这三种颜色分量的敏感程度是不一样的，在单色中，人眼对红色最不敏感，蓝色最敏感，所以 RGB 颜色空间是一种均匀性较差的颜色空间。如果颜色的相似性直接用欧氏距离来度量，其结果与人眼视觉会有较大的偏差。对于某一种颜色，我们很难推测出较为精确的三个分量数值来表示。</p><p>所以，RGB 颜色空间适合于显示系统，却并不适合于图像处理。</p><p>HSV 颜色空间 基于上述理由，在图像处理中使用较多的是 HSV 颜色空间，它比 RGB 更接近人们对彩色的感知经验。非常直观地表达颜色的色调、鲜艳程度和明暗程度，方便进行颜色的对比。</p><p>在 HSV 颜色空间下，比 BGR 更容易跟踪某种颜色的物体，常用于分割指定颜色的物体。</p><p>HSV 表达彩色图像的方式由三个部分组成：</p><p>Hue（色调、色相） Saturation（饱和度、色彩纯净度） Value（明度）</p><p>用下面这个圆柱体来表示 HSV 颜色空间，圆柱体的横截面可以看做是一个极坐标系 ，H 用极坐标的极角表示，S 用极坐标的极轴长度表示，V 用圆柱中轴的高度表示。</p><p><img src="'+i+'" alt="img"></p><p>Hue 用角度度量，取值范围为0～360°，表示色彩信息，即所处的光谱颜色的位置。，表示如下：</p><p><img src="'+l+'" alt="img"></p><p>颜色圆环上所有的颜色都是光谱上的颜色，从红色开始按逆时针方向旋转，Hue=0 表示红色，Hue=120 表示绿色，Hue=240 表示蓝色等等。</p><p>在 GRB中 颜色由三个值共同决定，比如黄色为即 (255,255,0)；在HSV中，黄色只由一个值决定，Hue=60即可。</p><p>HSV 圆柱体的半边横截面（Hue=60）：</p><p><img src="'+r+'" alt="img"></p><p>其中水平方向表示饱和度，饱和度表示颜色接近光谱色的程度。饱和度越高，说明颜色越深，越接近光谱色饱和度越低，说明颜色越浅，越接近白色。饱和度为0表示纯白色。取值范围为0～100%，值越大，颜色越饱和。</p><p>竖直方向表示明度，决定颜色空间中颜色的明暗程度，明度越高，表示颜色越明亮，范围是 0-100%。明度为0表示纯黑色（此时颜色最暗）。</p><p>可以通俗理解为：</p><p>在Hue一定的情况下，饱和度减小，就是往光谱色中添加白色，光谱色所占的比例也在减小，饱和度减为0，表示光谱色所占的比例为零，导致整个颜色呈现白色。</p><p>明度减小，就是往光谱色中添加黑色，光谱色所占的比例也在减小，明度减为0，表示光谱色所占的比例为零，导致整个颜色呈现黑色。</p><p>HSV 对用户来说是一种比较直观的颜色模型。我们可以很轻松地得到单一颜色，即指定颜色角H，并让V=S=1，然后通过向其中加入黑色和白色来得到我们需要的颜色。增加黑色可以减小V而S不变，同样增加白色可以减小S而V不变。例如，要得到深蓝色，V=0.4 S=1 H=240度。要得到浅蓝色，V=1 S=0.4 H=240度。</p><p>HSV 的拉伸对比度增强就是对 S 和 V 两个分量进行归一化(min-max normalize)即可，H 保持不变。</p><p>RGB颜色空间更加面向于工业，而HSV更加面向于用户，大多数做图像识别这一块的都会运用HSV颜色空间，因为HSV颜色空间表达起来更加直观！</p><p>HLS 颜色空间 HLS 和 HSV 比较类似，这里一起介绍。HLS 也有三个分量，hue（色相）、saturation（饱和度）、lightness（亮度）。</p><p>HLS 和 HSV 的区别就是最后一个分量不同，HLS 的是 light(亮度)，HSV 的是 value(明度)。可以到这个 网页 尝试一下。</p><p>HLS 中的 L 分量为亮度，亮度为100，表示白色，亮度为0，表示黑色；HSV 中的 V 分量为明度，明度为100，表示光谱色，明度为0，表示黑色。</p><p>下面是 HLS 颜色空间圆柱体：</p><p><img src="'+c+`" alt="img"></p><p>提取白色物体时，使用 HLS 更方便，因为 HSV 中的Hue里没有白色，白色需要由S和V共同决定（S=0, V=100）。而在 HLS 中，白色仅由亮度L一个分量决定。所以检测白色时使用 HSL 颜色空间更准确。</p><p>将上面这个 HLS 颜色空间图用来测试：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>img = cv2.imread(&quot;hls.jpg&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Convert BGR to HLS</span></span>
<span class="line"><span>imgHLS = cv2.cvtColor(img, cv2.COLOR_BGR2HLS)</span></span>
<span class="line"><span></span></span>
<span class="line"><span># range of white color in L channel</span></span>
<span class="line"><span># mask = cv2.inRange(imgHLS[:,:,1], lowerb=250, upperb=255)</span></span>
<span class="line"><span>mask = cv2.inRange(imgHLS, np.array([0,250,0]), np.array([255,255,255]))</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Apply Mask to original image</span></span>
<span class="line"><span>white_mask = cv2.bitwise_and(img, img, mask=mask)</span></span></code></pre></div><p><img src="`+t+`" alt="img"></p><p>注意：在 OpenCV 中 HLS 三个分量的范围为：</p><p>H = [0,179] L = [0,255] S = [0,255]</p><p>HSV 应用例子 注意：在 OpenCV 中 HSV 三个分量的范围为：</p><p>H = [0,179] S = [0,255] V = [0,255]</p><p>获取要跟踪物体颜色的HSV值：</p><p>对一个BGR值进行颜色空间转换，得到HSV值。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&gt;&gt;&gt; blue = np.uint8([[[255,0,0]]])</span></span>
<span class="line"><span>&gt;&gt;&gt; hsv_blue = cv2.cvtColor(blue, cv2.COLOR_BGR2HSV)</span></span>
<span class="line"><span>&gt;&gt;&gt; print(hsv_blue)</span></span>
<span class="line"><span>[[[120 255 255]]]</span></span></code></pre></div><p>为了识别特定颜色的物体，获取到颜色所对应的HSV值很重要，这里说一下获取步骤：</p><p>1、在线取色器 或 传图识色，可以在这里上传特定颜色的图片，获取这些颜色对应的RGB值。</p><p>2、假设获取到的是这样的数据：#869C90,#899F92,#8A9E92,#8A9F8E，下面将其进行转换得到HSV各通道的数值范围：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>rgb = &#39;#869C90,#899F92,#8A9E92,#8A9F8E&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>rgb = rgb.split(&#39;,&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 转换为BGR格式，并将16进制转换为10进制</span></span>
<span class="line"><span>bgr = [[int(r[5:7], 16), int(r[3:5], 16), int(r[1:3], 16)] for r in rgb]</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 转换为HSV格式</span></span>
<span class="line"><span>hsv = [list(cv2.cvtColor(np.uint8([[b]]), cv2.COLOR_BGR2HSV)[0][0]) for b in bgr]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>hsv = np.array(hsv)</span></span>
<span class="line"><span>print(&#39;H:&#39;, min(hsv[:, 0]), max(hsv[:, 0]))</span></span>
<span class="line"><span>print(&#39;S:&#39;, min(hsv[:, 1]), max(hsv[:, 1]))</span></span>
<span class="line"><span>print(&#39;V:&#39;, min(hsv[:, 2]), max(hsv[:, 2]))</span></span></code></pre></div><p>然后对其中的Hue值进行加10和减10（这里的10也可以为其他值，视具体情况而定），得到Hue的范围，还要指定S和V的范围：</p><p><img src="`+o+`" alt="img"></p><p>最后整个HSV值的上限和下限为 [hue+10，100，100]和 [hue-10，255，255]，S和V的下限值可以根据实际情况设置。</p><p>因为H=0和H=180都对应红色，所以对于红色的话，需要定义两个范围，并进行取或操作。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>sensitivity = 10</span></span>
<span class="line"><span>lower_red_0 = np.array([0,100,100]) </span></span>
<span class="line"><span>upper_red_0 = np.array([sensitivity,255,255])</span></span>
<span class="line"><span>lower_red_1 = np.array([180-sensitivity,100,100]) </span></span>
<span class="line"><span>upper_red_1 = np.array([180,255,255])</span></span>
<span class="line"><span></span></span>
<span class="line"><span>mask_0 = cv2.inRange(hsv, lower_red_0, upper_red_0)</span></span>
<span class="line"><span>mask_1 = cv2.inRange(hsv, lower_red_1, upper_red_1)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>mask = cv2.bitwise_or(mask_0, mask_1)</span></span></code></pre></div><p>使用 cv2:inRange() 作为基于颜色的阈值。</p><p>然后就可以使用该 HSV 值范围进行目标物体的提取。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import cv2</span></span>
<span class="line"><span>import numpy as np</span></span>
<span class="line"><span></span></span>
<span class="line"><span>path = &quot;compass.jpg&quot;</span></span>
<span class="line"><span>img = cv2.imread(path)</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Convert BGR to HSV</span></span>
<span class="line"><span>hsv = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>sensitivity = 15</span></span>
<span class="line"><span></span></span>
<span class="line"><span># define range of blue color in HSV</span></span>
<span class="line"><span>lower_blue = np.array([120-sensitivity,100,100])</span></span>
<span class="line"><span>upper_blue = np.array([120+sensitivity,255,255])</span></span>
<span class="line"><span># Threshold the HSV image to get a range of blue color</span></span>
<span class="line"><span>mask_blue = cv2.inRange(hsv, lower_blue, upper_blue)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>kernel = cv2.getStructuringElement(cv2.MORPH_RECT, (5,5))</span></span>
<span class="line"><span>mask_blue = cv2.morphologyEx(mask_blue, cv2.MORPH_CLOSE, kernel)  # 闭运算</span></span>
<span class="line"><span>mask_blue = cv2.morphologyEx(mask_blue, cv2.MORPH_OPEN, kernel)   # 开运算</span></span>
<span class="line"><span> </span></span>
<span class="line"><span># define range of red color in HSV</span></span>
<span class="line"><span>lower_red_0, upper_red_0 = np.array([0,100,100]), np.array([sensitivity,255,255])</span></span>
<span class="line"><span>lower_red_1, upper_red_1 = np.array([180-sensitivity,100,100]), np.array([180,255,255])</span></span>
<span class="line"><span># Threshold the HSV image to get a range of red color</span></span>
<span class="line"><span>mask_0 = cv2.inRange(hsv, lower_red_0, upper_red_0)</span></span>
<span class="line"><span>mask_1 = cv2.inRange(hsv, lower_red_1, upper_red_1)</span></span>
<span class="line"><span>mask_red = cv2.bitwise_or(mask_0, mask_1)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>mask_red = cv2.morphologyEx(mask_red, cv2.MORPH_CLOSE, kernel)</span></span>
<span class="line"><span>mask_red = cv2.morphologyEx(mask_red, cv2.MORPH_OPEN, kernel)</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span># 合并蓝色mask和红色mask</span></span>
<span class="line"><span>mask = cv2.bitwise_or(mask_blue, mask_red)</span></span>
<span class="line"><span># Bitwise-AND mask</span></span>
<span class="line"><span>res = cv2.bitwise_and(img, img, mask=mask)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>cv2.imshow(&#39;image&#39;,img)</span></span>
<span class="line"><span>cv2.imshow(&#39;mask_blue&#39;,mask_blue)</span></span>
<span class="line"><span>cv2.imshow(&#39;mask_red&#39;,mask_red)</span></span>
<span class="line"><span>cv2.imshow(&#39;res&#39;,res)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if cv2.waitKey(0)==ord(&#39;q&#39;):</span></span>
<span class="line"><span>    cv2.destroyAllWindows()</span></span></code></pre></div><p>下面分别原图，蓝色掩码，红色掩码，以及蓝色和红色区域。</p><p><img src="`+m+'" alt="img"></p><p>使用 HSV 图像分割</p><p>有时候也可以利用颜色空间进行图像分割，如果图像的颜色特征比强度特征更好，则可以尝试将其转换为HSV，然后在H通道上进行自适应二值化处理。</p><p>原图如下：</p><p><img src="'+g+`" alt="img"></p><p>下面是相关源码：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>image = cv2.imread(img_path)</span></span>
<span class="line"><span>cv2.imshow(&#39;img&#39;, image)</span></span>
<span class="line"><span>hsv = cv2.cvtColor(image, cv2.COLOR_BGR2HSV)</span></span>
<span class="line"><span>cv2.imshow(&#39;hsv&#39;, hsv[:,:,0])</span></span>
<span class="line"><span>(thresh, im_bw) = cv2.threshold(hsv[:,:,0], 0, 255, cv2.THRESH_BINARY | cv2.THRESH_OTSU)</span></span>
<span class="line"><span>cv2.imshow(&#39;otsu&#39;, im_bw)</span></span></code></pre></div><p>对该风景图进行阈值切割后的结果： <img src="`+v+'" alt="img"></p><p>左图为H通道的图，右图为我们进行二值化后的图。可以发现我们通过这种方法将图像中的主要三个颜色部分很好地分割开来。</p><p>而我们采用对灰度图进行阈值切割的结果如下：</p><p><img src="'+_+'" alt="img"></p><p>左图为灰度图，右图为我们进行二值化后的图。</p><p>因为图像中的天空是渐变的，所以不管用什么阈值，都会把天空给分成两部分，显然没有转换颜色通道的效果好。</p>',72)]))}const y=a(d,[["render",h]]);export{R as __pageData,y as default};
