export const siteConfig = {
  // ========== 站点信息 ==========
  url: 'https://ngls211-fir.top',
  title: "ngls211's Blog",
  description: '一个普通的个人小站 & blogs',

  // ========== 个人信息 ==========
  author: {
    name: 'ngls211',
    bio: 'Software engineer, builder, and occasional writer. I craft things for the web and explore the spaces between code and creativity.',
    aboutText: "分享,分享，嗯...没啥了",
    email: '3083067505@qq.com',
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
