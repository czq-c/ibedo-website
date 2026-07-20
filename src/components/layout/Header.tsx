import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "@/components/common/LanguageSwitcher";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  const navItems = [
    { path: "/", label: t("common.home") },
    { path: "/about", label: t("common.about") },
    { path: "/products", label: t("common.products") },
    { path: "/solutions", label: t("common.solutions") },
    { path: "/cases", label: t("common.cases") },
    { path: "/support", label: t("common.support") },
    { path: "/contact", label: t("common.contact") },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/70">
      <nav className="container mx-auto px-6">
        <div className="flex items-center justify-between h-[4.25rem]">
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src="/site-media/ibedo-logo.png" 
              alt="IBEDO Logo" 
              className="h-10 w-auto transition-transform group-hover:scale-105"
            />
            <div className="hidden sm:flex flex-col leading-tight">
              <span className="font-display font-semibold text-[0.95rem] text-slate-900">鑫正辉科技</span>
              <span className="text-[0.65rem] font-medium uppercase tracking-[0.2em] text-primary-600">IBEDO</span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? "text-primary-700"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <Link
              to="/contact"
              className="hidden lg:inline-flex items-center rounded-full bg-primary-600 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-500"
            >
              {t("nav.consultation")}
            </Link>
          </div>

          <button
            type="button"
            className="lg:hidden rounded-lg p-2 text-slate-700 hover:bg-slate-100"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "关闭菜单" : "打开菜单"}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {isOpen && (
          <div className="border-t border-slate-200/70 py-5 lg:hidden">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`rounded-lg px-2 py-3 text-base font-medium transition-colors ${
                    location.pathname === item.path
                      ? "text-primary-700"
                      : "text-slate-700"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-2 py-3">
                <LanguageSwitcher />
              </div>
              <Link
                to="/contact"
                className="mt-2 inline-flex items-center justify-center rounded-full bg-primary-600 py-3 text-sm font-semibold text-white"
                onClick={() => setIsOpen(false)}
              >
                {t("nav.consultation")}
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
