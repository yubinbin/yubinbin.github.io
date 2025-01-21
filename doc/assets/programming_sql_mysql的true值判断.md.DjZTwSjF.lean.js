import{_ as a,c as n,a2 as e,o as t}from"./chunks/framework.CqbvlPrP.js";const p="/assets/img/program/sql/mysql%E7%9A%84true%E5%80%BC%E5%88%A4%E6%96%AD/1.webp",l="/assets/img/program/sql/mysql%E7%9A%84true%E5%80%BC%E5%88%A4%E6%96%AD/2.webp",_=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"programming/sql/mysql的true值判断.md","filePath":"programming/sql/mysql的true值判断.md"}'),i={name:"programming/sql/mysql的true值判断.md"};function r(c,s,o,d,m,h){return t(),n("div",null,s[0]||(s[0]=[e(`<h3 id="mysql-的true值判断" tabindex="-1">mysql 的true值判断 <a class="header-anchor" href="#mysql-的true值判断" aria-label="Permalink to &quot;mysql 的true值判断&quot;">​</a></h3><h4 id="创建数据" tabindex="-1">创建数据 <a class="header-anchor" href="#创建数据" aria-label="Permalink to &quot;创建数据&quot;">​</a></h4><div class="language-mysql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mysql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>create table test_tree(</span></span>
<span class="line"><span>    t_id varchar(100),</span></span>
<span class="line"><span>    parent_id varchar(100)</span></span>
<span class="line"><span>);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>insert into test_tree values(&#39;a&#39;, &#39;&#39;);</span></span>
<span class="line"><span>insert into test_tree values(&#39;b&#39;, &#39;a&#39;);</span></span>
<span class="line"><span>insert into test_tree values(&#39;c&#39;, &#39;b&#39;);</span></span>
<span class="line"><span>insert into test_tree values(&#39;d&#39;, &#39;c&#39;);</span></span>
<span class="line"><span>insert into test_tree values(&#39;e&#39;, &#39;d&#39;);</span></span>
<span class="line"><span>insert into test_tree values(&#39;f&#39;, &#39;c&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>insert into test_tree values(&#39;1&#39;, &#39;&#39;);</span></span>
<span class="line"><span>insert into test_tree values(&#39;2&#39;, &#39;1&#39;);</span></span>
<span class="line"><span>insert into test_tree values(&#39;3&#39;, &#39;2&#39;);</span></span>
<span class="line"><span>insert into test_tree values(&#39;4&#39;, &#39;3&#39;);</span></span>
<span class="line"><span>insert into test_tree values(&#39;5&#39;, &#39;4&#39;);</span></span>
<span class="line"><span>insert into test_tree values(&#39;6&#39;, &#39;3&#39;);</span></span></code></pre></div><h3 id="查询语句1-字符串-没有结果" tabindex="-1">查询语句1(字符串，没有结果) <a class="header-anchor" href="#查询语句1-字符串-没有结果" aria-label="Permalink to &quot;查询语句1(字符串，没有结果)&quot;">​</a></h3><div class="language-mysql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mysql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>SELECT t_id FROM</span></span>
<span class="line"><span>  (</span></span>
<span class="line"><span>    SELECT * FROM test_tree where parent_id &lt;&gt; &#39;&#39; </span></span>
<span class="line"><span>  ) realname_sorted,</span></span>
<span class="line"><span>  (SELECT @pv :=&#39;c&#39;) init</span></span>
<span class="line"><span>  WHERE (FIND_IN_SET(parent_id, @pv)&lt;&gt; &#39;&#39; </span></span>
<span class="line"><span>  And @pv := concat(@pv, &#39;,&#39;, t_id));</span></span></code></pre></div><p><img src="`+p+`" alt="图片"></p><p>####查询语句2(数字，有结果)</p><div class="language-mysql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mysql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>SELECT t_id FROM</span></span>
<span class="line"><span>  (</span></span>
<span class="line"><span>    SELECT * FROM test_tree where parent_id &lt;&gt; &#39;&#39; </span></span>
<span class="line"><span>  ) realname_sorted,</span></span>
<span class="line"><span>  (SELECT @pv :=&#39;3&#39;) init</span></span>
<span class="line"><span>  WHERE (FIND_IN_SET(parent_id, @pv)&lt;&gt; &#39;&#39; </span></span>
<span class="line"><span>  And @pv := concat(@pv, &#39;,&#39;, t_id));</span></span></code></pre></div><p><img src="`+l+`" alt="图片"></p><h4 id="mysql的这个递归查询字符串的不行-数字却可以" tabindex="-1">mysql的这个递归查询字符串的不行，数字却可以？ <a class="header-anchor" href="#mysql的这个递归查询字符串的不行-数字却可以" aria-label="Permalink to &quot;mysql的这个递归查询字符串的不行，数字却可以？&quot;">​</a></h4><p>有点意思的问题。 问题在于where条件FIND_IN_SET(parent_id, @pv)&lt;&gt; &#39;&#39; And @pv := concat(@pv, &#39;,&#39;, t_id)，如果find_in_set为true就会执行后面的赋值操作： @pv := concat(@pv, &#39;,&#39;, t_id)</p><p>@pv为数字时，赋值结果形如3,4,5 （以数字开头的字符串） @pv为字母时，赋值结果形如c,d,e where条件要为true才会过滤出当前行，这个时候就得了解下</p><p><strong>mysql认为什么值是true：</strong> <em><strong>true、不为0的数字、以非0开头的字符串;</strong></em></p><p>可以自行测试如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>select * from test_tree where 3;  //显示全部结果</span></span>
<span class="line"><span>select * from test_tree where &#39;a,b,c&#39;; //Empty</span></span>
<span class="line"><span>select * from test_tree where &#39;3a,b,c&#39;; //显示</span></span></code></pre></div><p>全部结果，因为字符串&#39;3a,b,c&#39;会被隐式转换成数字3 这就可以解释为什么@pv为字符串时递归查询的结果始终为Empty，因为@pv := concat(@pv, &#39;,&#39;, t_id)始终为字符串，且不是数字开头，始终为false</p>`,16)]))}const v=a(i,[["render",r]]);export{_ as __pageData,v as default};
