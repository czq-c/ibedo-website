# 阿里云 OSS 部署指南

## 准备工作

### 1. 开通阿里云 OSS 服务
1. 访问 [阿里云官网](https://www.aliyun.com/)
2. 登录/注册账号
3. 进入 [对象存储 OSS 控制台](https://oss.console.aliyun.com/)
4. 点击"开通服务"（首次使用需要开通）

### 2. 创建 Bucket
1. 点击"创建 Bucket"
2. **配置说明：**
   - **Bucket 名称**：自定义（如 `ibedo-website`，全局唯一）
   - **地域**：选择离用户最近的地域（如"华东 1-杭州"）
   - **读写权限**：选择"公共读"（Public Read）
   - **存储类型**：标准存储（默认）
   - **其他选项**：保持默认

3. 点击"确定"创建

### 3. 获取 AccessKey
1. 访问 [AccessKey 管理页面](https://ram.console.aliyun.com/manage/ak)
2. 点击"创建 AccessKey"
3. 保存 **AccessKey ID** 和 **AccessKey Secret**（只显示一次）

---

## 部署方式一：使用 ossutil 命令行工具（推荐）

### 步骤 1：安装 ossutil

**Windows：**
```bash
# 下载并安装
# 访问 https://help.aliyun.com/zh/oss/developer-reference/install-installation-2
# 下载 Windows 版本，解压到任意目录（如 C:\ossutil）

# 添加到环境变量（可选）
# 将 ossutil64.exe 所在目录添加到 PATH
```

### 步骤 2：配置 ossutil
```bash
# 进入 ossutil 目录
cd C:\ossutil

# 运行配置命令
.\ossutil64.exe config -i LTAI5tXXXXXXXXXXXX -k XXXXXXXXXXXXXXXXXXXXXX -e oss-cn-hangzhou.aliyuncs.com -c C:\ossutil\.ossutilconfig

# 参数说明：
# -i : AccessKey ID
# -k : AccessKey Secret
# -e : Endpoint（根据你的 Bucket 地域选择）
# -c : 配置文件路径
```

**常用 Endpoint：**
- 华东 1（杭州）：`oss-cn-hangzhou.aliyuncs.com`
- 华东 2（上海）：`oss-cn-shanghai.aliyuncs.com`
- 华北 1（青岛）：`oss-cn-qingdao.aliyuncs.com`
- 华北 2（北京）：`oss-cn-beijing.aliyuncs.com`
- 华南 1（深圳）：`oss-cn-shenzhen.aliyuncs.com`

### 步骤 3：构建项目
```bash
# 在项目根目录执行
npm run build
```

### 步骤 4：上传到 OSS
```bash
# 使用配置文件
.\ossutil64.exe cp -r -f --config-file C:\ossutil\.ossutilconfig dist oss://ibedo-website/

# 参数说明：
# -r : 递归上传整个目录
# -f : 强制覆盖已存在的文件
```

### 步骤 5：配置静态网站托管
1. 进入 OSS 控制台
2. 点击你的 Bucket 名称
3. 左侧菜单选择"基础设置"
4. 找到"静态页面"部分，点击"设置"
5. **配置：**
   - **默认首页**：`index.html`
   - **默认 404 页**：`index.html`（重要！用于 SPA 路由）
6. 点击"确定"

### 步骤 6：访问网站
1. 在 Bucket 概览页面找到"访问域名"
2. 格式：`https://ibedo-website.oss-cn-hangzhou.aliyuncs.com`
3. 在浏览器中打开即可访问

---

## 部署方式二：使用 OSS Browser 图形工具

### 步骤 1：下载 OSS Browser
1. 访问 [GitHub 发布页](https://github.com/aliyun/oss-browser/releases)
2. 下载 Windows 版本
3. 解压并运行

### 步骤 2：登录
1. 选择"使用 AK 登录"
2. 输入 AccessKey ID 和 Secret
3. 点击"登录"

### 步骤 3：上传文件
1. 找到你的 Bucket
2. 将 `dist` 目录拖拽到右侧窗口
3. 等待上传完成

### 步骤 4：配置静态网站托管
（同方式一的步骤 5）

---

## 部署方式三：使用 GitHub Actions 自动部署

### 步骤 1：创建 GitHub Actions 工作流

在项目根目录创建 `.github/workflows/deploy-aliyun.yml`：

```yaml
name: Deploy to Aliyun OSS

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Install dependencies
        run: npm ci

      - name: Build project
        run: npm run build

      - name: Deploy to Aliyun OSS
        uses: manyuanrong/setup-ossutil@master
        with:
          endpoint: oss-cn-hangzhou.aliyuncs.com
          access-key-id: ${{ secrets.ALIYUN_ACCESS_KEY_ID }}
          access-key-secret: ${{ secrets.ALIYUN_ACCESS_KEY_SECRET }}
      
      - name: Upload to OSS
        run: |
          ossutil cp -r -f dist oss://${{ secrets.ALIYUN_BUCKET_NAME }}/
```

### 步骤 2：配置 GitHub Secrets
1. 进入 GitHub 仓库
2. Settings → Secrets and variables → Actions
3. 添加以下 secrets：
   - `ALIYUN_ACCESS_KEY_ID`：你的 AccessKey ID
   - `ALIYUN_ACCESS_KEY_SECRET`：你的 AccessKey Secret
   - `ALIYUN_BUCKET_NAME`：你的 Bucket 名称

### 步骤 3：自动部署
现在每次推送到 `main` 分支都会自动部署到阿里云 OSS

---

## 绑定自定义域名（可选）

### 步骤 1：在 OSS 控制台绑定域名
1. 进入 Bucket 管理页面
2. 左侧菜单选择"域名管理"
3. 点击"绑定域名"
4. 输入你的域名（如 `www.ibedo.com`）
5. 点击"确定"

### 步骤 2：配置 CNAME 记录
1. 进入你的域名 DNS 管理后台
2. 添加 CNAME 记录：
   - **主机记录**：`www`（或 `@`）
   - **记录类型**：`CNAME`
   - **记录值**：`ibedo-website.oss-cn-hangzhou.aliyuncs.com`
   - **TTL**：默认

### 步骤 3：配置 HTTPS（推荐）
1. 在阿里云申请免费 SSL 证书
2. 在 OSS 控制台绑定证书
3. 开启 HTTPS 访问

---

## 费用说明

**OSS 费用组成：**
1. **存储费用**：约 0.12 元/GB/月（标准存储）
2. **流量费用**：约 0.5 元/GB（通过 CDN 可降低）
3. **请求费用**：约 0.01 元/万次

**预估月费用：**
- 小型网站（< 1GB 存储，< 10GB 流量）：约 5-15 元/月
- 中型网站（1-5GB 存储，10-50GB 流量）：约 20-50 元/月

---

## 常见问题

### Q1: 刷新页面出现 404？
**A:** 确保静态页面的"默认 404 页"设置为 `index.html`

### Q2: CSS/JS 文件加载失败？
**A:** 检查文件是否正确上传，确保 `dist/assets` 目录存在

### Q3: 如何更新网站？
**A:** 重新运行构建和上传命令即可，OSS 会自动覆盖旧文件

### Q4: 如何回滚到旧版本？
**A:** 
- 方式 1：从本地备份的 `dist` 目录重新上传
- 方式 2：在 OSS 控制台使用"版本控制"功能（需要预先开启）

---

## 快速部署脚本（PowerShell）

创建 `deploy-to-aliyun.ps1`：

```powershell
# 配置参数
$ACCESS_KEY_ID = "LTAI5tXXXXXXXXXXXX"
$ACCESS_KEY_SECRET = "XXXXXXXXXXXXXXXXXXXXXXXX"
$ENDPOINT = "oss-cn-hangzhou.aliyuncs.com"
$BUCKET_NAME = "ibedo-website"
$OSSUTIL_PATH = "C:\ossutil\ossutil64.exe"
$CONFIG_FILE = "C:\ossutil\.ossutilconfig"

# 构建项目
Write-Host "Building project..." -ForegroundColor Green
npm run build

# 配置 ossutil
Write-Host "Configuring ossutil..." -ForegroundColor Green
& $OSSUTIL_PATH config -i $ACCESS_KEY_ID -k $ACCESS_KEY_SECRET -e $ENDPOINT -c $CONFIG_FILE

# 上传到 OSS
Write-Host "Uploading to OSS..." -ForegroundColor Green
& $OSSUTIL_PATH cp -r -f --config-file $CONFIG_FILE dist oss://$BUCKET_NAME/

Write-Host "Deployment completed!" -ForegroundColor Green
Write-Host "Website URL: https://$BUCKET_NAME.$ENDPOINT" -ForegroundColor Cyan
```

运行脚本：
```powershell
.\deploy-to-aliyun.ps1
```

---

## 下一步

部署完成后：
1. 测试网站所有页面是否正常访问
2. 测试刷新页面是否正常
3. 测试移动端适配
4. 配置自定义域名（如有）
5. 开启 CDN 加速（可选）

祝你部署顺利！🎉
