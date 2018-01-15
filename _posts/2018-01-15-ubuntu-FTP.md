---
layout: post
title: "用ubuntu云主机搭建FTP服务器"
date: 2018-01-15 23:00:00 +0800 
categories: 实用技术
tag: FTP 
---
* content
{:toc}










## 用ubuntu云主机搭建FTP服务器

>实验环境： ubuntu 16.04 LTS 64位。 简单可行，用时大概15分钟。

<!-- more -->

&emsp; 首先使用你喜欢的ssh登录到服务器（我使用的是putty）， 在此不再赘述。下面是详细过程：

### 安装VSFTPD

```
sudo apt-get install vsftpd -y
```
### 启动VSFTPD
&emsp;一般情况下，vsftpd安装完成后会自动启动，通过`netstat`命令可以看到vsftpd已经监听了21端口；
		

```
sudo netstat -nltp | grep 21
```
&emsp;其中`netstat` 是查看网络状态。 如果没有启动，可以手动开启VSFTPD服务：

```
sudo systemctl start vsftpd.service
```
&emsp;另外可用以下命令使VSFTPD服务开机启动。
```
sudo systemctl enable vsftpd.service
```

### 创建FTP目录和用户

&emsp;一般FTP服务都是访问部分目录（比如一个共享文件夹），不可能访问整个系统，所以最好单独建立单独的FTP用户及访问目录。
#### 新建访问目录（/home/ftp）,当然也可以用其他名称，以下以ftp为例
```
sudo mkdir /home/ftp
```
&emsp; FTP服务最好用单独的用户访问，以保证数据安全。
#### 新建用户并设置密码（以ftpuser为例）
		
```
sudo useradd -d /home/ftp -s /bin/bash ftpuser
```

&emsp;设置密码：
```
sudo passwd ftpuser
```

#### 删除掉pam.d 中的 vsftpd , 因为该配置文件会导致登录失败：
```
sudo rm /etc/pam.d/vsftpd
```
#### 限制该用户只能通过FTP 访问
```
sudo usermod -s /sbin/nologin ftpuser
```

### 对vsftpd 进行配置
&emsp; vsftpd 配置文件为 `/etc/vsftpd.conf`。首先增加可写权限：` sudo chmod a+w /etc/vsftpd.conf` 。配置包括限制用户对主目录外的访问、 指定允许访问用户的配置文件、使用utf8编码等。可直接将以下内容拷贝到配置文件最下方：

```
# 限制用户对主目录以外目录访问
chroot_local_user=YES

# 指定一个 userlist 存放允许访问 ftp 的用户列表
userlist_deny=NO
userlist_enable=YES

# 记录允许访问 ftp 用户列表
userlist_file=/etc/vsftpd.user_list

# 不配置可能导致莫名的530问题
seccomp_sandbox=NO

# 允许文件上传
write_enable=YES

# 使用utf8编码
utf8_filesystem=YES
```
&emsp;另外，新建文件` /etc/vsftpd.user_list`存放允许访问ftp的用户。上面我们只建立了一个用户：`ftpuser`，所以文件内容应该仅有一行：
```
ftpuser
```
&emsp;若想有多个用户，可以按照以上步骤建立，并加到该文件中，每行一个用户。

----------------
&emsp;现在已经可以在浏览器中用`ftp://IP地址` 访问搭好的FTP服务器了。如果觉得IP地址难记，可以参考我的另一篇文章[域名的申请和解析]，来实现用域名访问FTP服务器。 浏览器进行的FTP访问会感觉很卡，并且不能上传文件。FTP服务器的更多访问方式见[FTP服务器的访问]。

