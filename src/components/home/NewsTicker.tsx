import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { news } from "@/data/mockData";

export default function NewsTicker() {
  return (
    <section className="border-t border-slate-100 bg-white py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col gap-12 lg:flex-row">
          <div className="lg:w-1/4">
            <span className="mb-3 inline-block rounded-full bg-xzh-mint/10 px-4 py-1 text-xs font-medium text-teal-800">
              最新动态
            </span>
            <h2 className="font-display text-2xl font-semibold text-slate-900 md:text-3xl">新闻资讯</h2>
            <p className="mb-6 mt-3 text-sm text-slate-500">
              了解鑫正辉科技的产品发布、技术进展与合作动态。
            </p>
            <Link
              to="/about"
              className="group inline-flex items-center text-sm font-semibold text-teal-700 transition hover:text-teal-600"
            >
              了解更多
              <ArrowRight size={18} className="ml-1.5 transition group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div className="lg:w-3/4">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {news.slice(0, 4).map((item) => (
                <div
                  key={item.id}
                  className="group rounded-xl border border-slate-100 bg-slate-50/80 p-6 transition hover:border-teal-100 hover:bg-teal-50/30"
                >
                  <div className="mb-3 flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-xzh-mint/10 px-3 py-0.5 text-xs font-medium text-teal-800">
                      {item.category}
                    </span>
                    <span className="text-xs text-slate-400">{item.date}</span>
                  </div>
                  <h3 className="line-clamp-2 font-semibold text-slate-900 transition group-hover:text-teal-800">
                    {item.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm text-slate-500">{item.summary}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
