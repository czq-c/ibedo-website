import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";
import { companyInfo } from "@/data/mockData";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#0f2744] to-[#0a1628]" />
      
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0066ff]/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#00d4ff]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0066ff]/10 rounded-full blur-3xl" />
      </div>

      <div className="absolute inset-0">
        <svg className="w-full h-full opacity-20" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#00d4ff" strokeWidth="0.5" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative container mx-auto px-6 py-32 text-center">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center px-5 py-2 bg-[#0066ff]/20 backdrop-blur-sm border border-[#0066ff]/30 rounded-full mb-8">
            <span className="w-2 h-2 bg-[#00d4ff] rounded-full mr-3 animate-pulse" />
            <span className="text-[#00d4ff] text-sm font-medium tracking-wide">
              专注精密光学设计 12年
            </span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-[#00d4ff] to-white bg-clip-text text-transparent">
              精密光学
            </span>
            <br />
            <span className="text-4xl md:text-5xl lg:text-6xl">感智未来</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            以精密光学设计为核心，提供激光TOF、结构光、双目视觉、摄像头产品解决方案
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              to="/products"
              className="group px-8 py-4 bg-gradient-to-r from-[#0066ff] to-[#00d4ff] text-white font-semibold rounded-full transition-all duration-300 flex items-center shadow-lg shadow-[#0066ff]/30 hover:shadow-xl hover:shadow-[#0066ff]/40 hover:scale-105"
            >
              探索产品中心
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/solutions"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full backdrop-blur-sm transition-all duration-300 border border-white/20"
            >
              解决方案
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { value: companyInfo.founded.toString(), label: '成立年份' },
              { value: companyInfo.rdTeam.toString(), label: '研发团队' },
              { value: companyInfo.patents.toString(), label: '专利技术' },
              { value: companyInfo.employees.toString(), label: '员工规模' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <Link 
          to="#features" 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-gray-400 hover:text-white transition-colors"
        >
          <span className="text-sm mb-2">了解更多</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </Link>
      </div>
    </section>
  );
}
