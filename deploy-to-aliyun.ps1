# Aliyun OSS deploy (ASCII messages: avoids PS 5.x mis-parsing UTF-8 .ps1 without BOM)
# If blocked by execution policy: .\deploy-ps1.bat
# Set env vars in this session:
#   $env:ALIYUN_ACCESS_KEY_ID = '...'
#   $env:ALIYUN_ACCESS_KEY_SECRET = '...'

$ACCESS_KEY_ID = $env:ALIYUN_ACCESS_KEY_ID
$ACCESS_KEY_SECRET = $env:ALIYUN_ACCESS_KEY_SECRET
$ENDPOINT = "oss-cn-beijing.aliyuncs.com"
$BUCKET_NAME = "ibedo-website"
$OSSUTIL_PATH = "C:\ossutil\ossutil64.exe"
$CONFIG_FILE = "$env:USERPROFILE\.ossutilconfig"

if (-not $ACCESS_KEY_ID -or -not $ACCESS_KEY_SECRET) {
    Write-Host "[ERROR] Set ALIYUN_ACCESS_KEY_ID and ALIYUN_ACCESS_KEY_SECRET" -ForegroundColor Red
    Write-Host 'Example: $env:ALIYUN_ACCESS_KEY_ID="..."; $env:ALIYUN_ACCESS_KEY_SECRET="..."' -ForegroundColor Yellow
    exit 1
}

if (-not (Test-Path $OSSUTIL_PATH)) {
    Write-Host "[ERROR] ossutil not found: $OSSUTIL_PATH" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "=================================" -ForegroundColor Cyan
Write-Host " Step 1: npm run build" -ForegroundColor Cyan
Write-Host "=================================" -ForegroundColor Cyan
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "[ERROR] Build failed." -ForegroundColor Red
    exit 1
}
Write-Host "[OK] Build done" -ForegroundColor Green

Write-Host ""
Write-Host "=================================" -ForegroundColor Cyan
Write-Host " Step 2: ossutil config" -ForegroundColor Cyan
Write-Host "=================================" -ForegroundColor Cyan
& $OSSUTIL_PATH config -i $ACCESS_KEY_ID -k $ACCESS_KEY_SECRET -e $ENDPOINT -c $CONFIG_FILE
if ($LASTEXITCODE -ne 0) {
    Write-Host "[ERROR] ossutil config failed." -ForegroundColor Red
    exit 1
}
Write-Host "[OK] ossutil configured" -ForegroundColor Green

Write-Host ""
Write-Host "=================================" -ForegroundColor Cyan
Write-Host " Step 3: upload dist -> OSS" -ForegroundColor Cyan
Write-Host "=================================" -ForegroundColor Cyan
Write-Host "Target: oss://$BUCKET_NAME/" -ForegroundColor Yellow
# --acl public-read: each object is anonymously readable (fixes AccessDenied when objects default to private)
& $OSSUTIL_PATH cp -r -f --acl public-read --config-file $CONFIG_FILE dist oss://$BUCKET_NAME/
if ($LASTEXITCODE -ne 0) {
    Write-Host "[ERROR] Upload failed." -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "=================================" -ForegroundColor Green
Write-Host " Deploy finished." -ForegroundColor Green
Write-Host "=================================" -ForegroundColor Green
Write-Host "Site: https://$BUCKET_NAME.$ENDPOINT" -ForegroundColor Cyan
Write-Host ""
Write-Host "OSS static site: default index = index.html, default 404 = index.html (SPA)" -ForegroundColor Yellow
exit 0
