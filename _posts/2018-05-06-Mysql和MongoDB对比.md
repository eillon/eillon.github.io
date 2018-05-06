---
layout: post
title: "MYSQL和MongoDB操作命令对比"
date: 2018-05-06 13:00:00 +0800 
categories: 实用技术
tag: 数据库
---
* content
{:toc}



本文转自[MongoDB 和 mySql 的关系](http://www.cnblogs.com/syomm/p/5760441.html), 我是一个勤勉的搬运工。

<!-- more -->

## MYSQL和MongoDB命令对比：

| 作用  | MYSQL  | MongoDB  |
|:----|:-----|:------  |
|服务器守护进程|mysqld|mongod|
|客户端工具|mysql|mongo|
|逻辑备份工具|mysqldump|mongodump
|逻辑还原工具|mysql|mongorestore|
|数据导出工具|mysqldump|mongoexport|
|数据导入工具|source|mongoimport|
|显示库列表|show databases;|show dbs|
|进去库|use dbname;|use dbname|
|显示表列表|show tables;|show collections|
|查询主从状态|show slave status;|rs.status|
|创建库|create database name;|无需单独创建，直接use进去|
|创建表|create table tname(id int);|无需单独创建，直接插入数据|
|删除表|drop table tname;|db.tname.drop()|
|删除库|drop database dbname;|首先进去该库，db.dropDatabase()|
|插入记录|insert into tname(id) value(2);|db.tname.insert({id:2})|
|删除记录|delete from tname where id=2;|db.tname.remove({id:2})|
|修改/更新记录|update tname set id=3 where id=2;|db.tname.update({id:2}, {$set:{id:3}},false,true)|
|查询所有记录|select * from tname;|db.tname.find()|
|查询所有列|select id from tname;|db.tname.find({},{id:1})|
|条件查询|select * from tname where id=2;|db.tname.find({id:2})|
|条件查询|select * from tname where id < 2;|db.tname.find({id:{$lt:2}})|
|条件查询|select * from tname where id >=2;|db.tname.find({id:{$gte:2}})|
|条件查询|select * from tname where id=2 and name='steve';|db.tname.find({id:2, name:'steve'})|
|条件查询|select * from tname where id=2 or name='steve';|db.tname.find($or:[{id:2}, {name:'steve'}])|
|条件查询|select * from tname limit 1;|db.tname.findOne()|
|模糊查询|select * from tname where name like "%ste%";|db.tname.find({name:/ste/})|
|模糊查询|select * from tname where name like "ste%";|db.tname.find({name:/^ste/})|
|获取表记录数|select count(id) from tname;|db.tname.count()|
|获取有条件的记录数|select count(id) from tname where id=2;|db.tname.find({id:2}).count()|
|查询时去掉重复值|select distinct(last_name) from tname;|db.tname.distinct('last_name')|
|正排序查询|select *from tname order by id;|db.tname.find().sort({id:1})|
|逆排序查询|select *from tname order by id desc;|db.tname.find().sort({id:-1})|
|取存储路径|explain select * from tname where id=3;|db.tname.find({id=3}).explain()|
