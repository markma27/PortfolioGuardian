# Snyk Code 漏洞修复说明

## browserslist/cli.js Path Traversal 漏洞 (CWE-23)

### 漏洞位置
`node_modules/browserslist/cli.js` 第 116 行

### 漏洞说明
这是 `browserslist` CLI 工具的 Path Traversal 漏洞。该脚本仅在开发时使用（通过 `npx browserslist`），不会在生产环境运行。

### 已完成的修复

1. ✅ **更新了 `snyk.code.yml`**
   - 排除了整个 `browserslist` 目录
   - 添加了 `**/node_modules/**` 和 `node_modules/**` 排除规则

2. ✅ **更新了 browserslist 版本**
   - 从 4.24.4 更新到 4.27.0（最新版本）

3. ✅ **创建了 `.snyk` 文件**
   - 用于 Snyk Open Source 的忽略规则

### 需要在 Snyk Web UI 中手动忽略

由于这是 **Snyk Code**（代码分析）的漏洞，而不仅仅是依赖扫描，您需要在 Snyk Web UI 中手动忽略：

1. 登录 Snyk Web UI: https://app.snyk.io
2. 导航到您的项目 `markma27/PortfolioGuardian`
3. 点击 "Code Analysis" 标签
4. 找到 Path Traversal 漏洞（CWE-23，score: 600）
5. 点击 "Ignore across repository"
6. 选择忽略原因："Third-party dependency in node_modules"
7. 设置过期时间（建议 1 年）

### 为什么可以安全忽略？

- ✅ 这是第三方依赖的 CLI 工具脚本
- ✅ 仅在开发时使用，不会在生产环境运行
- ✅ 不会影响您的网站安全性
- ✅ 已经在 `snyk.code.yml` 中排除了整个 `node_modules` 目录

### 参考文档
- [Snyk Code Configuration](https://docs.snyk.io/products/snyk-code/getting-started-with-snyk-code/snyk-code-configuration-options)
- [Directory Traversal Vulnerability](https://learn.snyk.io/lesson/directory-traversal/)

