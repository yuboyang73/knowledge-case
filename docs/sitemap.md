---
title: 知识库完整索引
description: C++数据结构与算法 — 理论模块与习题的完整映射
---

# 📋 知识库完整索引

> 本知识库按 **理论 → 习题** 双向关联体系组织，每个理论模块对应若干道习题，习题通过唯一ID引用理论。

---

## 🧭 使用指南

- **理论文件** → 概念解析、图解推导、核心代码模板，末尾含「配套练习」清单
- **习题文件** → 严格遵循「题目→思路→代码→复杂度→易错点」结构，头部标注前置理论ID
- **唯一ID** — 格式 `THEORY-XXX-NN` / `EX-XXX-NN`，文件名变更不影响链接

---

## 一、理论模块一览

| ID | 文件 | 专题 | 核心内容 |
|----|------|------|---------|
| THEORY-CPP-STL-01 | [cpp-stl-sort.md](./theory/cpp-stl-sort) | C++基础 | STL容器、sort排序、lambda表达式 |
| THEORY-CPP-OVERLOAD-01 | [cpp-operator-overload.md](./theory/cpp-operator-overload) | C++基础 | 函数重载、运算符重载规则与实现 |
| THEORY-DS-BST-01 | [ds-binary-search-tree.md](./theory/ds-binary-search-tree) | 数据结构-树 | BST插入/删除/查询完整模板 |
| THEORY-DS-HASH-01 | [ds-hashmap.md](./theory/ds-hashmap) | 数据结构-哈希 | unordered_map/set 函数速查 |
| THEORY-ALGO-PREFIX-01 | [algo-prefix-diff.md](./theory/algo-prefix-diff) | 算法-基础 | 前缀和与差分核心公式 |
| THEORY-ALGO-BACKTRACK-01 | [algo-backtrack-subset.md](./theory/algo-backtrack-subset) | 算法-回溯 | 子集树框架与剪枝策略 |
| THEORY-ALGO-BACKTRACK-02 | [algo-backtrack-permutation.md](./theory/algo-backtrack-permutation) | 算法-回溯 | 排列树交换回溯框架 |
| THEORY-ALGO-DC-01 | [algo-divide-conquer.md](./theory/algo-divide-conquer) | 算法-分治 | 分治四特性、典型应用框架 |
| THEORY-ALGO-BRANCHBOUND-01 | [algo-branch-bound.md](./theory/algo-branch-bound) | 算法-分支限界 | FIFO/优先级队列式、限界函数 |
| THEORY-ALGO-GREEDY-01 | [algo-greedy.md](./theory/algo-greedy) | 算法-贪心 | 贪心策略与最优子结构 |
| THEORY-ALGO-SEARCH-01 | [algo-dfs-bfs.md](./theory/algo-dfs-bfs) | 算法-搜索 | DFS递归模板 + BFS队列模板 |
| THEORY-DS-GRAPH-01 | [ds-graph-storage.md](./theory/ds-graph-storage) | 数据结构-图 | 邻接矩阵/表/链式前向星 |
| THEORY-ALGO-DP-01 | [algo-dp-basics.md](./theory/algo-dp-basics) | 算法-动态规划 | DP三要素、状态转移方程 |
| THEORY-ALGO-STRING-01 | [algo-string-match.md](./theory/algo-string-match) | 算法-字符串 | BF/KMP原理与next数组 |
| THEORY-DS-TRIE-01 | [ds-trie.md](./theory/ds-trie) | 数据结构-Trie | Trie树性质与CRUD操作 |

---

## 二、习题文件一览

