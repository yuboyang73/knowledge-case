---
title: BF 字符串匹配
description: Brute Force 暴力匹配，主串中查找子串位置
theory_id: [THEORY-ALGO-STRING-01]
---

# BF 字符串匹配

## 题目描述

给定一个主串 `s` 和一个模式串 `t`，在主串中查找模式串第一次出现的位置。如果不存在，返回 -1。

**示例：**

> 输入: `s = "ABCDCABDEFG"`, `t = "ABX"`
> 输出: -1（因为不存在）
>
> 输入: `s = "ABCDCABDEFG"`, `t = "ABD"`
> 输出: 5

## 思路分析

**Brute Force（暴力匹配）**：从主串的每个位置开始，与模式串逐字符比较。

```
S: A B C D C A B D E F G
T: A B X
   0 1 2 → C≠X，失败
   ↑
   i 回溯到下一个位置
   
S: A B C D C A B D E F G
T:   A B X
     0 → B≠A，失败
```

## C++ 代码

```cpp
#include <bits/stdc++.h>
using namespace std;

int BF(string s, string t) {
    int i = 0, j = 0;
    while (i < s.size() && j < t.size()) {
        if (s[i] == t[j]) {
            i++, j++;        // 字符匹配，继续
        } else {
            i = i - j + 1;   // 主串回溯到本次匹配的下一个位置
            j = 0;           // 模式串回到开头
        }
    }
    return j == t.size() ? i - j : -1;
}

int main() {
    string s = "ABCDCABDEFG";
    string t = "ABX";
    int pos = BF(s, t);
    cout << pos << endl;      // 输出 -1
    return 0;
}
```

## 复杂度分析

| 维度 | 指标 |
|------|:----:|
| 时间复杂度 | $O(n \times m)$，最坏情况每次匹配到最后一个字符才失败 |
| 空间复杂度 | $O(1)$ |

## 易错点 / 拓展思考

- ❗ 主串回溯公式：`i = i - j + 1`，即回到本次匹配起始位置的下一个字符
- ❗ BF 对模式串的结构没有分析，导致大量无效匹配 — **KMP 解决了这个问题**
- **拓展**：当 `s = "AAAAAAAAAB"`, `t = "AAB"` 时，BF 要比较多少次？KMP 呢？
