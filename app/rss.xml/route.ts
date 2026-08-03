import { FEED_META, escapeXml, getFeedItems } from '@/lib/feed'

/**
 * Revalidate hourly so newly published News articles appear automatically
 * without the feed ever being cached permanently. This mirrors the static
 * generation strategy of the News section (rebuilt data, periodically
 * refreshed) rather than pinning the feed forever.
 */
export const revalidate = 3600

/**
 * RSS 2.0 feed served at /rss.xml.
 *
 * Server-rendered from the single existing News data source. Includes every
 * published article exactly once, newest first. Returns a valid, empty channel
 * (never an error) when there are no published articles yet.
 */
export async function GET() {
  const items = getFeedItems()
  const lastBuildDate = new Date().toUTCString()

  const itemsXml = items
    .map((item) => {
      const parts = [
        `      <title>${escapeXml(item.title)}</title>`,
        `      <link>${escapeXml(item.link)}</link>`,
        `      <guid isPermaLink="true">${escapeXml(item.guid)}</guid>`,
        `      <description>${escapeXml(item.description)}</description>`,
        `      <pubDate>${item.pubDateRfc822}</pubDate>`,
      ]
      if (item.category) {
        parts.push(`      <category>${escapeXml(item.category)}</category>`)
      }
      if (item.author) {
        parts.push(`      <author>${escapeXml(item.author)}</author>`)
      }
      return `    <item>\n${parts.join('\n')}\n    </item>`
    })
    .join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(FEED_META.title)}</title>
    <description>${escapeXml(FEED_META.description)}</description>
    <link>${escapeXml(FEED_META.siteUrl)}</link>
    <language>${FEED_META.language}</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <generator>${escapeXml(FEED_META.generator)}</generator>
    <atom:link href="${escapeXml(FEED_META.rssUrl)}" rel="self" type="application/rss+xml" />
${itemsXml ? `${itemsXml}\n` : ''}  </channel>
</rss>
`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400',
    },
  })
}
