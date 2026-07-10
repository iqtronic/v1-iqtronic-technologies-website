import type { PublishAdapter, PublishResult, PublishTarget } from './types'
import { linkedInAdapter } from './adapters/linkedin'
import { facebookAdapter } from './adapters/facebook'
import { githubReleasesAdapter } from './adapters/github-releases'
import { rssAdapter } from './adapters/rss'
import type { ResolvedArticle } from '@/lib/news'

export type { PublishAdapter, PublishResult, PublishTarget } from './types'

/**
 * Registry of all publishing adapters.
 *
 * This is the single place future one-click publishing wires into. Every
 * adapter is currently a no-op placeholder — no external APIs, no secrets,
 * no authentication. Adding a real integration later is a matter of
 * implementing the adapter, without touching callers.
 */
export const PUBLISH_ADAPTERS: PublishAdapter[] = [
  linkedInAdapter,
  facebookAdapter,
  githubReleasesAdapter,
  rssAdapter,
]

/** Get a single adapter by its target id. */
export function getAdapter(target: PublishTarget): PublishAdapter | undefined {
  return PUBLISH_ADAPTERS.find((a) => a.target === target)
}

/**
 * Publish an article to every registered target (or a subset).
 * Placeholder behaviour: resolves with each adapter's no-op result.
 */
export async function publishArticle(
  article: ResolvedArticle,
  targets?: PublishTarget[],
): Promise<PublishResult[]> {
  const adapters = targets
    ? PUBLISH_ADAPTERS.filter((a) => targets.includes(a.target))
    : PUBLISH_ADAPTERS
  return Promise.all(adapters.map((a) => a.publish(article)))
}
