// サイトに載せる文章はすべてこのファイルにまとめる。
// 「確定」の文言は一字一句変えない（.claude/skills/content を参照）。
// 「案」はオーナーの承認待ち。承認されたら「案」の印を外す。

export const company = {
  nameJa: 'Value Vision Partners 合同会社',
  nameEn: 'Value Vision Partners LLC',
  headerName: 'Value Vision Partners',
  representative: '黒澤 太元',
  address: '東京都港区赤坂9-7',
  email: 'tokyo@vv-tokyo.com',
  copyright: '© 2026 Value Vision Partners 合同会社. All rights reserved.',
};

export const seo = {
  title: 'Value Vision Partners 合同会社',
  // 承認済み 2026-11-11
  description:
    'Value Vision Partners 合同会社の公式サイト。マーケティングとセールスの両軸支援で収益成果を最大化する拡販ソリューション「Revenue Drive」を提供しています。',
};

// ヘッダーのメニュー（id は各セクションの id と合わせる）
export const nav = [
  { id: 'revenue-drive', label: 'Revenue Drive' },
  { id: 'message', label: '代表メッセージ' },
  { id: 'advisors', label: '顧問' },
  { id: 'company', label: '会社概要' },
  { id: 'contact', label: 'お問い合わせ' },
];

// ヒーロー（確定）
export const hero = {
  messageA: 'Move Value. Make Vision.',
  sub: ['課題を透徹し、最適解を導出する。', 'そのために、極限まで我々自身の価値に向き合う。'],
  messageB: 'ポテンシャル志向で成し遂げる',
};

// Revenue Drive
export const revenueDrive = {
  label: '拡販ソリューション',
  name: 'Revenue Drive', // 確定
  tagline: 'マーケティングセールスの両軸支援で収益成果を最大化する', // 確定

  // ここから下は参考資料をもとに作成（承認済み 2026-11-11）
  // 一言で伝えるコンセプト（2行）
  concept: ['集客から商談創出までを一体化し、', '売上につながる仕組みを構築します。'],
  services: [
    { en: 'Marketing', role: '需要を創出する', items: ['LP制作', 'Web集客', 'SNS施策'] },
    { en: 'Sales', role: '需要を収益化する', items: ['新規開拓', '商談創出', '営業支援'] },
  ],
  growth: {
    title: 'Revenue Growth',
    terms: ['商談数', '受注率', '顧客単価'],
  },
  value: {
    lead: 'より良いLPで、より良い商談を。',
    items: [
      { en: 'Marketing', text: '顧客に価値が伝わる仕組みをつくる。' },
      { en: 'Sales', text: '顧客との対話を通じて意思決定を促す。' },
      { en: 'Optimization', text: '営業現場の知見をマーケティングに還元し、継続的に改善する。' },
    ],
  },
  closing: ['売るのはLPでも、テレアポでもない。', '売上を生み出す仕組みです。'],
};

// 代表メッセージ（確定）
export const message = {
  en: 'We aim to be the most interesting in the world and to earn the most in the world.',
  ja: '世界を変えるべく一生懸命進み続けます。',
  title: '代表',
  name: '黒澤 太元',
};

// 顧問（肩書きは経歴を受け取るまで「顧問」のみ）
export const advisors = [
  { name: '海老根 智仁', title: '顧問' },
  { name: '杉山 全功', title: '顧問' },
];

// 会社概要
export const profile = [
  { label: '会社名', value: 'Value Vision Partners 合同会社（Value Vision Partners LLC）' },
  { label: '代表者', value: '黒澤 太元' },
  { label: '所在地', value: '東京都港区赤坂9-7' },
  { label: '事業内容', value: '拡販ソリューション「Revenue Drive」' },
  { label: 'お問い合わせ', value: 'tokyo@vv-tokyo.com', email: true },
];

// お問い合わせ（承認済み 2026-11-11）
export const contact = {
  lead: 'ご相談・ご質問は、メールにてお気軽にお問い合わせください。',
  button: 'メールで問い合わせる',
};

// プライバシーポリシー（承認済み 2026-11-11）
export const privacy = {
  title: 'プライバシーポリシー',
  intro:
    'Value Vision Partners 合同会社（以下「当社」）は、お問い合わせを通じてお預かりする個人情報を、以下の方針に基づき適切に取り扱います。',
  sections: [
    {
      heading: '1. 取得する情報',
      body: 'メールでのお問い合わせの際に、お名前、会社名、メールアドレス、お問い合わせ内容など、お客様ご自身が記載された情報を取得します。',
    },
    {
      heading: '2. 利用目的',
      body: '取得した情報は、お問い合わせへの回答、ご依頼内容に関するご連絡、当社サービスのご案内のためにのみ利用します。',
    },
    {
      heading: '3. 第三者への提供',
      body: '法令に基づく場合を除き、ご本人の同意なく個人情報を第三者に提供することはありません。',
    },
    {
      heading: '4. 安全管理',
      body: '個人情報への不正なアクセス、紛失、漏えいなどを防ぐため、適切な安全管理に努めます。',
    },
    {
      heading: '5. 開示・訂正・削除のご請求',
      body: 'ご本人から個人情報の開示、訂正、利用停止、削除のご請求があった場合は、ご本人であることを確認したうえで、速やかに対応します。',
    },
    {
      heading: '6. アクセス解析について',
      body: '当サイトでは、現在アクセス解析ツールおよび Cookie を使用していません。',
    },
    {
      heading: '7. 本ポリシーの変更',
      body: '本ポリシーの内容は、必要に応じて変更することがあります。変更後の内容は本ページに掲載した時点から有効となります。',
    },
  ],
  contactHeading: 'お問い合わせ窓口',
  established: '制定日：2026年11月11日',
};