| ID | 文件 | 专题 | 难度 | 关联理论 |
|:--:|------|------|:----:|---------|
| EX-HASH-01 | [0049-字母异位词分组.md](./exercises/hash/0049-字母异位词分组) | 哈希 | Medium | THEORY-DS-HASH-01 |
| EX-HASH-02 | [0001-两数之和.md](./exercises/hash/0001-两数之和) | 哈希 | Easy | THEORY-DS-HASH-01 |
| EX-BACKTRACK-01 | [整数问题-子集树最小差值.md](./exercises/backtrack/整数问题-子集树最小差值) | 回溯 | Medium | THEORY-ALGO-BACKTRACK-01 |
| EX-BACKTRACK-02 | [N皇后问题.md](./exercises/backtrack/N皇后问题) | 回溯 | Hard | THEORY-ALGO-BACKTRACK-02 |
| EX-BACKTRACK-03 | [0-1背包-回溯法.md](./exercises/backtrack/0-1背包-回溯法) | 回溯 | Medium | THEORY-ALGO-BACKTRACK-01 |
| EX-GREEDY-01 | [硬币问题-贪心.md](./exercises/greedy/硬币问题-贪心) | 贪心 | Easy | THEORY-ALGO-GREEDY-01 |
| EX-GREEDY-02 | [部分背包问题.md](./exercises/greedy/部分背包问题) | 贪心 | Medium | THEORY-ALGO-GREEDY-01 |
| EX-DC-01 | [0004-两有序数组中位数.md](./exercises/divide-conquer/0004-两有序数组中位数) | 分治 | Hard | THEORY-ALGO-DC-01 |
| EX-DP-01 | [LCS-最长公共子序列.md](./exercises/dp/LCS-最长公共子序列) | DP | Medium | THEORY-ALGO-DP-01 |
| EX-DP-02 | [LIS-最长递增子序列.md](./exercises/dp/LIS-最长递增子序列) | DP | Medium | THEORY-ALGO-DP-01 |
| EX-STRING-01 | [BF字符串匹配.md](./exercises/string/BF字符串匹配) | 字符串 | Easy | THEORY-ALGO-STRING-01 |
| EX-STRING-02 | [KMP字符串匹配.md](./exercises/string/KMP字符串匹配) | 字符串 | Hard | THEORY-ALGO-STRING-01 |
| EX-TWOPTR-01 | [0011-盛最多水的容器.md](./exercises/two-pointers/0011-盛最多水的容器) | 双指针 | Medium | THEORY-ALGO-SEARCH-01 |
| EX-TWOPTR-02 | [0015-三数之和.md](./exercises/two-pointers/0015-三数之和) | 双指针 | Medium | THEORY-ALGO-SEARCH-01 |
| EX-TWOPTR-03 | [0042-接雨水.md](./exercises/two-pointers/0042-接雨水) | 双指针 | Hard | THEORY-ALGO-SEARCH-01 |
| EX-SLIDING-01 | [0003-无重复字符最长子串.md](./exercises/sliding-window/0003-无重复字符最长子串) | 滑动窗口 | Medium | THEORY-DS-HASH-01 |
| EX-GRAPH-01 | [0994-腐烂的橘子.md](./exercises/graph/0994-腐烂的橘子) | 图-BFS | Medium | THEORY-ALGO-SEARCH-01 / THEORY-DS-GRAPH-01 |
| EX-GRAPH-02 | [0207-课程表.md](./exercises/graph/0207-课程表) | 图-拓扑 | Medium | THEORY-DS-GRAPH-01 |
| EX-TREE-01 | [0102-二叉树层序遍历.md](./exercises/tree/0102-二叉树层序遍历) | 树 | Medium | THEORY-DS-BST-01 |
| EX-TREE-02 | [0226-翻转二叉树.md](./exercises/tree/0226-翻转二叉树) | 树 | Easy | THEORY-DS-BST-01 |
| EX-TREE-03 | [0101-对称二叉树.md](./exercises/tree/0101-对称二叉树) | 树 | Easy | THEORY-DS-BST-01 |
| EX-TREE-04 | [0098-验证二叉搜索树.md](./exercises/tree/0098-验证二叉搜索树) | 树 | Medium | THEORY-DS-BST-01 |
| EX-TREE-05 | [0543-二叉树的直径.md](./exercises/tree/0543-二叉树的直径) | 树 | Easy | THEORY-DS-BST-01 |

