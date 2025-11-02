# GitHub Pages 域名配置修复指南

## 问题诊断

### 当前状态

**PortfolioGuardian 仓库：**
- ✅ CNAME 文件：`www.portfolioguardian.com.au`（正确）
- ❌ GitHub Pages 设置：`www.portfolioguardian.co`（错误！）
- ✅ DNS 记录：`www` -> `markma27.github.io.`（正确）

**prepaidly-site 仓库：**
- ✅ 自定义域名：`prepaidly.io`（正确）
- ✅ DNS 记录：正确配置

**问题根源：**
GitHub Pages 设置中的自定义域名是 `.co` 而不是 `.com.au`，导致 GitHub 无法正确识别域名。

## 立即修复步骤

### 步骤 1：修复 GitHub Pages 自定义域名

1. 访问：https://github.com/markma27/PortfolioGuardian/settings/pages

2. 在 "Custom domain" 部分：
   - **删除**当前的 `www.portfolioguardian.co`
   - 点击 **Remove** 按钮
   - 等待几秒钟

3. 重新添加正确的域名：
   - 在输入框中输入：`www.portfolioguardian.com.au`
   - 点击 **Save**
   - 等待 GitHub 验证（通常需要 1-2 分钟）

4. 验证 DNS 检查：
   - 应该显示：**✔ DNS check successful**（绿色勾）
   - 如果显示错误，等待几分钟后刷新页面

### 步骤 2：等待 TLS 证书配置

修复域名后：
- TLS 证书会自动重新配置
- 提示："TLS certificate is being provisioned. This may take up to 15 minutes to complete."
- 这个过程可能需要 15 分钟到 24 小时

### 步骤 3：启用 HTTPS

TLS 证书配置完成后：
- "Enforce HTTPS" 选项会变为可用
- 勾选 "Enforce HTTPS" 以确保网站只通过 HTTPS 访问

## DNS 记录验证

### GoDaddy DNS 记录（已正确配置）

**portfolioguardian.com.au：**
- ✅ CNAME: `www` -> `markma27.github.io.`
- ✅ A 记录: `@` -> GitHub Pages IPs（185.199.108.153 等）

这些记录都是正确的，不需要修改。

## 验证修复

修复完成后：

1. **检查 GitHub Pages 设置**：
   - 应该显示：`www.portfolioguardian.com.au`
   - DNS 检查：成功（绿色勾）
   - TLS 证书：已配置或正在配置

2. **测试网站访问**：
   - 访问：https://www.portfolioguardian.com.au
   - 应该显示 PortfolioGuardian 网站，而不是 prepaidly.io

3. **清除浏览器缓存**：
   - 如果仍显示旧内容，清除浏览器缓存或使用无痕模式

## 时间线

- **DNS 更改生效**：通常立即生效（已在 GoDaddy 正确配置）
- **GitHub DNS 验证**：1-5 分钟
- **TLS 证书配置**：15 分钟到 24 小时
- **网站完全可用**：通常在修复域名设置后立即生效

## 故障排除

如果修复后仍然指向 prepaidly.io：

1. **清除 GitHub Pages 缓存**：
   - 在 GitHub Pages 设置中，临时禁用自定义域名
   - 等待 5 分钟
   - 重新添加 `www.portfolioguardian.com.au`

2. **检查浏览器缓存**：
   - 使用 Ctrl+F5 强制刷新
   - 或在无痕模式下访问

3. **验证 DNS 传播**：
   - 访问：https://dnschecker.org
   - 输入：`www.portfolioguardian.com.au`
   - 检查 CNAME 记录是否解析到 `markma27.github.io`

## 重要提示

✅ **CNAME 文件**：已正确配置（`www.portfolioguardian.com.au`）  
✅ **DNS 记录**：已正确配置  
❌ **GitHub Pages 设置**：需要修复（将 `.co` 改为 `.com.au`）

修复 GitHub Pages 设置中的域名是解决问题的关键！

