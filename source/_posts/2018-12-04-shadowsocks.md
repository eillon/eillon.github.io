---
layout: original
title: "shadowsocks安装、配置和优化"
date: 2018-12-04 10:00:00 +0800 
categories: 实用技术
tags: [ubuntu, shadowsocks]
---
* content
{:toc}


> 很久之前装过一次shadowsocks，最近又搞了个服务器重装。但是发现网上的教程都已经很老旧了，有些步骤是重复的、无意义的。特此整理了本篇教程。<br/>
> 安装环境：Ubuntu16.04（linux-kernel 4.9+）<br/>
> 整理日期：2018年12月4日

<!-- more -->

## 服务端
### 安装
`shadowsocks`已经包含在ubuntu官方源里，所以只需：
```sh
    sudo apt install shadowsocks
```
> 因为linux默认支持python环境（python2.X），所以不再需要（旧版教程的）安装python、pip等过程。


### 配置
默认配置文件在`/etc/shadowsocks/`下，为`config.json`。也可以自己选择配置文件。配置文件是`json`格式,内容如下：
```json
{
    "server":"0.0.0.0",            # 服务器地址，如果做为服务器的话可以设为0.0.0.0
    "server_port":8989,            # 服务器端口
    "local_address": "127.0.0.1",  # 本地地址，一般是127.0.0.1
    "local_port":1080,             # 本地端口，默认是1080
    "password":"your passwd",      # 密码
    "timeout":300,                
    "method":"aes-256-cfb",        # 加密方式，推荐aes-256-cfb
    "fast_open": true,             # 快速tcp连接，最新版本均支持
    "workers": 3                   # shadowsocks进程个数，提高处理速度
}
```

> 可以多用户用同一个端口（服务器端口）、同一个密码进行连接；还有一种设置是设置多个端口/密码，给不同人用。因为我没有这个需求，所以，请自行百度。

### 启动
```
ssserver -c [配置文件]
```
不过shadowsocks一般都是后台运行的，并且要求不中断运行，所以一般用：
```
nohup ssserver -c [配置文件] > /dev/null 2>&1 &
```
> 关于其中`nohup`、`&`、`2>&1`、`>`的用法，参考[Linux常用命令-Eillon的博客](https://eillon.github.io/2018/07/16/linux%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4/#%E7%B3%BB%E7%BB%9F%E6%93%8D%E4%BD%9C)。

#### 配置开机启动
如果服务器有重启的可能，又不想每次都手动启动，开机自动启动是必须的。
我采用了最直接的办法：在`/etc/rc.local`中加入以上命令：
```
nohup ssserver -c [配置文件] > /dev/null 2>&1 &
```
> 加在`exit 0`之前。

## 客户端
### 图形化界面
在[shadowsocks-github](https://github.com/shadowsocks)中，寻找对应系统的项目，releases中有相应的安装包。

目前支持windows、android、linux（Qt版）。

### 命令行
安装和配置与服务端相同，配置时`server`配置成自己的服务器即可。

启动：
```
sslocal -c [配置文件]
```

## 优化
以上内容足够我们正常使用代理了；但如果觉得代理慢（注意确定是代理的问题，不是自己网速的问题）或者用户多、流量大，可以尝试以下优化。

以下优化均针对服务端。

以下3种优化相互独立。

### BBR优化
BBR是Google的一个TCP拥塞控制算法，对某些拓扑网络的优化效果非常好。其原理可参考[BBR-ACM](https://queue.acm.org/detail.cfm?id=3022184)。

linux-kernel-4.9版本以上的系统均支持BBR模块。

#### 查看bbr模块是否启用
```
lsmod | grep bbr
```
如果已启用则不需任何操作，否则进行以下步骤。

#### 加载bbr模块
以下命令均需管理员权限。
```
modprobe tcp_bbr
echo "tcp_bbr" >> /etc/modules-load.d/modules.conf
echo "net.core.default_qdisc=fq" >> /etc/sysctl.conf
echo "net.ipv4.tcp_congestion_control=bbr" >> /etc/sysctl.conf
sysctl -p
```

#### 查看bbr模块是否成功加载
```
sysctl net.ipv4.tcp_available_congestion_control
sysctl net.ipv4.tcp_congestion_control
```
如果两条命令的输出均有bbr，则成功。
> 以上`sysctl`对内核的配置均是永久的。


### 吞吐量优化
新建配置文件`/etc/sysctl.d/local.conf`，输入以下内容：
```
# max open files
fs.file-max = 51200
# max read buffer
net.core.rmem_max = 67108864
# max write buffer
net.core.wmem_max = 67108864
# default read buffer
net.core.rmem_default = 65536
# default write buffer
net.core.wmem_default = 65536
# max processor input queue
net.core.netdev_max_backlog = 4096
# max backlog
net.core.somaxconn = 4096
# resist SYN flood attacks
net.ipv4.tcp_syncookies = 1
# reuse timewait sockets when safe
net.ipv4.tcp_tw_reuse = 1
# turn off fast timewait sockets recycling
net.ipv4.tcp_tw_recycle = 0
# short FIN timeout
net.ipv4.tcp_fin_timeout = 30
# short keepalive time
net.ipv4.tcp_keepalive_time = 1200
# outbound port range
net.ipv4.ip_local_port_range = 10000 65000
# max SYN backlog
net.ipv4.tcp_max_syn_backlog = 4096
# max timewait sockets held by system simultaneously
net.ipv4.tcp_max_tw_buckets = 5000
# turn on TCP Fast Open on both client and server side
net.ipv4.tcp_fastopen = 3
# TCP receive buffer
net.ipv4.tcp_rmem = 4096 87380 67108864
# TCP write buffer
net.ipv4.tcp_wmem = 4096 65536 67108864
# turn on path MTU discovery
net.ipv4.tcp_mtu_probing = 1
```
运行`sysctl --system`使配置生效。

### ulimit优化
系统对打开的文件数目是有限制的，一般是1024。对一般文件来说够用了，但网络连接（socket）也是一种文件，所以连接过多时会受限。

最简单的办法是在`/etc/rc.local`中加入：
```
ulimit -n 51200
```
> 注意，ulimit只能对当前shell生效，所以要放在启动`shadowsocks`前。