import Layout from "@/components/layout/Layout";
import { teamMembers, timeline } from "@/data/mockData";
import { resolveTeamAvatar } from "@/lib/siteMedia";
import { Target, Eye, Heart, Award, Users, Lightbulb } from "lucide-react";

export default function AboutPage() {
  return (
    <Layout>
      <section className="pt-32 pb-16 bg-gradient-to-br from-[#0a1628] via-[#0f2744] to-[#0a1628]">
        <div className="container mx-auto px-6 text-center">
          <span className="inline-block px-4 py-1 bg-[#0066ff]/20 text-[#00d4ff] text-sm font-medium rounded-full mb-4">
            关于我们
          </span>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6">
            精密光学·感智未来
          </h1>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto">
            鑫正辉科技（iBEDO）是一家专注于精密光学设计的高科技企业，致力于为客户提供激光TOF、结构光、双目视觉等全方位光学感知解决方案。
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-1 bg-[#0066ff]/10 text-[#0066ff] text-sm font-medium rounded-full mb-4">
                公司简介
              </span>
              <h2 className="font-display text-4xl font-bold text-gray-900 mb-6">
                专业、专注、创新
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                鑫正辉科技成立于2015年，始终专注于精密光学设计领域。公司以"精密光学·感智未来"为使命，致力于为客户提供高品质、高性能的光学感知产品。
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                我们拥有自主研发的TOF、结构光、热成像等核心技术，产品广泛应用于消费电子、机器人、智能家居、汽车、医疗、工业自动化等多个领域。公司研发团队占比超过50%，拥有30多项核心专利技术。
              </p>
              <p className="text-gray-600 leading-relaxed">
                多款产品通过汽车级AEC-Q102认证，进入头部客户供应链体系。未来，鑫正辉科技将继续深耕精密光学领域，推动光学感知技术的创新与应用。
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
                    <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-[#0066ff] to-[#00d4ff] flex items-center justify-center">
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

      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-[#00d4ff]/20 text-[#00d4ff] text-sm font-medium rounded-full mb-4">
              研发实力
            </span>
            <h2 className="font-display text-4xl font-bold text-gray-900 mb-4">
              专业研发团队
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              超过50%的员工从事研发工作，涵盖光学、算法、硬件、软件等全栈技术领域
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
                  <Icon className="w-8 h-8 mx-auto mb-4 text-[#0066ff]" />
                  <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-500">{stat.label}</div>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={resolveTeamAvatar(member.id, member.avatar)}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-bold text-lg text-gray-900">{member.name}</h3>
                  <p className="text-[#0066ff]">{member.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-[#0066ff]/10 text-[#0066ff] text-sm font-medium rounded-full mb-4">
              发展历程
            </span>
            <h2 className="font-display text-4xl font-bold text-gray-900 mb-4">
              技术演进里程碑
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#0066ff] to-[#00d4ff]" />

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
                        <span className="inline-block px-3 py-1 bg-[#0066ff] text-white text-sm font-bold rounded-full mb-2">
                          {item.year}
                        </span>
                        <p className="text-gray-700">{item.event}</p>
                      </div>
                    </div>
                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-[#00d4ff] rounded-full border-4 border-white shadow-lg z-10" />
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
