# 一键部署脚本（在本地 PowerShell 运行）
# 用法: .\deploy.ps1

param(
    [string]$Server = "root@你的服务器IP",
    [string]$RemotePath = "/var/www/personweb"
)

Write-Host ">> Building..." -ForegroundColor Cyan
npm run build

Write-Host ">> Syncing dist/ to ${Server}:${RemotePath}/dist/ ..." -ForegroundColor Cyan
scp -r dist/* ${Server}:${RemotePath}/dist/

Write-Host ">> Syncing server/ to ${Server}:${RemotePath}/server/ ..." -ForegroundColor Cyan
scp -r server/* ${Server}:${RemotePath}/server/ | Out-Null

Write-Host ">> Restarting API service..." -ForegroundColor Cyan
ssh ${Server} "cd ${RemotePath}/server && npm install --production && systemctl restart personweb-api"

Write-Host ">> Done!" -ForegroundColor Green
