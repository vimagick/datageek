---
layout: text
title: 京东商品评价(LTS)
date: 2014-05-15 00:00:00
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
    rate: 评分
    upvote: 有用
    reply: 回复
refs:
    - http://www.jd.com
files:
    - http://pan.baidu.com/s/1dD8C937#g2cu
---

```json
{
        "_id" : ObjectId("537483f6d41b825f6cb535b8"),
        "name" : "jd_5826351cdbdc9",
        "level" : "金牌会员",
        "url" : "http://club.jd.com/repay/793353_806ce4ad-5a49-4c6e-9d14-a27b97092acb_1.html",
        "upvote" : 0,
        "tags" : [
                "品种多",
                "分量足",
                "价格便宜"
        ],
        "pid" : "793353",
        "content" : "价格给力！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！",
        "rate" : 4,
        "time" : 1400144886,
        "date" : ISODate("2014-05-15T09:07:00Z"),
        "reply" : 0,
        "buydate" : ISODate("2014-05-13T16:00:00Z"),
        "id" : "806ce4ad-5a49-4c6e-9d14-a27b97092acb",
        "address" : "天津",
        "uid" : "77765804"
}
```

