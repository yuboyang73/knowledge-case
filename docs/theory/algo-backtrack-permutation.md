---
title: 回溯算法 — 排列树
description: 排列树概念、交换回溯框架、时间复杂度分析 — THEORY-ALGO-BACKTRACK-02
theory_id: THEORY-ALGO-BACKTRACK-02
---

# 回溯算法 — 排列树

## 概念模型

排列树用于求解**所有排列**类问题：

- 第一层 n 个分支（选任意元素放第一位）
- 第二层 n−1 个分支（选剩余元素放第二位）
- 以此类推，叶子节点数 = $n!$

```
        根
      / | \
    a   b   c         ← 第1层：放第1位
   /|\ /|\ /|\
  b c a c a b         ← 第2层：放第2位
  | | | | | |
  c b c a b a         ← 第3层：放第3位
```

一个叶子节点即原序列的一种排列。

## 核心框架

通过**交换元素**来生成排列，注意递归后要**换回来**：

```cpp
void swap(int arr[], int i, int j) {
    int temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

void permute(int arr[], int i, int length) {
    if (i == length) {                     // 到达叶子节点，打印一组排列
        for (int j = 0; j < length; j++)
            cout << arr[j] << " ";
        cout << endl;
        return;
    }
    
    for (int k = i; k < length; k++) {
        swap(arr, i, k);                   // 将 arr[k] 放到当前位置
        permute(arr, i + 1, length);       // 递归生成剩余位置的排列
        swap(arr, i, k);                   // 回溯：恢复原状
    }
}
```

## 与子集树的区别

| 维度 | 子集树 | 排列树 |
|------|--------|--------|
| 分支数 | 2（选/不选） | n−i+1（剩余元素个数） |
| 叶子数 | $2^n$ | $n!$ |
| 时间复杂度 | $O(2^n)$ | $O(n!)$ |
| 框架 | 两个递归调用 | for 循环内递归 |
| 回溯操作 | 辅助数组 x[] 标记 | swap 交换还原 |

## 排列树上的约束剪枝

在 `permute` 的 for 循环内、递归前进行约束判断：

```cpp
for (int k = i; k < length; k++) {
    swap(arr, i, k);
    if (judge(arr, i))              // 剪枝：当前放置位置是否合法
        permute(arr, i + 1, length);
    swap(arr, i, k);
}
```

---

## 配套练习

| 习题 | 关联说明 |
|------|---------|
| [N皇后问题](../exercises/backtrack/N皇后问题) | 排列树框架 + 对角线冲突判断剪枝 |
