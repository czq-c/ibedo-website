import Layout from "@/components/layout/Layout";
import { timeline } from "@/data/mockData";
import { Target, Eye, Heart, Award, Users, Lightbulb, MapPin, Building2, Search, FileCheck, BadgeCheck } from "lucide-react";

export default function AboutPage() {
  return (
    <Layout>
      <section className="relative pb-16 pt-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-50 via-white to-accent-50" />
        <img
          src="/site-media/gallery/hero-bg.webp"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-[0.12]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/70 to-white/95" />
        
        <div className="relative container mx-auto px-6 text-center">
          <span className="mb-4 inline-block rounded-full border border-xzh-mint/30 bg-xzh-mint/10 px-4 py-1 text-xs font-medium text-primary-700 sm:text-sm">
            关于我们
          </span>
          <h1 className="font-display mb-6 text-4xl font-semibold text-slate-900 md:text-5xl lg:text-6xl">
            精密光学·感智未来
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-slate-600 md:text-xl">
            鑫正辉科技（深圳）有限公司专注于精密光学与智能感知，为客户提供激光 TOF、结构光、双目视觉与摄像头模组的研发与交付。
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="mb-4 inline-block rounded-full bg-xzh-mint/10 px-4 py-1 text-xs font-medium text-teal-800 sm:text-sm">
                公司简介
              </span>
              <h2 className="font-display mb-6 text-3xl font-semibold text-slate-900 md:text-4xl">
                鑫正辉科技（深圳）有限公司
              </h2>
              <p className="mb-6 leading-relaxed text-slate-600">
                公司成立于 2018 年，以「精密光学·感智未来」为使命，聚焦激光、TOF、结构光、双目算法与摄像头产品的工程化落地。
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                公司总部位于深圳，在西安/苏州设有研发中心，在北京/昆山设有办事处。公司拥有 100+ 人的专业团队，其中研发技术人员 26+ 人，算法专家 15+ 人，销售人员 7+ 人。研发团队占比超过 50%，拥有 30 多项核心专利技术。
              </p>
              <p className="text-gray-600 leading-relaxed">
                我们拥有自主研发的 DTOF、ITOF、结构光、热成像、VCSEL 等核心技术，产品广泛应用于无人机、智能门锁、微型投影、机器人、智能家居及汽车智能等领域。多款产品通过汽车级 AEC-Q102 认证，进入头部客户供应链体系。
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: Target, label: '企业使命', value: '精密光学·感智未来' },
                { icon: Eye, label: '企业愿景', value: '成为光学感知领域领导者' },
                { icon: Heart, label: '核心价值观', value: '客户至上·创新驱动' },
                { icon: Award, label: '技术专利', value: '30+' },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="bg-gray-50 rounded-2xl p-6 text-center">
                    <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-xzh-mint to-xzh-mint-bright flex items-center justify-center">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <p className="text-sm text-gray-500 mb-1">{item.label}</p>
                    <p className="font-bold text-gray-900">{item.value}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-teal-50 text-teal-800 text-sm font-medium rounded-full mb-4">
              资质证书
            </span>
            <h2 className="font-display text-4xl font-bold text-gray-900 mb-4">
              企业认证与荣誉
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              鑫正辉科技通过多项权威认证，荣获国家级高新技术企业认定
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-gray-100">
              <div className="aspect-[4/3] overflow-hidden bg-gray-50 flex items-center justify-center p-8">
                <img
                  src="/site-media/certificates/iso9001.png"
                  alt="ISO9001 质量管理体系认证证书"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement!.innerHTML = `
                      <div class="text-center">
                        <FileCheck class="w-16 h-16 mx-auto mb-4 text-gray-300" />
                        <p class="text-gray-500">证书图片</p>
                        <p class="text-sm text-gray-400 mt-2">图片路径：/site-media/certificates/iso9001.png</p>
                      </div>
                    `;
                  }}
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <FileCheck className="w-5 h-5 text-teal-700 mr-2" />
                  <h3 className="font-bold text-lg text-gray-900">ISO9001 质量管理体系认证</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  认证范围：TOF 模组研发；镜头、VCSEL 芯片、VCSEL、驱动 IC、ITOF 芯片销售
                </p>
                <div className="mt-4 flex items-center text-xs text-gray-500">
                  <span className="mr-4">发证日期：2025 年 01 月 04 日</span>
                  <span>有效期至：2029 年 01 月 03 日</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-gray-100">
              <div className="aspect-[4/3] overflow-hidden bg-gray-50 flex items-center justify-center p-8">
                <img
                  src="/site-media/certificates/high-tech-enterprise.png"
                  alt="高新技术企业证书"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement!.innerHTML = `
                      <div class="text-center">
                        <BadgeCheck class="w-16 h-16 mx-auto mb-4 text-gray-300" />
                        <p class="text-gray-500">证书图片</p>
                        <p class="text-sm text-gray-400 mt-2">图片路径：/site-media/certificates/high-tech-enterprise.png</p>
                      </div>
                    `;
                  }}
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <BadgeCheck className="w-5 h-5 text-teal-700 mr-2" />
                  <h3 className="font-bold text-lg text-gray-900">高新技术企业证书</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  企业名称：鑫正辉科技（深圳）有限公司
                </p>
                <div className="mt-4 flex items-center text-xs text-gray-500">
                  <span className="mr-4">证书编号：GR202544205940</span>
                  <span>有效期：三年</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-teal-50 text-teal-800 text-sm font-medium rounded-full mb-4">
              公司分布
            </span>
            <h2 className="font-display text-4xl font-bold text-gray-900 mb-4">
              全国布局
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              鑫正辉科技在全国设有多个研发中心和办事处，形成了完善的研发、生产、销售服务网络
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-br from-xzh-mint to-xzh-mint-bright p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <Building2 className="w-10 h-10" />
                  <span className="text-4xl font-bold">01</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl text-gray-900 mb-2">西安/苏州</h3>
                <p className="text-gray-600">研发中心</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-br from-xzh-mint to-xzh-mint-bright p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <MapPin className="w-10 h-10" />
                  <span className="text-4xl font-bold">02</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl text-gray-900 mb-2">深圳</h3>
                <p className="text-gray-600">总部</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-br from-xzh-mint to-xzh-mint-bright p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <Search className="w-10 h-10" />
                  <span className="text-4xl font-bold">03</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl text-gray-900 mb-2">北京/昆山</h3>
                <p className="text-gray-600">办事处</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-teal-50 text-teal-700 text-sm font-medium rounded-full mb-4">
              研发实力
            </span>
            <h2 className="font-display text-4xl font-bold text-gray-900 mb-4">
              强大的技术团队
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              公司拥有 100+ 人的专业团队，其中研发技术人员 26+ 人，算法专家 15+ 人，销售人员 7+ 人
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {[
              { value: '26', label: '研发人员', icon: Users },
              { value: '11+', label: '算法工程师', icon: Lightbulb },
              { value: '30+', label: '核心专利', icon: Award },
              { value: '50%', label: '研发占比', icon: Target },
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <Icon className="w-8 h-8 mx-auto mb-4 text-teal-700" />
                  <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-500">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-teal-50 text-teal-800 text-sm font-medium rounded-full mb-4">
              发展历程
            </span>
            <h2 className="font-display text-4xl font-bold text-gray-900 mb-4">
              技术演进里程碑
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-xzh-mint to-xzh-mint-bright" />

              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div
                    key={index}
                    className={`relative flex items-center ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'} pl-12`}>
                      <div className={`bg-gray-50 rounded-xl p-6 inline-block ${index % 2 === 0 ? 'md:ml-auto' : ''}`}>
                        <span className="inline-block px-3 py-1 bg-xzh-mint text-white text-sm font-bold rounded-full mb-2">
                          {item.year}
                        </span>
                        <p className="text-gray-700">{item.event}</p>
                      </div>
                    </div>
                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-xzh-mint-bright rounded-full border-4 border-white shadow-lg z-10" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
