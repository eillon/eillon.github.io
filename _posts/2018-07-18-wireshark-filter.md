---
layout: post
title: "wireshark 常用过滤命令"
date: 2018-07-18 13:00:00 +0800 
categories: 实用技术
tag: [wireshark, 持续更新]
---
* content
{:toc}



> 近期涉及了一些网络抓包操作，发现wireshark是一个抓包神器，当然想用好wireshark就不得不研究下wireshark的过滤条件。<br/>
> 网上整理了一些常用过滤条件，以备查阅。

<!-- more -->

### http过滤条件
http包由于其不加密的特殊性，可以查看很多东西，相应的过滤条件也很多。

|命令|过滤效果|
|:--|:--|
|http.host==XXX|域名为XXX|
|http.host contains XXX|域名包含XXX|
|http.response.code==XXX|响应码为XXX|
|http.response==1|所有响应|
|http.request==1|所有请求|
|http.request.method==POST|请求方式为POST|
|http.cookie contains XXX|cookie包含XXX|
|||