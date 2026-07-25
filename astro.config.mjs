import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// ⚠️ 部署后把 site 改成你自己的正式域名（影响 sitemap / SEO）
export default defineConfig({
  site: 'https://shengxin-haiwai.vercel.app',
  integrations: [sitemap()],
  markdown: {
    shikiConfig: { theme: 'github-light' },
  },
});
