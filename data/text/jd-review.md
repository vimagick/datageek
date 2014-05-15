---
layout: text
title: 京东商品评价(LTS)
date: 2014-05-11 00:00:00
desc: 京东商品评论实时采集(数据量:>1000万/月), 长期支持, 包月只要￥1000, 欢迎购买.
tags: [jd, lts]
info:
    name: jd-review
    format: json
    count: 10000000
    date: 2014-05-15
    price: 1000.00
fields:
    _id: 数据库主键
    address: 地址
    buydate: 购买日期
    content: 评价内容
    date: 评价日期
    id: 评价编号
    level: 用户等级
    name: 用户姓名
    pid: 商品编号
    tags: 标签(多值)
    uid: 用户编号
    url: 评价链接
    vote: 打分
refs:
    - http://www.jd.com
files:
---

```json
{
        "_id" : ObjectId("53741164d41b8245eb162012"),
        "name" : "yanshaoqing86",
        "level" : "铜牌会员",
        "url" : "http://club.jd.com/repay/1057189845_5d610419-eb5d-4270-909d-d515beabd608_1.html",
        "tags" : [
                "包装很好"
        ],
        "pid" : "1057189845",
        "content" : "好像没看清，给另外一个车用吧",
        "date" : ISODate("2014-05-15T00:58:00Z"),
        "address" : "江苏",
        "vote" : 5,
        "buydate" : ISODate("2014-05-04T00:59:00Z"),
        "id" : "5d610419-eb5d-4270-909d-d515beabd608",
        "uid" : "146608425"
}
```

