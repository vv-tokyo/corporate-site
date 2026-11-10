// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// 公開先の住所。ドメイン切り替え前は GitHub の仮URL（SITE_URL / BASE_PATH を GitHub Actions から渡す）
const site = process.env.SITE_URL || 'https://vv-tokyo.com';
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  site,
  base,
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  devToolbar: { enabled: false },
});