---

## 三、理论 ⇄ 习题关联矩阵

| 理论ID | 理论名称 | 配套习题 |
|--------|---------|---------|
| THEORY-CPP-STL-01 | STL容器与排序 | _（语法基础，无直接习题）_ |
| THEORY-CPP-OVERLOAD-01 | 运算符重载 | _（语法基础，无直接习题）_ |
| THEORY-DS-BST-01 | 二叉搜索树 | [0102-层序遍历](./exercises/tree/0102-二叉树层序遍历)、[0226-翻转](./exercises/tree/0226-翻转二叉树)、[0101-对称](./exercises/tree/0101-对称二叉树)、[0098-验证BST](./exercises/tree/0098-验证二叉搜索树)、[0543-直径](./exercises/tree/0543-二叉树的直径) |
| THEORY-DS-HASH-01 | 哈希表 | [0049-异位词分组](./exercises/hash/0049-字母异位词分组)、[0001-两数之和](./exercises/hash/0001-两数之和)、[0003-无重复子串](./exercises/sliding-window/0003-无重复字符最长子串) |
| THEORY-ALGO-PREFIX-01 | 前缀和与差分 | 差分例题（内嵌于理论文件） |
| THEORY-ALGO-BACKTRACK-01 | 子集树 | [整数问题-最小差值](./exercises/backtrack/整数问题-子集树最小差值)、[0-1背包回溯](./exercises/backtrack/0-1背包-回溯法) |
| THEORY-ALGO-BACKTRACK-02 | 排列树 | [N皇后](./exercises/backtrack/N皇后问题) |
| THEORY-ALGO-DC-01 | 分治算法 | [0004-两数组中位数](./exercises/divide-conquer/0004-两有序数组中位数) |
| THEORY-ALGO-GREEDY-01 | 贪心算法 | [硬币问题](./exercises/greedy/硬币问题-贪心)、[部分背包](./exercises/greedy/部分背包问题) |
| THEORY-ALGO-SEARCH-01 | DFS/BFS | [0011-盛水](./exercises/two-pointers/0011-盛最多水的容器)、[0015-三数之和](./exercises/two-pointers/0015-三数之和)、[0042-接雨水](./exercises/two-pointers/0042-接雨水)、[0994-烂橘子](./exercises/graph/0994-腐烂的橘子) |
| THEORY-DS-GRAPH-01 | 图的存储 | [0994-烂橘子](./exercises/graph/0994-腐烂的橘子)、[0207-课程表](./exercises/graph/0207-课程表) |
| THEORY-ALGO-DP-01 | 动态规划 | [LCS](./exercises/dp/LCS-最长公共子序列)、[LIS](./exercises/dp/LIS-最长递增子序列) |
| THEORY-ALGO-STRING-01 | 字符串匹配 | [BF](./exercises/string/BF字符串匹配)、[KMP](./exercises/string/KMP字符串匹配) |
| THEORY-DS-TRIE-01 | Trie树 | _（暂无配套习题）_ |

---

## 四、目录结构

```
docs/
├── index.md           ← 首页
├── sitemap.md         ← 本文件：完整索引
├── theory/            ← 15 个理论模块
└── exercises/         ← 23 道习题（10 个专题）
    ├── hash/          2 题
    ├── backtrack/     3 题
    ├── greedy/        2 题
    ├── divide-conquer/ 1 题
    ├── dp/            2 题
    ├── string/        2 题
    ├── two-pointers/  3 题
    ├── sliding-window/ 1 题
    ├── graph/         2 题
    └── tree/          5 题
```

---

> 💡 **维护说明**：新增习题时在此文件中追加一行，并在关联理论文件的「配套练习」章节添加链接。新增理论模块时同理。
