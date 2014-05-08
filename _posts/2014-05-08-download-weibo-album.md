---
layout: post
title: 下载微博相册
tags: firebug curl jq aria2
---

### 抓包

- firefox: <http://photo.weibo.com/2167446614/talbum/index?from=profile_wb>
- firebug:
    - 点击**下一页**, 截获`ajax`调用, 分析数据包
    - 导出**Cookies**: `Cookies » Export Cookies For This Site » /tmp/cookies.txt`

### 命令

```bash
curl -sb /tmp/cookies.txt "http://photo.weibo.com/photos/get_all?uid=2167446614&album_id=16274292&count=30&page=[1-$((2363/30+1))]&type=3&__rnd=1399527721236" |
    jq -r '.data.photo_list[] | .pic_host+"/large/"+.pic_name' |
        aria2c --auto-file-renaming=false --allow-overwrite=false --deferred-input -i - -d output
```

### 结果

```
output/
|-- 81309c56jw1eg5tyenldqj20nm0zkan3.jpg
|-- 81309c56jw1eg5z843pmgj21hc0xcnaa.jpg
|-- 81309c56jw1eg60ztd1dbj21hc0xctoc.jpg
|-- 81309c56jw1eg62qw87o5j20l60xc0y6.jpg
|-- 81309c56jw1eg64it9qagj218g0xcjzc.jpg
`-- ...
```

### 参考

- <https://getfirebug.com/faq/>
- <http://curl.haxx.se/docs/manpage.html>
- <http://stedolan.github.io/jq/manual/>
- <http://manpages.ubuntu.com/manpages/trusty/man1/aria2c.1.html>

