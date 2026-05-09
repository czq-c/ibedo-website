# 阿里云 OSS 部署脚本
# 使用前请修改下方的配置参数

# ==================== 配置区域 ====================
$ACCESS_KEY_ID = "LTAI5tXXXXXXXXXXXX"           # 替换为你的 AccessKey ID
$ACCESS_KEY_SECRET = "XXXXXXXXXXXXXXXXXXXXXXXX" # 替换为你的 AccessKey Secret
$ENDPOINT = "oss-cn-hangzhou.aliyuncs.com"      # 根据你的 Bucket 地域修改
$BUCKET_NAME = "ibedo-website"                  # 替换为你的 Bucket 名称
$OSSUTIL_PATH = "C:\ossutil\ossutil64.exe"      # ossutil 安装路径
$CONFIG_FILE = "$env:USERPROFILE\.ossutilconfig"

# ==================== 部署流程 ====================

# 检查 ossutil 是否存在
if (-not (Test-Path $OSSUTIL_PATH)) {
    Write-Host "错误：未找到 ossutil，请先下载安装" -ForegroundColor Red
    Write-Host "下载地址：https://help.aliyun.com/zh/oss/developer-reference/install-installation-2" -ForegroundColor Yellow
    exit 1
}

# 构建项目
Write-Host "`n=================================" -ForegroundColor Cyan
Write-Host "  步骤 1: 构建项目" -ForegroundColor Cyan
Write-Host "=================================" -ForegroundColor Cyan
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "构建失败！" -ForegroundColor Red
    exit 1
}
Write-Host "构建成功！" -ForegroundColor Green

# 配置 ossutil
Write-Host "`n=================================" -ForegroundColor Cyan
Write-Host "  步骤 2: 配置 ossutil" -ForegroundColor Cyan
Write-Host "=================================" -ForegroundColor Cyan
& $OSSUTIL_PATH config -i $ACCESS_KEY_ID -k $ACCESS_KEY_SECRET -e $ENDPOINT -c $CONFIG_FILE
if ($LASTEXITCODE -ne 0) {
    Write-Host "配置失败！请检查 AccessKey 和 Endpoint" -ForegroundColor Red
    exit 1
}
Write-Host "配置成功！" -ForegroundColor Green

# 上传到 OSS
Write-Host "`n=================================" -ForegroundColor Cyan
Write-Host "  步骤 3: 上传到 OSS" -ForegroundColor Cyan
Write-Host "=================================" -ForegroundColor Cyan
Write-Host "目标：oss://$BUCKET_NAME/" -ForegroundColor Yellow
& $OSSUTIL_PATH cp -r -f --config-file $CONFIG_FILE dist oss://$BUCKET_NAME/
if ($LASTEXITCODE -ne 0) {
    Write-Host "上传失败！" -ForegroundColor Red
    exit 1
}

# 完成
Write-Host "`n=================================" -ForegroundColor Green
Write-Host "  部署完成！" -ForegroundColor Green
Write-Host "=================================" -ForegroundColor Green
Write-Host "网站地址：https://$BUCKET_NAME.$ENDPOINT" -ForegroundColor Cyan
Write-Host "`n提示：请确保已在 OSS 控制台配置静态页面托管" -ForegroundColor Yellow
Write-Host "默认首页：index.html" -ForegroundColor Yellow
Write-Host "默认 404 页：index.html" -ForegroundColor Yellow
