---
title: N皇后问题
description: 在 N×N 棋盘上放置 N 个皇后，使任意两个皇后不在同一行/列/对角线
theory_id: [THEORY-ALGO-BACKTRACK-02]
---

# N皇后问题

## 题目描述

经典的八皇后问题：在 $N \times N$ 的棋盘上放置 N 个皇后，任意两个皇后都不能处于同一行、同一列或同一对角线上。

输出所有合法摆放方案的数量（或具体摆放位置）。

**示例（N=8）：**

> 输出: 92（共有 92 种不同的摆放方案）

## 思路分析

**建模**：用一维数组 `arr[i] = j` 表示第 i 行的皇后放在第 j 列。

**核心思路**：用**排列树**生成所有排列（每行皇后必须放在不同列），再用约束条件剪枝。

**排列树框架：**
- 初始数组 `arr[] = {1, 2, 3, 4, 5, 6, 7, 8}`（下标从 1 开始）
- 通过交换元素生成所有排列
- 每生成一个排列，检查是否满足对角线的约束

**约束条件：**
```
任意两行 i, j：
  ① i == j          → 同行（排列树保证不会出现）
  ② arr[i] == arr[j] → 同列（排列树保证不会出现）
  ③ |i - j| == |arr[i] - arr[j]| → 对角线冲突 ✅ 需要剪枝！
```

## C++ 代码

```cpp
#include <iostream>
#include <cmath>
using namespace std;

int cnt = 0;  // 统计方案总数

void swap(int arr[], int i, int j) {
    int temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

// 判断第 i 行的皇后是否和前面的皇后冲突
bool judge(int arr[], int i) {
    for (int j = 0; j < i; ++j) {
        if (abs(i - j) == abs(arr[i] - arr[j]))
            return false;   // 对角线冲突
    }
    return true;
}

void func(int arr[], int i, int length) {
    if (i == length) {                      // 完成一种完整排列
        cnt++;
        for (int j = 0; j < length; ++j)
            cout << arr[j] << " ";
        cout << endl;
        return;
    }
    
    for (int k = i; k < length; k++) {
        swap(arr, i, k);                    // 将 arr[k] 放置到第 i 行
        if (judge(arr, i))                  // 剪枝：检查对角线
            func(arr, i + 1, length);
        swap(arr, i, k);                    // 回溯：恢复原状
    }
}

int main() {
    int arr[] = {1, 2, 3, 4, 5, 6, 7, 8};  // arr[i]=j 表示第i行第j列
    func(arr, 0, 8);
    cout << "Total: " << cnt << endl;       // N=8 时输出 92
    return 0;
}
```

## 复杂度分析

| 维度 | 指标 |
|------|------|
| 时间复杂度 | $O(N!)$，排列树叶子数，剪枝后大幅减少 |
| 空间复杂度 | $O(N)$，递归栈深度 |

## 易错点 / 拓展思考

- ❗ judge 函数只需要检查前面的行（`0..i-1`），因为后面的行还没放置
- ❗ 初始数组从 1 开始编号还是 0 开始编号？影响对角线判断，保持一致即可
- ❗ 这里的 `arr[i]` 是 1-based（表示第 1 到第 N 列），注意与 0-based 的区别
- **拓展 1**：如何用位运算加速 N 皇后？（bitmask 方法 $O(N!)$ 但常数极小）
- **拓展 2**：N=8 有 92 组解，N=12 有 14200 组解，N=16 有 14772512 组解
