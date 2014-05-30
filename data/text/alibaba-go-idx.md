---
layout: text
title: 阿里巴巴求购列表(LTS)
date: 2014-05-16 00:00:00
desc: 阿里巴巴求购信息实时采集(数据量:>38万/月), 长期支持, 包月只要￥1000, 欢迎购买.
tags: [buz, alibaba, lts]
info:
    name: alibaba-go-idx
    format: json
    date: 2014-05-16
    count: 380000
    price: 1000.00
fields:
    _id: 数据库主键
    count: 采购量
    unit: 采购单位
    reply: 标价数
    title: 标题
    url: 链接
    oid: 采购编号
    mid: 会员编号
    date: 发布日期
    expire: 剩余天数
    time: 采集时间
    buyer: 买家名称
    icons: 图标(多值)
    buytype: 信息类型
refs:
    - http://s.1688.com/newbuyoffer/buyoffer_search.html?descendOrder=true&filt=y&n=y&province=&city=&sortType=postTime
files:
    - http://pan.baidu.com/s/1eQ1jcSM#6uen
---

```json
{
    "_id" : ObjectId("53757831d600ddf019f284de"),
    "count" : 3000,
    "reply" : 1,
    "title" : "采购库存夏季用毯子 空调毯",
    "url" : "http://go.1688.com/buyoffer/32785802.htm",
    "oid" : "32785802",
    "mid" : "kekexili716",
    "date" : ISODate("2014-05-15T16:00:00Z"),
    "expire" : 16,
    "time" : 1400207409,
    "buyer" : "",
    "icons" : [
            "诚信通",
            "企业认证",
            "4星级"
    ],
    "unit" : "条",
    "buytype" : "现货/标准品"
}
```

