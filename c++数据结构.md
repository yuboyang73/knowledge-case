# 算法学习笔记

本文是个人学习算法、数据结构的笔记以及心得

# 目录

[一、c++面向对象](#c++面向对象)

[二、数据结构](#数据结构)

[三、力扣算法题](#力扣算法题)

[四、复盘](#复盘)

[五、洛谷算法题](#洛谷算法题)

# c++面向对象

## c++STL容器

### 排序

#### 1. sort

排序规则(lambda表达式)

**标准版**

```c++
[](const Product &p1, const Product &p2) -> bool 
{ 
    return p1 > p2; 
}
```

**省略版**

```cpp
[](auto& a, auto& b){return a>b;}
```

**极简写法**

```cpp
[](auto& a, auto& b){return a>b;}
```

如果已经**重载**

```cpp
<algorithm>
sort(pros, pros + n,greater<Product>());
```

## 函数重载与运算符重载

### 1.函数重载

在同一个类中，允许存在多个方法名相同的方法，只要**参数个数、参数类型或参数顺序**存在差异，就构成方法重载，**不能仅依靠返回值不同**来实现函数重载。

*实例*

```c++
class printData
{
   public:
      void print(int i) {
        cout << "整数为: " << i << endl;
      }
      void print(double  f) {
        cout << "浮点数为: " << f << endl;
      }
      void print(char c[]) {
        cout << "字符串为: " << c << endl;
      }
};
```

### 2.c++中的运算符

可重载、

| 分类        | 运算符                                     | 是否可重载              | 重载形式（成员 / 全局） |                    |             |
| :---------- | :----------------------------------------- | :---------------------- | :---------------------- | :----------------- | :---------- |
| 算术运算符  | `+` 、`-` 、`*` 、`/` 、`%`                | ✅ 可重载                | 成员函数 / 全局函数     |                    |             |
| 自增自减    | `++` 、`--`                                | ✅ 可重载                | 成员函数为主            |                    |             |
| 赋值运算符  | `=`                                        | ✅ 可重载                | **只能成员函数**        |                    |             |
| 复合赋值    | `+=`、`-=`、`*=`、`/=`、`%=`               | ✅ 可重载                | 成员函数 / 全局函数     |                    |             |
| 关系运算符  | `>`、`<`、`>=`、`<=`、`==`、`!=`           | ✅ 可重载                | 全局函数常用            |                    |             |
| 逻辑运算符  | `&&`、`                                    |                         | `、`!`                  | ✅ 可重载           | 成员 / 全局 |
| 位运算符    | `&`、`                                     | `、`^`、`<<`、`>>`、`~` | ✅ 可重载                | `<<`/`>>` 必须全局 |             |
| 单目运算符  | `&`(取地址)、`*`(解引用)、`+`(正)、`-`(负) | ✅ 可重载                | 成员函数为主            |                    |             |
| 下标 / 括号 | `[]`、`()`                                 | ✅ 可重载                | **只能成员函数**        |                    |             |
| 指针访问    | `->`、`->*`                                | ✅ 可重载                | 只能成员函数            |                    |             |
| 逗号运算符  | `,`                                        | ✅ 可重载                | 成员 / 全局             |                    |             |
| 三目运算符  | `?:`                                       | ❌ 不可重载              | —                       |                    |             |
| 作用域      | `::`                                       | ❌ 不可重载              | —                       |                    |             |
| 成员访问    | `.`                                        | ❌ 不可重载              | —                       |                    |             |
| 成员指针    | `.*`                                       | ❌ 不可重载              | —                       |                    |             |

#### 2.1一元运算符重载

- 递增运算符（ ++ ）和递减运算符（ -- ）
- 一元减运算符，即负号（ - ）
- 逻辑非运算符（ ! ）

*实例*

```cpp
#include <iostream>
using namespace std;
 
class Distance
{
   private:
      int feet;             // 0 到无穷
      int inches;           // 0 到 12
   public:
      // 所需的构造函数
      Distance(){
         feet = 0;
         inches = 0;
      }
      Distance(int f, int i){
         feet = f;
         inches = i;
      }
      // 显示距离的方法
      void displayDistance()
      {
         cout << "F: " << feet << " I:" << inches <<endl;
      }
      // 重载负运算符（ - ）
      Distance operator- ()  
      {
         feet = -feet;
         inches = -inches;
         return Distance(feet, inches);
      }
};
int main()
{
   Distance D1(11, 10), D2(-5, 11);
   -D1;                     // 取相反数
   D1.displayDistance();    // 距离 D1
   -D2;                     // 取相反数
   D2.displayDistance();    // 距离 D2
   return 0;
}
```

#### 2.2二元运算符重载

我们平常使用的加运算符（ + ）、减运算符（ - ）、乘运算符（ * ）和除运算符（ / ）都属于二元运算符。就像加(+)运算符。

```c++
#include <iostream>
using namespace std;
 
class Box
{
   double length;      // 长度
   double breadth;     // 宽度
   double height;      // 高度
public:
 
   double getVolume(void)
   {
      return length * breadth * height;
   }
   void setLength( double len )
   {
       length = len;
   }
 
   void setBreadth( double bre )
   {
       breadth = bre;
   }
 
   void setHeight( double hei )
   {
       height = hei;
   }
   // 重载 + 运算符，用于把两个 Box 对象相加
   Box operator+(const Box& b)
   {
      Box box;
      box.length = this->length + b.length;
      box.breadth = this->breadth + b.breadth;
      box.height = this->height + b.height;
      return box;
   }
};
// 程序的主函数
int main( )
{
   Box Box1;                // 声明 Box1，类型为 Box
   Box Box2;                // 声明 Box2，类型为 Box
   Box Box3;                // 声明 Box3，类型为 Box
   double volume = 0.0;     // 把体积存储在该变量中
 
   // Box1 详述
   Box1.setLength(6.0); 
   Box1.setBreadth(7.0); 
   Box1.setHeight(5.0);
 
   // Box2 详述
   Box2.setLength(12.0); 
   Box2.setBreadth(13.0); 
   Box2.setHeight(10.0);
 
   // Box1 的体积
   volume = Box1.getVolume();
   cout << "Volume of Box1 : " << volume <<endl;
 
   // Box2 的体积
   volume = Box2.getVolume();
   cout << "Volume of Box2 : " << volume <<endl;
 
   // 把两个对象相加，得到 Box3
   Box3 = Box1 + Box2;
 
   // Box3 的体积
   volume = Box3.getVolume();
   cout << "Volume of Box3 : " << volume <<endl;
 
   return 0;
}
```

#### 2.3关系运算符

C++ 语言支持各种关系运算符（ < 、 > 、 <= 、 >= 、 == 等等），它们可用于比较 C++ 内置的数据类型。

```cpp
struct Product
{
    double getPrice() const
    {
        return v * 1.0 / w; // 性价比
    }
    bool operator>(const Product &p) const
    {
        return getPrice() > p.getPrice();
    }

    int id; // 物品的id
    int w;  // 物品的重量
    int v;  // 物品的价值
};
```

#### 2.4函数重载

```cpp
Distance operator()(int a, int b, int c)
      {
         Distance D;
         // 进行随机计算
         D.feet = a + c + 10;
         D.inches = b + c + 100 ;
         return D;
      }
```



---

# 数据结构

## 二叉树

$\textcolor{Blue}{编辑文字颜色}$

### 1.二叉搜索树

二叉搜索数的基本操作

###### 插入

```cpp
void n_insert(const T &val)
{
    if (root_ == nullptr)
    {
        // 树为空，生成根节点
        root_ = new Node(val);
        return;
    }
    // 搜索合适的插入位置，记录父节点的位置
    Node *parent = nullptr;
    Node *cur = root_;
    while (cur != nullptr)
    {
        if (cur->data > val)
        {
            parent = cur;
            cur = cur->left;
        }
        else if (cur->data < val)
        {
            parent = cur;
            cur = cur->right;
        }
        else
        {
            // 不插入元素相同的值
            return;
        }
    }

    // 把新节点插入到parent节点的孩子上
    if (val < parent->data)
    {
        parent->left = new Node(val);
    }
    else
    {
        parent->right = new Node(val);
    }
}
```

###### 删除

```cpp
void n_remove(const T &val)
{
    // 树空直接返回
    if (root_ == nullptr)
    {
        return;
    }
    // 搜索带删除节点
    Node *parent = nullptr;
    Node *cur = root_;
    while (cur != nullptr)
    {
        // 默认是大于，所以取反
        if (comp_(val, cur->data))
        {
            parent = cur;
            cur = cur->left;
        }
        else if (comp_(cur->data, val))
        {
            parent = cur;
            cur = cur->right;
        }
        else
        {
            break; // 找到删除节点
        }
    }
    if (cur == nullptr)
    {
        return; // 没找到带删节点
    }

    // 情况3(两个孩子情况)-》归结成情况1或2
    if (cur->left != nullptr && cur->right != nullptr)
    {
        parent = cur;
        Node *pre = cur->left;
        while (pre->right != nullptr)
        {
            parent = pre;
            pre = pre->right;
        }
        cur->data = pre->data;
        cur = pre; // 让cur指向前驱节点，转化成情况1或者2
    }

    // cur指向删除节点，parent指向其父节点
    // 统一处理情况1或者2
    // 情况1：没有孩子
    // 情况2：有一个孩子
    Node *child = cur->left;
    if (child == nullptr)
    {
        child = cur->right;
    }
    if (parent == nullptr) // 特殊情况：表示删除的是根节点
    {
        root_ = child;
    }
    else
    {
        // 把待删除节点的孩子（空 或者 不空）写入其父节点相应的地址域中
        if (parent->left == cur)
        {
            parent->left = child;
        }
        else
        {
            parent->right = child;
        }
    }

    delete cur; // 删除当前节点
}
```

###### 查询

```cpp
bool non_query(const T &val)
{
    Node *cur = root_;
    while (cur != nullptr)
    {
        if (cur->data == val)
            return true;
        else if (comp_(cur->data, val))
        {
            cur = cur->right;
        }
        else
        {
            cur = cur->left;
        }
    }
    return false;
}
```

### 2.二叉搜索树的遍历

###### 前序遍历（VLR）



###### 中序遍历（LVR）

**可以完成升序排列**

###### 后续遍历（LRV）

###### 层序遍历

## 哈希表

`c++ STL容器中的unordered_map`

| 函数                    | 解释                                                         |
| ----------------------- | ------------------------------------------------------------ |
| `unordered_map<K,V> mp` | 定义一个键类型为 `K`、值类型为 `V` 的空哈希映射              |
| `mp[key] = value`       | 插入或修改键值对：存在 `key` 则改值，不存在则新增            |
| `mp.insert({k, v})`     | 插入键值对 `{k,v}`，返回 `pair<迭代器,bool>`，`bool` 表示是否插入成功 |
| `mp.emplace(k, v)`      | 原地构造键值对，效率比 `insert` 高                           |
| `mp.find(key)`          | 查找 `key`，返回指向该键值对的迭代器；找不到返回 **`mp.end()`** |
| `mp.count(key)`         | 统计 `key` 出现次数，返回 **`1`（存在）或 `0`（不存在）**    |
| `mp.erase(key)`         | 删除键为 `key` 的键值对                                      |
| `mp.erase(it)`          | 删除迭代器 `it` 指向的**键值对**                             |
| `mp.size()`             | 返回映射中键值对的数量                                       |
| `mp.empty()`            | 判断映射是否为空，空返回 `true`，否则返回 `false`            |
| `mp.clear()`            | 清空映射中所有键值对                                         |
| `mp.begin()`            | 返回指向第一个元素的迭代器                                   |
| `se1.swap(se2)`         | 交换两个 set 的**所有内容**，O (1) 操作，超                  |
| `se1.merge(se2)`        | 把 se2 中**不重复**的元素，全部**移动**合并到 se1 中         |

#### 第一个不重复元素

```cpp
#include<bits/stdc++.h>
using namespace std;
int main()
{
    string src = "jjisiudsidfeub"
    unordered_map<char,int> m;
    for(auto &s : src)
    {       
       m[st]++;
    }
    for(auto s : src)
    {
        if(m[s] == 1)
            cout << s << endl;
        	return 0;
    }
}
```

#### 除去重复元素输出(整数/字符串)

```cpp
#include<bits/stdc++.h>
using namespace std;
int main()
{
    string src = "jjisiudsidfeub";
    unordered_set<char> se;
    for(auto &s : src)
    {       
       if(se.find(s) == se.end())
       {
           cout << s;
           se.insert(s);
       }
    }
    cout << endl;
    return 0;
}

```

#### 哈希字母异位词

力扣热题49

```c++
#include<bits/stdc++.h>
using namespace std;
vector<vector<string>> groupAnagrams(vector<string> &strs)
{
    vector<vector<string>> res;
    unordered_map<string, vector<string>> map;
    for(auto &s : strs)
    {
        stirng key = s;
        sort(key.begin(),key.end());
        map[key].push_back(s);//注意这个map第二个元素是个vector向量需要push进去
    }
    for(auto &m : map)
    {
        res.push_back(m.second);
    }
    return res;
}
```

## 算法

### 1.前缀和

前缀和就是数组下标的前缀和

常用名字
$$
prefix()
$$
例子：

```cpp
prefix[1] = prefix[0] + a[1] 
prefix[2] = prefix[1] + a[2] 
prefix[3] = prefix[2] + a[3] 
prefix[4] = prefix[3] + a[4] 
```

在代码中可以通过遍历的形式来进行迭代

```cpp
#include <iostream>
#include <vector>
using namespace std;

int main()
{
    vector<int> prefix;
    int arr[] = {1,2,3,4,5};
    int n =sizeof arr / sizeof arr[0];
    //前缀和逻辑
    for(int i = 1 ; i <= n ; ++i)
        prefix[i] = prefix[i - 1] + arr[i];
    int l = 2, int r = 4;//求和区间arr[l,r]的和
    for(int i = 1 ； i <= n ; ++i)
        cout << prefix[r] -prefix[l - 1];
 return 0;
}
```

### 2.差分

举个例子：

原数组 `a = [1, 2, 3, 4, 5]`，

差分 `diff = [1, 1, 1, 1, 1]`

对 `[2,4]` 加 2：`diff[2] += 2`，`diff[5] -= 2`

得到 `diff = [1, 3, 1, 1, -1]`，后续还原就能得到 `a = [1, 4, 5, 6, 5]`，完全正确。

```cpp
#include <iostream>
#include <vector>
using namespace std;

int main()
{
    vector<int> prefix;
    vector<int> differ;
    int arr[] = {1,2,3,4,5};
    int n =sizeof arr / sizeof arr[0];
    //差分逻辑
    for(int i = 1 ; i <= n ; ++i)
        differ[i] = arr[i] - arr[i - 1];
   	int l = 2, int r = 4, int x, int m;//区间[l,r],修改值x以及修改次数m
    //修改值
	while(m--)
    {
        differ[l] += x;
        differ[r + 1] -= x;
    }
    //还原数组
    for(int i = 1; i <= n; ++i)
        arr[i] = differ[i] + arr[i - 1];
 return 0;
}
```

### 3.回溯算法

#### 3.1子集树

**概念和定义**

子集树是**回溯算法中用于求解子集类问题的一种树形结构模型**，本质是一棵**完全二叉树**，它的每一个节点都对应着对集合中一个元素的 “**选**” 或 “**不选**” 的决策，最终的叶子节点对应集合的一个子集。

![](D:\1daxue\截屏\屏幕截图 2026-04-21 232352.png)

从根节点开始进行递归，到叶子节点后进行回溯，从叶子节点回溯到第一个父节点后到另一个叶子节点，以此类推 ，最终将整颗树全都递归完毕。

#### 3.2题目关键词

从一堆东西里，$\textcolor{red}{选}$任意个 / $\textcolor{red}{选}$若干个 / $\textcolor{red}{选}$满足条件的组合

一般遇到选或者不选的字眼优先想子集树的问题

例题：

1. 从 n 个元素里选出若干个
2. 求所有子集
3. 求满足条件的子集（和为多少、差最小、最大等）
4. 每个元素只能用一次
5. 不考虑顺序（选 1,2 和 选 2,1 算同一个）

代码实现

```cpp
void func(arr,int i ,int length)
{
    if(i == length)//函数递归结束条件
    {
        for(int j = 0; j < length ; j++)
        {
            cout << arr[j] << " ";
        }
        cout << endl;
    }
    else
    {
        func(arr, i - 1, length);
        func(arr, i - 1, length);
    }
}
```

提问：假如给定数组 `arr[]={1,2,3}`，请问这个数组会打印几次

答：8次

解析：图解既上方那个树图，本质上就是一个完全二叉树，第一个`func`，遍历所有节点左孩子，直到当函数递归条件触发开始回溯，回溯到上一个节点后执行第二个`func`,遍历所有右孩子，也就是说已经执行过遍历左孩子的节点就会遍历右孩子，所以最终会执行$2^3$次。也就是说$2$表示的是`func`的个数，$3$表示$i$的最大值既数组的长度。

#### 3.3整数问题一

问题描述：给定一组整数，从里面挑选出一组整数，让选择的整数的和，和剩下的整数的和的差最小

问题解析：该问题为子集树问题，需要改变函数体内的函数逻辑，递归终止条件不变，同时在全局变量设置最小值`unsigned int min = 0xFFFFFFFF`初始化为最大值，还有记录最优解的`bestx[length] = {0}`，辅助数组`x[length] = {0}`,记录所选子集树的总和`sum = 0`，记录不选子集树的总和`r = 0`。代码如下：

```cpp
#include <bits/stdc++.h>
using namespace std;
/*
整数问题：给定一组整数，从里面挑选出一组整数，让选择的整数的和，和剩下的整数的和的差最小
求子集
*/
int arr[] = {12, 6, 7, 11, 16, 3, 8};
const int length = sizeof(arr) / sizeof(arr[0]);
int x[length] = {0};              // 子集树辅助数组 记录节点走向左孩子还是右孩子，代表i节点被选择&未被选择
int bestx[length] = {0};          // 记录最优解
unsigned int minver = 0xFFFFFFFF; // 记录最小的差值
int sum = 0;                      // 记录所选子集数字的总和
int r = 0;                        // 记录不选择数字的和
// 生成子集树
void func(int i)
{
    if (i == length) // 访问到了子集树的一个叶子节点
    {
        // sum
        int res = abs(sum - r);
        if (res < minver)
        {
            minver = res;
            // 需要记录一下差值最小的子集
            for (int j = 0; j < length; ++j)
            {
                bestx[j] = x[j];
            }
        }
    }
    else
    {
        r -= arr[i];
        sum += arr[i];
        // 1
        x[i] = 1;
        func(i + 1); // 选择i节点
        sum -= arr[i];
        r += arr[i];
        // 2
        x[i] = 0;
        func(i + 1); // 不选择i节点
        // 3
    }
}
int main()
{
    for (int v : arr)
    {
        r += v;
    }
    func(0);
    for (int i = 0; i < length; ++i)
    {
        if (bestx[i] == 1)
        {
            cout << arr[i] << " ";
        }
    }
    cout << endl;
    cout << "minver:" << minver << endl;
    return 0;
}
```

#### 3.4整数问题二

给定2n个整数，从里面挑选出n个整数让选择的整数的和，和剩下的整数的和的差最小

#### 3.5 01背包问题

#### 3.6解空间-排列树

![](https://cdn.jsdelivr.net/gh/yuboyang73/Picture-bed@img/img/20260430231557305.png)

一个叶子节点就代表了原序列的一种排列的可能

*注意：两个`func(i + 1)`和`func(k + 1)`的不同*

与之前子集树不同的是，这次每个孩子都是一个数组，因此函数的参数要多加一个数组。基本模板代码一致，但要注意这个交换函数要自己单独写一下。基本原理：i到几就开始交换i本身及其后面的所有元素，递归到下一个`func（i + 1）`，一直到递归终止位置，既到叶子节点就循环打印一下arr[j]就是其中一组排列方式，一共会打印length!个排列方式，因此时间复杂度是O(n!)

```cpp
void swap(int arr[], int i, int j)//数组arr，第i个元素,和下一个元素j
{
    int temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
```

难点一：在else里面进行for循环，循环length就是表示length叉树，从根节点既arr开始，每层都进行递归，要注意排列树是不能选回头的元素。也就是说，i = 1的时候是第一个元素交换，i = 2的时候是第二个元素交换，第一个元素值固定，以此类推。

*注意在递归一次回溯后要再将两值换回来，k++后用原数组继续进行交换*

1.3.8 N皇后问题

经典例题：八皇后问题

用i来表示行，用`arr`来表示列，也就是`arr[i] = j`就是`i`行`j`列

初始化`arr[] = {1,2,3,4,5,6,7,8}`

写排列树的函数，swap与上一问一样，在递归终止条件内还要判断i == j, arr[i] == arr[j] 虽然这两个判断在这个代码实现中不可可能实现，但还是依据题目要求补充进来，最重要的判断就是对角线abs(i - j) == abs[arr[i] - arr[k]]行与行相减不能等于列减列就是不在对角线上。

```cpp
int cnt = 0; // 统计八皇后的次数
void swap(int arr[], int i, int j)
{
    int temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
bool judge(int arr[], int i) // 表示当前放置皇后棋子的位置
{
    for (int j = 0; j < i; ++j)
    {
        if (i == j || arr[i] == arr[j] || abs(i - j) == abs(arr[i] - arr[j]))
        {
            return false;
        }
    }
    return true;
}
void func(int arr[], int i, int length)
{
    if (i == length)
    {
        cnt++;
        for (int j = 0; j < length; ++j)
        {
            cout << arr[j] << " ";
        }
        cout << endl;
    }
    else
    {
        for (int k = i; k < length; k++)
        {
            swap(arr, i, k);
            if (judge(arr, i))            // 判断第i个位置，是否满足八皇后的条件
                func(arr, i + 1, length); // 生成孩子节点，也就是说生成一系列的排列方式
            swap(arr, i, k);
        }
    }
}
int main()
{
    // 把ar下标当作行，下标对应的元素的值当作列
    int arr[] = {1, 2, 3, 4, 5, 6, 7, 8};
    int n = 8;
    func(arr, 0, n);
    cout << cnt << endl;
    return 0;
}
```



### 4.分治算法

**分治算法的思想：**

规模未n的原问题的解无法直接求出，进行问题规模的缩减，划分子问题（这里的子问题相互独立而且和原问题的解性质相同，只是规模缩小了）。如果子问题的规模仍然不够小，再进行子问题划分，如此递归的进行下去，直到问题规模足够小，很容易求出其解为止，最后将求出的小规模的问题的解合并为一个更大规模的解，自底向上逐步求出原问题的解

![](https://cdn.jsdelivr.net/gh/yuboyang73/Picture-bed@img/img/20260430231547453.png)

**分治算法使用特性：**

1、规模缩小到一定程度解已知

2、原问题的解可以分解为若干个子问题的解（规模相同）

3、利用原问题的解分解出的子问题的解可以合并为原问题的解

4、**子问题互相独立，没有交集和重复**

**分治算法问题案例**：

二分搜索

快速排序

归并排序

快排分割函数求top K问题

#### 4.1二分搜索

#### 4.2快速排序

#### 4.3归并排序

#### 4.4 top K问题

#### 4.5中位数(要求$$O(log_n)$$对数时间)

对数时间有两个：

1. 二分搜索
2. 二叉树搜索

*中位数*
$$
\begin{flalign*}
&(n/2+n/2+1) / 2 = 偶数升序序列的中位数\\&
n/ 2 = 奇数升序序列的中位数
\end{flalign*}
$$
**leetcode代码题:**
$$
\begin{flalign*}&
有两个升序数组，长度分别是m和n，求两个数组所有元素的中位数是多少？\\&要求:O(log_n)时间内完成
\end{flalign*}
$$
**解题思路：**

这道题要求时间复杂度$$log_n$$需要使用求$$top K$$问题的方法进行求解，运用二分搜索的方法来降低复杂度。

![](https://cdn.jsdelivr.net/gh/yuboyang73/Picture-bed@img/img/20260501202216545.png)

**代码实现**

```cpp
// O(logn)对数时间求解中位数
double findmedian(vector<int> &nums1, int length1, vector<int> &nums2, int length2)
{
    // 在短的数组中求解合适的i和j
    if (length1 > length2)
    {
        return findmedian(nums2, length2, nums1, length1);
    }

    int i = 0;
    int j = 0;
    int begin = 0;
    int end = length1;
    int k = (length1 + length2 + 1) / 2;
    while (begin <= end)
    {
        // 二分搜索思想,对数时间找到i + j = k
        i = (begin + end) / 2;
        j = k - i;
        if (i > 0 && j < length2 && nums1[i - 1] > nums2[j])
            end = i - 1;
        else if (j > 0 && i < length1 && nums2[j - 1] > nums1[i])
            begin = i + 1;
        else
            break; // 找到了符合i和j
    }
    // nums1都被划分到右边，左半边最大值只能取自nums2左段(较短且值大)
    int left = 0;
    if (i == 0)
    {
        // 中位数肯定都在nums2当中
        left = nums2[j - 1];
    }
    else if (j == 0)
    {
        // nums2都被划分到右边，左半边最大值只能取nums1左段
        left = nums1[i - 1];
    }
    else
    {
        left = max(nums1[i - 1], nums2[j - 1]);
    }
    int right = 0;
    if (i == length1)
    {
        // nums1全部元素都划分到左边，右边没有元素(较短且较小)
        right = nums2[j];
    }
    else if (j == length2)
    {
        // nums2全部元素都划分到左边，右边没有元素(较短且较小)
        right = nums1[i];
    }
    else
    {
        right = min(nums1[i], nums2[j]);
    }
    // 找到了合适的i和j的值
    if ((length1 + length2) % 2 == 0)
    {
        // 偶数长度
        return (right + left) * 1.0 / 2;
    }
    else
    {
        return left;
    }
}

int main()
{
    vector<int> vec1;
    vector<int> vec2;
    for (int i = 0; i < 10; ++i)
    {
        vec1.push_back(rand() % 100);
    }
    for (int i = 0; i < 6; ++i)
    {
        vec2.push_back(rand() % 100);
    }

    sort(vec1.begin(), vec1.end());
    sort(vec2.begin(), vec2.end());

    for (int v : vec1)
    {
        cout << v << " ";
    }
    cout << endl;
    for (int v : vec2)
    {
        cout << v << " ";
    }
    cout << endl;
    double midval = findmedian(vec1, vec1.size(), vec2, vec2.size());
    cout << midval << endl;
}
```

### 5.分治限界算法

简单说：广度优先+剪枝

分支限界法类似于回溯算法，是在问题的解空间树上搜索问题解的算法，主要体现在两点不同：

1. **求解目标不同。**回溯算法的求解目标是找出解空间树中满足约束条件的所有解，而分支限界法的求解目标是找出满足约束条件的**一个解**，或者是在满足约束条件的解中找出某种意义下的**最优解**。
2. **搜索解空间树的方式不同。**回溯算法以深度优先的方式搜索解空间树，而分支限界法则以**广度优先**(层序遍历)或者以最小耗费优先的方式搜索解空间树。

**分支限界算法基本思想：**

分支限界法常以广度优先或以最小耗费（最大效益）优先的方式搜索问题的解空间树。在分支限界法中，每一个活结点只有一次机会称为扩展节点，活结点一旦成为扩展节点，就一次性产生其所有儿子节点（**分支**），在这些儿子节点中，导致不可行解或是导致非最优解的儿子节点会被舍弃掉，其余儿子节点会被加入活结点表中。

为了有效的选择下一个扩展节点加速搜索，在每一个活结点处计算一个函数值（**限界**），并根据计算的函数值结果从当前活结点表中取下一个最有利的节点成为当前的扩展节点，使搜索朝着解空间树上最优解的分支推进。重复上述节点扩展过程，直到找到所需的最优解或者活结点表为空。

> 与子集树剪枝操作相同

**扩展节点**：一个正在产生儿子的节点称作扩展节点

**活结点：**一个自身已经生成，但其儿子还没有全部生成的节点

**死结点：**一个所有儿子已经产生的节点

**深度优先搜索**是对一个扩展节点 R，一旦产生了它的一个儿子 C，就把 C 当作新的扩展节点。在完成对子树 C 的深度搜索之后回溯到 R 时，将 R 重新变成扩展节点，继续生成 R 的下一个儿子。

**广度优先搜索**是在一个扩展节点 R 变成死节点之前，它一直是扩展节点。

从活结点表中选择下一个扩展节点时，不同的方式对应不同的分支限界法，常见有：

1. **队列式（FIFO）分支限界法**

   a. 一开始，根结点是唯一的活结点，根结点加入活结点队列。

   b. 从活结点队列中取出队头结点后，作为当前扩展结点。

   c. 对当前扩展结点，先从左到右产生它的所有孩子节点，用约束条件检查，把所有满足约束函数的孩子节点加入活结点队列中。

   d. 再从活结点表中取出队首结点为当前扩展结点，重复上述过程，直到找到一个解或活结点队列为空为止。

2. **优先级队列式分支限界法**

   a. 对每一活结点计算一个优先级（某些信息的函数值）。

   b. 根据这些优先级从当前活结点表中优先选择一个优先级最高（最有利）的结点作为扩展结点，使搜索朝着解空间树上有最优解的分支推进，以便尽快地找出一个最优解。

   c. 对当前扩展结点，先从左到右产生它的所有孩子节点，用约束条件检查，对所有满足约束函数的孩子节点计算优先级并加入到活结点优先级队列中。

   d. 再从活结点表中取出下一个优先级最高的结点为当前扩展结点，重复上述过程，直到找到一个解或活结点队列为空为止。


#### 5.1装载问题

有一批共 n 个集装箱要装上 2 艘载重量分别为 c1, c2 的轮船其中集装箱 i 的重量为 wi，且要求确定是否有一个合理的装载方案可将这 n 个集装箱装上这 2 艘轮船

#### 5.2 0-1 背包问题

### 6.贪心算法

当一个问题具有最优解结构性质时，可以使用动态规划求解，但有时候使用贪心算法更简单，更直接而且解决问题的效率很高

例如前面的动态规划的硬币问题就可以用贪心算法来解决，从算法名字上来看，贪心算法总是做出当前看来最好的选择，也就是说贪心算法**并不从整体最优考虑**，它所做的选择只是在某种意义上的局部最优选择，当然最终贪心算法得到的最终结果也是最优的。

**虽然贪心算法不能对所有问题得到整体最优解，但是对于很多问题它能够产生整体最优解，或者是趋近于最优解**

*提问特点：最大，最小，最多，最少，至多，至少*

#### 6.1硬币问题

**问题描述：**
$$
\begin{flalign}&1,3,5分的硬币，现在给定一个价值c:11,\\&问组成价值c需要的最少的硬币的数量\end{flalign}
$$
**解题思路：**

贪心算法就是先去是局部最优解看能否的得到想要的解，所以先给1,3,5降序排列，然后优先放大的，直到放不进去就换成小的，最后统计硬币个数就是最终答案

**代码实现：**

```cpp
int main()
{
    int arr[] = {1, 3, 5};
    int size = sizeof(arr) / sizeof(arr[0]);
    int c = 11;

    sort(arr, arr + size, [](int a, int b) -> bool
         { return a > b; }); // lambda(回调，绑定等等)

    for (int v : arr)
    {
        cout << v << " ";
    }
    cout << endl;

    int idx = 0; // 5 3 1
    int cnt = 0; // 记录硬币的个数
    while (c > 0)
    {
        if (c >= arr[idx])
        {
            c -= arr[idx];
            cnt++;
        }
        else
        {
            idx++;
        }
    }
    cout << cnt << endl;//局部最优解，每次只选大的

    return 0;
}
```

#### 6.2部分背包问题

**问题描述：**
$$
\begin{flalign}&有n个物品，每个物品重量为w_i,价值为v_i \\&在重量不超过c的情况下让总价值尽量高，每个物品的都可以取走一部分,\\&价值和重量按比例计算,求最大值
\end{flalign}
$$
**解题思路:**

首先创建结构体，内置$$getPrice$$函数求每个物品的性价比，以及符号重载函数降序排序。主函数中，创建$$pros[n]$$结构体数组存放所有的物品，并进行降序排序，创建$$x[n]$$标记是否装入(1为装入，0为未装入)循环初始化$$pros$$。用$$bestv$$来记录最大价值。进入循环，先判断当前$$pros[i]$$物品的重量是否还能装进背包，能则继续装入，不能则按比例把剩余容量填满(*注意：else内需要添加break*)。最后输出$$bestv$$和$$x$$数组

**流程图**

<img src="https://cdn.jsdelivr.net/gh/yuboyang73/Picture-bed@img/img/20260501153944205.png" style="zoom: 25%;" />

**代码实现**

```c++
struct Product
{
    double getPrice() const
    {
        return v * 1.0 / w; // 性价比
    }
    bool operator>(const Product &p) const
    {
        return getPrice() > p.getPrice();
    }

    int id; // 物品的id
    int w;  // 物品的重量
    int v;  // 物品的价值
};
int main()
{
    int w[] = {8, 6, 4, 2, 5};
    int v[] = {6, 4, 7, 8, 6};
    int c = 12;
    int n = sizeof(w) / sizeof(w[0]);
    int x[n]; // 0没选，1选了

    Product pros[n];
    // 初始化
    for (int i = 0; i < n; ++i)
    {
        pros[i].id = i;
        pros[i].w = w[i];
        pros[i].v = v[i];
    }

    // 按物品的性价比降序排列
    sort(pros, pros + n, [](const Product &p1, const Product &p2) -> bool
         { return p1 > p2; });

    // 按性价比高的往背包里面放（只考虑局部的最优解）
    double bestv = 0.0; // 记录背包的最大价值
    for (int i = 0; i < n; ++i)
    {
        if (pros[i].w <= c)
        {
            // 说明第i个物品可以装入背包
            bestv += pros[i].v;
            c -= pros[i].w;
        }
        else
        {
            // 第i个元素无法全部装入背包，按照剩余容量的比例装入物品的一部分
            bestv = bestv + pros[i].v * (c * 1.0 / pros[i].w);
            x[pros[i].id] = 1;
            break;
        }

        x[pros[i].id] = 1;
    }

    cout << "bestv:" << bestv << endl;
    for (int v : x)
    {
        cout << v << " ";
    }
    cout << endl;

    return 0;
}
```



## 搜索

#### 二分搜索

#### 深度优先搜索（DFS）

经典例题:

1. 岛屿数量（Flood Fill）
2. 全排列（回溯入门）
3. 八皇后
4. 老鼠吃奶酪（TSP）

```cpp
void dfs()//参数用来表示状态  
{  
    if(到达终点状态)  
    {  
        ...//根据题意添加  
        return;  
    }  
    if(越界或者是不合法状态)  
        return;  
    if(特殊状态)//剪枝
        return ;
    for(扩展方式)  
    {  
        if(扩展方式所达到状态合法)  
        {  
            修改操作;//根据题意来添加  
            标记；  
            dfs（）；  
            (还原标记)；  
            //是否还原标记根据题意  
            //如果加上（还原标记）就是 回溯法  
        }  
    }  
}  
```

#### 广度优先搜搜（BFS）

**经典例题：**

1. 奇怪电梯（你原题）
2. 迷宫最短路径
3. 走出迷宫
4. 腐烂的橘子

```cpp
q.push(初始状态);
while(!q.empty()){
    a = q.front();
    q.pop();
    for(枚举a的所有可达状态v){
        if(本状态v合法){
            执行标记操作;
            q.push(v);
        }
    }
}
```

## 动态规划

### LCS

**问题描述：**求两个序列的最长公共子序列的长度

*示例：*

**输入**

`s1 = “hello world”`

`s2 = "hlorwld"`

**输出**

 `6`

解题思路：

 $$LCS$$ 函数用于计算传入的两个序列的**最长公共子序列长度**，函数参数共四个，分别为： $$[s_1, n, s_2, m]$$ 其中： 

- $s_1$：第一个输入序列 
- $n$：$s_1$ 当前参与比较的**最后一位下标** 
- $s_2$：第二个输入序列 
- $m$：$s_2$ 当前参与比较的**最后一位下标** 

函数的比较规则为**从两个序列的最后一个字符开始向前比较**，具体逻辑如下： 

1. **递归终止条件** 若 $n < 0$ 或 $m < 0$，表示其中一个序列已无字符可比较，此时最长公共子序列长度为 $0$，直接返回 $0$。

2.  **当前字符相等** 若 $s_1[n]$ 与 $s_2[m]$ 字符相同，说明该字符属于公共子序列，长度加 $1$，并**同时将两个序列的比较位置向前移动一位**，递归求解子问题： $$LCS(s_1, n-1, s_2, m-1) + 1$$ 

3.  **当前字符不相等** 若 $s_1[n]$ 与 $s_2[m]$ 字符不同，则无法同时使用两个字符，需分两种情况递归求解，并取结果的最大值： 

   - 保持 $s_1$ 的当前位置不变，将 $s_2$ 的比较位置向前移动一位：  $$LCS(s_1, n, s_2, m-1)$$ 

   - 保持 $s_2$ 的当前位置不变，将 $s_1$ 的比较位置向前移动一位：  $$LCS(s_1, n-1, s_2, m)$$

最终返回两种情况结果的最大值： $$\max\big(LCS(s_1, n, s_2, m-1),\ LCS(s_1, n-1, s_2, m)\big)$$ 

最终完整状态转移
$$
LCS(s_1,n,s_2,m)= \begin{cases} 0 & n<0\ \text{or}\ m<0 \\ LCS(s_1,n-1,s_2,m-1)+1 & s_1[n]=s_2[m] \\ \max\big(LCS(s_1,n,s_2,m-1),\ LCS(s_1,n-1,s_2,m)\big) & s_1[n]\neq s_2[m] \end{cases}
$$
![](https://cdn.jsdelivr.net/gh/yuboyang73/Picture-bed@img/img/20260430230820389.png)

表格可以更好的反应递归情况，每个格子代表当前两个字符串最大公共子串的值。

从最后一位开始，相等后直接递归找对角线左上方那个格子的值，开始往左递归到最后，也就是$$(-1,8)$$此时触发递归终止条件，返回$$0$$,回溯到c此时到第二个递归函数，往上走，新的递归到第一个递归函数都会返回$$0$$,一直往上走直到$$h=h$$的时候，此时直接到对角线$$(-1,-1)$$的值+1，因此$$(0,0)$$就是1,此时回溯，刚刚向上经过的格子，每个都取左边和上面的最大值，因此都是1，回溯到$$(0,8)$$再往右回溯$$(1,8)$$。以此类推一直得到最后的结果为止。

```cpp
#include <iostream>
#include <vector>
#include <algorithm>
#include <string>
using namespace std;

/*
LCS:求两个序列的最长公共子序列的长度
helloworld
hlweord      -->   6
*/

int LCS01(string X, int n, string Y, int m)
{
    if (n < 0 || m < 0)
        return 0;
    if (X[n] == Y[m])
        return LCS01(X, n - 1, Y, m - 1) + 1;
    else
    {
        int len1 = LCS01(X, n, Y, m - 1);
        int len2 = LCS01(X, n - 1, Y, m);
        return max(len1, len2);
    }
}

int main()
{
    string str1 = "helloworld";
    string str2 = "hlweord";

    int size = LCS01(str1, str1.size() - 1, str2, str2.size() - 1);
    cout << size << endl;
    return 0;
}
```



### LIS

**问题描述:**求序列的最长非降（升序）子序列的长度

非降子序列举例：11234（可以相等但整体是上升）

*示例：*

**输入：**

`5 3 4 1 8 7 9`

**输出：**

`4`

**解题思路：**

这道题是经典的$$动态规划$$问题用$$dp数组$$来解决

$$dp[i]表示到i个元素时最长非降子序列长度$$

$$dp[2] = dp[1]+1 条件为:arr[1] <= arr[2] 并且 dp[1] + 1 > dp[2]$$

以此类推，从$$0-length$$循环$$i$$元素，再循环$$i$$之前的元素值，比较两个元素的大小和$$dp数组$$的大小

**代码实现：**

```cpp
#include<bits/stdc++>
using namespace std;
int arr = {5,3,4,1,8,7,9};
const int length = sizeof(arr) / sizeof(arr[0]);
int max = 0;
int dp[length] = {0};
int main()
{
    for(int i = 0; i < length; i++)
    {
        dp[i] = 1;//每个数自己都是一个序列，长度为1
        for(int j = 0; j < i; j++)
        {
            if(arr[j] <= arr[i] && 1 + dp[j] > dp[i] )
            {
                dp[i] = dp[j] + 1;
            }
        }
        if(dp[i] > max)
        {
            max = dp[i]
        }
    }
    cout << max << "\n"; 
}
```

## 字符串

###  BF算法

**Brute Force**暴力匹配算法:子串在主串里面搜索的过程/操作也称为模式匹配

**实例**

```cpp
#include <bits/stdc++.h>
using namespace std;

int BF(string s, string t) // 时间复杂度O(n*m)
// O(n)遍历主串,O(m)遍历模式串
{
    int i = 0, j = 0;
    while (i < s.size() && j < t.size())
    {
        if (s[i] == t[j])
            i++, j++;
        else
            i = i - j + 1, j = 0; // 复位i，指向之前开始匹配字符的下一个字符
    }

    if (j == t.size()) // 找到了
        return i - j;

    else
        return -1;
}

int main()
{
    string s = "ABCDCABDEFG";
    string t = "ABX";

    int pos = BF(s, t);
    cout << pos << endl;
}
```

**考虑问题：**

BF算法中对于子串的形状没有做任何的分析，导致匹配过程中做了很多无效的匹配操作（明知道结果不可能匹配成功的操作），导致算法效率降低，让匹配过程中，主串的i不用退回，提高算法的效率------->KMP算法

###  KMP算法

![](https://cdn.jsdelivr.net/gh/yuboyang73/Picture-bed@img/img/20260503230301061.png)

![](https://cdn.jsdelivr.net/gh/yuboyang73/Picture-bed@img/img/20260503231204080.png)

**核心原理：**

创建next数组来记录模式串回退的位置，next会记录最长公共前后缀的值。因此当s[i] != t[j]的时候，j就会回退到next[j]。

==要注意如果t[next[j]]=t[j]此时需要继续回退，既next[j] = next[k]在getnext函数内部进行优化==

**实例代码**

```cpp
#include <bits/stdc++.h>
using namespace std;

// KMP算法求解子串的数组
int *getNext(string str)
{
    int *next = new int[str.size()];
    int j = 0;  // j用来遍历子串
    int k = -1; // k表示公共前后缀的长度
    next[j] = k;

    while (j < str.size() - 1)
    {
        if (-1 == k || str[k] == str[j])
        {
            j++, k++;

            if (str[k] == str[j])
                // KMP算法的优化
                next[j] = next[k];
            else
                next[j] = k;
        }
        else
        {
            k = next[k]; // k值回溯，继续找最长的公共前后缀
        }
    }

    return next;
}

// 时间复杂度O(n)+O(m)=O(n+m) 空间复杂度O(m)
int KMP(string s, string t) // 时间复杂度O(n*m)
// O(n)遍历主串,O(m)遍历模式串
{
    int i = 0, j = 0;

    // 计算一个子串对应的next数组
    int *next = getNext(t);
    // 智能指针
    unique_ptr<int> ptr(next); // delete操作

    // j < t.size()有问题！！t.size()是无符号的size_t不能和-1比
    int size1 = s.size();
    int size2 = t.size();
    while (i < size1 && j < size2)
    {
        if ((-1 == j) || s[i] == t[j])
            i++, j++;
        else
            // KMP核心i值不回退，只回退j
            j = next[j]; // 如果首字母匹配失败，这里j == -1
    }

    if (j == t.size()) // 找到了
        return i - j;

    else
        return -1;
}

int main()
{
    string s = "abcabdefabcabc";
    string t = "abcabR";

    int pos = KMP(s, t);
    cout << pos << endl;
}
```

### Trie树

> 字典树、前缀树、单词查找树

**基本性质:**

1. 根节点不包含字符，除根节点外每一个节点都只包含一个字符
2. 从根节点到某一节点，路径上经过的字符连接起来，为该节点对应的字符串
3. 每个节点的所有子节点包含的字符都不相同

> 哈希虽然查找快，但是内在无序

**适用范围：**

1. 单词检索
2. 统计和排序字符串
3. 字符串前缀检索

**算法核心：**

利用字符串的公共前缀来减少查询时间，最大限度的减少无畏的字符串比较

**复杂度：**

字典树查找效率很高，时间复杂度是O(m)，m是要查找的单词中包含的字母的个数

**应用场景:**

1. 串的快速检索

   给出N个单词组成的熟词表，以及一篇全用小写英文书写的文章，请你按最早出现的顺序写出所有不在熟词表中的生词

2. 单词自动完成

   编辑代码时，输入字符，自动提示可能的关键字、变量或函数等信息

3. 最长公共前缀

   对所有串建立字典树，对于两个串的最长公共前缀的长度即他们所在的节点的公共祖先个数，问题就转化为最近公共祖先问题

4. 串排序方面的应用

   给定N个互不相同的仅由一个单词构成的英文名，让你将他们按字典序从小到大输出。用字典树进行排序，这棵树的每个节点的所有儿子很明显地按照其字母大小排序。对这棵树进行前序遍历即可

![](https://cdn.jsdelivr.net/gh/yuboyang73/Picture-bed@img/img/20260505101314586.png)

典型的空间换时间

Trie树处理串的应用：有比较多的**公共前缀**，效率高，否则内存占用量比较大。

#### Tire树的添加



#### Tire树的插入

#### Tire的遍历

#### Tire的删除

### 字符串哈希

### 后缀数组

## 图

### 1.邻接矩阵

`e[u][v]`二维数组进行存储，u为起点，v为终点

时间复杂度:$O(n^2)$
空间复杂度:$O(n^2)$

应用：简单图，N<1000

### 2.边集数组

e[i]存储{起点u,终点v,权值w}

时间复杂度:$O(nm)$
空间复杂度:$O(m)$

应用:在Kruskal算法中，需要将边按边权排序，直接存边

![image-20260603162432217](https://cdn.jsdelivr.net/gh/yuboyang73/Picture-bed@img/img/20260604212557192.png)

```cpp

```

### 3.邻接表

`e[u][i]`存储u点的所有出边的{终点v，边权w}

时间复杂度：$O(n+m)$
空间复杂度：$O(n+m)$

应用：各种图，不能处理反向边

![image-20260604212202359](https://cdn.jsdelivr.net/gh/yuboyang73/Picture-bed@img/img/20260604212526118.png)

### 4.邻接前向星

**边集数组：**`e[u][i]`存储u点的所有出边的{终点v，边权w,下一跳边ne}
**表头数组：**h[u]存储u点的一条出边的编号
**边的编号：**idx可取0,1,2,3...

时间复杂度：$O(n+m)$
空间复杂度：$O(n+m)$

应用：各种图，能处理反向边

![【算法笔记】链式前向星存图（保姆级教学，详细图解+代码实现）-CSDN博客](https://cdn.jsdelivr.net/gh/yuboyang73/Picture-bed@img/img/20260604213236847.png)



---

# 复盘

## 易错点知识

在c++函数中

`void func(int arr[])->等价于->void func(int *arr)`

因此不能使用for(int v : arr)这些迭代器的内容，指针是不能用迭代器的。

解决方法：

1、添加数组长度n，并使用常规for循环
2、使用vector向量

`void func(vector<int> &s)`就可以使用for（  ：）

## 难点知识

1.KMP算法中next数组的逻辑

2.动态规划dp的状态方程的推理

3.BFS树的层序遍历

4.子集树整数问题的剪枝问题

5.排列树的n叉树

6.分治算法中位数（如何运用二分搜索的理念）

### KMP算法

卡壳点1：

<img src="https://cdn.jsdelivr.net/gh/yuboyang73/Picture-bed@img/img/20260508222348468.png" style="zoom: 67%;" />

虽然记得是要返回一个数组，但这里其实应该是`int *getnext（string str）`这里要注意函数里面&表示修改，不带&是拷贝一份进行代码，不会改变原值

*next是指向数组的指针

![](https://cdn.jsdelivr.net/gh/yuboyang73/Picture-bed@img/img/20260508224633376.png)

卡壳点2：

<img src="https://cdn.jsdelivr.net/gh/yuboyang73/Picture-bed@img/img/20260508223711230.png" style="zoom:50%;" />

while内部循环逻辑，首先我清楚要判断第j个元素和第k个元素是否相等活着k == -1,并不是遍历前面，而是通过next[k]来记录第j个元素（包括自身）前面公共前后缀的个数，从而让j回溯到next[k]的位置

### Tire字典树

#### 难点1：删除

删除逻辑要考虑三种情况:

- 删除的是中间部分单词（比如：删除iz，结尾z在中间不能直接删节点）
- 删除的单词开头字母有分支（比如：删除pri，有分支也不能删节点）
- 删除的是叶子节点（比如删除：ize，可以直接删除节点）

![](https://cdn.jsdelivr.net/gh/yuboyang73/Picture-bed@img/img/20260505101314586.png)

解决方案：

前两个可以一起解决，直接用if和或的关系，遍历这个字符串，创建一个节点来记录要删除字符串的开始节点，用char类型的字符来记录开始的字符。遍历结束后，用队列的方法来遍历这个记录的字符节点，非结尾的单词frqs置0，结尾的单词直接按节点删除

**出错点1：**

![](https://cdn.jsdelivr.net/gh/yuboyang73/Picture-bed@img/img/20260509143517047.png)

map是，访问元素要用[]或者at.()，而不是函数的调用"()"

正确写法

```cpp
TireNode *child = del->nodemap_[delch];
```

**出错点2：**

```cpp
for (auto &pair : front->nodemap_)
{
    que.push(pair.second);
}
```

这个pair是键值对形式，所以在push的时候一定是第二位，这也是遍历map的经典遍历方法

### 0-1背包

#### 方法一：回溯算法

```cpp
#include<bits/stdc++.h>
using namespace std;

int w[] = {12, 5, 8, 9, 6}; // 物品的重量
int v[] = {9, 2, 4, 7, 8};  // 物品的价值
const int len = sizeof(w) / sizeof(w[0]);
int c = 12;
int cw = 0;
int cv = 0;
vector<int> bestx;
vector<int> x;
int bestv = 0;
int r = 0;//未处理物品的总价值


void func(int i) {
    if (i == len) {
        if (cv > bestv) {
            bestv = cv;
            bestx = x;
        }
    } else {
        r -= v[i];//进来就处理
        if (cv + v[i] <= c) {
            cv += v[i];
            cw += w[i];
            x.push_back(w[i]);
            func(i + 1);
            cv -= v[i];
            cw -= w[i];
            x.pop_back();
        }
        if (cv + r > bestv) {
            func(i + 1);
        }
        r += v[i];
    }
}

int main() {
    for (int val : v) {
        r += val;
    }
    func(0);
    for (auto x : bestx) {
        cout << x << " ";
    }
    cout << endl;
    cout << "bestv:" << bestv << endl;

    return 0;
}
```

#### 方法二：动态规划

---

# 力扣算法题

![img](https://cdn.jsdelivr.net/gh/yuboyang73/Picture-bed@img/img/20260522120745031.png)

# 滑动窗口与双指针

| 类型                                                 | 核心原理                                                     | 典型题型                                                     | 选用双指针的核心原因                                         | 关键技巧                                                     |
| ---------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| **快慢指针（龟兔赛跑）**（同向同起点，速度不同）     | 两个指针从同一端出发，快指针速度是慢指针的 2 倍或固定步长    | 1. 环形链表检测（141）<br />2. 环形链表入口（142）<br />3. 链表中点（876）<br />4. 链表倒数第 k 个节点（19）5. 数组原地去重（26）<br />6. 数组移除元素（27） | 1. 链表无法随机访问，只能顺序遍历<br />2. 无需额外空间，O(n) 时间解决环、中点、倒数问题<br />3. 数组原地修改，不占用额外内存 | 1. 环检测：快指针走 2 步，慢指针走 1 步<br />2. 倒数第 k 个：快指针先走 k 步，再一起走<br />3. 数组去重：慢指针存结果，快指针遍历 |
| **左右指针（对撞指针）**（两端向中间移动）           | 两个指针分别从数组两端出发，向中间靠拢，直到相遇             | 有序数组两数之和 II（167）<br /> 反转字符串 / 数组（344）<br />回文串判断 / 最长回文子串（5, 125）<br /> [11.盛最多水的容器](##盛最多水的容器)<br /> [15.三数之和](##三数之和)<br />四数之和（18）<br />[42.接雨水](##接雨水) | 1. 利用数组==**有序性**或**对称性**==<br />2. 避免嵌套循环，将 O(n2) 降为 O(n)<br />3. 原地操作，空间复杂度 O(1) | 1. 有序数组问题优先考虑<br />2. 三数之和：固定一个数，左右指针找另外两个<br />3. 回文串：中心扩展法本质是双指针变种 |
| **滑动窗口（同向双指针）**（维护动态窗口边界）       | 两个指针分别作为窗口的左右边界，动态调整窗口大小，维护窗口内的状态 | [3无重复字符的最长子串](##3无重复字符的最长子串)<br />最小覆盖子串<br />[438找到字符串中所有字母异位词](##438找到字符串中所有字母异位词)（76）<br />长度最小的子数组（209）<br />字符串排列（567）<br / 最长重复子数组（718） | 1. 专门解决**连续子数组 / 子串**的==最值、存在性==问题<br />2. 一次遍历完成，O(n) 时间<br />3. 避免重复计算窗口内的和 / 计数 | 1. 右指针扩大窗口，左指针收缩窗口<br />2. 用哈希表 / 数组维护窗口内元素计数<br />3. 窗口大小固定 / 可变两种情况 |
| **分离双指针（多数组双指针）**（两个数组各一个指针） | 两个指针分别指向两个不同数组的头部 / 尾部，独立移动          | 1. 合并两个有序数组（88）<br />2. 有序数组的交集（349, 350）<br />3. 判断子序列（392）<br />4. 合并两个有序链表（21）<br />5. 两个有序数组的中位数（4）<br />6.KMP算法 | 1. 利用两个数组的**==有序性==**<br />2. 一次遍历两个数组，O(m+n) 时间<br />3. 避免嵌套循环，空间复杂度 O(1)（除结果外） | 1. 两个指针分别遍历两个数组<br />2. 谁小谁前进（合并有序数组）<br />3. 子序列问题：匹配成功则两个指针都前进 |

## 11.盛最多水的容器

给定一个长度为 `n` 的整数数组 `height` 。有 `n` 条垂线，第 `i` 条线的两个端点是 `(i, 0)` 和 `(i, height[i])` 。

找出其中的两条线，使得它们与 `x` 轴共同构成的容器可以容纳最多的水。

返回容器可以储存的最大水量。

**说明：**你不能倾斜容器。

![img](https://cdn.jsdelivr.net/gh/yuboyang73/Picture-bed@img/img/20260521112300201.jpeg)

>输入：[1,8,6,2,5,4,8,3,7]
>输出：49 
>解释：图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。

高度$H = min(h[i],h[j])$
$$
宽度W = j - i\\
在约束{1}\le{i}\le{j}\le{N}下，最大化函数
f(i,j)=min(h[i],h[j])*(j - i)
$$



核心定理：**双指针单调性收缩**

核心逻辑

$$
两指针相向而行，实时更新高度H的最小值，若$h[i]<h[j]$则i++，反之则j++，\\计算每个遍历到的矩形既盛水面积，更新maxArea，遍历结束最终返回maxArea
$$
**最优解法：左右双指针**

版本1：直接跳过矮柱子

```cpp
 int maxArea(vector<int>& height){
     int n = height.size();//传入数组的长度
     int left = 0;//初始化左指针
     int right = n - 1;//初始化右指针
     int maxA = 0;//初始化最大值
     while(left < right){
         int h = min(height[left],height[right]);//记录当前节点左右柱子的最小值
         maxA = max(maxA,h*(left - right));//更新面积最大值
         while(l < r && height[l] <= h)l++;//如果当前左柱子没有记录的h高就跳过
         while(l < r && height[r] <= h)r++;//如果当前有柱子没有记录的h高就跳过
     }
     return maxA;
 }
```

版本2：普通版本

```cpp
int maxArea(vector<int>& height) {
        int maxArea = 0, left = 0, right = height.size()-1;
        while(left < right){
            maxArea = max(min(height[left],height[right])*(right-left),maxArea);
            if(height[left] < height[right])left++;
            else right--;
        }
        return maxArea;
    }  
```

时间复杂度：$O(n)$

## 15三数之和

最优解法：排序+左右双指针

时间：$O(n^2)$,空间：$O(log_n)-O(n)$排序用

```cpp
class Solution{
public:
    vector<vector<int>> threeSum(vector<int>& nums) {
        vector<vector<int>> res;
        sort(nums.begin(),nums.end());
        for(int i = 0; i < nums.size(); i++){
            int r = nums.size() - 1, l = i + 1;
            int target = -nums[i];
            while(i > 0 && nums[i] == nums[i - 1])continue;
            while(l < r){
                int sum = nums[l] + nums[r];
                if(sum == target){
                    res.push_back({nums[i],nums[l],nums[r]});
                    while(l < r && nums[l] == nums[l + 1])l++;
                    while(l < r && nums[r] == nums[r - 1])r--;
                    l++,r--;
                }else{
                    if(sum > target)r--;
                    else l++;
                }
            }
        }
        return res;
    }
};
```

## 42接雨水

$$
当前接雨水的值ans=min(h[l],h[r]) - height(i)
$$

方法一：左右双指针

```cpp
int trap(vector<int>& height) {
    int n = height.size();
    int l = 0;
    int r = n - 1;
    int maxL = 0;
    int maxR = 0;
    int ans = 0;
    while(l < r){
    	maxL = max(maxL,height[l]);
        maxR = max(maxR,height[r]);
        if(maxL < maxR){
            ans += maxL - height[l++];
        }else{
            ans += maxR - height[r--];
        }
    }
    return ans;
}
```

方法二：前后缀方法

创建`vector<int> left(n),right(n)`记录在当前节点时候左边最高值和右边最高值，最后遍历`height`，代入公式`ans+=min(h[l],h[r]) - height[i])`，最后返回`ans`

```cpp
class Solution {
public:
    int trap(vector<int>& height) {
        int n = height.size();
        vector<int> left(n), right(n);
        if (n == 0)
            return 0;
        left[0] = height[0];
        for (int i = 1; i < n; i++) {
            left[i] = max(left[i - 1], height[i]);
        }
        right[n - 1] = height[n - 1];
        for (int i = n - 2; i >= 0; i--) {
            right[i] = max(right[i + 1], height[i]);
        }
        int ans = 0;
        for(int i = 0; i < n; i++){
            ans += min(left[i],right[i]) - height[i];
        }
        return ans;
    }
};
```

## 3无重复字符的最长子串

题目：给定一个字符串 `s` ，请你找出其中不含有重复字符的 **最长 子串** 的长度。

**示例 1:**

>输入: s = "abcabcbb"
>输出: 3 
>解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。注意 "bca" 和 "cab" 也是正确答案。

**解题思路：**

**方法一：哈希+双指针**

通过哈希set来存储字母，遍历字符串，如果在没有找到当前字符，将有窗口的字母加入set，如果出现重复的就删掉左窗口指向的字符并让左窗口右移，更新maxLen的长度，最终返回maxLen

```cpp
class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        unordered_set<char> se;//哈希集合：记录当前滑动窗口内的所有字符
        int n = s.size();
        int left = 0;
        int lenMax = 0;
        for (int right = 0; right < n; ++right) {
            //核心痛点：若右界字符已存在，说明发生重复
            //必须不断收缩左边界并移除字符，直到窗口内不再包含s[right]
            while (se.find(s[right]) != se.end()) {
                se.erase(s[left++]);//
            }
            se.insert(s[right]);//此时窗口无重复，纳入新字符入窗口
            //此时在[left,right]区间有效，更新全局最大长度
            lenMax = max(lenMax, right - left + 1);
        }
        return lenMax;
    }
};
```

**方法二：跳跃滑动窗口**

```cpp
class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        //哈希映射数组：记录字符“下一次允许出现的起始合法位置”
        //128覆盖全部ASCII码，初始化为0
        int index[128] = {0};
        int left = 0;
        int lenMax = 0;
        for(int right = 0; right < s.size(); ++right){
            char ch = s[right];
            left = max(left,index[ch]);
            lenMax = max(lenMax, right - left + 1);
            index[ch] = right + 1;
        }
        return lenMax;   
    }
};
```



## 438找到字符串中所有字母异位词

# 哈希

## 1两数之和

**解决思路：**

此题要返回下标，所以需要选用`unordered_map,`而不能是选用set，无法匹配下标

直接`for`循环遍历`nums`，在里面寻找`target - nums[i]`是否存在`map`里面，如果存在返回`{当前坐标i,it->second} `

**代码实现**

```cpp
class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        unordered_map<int, int> map;
        for (int i = 0; i < nums.size(); i++) {
            auto it = map.find(target - nums[i]);
            if (it != map.end())
                return {i, it->second};
            map[nums[i]] = i;
        }
        return {};
    }
};
```

# 图论

## 994腐烂橘子

**题目内容：**

在给定的 `m x n` 网格 `grid` 中，每个单元格可以有以下三个值之一：

- 值 `0` 代表空单元格；
- 值 `1` 代表新鲜橘子；
- 值 `2` 代表腐烂的橘子。

每分钟，腐烂的橘子 **周围 4 个方向上相邻** 的新鲜橘子都会腐烂。

返回 *直到单元格中没有新鲜橘子为止所必须经过的最小分钟数。如果不可能，返回 `-1`* 。

**示例1：**

![](https://cdn.jsdelivr.net/gh/yuboyang73/Picture-bed@img/img/20260518102307054.png)

> 输入：grid = [[2,1,1],[1,1,0],[0,1,1]]
> 输出：4

**示例 2：**

> 输入：grid = [[2,1,1],[0,1,1],[1,0,1]]
> 输出：-1
> 解释：左下角的橘子（第 2 行， 第 0 列）永远不会腐烂，因为腐烂只会发生在 4 个方向上。

**示例 3：**

> 输入：grid = [[0,2]]
> 输出：0
> 解释：因为 0 分钟时已经没有新鲜橘子了，所以答案就是 0 。

**解题思路:**

可以直接看出要使用BFS广度优先的遍历方法。

1. 首先先记录行列的大小n，m和fresh（新鲜水果的数量）以及一个pair的队列
2. 进入循环，将[x,y]=2的放入队列，[x,y]=1的fresh++;
3. 设置方向数组，遍历队列（队列不为空且fresh>0），循环方向数组，设置新的nx,ny（将要传染的位置），判断是否有桔子，有则将其污染并放入队列，fres--
4. for循环结束将time++,while循环结束返回`fresh == 0?time;-1`

**问题1：**

如何标记腐烂桔子四个方向上（上、下、左、右）的桔子让其在下个时间段被传染

**方法1：**

```cpp
int dx[4] = {1,-1,0,0};
int dy[4] = {0,0,1,-1};
```

**方法2：**

```cpp
vector<pair<int,int>> dir = {{-1,0},{1,0},{0,-1},{0,1}};
```

**方法3：**

```cpp
int d[5] = {-1,0,1,0,-1};
for(int k = 0; k < 4; k++){
    int nx = x + d[k];
    int ny = y + d[k + 1];
}
```

**代码**

![image-20260518134656360](https://cdn.jsdelivr.net/gh/yuboyang73/Picture-bed@img/img/20260518134737305.png)



`for (int i = 0; i < size; i++)`这句是分层



## 207课程表

你这个学期必须选修 `numCourses` 门课程，记为 `0` 到 `numCourses - 1` 。

在选修某些课程之前需要一些先修课程。 先修课程按数组 `prerequisites` 给出，其中 `prerequisites[i] = [ai, bi]` ，表示如果要学习课程 `ai` 则 **必须** 先学习课程 `bi` 。

- 例如，先修课程对 `[0, 1]` 表示：想要学习课程 `0` ，你需要先完成课程 `1` 

请你判断是否可能完成所有课程的学习？如果可以，返回 `true` ；否则，返回 `false` 。

**示例 1：**

> 输入：numCourses = 2, prerequisites = [[1,0]]
> 输出：true
> 解释：总共有 2 门课程。学习课程 1 之前，你需要完成课程 0 。这是可能的。

**示例 2：**

> 输入：numCourses = 2, prerequisites = [[1,0],[0,1]]
> 输出：false
> 解释：总共有 2 门课程。学习课程 1 之前，你需要先完成课程 0 ；并且学习课程 0 之前，你还应先完成课程 1 。这是不可能的。

**解题思路：**

该题考查的是建图和拓扑排序(没有入度的在前面)

**方法1(Kahn算法):**

1. 首先设置一个二维数组adj和记录入度的一维数组din,遍历进行建图
2. 设置队列和记录课程的个数cnt，遍历din先将入度为0的元素入队
3. 循环遍历队列（不为空），设置队头元素front，出队，cnt++。遍历front的adj，判断--din[front]==0，是则放入队列。
4. 循环结束返回cnt ==numCourses

**代码**

```cpp
class Solution {
public:
    bool canFinish(int numCourses, vector<vector<int>>& prerequisites) {
        vector<vector<int>> adj(numCourses);
        vector<int> din(numCourses,0);
        for(auto &pre:prerequisites){
            int a = pre[0];
            int b = pre[1];
            adj[b].push_back(a);
            din[a]++;
        }
        queue<int> q;
        for(int i = 0; i <numCourses; i++){
            if(!din[i])q.push(i);
        }
        int cnt = 0;
        while(!q.empty()){
            int x = q.front();
            q.pop();
            cnt++;
            for(auto y: adj[x]){
                if(--din[y]==0)q.push(y);
            }
        }
        return cnt == numCourses;
    }
};
```

**方法2(DFS算法):**

设置辅助bool类型的dfs函数(传入u(第u个元素),adj(邻接表),state(状态))

1. 首先判断state[u]的状态，1为有环，2为已处理过无环
2. 将当前元素状态设置为1
3. 循环adj[u],递归其dfs是否为1，是1为true
4. 出循环说明无环，将状态设置为2
5. 返回false无环

**代码**

```cpp
class Solution {
    public:
    bool canFinish(int numCourses, vector<vector<int>>& prerequisites) {
        vector<vector<int>> adj(numCourses);
        vector<int> state(numCourses, 0);

        for (auto& pre : prerequisites) {
            int a = pre[0];
            int b = pre[1];
            adj[b].push_back(a);
        }
        for (int i = 0; i < numCourses; i++) {
            if (dfs(i, adj, state))
                return false;
        }
        return true;
    }
    bool dfs(int u, vector<vector<int>>& adj, vector<int>& state) {
        if (state[u] == 1)
            return true; // 遇到环
        if (state[u] == 2)
            return false; // 已处理过无环

        state[u] = 1;
        for (auto v : adj[u]) {
            if (dfs(v, adj, state))
                return true;
        }
        state[u] = 2; // 标记遍历完成
        return false;
    }
};
```

# 常用数据结构

## 差分

```cpp
#include <iostream>
#include <vector>
using namespace std;

int main() {
    // 1. 原始分数 (10个学生)
    vector<int> a = {60, 70, 80, 75, 90, 85, 65, 70, 95, 80};
    int n = a.size();

    // 2. 预处理出差分数组 diff
    vector<int> diff(n + 1, 0); // 多开一格防越界
    diff[0] = a[0];
    for (int i = 1; i < n; ++i) {
        diff[i] = a[i] - a[i-1];
    }

    // 3. 核心：执行区间修改！给下标 [2, 7]（即第3到第8个）的学生加 5 分
    int L = 2, R = 7, val = 5;
    
    diff[L] += val;     // 左端点：我和前一个人的分差拉开了
    diff[R + 1] -= val; // 右端点的下一格：我和前一个人的分差跌落了

    // 4. 最后算总账：通过差分数组的“前缀和”还原出最终的分数
    a[0] = diff[0];
    for (int i = 1; i < n; ++i) {
        // 前缀和递推：当前分差 + 前一个人算出来的最终得分 = 我自己的最终得分
        a[i] = diff[i] + a[i-1]; 
    }

    // 输出查看结果
    for (int score : a) cout << score << " "; 
    // 输出结果: 60 70 85 80 95 90 70 75 95 80 
    // 发现了吧！原本下标2到7的[80, 75, 90, 85, 65, 70] 完美变成了 [85, 80, 95, 90, 70, 75]
    return 0;
}
```

### 1109航班预订统计 

### 1094拼车

# 树

## 94二叉树中序遍历

## 102二叉树层序遍历

**方法一：队列方法**

```cpp
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left),
 * right(right) {}
 * };
 */
class Solution {
public:
    vector<vector<int>> levelOrder(TreeNode* root) {
        if(root == nullptr)return {};//如果树根为空直接返回
        vector<vector<int>> res;//创建返回数组
        queue<TreeNode*> q;//创建队列
        q.push(root);//把树根放进队列
        while (!q.empty()) {
            int size = q.size();//队列的长度=当前层数
            vector<int> cur;//临时数组
            for (int i = 0; i < size; i++) {
                TreeNode* x = q.front();//取队头元素
                q.pop();//出队
                cur.push_back(x->val);//放入当前元素的值
                if (x->left)//判断左孩子不为0
                    q.push(x->left);//放入右孩子
                if (x->right)//判断右孩子不为0
                    q.push(x->right);//放入右孩子
            }
            res.push_back(cur);//将临时数组放入返回数组
        }
        return res;
    }
};
```

**方法二：递归方法**

```cpp
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    void yj(TreeNode *root, vector<vector<int>> &res,int k){
        if(!root)return;//判断当前树是否为空
        if(res.size()<=k){//判断二维数组是否有第k行
            res.push_back({});//没有就直接创建
        }
        res[k].push_back(root->val);//将当前k层的元素放入数组
        yj(root->left,res,k+1);//递归左子树
        yj(root->right,res,k+1);//递归右子树
    }
    vector<vector<int>> levelOrder(TreeNode* root) {
        vector<vector<int>> res;
        yj(root,res,0);
        return res;
    }
};
```



## 226二叉树翻转

直接swap交换

```cpp
class Solution {
public:
    TreeNode* invertTree(TreeNode* root) {
        if(root==nullptr)return root;
        
        swap(root->left,root->right);

        invertTree(root->left);
        invertTree(root->right);
        return root;
    }
};
```

## **101二叉树判断轴对称**



```cpp
class Solution {
public:
    bool func(TreeNode *left,TreeNode *right){
        if(left == nullptr && right == nullptr)return true;//左右孩子都是空是对称
        if(left == nullptr || right == nullptr)return false;//左右孩子有一个非空不对称
        return left->val == right->val && func(left->right,right->left) && func(left->left,right->right);//直接返回当前值是否相等&&左子树的右孩子和右子树的左孩子是否对称&&左子树的左孩子和右子树的右孩子是否对称
 }
    bool isSymmetric(TreeNode* root) {
        if(root==nullptr)return true;//树为空直接返回对称
        return func(root->left,root->right);
    }
};
```

二叉树判断子树

## **98验证BST树**

![img](https://cdn.jsdelivr.net/gh/yuboyang73/Picture-bed@img/img/20260522234946855.jpeg)

方法一：递归

```cpp
bool isBST(TreeNode* &cur,TreeNode* &pre){
        if(cur==nullptr)return true;//到叶子节点向上返回true
        if(!isBST(cur->left,pre))return false;//L先递归左子树，不是就返回false
        if(pre!=nullptr){//pre是全局变量，此时pre是cur的左孩子
            //V当前父节点的值要严格大于左孩子
            if(cur->val <= pre->val)return false;
        }
    	//之前的pre是cur的左孩子
        pre = cur;//现在递归pre是cur的父节点，cur是pre的右孩子
        return isBST(cur->right,pre);//R遍历右子树
    }
    bool isValidBST(TreeNode* root) {
       TreeNode *pre = nullptr;
       return isBST(root,pre);
    }
```

方法二：迭代

## 104二叉最大树深度



## 543二叉树直径

![img](https://cdn.jsdelivr.net/gh/yuboyang73/Picture-bed@img/img/20260522210649071.jpeg)

>输入：root = [1,2,3,4,5]
>输出：3
>解释：3 ，取路径 [4,2,1,3] 或 [5,2,1,3] 的长度。

**方法一：深度优先搜索**

任意一条路径都可以看作由某个节点为起点，从左孩子和右孩子遍历的路径拼接得到，当前点的直径长度$d$就是左子树的深度$left$和右子树的深度$righ$最大值加1，既$d=max(left+right)+1$写一个dfs函数，参数记录root和ans最大直径(可以当参数也可以当全局变量)。分别遍历左子树和右子树最终返回ans，在主函数直接调用并返回。

```cpp
class Solution {
public:
    int dfs(TreeNode* root, int &ans){
        if(root == nullptr)return 0;
        int left = dfs(root->left);//记录左子树的长度
        int right = dfs(root->right);//记录右子树的长度
        ans = max(ans,left + right);//更新最大直径
        return maX(left,right) + 1;//返回给上一层两者最大值加1的结果，每多一个节点增加1个深度
    }
    int diameterOfBinaryTree(TreeNode* root) {
        int ans = 0;
        dfs(root,ans);
        return ans;
    }
};
```

---

# 洛谷算法题
