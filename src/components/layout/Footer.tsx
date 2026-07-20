import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-gradient-to-b from-primary-50 via-white to-accent-50 text-slate-600">
      <div className="container mx-auto px-6 py-14">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link to="/" className="mb-5 flex items-center gap-3">
              <img 
                src="/site-media/ibedo-logo.png" 
                alt="IBEDO Logo" 
                className="h-10 w-auto"
              />
              <div className="flex flex-col leading-tight">
                <span className="font-display text-base font-semibold text-slate-900">
                  鑫正辉科技
                </span>
                <span className="text-[0.65rem] font-medium uppercase tracking-[0.2em] text-primary-600">
                  iBEDO
                </span>
              </div>
            </Link>
            <p className="mb-6 max-w-md text-sm leading-relaxed text-slate-600">
              {t("about.slogan")}
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-xs text-slate-600 transition hover:bg-primary-50 hover:text-primary-700"
              >
                微
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-xs text-slate-600 transition hover:bg-primary-50 hover:text-primary-700"
              >
                讯
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-xs text-slate-600 transition hover:bg-primary-50 hover:text-primary-700"
              >
                知
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold tracking-wide text-slate-900">{t("footer.quickLinks")}</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { path: "/", label: t("common.home") },
                { path: "/about", label: t("common.about") },
                { path: "/products", label: t("common.products") },
                { path: "/solutions", label: t("common.solutions") },
                { path: "/cases", label: t("common.cases") },
                { path: "/support", label: t("common.support") },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="transition-colors hover:text-primary-700"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold tracking-wide text-slate-900">{t("contact.infoTitle")}</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin size={17} className="mt-0.5 shrink-0 text-primary-600" />
                <span>{t("contact.addressText")}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={17} className="shrink-0 text-primary-600" />
                <span>+86-0755-21030400</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={17} className="shrink-0 text-primary-600" />
                <span>13826593565</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={17} className="shrink-0 text-primary-600" />
                <span>simon@ibedo.com.cn</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-200/70 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-xs text-slate-500 md:flex-row">
            <p>
              {t("footer.copyright", { year: new Date().getFullYear() })}
            </p>
            <div className="flex gap-6">
              <a href="#" className="transition-colors hover:text-primary-700">
                Privacy Policy
              </a>
              <a href="#" className="transition-colors hover:text-primary-700">
                Terms of Service
              </a>
              <a href="#" className="transition-colors hover:text-primary-700">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
