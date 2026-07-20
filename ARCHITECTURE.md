# 鑫正辉科技官网架构文档

## 项目概述

**项目名称**: 鑫正辉科技（深圳）有限公司官网  
**技术栈**: React 18 + TypeScript + Vite 6  
**部署方式**: 支持阿里云、Gitee Pages、Vercel 等多平台部署  
**语言支持**: 中文（默认）、英文  

## 技术架构

### 核心技术栈

| 技术 | 版本 | 用途 |
|------|------|------|
| React | 18.3.1 | 前端框架 |
| TypeScript | 5.8.3 | 类型安全 |
| Vite | 6.3.5 | 构建工具 |
| TailwindCSS | 3.4.17 | 样式框架 |
| React Router DOM | 7.15.0 | 路由管理 |
| i18next | 23.16.8 | 国际化 |
| Zustand | 5.0.13 | 状态管理 |
| Lucide React | 0.511.0 | 图标库 |

### 开发工具

- ESLint: 代码规范检查
- PostCSS: CSS 处理
- Autoprefixer: CSS 自动添加浏览器前缀
- Terser: 代码压缩

## 项目结构

```
ibedo-website/
├── public/                          # 静态资源
│   └── site-media/                  # 网站媒体资源
│       ├── cases/                   # 案例图片
│       ├── certificates/            # 证书图片
│       ├── gallery/                 # 画廊图片
│       ├── products/                # 产品图片
│       └── team/                    # 团队图片
├── src/
│   ├── assets/                      # 资源文件
│   ├── components/                  # 组件
│   │   ├── common/                  # 通用组件
│   │   │   └── LanguageSwitcher.tsx # 语言切换器
│   │   ├── home/                    # 首页组件
│   │   │   ├── Hero.tsx             # 英雄区域
│   │   │   ├── SiteGallery.tsx      # 站点画廊
│   │   │   ├── BusinessOverview.tsx # 业务概览
│   │   │   ├── Applications.tsx     # 应用场景
│   │   │   ├── ProductsPreview.tsx  # 产品预览
│   │   │   └── NewsTicker.tsx       # 新闻滚动
│   │   └── layout/                  # 布局组件
│   │       ├── Layout.tsx           # 主布局
│   │       ├── Header.tsx           # 头部导航
│   │       └── Footer.tsx           # 页脚
│   ├── content/                     # 内容配置
│   │   └── site-media.json          # 媒体资源配置
│   ├── data/                        # 数据层
│   │   ├── mockData.ts              # 模拟数据（产品、案例等）
│   │   └── siteContent.ts           # 网站内容配置
│   ├── i18n/                        # 国际化
│   │   ├── index.ts                 # i18n 配置
│   │   └── locales/                 # 语言文件
│   │       ├── zh.json              # 中文
│   │       └── en.json              # 英文
│   ├── lib/                         # 工具库
│   │   ├── siteMedia.ts             # 媒体资源工具
│   │   └── utils.ts                 # 通用工具函数
│   ├── pages/                       # 页面组件
│   │   ├── HomePage.tsx             # 首页
│   │   ├── AboutPage.tsx            # 关于我们
│   │   ├── ProductsPage.tsx         # 产品中心
│   │   ├── ProductDetailPage.tsx    # 产品详情
│   │   ├── SolutionsPage.tsx        # 解决方案
│   │   ├── CasesPage.tsx            # 案例中心
│   │   ├── SupportPage.tsx          # 技术支持
│   │   └── ContactPage.tsx          # 联系我们
│   ├── types/                       # 类型定义
│   │   └── index.ts                 # TypeScript 类型
│   ├── App.tsx                      # 应用根组件
│   ├── main.tsx                     # 应用入口
│   └── index.css                    # 全局样式
├── .github/workflows/               # GitHub Actions
│   └── deploy-aliyun.yml            # 阿里云部署配置
├── index.html                       # HTML 模板
├── package.json                     # 项目配置
├── tsconfig.json                    # TypeScript 配置
├── vite.config.ts                   # Vite 配置
├── tailwind.config.js               # TailwindCSS 配置
└── postcss.config.js                # PostCSS 配置
```

## 核心模块设计

### 1. 路由架构

使用 **HashRouter** 进行路由管理，确保在静态托管平台上的兼容性。

```typescript
// App.tsx
<HashRouter>
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/products" element={<ProductsPage />} />
    <Route path="/products/:id" element={<ProductDetailPage />} />
    <Route path="/solutions" element={<SolutionsPage />} />
    <Route path="/cases" element={<CasesPage />} />
    <Route path="/support" element={<SupportPage />} />
    <Route path="/contact" element={<ContactPage />} />
  </Routes>
</HashRouter>
```

### 2. 布局系统

采用统一的 **Layout 组件** 包裹所有页面，确保页面结构一致性。

```typescript
// Layout.tsx
<div className="min-h-screen flex flex-col bg-[#f8fafc]">
  <Header />           // 固定顶部导航
  <main className="flex-1 pt-20">
    {children}         // 页面内容
  </main>
  <Footer />           // 页脚
</div>
```

### 3. 数据管理

#### 3.1 产品数据结构

