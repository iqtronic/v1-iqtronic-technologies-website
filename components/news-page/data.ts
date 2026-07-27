import { getArticles } from '@/lib/news'

/**
 * Platform-agnostic shape consumed by the News page components. Every field the
 * News/RSS system will eventually provide is represented here, so the UI can be
 * connected to the real feed later without a redesign.
 */
export type NewsCardItem = {
  /** Stable identifier — the article guid/slug. */
  id: string
  slug: string
  title: string
  description: string
  /** Human-readable publication date, e.g. "February 1, 2026". */
  publicationDate: string
  category: string
  imageUrl: string
  /** Link to the full article on the main site. */
  articleUrl: string
}

/** Format an ISO date (e.g. "2026-02-01") into "February 1, 2026". */
function formatPublicationDate(iso: string, fallback: string): string {
  const parsed = new Date(iso)
  if (Number.isNaN(parsed.getTime())) return fallback
  return parsed.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

/**
 * Map the existing, resolved News articles into the News page card shape.
 *
 * This reads the single existing News data source (`getArticles()`), which is
 * the same source the homepage and RSS feed use. When the live News/RSS
 * connection is finalised, only this function needs to change — the components
 * stay the same.
 */
export function getNewsCardItems(): NewsCardItem[] {
  return getArticles().map((article) => ({
    id: article.slug,
    slug: article.slug,
    title: article.title,
    description: article.summary,
    publicationDate: formatPublicationDate(
      article.publishDate,
      article.displayDate,
    ),
    category: article.category,
    imageUrl: article.heroImage,
    articleUrl: `/news/${article.slug}`,
  }))
}
