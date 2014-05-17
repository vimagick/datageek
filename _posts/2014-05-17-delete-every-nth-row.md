---
layout: post
title: 文本隔行删除的方法
tags: text
---

文本处理工具多如牛毛，方法往往不止一种。 先给四个, 抛砖引玉。

### vim

```
:g/^/+d
```

### sed

```bash
sed '2~2d'
sed -n '1~2p'
```

### awk

```bash
awk 'NF%2'
```

### perl

```bash
perl -ne 'print if $.%2'
```
