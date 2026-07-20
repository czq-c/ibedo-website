import { Link } from "react-router-dom";
import { Radar, Layers, Scan, Camera, Thermometer, Zap } from "lucide-react";

const technologies = [
  { icon: Radar, title: "DTOF 直接飞行时间", desc: "SPAD 技术，高精度远距离测距", series: "dtof" },
  { icon: Layers, title: "ITOF 间接飞行时间", desc: "大视场角，高帧率深度感知", series: "itof" },
  { icon: Scan, title: "结构光", desc: "高精度三维重建，活体检测", series: "structured-light" },
  { icon: Camera, title: "Camera 摄像头", desc: "从高清到高像素，全场景覆盖", series: "camera" },
  { icon: Thermometer, title: "热成像", desc: "宽温区测温与热分布分析", series: "thermal" },
  { icon: Zap, title: "VCSEL 封装", desc: "多功率、多波长可定制", series: "vcsels" },
];

export default function BusinessOverview() {
  return (
    <section id="features" className="bg-gradient-to-b from-white via-slate-50 to-white py-24">
      <div className="container mx-auto px-6">
        <div className="mb-14 text-center">
          <span className="mb-3 inline-block rounded-full border border-xzh-mint/25 bg-xzh-mint/10 px-4 py-1 text-xs font-medium text-xzh-mint-bright">
            核心技术
          </span>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            技术路线
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-slate-600 md:text-base">
            从器件到模组，为多行业提供可落地的光学感知方案。
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {technologies.map((tech) => {
            const Icon = tech.icon;
            return (
              <div
                key={tech.title}
                className="group rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:border-primary-200 hover:shadow-lg"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 text-primary-700 ring-1 ring-primary-200 transition group-hover:bg-primary-200">
                  <Icon className="h-6 w-6" strokeWidth={1.75} />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-slate-900">{tech.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{tech.desc}</p>
                <Link to={`/products?series=${tech.series}`} className="mt-4 inline-flex text-sm font-medium text-primary-700 transition hover:text-primary-600">
                  查看产品 →
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
