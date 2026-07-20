import Layout from "@/components/layout/Layout";
import { successCases, solutions } from "@/data/mockData";
import { CheckCircle, Lightbulb, Cpu, Camera, Eye, Thermometer } from "lucide-react";
import { useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";

const categoryConfig = {
  DTOF: {
    icon: Lightbulb,
    color: "#14b8a6",
    bgColor: "bg-teal-50",
  },
  ITOF: {
    icon: Eye,
    color: "#2dd4bf",
    bgColor: "bg-teal-50",
  },
  TOF: {
    icon: Lightbulb,
    color: "#14b8a6",
    bgColor: "bg-teal-50",
  },
  Camera: {
    icon: Camera,
    color: "#ff6b35",
    bgColor: "bg-[#ff6b35]/10",
  },
  "Structured Light": {
    icon: Cpu,
    color: "#8b5cf6",
    bgColor: "bg-[#8b5cf6]/10",
  },
  Thermal: {
    icon: Thermometer,
    color: "#ef4444",
    bgColor: "bg-[#ef4444]/10",
  },
  "DTOF/ITOF": {
    icon: Lightbulb,
    color: "#14b8a6",
    bgColor: "bg-teal-50",
  },
  "Camera/Thermal": {
    icon: Camera,
    color: "#ff6b35",
    bgColor: "bg-[#ff6b35]/10",
  },
  "Camera/TOF": {
    icon: Camera,
    color: "#ff6b35",
    bgColor: "bg-[#ff6b35]/10",
  },
  "Camera/Thermal imaging": {
    icon: Camera,
    color: "#ff6b35",
    bgColor: "bg-[#ff6b35]/10",
  },
};

export default function CasesPage() {
  const [searchParams] = useSearchParams();
  const solutionId = searchParams.get("solution");

  const activeSolution = useMemo(() => {
    if (!solutionId) return undefined;
    return solutions.find((s) => s.id === solutionId);
  }, [solutionId]);

  const activeSuccessCaseIds = activeSolution?.successCaseIds;

  const visibleSuccessCases = useMemo(() => {
    if (!activeSuccessCaseIds || activeSuccessCaseIds.length === 0) return successCases;
    const idSet = new Set(activeSuccessCaseIds);
    return successCases.filter((c) => idSet.has(c.id));
  }, [activeSuccessCaseIds]);

  useEffect(() => {
    const targetId = activeSuccessCaseIds?.[0];
    if (!targetId) return;
    requestAnimationFrame(() => {
      document.getElementById(targetId)?.scrollIntoView({ block: "start" });
    });
  }, [activeSuccessCaseIds]);

  const categories = ["TOF", "Camera/Thermal imaging", "Structured Light", "Thermal"];

  return (
    <Layout>
      <section className="bg-gradient-to-br from-primary-50 via-white to-accent-50 pb-16 pt-32">
        <div className="container mx-auto px-6 text-center">
          <span className="mb-4 inline-block rounded-full border border-xzh-mint/25 bg-xzh-mint/10 px-4 py-1 text-sm font-medium text-xzh-mint-bright">
            成功案例
          </span>
          <h3 className="font-display mb-3 text-lg font-semibold text-slate-900 md:text-xl">投影仪 TOF 方案</h3>
          <h3 className="font-display mb-3 text-lg font-semibold text-slate-900 md:text-xl">
            无人机 TOF 定高方案
          </h3>
          <h3 className="font-display mb-3 text-lg font-semibold text-slate-900 md:text-xl">
            机器人 TOF 方案
          </h3>
          <h3 className="font-display mb-3 text-lg font-semibold text-slate-900 md:text-xl">
            投影仪 Camera 方案和结构光刷脸支付方案
          </h3>
          <h3 className="font-display mb-3 text-lg font-semibold text-slate-900 md:text-xl">
            仓储机器人结构光方案和工业机器人结构光方案
          </h3>
        </div>
      </section>

      {categories.map((category) => {
        const categoryCases = visibleSuccessCases.filter((c) => c.category === category);
        if (categoryCases.length === 0) return null;

        const config = categoryConfig[category as keyof typeof categoryConfig];
        const Icon = config?.icon || Lightbulb;

        return (
          <section
            key={category}
            className={`py-16 ${categories.indexOf(category) % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
          >
            <div className="container mx-auto px-6">
              <div className="mb-12 flex items-center gap-3">
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${config.bgColor}`}>
                  <Icon className="h-6 w-6" style={{ color: config.color }} />
                </div>
                <div>
                  <h2 className="font-display text-3xl font-bold text-gray-900">{category} 方案</h2>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {categoryCases.map((caseItem) => (
                  <div
                    key={caseItem.id}
                    id={caseItem.id}
                    className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all hover:shadow-xl"
                  >
                    <div className="relative h-56 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                      <img
                        src={caseItem.image}
                        alt={caseItem.title}
                        className="h-full w-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          target.nextElementSibling?.classList.remove('hidden');
                        }}
                      />
                      <div className="hidden p-6 text-center">
                        <Icon className="mx-auto mb-3 h-16 w-16 opacity-30" style={{ color: config.color }} />
                        <p className="text-sm text-gray-500">{caseItem.title}</p>
                      </div>
                      <div className="absolute right-4 top-4">
                        <span
                          className="inline-block rounded-full px-3 py-1 text-xs font-medium text-white"
                          style={{ backgroundColor: config.color }}
                        >
                          {caseItem.solution.type}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="mb-2 text-lg font-bold text-gray-900 transition group-hover:text-teal-700">
                        {caseItem.title}
                      </h3>
                      <p className="mb-4 text-sm text-gray-600">{caseItem.subtitle}</p>

                      <div className="mb-4">
                        <div className="mb-3 flex items-center gap-2">
                          <Lightbulb className="h-4 w-4" style={{ color: config.color }} />
                          <h4 className="text-sm font-semibold text-gray-900">功能</h4>
                        </div>
                        <ul className="space-y-2">
                          {caseItem.features.slice(0, 4).map((feature, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                              <CheckCircle
                                className="mt-0.5 h-4 w-4 shrink-0"
                                style={{ color: config.color }}
                              />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="border-t border-gray-100 pt-4">
                        <p className="text-xs leading-relaxed text-gray-500">{caseItem.solution.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      })}
    </Layout>
  );
}
