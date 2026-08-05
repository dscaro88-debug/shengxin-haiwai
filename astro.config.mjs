import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercelAnalytics from '@vercel/analytics/astro';

// ⚠️ 部署后把 site 改成你自己的正式域名（影响 sitemap / SEO）
export default defineConfig({
  site: 'https://snowballwise.com',
  integrations: [sitemap(), vercelAnalytics()],
  markdown: {
    shikiConfig: { theme: 'github-light' },
  },
});
