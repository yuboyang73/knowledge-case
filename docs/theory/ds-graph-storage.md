---
title: 图的存储结构
description: 邻接矩阵、边集数组、邻接表、链式前向星 — THEORY-DS-GRAPH-01
theory_id: THEORY-DS-GRAPH-01
---

# 图的存储结构

## 1. 邻接矩阵

用 `e[u][v]` 二维数组存储，`u` 为起点，`v` 为终点。

| 维度 | 指标 |
|------|------|
| 时间复杂度 | $O(n^2)$ |
| 空间复杂度 | $O(n^2)$ |
| 适用场景 | 简单图，$n < 1000$ |

```cpp
vector<vector<int>> e(n, vector<int>(n, 0));
e[u][v] = w;  // 有向无权图
e[u][v] = e[v][u] = w;  // 无向带权图
```

## 2. 边集数组

`e[i]` 存储 `{起点 u, 终点 v, 权值 w}`。

| 维度 | 指标 |
|------|------|
| 时间复杂度 | $O(nm)$ |
| 空间复杂度 | $O(m)$ |
| 适用场景 | Kruskal 算法中按边权排序 |

```cpp
struct Edge { int u, v, w; };
vector<Edge> e;
e.push_back({u, v, w});
```

## 3. 邻接表

`e[u][i]` 存储 u 点的所有出边 `{终点 v, 边权 w}`。

| 维度 | 指标 |
|------|------|
| 时间复杂度 | $O(n+m)$ |
| 空间复杂度 | $O(n+m)$ |
| 适用场景 | 各种图，**不能**处理反向边 |

```cpp
vector<vector<pair<int, int>>> e(n);
e[u].push_back({v, w});  // 添加 u→v 权值为 w 的有向边
```

## 4. 链式前向星（邻接表数组版）

用数组模拟邻接表，支持反向边处理。

| 维度 | 指标 |
|------|------|
| 时间复杂度 | $O(n+m)$ |
| 空间复杂度 | $O(n+m)$ |
| 适用场景 | 各种图，**能**处理反向边 |

```cpp
const int N = 1e5 + 5, M = 2e5 + 5;
struct Edge { int v, w, ne; } e[M];
int h[N], idx = 0;

void add(int u, int v, int w) {
    e[idx] = {v, w, h[u]};
    h[u] = idx++;
}

// 遍历 u 的所有出边
for (int i = h[u]; i != -1; i = e[i].ne) {
    int v = e[i].v, w = e[i].w;
    // 处理 u→v 的边
}
```

### 对比总结

| 存储方式 | 空间复杂度 | 能否处理反向边 | 适用算法 |
|---------|:---------:|:-------------:|---------|
| 邻接矩阵 | $O(n^2)$ | ✅ | Floyd、Prim |
| 边集数组 | $O(m)$ | ✅ | Kruskal |
| 邻接表 | $O(n+m)$ | ❌ | Dijkstra、SPFA、DFS、BFS |
| 链式前向星 | $O(n+m)$ | ✅ | 网络流、Dijkstra、DFS |

---

## 配套练习

| 习题 | 关联说明 |
|------|---------|
| [0994-腐烂的橘子](../exercises/graph/0994-腐烂的橘子) | 隐式图（网格），四方向邻接的 BFS |
| [0207-课程表](../exercises/graph/0207-课程表) | 邻接表建图 + 拓扑排序 / DFS 判环 |
