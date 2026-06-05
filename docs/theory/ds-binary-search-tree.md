---
title: 二叉搜索树 BST
description: 二叉搜索树插入/删除/查询完整实现 — THEORY-DS-BST-01
theory_id: THEORY-DS-BST-01
---

# 二叉搜索树（BST）

## 基本性质

- 左子树所有节点值 < 根节点值 < 右子树所有节点值
- 中序遍历可得到**升序序列**

## 1. 插入

```cpp
void n_insert(const T &val) {
    if (root_ == nullptr) {
        root_ = new Node(val);
        return;
    }
    Node *parent = nullptr;
    Node *cur = root_;
    while (cur != nullptr) {
        if (cur->data > val) {
            parent = cur;
            cur = cur->left;
        } else if (cur->data < val) {
            parent = cur;
            cur = cur->right;
        } else {
            return;  // 不插入重复值
        }
    }
    if (val < parent->data)
        parent->left = new Node(val);
    else
        parent->right = new Node(val);
}
```

## 2. 删除

删除分三种情况，核心思路是将情况③转化为情况①或②：

```cpp
void n_remove(const T &val) {
    if (root_ == nullptr) return;
    
    Node *parent = nullptr, *cur = root_;
    while (cur != nullptr) {
        if (val < cur->data)      { parent = cur; cur = cur->left; }
        else if (cur->data < val) { parent = cur; cur = cur->right; }
        else break;
    }
    if (cur == nullptr) return;

    // 情况③：两个孩子 → 找前驱节点替换
    if (cur->left != nullptr && cur->right != nullptr) {
        parent = cur;
        Node *pre = cur->left;
        while (pre->right != nullptr) { parent = pre; pre = pre->right; }
        cur->data = pre->data;
        cur = pre;  // 转化为情况①或②
    }

    // 统一处理情况①（无孩子）或 情况②（一个孩子）
    Node *child = cur->left ? cur->left : cur->right;
    if (parent == nullptr)         root_ = child;           // 删根节点
    else if (parent->left == cur)  parent->left = child;
    else                           parent->right = child;
    
    delete cur;
}
```

## 3. 查询

```cpp
bool non_query(const T &val) {
    Node *cur = root_;
    while (cur != nullptr) {
        if (cur->data == val)      return true;
        else if (cur->data < val)  cur = cur->right;
        else                       cur = cur->left;
    }
    return false;
}
```

## 4. 遍历方式

| 遍历方式 | 顺序 | 特点 |
|---------|------|------|
| 前序遍历 VLR | 根 → 左 → 右 | 深度优先 |
| 中序遍历 LVR | 左 → 根 → 右 | BST下为升序 |
| 后序遍历 LRV | 左 → 右 → 根 | 释放树时使用 |
| 层序遍历 | 逐层从左到右 | 广度优先，队列实现 |

---

## 配套练习

| 习题 | 关联说明 |
|------|---------|
| [0102-二叉树层序遍历](../exercises/tree/0102-二叉树层序遍历) | 层序遍历的队列实现，BST遍历方式的具体应用 |
| [0226-翻转二叉树](../exercises/tree/0226-翻转二叉树) | 前序/后序递归遍历的变体 |
| [0101-对称二叉树](../exercises/tree/0101-对称二叉树) | 递归检查左右子树对称性 |
| [0098-验证二叉搜索树](../exercises/tree/0098-验证二叉搜索树) | 利用BST中序遍历升序性质 |
| [0543-二叉树的直径](../exercises/tree/0543-二叉树的直径) | DFS后序遍历求深度 |
