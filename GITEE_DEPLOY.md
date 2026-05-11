# Gitee Pages 部署完整指南

## 📋 准备工作

- ✅ GitHub 账号（已有）
- ✅ 代码已推送到 GitHub（仓库：czq-c/ibedo-website）
- ✅ 项目配置已优化（相对路径）

---

## 🚀 部署步骤

### 步骤 1：注册 Gitee 账号

1. 访问：https://gitee.com/signup
2. 填写信息注册账号
3. 验证邮箱

**或者直接用 GitHub 登录：**
1. 访问：https://gitee.com/login
2. 点击 **GitHub 登录**
3. 授权 Gitee 访问你的 GitHub

---

### 步骤 2：导入 GitHub 仓库

#### 方法一：从 GitHub 导入（推荐）

1. 登录 Gitee
2. 点击右上角 **+** → **从 GitHub / GitLab 导入仓库**
3. 如果是第一次，需要授权 GitHub
4. 在仓库列表中找到 `czq-c/ibedo-website`
5. 点击 **导入**
6. 等待导入完成（约 1-2 分钟）

#### 方法二：手动创建并推送

1. 在 Gitee 创建新仓库
2. 添加远程仓库：
```bash
git remote add gitee https://gitee.com/你的用户名/ibedo-website.git
git push gitee main
```

---

### 步骤 3：开启 Gitee Pages

1. 进入仓库页面（如：`https://gitee.com/你的用户名/ibedo-website`）
2. 点击顶部菜单 **服务** → **Gitee Pages**
3. 配置部署：
   - **部署分支**：选择 `main`
   - **部署目录**：选择 `/`（根目录）
4. 点击 **启动** 或 **更新**

**注意：**
- 首次开启需要等待 1-2 分钟
- 如果看不到 Gitee Pages 选项，可能需要：
  - 实名认证（在个人设置中）
  - 或者仓库需要有 index.html 文件

---

### 步骤 4：访问网站

部署成功后，访问地址：
```
https://你的用户名.gitee.io/ibedo-website
```

例如：
- 如果用户名是 `czq`，地址是：`https://czq.gitee.io/ibedo-website`
- 如果仓库名是 `ibedo-website`，地址是：`https://你的用户名.gitee.io/ibedo-website`

---

## 🔄 后续更新

### 方法一：自动同步（推荐）

Gitee 支持强制同步 GitHub 仓库：

1. 进入 Gitee 仓库页面
2. 点击 **管理** → **仓库设置** → **强制同步**
3. 点击 **同步** 按钮
4. 等待同步完成
5. Gitee Pages 会自动重新部署

### 方法二：手动推送

```bash
# 添加 Gitee 远程仓库（如果还没添加）
git remote add gitee https://gitee.com/你的用户名/ibedo-website.git

# 推送到 Gitee
git push gitee main
```

---

## ⚙️ 高级配置

### 自定义域名

1. 在仓库根目录创建 `CNAME` 文件
2. 文件内容写你的域名（如：`www.ibedo.com`）
3. 在域名 DNS 添加 CNAME 记录指向 `你的用户名.gitee.io`
4. 在 Gitee Pages 设置中绑定自定义域名

### 开启 HTTPS

Gitee Pages 默认支持 HTTPS，无需额外配置。

---

## 🐛 常见问题

### Q1: 找不到 Gitee Pages 选项？

**解决方案：**
1. 检查仓库是否有 `index.html` 文件
2. 进行实名认证（个人设置 → 实名认证）
3. 确保仓库是公开的

### Q2: 页面样式加载失败？

**解决方案：**
- 已配置相对路径 `base: './'`
- 确保重新构建并推送

### Q3: 刷新页面 404？

**解决方案：**
Gitee Pages 不支持 SPA 路由重写，需要：
1. 使用 HashRouter 替代 BrowserRouter
2. 或者使用 404.html 重定向

**修改方案（推荐）：**

修改 `src/App.tsx`：
```typescript
import { HashRouter as Router, Routes, Route } from "react-router-dom";
```

### Q4: 更新后网站没变化？

**解决方案：**
1. 清除浏览器缓存（Ctrl + F5）
2. 在 Gitee Pages 页面点击 **更新**
3. 等待 1-2 分钟

---

## 📝 部署检查清单

- [ ] 已注册 Gitee 账号
- [ ] 已导入 GitHub 仓库
- [ ] 已开启 Gitee Pages
- [ ] 访问网站测试
- [ ] 测试所有页面路由

---

## 🎯 快速部署命令

如果需要手动推送：

```bash
# 1. 添加 Gitee 远程仓库
git remote add gitee https://gitee.com/你的用户名/ibedo-website.git

# 2. 推送到 Gitee
git push gitee main

# 3. 在 Gitee 网页上开启 Pages
```

---

## 📊 对比其他平台

| 平台 | 访问速度 | 费用 | 配置难度 |
|------|----------|------|----------|
| **Gitee Pages** | ⭐⭐⭐⭐⭐ | 免费 | 简单 |
| Vercel | ⭐⭐⭐ | 免费 | 简单 |
| 阿里云 OSS | ⭐⭐⭐⭐⭐ | 5-15元/月 | 中等 |

---

## 🎉 完成！

部署成功后，你的网站地址：
```
https://你的用户名.gitee.io/ibedo-website
```

---

## 📞 需要帮助？

如果遇到问题：
1. 检查仓库是否有 index.html
2. 检查 Gitee Pages 是否已启动
3. 清除浏览器缓存重试
4. 告诉我具体的错误信息

祝你部署顺利！🚀
