---
layout: post
title: 让图片上下颠倒的HTTP代理
tags: mitmproxy http proxy
---

### 介绍

mitmproxy是款基于文本界面的HTTP调试工具, 而且还可以用python脚本来操作Request/Response.

可以轻而易举地, 通过在HTML源码中植入代码(html/css/javascript), 来控制客户端的网页展现.

### 代码

```python
#!/usr/bin/env python
# mitmproxy script to turn images upside down

def contains(x, y):

    return any(y in i for i in x)

def request(content, flow):

    hd = flow.request.headers

    if 'Accept-Encoding' in hd and contains(hd['Accept'], 'text/html'):
        del hd['Accept-Encoding']

def response(context, flow):

    hd = flow.response.headers

    if 'Content-Encoding' not in hd and contains(hd['Content-Type'], 'text/html'):
        flow.response.content = flow.response.content.replace(
            '</head>',
            '<style>img {transform:rotate(180deg) !important;}</style></head>'
        )
```
