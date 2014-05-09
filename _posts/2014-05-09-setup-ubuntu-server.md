---
layout: post
title: 设置Ubuntu服务器
tags: ubuntu aliyun
---

今天购买了aliyun虚拟机(Ubuntu 12.04 LTS), 有公网固定IP, 非常好!  
唯一的不足是, Ubuntu系统版本太低, 希望早日支持Ubuntu 14.04 LTS.  
早已习惯了在命令行下操作电脑, 需要安装一些必要工具, 如虎添翼.  

### basic

    sudo apt-get install python-software-properties
    sudo add-apt-repository ppa:kalakris/tmux
    sudo apt-get update
    sudo apt-get install tmux htop tree

### python

    curl -L https://raw.githubusercontent.com/pypa/pip/master/contrib/get-pip.py | sudo python
    sudo pip install ipython

### scrapy

    sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 627220E7
    echo 'deb http://archive.scrapy.org/ubuntu scrapy main' | sudo tee /etc/apt/sources.list.d/scrapy.list
    sudo apt-get update && sudo apt-get install scrapy-0.22

