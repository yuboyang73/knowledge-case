---
title: KMP 字符串匹配
description: 利用 next 数组实现主串不回溯的高效匹配
theory_id: [THEORY-ALGO-STRING-01]
---

# KMP 字符串匹配

## 题目描述

给定一个主串 `s` 和一个模式串 `t`，使用 KMP 算法在主串中查找模式串第一次出现的位置。要求主串指针不回溯，时间复杂度 $O(n+m)$。

**示例：**

> 输入: `s = "abcabdefabcabc"`, `t = "abcabR"`
> 输出: -1

## 思路分析

**KMP 核心思想**：利用模式串的**公共前后缀**信息（next 数组），匹配失败时只回退模式串 j，主串 i 不回溯。

### next 数组的含义

`next[j]` = 当 `t[j]` 匹配失败时，j 应该回退到的位置。

```
t =   a b c a b R
next =[-1,0,0,0,1,2]

            ↓ 匹配失败
s: a b c a b d e f a b c a b c
t: a b c a b R
   a b c a b R
          ↑ j=5 时失败，next[5]=2，j 跳到 2
          
s: a b c a b d e f a b c a b c
t:         a b c a b R
             ↑ 从 t[2] 继续比较
```

### KMP 优化

如果 `t[k] == t[j]`，则 `next[j] = next[k]`（跳过相同的字符，减少不必要的回退）。

## C++ 代码

```cpp
#include <bits/stdc++.h>
using namespace std;

int* getNext(string str) {
    int *next = new int[str.size()];
    int j = 0, k = -1;
    next[0] = -1;
    
    while (j < str.size() - 1) {
        if (k == -1 || str[j] == str[k]) {
            j++, k++;
            if (str[j] == str[k])
                next[j] = next[k];   // 优化：跳过相同字符
            else
                next[j] = k;
        } else {
            k = next[k];             // k 值回溯
        }
    }
    return next;
}

int KMP(string s, string t) {
    int *next = getNext(t);
    unique_ptr<int> ptr(next);       // 自动释放内存
    
    int i = 0, j = 0;
    int n = s.size(), m = t.size();
    
    while (i < n && j < m) {
        if (j == -1 || s[i] == t[j]) {
            i++, j++;
        } else {
            j = next[j];             // 主串 i 不回退，只回退 j
        }
    }
    return j == m ? i - j : -1;
}

int main() {
    string s = "abcabdefabcabc";
    string t = "abcabR";
    int pos = KMP(s, t);
    cout << pos << endl;  // -1
    return 0;
}
```

## 复杂度分析

| 维度 | 指标 |
|------|:----:|
| 时间复杂度 | $O(n + m)$，构建 next 数组 $O(m)$，匹配过程 $O(n)$ |
| 空间复杂度 | $O(m)$，存储 next 数组 |

## 易错点 / 拓展思考

- ❗ next 数组的 `j == -1` 条件不能丢，表示首字符匹配失败，此时 i++ j++（j 从 0 开始）
- ❗ `t.size()` 返回 `size_t` 无符号类型，不能和 `-1` 比较，要转成 `int`
- ❗ KMP 优化（`if str[j]==str[k]` 时 `next[j]=next[k]`）虽然代码更短，但逻辑需要多思考几遍
- **拓展 1**：KMP 的 next 数组还有未优化的原始版本（其中 `next[j]=k` 不判断相等），理解两者的区别
- **拓展 2**：BM 算法和 Sunday 算法是比 KMP 更快的字符串匹配算法，分别从后往前匹配和利用黄金分割点
