import { SITE, absoluteUrl } from '@/lib/site'

/**
 * A raw News entry.
 *
 * The first four fields (`date`, `category`, `title`, `text`) are the original
 * shape consumed by the homepage "Current Development" strip and the /news
 * list. They are kept unchanged so existing functionality is untouched.
 *
 * All remaining fields are OPTIONAL publishing metadata. They prepare each
 * article for future one-click publishing (LinkedIn, Facebook, GitHub
 * Releases, RSS) and rich SEO/social output. When omitted, sensible values
 * are derived from the core fields by `resolveArticle()`.
 */
export type NewsItem = {
  // --- Original, displayed fields (do not remove) ---
  date: string
  category: string
  title: string
  text: string

  // --- Optional publishing metadata ---
  /** URL-safe identifier. Derived from the title when omitted. */
  slug?: string
  /** Short summary/excerpt. Falls back to `text`. */
  summary?: string
  /** Full article body (paragraphs). Falls back to `[text]`. */
  body?: string[]
  /** Hero image (site-relative path or absolute URL). */
  heroImage?: string
  /** Author name. */
  author?: string
  /** ISO 8601 publish date, e.g. "2026-02-01". Derived from `date` otherwise. */
  publishDate?: string
  /** ISO 8601 last-modified date. */
  updatedDate?: string
  /** Free-form tags/keywords. */
  tags?: string[]
  /** Whether the article is published (included in RSS/sitemap). Defaults true. */
  published?: boolean

  // --- Optional SEO / social overrides ---
  seoTitle?: string
  seoDescription?: string
  /** Open Graph / social share image. Falls back to hero image, then site default. */
  ogImage?: string
}

/**
 * A fully-resolved article: every publishing/SEO field is guaranteed present.
 * This is the single object shape consumed by article pages, RSS, sitemap and
 * the publishing adapters.
 */
export type ResolvedArticle = {
  slug: string
  title: string
  summary: string
  body: string[]
  category: string
  author: string
  displayDate: string
  publishDate: string
  updatedDate: string
  tags: string[]
  heroImage: string
  seoTitle: string
  seoDescription: string
  ogImage: string
  /** Absolute canonical URL of the article. */
  canonicalUrl: string
  published: boolean
}

// Static, hardcoded development/news updates. Newest first.
// This single source feeds the homepage "Current Development" strip (first two
// items), the full /news list, individual article pages, the RSS feed and the
// sitemap.
export const NEWS_ITEMS: NewsItem[] = [
  {
    date: '2026',
    category: 'In Development',
    title: 'Environmental Monitoring Platform',
    text: 'New modular platform for industrial sensing, telemetry and environmental analytics.',
    slug: 'environmental-monitoring-platform',
    summary:
      'A new modular platform for industrial sensing, telemetry and environmental analytics.',
    body: [
      'IQtronic is developing a new modular platform for industrial sensing, telemetry and environmental analytics. The system brings together data logging, remote measurement and cloud connectivity into a single scalable architecture.',
      'The platform is designed for long product lifetimes and in-house support, continuing our tradition of durable industrial IoT engineering.',
    ],
    heroImage: '/dev-environmental-monitoring.png',
    author: 'IQtronic Engineering',
    publishDate: '2026-02-01',
    tags: ['environmental monitoring', 'telemetry', 'industrial iot', 'sensing'],
  },
  {
    date: '2026',
    category: 'In Development',
    title: 'Ultrasonic Wind Sensor',
    text: 'Next-generation ultrasonic anemometer technology for high-precision weather monitoring.',
    slug: 'ultrasonic-wind-sensor',
    summary:
      'Next-generation ultrasonic anemometer technology for high-precision weather monitoring.',
    body: [
      'Our next-generation ultrasonic anemometer technology targets high-precision wind measurement for weather monitoring and energy applications.',
      'With no moving parts, the ultrasonic design improves reliability and reduces maintenance for demanding outdoor deployments.',
    ],
    heroImage: '/dev-ultrasonic-wind-sensor.png',
    author: 'IQtronic Engineering',
    publishDate: '2026-01-15',
    tags: ['ultrasonic', 'anemometer', 'weather', 'wind sensor'],
  },
  {
    date: '2025',
    category: 'Product Development',
    title: 'Next Generation IQsocket',
    text: 'Development continues on the next generation of remote power control and monitoring products.',
    slug: 'next-generation-iqsocket',
    summary:
      'Development continues on the next generation of remote power control and monitoring products.',
    body: [
      'Development continues on the next generation of the IQsocket family of remote power control and monitoring products.',
      'The new generation focuses on connectivity, energy metering and tighter integration with the wider IQtronic ecosystem.',
    ],
    heroImage: '/images/iqsocket.png',
    author: 'IQtronic Engineering',
    publishDate: '2025-09-01',
    tags: ['iqsocket', 'remote power control', 'product development'],
  },
]

