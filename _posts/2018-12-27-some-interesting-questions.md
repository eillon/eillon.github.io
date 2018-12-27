---
layout: original
title: "一些有趣的编程问题"
date: 2018-12-27 10:00:00 +0800 
categories: 编程问题
tags: [编程, 困难]
---
* content
{:toc}


<!-- more -->
### 3x+1 问题
证明下面的程序在输入x为正整数时能够终止。
```
    while x != 1 do
        if even(x)
            x = x/2
        else
            x = 3*x + 1
```
> 世界级疑难问题，尚未有人给出证明。一个讲解比较全面的帖子：[3x+1问题 - luansxx的专栏](https://blog.csdn.net/luansxx/article/details/3276075?utm_source=blogxgwz4)