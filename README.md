# PersonWeb

基于 Astro 构建的个人博客网站，暖白毛玻璃设计 + 粒子动效 + 鼠标交互彩蛋。

## 预览

![screenshot](public/screenshot.png)

## 技术栈

- **框架**: [Astro](https://astro.build) 5.x
- **样式**: [Tailwind CSS](https://tailwindcss.com) 4.x
- **内容**: MDX (Markdown + 组件)
- **评论**: [Giscus](https://giscus.app) (GitHub Discussions)
- **后端**: Express.js (联系表单 API)
- **部署**: Nginx 反向代理 + Let's Encrypt SSL
- **字体**: Clash Display / Plus Jakarta Sans / Remix Icon

## 特性

- 暖白毛玻璃 (Glassmorphism) 视觉风格
- Canvas 粒子动态背景 (蓝粉渐变色)
- 双立框 (Double Bezel) 嵌套卡片架构
- 鼠标拖尾流星 + 点击涟漪交互彩蛋
- 滚动入场动画 (IntersectionObserver + cubic-bezier)
- MDX 博客内容集合 (代码高亮)
- 联系表单 (Express API + Nginx 反向代理)
- Giscus 评论系统
- RSS + Sitemap 自动生成
- 一键 Git Push 自动部署

## 目录结构

```
PersonWeb/
├── astro.config.mjs          # Astro 配置
├── tsconfig.json
├── nginx.conf                # Nginx 部署配置
├── deploy.sh                 # 服务器端自动部署脚本
├── server/                   # Express 后端
│   └── index.js
└── src/
    ├── site.config.ts        # 站点全局配置 (改这里!)
    ├── styles/global.css     # Tailwind + 主题变量
    ├── content/
    │   ├── config.ts         # 内容集合定义
    │   └── blog/             # 博客文章 (.mdx)
    ├── layouts/
    │   ├── BaseLayout.astro
    │   └── BlogPostLayout.astro
    ├── components/
    │   ├── Nav.astro              # 浮动导航
    │   ├── Footer.astro
    │   ├── ParticleBackground.astro  # 粒子背景
    │   ├── MouseEffects.astro     # 鼠标交互彩蛋
    │   ├── GlassCard.astro        # 毛玻璃卡片
    │   ├── BlogCard.astro         # 博客卡片
    │   ├── ScrollReveal.astro     # 滚动动画
    │   ├── ContactForm.astro      # 联系表单
    │   └── GiscusComments.astro   # 评论系统
    └── pages/
        ├── index.astro            # 首页
        ├── about.astro            # 关于
        ├── contact.astro          # 联系
        ├── rss.xml.js             # RSS
        └── blog/
            ├── index.astro        # 博客列表
            └── [slug].astro       # 博客详情
```

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览构建结果
npm run preview

# 启动后端 API (端口 3001)
npm run server
```

## 修改站点信息

编辑 **`src/site.config.ts`** 一个文件即可：

```ts
export const siteConfig = {
  url: 'https://你的域名.com',
  title: "你的博客名",
  author: {
    name: '你的名字',
    bio: '个人简介...',
    email: '你的邮箱',
  },
  skills: ['技能1', '技能2', ...],
  social: {
    github: 'https://github.com/...',
    bilibili: 'https://space.bilibili.com/...',
  },
  projects: [
    { name: '项目名', description: '...', tech: ['...'], link: '...' },
  ],
  giscus: { ... },  // 评论配置
};
```

## 写博客

在 `src/content/blog/` 下新建 `.mdx` 文件：

```mdx
---
title: '文章标题'
description: '文章简介'
date: 2026-06-28
tags: ['标签1', '标签2']
---

文章内容 (Markdown) ...
```

## 部署

推送即可自动部署（需先配置服务器 Git hook）：

```bash
git add -A
git commit -m "更新xxx"
git push deploy master
```

服务器端配置参见 [deploy.sh](deploy.sh) 和 [nginx.conf](nginx.conf)。

## License

MIT