/** Convert a title into a URL-safe slug. */
export function slugify(input: string): string {
  return input
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

/**
 * Normalise a `date` value (which may be just a year, e.g. "2026") into an
 * ISO 8601 date string. Non-year values are passed to Date and re-serialised.
 */
function toISODate(date: string, fallback = '2026-01-01'): string {
  if (/^\d{4}$/.test(date)) return `${date}-01-01`
  const parsed = new Date(date)
  if (!Number.isNaN(parsed.getTime())) return parsed.toISOString().slice(0, 10)
  return fallback
}

/** Resolve a raw NewsItem into a fully-populated ResolvedArticle. */
export function resolveArticle(item: NewsItem): ResolvedArticle {
  const slug = item.slug ?? slugify(item.title)
  const summary = item.summary ?? item.text
  const body = item.body ?? [item.text]
  const publishDate = item.publishDate ?? toISODate(item.date)
  const updatedDate = item.updatedDate ?? publishDate
  const heroImage = item.heroImage ?? SITE.defaultOgImage
  const ogImage = item.ogImage ?? heroImage
  const canonicalUrl = absoluteUrl(`/news/${slug}`)

  return {
    slug,
    title: item.title,
    summary,
    body,
    category: item.category,
    author: item.author ?? SITE.name,
    displayDate: item.date,
    publishDate,
    updatedDate,
    tags: item.tags ?? [],
    heroImage,
    seoTitle: item.seoTitle ?? `${item.title} — ${SITE.name}`,
    seoDescription: item.seoDescription ?? summary,
    ogImage,
    canonicalUrl,
    published: item.published ?? true,
  }
}

/** All resolved articles (newest first, as authored). */
export function getArticles(): ResolvedArticle[] {
  return NEWS_ITEMS.map(resolveArticle)
}

/** Only published resolved articles — used by RSS and the sitemap. */
export function getPublishedArticles(): ResolvedArticle[] {
  return getArticles().filter((a) => a.published)
}

/** Look up a single resolved article by slug. */
export function getArticleBySlug(slug: string): ResolvedArticle | undefined {
  return getArticles().find((a) => a.slug === slug)
}

/**
 * Build the JSON-LD `Article` schema object for a resolved article.
 * Returned as a plain object so callers can inject it via a
 * `<script type="application/ld+json">` tag.
 */
export function articleJsonLd(article: ResolvedArticle) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.seoDescription,
    image: [absoluteUrl(article.ogImage)],
    datePublished: article.publishDate,
    dateModified: article.updatedDate,
    author: { '@type': 'Organization', name: article.author },
    publisher: {
      '@type': 'Organization',
      name: SITE.name,
      logo: {
        '@type': 'ImageObject',
        url: absoluteUrl('/images/iqtronic-logo.png'),
      },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': article.canonicalUrl },
    keywords: article.tags.join(', '),
    articleSection: article.category,
  }
}
