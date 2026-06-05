---
title: 前缀和与差分
description: 前缀和与差分的核心公式与应用场景 — THEORY-ALGO-PREFIX-01
theory_id: THEORY-ALGO-PREFIX-01
---

# 前缀和与差分

## 一、前缀和（Prefix Sum）

### 定义

$$
prefix[i] = \sum_{k=1}^{i} arr[k]
$$

常用公式：**区间 [l, r] 的和 = prefix[r] − prefix[l−1]**

### 代码实现

```cpp
vector<int> prefix(n + 1, 0);
for (int i = 1; i <= n; ++i)
    prefix[i] = prefix[i - 1] + arr[i - 1];  // prefix[0]=0 方便处理边界

// 查询区间 [l, r] 的和 (0-based)
int sum = prefix[r + 1] - prefix[l];
```

### 应用场景

- 静态数组区间和查询（多次查询）
- 二维前缀和（矩阵区域和）
- 与差分配合使用

---

## 二、差分（Difference Array）

### 定义

差分数组 `diff[i]` 表示原数组相邻元素的差值：

$$
diff[i] = 
\begin{cases}
arr[0] & i = 0 \\
arr[i] - arr[i - 1] & i \ge 1
\end{cases}
$$

### 核心操作：区间修改 O(1)

对原数组 `arr[l..r]` 全部加 `val`：

```cpp
diff[l] += val;
diff[r + 1] -= val;
```

### 还原原数组

```cpp
arr[0] = diff[0];
for (int i = 1; i < n; ++i)
    arr[i] = diff[i] + arr[i - 1];
```

### 完整示例

```cpp
#include <iostream>
#include <vector>
using namespace std;

int main() {
    // 1. 原始分数 (10个学生)
    vector<int> a = {60, 70, 80, 75, 90, 85, 65, 70, 95, 80};
    int n = a.size();

    // 2. 预处理出差分数组 diff
    vector<int> diff(n + 1, 0);
    diff[0] = a[0];
    for (int i = 1; i < n; ++i)
        diff[i] = a[i] - a[i - 1];

    // 3. 区间修改：给下标 [2, 7] 加 5 分
    int L = 2, R = 7, val = 5;
    diff[L] += val;
    diff[R + 1] -= val;

    // 4. 还原最终分数
    a[0] = diff[0];
    for (int i = 1; i < n; ++i)
        a[i] = diff[i] + a[i - 1];

    for (int score : a) cout << score << " ";
    // 结果: 60 70 85 80 95 90 70 75 95 80
    return 0;
}
```

### 应用场景

- 多次区间修改 + 最后一次性查询
- 航班预订统计（LeetCode 1109）
- 拼车问题（LeetCode 1094）

### 与线段树的对比

| 操作 | 差分数组 | 线段树 |
|------|---------|--------|
| 单次区间修改 | O(1) | O(logn) |
| 单次区间查询 | O(n) | O(logn) |
| 多次修改后多次查询 | ❌ 不适合 | ✅ 适合 |

**差分适合：多次区间修改 + 最后一次性还原的场景。**

---

## 配套练习

| 习题 | 关联说明 |
|------|---------|
| 1109-航班预订统计（待补充） | 差分经典应用：区间座位预订 |
| 1094-拼车（待补充） | 差分区间修改 + 容量检查 |
