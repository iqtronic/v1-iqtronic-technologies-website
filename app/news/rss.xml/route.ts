import { getPublishedArticles } from '@/lib/news'
import { SITE, absoluteUrl } from '@/lib/site'
import { escapeXml } from '@/lib/feed'

export const dynamic = 'force-static'

/**
 * RSS 2.0 feed for News & Development, served at /news/rss.xml.
 * Automatically includes every published article.
 */
export async function GET() {
  const articles = getPublishedArticles()
  const feedUrl = absoluteUrl('/news/rss.xml')
  const newsUrl = absoluteUrl('/news')
  const lastBuild = new Date().toUTCString()

  const items = articles
    .map((article) => {
      const pubDate = new Date(article.publishDate).toUTCString()
      const categories = article.tags
        .map((tag) => `      <category>${escapeXml(tag)}</category>`)
        .join('\n')
      return `    <item>
      <title>${escapeXml(article.title)}</title>
      <link>${escapeXml(article.canonicalUrl)}</link>
      <guid isPermaLink="true">${escapeXml(article.canonicalUrl)}</guid>
      <description>${escapeXml(article.summary)}</description>
      <pubDate>${pubDate}</pubDate>
      <author>${escapeXml(article.author)}</author>
${categories}
      <enclosure url="${escapeXml(absoluteUrl(article.ogImage))}" type="image/png" />
    </item>`
    })
    .join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(`${SITE.name} — News & Development`)}</title>
    <link>${escapeXml(newsUrl)}</link>
    <description>Latest product development updates, engineering notes and company milestones from ${escapeXml(
      SITE.name,
    )}.</description>
    <language>en</language>
    <lastBuildDate>${lastBuild}</lastBuildDate>
    <atom:link href="${escapeXml(feedUrl)}" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}
