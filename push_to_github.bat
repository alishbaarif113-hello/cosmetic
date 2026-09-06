@echo off
echo ========================================================
echo Pushing Lumiere Cosmetics Store to GitHub...
echo Repository: https://github.com/alishbaarif113-hello/cosmetic
echo ========================================================

set PATH=%LOCALAPPDATA%\Microsoft\WinGet\Packages\Git.MinGit_Microsoft.Winget.Source_8wekyb3d8bbwe\cmd;%PATH%

git remote set-url origin https://github.com/alishbaarif113-hello/cosmetic.git
git branch -M main
git push -u origin main

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ========================================================
    echo SUCCESS: Repository successfully pushed to GitHub!
    echo Visit: https://github.com/alishbaarif113-hello/cosmetic
    echo ========================================================
) else (
    echo.
    echo If prompted for login, please sign in with your GitHub account.
)

pause
