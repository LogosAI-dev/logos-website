# Logos Website 风格指南 / Style Guide

> 修改此文件即可更新网站的整体设计风格。修改后需要同步更新 `tailwind.config.ts` 和 `app/globals.css`。

---

## 🎨 颜色系统 / Color System

### 背景色系 / Background Colors (核心改变)

| 颜色名称 | 色值 | 用途 |
|---------|------|-----|
| **Cream White** | `#FDFBF7` | 全局主背景。不是刺眼的纯白，而是像纸张一样的米白。 |
| **Soft Beige** | `#F3EFEA` | 次要背景、板块区分 (Section Background)。 |
| **Card White** | `#FFFFFF` | 卡片背景 (配合柔和阴影)。 |

### 品牌主色 / Brand Colors

| 颜色名称 | 色值 | 用途 |
|---------|------|-----|
| **MeBao Orange** | `#FF6B35` | 核心主色。用于主要按钮、Logo、强调文字。代表活力与温暖。 |
| **Warm Clay** | `#E85D2A` | 按钮悬停色、深色强调。 |
| **Sage Green** | `#4A6C58` | 辅助色。用于"安全"、"健康"相关的图标或标签。 |
| **Deep Charcoal** | `#2D3436` | 文字主色。深灰黑，代替纯黑，阅读更舒适。 |

### 文字颜色 / Text Colors

| 层级 | 颜色 | 用途 |
|-----|------|-----|
| 主要文字 | `#2D3436` (Charcoal) | 标题 (H1, H2)、重要内容 |
| 次要文字 | `#636E72` (Slate) | 正文段落、描述 |
| 辅助文字 | `#B2BEC3` (Silver) | 脚注、极低优先级信息 |

---

## 📝 字体系统 / Typography

### 字体族 / Font Family

```
主字体: Inter, system-ui, sans-serif
```

### 字号规范 / Font Sizes

| 元素 | 桌面端 | 移动端 | 样式 |
|-----|--------|--------|-----|
| **主标题 (H1)** | `text-7xl` (72px) | `text-5xl` (48px) | `font-bold leading-tight text-charcoal` |
| **副标题 (H2)** | `text-5xl` (48px) | `text-3xl` (30px) | `font-bold text-charcoal` |
| **段落大字** | `text-2xl` (24px) | `text-xl` (20px) | `text-slate leading-relaxed` |
| **正文** | `text-lg` (18px) | `text-base` (16px) | `text-slate` |
| **小字** | `text-sm` (14px) | `text-xs` (12px) | `text-silver`

---

## 🌟 渐变样式 / Gradients

### 文字渐变 / Text Gradient (品牌强调)

