# Fate Compass - 东方智慧，指明你的方向

一个专业的东方命理服务品牌官网，展示东方命理智慧，传达可信、灵性、温暖的形象。

## 🎯 项目目标

- 打造面向海外用户的命理服务品牌官网
- 展示东方命理智慧，传达可信、灵性、温暖的形象
- 实现服务介绍 + 好评展示 + 博客内容 + 客户转化

## 🗂️ 网站结构

### 页面组成
1. **首页 (Home)** - 动态山水背景，品牌价值主张，好评轮播，服务预览
2. **服务页 (Services)** - 三大核心服务详细介绍
3. **博客页 (Blog)** - 命理知识分享，支持Markdown
4. **关于页 (About)** - 玄印大师介绍，品牌理念
5. **联系页 (Contact)** - 多种联系方式，FAQ

### 核心服务
- **八字详批** ($29) - 深度个人命理分析
- **情感合盘** ($39) - 情侣八字匹配解读  
- **护符开运** ($49) - 针对个人命盘定制护符建议

## 🛠️ 技术栈

- **框架**: Next.js 14 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **动画**: Framer Motion
- **图标**: Lucide React
- **字体**: Inter + Noto Serif SC

## 🚀 快速开始

### 安装依赖
```bash
npm install
```

### 开发模式
```bash
npm run dev
```

### 构建生产版本
```bash
npm run build
```

### 启动生产服务器
```bash
npm start
```

## 📱 响应式设计

网站完全响应式，支持：
- 桌面端 (1200px+)
- 平板端 (768px - 1199px)
- 移动端 (< 768px)

## 🎨 设计特色

### 视觉风格
- **东方意境**: 水墨流动背景，传统色彩搭配
- **现代简约**: 清晰的布局，优雅的动画效果
- **专业可信**: 专业的排版，权威的视觉呈现

### 交互体验
- **流畅动画**: 页面滚动动画，悬停效果
- **直观导航**: 清晰的导航结构，便捷的跳转
- **快速响应**: 优化的加载速度，良好的用户体验

## 📞 联系方式

- **WhatsApp**: +86 15914228258
- **邮箱**: chenxiao0801@hotmail.com
- **服务时间**: 周一-周五 9:00-21:00，周六-周日 10:00-22:00

## 🔧 自定义配置

### 颜色主题
在 `tailwind.config.js` 中修改颜色配置：
```javascript
colors: {
  primary: {
    50: '#fef7ee',
    // ... 其他色阶
  },
  secondary: {
    50: '#f0f9ff',
    // ... 其他色阶
  }
}
```

### 字体配置
支持中英文字体：
- 中文: Noto Serif SC
- 英文: Inter

## 📝 内容管理

### 博客文章
- 位置: `app/blog/[slug]/page.tsx`
- 格式: Markdown + React组件
- SEO: 支持元数据配置

### 服务信息
- 位置: `app/services/page.tsx`
- 配置: 直接在组件中修改服务数据

### 联系信息
- 位置: `app/contact/page.tsx`
- 更新: 修改联系方式数组

## 🌟 特色功能

1. **动态背景**: 水墨流动效果，营造东方意境
2. **轮播展示**: 灵性诗句轮播，好评展示
3. **响应式设计**: 完美适配各种设备
4. **SEO优化**: 完整的元数据配置
5. **快速联系**: 一键跳转WhatsApp
6. **邮件订阅**: 集成邮件订阅功能

## 📄 许可证

本项目仅供学习和参考使用。

## 🤝 贡献

欢迎提交Issue和Pull Request来改进项目。

---

**Fate Compass** - Let Eastern Wisdom Illuminate Your Path ✨

## 🌍 英文翻译状态 (English Translation Status)

### ✅ 已完成翻译 (Completed)
- 首页 (Home Page) - 100% 完成
- 服务页面 (Services Page) - 100% 完成  
- 博客列表页 (Blog List Page) - 100% 完成
- 博客详情页 (Blog Detail Page) - 100% 完成
- 关于页面 (About Page) - 100% 完成
- 联系页面 (Contact Page) - 100% 完成
- 导航组件 (Navigation Component) - 100% 完成

### 🎉 翻译完成 (Translation Complete)
所有页面内容已完全翻译为英文，网站现在完全面向英语用户。 