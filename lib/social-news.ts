import {
  getArticleBySlug,
  getPublishedArticles,
  type ResolvedArticle,
} from '@/lib/news'

export type SocialPlatform = 'facebook' | 'linkedin'

export type SocialNewsItem = {
  /** Optional short category label (e.g. "Product News"). Layout must not depend on it. */
  category?: string
  /** Human-readable publication date, already formatted for display. */
  publicationDate: string
  /** News headline. Designed for roughly 45–90 characters. */
  title: string
  /** Short introduction, roughly 160–300 characters (about two to four lines). */
  description: string
  /** Main news image. Existing IQtronic asset or a marked placeholder. */
  imageUrl: string
  /** Meaningful alt text for the main image (required for accessibility). */
  imageAlt: string
  /** Canonical article URL on the main website. */
  articleUrl: string
}

export type PlatformConfig = {
  label: string
  /** Exact export canvas width in pixels. */
  width: number
  /** Exact export canvas height in pixels. */
  height: number
  /** Suggested PNG file name for the exported canvas. */
  exportFileName: string
}

/**
 * Platform-specific export dimensions. The visual layout is identical across
 * platforms — only the final canvas size differs.
 */
export const PLATFORM_CONFIG: Record<SocialPlatform, PlatformConfig> = {
  facebook: {
    label: 'Facebook',
    width: 1200,
    height: 630,
    exportFileName: 'iqtronic-facebook-post.png',
  },
  linkedin: {
    label: 'LinkedIn',
    width: 1200,
    height: 627,
    exportFileName: 'iqtronic-linkedin-post.png',
  },
}

/**
 * A single temporary sample news item used only as a last-resort fallback when
 * no published news articles exist. Uses an existing IQtronic asset.
 */
export const SAMPLE_NEWS_ITEM: SocialNewsItem = {
  category: 'Product News',
  publicationDate: 'March 12, 2026',
  title: 'IQtronic expands its industrial IoT platform with a new ENVIstation weather station',
  description:
    'The new ENVIstation brings laboratory-grade environmental measurement to demanding outdoor installations — engineered, tested and manufactured in Czechia for years of reliable operation.',
  imageUrl: '/images/hero-main-963.webp',
  imageAlt:
    'IQtronic ENVIstation Ethernet weather station mounted on a mast against a clear sky',
  articleUrl: 'https://iqtronic.com/news/envistation-launch',
}

/** Format an ISO date (e.g. "2026-02-01") into "February 1, 2026". */
function formatDisplayDate(iso: string): string {
  const parsed = new Date(iso)
  if (Number.isNaN(parsed.getTime())) return iso
  return parsed.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

/**
 * Map a fully-resolved IQtronic News article into the platform-agnostic
 * SocialNewsItem shape consumed by the social template. This is the single
 * bridge between the existing News system and the social preview routes.
 */
export function articleToSocialItem(article: ResolvedArticle): SocialNewsItem {
  return {
    category: article.category,
    publicationDate: formatDisplayDate(article.publishDate),
    title: article.title,
    description: article.summary,
    // Prefer the article's social image, then its hero image.
    imageUrl: article.ogImage || article.heroImage,
    imageAlt: article.title,
    articleUrl: article.canonicalUrl,
  }
}

/**
 * Resolve the news item to render for a social route.
 *
 * - When `slug` matches an existing article, that article is used.
 * - Otherwise the newest published article is used.
 * - If there are no published articles at all, the sample item is returned.
 *
 * This keeps the routes ready to load any existing article via
 * `/facebook?article=<slug>` or `/linkedin?article=<slug>`.
 */
export function getSocialNewsItem(slug?: string | null): SocialNewsItem {
  if (slug) {
    const found = getArticleBySlug(slug)
    if (found) return articleToSocialItem(found)
  }
  const [newest] = getPublishedArticles()
  return newest ? articleToSocialItem(newest) : SAMPLE_NEWS_ITEM
}
