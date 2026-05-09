import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { products } from "@/data/mockData";
import { ArrowLeft, Download, CheckCircle, Radar, Layers, Scan, Camera, Thermometer, Zap } from "lucide-react";
import type { ProductSeries } from "@/types";

const seriesConfig: Record<ProductSeries, { name: string; icon: React.ElementType; color: string; bgColor: string }> = {
  'dtof': { name: 'DTOF激光测距', icon: Radar, color: 'text-[#0066ff]', bgColor: 'bg-[#0066ff]' },
  'itof': { name: 'ITOF深度相机', icon: Layers, color: 'text-[#00d4ff]', bgColor: 'bg-[#00d4ff]' },
  'structured-light': { name: '结构光相机', icon: Scan, color: 'text-[#8844ff]', bgColor: 'bg-[#8844ff]' },
  'camera': { name: '摄像头模组', icon: Camera, color: 'text-[#ff6600]', bgColor: 'bg-[#ff6600]' },
  'thermal': { name: '热成像相机', icon: Thermometer, color: 'text-[#ff3366]', bgColor: 'bg-[#ff3366]' },
  'vcsels': { name: 'VCSEL封装', icon: Zap, color: 'text-[#ffcc00]', bgColor: 'bg-[#ffcc00]' },
};

export default function ProductDetailPage() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  
  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto px-6 py-32 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">产品未找到</h1>
          <Link to="/products" className="text-[#0066ff] hover:underline">
            返回产品中心
          </Link>
        </div>
      </Layout>
    );
  }

  const config = seriesConfig[product.series];
  const Icon = config.icon;

  return (
    <Layout>
      <section className="pt-32 pb-8 bg-gradient-to-br from-[#0a1628] via-[#0f2744] to-[#0a1628]">
        <div className="container mx-auto px-6">
          <Link
            to="/products"
            className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft size={20} className="mr-2" />
            返回产品中心
          </Link>
          <div className="flex flex-col lg:flex-row items-start gap-8">
            <div className="w-full lg:w-1/3">
              <div className="aspect-square bg-gradient-to-br from-[#0a1628] to-[#0f2744] rounded-2xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0066ff]/20 to-transparent" />
                <div className="w-40 h-40 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                  <span className="text-6xl font-bold text-white/80">{product.model.slice(0, 4)}</span>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-white text-sm font-medium ${config.bgColor}`}>
                <Icon size={14} className="mr-1" />
                {config.name}
              </span>
              <h1 className="text-4xl font-bold text-white mt-4 mb-2">{product.name}</h1>
              <p className="text-2xl text-[#00d4ff] font-medium mb-4">{product.model}</p>
              <p className="text-gray-300 text-lg mb-6">{product.shortDesc}</p>
              <p className="text-gray-400 leading-relaxed mb-8">{product.description}</p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="px-6 py-3 bg-gradient-to-r from-[#0066ff] to-[#00d4ff] text-white font-semibold rounded-full hover:shadow-lg transition-all"
                >
                  获取报价
                </Link>
                <button className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full transition-colors flex items-center gap-2">
                  <Download size={18} />
                  下载规格书
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">产品规格参数</h2>
              <div className="bg-gray-50 rounded-2xl overflow-hidden">
                <table className="w-full">
                  <tbody>
                    {Object.entries(product.specs).map(([key, value], index) => (
                      <tr
                        key={key}
                        className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
                      >
                        <td className="px-6 py-4 text-sm font-medium text-gray-500 border-b border-gray-100">
                          {key}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900 border-b border-gray-100">
                          {value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">产品特点</h2>
              <div className="space-y-4 mb-8">
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#00d4ff]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle size={14} className="text-[#00d4ff]" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">应用领域</h2>
              <div className="flex flex-wrap gap-2 mb-8">
                {product.applications.map((app, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-[#0066ff]/10 text-[#0066ff] text-sm rounded-full"
                  >
                    {app}
                  </span>
                ))}
              </div>

              <div className="bg-gradient-to-br from-[#0a1628] to-[#0f2744] rounded-2xl p-6">
                <h3 className="text-lg font-bold text-white mb-4">需要技术支持？</h3>
                <p className="text-gray-300 text-sm mb-4">
                  我们的技术团队可以为您提供产品选型、技术支持和定制化方案。
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center w-full px-4 py-3 bg-gradient-to-r from-[#0066ff] to-[#00d4ff] text-white font-semibold rounded-xl hover:shadow-lg transition-all"
                >
                  联系我们
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">相关产品</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products
              .filter(p => p.series === product.series && p.id !== product.id)
              .slice(0, 3)
              .map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  to={`/products/${relatedProduct.id}`}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-gray-100"
                >
                  <p className="text-[#0066ff] font-medium mb-2">{relatedProduct.model}</p>
                  <h3 className="font-bold text-gray-900 mb-2">{relatedProduct.name}</h3>
                  <p className="text-gray-500 text-sm">{relatedProduct.shortDesc}</p>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
