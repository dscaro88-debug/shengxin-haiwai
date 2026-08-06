// APP 拉新任务数据（复用 deals 卡片渲染 + 两级分润 + track 归因）
export interface AppTask {
  img: string;        // 应用图标/封面（接渠道后填真实图，留空显示首字色块）
  name: string;       // APP 名称 + 任务标题
  slogan: string;     // 一句话赚钱点（给宝妈看）
  price: string;      // 佣金说明，如 "¥20/有效注册"
  rate?: string;      // 标签，如 "0门槛" / "限时高价"
  platform: string;   // 渠道：douyin / meituan / kuaishou / other
  category: string;   // 类型：网赚拉新 / 本地生活 / 电商 / 金融
  tags: string[];
  url: string;        // 渠道专属推广链接（接渠道后填真实链接，示例填 '#'）
  steps?: string[];   // 任务步骤（详情用，可选）
  hidden?: boolean;
}

// 示例数据：接渠道后把 url 换成真实「渠道专属链接」、price 换成真实渠道价即可
export const apps: AppTask[] = [
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
    name: '美团 · 新客拉新',
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
    name: '快手极速版 · 拉新',
    slogan: '和抖音极速版同逻辑，多一个渠道多一份收入',
    price: '¥25/有效注册',
    rate: '网赚热门',
    platform: 'kuaishou',
    category: '网赚拉新',
    tags: ['0门槛', '大厂背书'],
    url: '#',
  },
];

export const platforms = [
  { key: 'all', label: '全部渠道' },
  { key: 'douyin', label: '抖音系' },
  { key: 'meituan', label: '美团系' },
  { key: 'kuaishou', label: '快手系' },
  { key: 'other', label: '其他' },
];

export const categories = [
  { key: 'all', label: '全部类型' },
  { key: '网赚拉新', label: '网赚拉新' },
  { key: '本地生活', label: '本地生活' },
  { key: '电商', label: '电商' },
  { key: '金融', label: '金融' },
];
