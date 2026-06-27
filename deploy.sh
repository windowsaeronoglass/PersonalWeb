#!/bin/bash
# 一键部署脚本（在服务器上运行 — 从 Git 拉取并构建）
# 用法: bash deploy.sh

set -e

cd /var/www/personweb

echo ">> Pulling latest changes..."
git pull origin main

echo ">> Installing dependencies..."
npm install

echo ">> Building..."
npm run build

echo ">> Installing server dependencies..."
cd server && npm install --production && cd ..

echo ">> Restarting API..."
systemctl restart personweb-api

echo ">> Done!"
