# GitHub Pages 域名修复 - 最终步骤

## 当前问题

GitHub Pages 设置中的自定义域名显示为：`.portfolioguardian.com.au`（缺少 `www`）

## 立即修复

### 步骤：

1. **访问 GitHub Pages 设置**：
   - https://github.com/markma27/PortfolioGuardian/settings/pages

2. **修复自定义域名**：
   - 在 "Custom domain" 输入框中
   - **删除**当前的 `.portfolioguardian.com.au`
   - **输入**完整的域名：`www.portfolioguardian.com.au`
   - 点击 **Save** 按钮

3. **验证**：
   - 等待几秒钟
   - 应该显示：**✔ DNS check successful**（绿色勾）
   - TLS 证书会自动重新配置

### 重要提示：

- ✅ DNS 记录已正确配置（`www` -> `markma27.github.io.`）
- ✅ CNAME 文件正确（`www.portfolioguardian.com.au`）
- ❌ GitHub Pages 设置需要修复（添加 `www` 前缀）

修复后，TLS 证书会重新配置（可能需要 15 分钟到 24 小时），然后 "Enforce HTTPS" 选项会变为可用。

