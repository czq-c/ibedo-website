# 阿里云 OSS 部署问题分析与解决方案

## 🔍 之前遇到的问题

根据之前的部署记录，主要遇到了以下问题：

### 问题 1：AccessDenied 权限错误
```
<Error>
  <Code>AccessDenied</Code>
  <Message>You have no right to access this object because of bucket acl.</Message>
</Error>
```

**原因：**
- Bucket 权限设置不正确
- 文件权限不是公开读

**解决方案：**
1. 设置 Bucket 为"公共读"
2. 上传文件时添加 `--acl public-read` 参数

---

### 问题 2：Anonymous access is forbidden
```
<Error>
  <Code>AccessDenied</Code>
  <Message>Anonymous access is forbidden for this operation.</Message>
</Error>
```

**原因：**
- 静态网站托管未正确配置
- 访问方式不正确

**解决方案：**
1. 开启静态网站托管
2. 设置默认首页和 404 页为 `index.html`

---

### 问题 3：只产生一个 HTML 文件
**原因：**
- Vite 构建配置使用了绝对路径 `base: '/'`
- OSS 需要相对路径 `base: './'`

**解决方案：**
- 已修改 `vite.config.ts` 为 `base: './'`

---

### 问题 4：访问触发下载而不是显示网页
**原因：**
- Content-Type 设置不正确
- 静态网站托管未开启

**解决方案：**
1. 开启静态网站托管
2. 确保 Content-Type 正确

---

## ✅ 完整解决方案

### 方案一：使用 OSS 控制台手动部署（最简单）

#### 步骤 1：构建项目
```bash
npm run build
```

#### 步骤 2：登录阿里云 OSS 控制台
访问：https://oss.console.aliyun.com/

#### 步骤 3：创建或选择 Bucket
1. 如果没有 Bucket，创建一个：
   - Bucket 名称：`ibedo-website`（全局唯一）
   - 地域：选择离你最近的（如华东 1-杭州）
   - **读写权限：公共读**（重要！）
   - 存储类型：标准存储

2. 如果已有 Bucket，确保权限为"公共读"

#### 步骤 4：上传文件
1. 进入 Bucket
2. 点击"文件管理" → "上传文件"
3. 选择 `dist` 目录下的所有文件
4. **重要：勾选"设置文件 ACL 为公共读"**
5. 点击"开始上传"

#### 步骤 5：配置静态网站托管
1. 左侧菜单 → "基础设置"
2. 找到"静态页面"
3. 点击"设置"
4. 配置：
   - **默认首页**：`index.html`
   - **默认 404 页**：`index.html`
5. 点击"确定"

#### 步骤 6：访问网站
访问地址：
```
https://ibedo-website.oss-cn-hangzhou.aliyuncs.com/index.html
```

**注意：** 必须加 `/index.html`，或者使用静态网站托管域名。

---

### 方案二：使用 ossutil 命令行工具

#### 步骤 1：安装 ossutil
下载地址：https://help.aliyun.com/zh/oss/developer-reference/install-installation-2

Windows：
1. 下载 Windows 版本
2. 解压到 `C:\ossutil\`

#### 步骤 2：配置 ossutil
```powershell
# 设置 AccessKey
$env:ALIYUN_ACCESS_KEY_ID = "你的AccessKeyID"
$env:ALIYUN_ACCESS_KEY_SECRET = "你的AccessKeySecret"

# 配置 ossutil
C:\ossutil\ossutil64.exe config -i $env:ALIYUN_ACCESS_KEY_ID -k $env:ALIYUN_ACCESS_KEY_SECRET -e oss-cn-hangzhou.aliyuncs.com
```

#### 步骤 3：构建并上传
```powershell
# 构建
npm run build

