import{_ as i,c as a,a2 as n,o as p}from"./chunks/framework.CqbvlPrP.js";const g=JSON.parse('{"title":"CSS选择器优先级计算原理","description":"","frontmatter":{},"headers":[],"relativePath":"programming/web/css/CSS选择器优先级计算原理.md","filePath":"programming/web/css/CSS选择器优先级计算原理.md"}'),l={name:"programming/web/css/CSS选择器优先级计算原理.md"};function t(h,s,e,k,r,d){return p(),a("div",null,s[0]||(s[0]=[n(`<h1 id="css选择器优先级计算原理" tabindex="-1">CSS选择器优先级计算原理 <a class="header-anchor" href="#css选择器优先级计算原理" aria-label="Permalink to &quot;CSS选择器优先级计算原理&quot;">​</a></h1><p>首先，优先级有四个组成部分：内联样式、ID选择器、类选择器和标签选择器</p><p>内联样式 &gt; ID选择器 &gt; 类选择器 &gt; 标签选择器</p><p>到具体的计算层⾯，优先级是由 A 、B、C、D 的值来决定的，其中它们的值计算规则如下：</p><p>如果存在内联样式，那么 A = 1, 否则 A = 0</p><p>B的值等于ID选择器（#id）出现的次数</p><p>C的值等于类选择器（.class）和属性选择器（a[href=&quot;<a href="https://www.baidu.com" target="_blank" rel="noreferrer">https://www.baidu.com</a>&quot;]）和伪类选择器（:first-child）出现的总次数。</p><p>D的值等于标签选择器（div,span,a） 和伪元素选择器（::before,::after）出现的总次数</p><p>例如：#name&gt;div&gt;span&gt;a.hover</p><p>套用上面的算法，依次求出A，B，C，D的值：</p><ol><li><p>因为没有内联样式 ，所以 A = 0</p></li><li><p>ID选择器总共出现了1次， B = 1</p></li><li><p>类选择器出现了1次， 属性选择器出现了0次，伪类选择器出现0次，所以 C = (1 + 0 + 0) = 1</p></li><li><p>标签选择器出现了3次， 伪元素出现了0次，所以 D = (3 + 0) = 3</p></li></ol><p>通过以上步骤算出的A 、 B、C、D 可以简记作：(0, 1, 1, 3)</p><p>优先级的比较规则</p><p>从左往右依次进行比较 ，较大者优先级更高；</p><p>如果相等，则继续往右移动一位进行比较；</p><p>如果4位全部相等，则后面的会覆盖前面的。</p><p>经过上面的优先级计算规则，我们知道内联样式的优先级最高，如果外部样式需要覆盖内联样式，就需要使用!important</p><p>更多练习</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 标签选择器</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">li                                      </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* (0, 0, 0, 1) */</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ul li                                   </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* (0, 0, 0, 2) */</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ul ol</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">li                                </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* (0, 0, 0, 3) */</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 标签选择器，属性选择器</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">h1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">REL</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">up]                          </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* (0, 0, 1, 1) */</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 标签选择器，类选择器</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ul ol li.red                            </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* (0, 0, 1, 3) */</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">li.red.level                            </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* (0, 0, 2, 1) */</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 类选择器</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.a1.a2.a3.a4.a5.a6.a7.a8.a9.a10.a11     </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* (0, 0, 11,0) */</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// id选择器</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">#name                                   </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* (0, 1, 0, 0) */</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 标签选择器，伪类，类选择器</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">li</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:nth</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">child</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(odd) main .name            </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* (0, 0, 2, 2) */</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// id选择器，类选择器，标签选择器，伪类</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">#name .active </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> a</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:hover                 </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* (0, 1, 2, 1) */</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 标签选择器，id选择器，类选择器，伪类选择器</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">html body #name .active </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> a</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:hover       </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* (0, 1, 2, 3) */</span></span></code></pre></div><p>补充知识：伪类选择器有哪些</p><p>:link ：选择未被访问的链接</p><p>:visited：选取已被访问的链接</p><p>:active：选择活动链接</p><p>:hover ：鼠标指针浮动在上面的元素</p><p>:focus ：选择具有焦点的</p><p>:first-child：父元素的首个子元素</p><p>补充知识：伪元素选择器有哪些</p><p>::first-letter ：用于选取指定选择器的首字母</p><p>::first-line ：选取指定选择器的首行</p><p>::before : 选择器在被选元素的内容前面插入内容</p><p>::after : 选择器在被选元素的内容后面插入内容</p>`,31)]))}const E=i(l,[["render",t]]);export{g as __pageData,E as default};
