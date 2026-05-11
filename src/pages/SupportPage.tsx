import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { supportDocs } from "@/data/mockData";
import type { SupportDoc } from "@/types";
import { FileText, Download, Book, Code, HelpCircle, ChevronDown } from "lucide-react";

const categoryConfig = {
  manual: { name: "产品手册", icon: FileText, color: "text-[#0066ff]", bgColor: "bg-[#0066ff]/10" },
  sdk: { name: "SDK下载", icon: Download, color: "text-[#00d4ff]", bgColor: "bg-[#00d4ff]/10" },
  api: { name: "API文档", icon: Code, color: "text-[#8844ff]", bgColor: "bg-[#8844ff]/10" },
  faq: { name: "常见问题", icon: HelpCircle, color: "text-[#ff6b35]", bgColor: "bg-[#ff6b35]/10" },
};

function isReadyDownloadUrl(url: string | undefined): url is string {
  return !!url && url !== "#" && url.trim().length > 0;
}

function SupportDocRow({
  doc,
  categoryKey,
}: {
  doc: SupportDoc;
  categoryKey: keyof typeof categoryConfig;
}) {
  const config = categoryConfig[categoryKey];
  const Icon = config.icon;
  const ready = isReadyDownloadUrl(doc.downloadUrl);

  const inner = (
    <>
      <div className={`w-12 h-12 rounded-xl ${config.bgColor} flex items-center justify-center`}>
        <Icon className={`w-6 h-6 ${config.color}`} />
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="font-semibold text-gray-900 group-hover:text-[#0066ff] transition-colors">
          {doc.title}
        </h4>
        <p className="text-sm text-gray-500">{doc.description}</p>
        {!ready && (
          <p className="text-xs text-amber-700/90 mt-1">文档尚未上传，请邮件联系技术支持获取</p>
        )}
      </div>
      {ready ? (
        <Download className="w-5 h-5 text-gray-400 group-hover:text-[#0066ff] transition-colors flex-shrink-0" />
      ) : (
        <span className="text-xs text-gray-400 flex-shrink-0 whitespace-nowrap">敬请期待</span>
      )}
    </>
  );

  const className =
    "flex items-center gap-4 p-4 bg-gray-50 rounded-xl transition-colors group " +
    (ready ? "hover:bg-gray-100 cursor-pointer" : "cursor-default opacity-95");

  if (ready) {
    return (
      <a href={doc.downloadUrl} target="_blank" rel="noopener noreferrer" className={className}>
        {inner}
      </a>
    );
  }

  return <div className={className}>{inner}</div>;
}

const faqs = [
  {
    q: '如何选择合适的TOF模组？',
    a: '选择TOF模组主要考虑以下因素：测距范围、精度要求、视场角(FOV)、接口类型和工作环境。DTOF适合长距离和高精度应用，ITOF适合大视场角场景。具体选型可咨询我们的技术支持团队。',
  },
  {
    q: '产品的工作温度范围是多少？',
    a: '我们的标准产品工作温度范围为-20°C到70°C。工业级产品可达-40°C到85°C。特殊温度需求可定制。',
  },
  {
    q: '是否提供SDK和技术支持？',
    a: '是的，我们提供完整的SDK支持Windows、Linux、Android和ROS平台。同时提供技术文档、开发示例和在线技术支持。',
  },
  {
    q: '最小起订量是多少？',
    a: '不同产品系列的最小起订量不同，标准产品MOQ为100pcs，定制产品MOQ为1000pcs。具体请咨询销售团队。',
  },
  {
    q: '产品交付周期是多久？',
    a: '标准产品交付周期为2-4周，定制产品根据需求不同为4-8周。我们有充足的库存支持快速交付。',
  },
  {
    q: '如何获取产品的RoHS和REACH认证？',
    a: '产品RoHS和REACH认证报告可在技术支持页面下载，也可联系我们的销售团队获取。',
  },
];

export default function SupportPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const groupedDocs = {
    manual: supportDocs.filter(d => d.category === 'manual'),
    sdk: supportDocs.filter(d => d.category === 'sdk'),
    api: supportDocs.filter(d => d.category === 'api'),
    faq: supportDocs.filter(d => d.category === 'faq'),
  };

  return (
    <Layout>
      <section className="pt-32 pb-16 bg-gradient-to-br from-[#0a1628] via-[#0f2744] to-[#0a1628]">
        <div className="container mx-auto px-6 text-center">
          <span className="inline-block px-4 py-1 bg-[#0066ff]/20 text-[#00d4ff] text-sm font-medium rounded-full mb-4">
            技术支持
          </span>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6">
            技术支持中心
          </h1>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto">
            全面的技术文档、SDK下载和专业的技术支持服务
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {[
              { icon: Book, title: '技术文档', desc: '完整的产品手册和技术规格书', count: groupedDocs.manual.length },
              { icon: Download, title: '开发工具', desc: 'SDK、开发板和调试工具', count: groupedDocs.sdk.length },
              { icon: HelpCircle, title: '技术支持', desc: '7×24小时在线技术支持', count: null },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="bg-gray-50 rounded-2xl p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-[#0066ff] to-[#00d4ff] flex items-center justify-center">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-500 mb-4">{item.desc}</p>
                  {item.count !== null && (
                    <span className="inline-block px-4 py-1 bg-[#0066ff]/10 text-[#0066ff] text-sm font-medium rounded-full">
                      {item.count} 个文件
                    </span>
                  )}
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">产品手册</h2>
              <div className="space-y-4">
                {groupedDocs.manual.map((doc) => (
                  <SupportDocRow key={doc.id} doc={doc} categoryKey="manual" />
                ))}
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12">SDK & API文档</h2>
              <div className="space-y-4">
                {[...groupedDocs.sdk, ...groupedDocs.api].map((doc) => (
                  <SupportDocRow
                    key={doc.id}
                    doc={doc}
                    categoryKey={doc.category === "sdk" ? "sdk" : "api"}
                  />
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">常见问题</h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-xl overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full flex items-center justify-between p-6 text-left"
                    >
                      <span className="font-semibold text-gray-900 pr-4">{faq.q}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${
                          openFaq === index ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {openFaq === index && (
                      <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-12 bg-gradient-to-br from-[#0a1628] to-[#0f2744] rounded-2xl p-8 text-center">
                <h3 className="text-xl font-bold text-white mb-4">需要更多帮助？</h3>
                <p className="text-gray-300 mb-6">
                  我们的技术支持团队随时为您解答技术问题
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="tel:+86-0755-21030400"
                    className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-full transition-colors"
                  >
                    电话咨询
                  </a>
                  <a
                    href="mailto:simon@ibedo.com.cn"
                    className="px-6 py-3 bg-gradient-to-r from-[#0066ff] to-[#00d4ff] text-white font-medium rounded-full hover:shadow-lg transition-all"
                  >
                    邮件联系
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
