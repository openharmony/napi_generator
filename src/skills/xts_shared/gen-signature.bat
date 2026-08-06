@echo off
REM XTS: generate signature\openharmony_sx.p7b
REM Usage: gen-signature.bat
REM    or: gen-signature.bat C:\path\to\project
REM Put hap-sign-tool.jar next to this bat (same folder). Requires java in PATH.
setlocal
cd /d "%~dp0"
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0gen-signature.ps1" %*
exit /b %ERRORLEVEL%
