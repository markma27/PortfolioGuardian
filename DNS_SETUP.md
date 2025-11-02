# GitHub Pages DNS 配置指南

## 当前问题
- GitHub Pages 设置中显示的自定义域名是 `www.portfolioguardian.co`（错误）
- 应该是 `www.portfolioguardian.com.au`
- DNS 检查状态：In Progress
- 浏览器错误：ERR_SSL_PROTOCOL_ERROR

## 修复步骤

### 1. 修复 GitHub Pages 设置

1. 登录 GitHub，进入仓库 `markma27/PortfolioGuardian`
2. 进入 **Settings** > **Pages**
3. 在 **Custom domain** 部分：
   - 删除当前的 `www.portfolioguardian.co`
   - 输入正确的域名：`www.portfolioguardian.com.au`
   - 点击 **Save**
4. 确保 **Enforce HTTPS** 已勾选（但可能需要等待 DNS 配置完成后才能启用）

### 2. 修复 DNS 记录

根据您的 DNS 提供商界面，需要修改以下记录：

#### 当前配置（错误）：
- CNAME: `www` -> `portfolioguardian.com.au.`
- A 记录: `@` -> `15.197.225.128` 和 `3.33.251.168`

#### 正确配置应该是：

**选项 A：使用 CNAME（推荐）**
- 删除或修改 CNAME 记录：
  - Type: `CNAME`
  - Name: `www`
  - Data: `markma27.github.io.` （注意末尾的点）
  - TTL: `1 Hour`

**选项 B：使用 A 记录**
- A 记录应该指向 GitHub Pages 的 IP（当前 IP 看起来正确）：
  - Type: `A`
  - Name: `@`
  - Data: `185.199.108.153`
  - TTL: `1 Hour`
  
  - Type: `A`
  - Name: `@`
  - Data: `185.199.109.153`
  - TTL: `1 Hour`
  
  - Type: `A`
  - Name: `@`
  - Data: `185.199.110.153`
  - TTL: `1 Hour`
  
  - Type: `A`
  - Name: `@`
  - Data: `185.199.111.153`
  - TTL: `1 Hour`

### 3. 等待 DNS 传播

- DNS 更改可能需要 24-48 小时才能完全传播
- 可以在 https://dnschecker.org 检查 DNS 传播状态

### 4. 验证配置

DNS 配置正确后：
1. GitHub 会自动检测到 DNS 记录
2. "DNS Check in Progress" 状态会消失
3. GitHub 会自动为您的域名生成 SSL 证书
4. "Enforce HTTPS" 选项会变为可用

### 5. 故障排除

如果仍然有问题：
- 清除浏览器缓存
- 尝试使用不同的 DNS 服务器（如 Google DNS: 8.8.8.8）
- 检查域名注册商是否支持 CNAME 记录（有些注册商不支持根域名的 CNAME）

## GitHub Pages 最新 IP 地址（2025）

如果使用 A 记录，请使用这些 IP：
- 185.199.108.153
- 185.199.109.153
- 185.199.110.153
- 185.199.111.153

参考：https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site

