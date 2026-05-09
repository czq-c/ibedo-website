import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { news } from "@/data/mockData";

export default function NewsTicker() {
  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/4">
            <span className="inline-block px-4 py-1 bg-[#0066ff]/10 text-[#0066ff] text-sm font-medium rounded-full mb-4">
              最新动态
            </span>
            <h2 className="font-display text-3xl font-bold text-gray-900 mb-4">
              新闻资讯
            </h2>
            <p className="text-gray-500 mb-6">
              了解iBEDO最新产品发布、技术突破和行业合作动态
            </p>
            <Link
              to="/news"
              className="inline-flex items-center text-[#0066ff] font-semibold hover:text-[#0055dd] transition-colors group"
            >
              查看全部新闻
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="lg:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {news.slice(0, 4).map((item) => (
                <Link
                  key={item.id}
                  to="/news"
                  className="group bg-gray-50 rounded-xl p-6 hover:bg-[#0066ff]/5 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-[#00d4ff]/10 text-[#00d4ff] text-xs font-medium rounded-full">
                      {item.category}
                    </span>
                    <span className="text-gray-400 text-sm">{item.date}</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-[#0066ff] transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm mt-2 line-clamp-2">{item.summary}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
