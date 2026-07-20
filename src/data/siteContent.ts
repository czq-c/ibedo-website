/**
 * 官网品牌与联系信息（集中配置，便于后期修改）
 * ——————————————————————————————————————————————————————
 * 品牌与联系信息集中配置。
 */

export const siteContent = {
  brand: {
    /** 营业执照全称 */
    fullLegalName: '鑫正辉科技（深圳）有限公司',
    /** 导航与页脚主展示名 */
    displayName: '鑫正辉科技',
    /** Logo 旁英文小字（可改为产品系列名或删除） */
    nameEn: 'XZH Tech',
    slogan: '精密光学·感智未来',
    /** 一句话介绍（首页 Hero 等） */
    tagline:
      '以精密光学与智能感知为核心，提供激光 / TOF、结构光、双目视觉与摄像头模组的研发与交付。',
    /** 成立年限展示用文案 */
    experienceBadge: '专注光学与感知 · 持续深耕',
  },
  contact: {
    address: '深圳市龙华区大浪街道上横朗社区上横朗第四工业区7号302',
    telLandline: '+86-0755-21030400',
    telMobile: '138-2317-9959',
    email: 'contact@your-domain.com',
    workHours: '周一至周五 9:00 - 18:00',
    workHoursNote: '法定节假日除外',
  },
  social: {
    /** 占位：替换为真实链接后去掉 # */
    weibo: '#',
    wechatArticle: '#',
    zhihu: '#',
  },
  seo: {
    title: '鑫正辉科技（深圳）有限公司 | 精密光学与智能感知',
    description:
      '鑫正辉科技（深圳）有限公司——精密光学、TOF / 结构光、视觉模组与行业解决方案。',
    keywords: '鑫正辉,深圳,精密光学,TOF,结构光,深度相机,视觉模组',
  },
} as const;
