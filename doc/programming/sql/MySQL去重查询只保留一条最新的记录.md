### MySQL去重查询只保留一条最新的记录

``` sql
SELECT 
   pb2.ProjectOID ,  pb2.OID , pb2.UserOID , pb2.BrowseTime
FROM
    (
		 SELECT 
	        ProjectOID , MAX(BrowseTime) BrowseTime
	    FROM
	        plcProjectBrowse
	    GROUP BY ProjectOID
	 ) pb1
LEFT JOIN plcProjectBrowse pb2 ON pb2.ProjectOID = pb1.ProjectOID
AND pb2.BrowseTime = pb1.BrowseTime
GROUP BY ProjectOID ; # 防止出现两个同样时间
```