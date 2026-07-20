import { Plane, Lock, Bot, Home, Car, Factory, CreditCard, Shield } from "lucide-react";

const icons: Record<string, React.ElementType> = {
  Plane,
  Lock,
  Bot,
  Home,
  Car,
  Factory,
  CreditCard,
  Shield,
};

const applications = [
  { name: "无人机", icon: "Plane" },
  { name: "智能门锁", icon: "Lock" },
  { name: "服务机器人", icon: "Bot" },
  { name: "智能家居", icon: "Home" },
  { name: "汽车智能", icon: "Car" },
  { name: "工业自动化", icon: "Factory" },
  { name: "金融支付", icon: "CreditCard" },
  { name: "安防监控", icon: "Shield" },
];

export default function Applications() {
  return (
    <section className="border-t border-slate-200 bg-gradient-to-b from-white via-primary-50 to-white py-24">
      <div className="container mx-auto px-6">
        <div className="mb-14 text-center">
          <span className="mb-3 inline-block rounded-full border border-xzh-mint/25 bg-xzh-mint/10 px-4 py-1 text-xs font-medium text-xzh-mint-bright">
            应用领域
          </span>
          <h2 className="font-display text-3xl font-semibold text-slate-900 md:text-4xl">
            多行业覆盖
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
          {applications.map((app) => {
            const Icon = icons[app.icon] || Bot;
            return (
              <div
                key={app.name}
                className="group rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition hover:border-primary-200 hover:shadow-lg md:p-8"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary-100 text-primary-700 ring-1 ring-primary-200 transition group-hover:bg-primary-200 md:h-16 md:w-16">
                  <Icon className="h-7 w-7 md:h-8 md:w-8" strokeWidth={1.75} />
                </div>
                <h3 className="text-sm font-semibold text-slate-900 md:text-base">{app.name}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
