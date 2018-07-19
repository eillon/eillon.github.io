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

### http过滤
> http包由于其不加密的特殊性，可以查看很多东西，相应的过滤条件也很多。

|命令|过滤效果|
|:--|:--|
|http.host==XXX|域名为XXX|
|http.host contains XXX|域名包含XXX|
|http.response.code==XXX|响应码为XXX|
|http.response==1|所有响应|
|http.request==1|所有请求|
|http.request.method==POST|请求方式为POST|
|http.cookie contains XXX|cookie包含XXX|
|http contains XXX|包中包含XXX|

### IP过滤
|命令|过滤效果|
|:--|:--|
|ip.addr==XXX|来源IP或目的IP等于XXX|
|ip.src==XXX|来源IP等于XXX|
|ip.dst==XXX|目的IP等于XXX|

### 端口过滤
> 可以过滤两种协议的端口，udp和tcp。以下tcp均可替换为udp
|命令|过滤效果|
|:--|:--|
|tcp.port==XXX|通过端口XXX的包|
|tcp.srcport==XXX|来源端口为XXX|
|tcp.dstport==XXX|目标端口为XXX|

### 协议过滤
> 直接使用协议表示即可。如`http`代表过滤使用http协议的包。

### MAC过滤
> 和IP过滤类似，将`ip`替换为`eth`即可。
|命令|过滤效果|
|:--|:--|
|eth.addr==XXX|MAC==XXX|



### 总结
&nbsp;&nbsp;wireshark支持的过滤模式还有很多很多，善用过滤器会方便很多。以上只是列出了最常用的一些过滤条件。其他内容请自行[百度](www.baidu.com)。