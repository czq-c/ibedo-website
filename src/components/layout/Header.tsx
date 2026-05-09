import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navItems = [
  { path: "/", label: "首页" },
  { path: "/about", label: "关于我们" },
  { path: "/products", label: "产品中心" },
  { path: "/solutions", label: "解决方案" },
  { path: "/cases", label: "成功案例" },
  { path: "/support", label: "技术支持" },
  { path: "/contact", label: "联系我们" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a1628]/95 backdrop-blur-md border-b border-white/10">
      <nav className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-3">
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

          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  location.pathname === item.path
                    ? "text-[#00d4ff]"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <Link
            to="/contact"
            className="hidden lg:inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-[#0066ff] to-[#00d4ff] text-white text-sm font-semibold rounded-full hover:shadow-lg hover:shadow-[#0066ff]/30 transition-all duration-300"
          >
            业务咨询
          </Link>

          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden py-6 border-t border-white/10">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-base font-medium py-2 transition-colors ${
                    location.pathname === item.path
                      ? "text-[#00d4ff]"
                      : "text-gray-300"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-5 py-2.5 bg-gradient-to-r from-[#0066ff] to-[#00d4ff] text-white font-semibold rounded-full mt-2"
                onClick={() => setIsOpen(false)}
              >
                业务咨询
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
