import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function ContactPage() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    type: 'product',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // 存储咨询数据到 localStorage
    const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
    const newSubmission = {
      id: Date.now(),
      ...formData,
      timestamp: new Date().toISOString(),
      language: localStorage.getItem('language') || 'zh',
    };
    submissions.push(newSubmission);
    localStorage.setItem('contactSubmissions', JSON.stringify(submissions));
    
    console.log('咨询数据已保存:', newSubmission);
    
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', company: '', email: '', phone: '', type: 'product', message: '' });
    }, 3000);
  };

  return (
    <Layout>
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary-50 via-white to-accent-50">
        <div className="container mx-auto px-6 text-center">
          <span className="inline-block px-4 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full mb-4">
            {t("common.contact")}
          </span>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            {t("contact.title")}
          </h1>
          <p className="text-slate-600 text-xl max-w-3xl mx-auto">
            {t("contact.subtitle")}
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">{t("contact.formTitle")}</h2>

                {isSubmitted ? (
                  <div className="text-center py-16">
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#00d4ff]/10 flex items-center justify-center">
                      <CheckCircle className="w-10 h-10 text-[#00d4ff]" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{t("contact.successTitle")}</h3>
                    <p className="text-gray-600">
                      {t("contact.successMessage")}
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          {t("contact.name")} <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0066ff] focus:ring-2 focus:ring-[#0066ff]/20 outline-none transition-all"
                          placeholder={t("contact.namePlaceholder")}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          {t("contact.company")}
                        </label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0066ff] focus:ring-2 focus:ring-[#0066ff]/20 outline-none transition-all"
                          placeholder={t("contact.companyPlaceholder")}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          {t("contact.email")} <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0066ff] focus:ring-2 focus:ring-[#0066ff]/20 outline-none transition-all"
                          placeholder={t("contact.emailPlaceholder")}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          {t("contact.phone")}
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0066ff] focus:ring-2 focus:ring[#0066ff]/20 outline-none transition-all"
                          placeholder={t("contact.phonePlaceholder")}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t("contact.type")}
                      </label>
                      <select
                        value={formData.type}
                        onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0066ff] focus:ring-2 focus:ring-[#0066ff]/20 outline-none transition-all bg-white"
                      >
                        <option value="product">{t("contact.types.product")}</option>
                        <option value="solution">{t("contact.types.solution")}</option>
                        <option value="support">{t("contact.types.support")}</option>
                        <option value="business">{t("contact.types.business")}</option>
                        <option value="other">{t("contact.types.other")}</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t("contact.message")} <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0066ff] focus:ring-2 focus:ring-[#0066ff]/20 outline-none transition-all resize-none"
                        placeholder={t("contact.messagePlaceholder")}
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 bg-gradient-to-r from-[#0066ff] to-[#00d4ff] text-white font-semibold rounded-xl hover:shadow-lg transition-all flex items-center justify-center gap-2"
                    >
                      <Send size={20} />
                      {t("contact.submit")}
                    </button>
                  </form>
                )}
              </div>
            </div>

            <div>
              <div className="bg-white rounded-2xl p-8 shadow-sm mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">{t("contact.infoTitle")}</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#0066ff]/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-[#0066ff]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{t("contact.address")}</h4>
                      <p className="text-gray-600 text-sm">
                        {t("contact.addressText")}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#00d4ff]/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-[#00d4ff]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{t("contact.phoneLabel")}</h4>
                      <p className="text-gray-600">+86-0755-21030400</p>
                      <p className="text-gray-600">13826593565</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#8844ff]/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-[#8844ff]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{t("contact.emailLabel")}</h4>
                      <p className="text-gray-600">simon@ibedo.com.cn</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#ff6b35]/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-[#ff6b35]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{t("contact.workTime")}</h4>
                      <p className="text-gray-600">{t("contact.workTimeText")}</p>
                      <p className="text-gray-500 text-sm">{t("contact.holidayNote")}</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
