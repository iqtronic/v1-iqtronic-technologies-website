import type { ResolvedArticle } from '@/lib/news'

/**
 * Identifiers for the publishing destinations we intend to support.
 * NOTE: These are placeholders — no external API is called yet.
 */
export type PublishTarget = 'linkedin' | 'facebook' | 'github-releases' | 'rss'

/** Result returned by an adapter's `publish` call. */
export type PublishResult = {
  target: PublishTarget
  /** `false` while adapters are placeholders. */
  ok: boolean
  /** Human-readable status, e.g. "not implemented". */
  status: string
  /** Absolute URL of the published item, once real publishing exists. */
  url?: string
}

/**
 * A publishing adapter.
 *
 * This is the stable interface future one-click publishing will implement.
 * Adapters intentionally do nothing today: `isConfigured()` returns false and
 * `publish()` resolves to a `not implemented` result. No secrets, no network,
 * no authentication are involved at this stage.
 */
export interface PublishAdapter {
  readonly target: PublishTarget
  readonly label: string
  /** Whether the adapter has everything it needs to publish for real. */
  isConfigured(): boolean
  /** Publish (or, for now, no-op) a resolved article. */
  publish(article: ResolvedArticle): Promise<PublishResult>
}

/** Convenience helper for building a "not implemented" placeholder result. */
export function notImplemented(target: PublishTarget): PublishResult {
  return {
    target,
    ok: false,
    status: 'not implemented — publishing adapter is a placeholder',
  }
}
