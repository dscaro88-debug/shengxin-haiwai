import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Deal 内容集合：每篇优惠文章 = 一个 Markdown 文件
const deals = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/deals' }),
  schema: z.object({
    title: z.string(),                 // 标题
    description: z.string(),           // 摘要（用于 SEO / 列表）
    benefit: z.string(),               // 一句话利益点（如"注册返 $50"）
    category: z.string(),              // 分类（需与导航一致，见 README）
    region: z.string().default('北美'), // 覆盖区域（北美/欧洲/东南亚/大洋洲…）
    tags: z.array(z.string()).default([]),
    affiliateLink: z.string().url(),   // 你的联盟/推广链接（必填）
    buttonText: z.string().default('立即领取优惠'),
    deadline: z.string().optional(),   // 截止时间（可选）
    steps: z.array(z.string()).default([]), // 操作步骤
    ctaNote: z.string().optional(),    // 补充提示（可选）
    pubDate: z.coerce.date(),          // 发布日期
    featured: z.boolean().default(false), // 是否首页精选
  }),
});

export const collections = { deals };
