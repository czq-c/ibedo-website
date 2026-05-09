import Layout from "@/components/layout/Layout";
import { cases } from "@/data/mockData";
import { TrendingUp, Target, CheckCircle } from "lucide-react";

export default function CasesPage() {
  return (
    <Layout>
      <section className="pt-32 pb-16 bg-gradient-to-br from-[#0a1628] via-[#0f2744] to-[#0a1628]">
        <div className="container mx-auto px-6 text-center">
          <span className="inline-block px-4 py-1 bg-[#0066ff]/20 text-[#00d4ff] text-sm font-medium rounded-full mb-4">
            成功案例
          </span>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6">
            客户案例展示
          </h1>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto">
            深入了解各行业客户如何借助iBEDO的光学感知技术实现业务突破
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {cases.map((caseItem) => (
              <div
                key={caseItem.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={caseItem.imageUrl}
                    alt={caseItem.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <span className="inline-block px-3 py-1 bg-[#0066ff] text-white text-sm font-medium rounded-full">
                      {caseItem.industry}
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{caseItem.title}</h3>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#ff6b35]/10 flex items-center justify-center flex-shrink-0">
                        <Target className="w-4 h-4 text-[#ff6b35]" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900">项目挑战</h4>
                        <p className="text-sm text-gray-600 mt-1">{caseItem.challenge}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#0066ff]/10 flex items-center justify-center flex-shrink-0">
                        <TrendingUp className="w-4 h-4 text-[#0066ff]" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900">解决方案</h4>
                        <p className="text-sm text-gray-600 mt-1">{caseItem.solution}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#00d4ff]/10 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-4 h-4 text-[#00d4ff]" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900">项目成果</h4>
                        <p className="text-sm text-gray-600 mt-1">{caseItem.result}</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">采用产品</h4>
                    <div className="flex flex-wrap gap-2">
                      {caseItem.products.map((product, i) => (
                        <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                          {product}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
