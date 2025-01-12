const CONFIG = {
  name: 'business',
  title: 'Antenna 触角 - AI 驱动的营销增长引擎 | 智能内容创作 & 用户运营平台',
  description: 'Antenna 触角是一款 AI 营销工具，提供智能内容创作、用户运营、营销智库、社交分享和灵感记录等功能，帮助企业和个人提升营销效率，实现业绩增长。',
  author: 'Incidental AI',
  github: '',
  version: '1.0.0',
  features: {
    darkMode: true,
    i18n: true,
    search: true,
    comment: true,
    tags: true,
    categories: true,
    toc: true
  },
  socials: {
    github: '',
    twitter: '',
    linkedin: ''
  },
  analytics: {
    google: '',
    baidu: ''
  },
  comment: {
    gitalk: {
      clientID: '',
      clientSecret: '',
      repo: '',
      owner: '',
      admin: ['']
    }
  },
  HERO: {
    introducing: "欢迎使用 Antenna 触角",
    title: "内容创作耗时费力，灵感枯竭？",
    subTitle: "",
    typewriterWords: [
      {
        text: "Antenna",
      },
      {
        text: "触角",
      },
      {
        text: "————",
      },
      {
        text: "让内容创作更高效",
      },
      {
        text: "用户运营更智能",
        className: "text-blue-500 dark:text-blue-500",
      },
    ],
    buttons: [
      {
        text: "立即体验",
        href: "#features",
        type: "primary"
      },
    ]
  },
  FEATURES: {
    title: "核心功能",
    description: "五大核心功能模块，助力营销创新",
    items: [
      {
        title: "营销博客社区",
        description: "触角拥有一个庞大且持续更新的营销博客社区，汇集了大量优质的营销原理方案和成功案例。无论你是营销新手还是资深专家，都能在这里找到灵感和解决方案。",
        icon: "📚"
      },
      {
        title: "AI 内容创作",
        description: "采用先进的 RAG 技术，深入理解你的需求，为你量身打造极具吸引力的营销文案。支持多种类型的营销文案，包括邮件、文章、策划、贴文、短视频脚本等。",
        icon: "✨"
      },
      {
        title: "智能用户运营",
        description: "具备先进的情绪分析能力，能够深入理解用户文字背后的情绪，智能生成贴心、人性化的回复。支持文档一键转 FAQ，方便用户快速获取所需信息。",
        icon: "👥"
      },
      {
        title: "社交分享",
        description: "支持生成高度自定义的社交卡片和个人电子名片，让你在社交媒体上脱颖而出，提升品牌形象和影响力。",
        icon: "🔗"
      }
    ]
  },
  QUICK_START: {
    title: "立即开始",
    description: "立即体验 Antenna 触角，开启你的营销新篇章！",
    code: "npm install @antenna/marketing-suite",
    language: "bash"
  }
}

export default CONFIG
