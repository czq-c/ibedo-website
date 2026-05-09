import { Link } from "react-router-dom";
import { Radar, Layers, Scan, Camera, Thermometer, Zap } from "lucide-react";

const technologies = [
  {
    icon: Radar,
    title: 'DTOF直接飞行时间',
    desc: 'SPAD技术，高精度远距离测距',
    color: 'from-[#0066ff] to-[#00d4ff]',
  },
  {
    icon: Layers,
    title: 'ITOF间接飞行时间',
    desc: '大视场角，高帧率深度感知',
    color: 'from-[#00d4ff] to-[#00ff88]',
  },
  {
    icon: Scan,
    title: '结构光',
    desc: '高精度3D重建，活体检测',
    color: 'from-[#0066ff] to-[#8844ff]',
  },
  {
    icon: Camera,
    title: 'Camera摄像头',
    desc: 'HD到50M像素，全场景覆盖',
    color: 'from-[#ff6600] to-[#ff0066]',
  },
  {
    icon: Thermometer,
    title: '热成像',
    desc: '-20℃~650℃测温范围',
    color: 'from-[#ff3366] to-[#ff0066]',
  },
  {
    icon: Zap,
    title: 'VCSEL封装',
    desc: '0.5W-16W功率可选',
    color: 'from-[#ffcc00] to-[#ff6600]',
  },
];

export default function BusinessOverview() {
  return (
    <section id="features" className="py-24 bg-[#0a1628]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-[#0066ff]/20 text-[#00d4ff] text-sm font-medium rounded-full mb-4">
            核心技术
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            六大技术路线
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            覆盖从芯片到模组的完整技术链条，为多行业提供定制化光学感知解决方案
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-[#0066ff]/50 transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${tech.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{tech.title}</h3>
                <p className="text-gray-400">{tech.desc}</p>
                <Link
                  to="/products"
                  className="inline-flex items-center text-[#00d4ff] text-sm font-medium mt-4 opacity-0 group-hover:opacity-100 transition-opacity"
                >
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
