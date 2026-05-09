import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import BusinessOverview from "@/components/home/BusinessOverview";
import Applications from "@/components/home/Applications";
import ProductsPreview from "@/components/home/ProductsPreview";
import NewsTicker from "@/components/home/NewsTicker";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <Layout>
      <Hero />
      <BusinessOverview />
      <Applications />
      <ProductsPreview />
      <NewsTicker />

      <section className="py-24 bg-gradient-to-r from-[#0a1628] to-[#0f2744]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
            准备好开启您的智能视觉之旅了吗？
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            无论您有任何技术问题或业务需求，我们的专业团队随时为您服务
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-[#0066ff] to-[#00d4ff] text-white font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#0066ff]/30"
            >
              立即咨询
            </Link>
            <Link
              to="/support"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full backdrop-blur-sm transition-all duration-300 border border-white/20"
            >
              技术支持
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
