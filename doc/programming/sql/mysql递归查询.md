### mysql递归查询

#### MySQL 递归查询子项

1. 不带级别

```mysql
# MySQL 递归查询子项

# 函数每查询一行都会重新计算  这会导致where条件一直在变  从而实现递归查询

SELECT * , 'initPV' , @pv FROM tmspecs WHERE SpecOID = @pv  # 包含父级 不加不包含父级
UNION ALL
SELECT  tmspecs.* , init.p AS initPV, @pv FROM tmspecs 
/*
FROM T1,T2是ANSI SQL-89的旧语法，用逗号分隔FROM子句出现的表名，没有JOIN关键字，
也没有ON子句，它只支持交叉联接和内联接，不支持外联接；如果没有指定联接条件就是一个交叉联接。

新的ANSI SQL-92去掉了逗号，引入了JOIN和ON，支持交叉联接、内联接和外联接。
*/
#JOIN  
,
 (SELECT 
 	@pv := (
      SELECT SpecOID from tmspecs 
      where SpecAID = 'Analog I/O'
   ) AS p # 赋值初始的parentId
 ) init
WHERE
#  FIND_IN_SET(s1,s2)	返回在字符串s2中与s1匹配的字符串的位置
  	find_in_set(SpecOIDParent ,@pv)
AND  
	length(@pv := concat(@pv, ',', SpecOID))

```

2. 带级别

```mysql

SELECT u2.SpecOID, u2.name,u1.c_ids,u1.p_ids,u1.LEVEL
FROM ( 
  SELECT @ids AS p_ids, 
  (SELECT @ids := GROUP_CONCAT(SpecOID) FROM tmspecs WHERE FIND_IN_SET(SpecOIDParent, @ids)) AS c_ids, 
  @l := @l+1 AS LEVEL 
  FROM tmspecs, (SELECT @ids := '60', @l := 0 ) b  #此处为需要传递的父类id. 
  WHERE @ids IS NOT NULL 
) u1 
JOIN tmspecs u2
ON FIND_IN_SET(u2.SpecOID, u1.p_ids)  #AND u2.SpecOID != '101'  #需要包含自己, 则删掉 !=

```

#### MySQL 递归查询父项
1. 不带级别

```mysql
# MySQL 递归查询父项

# 函数每查询一行都会重新计算  这会导致where条件一直在变  从而实现递归查询

#SELECT * , 'initPV' , @pv FROM tmspecs WHERE SpecOID = @pv  # 包含父级 不加不包含父级
#UNION ALL
SELECT  tmspecs.* , init.p AS initPV, @pv FROM tmspecs 
/*
FROM T1,T2是ANSI SQL-89的旧语法，用逗号分隔FROM子句出现的表名，没有JOIN关键字，
也没有ON子句，它只支持交叉联接和内联接，不支持外联接；如果没有指定联接条件就是一个交叉联接。

新的ANSI SQL-92去掉了逗号，引入了JOIN和ON，支持交叉联接、内联接和外联接。
*/
#JOIN  
,
 (SELECT 
 	@pv := (
      SELECT SpecOIDParent from tmspecs 
      where SpecAID = 'Output range'
   ) AS p # 赋值初始的parentId
 ) init
WHERE
#  FIND_IN_SET(s1,s2)	返回在字符串s2中与s1匹配的字符串的位置
  	FIND_IN_SET(SpecOID,@pv)
OR 
	FIND_IN_SET(SpecOIDParent,@pv) #获取同级别的行  只需要父级的不需要父级同级的可删除	 
AND  
	length(@pv := concat(@pv, ',', SpecOIDParent))
```

2. 带级别

``` mysql

SELECT u2.id, u2.name 
FROM( 
     SELECT
            @id c_ids,
            (SELECT @id:=GROUP_CONCAT(parentId) FROM test_user WHERE FIND_IN_SET(id,@id)) p_ids,
            @l := @l+1 AS LEVEL 
     FROM test_user,(SELECT @id:='105', @l := 0) b
     WHERE @id IS NOT NULL
    ) u1
JOIN test_user u2  ON u1.c_ids = u2.id  

```

---

#### 带级别SQL分析

3.执行过程剖析. ( 中间部分 )

![图片](/assets/img/program/sql/MySQL%E9%80%92%E5%BD%92%E6%9F%A5%E8%AF%A2/1.png)

3.1

```mysql 
( select @ids := ‘101’, @l := 0 )
```
作用:   初始化一个临时表. ( 存放当前父类id )

![图片](/assets/img/program/sql/MySQL%E9%80%92%E5%BD%92%E6%9F%A5%E8%AF%A2/2.png)

@变量名 : 定义一个用户变量
:= 对该用户变量进行赋值

> 用户变量赋值有两种方式:     一种是直接用"=“号，另一种是用”:=“号。
其区别在于:
      使用set命令对用户变量进行赋值时，两种方式都可以使用；
      用select语句时，只能用”:=“方式，因为select语句中，”="号被看作是比较操作符。
 

3.2 ```WHERE @ids IS NOT NULL ```
      查询条件, 也是终止条件. ( 若为空(没有子节点了), 即终止! )
 

3.3 ```GROUP_CONCAT()``` 函数

含义:用于将多个字符串拼接成1个字符串! ( 即行转列. )

完整的语法如下：

``` mysql
   group_concat([DISTINCT] 要连接的字段 [Order BY ASC/DESC 排序字段] [Separator '分隔符'])
```
使用:

![图片](/assets/img/program/sql/MySQL%E9%80%92%E5%BD%92%E6%9F%A5%E8%AF%A2/3.png)

3.4 ```FIND_IN_SET(str, strList)```

含义: 查询字段(strList)中包含的结果，返回结果null或记录。

str : 要查询的字符串.
strList : 字段名，参数以“,”分隔，如(1,2,6,8)
使用:

![图片](/assets/img/program/sql/MySQL%E9%80%92%E5%BD%92%E6%9F%A5%E8%AF%A2/4.png)
