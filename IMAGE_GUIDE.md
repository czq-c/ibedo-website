# 网站图片修改完整指南

## 📸 图片位置说明

网站上的图片主要分为以下几类：

### 1. 首页画廊图片（gallery）
- **位置**：首页"影像展示"区块
- **用途**：展示企业实力、产品线等

### 2. 客户案例图片（caseImages）
- **位置**：成功案例页面
- **用途**：每个案例的配图

### 3. 团队成员头像（teamAvatars）
- **位置**：关于我们页面的团队介绍
- **用途**：团队成员头像

### 4. 首页首屏背景（heroBackground）
- **位置**：首页顶部大背景图
- **用途**：营造视觉效果

---

## 🖼️ 修改图片步骤

### 步骤 1：准备图片

**支持的格式：**
- ✅ `.jpg` / `.jpeg` - 最常用
- ✅ `.png` - 支持透明背景
- ✅ `.webp` - 推荐！体积小质量好
- ✅ `.svg` - 矢量图、logo

**建议尺寸：**
- 首页画廊：1920x1080 或更大
- 案例图片：800x600
- 团队头像：400x400（正方形）
- 首屏背景：1920x1080 或 2560x1440

**优化建议：**
- 使用 WebP 格式（体积更小）
- 压缩图片（推荐 https://tinypng.com/）
- 保持合理的文件大小（< 500KB）

---

### 步骤 2：上传图片到正确目录

图片存放位置：`dist/site-media/`

#### 2.1 客户案例图片
```
dist/site-media/cases/
├── case1.webp
├── case2.webp
└── case3.webp
```

#### 2.2 团队成员头像
```
dist/site-media/team/
├── zhang.webp
├── wang.webp
└── li.webp
```

#### 2.3 首页画廊图片
```
dist/site-media/gallery/
├── image1.webp
├── image2.webp
└── image3.webp
```

#### 2.4 首屏背景
```
dist/site-media/gallery/
└── hero-bg.webp
```

---

### 步骤 3：修改配置文件

打开 `src/content/site-media.json`，按以下格式修改：

#### 3.1 修改客户案例图片

```json
{
  "caseImages": {
    "case-projector": "/site-media/cases/case1.webp",
    "case-3d-camera": "/site-media/cases/case2.webp",
    "case-industrial": "/site-media/cases/case3.webp"
  }
}
```

**说明：**
- 键名（如 `case-projector`）必须与案例的 ID 一致
- 值以 `/site-media/` 开头

---

#### 3.2 修改团队成员头像

```json
{
  "teamAvatars": {
    "tm-1": "/site-media/team/zhang.webp",
    "tm-2": "/site-media/team/wang.webp",
    "tm-3": "/site-media/team/li.webp"
  }
}
```

**说明：**
- 键名（如 `tm-1`）必须与团队成员的 ID 一致
- 值以 `/site-media/` 开头

---

#### 3.3 修改首页画廊图片

```json
{
  "gallery": [
    {
      "src": "/site-media/gallery/image1.webp",
      "alt": "智能工厂",
      "caption": "自动化生产线"
    },
    {
      "src": "/site-media/gallery/image2.webp",
      "alt": "研发中心",
      "caption": "技术创新"
    },
    {
      "src": "/site-media/gallery/image3.webp",
      "alt": "产品展示",
      "caption": "3D 视觉传感器"
    }
  ]
}
```

**说明：**
- `src`：图片路径（必须以 `/site-media/` 开头）
- `alt`：图片描述（用于 SEO 和无障碍访问）
- `caption`：图片说明文字（可选）
- 删除某张图片：直接从数组中移除该项

---

#### 3.4 设置首页首屏背景

```json
{
  "heroBackground": "/site-media/gallery/hero-bg.webp"
}
```

**说明：**
- 不需要背景图：设置为 `null`
- 值以 `/site-media/` 开头

---

### 步骤 4：完整配置示例

```json
{
  "caseImages": {
    "case-projector": "/site-media/cases/projector-case.webp",
    "case-3d-camera": "/site-media/cases/camera-case.webp"
  },
  "teamAvatars": {
    "tm-1": "/site-media/team/ceo.webp",
    "tm-2": "/site-media/team/cto.webp",
    "tm-3": "/site-media/team/designer.webp"
  },
  "gallery": [
    {
      "src": "/site-media/gallery/factory.webp",
      "alt": "现代化工厂",
      "caption": "智能制造"
    },
    {
      "src": "/site-media/gallery/lab.webp",
      "alt": "研发中心",
      "caption": "技术创新"
    }
  ],
  "heroBackground": "/site-media/gallery/hero-bg.webp"
}
```

---

### 步骤 5：重新构建并部署

```bash
# 1. 重新构建
npm run build

# 2. 部署到阿里云（如果已配置）
# 使用 ossutil 或控制台上传 dist 目录

# 3. 或者部署到 Gitee Pages
# 推送到 GitHub 后在 Gitee 同步
```

---

## 🔧 快速修改示例

### 示例 1：替换首页画廊图片

