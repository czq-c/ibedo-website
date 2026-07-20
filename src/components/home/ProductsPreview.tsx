import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { products } from "@/data/mockData";

const featuredProducts = products.slice(0, 6);

const seriesLabels: Record<string, { name: string; color: string; bgColor: string }> = {
  dtof: { name: "DTOF", color: "text-[#0066ff]", bgColor: "bg-[#0066ff]/10" },
  itof: { name: "ITOF", color: "text-[#00d4ff]", bgColor: "bg-[#00d4ff]/10" },
  "structured-light": { name: "结构光", color: "text-[#8844ff]", bgColor: "bg-[#8844ff]/10" },
  thermal: { name: "热成像", color: "text-[#ff3366]", bgColor: "bg-[#ff3366]/10" },
  camera: { name: "Camera", color: "text-[#ff6600]", bgColor: "bg-[#ff6600]/10" },
  vcsels: { name: "VCSEL", color: "text-[#ffcc00]", bgColor: "bg-[#ffcc00]/10" },
};

export default function ProductsPreview() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="container mx-auto px-6">
        <div className="mb-12 flex flex-col items-end justify-between gap-4 md:flex-row">
          <div>
            <span className="mb-3 inline-block rounded-full bg-xzh-mint/10 px-4 py-1 text-xs font-medium text-teal-800">
              产品速览
            </span>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
              精选系列
            </h2>
          </div>
          <Link
            to="/products"
            className="group inline-flex items-center text-sm font-semibold text-teal-700 transition hover:text-teal-600"
          >
            全部产品
            <ArrowRight size={18} className="ml-1.5 transition group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((product) => {
            const series = seriesLabels[product.series] || { name: "Other", color: "text-gray-600", bgColor: "bg-gray-100" };
            return (
              <Link
                key={product.id}
                to={`/products/${product.id}`}
                className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:shadow-xl"
              >
                <div className="relative h-48 bg-white flex items-center justify-center overflow-hidden border-b border-gray-100">
                  <div className="absolute inset-0 bg-gradient-to-br from-sky-50/50 to-blue-50/30" />
                  {product.image ? (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform"
                    />
                  ) : (
                    <div className="w-24 h-24 rounded-xl bg-gradient-to-br from-sky-100 to-blue-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <span className="text-2xl font-bold text-sky-600">IBEDO</span>
                    </div>
                  )}
                  <span
                    className={`absolute right-3 top-3 rounded-full px-3 py-1 text-xs font-semibold ${series.bgColor} ${series.color}`}
                  >
                    {series.name}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="mb-1 text-lg font-semibold text-gray-900 transition group-hover:text-[#0066ff]">
                    {product.name}
                  </h3>
                  <p className="mb-1 text-sm text-gray-500 font-medium">{product.model}</p>
                  <p className="mb-3 text-sm text-gray-500">{product.shortDesc}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {product.applications.slice(0, 3).map((app) => (
                      <span key={app} className="rounded bg-gray-100 px-2 py-0.5 text-xs text-gray-600">
                        {app}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-xs text-gray-500 border-t border-gray-100 pt-3">
                    {product.range && <span>测距: {product.range}</span>}
                    {product.resolution && <span>分辨率: {product.resolution}</span>}
                    {product.wavelength && <span>波长: {product.wavelength}</span>}
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