```css
.gradient-text {
  background: linear-gradient(to right, #FF6B35, #E85D2A);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

用于：品牌名称、重要强调标题

### 按钮背景渐变 / Button Gradient

```css
.gradient-bg {
  background: linear-gradient(135deg, #FF6B35 0%, #E85D2A 100%);
}
```

用于：主要按钮 (橙色渐变)

### 页面背景 / Page Background

```css
background: #FDFBF7; /* Cream White - 纯色背景，温暖舒适 */
```

板块区分背景:
```css
background: #F3EFEA; /* Soft Beige */
```

---

## 💎 卡片样式 / Card Styles

### 标准卡片 / Standard Card

```css
.card {
  background: #FFFFFF;
  border-radius: 24px;
  box-shadow: 0 4px 20px rgba(45, 52, 54, 0.08);
  border: 1px solid rgba(243, 239, 234, 0.8);
}
```

用于：功能卡片、产品展示

### 悬停卡片 / Hover Card

```css
.card:hover {
  box-shadow: 0 8px 30px rgba(255, 107, 53, 0.15);
  transform: translateY(-4px);
}
```

用于：可交互卡片的悬停状态

---

## ✨ 阴影效果 / Shadow Effects

### 柔和阴影 / Soft Shadow

```css
.shadow-soft {
  box-shadow: 0 4px 20px rgba(45, 52, 54, 0.08);
}
```

用于：卡片、悬浮元素

### 橙色光晕 / Orange Glow

```css
.glow-orange {
  box-shadow: 0 8px 30px rgba(255, 107, 53, 0.25);
}
```

用于：主要按钮悬停状态

---

## 🔘 按钮样式 / Button Styles

### 主要按钮 / Primary Button

```jsx
className="px-8 py-4 bg-orange hover:bg-clay text-white font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
```

特点：
- 纯色背景 (MeBao Orange `#FF6B35`)
- 悬停: 变为 Warm Clay `#E85D2A` + 放大
- 圆角: `rounded-full`

### 次要按钮 / Secondary Button

```jsx
className="px-8 py-4 bg-white text-charcoal font-semibold rounded-full border border-beige hover:border-orange hover:text-orange transition-all duration-300"
```

特点：
- 白色背景 + 边框
- 悬停: 边框和文字变橙色

---

## 🎬 动画效果 / Animations

### 淡入动画 / Fade In

```css
animation: fadeIn 0.8s ease-out forwards;
/* 从透明渐变到不透明 */
```

### 上滑动画 / Slide Up

```css
animation: slideUp 0.6s ease-out forwards;
/* 从下方30px滑入 */
```

### 悬浮动画 / Float

```css
animation: float 3s ease-in-out infinite;
/* 上下浮动 20px */
```

### 发光脉动 / Glow Pulse

```css
animation: glow 2s ease-in-out infinite alternate;
/* 发光阴影循环变化 */
```

### Motion 动画参数 / Framer Motion

```jsx
// 标准入场动画
initial={{ opacity: 0, y: 30 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8 }}

// 延迟入场
transition={{ delay: 0.2, duration: 0.8 }}

// 悬浮循环
animate={{ y: [0, -15, 0] }}
transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
```

---

## 📐 间距规范 / Spacing

### 容器 / Container

```jsx
className="container mx-auto px-6"
```

### 常用间距 / Common Spacing

| 用途 | 值 |
|-----|---|
| 段落间距 | `space-y-8` (32px) |
| 卡片间距 | `gap-8` (32px) |
| 大区块间距 | `py-20` (80px) |
| 小元素间距 | `gap-4` (16px) |

---

## 🖼 圆角规范 / Border Radius

| 元素 | 圆角 |
|-----|------|
| 按钮 | `rounded-full` |
| 卡片 | `rounded-3xl` (24px) |
| 小标签 | `rounded-full` |
| 输入框 | `rounded-full` |

---

## 🌌 背景特效 / Background Effects

### 装饰圆形 / Decorative Blobs

```jsx
// 柔和的装饰性圆形背景
颜色: rgba(255, 107, 53, 0.05) // 淡橙色
或: rgba(74, 108, 88, 0.05) // 淡绿色
动画: float 6-10s infinite
```

### 点阵背景 / Dot Pattern (可选)

```css
backgroundImage: radial-gradient(#B2BEC3 1px, transparent 1px);
backgroundSize: '20px 20px';
opacity: 0.3;
```

---

## 📱 响应式断点 / Responsive Breakpoints

| 断点 | 宽度 | 使用前缀 |
|-----|------|---------|
| 移动端 | < 640px | 默认 |
| 平板 | ≥ 640px | `sm:` |
| 小桌面 | ≥ 768px | `md:` |
| 桌面 | ≥ 1024px | `lg:` |
| 大桌面 | ≥ 1280px | `xl:` |

### 常见响应式模式

```jsx
// 网格布局
className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"

// 字体大小
className="text-3xl lg:text-5xl"

// 弹性布局
className="flex flex-col sm:flex-row gap-4"
```

---

## 🔧 快速修改指南 / Quick Modification Guide

### 想要更改主色调？

1. 修改 `tailwind.config.ts` 中的 `colors.brand` 对象
2. 修改 `app/globals.css` 中的 `:root` CSS 变量
3. 同步更新本文档

### 想要更换字体？

1. 修改 `app/layout.tsx` 中的 Google Font 导入
2. 修改 `tailwind.config.ts` 中的 `fontFamily.sans`

### 想要调整动画速度？

1. 修改 `tailwind.config.ts` 中的 `animation` 和 `keyframes`
2. 组件中的 Framer Motion `transition.duration` 值

### 想要调整背景温度？

调整背景色的色值：
- 更冷: 提高蓝色成分 (例如 `#F7F9FC`)
- 更暖: 提高黄/橙成分 (例如 `#FDF8F0`)

---

## 📋 颜色色板预览 / Color Palette Preview

```
背景色系 Background
┌─────────────────────────────────────────────────────────┐
│  Cream White   ████████  #FDFBF7  (主背景)              │
│  Soft Beige    ████████  #F3EFEA  (次要背景)            │
│  Card White    ████████  #FFFFFF  (卡片)                │
└─────────────────────────────────────────────────────────┘

品牌色 Brand
┌─────────────────────────────────────────────────────────┐
│  MeBao Orange  ████████  #FF6B35  (核心主色)            │
│  Warm Clay     ████████  #E85D2A  (悬停/强调)           │
│  Sage Green    ████████  #4A6C58  (辅助色)              │
└─────────────────────────────────────────────────────────┘

文字色 Text
┌─────────────────────────────────────────────────────────┐
│  Charcoal      ████████  #2D3436  (主文字)              │
│  Slate         ████████  #636E72  (次要文字)            │
│  Silver        ████████  #B2BEC3  (辅助文字)            │
└─────────────────────────────────────────────────────────┘
```

---

*最后更新: 2026-01-27*
