# GitHub Pages DNS 工作原理说明

## 为什么两个域名可以指向同一个 GitHub Pages URL？

### DNS 记录的作用

DNS 记录只是告诉浏览器**域名解析到哪里**（IP 地址或 CNAME 目标）。

当您访问 `www.portfolioguardian.com.au` 时：
1. DNS 查询：`www.portfolioguardian.com.au` -> `markma27.github.io`
2. 浏览器连接到 `markma27.github.io` 的服务器
3. **HTTP 请求头**：浏览器发送请求时，会在 `Host` header 中包含原始域名 `www.portfolioguardian.com.au`

### GitHub Pages 如何区分不同域名？

GitHub Pages 通过以下方式区分不同域名：

1. **HTTP Host Header**：
   - 浏览器请求时会发送：`Host: www.portfolioguardian.com.au`
   - GitHub 服务器看到这个 Host header

2. **仓库中的 CNAME 文件**：
   - GitHub 检查哪个仓库的 `CNAME` 文件包含 `www.portfolioguardian.com.au`
   - 找到匹配的仓库后，显示该仓库的内容

3. **域名匹配过程**：
   ```
   请求 www.portfolioguardian.com.au
   ↓
   DNS 解析到 markma27.github.io
   ↓
   GitHub 服务器接收请求（Host: www.portfolioguardian.com.au）
   ↓
   GitHub 查找 CNAME 文件包含 www.portfolioguardian.com.au 的仓库
   ↓
   找到 PortfolioGuardian 仓库
   ↓
   显示 PortfolioGuardian 网站内容
   ```

### 为什么不会冲突？

**PortfolioGuardian 仓库：**
- CNAME 文件：`www.portfolioguardian.com.au`
- DNS：`www` -> `markma27.github.io.`

**prepaidly-site 仓库：**
- CNAME 文件：`prepaidly.io`
- DNS：`www` -> `markma27.github.io.`

**工作原理：**
- 两个域名都指向同一个 GitHub Pages URL（`markma27.github.io`）
- 但 GitHub 通过 **HTTP Host header** 和 **CNAME 文件** 来区分
- 每个仓库的 CNAME 文件是不同的，所以不会冲突

### 类比说明

想象 GitHub Pages 是一个大楼（`markma27.github.io`），而 CNAME 文件是门牌号：

- 大楼地址：`markma27.github.io`（所有邮件都送到这里）
- 门牌号 A：`www.portfolioguardian.com.au`（PortfolioGuardian 仓库）
- 门牌号 B：`prepaidly.io`（prepaidly-site 仓库）

邮递员（DNS）把邮件送到大楼，大楼管理员（GitHub）根据门牌号（CNAME 文件）将邮件送到正确的房间（仓库）。

### 关键点

✅ **DNS 记录不冲突**：多个域名可以指向同一个 IP/URL  
✅ **CNAME 文件是关键**：每个仓库必须有自己的 CNAME 文件  
✅ **HTTP Host Header**：GitHub 通过这个来区分不同的域名请求  
✅ **GitHub Pages 设置**：需要在 GitHub Pages 设置中配置正确的自定义域名

### 常见问题

**Q: 为什么需要 CNAME 文件？**  
A: CNAME 文件告诉 GitHub 哪个域名对应哪个仓库。

**Q: 可以多个域名指向同一个仓库吗？**  
A: 可以，但需要在同一个 CNAME 文件中列出所有域名（每行一个）。

**Q: 如果两个仓库的 CNAME 文件相同会怎样？**  
A: 会有冲突，GitHub 可能不确定显示哪个仓库的内容。

### 总结

两个 DNS 记录都指向 `markma27.github.io` **不会冲突**，因为：
- DNS 只是路由功能（告诉域名去哪里）
- GitHub Pages 通过 CNAME 文件和 HTTP Host header 来区分不同域名
- 每个仓库的 CNAME 文件是独立的，互不干扰

这是 GitHub Pages 的标准工作方式，完全可以正常工作！

