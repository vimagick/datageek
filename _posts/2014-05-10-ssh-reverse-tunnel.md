---
layout: post
title: 使用SSH创建反向隧道
tags: ssh tunnel
---

假设我们有3台机器:

- 服务端: 有公网IP(1.2.3.4). 例如: 阿里云虚拟机
- 客户端: 无公网IP. 例如: 家庭拨号上网
- 移动端: 能上网, 并配备SSH客户端(Windows推荐使用putty)

我们的目标: 在世界的任何角落, 以`服务端`为跳板, 使用`移动端`登录到`客户端`.

实现的方案: `客户端`主动连接`服务端`, 并且启用远程端口转发(Remote Port Forwarding), 使得`服务端:2222`转发到`客户端:22`

### 服务端(ubuntu)

默认只监听本地网卡(127.0.0.1), 修改SSHD配置文件, 使其监听所有网卡(0.0.0.0).

```bash
# 监听SSH转发端口
vi /etc/ssh/sshd_config

    # append to the EOF
    GatewayPorts yes

# 重启SSH服务
service ssh restart
```

### 客户端(arch)

用autossh连接服务端, 一旦断线立即重连.

```bash
# 生成密钥
ssh-keygen

# 配置SSH
vi /home/kev/.ssh/config

    Host aliyun
      HostName 1.2.3.4
      User kev
      IdentityFile /home/kev/.ssh/id_rsa
      StrictHostKeyChecking no
      ServerAliveInterval 300
      ServerAliveCountMax 3

# 把客户端公钥拷贝到服务端
ssh-copy-id aliyun

# 安装软件
pacman -S autossh

# 创建服务
vi /etc/systemd/system/autossh.service

    [Unit]
    Description=AutoSSH service for a reverse tunnel
    After=network.target

    [Service]
    ExecStart=/usr/bin/autossh -f -N -M0 -R*:2222:localhost:22 -F /home/kev/.ssh/config aliyun

    [Install]
    WantedBy=multi-user.target

# 启动服务
systemctl start autossh

# 开机自启
systemctl enable autossh
```

### 移动端

在世界的任何角落, 只要能上网, 就可以登录到客户端.

```bash
ssh -p 2222 kev@1.2.3.4
```

