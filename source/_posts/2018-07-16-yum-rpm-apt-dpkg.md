---
layout: post
title: "yum和rpm、apt和dpkg"
date: 2018-07-16 16:00:00 +0800 
categories: 实用技术
tag: [Linux, yum, rpm, 持续更新]
---

本文总结了一些yum和rpm命令经常用到的参数，以备查阅。
因为两者均为rpm包管理器，所以放到了一块。
持续更新。 

<!-- more -->

## yum
### yum简介
&nbsp;&nbsp;yum是一个常用的软件包管理器，基于[RPM包](https://baike.baidu.com/item/RPM/3794648?fr=aladdin)管理，能从指定服务器下载rpm包并安装，自动处理依赖。常用于RedHat、CentOS等Linux系统。
&nbsp;&nbsp;但yum不只可以安装rpm包。本质上yum类似于ubuntu下的apt，是对整个系统安装包的一个管理器。

### 常用命令
#### 安装
> yum install *.rpm

#### 删除
> yum remove/erase *.rpm

#### 升级
> yum up

### 常用选项
-h:


## rpm
### rpm简介
&nbsp;&nbsp; rpm是`RPM Package Manager`的缩写，也是一个RPM包管理器。不过rpm更常用一些，也可以进行rpm打包操作（生成具有.rpm扩展名的文件）。rpm相比于yum其参数较为复杂。

