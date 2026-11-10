// SNS共有用の画像（public/og.png）とファビコンのPNG版を作る。
// 文章を変えたら `npm run og` で作り直す。
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';

const serif = "'Noto Serif JP','Yu Mincho','Times New Roman',Georgia,serif";

const og = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="s" x1="0" y1="1" x2="1" y2="0">
      <stop offset="0" stop-color="#000"/>
      <stop offset="0.48" stop-color="#1c1c1e"/>
      <stop offset="0.53" stop-color="#cfcfd2"/>
      <stop offset="0.58" stop-color="#26262a"/>
      <stop offset="1" stop-color="#000"/>
    </linearGradient>
    <filter id="b"><feGaussianBlur stdDeviation="12"/></filter>
  </defs>
  <rect width="1200" height="630" fill="#000"/>
  <path d="M-100 520 C 220 360, 480 640, 760 480 S 1140 300, 1300 420" fill="none"
        stroke="url(#s)" stroke-width="110" stroke-linecap="round" opacity="0.7" filter="url(#b)"/>
  <text x="80" y="300" font-family="${serif}" font-size="68" letter-spacing="5" fill="#fff">Move Value. Make Vision.</text>
  <text x="82" y="372" font-family="${serif}" font-size="26" letter-spacing="5" fill="#a6a6a6">Value Vision Partners</text>
</svg>`;

const icon = (size) => `
<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 64 64">
  <rect width="64" height="64" fill="#000"/>
  <text x="32" y="43" text-anchor="middle" font-family="${serif}" font-size="30" letter-spacing="1" fill="#fff">VV</text>
</svg>`;

await mkdir('public', { recursive: true });
await sharp(Buffer.from(og)).png().toFile('public/og.png');
await sharp(Buffer.from(icon(64))).png().toFile('public/favicon.png');
await sharp(Buffer.from(icon(180))).png().toFile('public/apple-touch-icon.png');
console.log('public/og.png, favicon.png, apple-touch-icon.png を作りました');
