import { Plane, Lock, Bot, Home, Car, Factory, CreditCard, Shield } from "lucide-react";

const icons: Record<string, React.ElementType> = {
  Plane, Lock, Bot, Home, Car, Factory, CreditCard, Shield,
};

const applications = [
  { name: '无人机', icon: 'Plane' },
  { name: '智能门锁', icon: 'Lock' },
  { name: '服务机器人', icon: 'Bot' },
  { name: '智能家居', icon: 'Home' },
  { name: '汽车智能', icon: 'Car' },
  { name: '工业自动化', icon: 'Factory' },
  { name: '金融支付', icon: 'CreditCard' },
  { name: '安防监控', icon: 'Shield' },
];

export default function Applications() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#0a1628] to-[#0f2744]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-[#00d4ff]/20 text-[#00d4ff] text-sm font-medium rounded-full mb-4">
            应用领域
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            多行业深度覆盖
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            我们的产品广泛应用于消费电子、机器人、智能家居、汽车、医疗、工业等多个领域
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {applications.map((app, index) => {
            const Icon = icons[app.icon] || Bot;
            return (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:border-[#00d4ff]/50 hover:bg-[#00d4ff]/10 transition-all duration-300 cursor-pointer"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-[#0066ff] to-[#00d4ff] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">{app.name}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
