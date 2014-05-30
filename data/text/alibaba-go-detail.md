---
layout: text
title: 阿里巴巴求购详情(LTS)
date: 2014-05-29 00:00:00
desc: 阿里巴巴求购信息实时采集(数据量:>38万/月), 长期支持, 包月只要￥1000, 欢迎购买.
tags: [buz, alibaba, lts]
info:
    name: alibaba-go-detail
    format: json
    date: 2014-05-16
    count: 380000
    price: 1000.00
fields:
    _id: 数据库主键
    title: 标题
    url: 链接
    buy_list: 求购单
    buy_type: 求购类型
    cates: 分类编号(多值)
    exp_date: 过期日期
    icons: 图标(多值)
    buyer: 求购者
    mid: 求购者编号
    oid: 求购编号
    addr: 求购者地址
    quote_count: 报价数
    quote_list: 报价单
    rcv_date: 期望收货日期
    req_list: 采购要求
    rfq_date: 询价日期
    time: 采集时间
refs:
    - http://s.1688.com/newbuyoffer/buyoffer_search.html?descendOrder=true&filt=y&n=y&province=&city=&sortType=postTime
files:
    - http://pan.baidu.com/s/1hqtE8iK#b1oo
---

```json
{
  "quote_list": [
    {
      "icons": [
        "诚信通",
        "实地认证"
      ],
      "addr": "广东",
      "terms": [
        "支付宝担保交易",
        "普通发票",
        "生产备货周期：30天"
      ],
      "mid": "l****8",
      "date": {
        "$date": "2014-05-29T00:00:00.000+0800"
      }
    },
    {
      "icons": [
        "诚信通",
        "实地认证"
      ],
      "addr": "江苏",
      "terms": [
        "支付宝担保交易",
        "普通发票"
      ],
      "mid": "b****3",
      "date": {
        "$date": "2014-05-29T00:00:00.000+0800"
      }
    }
  ],
  "oid": "34247570",
  "buy_type": "现货/标准品",
  "mid": "jbyq68",
  "buy_list": [
    {
      "desc": "容积:160L以上，温度：0度",
      "unit": "台",
      "img": null,
      "product": "单门展示柜",
      "count": 100
    },
    {
      "desc": "容积：250以上，温度：0度",
      "unit": "台",
      "img": null,
      "product": "单门展示柜",
      "count": 100
    }
  ],
  "url": "http://go.1688.com/buyoffer/34247570.htm",
  "title": "求购单门展示柜",
  "addr": "江苏常州",
  "quote_count": 2,
  "_id": {
    "$oid": "538681edd600ddf019f4183d"
  },
  "rcv_date": null,
  "buyer": "常州普天仪器制造有限公司",
  "req_list": [
    {
      "payment": "支付宝担保交易",
      "invoice": "无需发票",
      "rcv_addr": "江苏 常州 金坛市"
    }
  ],
  "exp_date": {
    "$date": "2014-06-28T00:00:00.000+0800"
  },
  "cates": [
    "65",
    "10095",
    "1036404"
  ],
  "time": 1401324013.538764,
  "rfq_date": {
    "$date": "2014-05-29T08:00:00.000+0800"
  },
  "icons": [
    "诚信通",
    "企业认证"
  ]
}
```

