import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0a1628] text-gray-400">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <div className="relative w-12 h-12">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0066ff] to-[#00d4ff] rounded-lg transform rotate-45" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white font-bold text-lg -rotate-45">iB</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg text-white">
                  鑫正辉科技
                </span>
                <span className="text-xs text-[#00d4ff] tracking-wider">iBEDO</span>
              </div>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              专注于精密光学设计，以"精密光学·感智未来"为使命，为客户提供激光TOF、结构光、双目视觉、摄像头等全方位产品解决方案。
            </p>
            <div className="flex space-x-4">
              {['微', '博', '知'].map((item, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 bg-white/5 hover:bg-[#0066ff] rounded-full flex items-center justify-center transition-colors duration-300"
                >
                  <span className="text-sm">{item}</span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 text-lg">快速链接</h4>
            <ul className="space-y-3">
              {[
                { path: '/', label: '首页' },
                { path: '/about', label: '关于我们' },
                { path: '/products', label: '产品中心' },
                { path: '/solutions', label: '解决方案' },
                { path: '/cases', label: '成功案例' },
                { path: '/support', label: '技术支持' },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="hover:text-[#00d4ff] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 text-lg">联系方式</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="mt-1 flex-shrink-0 text-[#00d4ff]" />
                <span className="text-sm">深圳市龙华区大浪街道上横朗社区上横朗第四工业区7号302</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="flex-shrink-0 text-[#00d4ff]" />
                <span className="text-sm">+86-0755-21030400</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="flex-shrink-0 text-[#00d4ff]" />
                <span className="text-sm">13826593565</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="flex-shrink-0 text-[#00d4ff]" />
                <span className="text-sm">simon@ibedo.com.cn</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">
              &copy; 2024 鑫正辉科技（iBEDO）. 保留所有权利.
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <a href="#" className="hover:text-[#00d4ff] transition-colors">隐私政策</a>
              <a href="#" className="hover:text-[#00d4ff] transition-colors">使用条款</a>
              <a href="#" className="hover:text-[#00d4ff] transition-colors">网站地图</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
