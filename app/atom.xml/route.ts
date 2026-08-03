import { FEED_META, escapeXml, getFeedItems } from '@/lib/feed'

/**
 * Revalidate hourly so newly published News articles appear automatically
 * without the feed ever being cached permanently (mirrors the News section).
 */
export const revalidate = 3600

/**
 * Atom 1.0 feed served at /atom.xml.
 *
 * Uses the exact same data source as the RSS feed (`getFeedItems`), so both
 * feeds stay perfectly in sync. Only published articles appear, newest first.
 */
export async function GET() {
  const items = getFeedItems()
  // Feed <updated> = newest article's updated date, or "now" when empty.
  const updated = items[0]?.updatedIso ?? new Date().toISOString()

  const entriesXml = items
    .map((item) => {
      const parts = [
        `    <title>${escapeXml(item.title)}</title>`,
        `    <link href="${escapeXml(item.link)}" />`,
        `    <id>${escapeXml(item.guid)}</id>`,
        `    <published>${item.publishedIso}</published>`,
        `    <updated>${item.updatedIso}</updated>`,
        `    <summary>${escapeXml(item.description)}</summary>`,
      ]
      if (item.category) {
        parts.push(`    <category term="${escapeXml(item.category)}" />`)
      }
      if (item.author) {
        parts.push(
          `    <author><name>${escapeXml(item.author)}</name></author>`,
        )
      }
      return `  <entry>\n${parts.join('\n')}\n  </entry>`
    })
    .join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<feed xmlns="http://www.w3.org/2005/Atom" xml:lang="${FEED_META.language}">
  <title>${escapeXml(FEED_META.title)}</title>
  <subtitle>${escapeXml(FEED_META.description)}</subtitle>
  <link href="${escapeXml(FEED_META.atomUrl)}" rel="self" type="application/atom+xml" />
  <link href="${escapeXml(FEED_META.siteUrl)}" />
  <id>${escapeXml(FEED_META.atomUrl)}</id>
  <updated>${updated}</updated>
  <generator>${escapeXml(FEED_META.generator)}</generator>
${entriesXml ? `${entriesXml}\n` : ''}</feed>
`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/atom+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400',
    },
  })
}
