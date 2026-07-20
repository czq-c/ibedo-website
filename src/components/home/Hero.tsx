import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";
import { companyInfo } from "@/data/mockData";
import { siteContent } from "@/data/siteContent";
import { getHeroBackground } from "@/lib/siteMedia";

export default function Hero() {
  const handleScrollToFeatures = () => {
    const featuresSection = document.getElementById("features");
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const heroBg = getHeroBackground();
  const { brand } = siteContent;

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary-50 via-white to-accent-50" />
      {heroBg ? (
        <div className="absolute inset-0">
          <img
            src={heroBg}
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-[0.14]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/70 to-white/95" />
        </div>
      ) : null}

      <div
        className="pointer-events-none absolute -left-32 top-1/3 h-[28rem] w-[28rem] rounded-full bg-xzh-mint/10 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-1/4 h-[22rem] w-[22rem] rounded-full bg-xzh-mint-bright/5 blur-3xl"
        aria-hidden
      />

      <div className="relative container mx-auto px-6 py-28 sm:py-32">
        <div className="mx-auto max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-1.5 text-xs font-medium text-primary-700 backdrop-blur-sm sm:text-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-primary-500" />
                {brand.experienceBadge}
              </div>

              <h1 className="font-display text-4xl font-semibold leading-[1.15] tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-7xl">
                {brand.slogan.split("·")[0]}
                <span className="text-primary-600">·</span>
                <span className="block text-3xl font-medium text-slate-700 sm:text-4xl md:text-5xl">
                  {brand.slogan.split("·")[1] ?? "感智未来"}
                </span>
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
                <span className="text-slate-900">{brand.fullLegalName}</span>
                <span className="text-slate-400"> — </span>
                {brand.tagline}
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4 lg:justify-start">
                <Link
                  to="/products"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-xzh-mint px-8 py-3.5 text-sm font-semibold text-xzh-night shadow-lg shadow-xzh-mint/15 transition hover:bg-xzh-mint-bright"
                >
                  产品中心
                  <ArrowRight size={18} className="transition group-hover:translate-x-0.5" />
                </Link>
                <Link
                  to="/solutions"
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/70 px-8 py-3.5 text-sm font-semibold text-slate-700 backdrop-blur-sm transition hover:border-slate-300 hover:bg-white"
                >
                  解决方案
                </Link>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-xzh-mint/20 to-xzh-mint-bright/20 rounded-3xl blur-2xl" />
                <img
                  src="/site-media/gallery/hero-bg.webp"
                  alt="TOF智能感知技术"
                  className="relative w-full max-w-md rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-2 gap-8 border-t border-slate-200 pt-12 md:grid-cols-4">
            {[
              { value: companyInfo.founded.toString(), label: "成立年份" },
              { value: `${companyInfo.rdTeam}+`, label: "研发与算法" },
              { value: `${companyInfo.patents}+`, label: "专利布局" },
              { value: `${companyInfo.employees}+`, label: "团队规模" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-semibold text-slate-900 md:text-3xl">{stat.value}</div>
                <div className="mt-1 text-xs text-slate-500 sm:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={handleScrollToFeatures}
          className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center text-slate-500 transition hover:text-slate-700"
        >
          <span className="mb-1 text-xs">向下浏览</span>
          <ChevronDown className="h-5 w-5 animate-bounce" />
        </button>
      </div>
    </section>
  );
}
