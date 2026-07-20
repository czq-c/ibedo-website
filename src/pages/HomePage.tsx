import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import SiteGallery from "@/components/home/SiteGallery";
import BusinessOverview from "@/components/home/BusinessOverview";
import Applications from "@/components/home/Applications";
import ProductsPreview from "@/components/home/ProductsPreview";
import NewsTicker from "@/components/home/NewsTicker";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <Layout>
      <Hero />
      <SiteGallery />
      <BusinessOverview />
      <Applications />
      <ProductsPreview />
      <NewsTicker />

      <section className="bg-gradient-to-b from-primary-50 via-white to-accent-50 py-20 md:py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-2xl font-semibold text-slate-900 md:text-3xl">
            需要方案选型或样品支持？
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm text-slate-600 md:text-base">留下需求与联系方式，我们会尽快与您对接。</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Link
              to="/contact"
              className="inline-flex rounded-full bg-xzh-mint px-8 py-3.5 text-sm font-semibold text-xzh-night transition hover:bg-xzh-mint-bright"
            >
              联系鑫正辉
            </Link>
            <Link
              to="/support"
              className="inline-flex rounded-full border border-slate-200 bg-white px-8 py-3.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              技术支持
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
