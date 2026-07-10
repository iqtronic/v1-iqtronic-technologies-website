import type { PublishAdapter } from '@/lib/publishing/types'
import { notImplemented } from '@/lib/publishing/types'

/**
 * Facebook publishing adapter — PLACEHOLDER.
 *
 * Future implementation will post to a Facebook Page via the Graph API.
 * For now it does nothing: no API keys, no network calls, no auth.
 */
export const facebookAdapter: PublishAdapter = {
  target: 'facebook',
  label: 'Facebook',
  isConfigured() {
    return false
  },
  async publish() {
    return notImplemented('facebook')
  },
}
