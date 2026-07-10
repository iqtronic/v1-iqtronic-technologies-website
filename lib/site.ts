/**
 * Central site configuration.
 *
 * The canonical base URL is read from the public `NEXT_PUBLIC_SITE_URL`
 * environment variable when available, and falls back to the production
 * domain. This is intentionally a *public* value (no secrets) so it can be
 * used both on the server (sitemap, RSS, metadata) and in the browser
 * (share buttons, canonical links).
 */
export const SITE = {
  name: 'IQtronic Technologies',
  shortName: 'IQtronic',
  description:
    'Engineering since 1999. Industrial IoT since 2003. IQtronic Technologies delivers IoT products, custom electronics engineering, and accredited EMC, microwave and wind-tunnel laboratories.',
  /** Canonical, absolute base URL WITHOUT a trailing slash. */
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.iqtronic.com').replace(
    /\/$/,
    '',
  ),
  locale: 'en_US',
  /** Social handles used for Open Graph / Twitter metadata. */
  social: {
    twitter: '@iqtronic',
    linkedin: 'https://www.linkedin.com/company/iqtronic',
    facebook: 'https://www.facebook.com/iqtronic',
  },
  /** Default sharing/OG image used when a page provides none. */
  defaultOgImage: '/images/hero-main.png',
} as const

/** Build an absolute URL from a site-relative path. */
export function absoluteUrl(path = '/'): string {
  if (/^https?:\/\//i.test(path)) return path
  return `${SITE.url}${path.startsWith('/') ? '' : '/'}${path}`
}
