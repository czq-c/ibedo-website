@echo off
setlocal EnableExtensions
REM Use system default code page (avoid UTF-8 + emoji breaking CMD parsing)

echo ==============================================
echo Aliyun OSS deploy
echo ==============================================
echo.

where node >nul 2>&1
if errorlevel 1 (
    echo [ERROR] Node.js not found. Install Node.js first.
    pause
    exit /b 1
)
echo [OK] Node.js found

if not exist "C:\ossutil\ossutil64.exe" (
    echo [ERROR] ossutil not found: C:\ossutil\ossutil64.exe
    echo Download: https://gosspublic.alicdn.com/ossutil/1.7.10/ossutil64.exe
    pause
    exit /b 1
)
echo [OK] ossutil found

if "%ALIYUN_ACCESS_KEY_ID%"=="" goto nokeys
if "%ALIYUN_ACCESS_KEY_SECRET%"=="" goto nokeys
goto havekeys

:nokeys
echo [ERROR] Set env vars first in this CMD window:
echo   set ALIYUN_ACCESS_KEY_ID=yourAccessKeyId
echo   set ALIYUN_ACCESS_KEY_SECRET=yourAccessKeySecret
pause
exit /b 1

:havekeys

echo.
echo ==============================================
echo Step 1/3: npm run build
echo ==============================================
call npm run build
if errorlevel 1 (
    echo [ERROR] Build failed.
    pause
    exit /b 1
)
echo [OK] Build done

echo.
echo ==============================================
echo Step 2/3: ossutil config
echo ==============================================
"C:\ossutil\ossutil64.exe" config -i "%ALIYUN_ACCESS_KEY_ID%" -k "%ALIYUN_ACCESS_KEY_SECRET%" -e oss-cn-beijing.aliyuncs.com -c "%USERPROFILE%\.ossutilconfig"
if errorlevel 1 (
    echo [ERROR] ossutil config failed.
    pause
    exit /b 1
)
echo [OK] ossutil configured

echo.
echo ==============================================
echo Step 3/3: upload dist to OSS
echo ==============================================
"C:\ossutil\ossutil64.exe" cp -r -f --acl public-read --config-file "%USERPROFILE%\.ossutilconfig" dist oss://ibedo-website/
if errorlevel 1 (
    echo [ERROR] Upload failed.
    pause
    exit /b 1
)
echo [OK] Upload done

echo.
echo ==============================================
echo Deploy finished.
echo Site: https://ibedo-website.oss-cn-beijing.aliyuncs.com
echo OSS console: set default index to index.html and 404 to index.html ^(SPA^)
echo ==============================================
pause
endlocal
