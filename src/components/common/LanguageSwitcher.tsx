import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
  };

  return (
    <div className="relative group">
      <button className="flex items-center gap-2 px-3 py-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-all">
        <Globe size={16} />
        <span className="text-sm font-medium">
          {i18n.language === 'zh' ? '中文' : 'EN'}
        </span>
      </button>

      <div className="absolute right-0 top-full mt-2 w-32 bg-white border border-slate-200 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        <div className="py-2">
          <button
            onClick={() => changeLanguage('zh')}
            className={`w-full px-4 py-2 text-left text-sm hover:bg-slate-50 transition-colors ${
              i18n.language === 'zh' ? 'text-primary-700' : 'text-slate-700'
            }`}
          >
            🇨🇳 中文
          </button>
          <button
            onClick={() => changeLanguage('en')}
            className={`w-full px-4 py-2 text-left text-sm hover:bg-slate-50 transition-colors ${
              i18n.language === 'en' ? 'text-primary-700' : 'text-slate-700'
            }`}
          >
            🇺🇸 English
          </button>
        </div>
      </div>
    </div>
  );
}
