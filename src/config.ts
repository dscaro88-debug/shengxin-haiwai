// 全站集中配置 —— 所有真实参数放这里，避免再出现 example.com 占位符。
// 改账号/换二维码，只动这个文件即可。

export const SITE = {
  name: '雪球·智慧',
  domain: 'https://www.snowballwise.com',
  // 私域入口页（全站"加入社群/加微信"统一指向这里）
  joinUrl: '/join',

  // —— 联盟账号（变现收款管道）——
  // 淘宝联盟（阿里妈妈）PID —— 已拿到，所有淘客转链都带这个
  taobaoPid: 'mm_10482392981_343160005_116301750223',
  // 京东联盟 PID —— 审核中，拿到后填这里
  jdPid: '',

  // —— 私域联系方式（用户加你的入口）——
  // ⚠️ 把下面换成你真实的微信号；/join 页会展示
  wechatId: '雪球智慧CARO',
  // 个人微信二维码图片（放在 public/wechat-qr.png，替换成你微信里的"我的二维码"截图）
  wechatQr: '/wechat-qr.png',
  // 小红书号（主页搜索用）
  xiaohongshu: '@雪球·智慧',
  email: 'hello@snowballwise.com',

  // 合规披露文案（页脚/关于页复用）
  disclosure:
    '本站为联盟营销（Affiliate）网站。部分链接为推广链接，您通过链接注册或消费，本站可能获得佣金，不会增加您的任何费用。',
} as const;