```typescript
interface Product {
  id: string;                    // 产品ID
  series: ProductSeries;         // 产品系列
  model: string;                 // 产品型号
  name: string;                  // 产品名称
  shortDesc: string;             // 简短描述
  description: string;           // 详细描述
  features: string[];            // 特性列表
  specs: Record<string, string>; // 规格参数
  resolution?: string;           // 分辨率
  range?: string;                // 测距范围
  fov?: string;                  // 视场角
  wavelength?: string;           // 波长
  applications: string[];        // 应用领域
  image?: string;                // 产品图片
}
```

#### 3.2 产品系列分类

- **DTOF**: 直接飞行时间激光测距传感器
- **ITOF**: 间接飞行时间深度相机
- **Camera**: 摄像头模组
- **Structured Light**: 结构光深度相机
- **Thermal**: 热成像相机
- **VCSELs**: VCSEL 封装

### 4. 国际化系统

使用 **i18next** 实现中英文切换，支持：

- 浏览器语言自动检测
- LocalStorage 持久化存储
- 语言切换组件

```typescript
// i18n 配置
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: { zh, en },
    fallbackLng: 'zh',
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });
```

### 5. 样式系统

#### 5.1 TailwindCSS 配置

自定义企业主题色系：

```javascript
colors: {
  xzh: {
    night: "#0f172a",        // 深夜蓝
    panel: "#1e293b",        // 面板色
    mist: "#334155",         // 雾色
    mint: "#0ea5e9",         // 薄荷蓝（主色）
    "mint-bright": "#38bdf8" // 亮薄荷蓝
  },
  primary: { /* 天空蓝主题 */ },
  accent: { /* 青色主题 */ }
}
```

#### 5.2 响应式设计

- 移动优先设计策略
- 断点：sm (640px), md (768px), lg (1024px), xl (1280px)
- 支持桌面、平板、手机全设备适配

### 6. 组件架构

#### 6.1 首页组件

| 组件 | 功能 |
|------|------|
| Hero | 英雄区域，展示品牌标语和CTA按钮 |
| SiteGallery | 站点图片画廊 |
| BusinessOverview | 业务概览，展示企业数据 |
| Applications | 应用场景展示 |
| ProductsPreview | 产品预览卡片 |
| NewsTicker | 新闻滚动条 |

#### 6.2 布局组件

| 组件 | 功能 |
|------|------|
| Header | 固定顶部导航，支持响应式菜单 |
| Footer | 页脚，包含联系信息和链接 |
| Layout | 统一布局容器 |

## 页面功能

### 1. 首页

**路由**: `/`

**功能模块**:
- 品牌展示区域
- 企业数据统计
- 产品系列预览
- 应用场景展示
- 新闻动态
- CTA（行动号召）区域

### 2. 产品中心

**路由**: `/products`

**功能特性**:
- 产品系列筛选（DTOF、ITOF、Camera等）
- 卡片/表格双视图切换
- 产品搜索
- 产品详情跳转
- 响应式布局

**筛选配置**:
```typescript
const seriesConfig = {
  'dtof': { name: 'DTOF激光测距', icon: Radar, color: '#0066ff' },
  'itof': { name: 'ITOF深度相机', icon: Layers, color: '#00d4ff' },
  'structured-light': { name: '结构光相机', icon: Scan, color: '#8844ff' },
  'camera': { name: '摄像头模组', icon: Camera, color: '#ff6600' },
  'thermal': { name: '热成像相机', icon: Thermometer, color: '#ff3366' },
  'vcsels': { name: 'VCSEL封装', icon: Zap, color: '#ffcc00' },
};
```

### 3. 产品详情页

**路由**: `/products/:id`

**功能特性**:
- 产品详细信息展示
- 规格参数表格
- 应用场景说明
- 相关产品推荐

### 4. 解决方案

**路由**: `/solutions`

**功能特性**:
- 行业解决方案展示
- 方案特点说明
- 相关产品关联

### 5. 案例中心

**路由**: `/cases`

**功能特性**:
- 成功案例展示
- 案例分类筛选
- 案例详情查看

### 6. 关于我们

**路由**: `/about`

**功能特性**:
- 企业介绍
- 发展历程
- 团队展示
- 资质证书

### 7. 技术支持

**路由**: `/support`

**功能特性**:
- 技术文档下载
- 常见问题解答
- SDK/API 文档

### 8. 联系我们

**路由**: `/contact`

**功能特性**:
- 联系方式展示
<!-- - 地图位置 -->
- 留言表单

## 数据流

### 数据来源

1. **静态数据**: `src/data/mockData.ts`
   - 产品信息
   - 案例数据
   - 解决方案
   - 新闻资讯

2. **配置数据**: `src/data/siteContent.ts`
   - 品牌信息
   - 联系方式
   - SEO 配置

3. **媒体资源**: `public/site-media/`
   - 产品图片
   - 案例图片
   - 证书图片

### 数据流转

```
mockData.ts → 组件导入 → 渲染展示
siteContent.ts → 组件导入 → 渲染展示
site-media.json → 媒体资源工具 → 动态加载
```

## 构建与部署

