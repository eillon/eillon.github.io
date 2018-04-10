# Eillon的博客
> 这是一个基于github的博客平台，主要用来分享一些教程性和经验性的东西。这些内容不适合作为github项目发布，但我又希望能把学习过程中的经历记录保存下来，所以选择了github自带的博客平台。

## [博客地址](https://eillon.github.io)

## 现有功能

* 提供[百度统计](https://tongji.baidu.com/web/welcome/login)功能

* 使用gitment评论插件

* 使用canvas实现首页动态效果

## 使用方法
> 博客的部署和安装可参考网络上的教程

### 写文章
文章在`_posts`文件夹下，使用markdown编写。可在`_drafts`文件夹下存储草稿。
* 命名： year-month-day-name.md
* 文章首部字段：
```markdown
---
layout: post                                 # 使用模板,有post和original两种格式
title: name:string                           # 文章名，可与文件名不一致
date: 2017-03-23 09:00:00 +0800
categories: string                           # 博文分类
tag:  string                                 # 标签
---
* content
{:toc}
```
如果使用多标签，可以用：
```
tags: [string, string]
```

* 文章内容： 
1. 首部字段中的title会显示在网页中，所以正文中就不要重复了。
2. 使用`<!-- more -->`字段来切分简介和文章内容。 简介部分会显示在主页上。

### 编译运行
```bash
jekyll s
```
该命令开启jekyll服务器，会监听文件更改并自动更新网页。
网页地址：`http://127.0.0.1:4000/`


### 上传github
其实上一步完全可以略过，更改完毕后直接上传到github，github会自动帮你编译、发布。