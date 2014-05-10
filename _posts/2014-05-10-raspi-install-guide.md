---
layout: post
title: 树莓派安装指南
tags: raspi archlinux
---

### install

```bash
wget http://212.187.212.68/bt/c79f39377007c630af3afb4fa3c187ef993806bd/data/ArchLinuxARM-2014.05-rpi.img.zip
unzip ArchLinuxARM-2014.05-rpi.img
dd if=ArchLinuxARM-2014.05-rpi.img of=/dev/sdb bs=4M
eject /dev/sdb
```

### partition

```bash
cfdisk /dev/mmcblk0
mkfs.ext4 /dev/mmcblk0p6
vi /etc/fstab
mount -a
```

### datetime

```bash
ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
ntpdate time.apple.com
```

### network

```bash
# 有线网络
cd /etc/netctl
cp examples/ethernet-dhcp eth0
vi eth0

    Interface=eth0
    Connection=ethernet
    IP=dhcp
    ExecUpPost='/usr/bin/ntpdate -u time.apple.com || true'

# 无线网络
cp examples/wireless-static wlan0
vi wlan0

    Interface=wlan0
    Connection=wireless
    Security=wpa
    ESSID='MyNetwork'
    Key='WirelessKey'
    IP=static
    Address='192.168.1.111/24'
    Gateway='192.168.1.1'
    DNS='8.8.8.8'
    ExecUpPost='/usr/bin/ntpdate -u time.apple.com || true'

# 重启机器
reboot
```

### software

```bash
vi /etc/pacman.d/mirrorlist

    Server = http://us.mirror.archlinuxarm.org/$arch/$repo

pacman -Syu
pacman -S vim tmux git python python-pip base-devel
ln -s /usr/bin/vim /usr/local/bin/vi
visudo

    %wheel ALL=(ALL) NOPASSWD: ALL

```

### account

```bash
useradd -m kev
passwd kev
usermod -aG wheel kev
```

