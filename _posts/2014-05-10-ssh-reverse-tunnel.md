---
layout: post
title: 使用SSH创建反向隧道
tags: ssh autossh raspi
---

北京外来务工人员的生存环境异常恶劣.  
停电/停水/断网, 家常便饭, 不值一提.  
鉴于贫民窟的治安状况, 东西被盗是迟早的事.  
打算基于raspi(树莓派), 开发《防盗监控系统》.  
目前, 硬件设备已经到位:

- 树莓派小电脑: 配备摄像头
- 阿里云虚拟机: 提供固定IP
- 小米移动电源: 独立供电

### 服务端(ubuntu)

```bash
vi /etc/ssh/sshd_config

    # append to the EOF
    GatewayPorts yes

service ssh restart
```

### 客户端(arch)

```bash
ssh-keygen
vi /home/kev/.ssh/config

    Host aliyun
      HostName 1.2.3.4
      User kev
      IdentityFile /home/kev/.ssh/id_rsa
      StrictHostKeyChecking no

ssh-copy-id aliyun

pacman -S autossh
vi /etc/systemd/system/autossh.service

    [Unit]
    Description=AutoSSH service for a reverse tunnel
    After=network.target

    [Service]
    ExecStart=/usr/bin/autossh -M 51413 -q -N -R *:31415:localhost:22 -F /home/kev/.ssh/config aliyun

    [Install]
    WantedBy=multi-user.target

systemctl start autossh
systemctl enable autossh
```

### 移动端(kali)

```bash
ssh -p 31415 kev@1.2.3.4
```

