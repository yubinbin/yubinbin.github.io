### mysql中将多行数据合并成一行数据

一个字段可能对应多条数据，用mysql实现将多行数据合并成一行数据

例如：一个活动id（activeId）对应多个模块名（modelName）,按照一般的sql语句：
``` sql
SELECT am.activeId,m.modelName 
FROM activemodel am 
JOIN  model m 
ON am.modelId = m.modelId 
ORDER BY am.activeId
```
查询出的列表为图1所示：
![图一](/assets/img/program/sql/mysql%E4%B8%AD%E4%BD%BF%E7%94%A8group_concat%E5%A4%9A%E8%A1%8C%E5%90%88%E5%B9%B6%E4%B8%80%E8%A1%8C/1.png)
图1

 修改过后的sql语句，查询后如图2所示：
``` sql
SELECT am.activeId,GROUP_CONCAT(m.modelName SEPARATOR ',') modelName
FROM activemodel am 
JOIN model m 
ON am.modelId=m.modelId
WHERE m.valid=1
GROUP BY am.activeId
```

#### 需注意：

1. GROUP_CONCAT（）中的值为你要合并的数据的字段名;
SEPARATOR 函数是用来分隔这些要合并的数据的；
' '中是你要用哪个符号来分隔；
2. 必须要用GROUP BY 语句来进行分组管理，不然所有的数据都会被合并成一条记录，如图3
![图一](/assets/img/program/sql/mysql%E4%B8%AD%E4%BD%BF%E7%94%A8group_concat%E5%A4%9A%E8%A1%8C%E5%90%88%E5%B9%B6%E4%B8%80%E8%A1%8C/2.png)
图2
![图一](/assets/img/program/sql/mysql%E4%B8%AD%E4%BD%BF%E7%94%A8group_concat%E5%A4%9A%E8%A1%8C%E5%90%88%E5%B9%B6%E4%B8%80%E8%A1%8C/3.png)
图3