export type ProductSeries = 'dtof' | 'itof' | 'camera' | 'structured-light' | 'thermal' | 'vcsels';

export interface Product {
  id: string;
  series: ProductSeries;
  model: string;
  name: string;
  shortDesc: string;
  description: string;
  features: string[];
  specs: Record<string, string>;
  resolution?: string;
  range?: string;
  fov?: string;
  wavelength?: string;
  applications: string[];
}

export interface Solution {
  id: string;
  title: string;
  category: string;
  icon: string;
  description: string;
  features: string[];
  products: string[];
}

export interface Case {
  id: string;
  title: string;
  industry: string;
  challenge: string;
  solution: string;
  result: string;
  products: string[];
  imageUrl: string;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: string;
  summary: string;
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  avatar: string;
}

export interface TimelineEvent {
  year: string;
  event: string;
}

export interface SupportDoc {
  id: string;
  category: 'manual' | 'sdk' | 'api' | 'faq';
  title: string;
  description: string;
  downloadUrl?: string;
}
