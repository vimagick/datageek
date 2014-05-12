---
layout: text
title: 京东图书评价
date: 2014-05-11 00:00:00
desc: 与《京东图书目录》配套的数据
tags: [jd, book]
info:
    name: jd-book-review
    format: json
    count: 167185
    date: 2014-05-11
    price: 0.00
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
    topic: 评价主题
    uid: 用户编号
    url: 评价链接
    vote: 打分
refs:
    - http://book.jd.com
files:
    - http://pan.baidu.com/s/1gduvobh
---

```json
{
  "uid": "81477675",
  "id": "b7f6b201-f861-474f-8413-eb7c1f04766d",
  "buydate": {
    "$date": "2014-04-29T00:00:00.000+0800"
  },
  "vote": 5,
  "address": "北京",
  "_id": {
    "$oid": "536f49f4d41b821e5c877236"
  },
  "content": "很不错啊 值得购买啊",
  "name": "Somcol",
  "level": "钻石会员",
  "url": "http://club.jd.com/repay/19251306_b7f6b201-f861-474f-8413-eb7c1f04766d_1.html",
  "pid": "19251306",
  "topic": "",
  "date": {
    "$date": "2014-05-06T15:23:31.000+0800"
  }
}
```

