import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { products } from "@/data/mockData";

const featuredProducts = products.slice(0, 6);

const seriesLabels: Record<string, { name: string; color: string }> = {
  'dtof': { name: 'DTOF', color: 'bg-[#0066ff]' },
  'itof': { name: 'ITOF', color: 'bg-[#00d4ff]' },
  'structured-light': { name: '结构光', color: 'bg-[#8844ff]' },
  'thermal': { name: '热成像', color: 'bg-[#ff3366]' },
  'camera': { name: 'Camera', color: 'bg-[#ff6600]' },
  'vcsels': { name: 'VCSEL', color: 'bg-[#ffcc00]' },
};

export default function ProductsPreview() {
  return (
    <section className="py-24 bg-[#f8fafc]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12">
          <div>
            <span className="inline-block px-4 py-1 bg-[#0066ff]/10 text-[#0066ff] text-sm font-medium rounded-full mb-4">
              明星产品
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900">
              精选产品系列
            </h2>
          </div>
          <Link
            to="/products"
            className="inline-flex items-center text-[#0066ff] font-semibold hover:text-[#0055dd] transition-colors group mt-4 md:mt-0"
          >
            查看全部产品
            <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => {
            const series = seriesLabels[product.series] || { name: 'Other', color: 'bg-gray-500' };
            return (
              <Link
                key={product.id}
                to={`/products`}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="relative h-48 bg-gradient-to-br from-[#0a1628] to-[#0f2744] flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0066ff]/20 to-transparent" />
                  <div className="w-24 h-24 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-3xl font-bold text-white/80">{product.model.slice(0, 4)}</span>
                  </div>
                  <span className={`absolute top-4 right-4 px-3 py-1 ${series.color} text-white text-xs font-semibold rounded-full`}>
                    {series.name}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-[#0066ff] transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-500 text-sm mb-4">{product.shortDesc}</p>
                  <div className="flex flex-wrap gap-2">
                    {product.applications.slice(0, 3).map((app, i) => (
                      <span key={i} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
