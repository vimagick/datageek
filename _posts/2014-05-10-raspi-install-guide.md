---
layout: post
title: raspi安装指南
tags: raspi
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
cd /etc/netctl
cp examples/ethernet-static eth0
vi eth0

    Interface=eth0
    Connection=ethernet
    IP=static
    Address=('192.168.1.111/24')
    Gateway='192.168.1.1'
    DNS=('8.8.8.8')
    ExecUpPost='/usr/bin/ntpd -gq || true'

reboot
```

### software

```bash
vi /etc/pacman.d/mirrorlist
pacman -Syu
pacman -S sudo vim tmux git python
ln -s /usr/bin/vim /usr/local/bin/vi
visudo
```

### account

```bash
useradd -m kev
passwd kev
usermod -aG wheel kev
```

