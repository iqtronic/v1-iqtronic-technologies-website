import type { PublishAdapter } from '@/lib/publishing/types'
import { absoluteUrl } from '@/lib/site'

/**
 * RSS publishing adapter — PLACEHOLDER.
 *
 * The RSS feed itself is generated automatically at /news/rss.xml from every
 * published article, so there is no per-article "publish" action to perform.
 * This adapter exists to complete the interface for future orchestration
 * (e.g. pinging feed aggregators). It performs no network calls today.
 */
export const rssAdapter: PublishAdapter = {
  target: 'rss',
  label: 'RSS',
  isConfigured() {
    // The feed is always available; nothing to configure.
    return true
  },
  async publish() {
    return {
      target: 'rss' as const,
      ok: true,
      status: 'auto-generated feed — no action required',
      url: absoluteUrl('/news/rss.xml'),
    }
  },
}
