import { getPublishedArticles } from '@/lib/news'

/**
 * Feeds (RSS + Atom) are always emitted against the canonical PRODUCTION
 * domain, never localhost or a Vercel preview URL. This is intentionally a
 * fixed constant so generated feeds are stable and portable regardless of the
 * deployment environment they are built in.
 */
export const FEED_SITE_URL = 'https://iqtronic.com'

/** Public channel/feed metadata (shared by RSS 2.0 and Atom). */
export const FEED_META = {
  title: 'IQtronic Technologies News',
  description:
    'Latest news, product updates and company information from IQtronic Technologies.',
  /** Human-facing news page on the production site. */
  siteUrl: `${FEED_SITE_URL}/en/news`,
  language: 'en',
  generator: 'Next.js App Router (IQtronic Technologies)',
  rssUrl: `${FEED_SITE_URL}/rss.xml`,
  atomUrl: `${FEED_SITE_URL}/atom.xml`,
} as const

/** Build an absolute production URL from a site-relative path. */
export function feedUrl(path = '/'): string {
  if (/^https?:\/\//i.test(path)) return path
  return `${FEED_SITE_URL}${path.startsWith('/') ? '' : '/'}${path}`
}

/** Escape a string for safe inclusion in XML text nodes / attributes. */
export function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

/**
 * Reduce arbitrary text to clean, single-line plain text with no HTML.
 * Strips tags, decodes a few common entities and collapses whitespace so the
 * result is safe to place inside <description> / <summary> after escaping.
 */
export function toPlainText(input: string): string {
  return input
    .replace(/<[^>]*>/g, ' ')
    .replace(/&nbsp;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>')
    .replace(/&quot;/gi, '"')
    .replace(/&#39;|&apos;/gi, "'")
    .replace(/\s+/g, ' ')
    .trim()
}

/** A single, feed-ready news entry (already normalised, not yet escaped). */
export type FeedItem = {
  title: string
  link: string
  guid: string
  /** Clean, HTML-free description/summary. */
  description: string
  /** RFC-822 date string for RSS <pubDate>. */
  pubDateRfc822: string
  /** RFC-3339 / ISO-8601 date string for Atom <published>. */
  publishedIso: string
  /** RFC-3339 / ISO-8601 date string for Atom <updated>. */
  updatedIso: string
  category?: string
  author?: string
};

/**
 * The single source of feed items for BOTH the RSS and Atom feeds.
 *
 * - Reads the existing News data source (`getPublishedArticles`), so drafts,
 *   unpublished, scheduled or removed articles never appear.
 * - Sorted strictly newest → oldest by publish date.
 * - Uses the production domain for every link/guid.
 * - Guarantees a clean, HTML-free description (falling back to the article
 *   intro when no explicit summary/excerpt exists).
 */
export function getFeedItems(): FeedItem[] {
  return getPublishedArticles()
    .slice()
    .sort(
      (a, b) =>
        new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime(),
    )
    .map((article) => {
      const link = feedUrl(`/news/${article.slug}`)
      const rawSummary =
        article.summary?.trim() || article.body?.[0]?.trim() || article.title
      const description = toPlainText(rawSummary)
      const category = article.category?.trim() || undefined
      const author = article.author?.trim() || undefined

      return {
        title: article.title,
        link,
        guid: link,
        description,
        pubDateRfc822: new Date(article.publishDate).toUTCString(),
        publishedIso: new Date(article.publishDate).toISOString(),
        updatedIso: new Date(article.updatedDate).toISOString(),
        category,
        author,
      }
    })
}
