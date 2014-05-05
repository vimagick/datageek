---
layout: default
title: 生成相册缩略图
date: 2014-05-04 00:00:00
tags: imagemagick
---

### 输入

```
.
|-- 丝袜美腿/
|   |-- 90后美腿美女穿黄色丝袜/
|   |   |-- 08c45647b0a78180ded2fb18392f17cc0acd47ba.jpg
|   |   |-- 88449a4618b128b161181655d3079f60b24efaa2.jpg
|   |   |-- 9a35134fa33ac1049a19bd22bd4bb3926731ca1a.jpg
|   |   |-- bdba6938ce1396349fc8ac0c1e62bbf477ffbac5.jpg
|   |   |-- be630c40fe7fd84bafb9a116a9834d0e43bf9e76.jpg
|   |   |-- ...
|   |-- Beautyleg美腿Linda/
|   |-- cosplay粉色天使 护士的诱惑/
|   |-- Faye腿模超薄丝袜沙发上激情秀/
|   |-- Olivia条纹比基尼无丝写真/
|   |-- Olivia的OL肉丝性感妩媚/
|   |-- OL超美女模特angle大胆显露身材/
|   |-- 不一样的黑丝 一样的性感/
|   |-- ...
|-- ...
```

### 命令

```bash
#!/bin/bash
# generate thumbnails for albums
#
IFS=$'\n'
mkdir -p thumbnails
find . -mindepth 2 -type d |
    while read i
    do
        echo "$i"
        input=($(find "$i" -type f | head -4))
        output=thumbnails/$(echo "${i%/}" | sed 's@^./@@' | sed 's@/@-@g').jpg
        montage -tile 2x2 -geometry 80x60  ${input[@]} $output
    done
unset IFS
```

### 输出

```
thumbnails/
|-- 丝袜美腿-90后美腿美女穿黄色丝袜.jpg
|-- 丝袜美腿-Beautyleg美腿Linda.jpg
|-- 丝袜美腿-cosplay粉色天使 护士的诱惑.jpg
|-- 丝袜美腿-Faye腿模超薄丝袜沙发上激情秀.jpg
|-- 丝袜美腿-Olivia条纹比基尼无丝写真.jpg
|-- 丝袜美腿-Olivia的OL肉丝性感妩媚.jpg
|-- 丝袜美腿-OL超美女模特angle大胆显露身材.jpg
|-- 丝袜美腿-不一样的黑丝 一样的性感.jpg
|-- ...
```

### 参考

- <http://www.gnu.org/software/bash/manual/bashref.html#Bourne-Shell-Variables>
- <http://manpages.ubuntu.com/manpages/trusty/man1/find.1.html>
- <http://www.imagemagick.org/Usage/montage/>

