export const siteConfig = {
  // ========== 站点信息 ==========
  url: 'https://ngls211-fir.top',
  title: "ngls211's Blog",
  description: '一个普通的个人小站 & blogs',

  // ========== 个人信息 ==========
  author: {
    name: 'ngls211',
    bio: '喜欢捣鼓一些小东西，对 Web 开发、后端架构都有兴趣，偶尔写点东西分享。',
    aboutText: '对 Web 开发、后端架构都有兴趣，从打磨前端 UI 到设计可扩展的后端系统都乐于探索。',
    email: '3083067505@qq.com',
  },

  // ========== 技能标签（关于页） ==========
  skills: ['TypeScript', 'React', 'Node.js', 'Python', 'Go', 'PostgreSQL', 'Docker', 'AWS'],

  // ========== 项目展示（首页） ==========
  projects: [
    {
      name: 'PersonWeb',
      description: '个人博客网站，基于 Astro + Tailwind CSS，毛玻璃风格，支持粒子背景、鼠标交互动效、Giscus 评论。',
      tech: ['Astro', 'Tailwind CSS', 'TypeScript'],
      link: 'https://github.com/windowsaeronoglass/PersonalWeb',
    },
  ],

  // ========== 社交链接 ==========
  social: {
    github: 'https://github.com/windowsaeronoglass',
    bilibili: 'https://space.bilibili.com/353979806',
  },

  // ========== Giscus 评论 ==========
  giscus: {
    repo: 'windowsaeronoglass/PersonalWeb',
    repoId: 'R_kgDOTGuIMA',
    category: 'General',
    categoryId: 'DIC_kwDOTGuIMM4C__us',
    theme: 'dark_dimmed',
    lang: 'zh-CN',
  },

  // ========== 区域设置 ==========
  locale: 'zh-CN',
  htmlLang: 'zh-CN',

  // ========== 联系表单 API ==========
  contactApiPath: '/api/contact',
} as const;
