# GitHub Pages DNS 配置修复指南

## 问题
两个网站都使用相同的 CNAME：`www` -> `markma27.github.io`，导致冲突。

## 解决方案

### 方案 1：使用仓库特定的 GitHub Pages URL（推荐）

对于 PortfolioGuardian，DNS 应该指向仓库特定的 URL：

**CNAME 记录应该改为：**
- Type: `CNAME`
- Name: `www`
- Data: `markma27.github.io.` （保持不变，但需要确保 GitHub Pages 设置正确）

### 方案 2：在 GitHub Pages 设置中配置自定义域名

1. 访问：https://github.com/markma27/PortfolioGuardian/settings/pages
2. 在 "Custom domain" 部分：
   - 确保输入的是：`www.portfolioguardian.com.au`
   - 点击 "Save"
3. 等待 GitHub 验证域名（可能需要几分钟）
4. 确保 "Enforce HTTPS" 已勾选

### 方案 3：使用不同的子路径

如果两个网站必须在同一个 GitHub Pages 下，可以使用不同的路径：
- PortfolioGuardian: `markma27.github.io/PortfolioGuardian`
- prepaidly.io: `markma27.github.io/prepaidly` （或其他路径）

但这不是推荐方案，因为自定义域名会更专业。

## 重要检查点

1. **CNAME 文件内容**：确保 `CNAME` 文件内容是 `www.portfolioguardian.com.au`（已确认正确）

2. **GitHub Pages 设置**：
   - 访问：https://github.com/markma27/PortfolioGuardian/settings/pages
   - 确认 "Custom domain" 设置为 `www.portfolioguardian.com.au`
   - 如果显示其他域名，删除并重新添加

3. **DNS 记录**：
   - CNAME: `www` -> `markma27.github.io.` （正确）
   - 等待 DNS 传播（可能需要几分钟到几小时）

4. **验证**：
   - 访问：https://dnschecker.org
   - 输入 `www.portfolioguardian.com.au`
   - 检查 CNAME 记录是否正确解析到 `markma27.github.io`

## 故障排除

如果仍然指向 prepaidly.io：

1. **清除 GitHub Pages 缓存**：
   - 在 GitHub Pages 设置中，临时禁用自定义域名
   - 等待 5 分钟
   - 重新添加自定义域名

2. **检查仓库设置**：
   - 确保 PortfolioGuardian 仓库的 GitHub Pages 已启用
   - 确保源分支是 `main` 或 `master`

3. **等待 DNS 传播**：
   - DNS 更改可能需要 24-48 小时完全传播
   - 检查全球 DNS 传播状态

