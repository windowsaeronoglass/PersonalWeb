export const siteConfig = {
  // ========== 站点信息 ==========
  url: 'https://ngls211-fir.top',
  title: "ngls211's Blog",
  description: '一个普通的个人小站 & blogs',

  // ========== 个人信息 ==========
  author: {
    name: 'ngls211',
    bio: '一个喜欢捣鼓各种技术的人，对 Web 开发、后端架构都有兴趣，偶尔写点东西分享。',
    aboutText: '对 Web 开发、后端架构都有兴趣，从打磨前端 UI 到设计可扩展的后端系统都乐于探索。',
    email: '3083067505@qq.com',
  },

  // ========== 技能标签（关于页） ==========
  skills: ['TypeScript', 'React', 'Node.js', 'Python', 'Go', 'PostgreSQL', 'Docker', 'AWS'],

  // ========== 社交链接 ==========
  social: {
    github: 'https://github.com/yourusername',
    bilibili: 'https://space.bilibili.com/353979806',
  },

  // ========== Giscus 评论 ==========
  giscus: {
    repo: 'yourusername/yourrepo',
    repoId: 'R_kgXXXXXXX',
    category: 'Announcements',
    categoryId: 'DIC_kwXXXXXXX',
    theme: 'dark_dimmed',
    lang: 'zh-CN',
  },

  // ========== 区域设置 ==========
  locale: 'zh-CN',
  htmlLang: 'zh-CN',

  // ========== 联系表单 API ==========
  contactApiPath: '/api/contact',
} as const;
