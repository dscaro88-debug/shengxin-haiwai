# 省心海外 · Astro 优惠站脚手架

一个轻量、SEO 友好的中文优惠/联盟营销内容站。技术栈：**Astro + Vercel + GitHub**，零服务器费用、无数据库、安全易维护。

---

## 一、本地预览（先看效果）

```bash
npm install
npm run dev      # 打开 http://localhost:4321
```

---

## 二、如何发一篇优惠（你每天的工作）

所有优惠都是 `src/content/deals/` 下的一个 `.md` 文件。**复制示例、填空即可**，不用碰代码。

新建 `src/content/deals/你的标题.md`：

```markdown
---
title: "Rakuten 新用户注册返 $50（限时）"      # 标题
description: "一句话摘要，用于搜索结果展示"     # SEO 摘要
benefit: "注册即返 $50，首单满 $25 即可到账"     # 卡片上的利益点
category: "购物返利"                            # 分类（见下方可选值）
tags: ["Rakuten", "返现"]                       # 标签（可选）
affiliateLink: "https://你的联盟链接"           # ⚠️ 换成你的推广链接
buttonText: "注册领 $50"                        # 按钮文案
deadline: "2026-08-31"                          # 截止时间（可选）
steps:                                          # 操作步骤（可选）
  - "点击按钮进入注册页"
  - "完成首单满 $25"
ctaNote: "提示：需通过链接跳转才计入"            # 补充提示（可选）
pubDate: 2026-07-25                             # 发布日期
featured: true                                  # 是否首页精选
---

## 正文（支持 Markdown）

在这里写优惠详情、小技巧、注意事项……
```

`category` 可选值（与导航一致，新增分类会自动生成分类页）：
`购物返利` · `信用卡开卡` · `银行开户` · `华人电商` · `生活优惠`

保存后刷新浏览器即可看到，无需重启。

---

## 三、上线部署（GitHub + Vercel，一次配置永久）

### 1. 推到 GitHub
```bash
git init
git add .
git commit -m "init huaren-deals"
gh repo create huaren-deals --public --source=. --push   # 需先装 gh 并登录
# 或手动在 github.com 建仓库后 git remote add + git push
```

### 2. 连接 Vercel
- 打开 [vercel.com](https://vercel.com) → Import Git Repository → 选 `huaren-deals`
- Framework 选 **Astro**（Vercel 会自动识别）
- 点 Deploy，约 30 秒上线，获得 `*.vercel.app` 域名

### 3. 绑定正式域名（可选）
- Vercel 项目 → Settings → Domains → 添加你的域名
- 去域名商加一条 CNAME 指向 `cname.vercel-dns.com`
- **改 `astro.config.mjs` 里的 `site` 为你正式域名**，重新部署（影响 sitemap/SEO）

---

## 四、上线前必须改的 5 处占位

| 文件 | 改动 |
|------|------|
| `astro.config.mjs` | `site` 改成你的正式域名 |
| `src/layouts/Layout.astro` | `wechatGroupUrl` 改成你的微信群/表单链接 |
| `src/pages/index.astro` | 同上的微信群链接 |
| `src/pages/deals/[...slug].astro` | 同上 |
| `public/robots.txt` | Sitemap 域名改成正式域名 |
| `src/content/deals/*.md` | `affiliateLink` 换成你真实的联盟链接 |

---

## 五、SEO 已内置

- ✅ 自动 `sitemap-index.xml`（@astrojs/sitemap）
- ✅ 每页 meta description / Open Graph
- ✅ 文章页 JSON-LD 结构化数据（利于 Google 收录）
- ✅ 中文 `lang="zh-CN"`、静态秒开（利于排名）

建议持续发布垂直长尾词文章，如「Rakuten Amazon 返现教程 2026」「Chase 开卡奖励对比」。

---

## 六、目录结构

```
huaren-deals-astro/
├── astro.config.mjs          # 站点配置 + sitemap
├── src/
│   ├── content.config.ts      # Deal 字段定义（一般不用改）
│   ├── layouts/Layout.astro   # 全站布局 + 头部/底部
│   ├── components/DealCard.astro
│   ├── pages/
│   │   ├── index.astro        # 首页 Deal 流
│   │   ├── deals/[...slug].astro   # 文章页
│   │   ├── category/[category].astro  # 分类页
│   │   ├── about.astro
│   │   └── cooperation.astro
│   ├── content/deals/         # ⭐ 你每天在这发优惠（已有 13 篇示例）
│   │   └── rakuten-register.md  # 示例之一（复制填空即可）
│   └── styles/global.css
└── public/robots.txt
```

---

## 七、常见问题

**Q：需要数据库吗？** 不需要，纯静态，最安全。
**Q：以后想加邮件订阅/用户系统？** 可以平滑扩展，Astro 支持 API 路由与第三方服务（如 Buttondown / Mailchimp）。
**Q：能用 Notion 当后台吗？** 可以，后续可加脚本把 Notion 数据库同步成 `src/content/deals/*.md`。
