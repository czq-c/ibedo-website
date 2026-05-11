# 快速部署指南 - 阿里云 OSS

## 📋 准备工作（必须完成）

### 1. 创建阿里云 Bucket
1. 登录 [阿里云 OSS 控制台](https://oss.console.aliyun.com/)
2. 点击"创建 Bucket"
3. 填写：
   - **Bucket 名称**: `ibedo-website`（或自定义）
   - **地域**: 选择与 Endpoint 一致的地域（北京对应 **华北 2（北京）**，Endpoint：`oss-cn-beijing.aliyuncs.com`）
   - **读写权限**: 选择"公共读"
4. 点击"确定"

### 2. 获取 AccessKey（勿写入仓库）
1. 访问 [AccessKey 管理](https://ram.console.aliyun.com/manage/ak)
2. 创建 AccessKey，将 **ID / Secret** 保存在安全位置（密码管理器等）。
3. 部署前在本机设置环境变量（不要提交到 Git）：
   - **PowerShell**：  
     `$env:ALIYUN_ACCESS_KEY_ID='你的ID'; $env:ALIYUN_ACCESS_KEY_SECRET='你的Secret'`
   - **CMD**（用于 `deploy.bat`）：  
     `set ALIYUN_ACCESS_KEY_ID=你的ID`  
     `set ALIYUN_ACCESS_KEY_SECRET=你的Secret`

### 3. 安装 ossutil
1. 下载地址：https://gosspublic.alicdn.com/ossutil/1.7.10/ossutil64.exe
2. 创建文件夹 `C:\ossutil`
3. 将 `ossutil64.exe` 放入 `C:\ossutil\`

---

## 🚀 一键部署

### 方式一：使用 PowerShell 脚本（推荐）

1. 打开 PowerShell（管理员模式）
2. 进入项目目录：
```powershell
cd D:\ai coding\ibedo-website
```

3. 在同一窗口先设置 `ALIYUN_ACCESS_KEY_ID` / `ALIYUN_ACCESS_KEY_SECRET`（见上文），再运行：
```powershell
.\deploy-to-aliyun.ps1
```

### 方式二：手动执行（适合调试）

```powershell
# 0. 设置密钥（示例）
$env:ALIYUN_ACCESS_KEY_ID='你的AccessKeyId'
$env:ALIYUN_ACCESS_KEY_SECRET='你的AccessKeySecret'

# 1. 构建项目
npm run build

# 2. 配置 ossutil（-e 必须为地域 Endpoint，不要写 https:// 或 Bucket 域名）
C:\ossutil\ossutil64.exe config -i $env:ALIYUN_ACCESS_KEY_ID -k $env:ALIYUN_ACCESS_KEY_SECRET -e oss-cn-beijing.aliyuncs.com -c "$env:USERPROFILE\.ossutilconfig"

# 3. 上传到 OSS
C:\ossutil\ossutil64.exe cp -r -f --acl public-read --config-file "$env:USERPROFILE\.ossutilconfig" dist oss://ibedo-website/
```

---

## ⚙️ 关键配置（必须完成！）

### 配置静态页面托管
1. 进入 Bucket 管理页面
2. 左侧菜单 → **基础设置** → **静态页面**
3. 点击"设置"
4. 填写：
   - **默认首页**: `index.html`
   - **默认 404 页**: `index.html` ⚠️（非常重要！）
5. 点击"确定"

---

## 🌐 访问网站

部署成功后，访问地址：
```
https://ibedo-website.oss-cn-beijing.aliyuncs.com
```

---

## ❌ 常见问题

### Q1: ossutil 找不到？
```powershell
# 确保文件路径正确
Test-Path "C:\ossutil\ossutil64.exe"
```

### Q2: 提示未设置环境变量？
- PowerShell：先设置 `$env:ALIYUN_ACCESS_KEY_ID` 与 `$env:ALIYUN_ACCESS_KEY_SECRET` 再执行脚本。
- CMD：先 `set ALIYUN_ACCESS_KEY_ID=...` 与 `set ALIYUN_ACCESS_KEY_SECRET=...` 再运行 `deploy.bat`。

### Q3: AccessKey 错误？
- 确认 AccessKey ID 和 Secret 正确
- 确认该 AccessKey 有权限访问 OSS

### Q4: 上传失败？
- 确认 Bucket 名称正确
- 确认 Bucket 权限为"公共读"

### Q5: 页面显示 404？
- 确认已配置静态页面托管
- 确认默认 404 页设置为 `index.html`

### Q6: 浏览器显示 XML、`AccessDenied`、`bucket acl`？
说明**匿名用户没有读权限**。按顺序检查：

1. **Bucket 读写权限**  
   OSS 控制台 → 对应 Bucket → **权限管理** → **读写权限** → 设为 **公共读（public-read）**。

2. **是否开启了「阻止公共访问」**  
   同一 Bucket → **权限管理** → **阻止公共访问**  
   若全网或本 Bucket 开启了阻止公共访问，公共读会失效。静态官网需要：**关闭**对本 Bucket 的公共读阻止（或按控制台提示改用符合规范的公开策略）。具体以控制台文案为准。

3. **对象 ACL**  
   重新上传时带上公共读（部署脚本已使用 `--acl public-read`）。若仍报错，在控制台选中 `index.html` 等文件 → 查看 **读写权限** 是否为公共读。

4. **访问域名**  
   使用文档中的 Bucket 外网域名：`https://ibedo-website.oss-cn-beijing.aliyuncs.com`，并完成上文 **静态页面** 配置。

---

## ✅ 验证部署

打开浏览器访问：
- 首页: https://ibedo-website.oss-cn-beijing.aliyuncs.com
- 关于页: https://ibedo-website.oss-cn-beijing.aliyuncs.com/about
- 产品页: https://ibedo-website.oss-cn-beijing.aliyuncs.com/products

---

🎉 部署完成！
