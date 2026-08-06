// 网赚任务墙数据（复用 deals 卡片渲染 + 两级分润 + track 归因）
// 我们扮演正规商家/大厂的「线上市场推广部」：帮他们找新用户，平台抽成。
export interface AppTask {
  img: string;        // 应用图标/封面（接渠道后填真实图，留空显示首字色块）
  name: string;       // 任务标题
  slogan: string;     // 一句话赚钱点（给宝妈看）
  price: string;      // 佣金说明，如 "¥30/有效注册"
  rate?: string;      // 标签，如 "0门槛" / "限时高价"
  platform: string;   // 上游渠道来源：douyin / kuaishou / meituan / eleme / ali / jd / pdd / operator / aggregate / other
  category: string;   // 任务类型：网赚拉新 / 本地生活 / 电商首单 / 运营商 / 问卷调研 / 游戏试玩
  tags: string[];
  url: string;        // 渠道专属推广链接（接渠道后填真实链接，示例填 '#'）
  steps?: string[];   // 任务步骤（详情用，可选）
  hidden?: boolean;
}

// 示例数据：接渠道后把 url 换成真实「渠道专属链接」、price 换成真实渠道价即可
export const apps: AppTask[] = [
  // —— 网赚拉新（APP 拉新）——
  {
    img: '',
    name: '抖音极速版 · 拉新',
    slogan: '朋友下载注册 + 看视频赚金币，你拿有效注册佣金',
    price: '¥30/有效注册',
    rate: '网赚热门',
    platform: 'douyin',
    category: '网赚拉新',
    tags: ['0门槛', '高佣金', '大厂背书'],
    url: '#',
    steps: [
      '把链接发到妈妈群 / 朋友圈',
      '对方下载抖音极速版并注册',
      '完成新手任务（看视频领金币）',
      '渠道后台确认有效注册，导入 snowballwise 分账',
    ],
  },
  {
    img: '',
    name: '快手极速版 · 拉新',
    slogan: '和抖音极速版同逻辑，多一个渠道多一份收入',
    price: '¥25/有效注册',
    rate: '网赚热门',
    platform: 'kuaishou',
    category: '网赚拉新',
    tags: ['0门槛', '大厂背书'],
    url: '#',
  },

  // —— 本地生活新客 ——
  {
    img: '',
    name: '美团 · 新客首单',
    slogan: '本地生活高频刚需，朋友点外卖 / 到店你拿新客佣金',
    price: '¥18/新客',
    rate: '刚需高频',
    platform: 'meituan',
    category: '本地生活',
    tags: ['高频', '到店+外卖', '复购强'],
    url: '#',
  },
  {
    img: '',
    name: '饿了么 · 新客首单',
    slogan: '阿里本地生活，新客首单佣金稳',
    price: '¥15/新客',
    rate: '刚需高频',
    platform: 'eleme',
    category: '本地生活',
    tags: ['高频', '外卖'],
    url: '#',
  },
  {
    img: '',
    name: '抖音团购 · 到店新客',
    slogan: '朋友团本地套餐到店核销，你拿推广佣金',
    price: '¥20/到店',
    rate: '本地生活',
    platform: 'douyin',
    category: '本地生活',
    tags: ['到店', '团购'],
    url: '#',
  },

  // —— 电商新人首单 ——
  {
    img: '',
    name: '拼多多 · 新人首单',
    slogan: '朋友第一次用拼多多，首单你拿佣金',
    price: '¥12/首单',
    rate: '电商',
    platform: 'pdd',
    category: '电商首单',
    tags: ['0门槛', '下沉广'],
    url: '#',
  },
  {
    img: '',
    name: '淘宝 · 新人首单',
    slogan: '朋友新号首单，返利 + 新人奖励双拿',
    price: '¥15/首单',
    rate: '电商',
    platform: 'ali',
    category: '电商首单',
    tags: ['高频', '大厂'],
    url: '#',
  },
  {
    img: '',
    name: '京东 · 新人首单',
    slogan: '朋友京东新客首单，佣金较高',
    price: '¥18/首单',
    rate: '电商',
    platform: 'jd',
    category: '电商首单',
    tags: ['高客单', '大厂'],
    url: '#',
  },

  // —— 运营商办卡 ——
  {
    img: '',
    name: '联通大王卡 · 激活',
    slogan: '朋友办卡并激活，长期套餐你拿一次性佣金',
    price: '¥30/激活',
    rate: '运营商',
    platform: 'operator',
    category: '运营商',
    tags: ['刚需', '可复购'],
    url: '#',
  },
  {
    img: '',
    name: '移动宽带 · 办理',
    slogan: '朋友装移动宽带，你拿办理佣金',
    price: '¥25/办理',
    rate: '运营商',
    platform: 'operator',
    category: '运营商',
    tags: ['刚需', '家庭'],
    url: '#',
  },

  // —— 问卷调研 ——
  {
    img: '',
    name: '品牌问卷 · 体验反馈',
    slogan: '朋友填品牌体验问卷，按份计佣',
    price: '¥5/份',
    rate: '轻量',
    platform: 'aggregate',
    category: '问卷调研',
    tags: ['0门槛', '碎片时间'],
    url: '#',
  },

  // —— 游戏试玩 ——
  {
    img: '',
    name: '新游试玩 · 达标',
    slogan: '朋友试玩新游达到等级，你拿试玩佣金',
    price: '¥15/达标',
    rate: '游戏',
    platform: 'aggregate',
    category: '游戏试玩',
    tags: ['年轻向', '可批量'],
    url: '#',
  },
];

// 上游渠道来源（筛选用）
export const platforms = [
  { key: 'all', label: '全部渠道' },
  { key: 'douyin', label: '抖音系' },
  { key: 'kuaishou', label: '快手系' },
  { key: 'meituan', label: '美团系' },
  { key: 'eleme', label: '饿了么' },
  { key: 'ali', label: '阿里系' },
  { key: 'jd', label: '京东系' },
  { key: 'pdd', label: '拼多多' },
  { key: 'operator', label: '运营商' },
  { key: 'aggregate', label: '第三方聚合' },
  { key: 'other', label: '其他' },
];

// 任务类型（筛选用）
export const categories = [
  { key: 'all', label: '全部类型' },
  { key: '网赚拉新', label: '网赚拉新' },
  { key: '本地生活', label: '本地生活' },
  { key: '电商首单', label: '电商新人首单' },
  { key: '运营商', label: '运营商办卡' },
  { key: '问卷调研', label: '问卷调研' },
  { key: '游戏试玩', label: '游戏试玩' },
];
