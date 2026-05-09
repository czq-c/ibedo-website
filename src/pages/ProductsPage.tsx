import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { products } from "@/data/mockData";
import { Radar, Layers, Scan, Camera, Thermometer, Zap, Filter, LayoutGrid, Table2 } from "lucide-react";
import { Link } from "react-router-dom";
import type { ProductSeries } from "@/types";

const seriesConfig: Record<ProductSeries, { name: string; icon: React.ElementType; color: string; bgColor: string }> = {
  'dtof': { name: 'DTOF激光测距', icon: Radar, color: 'text-[#0066ff]', bgColor: 'bg-[#0066ff]/10' },
  'itof': { name: 'ITOF深度相机', icon: Layers, color: 'text-[#00d4ff]', bgColor: 'bg-[#00d4ff]/10' },
  'structured-light': { name: '结构光相机', icon: Scan, color: 'text-[#8844ff]', bgColor: 'bg-[#8844ff]/10' },
  'camera': { name: '摄像头模组', icon: Camera, color: 'text-[#ff6600]', bgColor: 'bg-[#ff6600]/10' },
  'thermal': { name: '热成像相机', icon: Thermometer, color: 'text-[#ff3366]', bgColor: 'bg-[#ff3366]/10' },
  'vcsels': { name: 'VCSEL封装', icon: Zap, color: 'text-[#ffcc00]', bgColor: 'bg-[#ffcc00]/10' },
};

const tableColumns = [
  { key: 'model', label: '产品型号' },
  { key: 'name', label: '产品名称' },
  { key: 'series', label: '产品系列' },
  { key: 'range', label: '测距范围' },
  { key: 'resolution', label: '分辨率' },
  { key: 'fov', label: '视场角(FOV)' },
  { key: 'wavelength', label: '波长' },
  { key: 'applications', label: '应用领域' },
];