# 上传（重要：添加 --acl public-read）
C:\ossutil\ossutil64.exe cp -r -f --acl public-read dist oss://ibedo-website/
```

#### 步骤 4：配置静态网站托管
在 OSS 控制台配置（同方案一的步骤 5）

---

### 方案三：使用 OSS Browser 图形工具（推荐新手）

#### 步骤 1：下载 OSS Browser
下载地址：https://github.com/aliyun/oss-browser/releases

#### 步骤 2：登录
1. 选择"使用 AK 登录"
2. 输入 AccessKey ID 和 Secret
3. 点击"登录"

#### 步骤 3：上传文件
1. 找到你的 Bucket
2. 将 `dist` 目录拖拽到右侧窗口
3. **重要：上传时选择 ACL 为"公共读"**

#### 步骤 4：配置静态网站托管
在 OSS 控制台配置（同方案一的步骤 5）

---

## 🎯 关键配置要点

### 1. Bucket 权限必须为"公共读"
```
Bucket 设置 → 读写权限 → 公共读
```

### 2. 上传文件必须设置为"公共读"
- ossutil: `--acl public-read`
- 控制台上传: 勾选"设置文件 ACL 为公共读"
- OSS Browser: 选择 ACL 为"公共读"

### 3. 必须开启静态网站托管
```
基础设置 → 静态页面
- 默认首页: index.html
- 默认 404 页: index.html
```

### 4. Vite 配置必须使用相对路径
```typescript
// vite.config.ts
export default defineConfig({
  base: './',  // 相对路径
  // ...
})
```

---

## 📊 访问地址说明

### OSS 直接访问（不推荐）
```
https://ibedo-website.oss-cn-hangzhou.aliyuncs.com/index.html
```
- 必须包含 `/index.html`
- 不支持 SPA 路由

### 静态网站托管访问（推荐）
```
https://ibedo-website.oss-cn-hangzhou.aliyuncs.com
```
- 自动加载 index.html
- 支持 SPA 路由（404 重定向到 index.html）

---

## 💡 为什么之前失败？

### 失败原因总结：

1. **权限问题**
   - Bucket 权限不是"公共读"
   - 上传的文件权限不是"公共读"

2. **静态网站托管未配置**
   - 没有设置默认首页
   - 没有设置 404 页面

3. **访问方式错误**
   - 直接访问 OSS 域名而不是静态网站域名
   - 没有加 `/index.html`

4. **Content-Type 问题**
   - 上传时没有正确设置 Content-Type
   - 浏览器无法识别文件类型

---

## 🚀 推荐部署流程

### 最简单的方法（5 分钟）：

1. **构建项目**
   ```bash
   npm run build
   ```

2. **登录 OSS 控制台**
   https://oss.console.aliyun.com/

3. **上传文件**
   - 文件管理 → 上传文件
   - 选择 `dist` 目录所有文件
   - **勾选"设置文件 ACL 为公共读"**

4. **配置静态网站托管**
   - 基础设置 → 静态页面
   - 默认首页：`index.html`
   - 默认 404 页：`index.html`

5. **访问测试**
   ```
   https://ibedo-website.oss-cn-hangzhou.aliyuncs.com
   ```

---

## 📝 检查清单

部署前检查：
- [ ] Vite 配置 `base: './'`
- [ ] 已运行 `npm run build`
- [ ] `dist` 目录存在且有文件

OSS 配置检查：
- [ ] Bucket 权限为"公共读"
- [ ] 上传文件 ACL 为"公共读"
- [ ] 已开启静态网站托管
- [ ] 默认首页设置为 `index.html`
- [ ] 默认 404 页设置为 `index.html`

访问测试：
- [ ] 访问静态网站域名
- [ ] 测试所有页面路由
- [ ] 测试刷新页面
- [ ] 测试移动端

---

## 🆚 对比其他平台

| 平台 | 配置难度 | 国内速度 | 费用 | 推荐度 |
|------|----------|----------|------|--------|
| **阿里云 OSS** | 中等 | ⭐⭐⭐⭐⭐ | 5-15元/月 | ⭐⭐⭐⭐ |
| **Gitee Pages** | 简单 | ⭐⭐⭐⭐⭐ | 免费 | ⭐⭐⭐⭐⭐ |
| **Vercel** | 简单 | ⭐⭐⭐ | 免费 | ⭐⭐⭐⭐ |

---

## 💬 需要帮助？

如果还是遇到问题，请告诉我：
1. 具体的错误信息
2. 你使用的是哪种部署方式
3. 截图错误页面

我会帮你一步步解决！🚀
