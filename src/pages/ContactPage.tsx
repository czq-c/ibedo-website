import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";

export default function ContactPage() {
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
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', company: '', email: '', phone: '', type: 'product', message: '' });
    }, 3000);
  };

  return (
    <Layout>
      <section className="pt-32 pb-16 bg-gradient-to-br from-[#0a1628] via-[#0f2744] to-[#0a1628]">
        <div className="container mx-auto px-6 text-center">
          <span className="inline-block px-4 py-1 bg-[#0066ff]/20 text-[#00d4ff] text-sm font-medium rounded-full mb-4">
            联系我们
          </span>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6">
            业务咨询
          </h1>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto">
            无论是产品咨询、技术支持还是商务合作，我们都期待与您交流
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">发送咨询</h2>

                {isSubmitted ? (
                  <div className="text-center py-16">
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#00d4ff]/10 flex items-center justify-center">
                      <CheckCircle className="w-10 h-10 text-[#00d4ff]" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">提交成功！</h3>
                    <p className="text-gray-600">
                      感谢您的咨询，我们的团队将在24小时内与您联系。
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          姓名 <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0066ff] focus:ring-2 focus:ring-[#0066ff]/20 outline-none transition-all"
                          placeholder="请输入您的姓名"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          公司名称
                        </label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0066ff] focus:ring-2 focus:ring-[#0066ff]/20 outline-none transition-all"
                          placeholder="请输入公司名称"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          邮箱 <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0066ff] focus:ring-2 focus:ring-[#0066ff]/20 outline-none transition-all"
                          placeholder="请输入邮箱地址"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          电话
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0066ff] focus:ring-2 focus:ring-[#0066ff]/20 outline-none transition-all"
                          placeholder="请输入电话号码"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        咨询类型
                      </label>
                      <select
                        value={formData.type}
                        onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0066ff] focus:ring-2 focus:ring-[#0066ff]/20 outline-none transition-all bg-white"
                      >
                        <option value="product">产品咨询</option>
                        <option value="solution">解决方案</option>
                        <option value="support">技术支持</option>
                        <option value="business">商务合作</option>
                        <option value="other">其他</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        留言内容 <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0066ff] focus:ring-2 focus:ring-[#0066ff]/20 outline-none transition-all resize-none"
                        placeholder="请详细描述您的需求..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 bg-gradient-to-r from-[#0066ff] to-[#00d4ff] text-white font-semibold rounded-xl hover:shadow-lg transition-all flex items-center justify-center gap-2"
                    >
                      <Send size={20} />
                      提交咨询
                    </button>
                  </form>
                )}
              </div>
            </div>

            <div>
              <div className="bg-white rounded-2xl p-8 shadow-sm mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">联系方式</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#0066ff]/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-[#0066ff]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">公司地址</h4>
                      <p className="text-gray-600 text-sm">
                        深圳市龙华区大浪街道上横朗社区上横朗第四工业区7号302
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#00d4ff]/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-[#00d4ff]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">业务电话</h4>
                      <p className="text-gray-600">+86-0755-21030400</p>
                      <p className="text-gray-600">13826593565</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#8844ff]/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-[#8844ff]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">电子邮箱</h4>
                      <p className="text-gray-600">simon@ibedo.com.cn</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#ff6b35]/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-[#ff6b35]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">工作时间</h4>
                      <p className="text-gray-600">周一至周五 9:00 - 18:00</p>
                      <p className="text-gray-500 text-sm">节假日除外</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-100 rounded-2xl p-4 h-64 flex items-center justify-center">
                <span className="text-gray-400">地图加载中...</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
