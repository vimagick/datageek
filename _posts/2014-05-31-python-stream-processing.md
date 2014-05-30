---
layout: post
title: python流处理
tags: python functional
---

处理源源不断生成的数据, 称为“流处理”.  
这些数据最大的特点是, 神龙见首不见尾.  
看起来像个“数组”, 但是它的长度是+∞.  
这是个神奇的数据, 可远观, 而不可亵玩焉!  

> 警告: 使用`list(repeat(1))`可以把电脑搞得无响应!

### 素数生成器

```python
#!/usr/bin/env python3

from itertools import takewhile

def tgen():
    while True:
        yield 2

def igen():
    for i in twos:
        yield i
        yield from map(lambda x:x+1, igen())

def pgen(s):
    for i in s:
        yield i
        yield from pgen(filter(lambda x:x%i, s))

if __name__=='__main__':

    # 2 2 2 ...
    twos = tgen()
    # 2 3 4 ...
    ints = igen()
    # 2 3 5 ...
    primes = pgen(ints)

    print(list(takewhile(lambda x:x<100, primes)))
```
