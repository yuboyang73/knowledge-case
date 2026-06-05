---
title: LCS — 最长公共子序列
description: 求两个序列的最长公共子序列长度，递归+DP二维递推
theory_id: [THEORY-ALGO-DP-01]
---

# LCS — 最长公共子序列

## 题目描述

给定两个字符串（或序列），求它们的最长公共子序列（LCS）的长度。

**子序列**：不要求连续，但相对顺序必须保持不变。

**示例：**

> 输入: `s1 = "helloworld"`, `s2 = "hlweord"`
> 输出: 6
> 解释: 最长公共子序列为 "hlworld"（或其他，长度均为 6）

## 思路分析

### 递归思路（自顶向下）

从两个序列的**最后一个字符**开始向前比较：

```
LCS(s1, n, s2, m) =
  0                          (n<0 或 m<0)
  LCS(s1,n-1,s2,m-1) + 1    (s1[n] == s2[m])   ← 字符相等，长度+1
  max(LCS(s1,n,s2,m-1),     (s1[n] != s2[m])   ← 不相等，取两种情况的最大值
      LCS(s1,n-1,s2,m))
```

### 状态转移方程（自底向上）

定义 `dp[i][j]` = s1 前 i 个与 s2 前 j 个的 LCS 长度：

$$
dp[i][j] = 
\begin{cases}
0 & i=0 \text{ 或 } j=0 \\
dp[i-1][j-1] + 1 & s1[i-1] = s2[j-1] \\
\max(dp[i-1][j], dp[i][j-1]) & s1[i-1] \neq s2[j-1]
\end{cases}
$$

## C++ 代码

```cpp
#include <iostream>
#include <vector>
#include <algorithm>
#include <string>
using namespace std;

// 递归版本：清晰体现状态转移，但时间复杂度高
int LCS01(string X, int n, string Y, int m) {
    if (n < 0 || m < 0) return 0;
    if (X[n] == Y[m])
        return LCS01(X, n - 1, Y, m - 1) + 1;
    else
        return max(LCS01(X, n, Y, m - 1), LCS01(X, n - 1, Y, m));
}

// 递推版本（DP）：O(n*m) 时间，更实用
int LCS_DP(string X, string Y) {
    int n = X.size(), m = Y.size();
    vector<vector<int>> dp(n + 1, vector<int>(m + 1, 0));
    
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= m; j++) {
            if (X[i - 1] == Y[j - 1])
                dp[i][j] = dp[i - 1][j - 1] + 1;
            else
                dp[i][j] = max(dp[i - 1][j], dp[i][j - 1]);
        }
    }
    return dp[n][m];
}

int main() {
    string str1 = "helloworld";
    string str2 = "hlweord";
    cout << LCS_DP(str1, str2) << endl;  // 输出 6
    return 0;
}
```

## 复杂度分析

| 维度 | 指标（递归） | 指标（DP） |
|------|:----------:|:----------:|
| 时间复杂度 | $O(2^{n+m})$ | $O(n \cdot m)$ |
| 空间复杂度 | $O(n+m)$ 递归栈 | $O(n \cdot m)$ 可优化为 $O(\min(n,m))$ |

## 易错点 / 拓展思考

- ❗ 递归版本大量重复计算，n 稍大就会超时 — **一定要用记忆化搜索或递推**
- ❗ dp 数组下标从 1 开始，对应字符串的 `i-1` 位置
- ❗ 子序列 ≠ 子串。子串要求连续，子序列只要求顺序一致
- **拓展 1**：如何输出最长公共子序列**本身**（不只是长度）？
- **拓展 2**：如果求的是最长公共**子串**（连续），状态转移方程应该怎么变？