1. **准备新图片**：`new-image1.webp`, `new-image2.webp`

2. **复制到目录**：
   ```
   dist/site-media/gallery/new-image1.webp
   dist/site-media/gallery/new-image2.webp
   ```

3. **修改配置文件**：
   ```json
   {
     "gallery": [
       {
         "src": "/site-media/gallery/new-image1.webp",
         "alt": "新图片 1",
         "caption": "说明文字"
       },
       {
         "src": "/site-media/gallery/new-image2.webp",
         "alt": "新图片 2",
         "caption": "说明文字"
       }
     ]
   }
   ```

4. **重新构建**：
   ```bash
   npm run build
   ```

---

### 示例 2：添加团队成员头像

1. **准备头像**：`zhangsan.webp`

2. **复制到目录**：
   ```
   dist/site-media/team/zhangsan.webp
   ```

3. **修改配置文件**：
   ```json
   {
     "teamAvatars": {
       "tm-1": "/site-media/team/zhangsan.webp"
     }
   }
   ```

4. **重新构建**：
   ```bash
   npm run build
   ```

---

### 示例 3：删除所有画廊图片

```json
{
  "gallery": []
}
```

重新构建即可。

---

## 📝 注意事项

### ✅ 必须遵守的规则

1. **路径必须以 `/site-media/` 开头**
   ```json
   ✅ 正确："/site-media/gallery/image.webp"
   ❌ 错误："/dist/site-media/gallery/image.webp"
   ❌ 错误："/src/assets/image.webp"
   ```

2. **JSON 格式必须正确**
   - 使用双引号 `"` 不是单引号 `'`
   - 最后一个属性后不能有逗号
   - 括号必须成对出现

3. **键名必须与代码中的 ID 一致**
   - 查看 `src/pages/CasesPage.tsx` 了解案例 ID
   - 查看 `src/pages/AboutPage.tsx` 了解团队成员 ID

---

### ❌ 常见错误

#### 错误 1：图片不显示
**原因：** 路径不正确
```json
❌ 错误："/dist/site-media/gallery/image.webp"
✅ 正确："/site-media/gallery/image.webp"
```

#### 错误 2：JSON 语法错误
```json
❌ 错误：
{
  "gallery": [
    {
      "src": "/site-media/gallery/image.webp",  // 多了一个逗号
    }
  ]
}

✅ 正确：
{
  "gallery": [
    {
      "src": "/site-media/gallery/image.webp"
    }
  ]
}
```

#### 错误 3：键名不匹配
```json
❌ 错误：案例 ID 是 "case-1"，但配置写成 "case-projector"
✅ 正确：使用正确的案例 ID
```

---

## 🎯 快速查找 ID

### 案例 ID
查看文件：`src/pages/CasesPage.tsx`
```typescript
const cases = [
  { id: 'case-projector', ... },
  { id: 'case-3d-camera', ... },
  { id: 'case-industrial', ... }
]
```

### 团队成员 ID
查看文件：`src/pages/AboutPage.tsx`
```typescript
const teamMembers = [
  { id: 'tm-1', name: '张三', ... },
  { id: 'tm-2', name: '李四', ... },
  { id: 'tm-3', name: '王五', ... }
]
```

---

## 🖼️ 图片优化建议

### 1. 使用 WebP 格式
- 体积比 JPG 小 30-50%
- 质量更好
- 现代浏览器都支持

### 2. 压缩图片
在线工具：
- https://tinypng.com/（PNG/JPG）
- https://squoosh.app/（全格式）

### 3. 响应式图片
准备不同尺寸：
- 桌面端：1920px 宽
- 平板端：1024px 宽
- 移动端：768px 宽

### 4. 懒加载
代码已自动实现懒加载，无需额外配置。

---

## 📊 图片尺寸建议

| 用途 | 建议尺寸 | 格式 | 文件大小 |
|------|----------|------|----------|
| 首页画廊 | 1920x1080 | WebP | < 500KB |
| 案例图片 | 800x600 | WebP | < 200KB |
| 团队头像 | 400x400 | WebP/PNG | < 100KB |
| 首屏背景 | 2560x1440 | WebP | < 800KB |
| Logo | 200x200 | SVG/PNG | < 50KB |

---

## 🚀 完整工作流程

1. **准备图片** → 优化、压缩
2. **复制到 `dist/site-media/` 对应目录**
3. **修改 `src/content/site-media.json`**
4. **运行 `npm run build` 重新构建**
5. **部署到服务器**
6. **刷新浏览器查看效果**

---

## 💡 提示

- **开发环境预览**：修改后运行 `npm run dev` 可以立即看到效果
- **生产环境**：必须运行 `npm run build` 并重新部署
- **删除图片**：先从 JSON 配置中删除，再删除文件
- **批量替换**：保持文件名不变，直接覆盖文件即可

---

## 📞 需要帮助？

告诉我：
1. 你想修改哪里的图片？（首页/案例/团队）
2. 你有现成的图片文件吗？
3. 需要我帮你生成配置代码吗？

我会帮你详细配置！🚀
