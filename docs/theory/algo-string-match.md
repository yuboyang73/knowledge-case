---
title: 字符串匹配 — BF与KMP
description: BF暴力匹配、KMP算法原理、next数组构建与优化 — THEORY-ALGO-STRING-01
theory_id: THEORY-ALGO-STRING-01
---

# 字符串匹配 — BF 与 KMP

## 一、BF 算法（Brute Force）

### 核心思想

从主串的每个位置开始，与模式串逐字符比较：

```
主串:    ABC D C A B D E F G
模式串:  ABX
位置 0:  ABC vs ABX → 失败 (C≠X)
位置 1:  BCD vs ABX → 失败 (B≠A)
位置 2:  CDC vs ABX → 失败 (C≠A)
... 直到匹配成功或结束
```

### 代码

```cpp
int BF(string s, string t) {  // O(n*m)
    int i = 0, j = 0;
    while (i < s.size() && j < t.size()) {
        if (s[i] == t[j])
            i++, j++;
        else
            i = i - j + 1, j = 0;   // 主串 i 回溯，模式串 j 复位
    }
    return j == t.size() ? i - j : -1;
}
```

### BF 的缺陷

主串的 i 需要不断回溯，做了大量无效匹配。例如 `s = "AAAAAAAAAB"`，`t = "AAB"`，每次在最后一位失败都要从下一个位置重新开始。

## 二、KMP 算法

### 核心优化

**主串 i 不回退，只回退模式串 j** — 利用模式串的公共前后缀信息跳过不可能匹配的位置。

```
s:  A A A A A A A A A B
t:  A A B
    ✓ ✓ ✗ → j 回退（不回溯 i）
```

### next 数组

`next[j]` 表示当 `t[j]` 匹配失败时，j 应该回退的位置。

#### 构建 next 数组（优化版）

```cpp
int* getNext(string str) {
    int *next = new int[str.size()];
    int j = 0, k = -1;
    next[0] = -1;           // 首字符失败，j = -1 表示 i++ j++
    
    while (j < str.size() - 1) {
        if (k == -1 || str[j] == str[k]) {
            j++, k++;
            if (str[j] == str[k])
                next[j] = next[k];      // KMP 优化：连续相同字符直接跳转
            else
                next[j] = k;
        } else {
            k = next[k];                // k 值回溯
        }
    }
    return next;
}
```

#### next 数组示例

```
t = "abcabR"
next[0] = -1
next[1] = 0   (a)
next[2] = 0   (ab)
next[3] = 0   (abc)
next[4] = 1   (abca → 前缀a=后缀a)
next[5] = 2   (abcab → 前缀ab=后缀ab)
next[5] (R) → 匹配失败时 j 回到 2（第三个字符）
```

### KMP 匹配过程

```cpp
int KMP(string s, string t) {
    int *next = getNext(t);
    unique_ptr<int> ptr(next);       // 自动释放
    
    int i = 0, j = 0;
    int n = s.size(), m = t.size();
    while (i < n && j < m) {
        if (j == -1 || s[i] == t[j])
            i++, j++;
        else
            j = next[j];             // 核心：i 不回退，只回退 j
    }
    return j == m ? i - j : -1;
}
```

### 复杂度分析

| 算法 | 时间复杂度 | 空间复杂度 |
|------|:---------:|:---------:|
| BF | $O(n \times m)$ | $O(1)$ |
| KMP | $O(n + m)$ | $O(m)$ |

---

## 配套练习

| 习题 | 关联说明 |
|------|---------|
| [BF字符串匹配](../exercises/string/BF字符串匹配) | 暴力匹配实现，理解 KMP 的优化动机 |
| [KMP字符串匹配](../exercises/string/KMP字符串匹配) | next 数组构建 + KMP 匹配完整实现 |
