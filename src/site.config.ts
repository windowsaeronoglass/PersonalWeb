export const siteConfig = {
  // ========== 站点信息 ==========
  url: 'https://ngls211-fir.top',
  title: "Mo's Blog",
  description: 'Personal website & blog',

  // ========== 个人信息 ==========
  author: {
    name: 'Mo',
    bio: 'Software engineer, builder, and occasional writer. I craft things for the web and explore the spaces between code and creativity.',
    aboutText: "I'm a software engineer passionate about building things for the web. I enjoy working across the stack — from crafting polished UIs to designing scalable backend systems.",
    email: 'hello@example.com',
  },

  // ========== 技能标签（关于页） ==========
  skills: ['TypeScript', 'React', 'Node.js', 'Python', 'Go', 'PostgreSQL', 'Docker', 'AWS'],

  // ========== 社交链接 ==========
  social: {
    github: 'https://github.com/yourusername',
    twitter: 'https://twitter.com/yourhandle',
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
