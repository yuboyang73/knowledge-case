---
title: Trie 树（字典树）
description: Trie树性质、插入/搜索/删除操作、空间换时间 — THEORY-DS-TRIE-01
theory_id: THEORY-DS-TRIE-01
---

# Trie 树（字典树 / 前缀树）

## 基本性质

1. **根节点不包含字符**，除根节点外每个节点只包含一个字符
2. 从根节点到某一节点的路径上字符连接起来 = 该节点对应的字符串
3. 每个节点的所有子节点包含的字符**都不相同**

## 适用范围

- **单词检索** — 快速判断一个字符串是否在字典中
- **统计和排序字符串** — 利用公共前缀减少比较
- **字符串前缀检索** — 自动补全、拼写检查

## 复杂度

| 操作 | 时间复杂度 |
|------|:---------:|
| 查找 | $O(m)$，$m$ 为字符串长度 |
| 插入 | $O(m)$ |
| 删除 | $O(m)$ |

**空间换时间**：当字符串公共前缀较多时效率高，否则内存占用大。

## 基本操作框架

### 节点定义

```cpp
struct TrieNode {
    bool isEnd;                              // 标记是否为单词结尾
    unordered_map<char, TrieNode*> children; // 子节点映射
    // 或 TrieNode* children[26];           // 仅限小写字母时
};
```

### 插入

```cpp
void insert(string word) {
    TrieNode* cur = root;
    for (char c : word) {
        if (cur->children.find(c) == cur->children.end())
            cur->children[c] = new TrieNode();
        cur = cur->children[c];
    }
    cur->isEnd = true;
}
```

### 搜索

```cpp
bool search(string word) {
    TrieNode* cur = root;
    for (char c : word) {
        if (cur->children.find(c) == cur->children.end())
            return false;
        cur = cur->children[c];
    }
    return cur->isEnd;  // 必须是完整单词，而非前缀
}
```

### 前缀匹配

```cpp
bool startsWith(string prefix) {
    TrieNode* cur = root;
    for (char c : prefix) {
        if (cur->children.find(c) == cur->children.end())
            return false;
        cur = cur->children[c];
    }
    return true;  // 存在以 prefix 为前缀的单词
}
```

## 删除（三种情况）

| 情况 | 处理方式 |
|------|---------|
| 删除的单词在**中间**（如删除 "iz"，"ize" 仍存在） | 仅 `isEnd = false`，保留节点 |
| 单词开头有**分支**（如删除 "pri"，"price"/"primary" 存在） | 仅 `isEnd = false`，保留节点 |
| 删除的单词是**叶子节点**（如删除 "ize"） | 递归删除整条路径上的节点 |

## 应用场景

1. **串的快速检索** — 熟词表匹配
2. **单词自动完成** — 输入提示
3. **最长公共前缀** — 树上的最近公共祖先
4. **串排序** — 前序遍历即可得到字典序

---

## 配套练习

本模块暂无独立配套习题，推荐从 LeetCode 自行练习：

| 题目 | 说明 |
|------|------|
| LeetCode 208. 实现 Trie (前缀树) | Trie 的增删查标准实现 |
| LeetCode 211. 添加与搜索单词 | Trie + DFS 通配符匹配 |
| LeetCode 212. 单词搜索 II | Trie + 矩阵 DFS |
