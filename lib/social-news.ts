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
 * A single temporary sample news item used only for preview purposes.
 * Uses an existing IQtronic asset — no invented products or stock imagery.
 */
export const SAMPLE_NEWS_ITEM: SocialNewsItem = {
  category: 'Product News',
  publicationDate: 'March 12, 2026',
  title: 'IQtronic expands its industrial IoT platform with a new ENVIstation weather station',
  description:
    'The new ENVIstation brings laboratory-grade environmental measurement to demanding outdoor installations — engineered, tested and manufactured in Czechia for years of reliable operation.',
  imageUrl: '/images/iqtronic-envistation-ethernet-weather-station.jpg',
  imageAlt:
    'IQtronic ENVIstation Ethernet weather station mounted on a mast against a clear sky',
  articleUrl: 'https://iqtronic.com/news/envistation-launch',
}
