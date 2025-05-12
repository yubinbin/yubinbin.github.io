import{_ as n,c as a,a2 as p,o as l}from"./chunks/framework.CqbvlPrP.js";const e="/assets/img/program/sql/MySQL%E9%80%92%E5%BD%92%E6%9F%A5%E8%AF%A2/1.png",i="/assets/img/program/sql/MySQL%E9%80%92%E5%BD%92%E6%9F%A5%E8%AF%A2/2.png",t="/assets/img/program/sql/MySQL%E9%80%92%E5%BD%92%E6%9F%A5%E8%AF%A2/3.png",c="/assets/img/program/sql/MySQL%E9%80%92%E5%BD%92%E6%9F%A5%E8%AF%A2/4.png",g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"programming/sql/mysql递归查询.md","filePath":"programming/sql/mysql递归查询.md"}'),o={name:"programming/sql/mysql递归查询.md"};function d(r,s,m,E,S,h){return l(),a("div",null,s[0]||(s[0]=[p(`<h3 id="mysql递归查询" tabindex="-1">mysql递归查询 <a class="header-anchor" href="#mysql递归查询" aria-label="Permalink to &quot;mysql递归查询&quot;">​</a></h3><h4 id="mysql-递归查询子项" tabindex="-1">MySQL 递归查询子项 <a class="header-anchor" href="#mysql-递归查询子项" aria-label="Permalink to &quot;MySQL 递归查询子项&quot;">​</a></h4><ol><li>不带级别</li></ol><div class="language-mysql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mysql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># MySQL 递归查询子项</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 函数每查询一行都会重新计算  这会导致where条件一直在变  从而实现递归查询</span></span>
<span class="line"><span></span></span>
<span class="line"><span>SELECT * , &#39;initPV&#39; , @pv FROM tmspecs WHERE SpecOID = @pv  # 包含父级 不加不包含父级</span></span>
<span class="line"><span>UNION ALL</span></span>
<span class="line"><span>SELECT  tmspecs.* , init.p AS initPV, @pv FROM tmspecs </span></span>
<span class="line"><span>/*</span></span>
<span class="line"><span>FROM T1,T2是ANSI SQL-89的旧语法，用逗号分隔FROM子句出现的表名，没有JOIN关键字，</span></span>
<span class="line"><span>也没有ON子句，它只支持交叉联接和内联接，不支持外联接；如果没有指定联接条件就是一个交叉联接。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>新的ANSI SQL-92去掉了逗号，引入了JOIN和ON，支持交叉联接、内联接和外联接。</span></span>
<span class="line"><span>*/</span></span>
<span class="line"><span>#JOIN  </span></span>
<span class="line"><span>,</span></span>
<span class="line"><span> (SELECT </span></span>
<span class="line"><span> 	@pv := (</span></span>
<span class="line"><span>      SELECT SpecOID from tmspecs </span></span>
<span class="line"><span>      where SpecAID = &#39;Analog I/O&#39;</span></span>
<span class="line"><span>   ) AS p # 赋值初始的parentId</span></span>
<span class="line"><span> ) init</span></span>
<span class="line"><span>WHERE</span></span>
<span class="line"><span>#  FIND_IN_SET(s1,s2)	返回在字符串s2中与s1匹配的字符串的位置</span></span>
<span class="line"><span>  	find_in_set(SpecOIDParent ,@pv)</span></span>
<span class="line"><span>AND  </span></span>
<span class="line"><span>	length(@pv := concat(@pv, &#39;,&#39;, SpecOID))</span></span></code></pre></div><ol start="2"><li>带级别</li></ol><div class="language-mysql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mysql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>SELECT u2.SpecOID, u2.name,u1.c_ids,u1.p_ids,u1.LEVEL</span></span>
<span class="line"><span>FROM ( </span></span>
<span class="line"><span>  SELECT @ids AS p_ids, </span></span>
<span class="line"><span>  (SELECT @ids := GROUP_CONCAT(SpecOID) FROM tmspecs WHERE FIND_IN_SET(SpecOIDParent, @ids)) AS c_ids, </span></span>
<span class="line"><span>  @l := @l+1 AS LEVEL </span></span>
<span class="line"><span>  FROM tmspecs, (SELECT @ids := &#39;60&#39;, @l := 0 ) b  #此处为需要传递的父类id. </span></span>
<span class="line"><span>  WHERE @ids IS NOT NULL </span></span>
<span class="line"><span>) u1 </span></span>
<span class="line"><span>JOIN tmspecs u2</span></span>
<span class="line"><span>ON FIND_IN_SET(u2.SpecOID, u1.p_ids)  #AND u2.SpecOID != &#39;101&#39;  #需要包含自己, 则删掉 !=</span></span></code></pre></div><h4 id="mysql-递归查询父项" tabindex="-1">MySQL 递归查询父项 <a class="header-anchor" href="#mysql-递归查询父项" aria-label="Permalink to &quot;MySQL 递归查询父项&quot;">​</a></h4><ol><li>不带级别</li></ol><div class="language-mysql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mysql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># MySQL 递归查询父项</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 函数每查询一行都会重新计算  这会导致where条件一直在变  从而实现递归查询</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#SELECT * , &#39;initPV&#39; , @pv FROM tmspecs WHERE SpecOID = @pv  # 包含父级 不加不包含父级</span></span>
<span class="line"><span>#UNION ALL</span></span>
<span class="line"><span>SELECT  tmspecs.* , init.p AS initPV, @pv FROM tmspecs </span></span>
<span class="line"><span>/*</span></span>
<span class="line"><span>FROM T1,T2是ANSI SQL-89的旧语法，用逗号分隔FROM子句出现的表名，没有JOIN关键字，</span></span>
<span class="line"><span>也没有ON子句，它只支持交叉联接和内联接，不支持外联接；如果没有指定联接条件就是一个交叉联接。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>新的ANSI SQL-92去掉了逗号，引入了JOIN和ON，支持交叉联接、内联接和外联接。</span></span>
<span class="line"><span>*/</span></span>
<span class="line"><span>#JOIN  </span></span>
<span class="line"><span>,</span></span>
<span class="line"><span> (SELECT </span></span>
<span class="line"><span> 	@pv := (</span></span>
<span class="line"><span>      SELECT SpecOIDParent from tmspecs </span></span>
<span class="line"><span>      where SpecAID = &#39;Output range&#39;</span></span>
<span class="line"><span>   ) AS p # 赋值初始的parentId</span></span>
<span class="line"><span> ) init</span></span>
<span class="line"><span>WHERE</span></span>
<span class="line"><span>#  FIND_IN_SET(s1,s2)	返回在字符串s2中与s1匹配的字符串的位置</span></span>
<span class="line"><span>  	FIND_IN_SET(SpecOID,@pv)</span></span>
<span class="line"><span>OR </span></span>
<span class="line"><span>	FIND_IN_SET(SpecOIDParent,@pv) #获取同级别的行  只需要父级的不需要父级同级的可删除	 </span></span>
<span class="line"><span>AND  </span></span>
<span class="line"><span>	length(@pv := concat(@pv, &#39;,&#39;, SpecOIDParent))</span></span></code></pre></div><ol start="2"><li>带级别</li></ol><div class="language-mysql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mysql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>SELECT u2.id, u2.name </span></span>
<span class="line"><span>FROM( </span></span>
<span class="line"><span>     SELECT</span></span>
<span class="line"><span>            @id c_ids,</span></span>
<span class="line"><span>            (SELECT @id:=GROUP_CONCAT(parentId) FROM test_user WHERE FIND_IN_SET(id,@id)) p_ids,</span></span>
<span class="line"><span>            @l := @l+1 AS LEVEL </span></span>
<span class="line"><span>     FROM test_user,(SELECT @id:=&#39;105&#39;, @l := 0) b</span></span>
<span class="line"><span>     WHERE @id IS NOT NULL</span></span>
<span class="line"><span>    ) u1</span></span>
<span class="line"><span>JOIN test_user u2  ON u1.c_ids = u2.id</span></span></code></pre></div><hr><h4 id="带级别sql分析" tabindex="-1">带级别SQL分析 <a class="header-anchor" href="#带级别sql分析" aria-label="Permalink to &quot;带级别SQL分析&quot;">​</a></h4><p>3.执行过程剖析. ( 中间部分 )</p><p><img src="`+e+'" alt="图片"></p><p>3.1</p><div class="language-mysql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mysql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>( select @ids := ‘101’, @l := 0 )</span></span></code></pre></div><p>作用: 初始化一个临时表. ( 存放当前父类id )</p><p><img src="'+i+'" alt="图片"></p><p>@变量名 : 定义一个用户变量 := 对该用户变量进行赋值</p><blockquote><p>用户变量赋值有两种方式: 一种是直接用&quot;=“号，另一种是用”:=“号。 其区别在于: 使用set命令对用户变量进行赋值时，两种方式都可以使用； 用select语句时，只能用”:=“方式，因为select语句中，”=&quot;号被看作是比较操作符。</p></blockquote><p>3.2 <code>WHERE @ids IS NOT NULL </code> 查询条件, 也是终止条件. ( 若为空(没有子节点了), 即终止! )</p><p>3.3 <code>GROUP_CONCAT()</code> 函数</p><p>含义:用于将多个字符串拼接成1个字符串! ( 即行转列. )</p><p>完整的语法如下：</p><div class="language-mysql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mysql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>   group_concat([DISTINCT] 要连接的字段 [Order BY ASC/DESC 排序字段] [Separator &#39;分隔符&#39;])</span></span></code></pre></div><p>使用:</p><p><img src="'+t+'" alt="图片"></p><p>3.4 <code>FIND_IN_SET(str, strList)</code></p><p>含义: 查询字段(strList)中包含的结果，返回结果null或记录。</p><p>str : 要查询的字符串. strList : 字段名，参数以“,”分隔，如(1,2,6,8) 使用:</p><p><img src="'+c+'" alt="图片"></p>',32)]))}const O=n(o,[["render",d]]);export{g as __pageData,O as default};
