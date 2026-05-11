import manifest from '@/content/site-media.json';

export interface GalleryItem {
  src: string;
  alt: string;
  caption?: string;
}

interface SiteMediaManifest {
  caseImages: Record<string, string>;
  teamAvatars: Record<string, string>;
  gallery: GalleryItem[];
  heroBackground: string | null;
}

const m = manifest as SiteMediaManifest;

function pickUrl(map: Record<string, string> | undefined, id: string, fallback: string): string {
  const url = map?.[id]?.trim();
  return url || fallback;
}

/** 案例配图：在 site-media.json 的 caseImages 里填写案例 id → 本地路径，未填写则用 mockData 里的外链 */
export function resolveCaseImage(caseId: string, fallback: string): string {
  return pickUrl(m.caseImages, caseId, fallback);
}

/** 团队成员头像：teamAvatars 里填 tm-1 等与 mockData 一致的 id */
export function resolveTeamAvatar(memberId: string, fallback: string): string {
  return pickUrl(m.teamAvatars, memberId, fallback);
}

export function getGallery(): GalleryItem[] {
  return Array.isArray(m.gallery) ? m.gallery.filter((item) => item?.src?.trim()) : [];
}

export function getHeroBackground(): string | null {
  const url = m.heroBackground?.trim();
  return url || null;
}
