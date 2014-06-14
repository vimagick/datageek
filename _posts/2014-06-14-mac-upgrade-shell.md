---
layout: post
title: 苹果shell升级指南
tags: mac shell
---

从Linux转到MacOSX, 过渡还算平稳.
但是也遇到一些问题:

- 系统自带的命令行工具版本过低
- 键盘快捷键与Linux差别较大(多了个`⌘`键)
- 应用商店里的大部分软件都收费
- ...

有些可以解决, 有些只能适应. 幸好, 我大部分时间只使用`shell`和`firefox`!

### 脚本

```bash
# instal brew
ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"

# install bash
brew install bash
echo /usr/local/bin/bash | sudo tee -a /etc/shells
chsh -s /usr/local/bin/bash

# install grep/sed/awk
brew tap homebrew/dupes
brew install grep gnu-sed gawk --default-names
hash -r
```
