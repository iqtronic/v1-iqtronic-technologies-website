import type { PublishAdapter } from '@/lib/publishing/types'
import { notImplemented } from '@/lib/publishing/types'

/**
 * GitHub Releases publishing adapter — PLACEHOLDER (future).
 *
 * Future implementation will create a GitHub Release from an article.
 * For now it does nothing: no API keys, no network calls, no auth.
 */
export const githubReleasesAdapter: PublishAdapter = {
  target: 'github-releases',
  label: 'GitHub Releases',
  isConfigured() {
    return false
  },
  async publish() {
    return notImplemented('github-releases')
  },
}
