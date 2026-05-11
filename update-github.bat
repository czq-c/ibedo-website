@echo off
chcp 65001 >nul
echo ==============================================
echo        一键更新到 GitHub
echo ==============================================
echo.

REM 检查是否有修改
git status --porcelain >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ 错误：当前目录不是 Git 仓库
    pause
    exit /b 1
)

REM 显示当前状态
echo 📋 当前修改状态：
git status -s
echo.

REM 询问提交信息
set /p commit_msg="请输入提交信息（直接回车使用默认信息）: "
if "%commit_msg%"=="" (
    set commit_msg=Update project
)

echo.
echo ==============================================
echo 开始更新...
echo ==============================================

REM 添加所有文件
echo [1/3] 添加文件...
git add .
if %errorlevel% neq 0 (
    echo ❌ 添加文件失败
    pause
    exit /b 1
)

REM 提交
echo [2/3] 提交更改...
git commit -m "%commit_msg%"
if %errorlevel% neq 0 (
    echo ⚠️  没有需要提交的更改
)

REM 推送
echo [3/3] 推送到 GitHub...
git push origin main
if %errorlevel% neq 0 (
    echo ❌ 推送失败
    pause
    exit /b 1
)

echo.
echo ==============================================
echo ✅ 更新完成！
echo ==============================================
echo.
echo GitHub 仓库：https://github.com/czq-c/ibedo-website
echo.
pause
