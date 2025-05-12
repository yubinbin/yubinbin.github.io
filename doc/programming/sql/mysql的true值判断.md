### mysql 的true值判断

#### 创建数据

``` mysql
create table test_tree(
    t_id varchar(100),
    parent_id varchar(100)
);

insert into test_tree values('a', '');
insert into test_tree values('b', 'a');
insert into test_tree values('c', 'b');
insert into test_tree values('d', 'c');
insert into test_tree values('e', 'd');
insert into test_tree values('f', 'c');

insert into test_tree values('1', '');
insert into test_tree values('2', '1');
insert into test_tree values('3', '2');
insert into test_tree values('4', '3');
insert into test_tree values('5', '4');
insert into test_tree values('6', '3');
```
### 查询语句1(字符串，没有结果)
``` mysql
SELECT t_id FROM
  (
    SELECT * FROM test_tree where parent_id <> '' 
  ) realname_sorted,
  (SELECT @pv :='c') init
  WHERE (FIND_IN_SET(parent_id, @pv)<> '' 
  And @pv := concat(@pv, ',', t_id));
```

![图片](/assets/img/program/sql/mysql%E7%9A%84true%E5%80%BC%E5%88%A4%E6%96%AD/1.webp)

####查询语句2(数字，有结果)
``` mysql
SELECT t_id FROM
  (
    SELECT * FROM test_tree where parent_id <> '' 
  ) realname_sorted,
  (SELECT @pv :='3') init
  WHERE (FIND_IN_SET(parent_id, @pv)<> '' 
  And @pv := concat(@pv, ',', t_id));

```

![图片](/assets/img/program/sql/mysql%E7%9A%84true%E5%80%BC%E5%88%A4%E6%96%AD/2.webp)

#### mysql的这个递归查询字符串的不行，数字却可以？

有点意思的问题。
问题在于where条件FIND_IN_SET(parent_id, @pv)<> '' And @pv := concat(@pv, ',', t_id)，如果find_in_set为true就会执行后面的赋值操作：
@pv := concat(@pv, ',', t_id)

@pv为数字时，赋值结果形如3,4,5 （以数字开头的字符串）
@pv为字母时，赋值结果形如c,d,e
where条件要为true才会过滤出当前行，这个时候就得了解下

**mysql认为什么值是true：** ***true、不为0的数字、以非0开头的字符串;***

可以自行测试如下：
```
select * from test_tree where 3;  //显示全部结果
select * from test_tree where 'a,b,c'; //Empty
select * from test_tree where '3a,b,c'; //显示
```

全部结果，因为字符串'3a,b,c'会被隐式转换成数字3
这就可以解释为什么@pv为字符串时递归查询的结果始终为Empty，因为@pv := concat(@pv, ',', t_id)始终为字符串，且不是数字开头，始终为false