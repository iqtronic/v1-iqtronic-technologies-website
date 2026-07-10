import type { PublishAdapter } from '@/lib/publishing/types'
import { notImplemented } from '@/lib/publishing/types'

/**
 * LinkedIn publishing adapter — PLACEHOLDER.
 *
 * Future implementation will post an article update via the LinkedIn API.
 * For now it does nothing: no API keys, no network calls, no auth.
 */
export const linkedInAdapter: PublishAdapter = {
  target: 'linkedin',
  label: 'LinkedIn',
  isConfigured() {
    return false
  },
  async publish() {
    return notImplemented('linkedin')
  },
}
