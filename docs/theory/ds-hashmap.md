---
title: 哈希表
description: unordered_map/unordered_set 函数速查与使用场景 — THEORY-DS-HASH-01
theory_id: THEORY-DS-HASH-01
---

# 哈希表

C++ STL 中的 unordered_map 和 unordered_set 基于哈希表实现，平均 O(1) 时间完成查找/插入/删除。

## unordered_map 速查

| 代码 | 说明 |
|------|------|
| `unordered_map<K,V> mp` | 定义键类型 K、值类型 V 的空哈希映射 |
| `mp[key] = value` | 插入或修改：存在则改值，不存在则新增 |
| `mp.insert({k, v})` | 插入键值对，返回 `pair<迭代器,bool>` |
| `mp.emplace(k, v)` | 原地构造，效率比 insert 高 |
| `mp.find(key)` | 查找 key，返回迭代器；找不到返回 `mp.end()` |
| `mp.count(key)` | 返回 1（存在）或 0（不存在） |
| `mp.erase(key)` | 删除键为 key 的键值对 |
| `mp.erase(it)` | 删除迭代器指向的键值对 |
| `mp.size()` | 返回键值对数量 |
| `mp.empty()` | 判断是否为空 |
| `mp.clear()` | 清空所有键值对 |

## 典型应用场景

### 场景一：计数（统计频率）

```cpp
unordered_map<char, int> freq;
for (char c : str) freq[c]++;
```

### 场景二：存在性检查（去重）

```cpp
unordered_set<char> seen;
for (char c : str) {
    if (seen.find(c) == seen.end()) {
        cout << c;
        seen.insert(c);
    }
}
```

### 场景三：键值映射（记录下标）

```cpp
unordered_map<int, int> index;
index[nums[i]] = i;
```

## 注意事项

- unordered_map 内部**无序**，需要有序时用 map（红黑树，O(logn)）
- 键类型需要提供 hash 函数，内置类型（int/string/char）默认支持
- 自定义类型做 key 需自定义 `std::hash<>`
- 迭代器在插入时可能会失效（rehash），但查找/删除不会

---

## 配套练习

| 习题 | 关联说明 |
|------|---------|
| [0049-字母异位词分组](../exercises/hash/0049-字母异位词分组) | key为排序后字符串的map分组 |
| [0001-两数之和](../exercises/hash/0001-两数之和) | 利用map记录下标，一遍遍历 |
| [0003-无重复字符最长子串](../exercises/sliding-window/0003-无重复字符最长子串) | 滑动窗口+哈希set判重 |
