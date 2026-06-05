import { defineConfig } from 'vitepress'
import markdownItKatex from 'markdown-it-katex'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/knowledge-case/',
  srcDir: 'docs',              // 源文件目录设为 docs/
  title: "C++ 数据结构与算法",
  description: "个人知识库 — 理论模块与习题实战的双向关联体系",
  markdown: {
    config: (md) => {
      md.use(markdownItKatex)
    }
  },
  head: [
    ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.9/katex.min.css' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '🏠 首页', link: '/' },
      { text: '📖 理论模块', link: '/sitemap#一、理论模块一览' },
      { text: '✍️ 习题练习', link: '/sitemap#二、习题文件一览' },
      { text: '📋 完整索引', link: '/sitemap' }
    ],

    sidebar: [
      {
        text: '📋 全局导航',
        items: [
          { text: '📋 完整索引', link: '/sitemap' }
        ]
      },
      {
        text: '📖 理论模块',
        collapsed: false,
        items: [
          { text: 'C++ STL容器与排序', link: '/theory/cpp-stl-sort' },
          { text: '函数重载与运算符重载', link: '/theory/cpp-operator-overload' },
          { text: '二叉搜索树 BST', link: '/theory/ds-binary-search-tree' },
          { text: '哈希表 (unordered_map)', link: '/theory/ds-hashmap' },
          { text: '前缀和与差分', link: '/theory/algo-prefix-diff' },
          { text: '回溯 — 子集树框架', link: '/theory/algo-backtrack-subset' },
          { text: '回溯 — 排列树框架', link: '/theory/algo-backtrack-permutation' },
          { text: '分治算法', link: '/theory/algo-divide-conquer' },
          { text: '分支限界法', link: '/theory/algo-branch-bound' },
          { text: '贪心算法', link: '/theory/algo-greedy' },
          { text: 'DFS / BFS', link: '/theory/algo-dfs-bfs' },
          { text: '图的存储', link: '/theory/ds-graph-storage' },
          { text: '动态规划基础', link: '/theory/algo-dp-basics' },
          { text: '字符串匹配 (BF/KMP)', link: '/theory/algo-string-match' },
          { text: 'Trie 字典树', link: '/theory/ds-trie' }
        ]
      },
      {
        text: '✍️ 习题练习',
        collapsed: false,
        items: [
          {
            text: '哈希专题',
            items: [
              { text: '0001-两数之和', link: '/exercises/hash/0001-两数之和' },
              { text: '0049-字母异位词分组', link: '/exercises/hash/0049-字母异位词分组' }
            ]
          },
          {
            text: '回溯专题',
            items: [
              { text: '子集树-最小差值', link: '/exercises/backtrack/整数问题-子集树最小差值' },
              { text: 'N皇后问题', link: '/exercises/backtrack/N皇后问题' },
              { text: '0-1背包-回溯法', link: '/exercises/backtrack/0-1背包-回溯法' }
            ]
          },
          {
            text: '贪心专题',
            items: [
              { text: '硬币问题-贪心', link: '/exercises/greedy/硬币问题-贪心' },
              { text: '部分背包问题', link: '/exercises/greedy/部分背包问题' }
            ]
          },
          {
            text: '分治专题',
            items: [
              { text: '0004-两有序数组中位数', link: '/exercises/divide-conquer/0004-两有序数组中位数' }
            ]
          },
          {
            text: '动态规划专题',
            items: [
              { text: 'LCS-最长公共子序列', link: '/exercises/dp/LCS-最长公共子序列' },
              { text: 'LIS-最长递增子序列', link: '/exercises/dp/LIS-最长递增子序列' }
            ]
          },
          {
            text: '字符串专题',
            items: [
              { text: 'BF字符串匹配', link: '/exercises/string/BF字符串匹配' },
              { text: 'KMP字符串匹配', link: '/exercises/string/KMP字符串匹配' }
            ]
          },
          {
            text: '双指针专题',
            items: [
              { text: '0011-盛最多水的容器', link: '/exercises/two-pointers/0011-盛最多水的容器' },
              { text: '0015-三数之和', link: '/exercises/two-pointers/0015-三数之和' },
              { text: '0042-接雨水', link: '/exercises/two-pointers/0042-接雨水' }
            ]
          },
          {
            text: '滑动窗口专题',
            items: [
              { text: '0003-无重复字符最长子串', link: '/exercises/sliding-window/0003-无重复字符最长子串' }
            ]
          },
          {
            text: '图论专题',
            items: [
              { text: '0994-腐烂的橘子', link: '/exercises/graph/0994-腐烂的橘子' },
              { text: '0207-课程表', link: '/exercises/graph/0207-课程表' }
            ]
          },
          {
            text: '树专题',
            items: [
              { text: '0102-二叉树层序遍历', link: '/exercises/tree/0102-二叉树层序遍历' },
              { text: '0226-翻转二叉树', link: '/exercises/tree/0226-翻转二叉树' },
              { text: '0101-对称二叉树', link: '/exercises/tree/0101-对称二叉树' },
              { text: '0098-验证二叉搜索树', link: '/exercises/tree/0098-验证二叉搜索树' },
              { text: '0543-二叉树的直径', link: '/exercises/tree/0543-二叉树的直径' }
            ]
          }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    // 自定义页脚
    footer: {
      message: '个人学习知识库',
      copyright: '以 MIT 协议开源'
    }
  }
})