### 开发环境

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 类型检查
npm run check

# 代码检查
npm run lint
```

### 生产构建

```bash
# 构建生产版本
npm run build

# 预览生产构建
npm run preview
```

### 部署平台

#### 1. 阿里云

- 配置文件: `.github/workflows/deploy-aliyun.yml`
- 部署脚本: `deploy-to-aliyun.ps1`

#### 2. Gitee Pages

- 配置文件: `GITEE_DEPLOY.md`
- 支持自动部署

#### 3. Vercel

- 配置文件: `vercel.json`
- 支持零配置部署

## 性能优化

### 1. 构建优化

- **代码分割**: Vite 自动进行代码分割
- **Tree Shaking**: 自动移除未使用代码
- **压缩**: 使用 Terser 进行代码压缩
- **Source Map**: 生产环境关闭

### 2. 资源优化

- **图片优化**: 使用 WebP 格式
- **懒加载**: 图片懒加载
- **CDN**: 静态资源 CDN 加速

### 3. 运行时优化

- **React.memo**: 组件记忆化
- **useMemo/useCallback**: Hook 优化
- **虚拟滚动**: 长列表优化（如需要）

## 安全考虑

### 1. XSS 防护

- React 自动转义
- i18next 插值转义

### 2. 内容安全

- 无用户输入直接渲染
- 静态数据源

### 3. HTTPS

- 生产环境强制 HTTPS
- 混合内容检测

## SEO 优化

### 1. Meta 标签

```typescript
const seo = {
  title: '鑫正辉科技（深圳）有限公司 | 精密光学与智能感知',
  description: '鑫正辉科技（深圳）有限公司——精密光学、TOF / 结构光、视觉模组与行业解决方案。',
  keywords: '鑫正辉,深圳,精密光学,TOF,结构光,深度相机,视觉模组',
};
```

### 2. 语义化 HTML

- 使用语义化标签
- 正确的标题层级
- Alt 文本描述

### 3. 性能指标

- LCP (Largest Contentful Paint)
- FID (First Input Delay)
- CLS (Cumulative Layout Shift)

## 浏览器兼容性

### 目标浏览器

- Chrome (最新版本)
- Firefox (最新版本)
- Safari (最新版本)
- Edge (最新版本)

### Polyfill

- 无需额外 Polyfill（现代浏览器支持）

## 开发规范

### 1. 代码风格

- ESLint 配置: `eslint.config.js`
- TypeScript 严格模式
- 组件命名: PascalCase
- 文件命名: PascalCase (组件), camelCase (工具)

### 2. Git 提交规范

```
feat: 新功能
fix: 修复bug
docs: 文档更新
style: 代码格式
refactor: 重构
test: 测试
chore: 构建/工具
```

### 3. 目录命名

- 组件: PascalCase
- 页面: PascalCase + Page
- 工具: camelCase
- 类型: index.ts

## 扩展性设计

### 1. 数据扩展

- 产品数据易于添加
- 支持多语言扩展
- 媒体资源模块化

### 2. 功能扩展

- 组件化设计，易于复用
- 路由配置灵活
- 状态管理可扩展

### 3. 主题扩展

- TailwindCSS 主题配置
- CSS 变量支持
- 暗色模式预留

## 维护指南

### 1. 更新产品数据

编辑 `src/data/mockData.ts`，添加或修改产品信息。

### 2. 更新网站内容

编辑 `src/data/siteContent.ts`，修改品牌信息和联系方式。

### 3. 添加新页面

1. 在 `src/pages/` 创建新页面组件
2. 在 `App.tsx` 添加路由
3. 在 `Header.tsx` 添加导航链接

### 4. 添加新语言

1. 在 `src/i18n/locales/` 添加新语言文件
2. 在 `i18n/index.ts` 注册新语言

## 已知问题与解决方案

### 1. HashRouter 锚点问题

**问题**: HashRouter 下锚点链接会被解析为路由

**解决方案**: 使用 JavaScript `scrollIntoView` 实现平滑滚动

```typescript
const handleScrollToFeatures = () => {
  const featuresSection = document.getElementById("features");
  if (featuresSection) {
    featuresSection.scrollIntoView({ behavior: "smooth" });
  }
};
```

### 2. 图片路径问题

**问题**: 部署后图片路径错误

**解决方案**: Vite 配置 `base: './'` 使用相对路径

## 未来规划

### 1. 功能增强

- [ ] 产品对比功能
- [ ] 在线咨询聊天
- [ ] 产品搜索优化
- [ ] 案例视频展示

### 2. 性能优化

- [ ] 图片 CDN 加速
- [ ] 服务端渲染（SSR）
- [ ] PWA 支持

### 3. 内容扩展

- [ ] 博客系统
- [ ] 在线商城
- [ ] 客户登录系统

## 联系信息

**技术支持**: contact@your-domain.com  
**工作地址**: 深圳市龙华区大浪街道上横朗社区上横朗第四工业区7号302  
**工作时间**: 周一至周五 9:00 - 18:00

---

**文档版本**: 1.0  
**最后更新**: 2026-06-02  
**维护者**: 鑫正辉技术团队