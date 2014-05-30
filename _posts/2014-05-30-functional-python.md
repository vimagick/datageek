---
layout: post
title: 函数式python
tags: python javascript functional
---

> 警告: 不要被我忽悠了, 弄那些该弄的东西吧!

`underscore.js`提供了很多小巧玲珑, 功能专一, 高度抽象的函数.  
正因为有这些优良品质, 它们之间的精妙组合, 可以解决任何问题.  
对于那些以代码为生的人, 见到如此优美的代码, 不禁让人感动流泪!  
计算机编程: 语法是基础, 类库是工具, 模式是内功, 思想是王道!  
不同的编程语言之间, 语法虽然不同, 但是埋藏于深处的思想是相通的.  

还没来得及去看`_.matches()`函数的`javascript`实现.  
这些是我的`python`进化式(5年前, 3年前, 今天)实现:  

### Imperative

一个for循环搞定, 没啥技术含量!

```python
def matches(attrs, obj):
    for k,v in attrs.iteritems():
        if obj.get(k) != v:
            return False
    else:
        return True
```

### Functional

我靠, 用到了闭包, 这也太牛逼了吧! 

```python
def matches(attrs):
    def check(obj):
        for k,v in attrs.iteritems():
            if obj.get(k) != v:
                return False
        else:
            return True
    return check
```

### Functional (One-Liner)

亲, 还能更短吗ǎ?!

```python
matches = lambda attrs: lambda obj: all(obj.get(k)==v for k,v in attrs.iteritems())
```

<sub>**注意** 此行代码, 仅供参考; 擅自使用, 后果自负!</sub>

### 参考文献

- http://underscorejs.org/#matches