export default function ProductsPage() {
  const [activeSeries, setActiveSeries] = useState<ProductSeries | 'all'>('all');
  const [viewMode, setViewMode] = useState<'card' | 'table'>('card');

  const filteredProducts = activeSeries === 'all'
    ? products
    : products.filter(p => p.series === activeSeries);

  return (
    <Layout>
      <section className="pt-32 pb-16 bg-gradient-to-br from-[#0a1628] via-[#0f2744] to-[#0a1628]">
        <div className="container mx-auto px-6 text-center">
          <span className="inline-block px-4 py-1 bg-[#0066ff]/20 text-[#00d4ff] text-sm font-medium rounded-full mb-4">
            产品中心
          </span>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6">
            全系列产品矩阵
          </h1>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto">
            从芯片到模组，从测距到3D视觉，提供完整的精密光学产品解决方案
          </p>
        </div>
      </section>

      <section className="py-4 bg-white border-b border-gray-100 sticky top-20 z-40">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-center gap-4 overflow-x-auto pb-2 md:pb-0">
              <div className="flex items-center gap-2 text-gray-500 flex-shrink-0">
                <Filter size={18} />
                <span className="text-sm font-medium">筛选:</span>
              </div>
              <button
                onClick={() => setActiveSeries('all')}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  activeSeries === 'all'
                    ? 'bg-[#0066ff] text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                全部产品
              </button>
              {Object.entries(seriesConfig).map(([key, config]) => {
                const Icon = config.icon;
                return (
                  <button
                    key={key}
                    onClick={() => setActiveSeries(key as ProductSeries)}
                    className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors flex items-center gap-2 ${
                      activeSeries === key
                        ? 'bg-[#0066ff] text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    <Icon size={16} />
                    {config.name}
                  </button>
                );
              })}
            </div>

            <div className="flex items-center gap-2 flex-shrink-0">
              <span className="text-sm text-gray-500">视图:</span>
              <button
                onClick={() => setViewMode('card')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'card'
                    ? 'bg-[#0066ff] text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
                title="卡片视图"
              >
                <LayoutGrid size={18} />
              </button>
              <button
                onClick={() => setViewMode('table')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'table'
                    ? 'bg-[#0066ff] text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
                title="表格视图"
              >
                <Table2 size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-6">
          {viewMode === 'card' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => {
                const config = seriesConfig[product.series];
                const Icon = config.icon;
                return (
                  <div
                    key={product.id}
                    className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
                  >
                    <div className="relative h-56 bg-gradient-to-br from-[#0a1628] to-[#0f2744] flex items-center justify-center">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#0066ff]/10 to-transparent" />
                      <div className="w-32 h-32 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                        <span className="text-4xl font-bold text-white/80">{product.model.slice(0, 4)}</span>
                      </div>
                      <span className={`absolute top-4 right-4 px-3 py-1 ${config.bgColor} ${config.color} text-xs font-semibold rounded-full flex items-center gap-1`}>
                        <Icon size={12} />
                        {config.name}
                      </span>
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-xl text-gray-900 mb-2">{product.name}</h3>
                      <p className="text-gray-500 text-sm mb-4">{product.shortDesc}</p>
                      
                      <div className="space-y-2 mb-4">
                        {product.range && (
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-500">测距范围</span>
                            <span className="font-medium text-gray-900">{product.range}</span>
                          </div>
                        )}
                        {product.resolution && (
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-500">分辨率</span>
                            <span className="font-medium text-gray-900">{product.resolution}</span>
                          </div>
                        )}
                        {product.fov && (
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-500">视场角</span>
                            <span className="font-medium text-gray-900">{product.fov}</span>
                          </div>
                        )}
                        {product.wavelength && (
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-500">波长</span>
                            <span className="font-medium text-gray-900">{product.wavelength}</span>
                          </div>
                        )}
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {product.applications.slice(0, 3).map((app, i) => (
                          <span key={i} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                            {app}
                          </span>
                        ))}
                      </div>

                      <Link
                        to={`/products/${product.id}`}
                        className="inline-flex items-center text-[#0066ff] font-semibold text-sm hover:text-[#0055dd] transition-colors"
                      >
                        查看详情 →
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-[#0a1628] to-[#0f2744]">
                    <tr>
                      {tableColumns.map((col) => (
                        <th
                          key={col.key}
                          className="px-6 py-4 text-left text-sm font-semibold text-white whitespace-nowrap"
                        >
                          {col.label}
                        </th>
                      ))}
                      <th className="px-6 py-4 text-left text-sm font-semibold text-white">
                        操作
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {filteredProducts.map((product, index) => {
                      const config = seriesConfig[product.series];
                      return (
                        <tr
                          key={product.id}
                          className={`hover:bg-gray-50 transition-colors ${
                            index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
                          }`}
                        >
                          <td className="px-6 py-4 text-sm font-medium text-[#0066ff] whitespace-nowrap">
                            {product.model}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">
                            {product.name}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium ${config.bgColor} ${config.color}`}>
                              {config.name}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-700 whitespace-nowrap">
                            {product.range || '-'}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-700 whitespace-nowrap">
                            {product.resolution || '-'}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-700 whitespace-nowrap">
                            {product.fov || '-'}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-700 whitespace-nowrap">
                            {product.wavelength || '-'}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-500 max-w-xs">
                            <div className="flex flex-wrap gap-1">
                              {product.applications.slice(0, 2).map((app, i) => (
                                <span key={i} className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded">
                                  {app}
                                </span>
                              ))}
                              {product.applications.length > 2 && (
                                <span className="text-xs text-gray-400">+{product.applications.length - 2}</span>
                              )}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <Link
                              to={`/products/${product.id}`}
                              className="inline-flex items-center px-3 py-1.5 bg-[#0066ff]/10 text-[#0066ff] text-sm font-medium rounded-lg hover:bg-[#0066ff]/20 transition-colors"
                            >
                              查看详情
                            </Link>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          <div className="mt-8 text-center text-gray-500">
            共展示 {filteredProducts.length} 款产品
          </div>
        </div>
      </section>
    </Layout>
  );
}
