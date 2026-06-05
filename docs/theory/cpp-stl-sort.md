---
title: C++ STL容器与排序
description: STL容器使用、sort排序、lambda表达式 — THEORY-CPP-STL-01
theory_id: THEORY-CPP-STL-01
---

# C++ STL容器与排序

## 1. sort 排序

### 基本用法

```cpp
#include <algorithm>
sort(起始迭代器, 结束迭代器, 比较规则);
```

### 排序规则（lambda 表达式）

**标准版**
```cpp
[](const Product &p1, const Product &p2) -> bool 
{ 
    return p1 > p2; 
}
```

**省略版**
```cpp
[](auto& a, auto& b){ return a > b; }
```

**极简写法**
```cpp
[](auto& a, auto& b){ return a > b; }
```

### 配合 greater / less 仿函数

如果类型已重载 `operator>` / `operator<`：

```cpp
sort(arr, arr + n, greater<Product>());  // 降序
sort(arr, arr + n, less<Product>());     // 升序
```

### 注意事项

- lambda 表达式默认捕获 `[]` 为空，需要外部变量时用 `[&]`（引用捕获）或 `[=]`（值捕获）
- sort 要求随机访问迭代器，`vector`、`deque`、原生数组可用，`list` 不可用
- 比较规则必须满足**严格弱序**（strict weak ordering），即 `comp(a, a) == false`

---

## 配套练习

本模块为 C++ 语法基础，为所有习题提供 sort + lambda 支持，无独立配套习题。
