import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { solutions } from "@/data/mockData";
import { Link } from "react-router-dom";
import { Radar, Bot, ScanFace, CreditCard, Eye, Camera, Factory, Home, ChevronRight } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Projector: Radar,
  Bot: Bot,
  ScanFace: ScanFace,
  CreditCard: CreditCard,
  Eye: Eye,
  Camera: Camera,
  Factory: Factory,
  Home: Home,
};

export default function SolutionsPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = ['all', ...new Set(solutions.map(s => s.category))];

  const filteredSolutions = activeCategory === 'all'
    ? solutions
    : solutions.filter(s => s.category === activeCategory);

  return (
    <Layout>
      <section className="pt-32 pb-16 bg-gradient-to-br from-[#0a1628] via-[#0f2744] to-[#0a1628]">
        <div className="container mx-auto px-6 text-center">
          <span className="inline-block px-4 py-1 bg-[#0066ff]/20 text-[#00d4ff] text-sm font-medium rounded-full mb-4">
            解决方案
          </span>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6">
            行业应用解决方案
          </h1>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto">
            基于丰富的产品矩阵和深厚的行业经验，为多领域提供定制化光学感知解决方案
          </p>
        </div>
      </section>

      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-4 overflow-x-auto pb-2">
            <span className="text-sm font-medium text-gray-500 flex-shrink-0">分类:</span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  activeCategory === cat
                    ? 'bg-[#0066ff] text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat === 'all' ? '全部方案' : cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredSolutions.map((solution) => {
              const Icon = iconMap[solution.icon] || Radar;
              return (
                <div
                  key={solution.id}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0066ff] to-[#00d4ff] flex items-center justify-center flex-shrink-0">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <span className="inline-block px-3 py-1 bg-[#0066ff]/10 text-[#0066ff] text-xs font-medium rounded-full mb-2">
                          {solution.category}
                        </span>
                        <h3 className="text-xl font-bold text-gray-900">{solution.title}</h3>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-6">{solution.description}</p>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 mb-3">方案特点</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {solution.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#00d4ff]" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 mb-3">相关产品</h4>
                      <div className="flex flex-wrap gap-2">
                        {solution.products.map((product, i) => (
                          <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                            {product}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Link
                      to="/cases"
                      className="inline-flex items-center text-[#0066ff] font-semibold hover:text-[#0055dd] transition-colors group"
                    >
                      查看相关案例
                      <ChevronRight size={18} className="ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-[#0a1628] to-[#0f2744]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-4">
            需要定制化解决方案？
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            我们的技术团队可以根据您的具体需求，提供一对一的专业咨询和定制化方案设计
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#0066ff] to-[#00d4ff] text-white font-semibold rounded-full hover:shadow-lg transition-all"
          >
            立即咨询
          </Link>
        </div>
      </section>
    </Layout>
  );
}
