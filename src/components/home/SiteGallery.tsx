import { getGallery } from '@/lib/siteMedia';

export default function SiteGallery() {
  const items = getGallery();
  if (items.length === 0) return null;

  return (
    <section className="py-24 bg-white" id="gallery">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <span className="mb-3 inline-block rounded-full bg-xzh-mint/10 px-4 py-1 text-xs font-medium text-teal-800">
            影像展示
          </span>
          <h2 className="font-display mb-3 text-3xl font-semibold text-slate-900 md:text-4xl">企业应用与产品实景</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <figure
              key={`${item.src}-${index}`}
              className="group rounded-2xl overflow-hidden bg-gray-100 shadow-sm border border-gray-100"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              {item.caption ? (
                <figcaption className="px-4 py-3 text-sm text-gray-600 text-center border-t border-gray-100 bg-white">
                  {item.caption}
                </figcaption>
              ) : null}
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
