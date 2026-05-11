# Vercel 部署完整指南

## 📋 准备工作

- ✅ GitHub 账号
- ✅ 代码已推送到 GitHub（仓库：czq-c/ibedo-website）

---

## 🚀 部署步骤

### 步骤 1：登录 Vercel

1. 访问：https://vercel.com/login
2. 点击 **Continue with GitHub**
3. 授权 Vercel 访问你的 GitHub

---

### 步骤 2：导入项目

1. 登录后，点击右上角 **Add New...** → **Project**
2. 在 **Import Git Repository** 页面
3. 找到你的仓库：`czq-c/ibedo-website`
4. 点击 **Import** 按钮

**如果看不到仓库：**
- 点击 **Adjust GitHub App Permissions**
- 授权 Vercel 访问你的仓库

---

### 步骤 3：配置项目

Vercel 会自动检测配置：

| 配置项 | 值 | 说明 |
|--------|-----|------|
| **Framework Preset** | Vite | 自动检测 ✅ |
| **Root Directory** | `./` | 默认 ✅ |
| **Build Command** | `npm run build` | 自动检测 ✅ |
| **Output Directory** | `dist` | 自动检测 ✅ |
| **Install Command** | `npm install` | 自动检测 ✅ |

**⚠️ 重要：保持默认配置，不要修改！**

---

### 步骤 4：开始部署

1. 点击 **Deploy** 按钮
2. 等待 2-3 分钟
3. 看到构建日志滚动

**构建过程：**
```
Installing dependencies...
npm install
✓ Completed in 15s

Building...
npm run build
✓ Compiled successfully

Deploying...
✓ Deployment ready
```

---

### 步骤 5：部署成功

看到 🎉 庆祝动画，说明部署成功！

**访问地址：**
```
https://ibedo-website-xxx.vercel.app
```

点击 **Visit** 按钮访问你的网站！

---

## 🌐 域名说明

Vercel 会自动分配域名：

1. **预览域名**（每次部署都会生成）：
   ```
   https://ibedo-website-abc123.vercel.app
   ```

2. **生产域名**（固定）：
   ```
   https://ibedo-website.vercel.app
   ```

---

## 📝 后续更新

### 自动部署
每次推送到 GitHub 的 `main` 分支，Vercel 会自动重新部署：

```powershell
git add .
git commit -m "更新内容"
git push origin main
```

推送后 1-2 分钟，网站自动更新！

---

## ⚙️ 项目设置

在 Vercel Dashboard 中可以：

1. **查看部署历史** → Deployments 标签
2. **查看构建日志** → 点击任意部署
3. **设置环境变量** → Settings → Environment Variables
4. **绑定自定义域名** → Settings → Domains
5. **查看网站分析** → Analytics 标签

---

## 🔧 常见问题

### Q1: 构建失败？
查看构建日志，常见原因：
- Node.js 版本不兼容
- 依赖安装失败
- TypeScript 编译错误

### Q2: 页面 404？
检查 `vercel.json` 配置：
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

### Q3: 样式加载失败？
检查 `vite.config.ts` 的 `base` 配置：
```typescript
base: '/'
```

---

## 📸 部署截图参考

### 导入项目页面
```
┌─────────────────────────────────────┐
│ Import Git Repository               │
│                                     │
│ czq-c/ibedo-website     [Import]    │
│                                     │
└─────────────────────────────────────┘
```

### 配置页面
```
┌─────────────────────────────────────┐
│ Configure Project                   │
│                                     │
│ Framework Preset: Vite              │
│ Root Directory: ./                  │
│ Build Command: npm run build        │
│ Output Directory: dist              │
│                                     │
│         [Deploy]                    │
└─────────────────────────────────────┘
```

---

## ✅ 部署检查清单

- [ ] 已登录 Vercel
- [ ] 已导入 GitHub 仓库
- [ ] 配置保持默认
- [ ] 点击 Deploy
- [ ] 等待构建完成
- [ ] 访问网站测试

---

## 🎯 现在就开始！

1. 打开浏览器
2. 访问：https://vercel.com/login
3. 用 GitHub 登录
4. 导入 `czq-c/ibedo-website`
5. 点击 Deploy

**预计 3 分钟完成！** 🚀

---

## 📞 需要帮助？

如果遇到问题：
1. 查看 Vercel 构建日志
2. 截图错误信息
3. 告诉我具体的错误

祝你部署顺利！🎉
