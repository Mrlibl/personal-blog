# 个人博客 (Personal Blog)

一个使用 Next.js 构建的现代个人博客。

## 技术栈

- **Next.js 16** - React 框架（App Router）
- **TypeScript** - 类型安全的 JavaScript
- **Tailwind CSS** - 原子化 CSS 框架
- **Markdown** - 博客文章格式
- **gray-matter** - Markdown Front Matter 解析
- **remark** - Markdown 转 HTML

## 功能特性

- 📝 Markdown 格式博客文章
- 🏠 首页展示文章列表
- 📖 文章详情页
- 👤 关于页面
- 🌙 深色模式支持
- 📱 响应式设计
- ⚡ 静态页面生成（SSG）

## 开始使用

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000)

### 构建生产版本

```bash
npm run build
npm run start
```

## 添加博客文章

在 `posts/` 目录下创建新的 `.md` 文件：

```markdown
---
title: "文章标题"
date: "2026-01-01"
excerpt: "文章摘要"
tags: ["标签1", "标签2"]
---

# 文章内容

正文...
```

## 项目结构

```
├── app/
│   ├── layout.tsx        # 根布局
│   ├── page.tsx          # 首页
│   ├── about/
│   │   └── page.tsx      # 关于页面
│   └── blog/
│       └── [slug]/
│           └── page.tsx  # 文章详情页
├── components/
│   ├── Header.tsx        # 导航头部
│   ├── Footer.tsx        # 页脚
│   └── PostCard.tsx      # 文章卡片组件
├── lib/
│   └── posts.ts          # 博客文章工具函数
└── posts/
    ├── hello-world.md
    ├── nextjs-15-features.md
    ├── typescript-best-practices.md
    └── tailwind-css-tips.md
```
