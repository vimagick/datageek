---
layout: post
title: 让图片上下颠倒的HTTP代理
tags: mitmproxy http proxy
---

## 介绍

mitmproxy是款基于文本界面的HTTP调试工具, 而且还可以用python脚本来操作Request/Response.

可以轻而易举地, 通过在HTML源码中植入代码(html/css/javascript), 来控制客户端的网页展现.

## 代码

{% gist vimagick/3f5acbb1081937a51f10 %}


