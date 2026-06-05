---
title: C++ 函数重载与运算符重载
description: 函数重载规则、一元/二元/关系运算符重载 — THEORY-CPP-OVERLOAD-01
theory_id: THEORY-CPP-OVERLOAD-01
---

# C++ 函数重载与运算符重载

## 1. 函数重载

在同一个类中，允许多个方法名相同的方法，**参数个数、参数类型或参数顺序**存在差异即构成重载。

> ❗ 不能仅依靠返回值不同实现重载。

**实例**
```cpp
class printData {
public:
    void print(int i) {
        cout << "整数为: " << i << endl;
    }
    void print(double f) {
        cout << "浮点数为: " << f << endl;
    }
    void print(char c[]) {
        cout << "字符串为: " << c << endl;
    }
};
```

## 2. 运算符重载总览

| 分类 | 运算符 | 可重载 | 重载形式 |
|------|--------|:-----:|---------|
| 算术运算符 | `+` `-` `*` `/` `%` | ✅ | 成员/全局函数 |
| 自增自减 | `++` `--` | ✅ | 成员函数为主 |
| 赋值运算符 | `=` | ✅ | **只能成员函数** |
| 复合赋值 | `+=` `-=` `*=` `/=` `%=` | ✅ | 成员/全局函数 |
| 关系运算符 | `>` `<` `>=` `<=` `==` `!=` | ✅ | 全局函数常用 |
| 下标/括号 | `[]` `()` | ✅ | **只能成员函数** |
| 指针访问 | `->` `->*` | ✅ | **只能成员函数** |
| 三目运算符 | `?:` | ❌ | — |
| 作用域 | `::` | ❌ | — |
| 成员访问 | `.` | ❌ | — |

## 3. 一元运算符重载

递增 `++` / 递减 `--` / 负号 `-` / 逻辑非 `!`

**实例**
```cpp
class Distance {
private:
    int feet, inches;
public:
    Distance() : feet(0), inches(0) {}
    Distance(int f, int i) : feet(f), inches(i) {}
    
    void displayDistance() {
        cout << "F: " << feet << " I:" << inches << endl;
    }
    
    // 重载负运算符（ - ）
    Distance operator- () {
        feet = -feet;
        inches = -inches;
        return Distance(feet, inches);
    }
};
```

## 4. 二元运算符重载

以 `+` 为例，两个 Box 对象相加：

```cpp
class Box {
    double length, breadth, height;
public:
    Box operator+(const Box& b) {
        Box box;
        box.length = this->length + b.length;
        box.breadth = this->breadth + b.breadth;
        box.height = this->height + b.height;
        return box;
    }
};
// 使用: Box3 = Box1 + Box2;
```

## 5. 关系运算符重载

常用于结构体内部排序比较：

```cpp
struct Product {
    double getPrice() const {
        return v * 1.0 / w;  // 性价比
    }
    bool operator>(const Product &p) const {
        return getPrice() > p.getPrice();
    }
    int id, w, v;
};
```

### 注意事项

- `=`、`[]`、`()`、`->` 必须重载为**成员函数**
- `<<`、`>>` 必须重载为**全局函数**（左操作数为 cout/cin）
- 重载不改变运算符优先级和结合性
- 尽量保持运算符语义（如 `+` 应表示加法）

---

## 配套练习

本模块为 C++ 语法基础，为以下习题提供运算符重载支持：

| 习题 | 关联说明 |
|------|---------|
| [部分背包问题](../exercises/greedy/部分背包问题) | Product 结构体中的 `operator>` 重载用于性价比排序 |
