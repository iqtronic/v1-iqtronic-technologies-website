import { forwardRef } from 'react'
import { cn } from '@/lib/utils'
import {
  PLATFORM_CONFIG,
  type SocialNewsItem,
  type SocialPlatform,
} from '@/lib/social-news'

export type SocialNewsTemplateProps = SocialNewsItem & {
  platform: SocialPlatform
  /** Show the "Read full article" call-to-action button. */
  showCTA?: boolean
  /**
   * Show the IQtronic homepage hero globe (hero-main-963.webp). It is the
   * permanent company branding and is shown in full colour at full prominence.
   */
  showGlobeMotif?: boolean
  className?: string
}

/**
 * Choose a headline size from its length so long titles (up to ~90 characters)
 * are never truncated with an ellipsis — they simply wrap onto more lines at a
 * slightly smaller, still-large size. Mirrors the homepage hero typography
 * (font-semibold, tight leading and tracking).
 */
function headlineClass(title: string): string {
  const len = title.trim().length
  if (len <= 42) return 'text-[3.4rem] leading-[1.04]'
  if (len <= 64) return 'text-[2.8rem] leading-[1.07]'
  if (len <= 84) return 'text-[2.35rem] leading-[1.1]'
  return 'text-[2rem] leading-[1.13]'
}

/**
 * A single reusable social-news composition rendered at the exact platform
 * canvas size. It reads as a compact IQtronic homepage hero: the mono accent
 * label + dominant headline on the left, and the signature homepage globe
 * (hero-main-963.webp, full colour) on the right as the permanent brand
 * visual. When the selected article has an image, it is shown as a
 * complementary framed inset that sits with — and never hides — the globe.
 *
 * The forwarded ref points at the export root, so a PNG can be captured at the
 * exact target dimensions without any surrounding preview chrome.
 */
export const SocialNewsTemplate = forwardRef<
  HTMLDivElement,
  SocialNewsTemplateProps
>(function SocialNewsTemplate(
  {
    platform,
    category,
    publicationDate,
    title,
    description,
    imageUrl,
    imageAlt,
    articleUrl,
    showCTA = true,
    showGlobeMotif = true,
    className,
  },
  ref,
) {
  const { width, height } = PLATFORM_CONFIG[platform]
  const hasArticleImage = Boolean(imageUrl)
  // Derive a clean display host from the article URL for the footer link.
  let displayHost = 'iqtronic.com'
  try {
    displayHost = new URL(articleUrl).hostname.replace(/^www\./, '')
  } catch {
    displayHost = 'iqtronic.com'
  }

  return (
    <div
      ref={ref}
      style={{ width, height }}
      className={cn(
        'relative flex flex-col overflow-hidden bg-background text-foreground',
        className,
      )}
    >
      {/* Main hero row */}
      <div className="relative flex min-h-0 flex-1">
        {/* Text column */}
        <div className="flex w-[52%] flex-col px-16 pt-14 pb-6">
          {/* Brand: logo + engineering label */}
          <div className="flex items-center gap-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/iqtronic-logo.png"
              alt="IQtronic Technologies"
              width={281}
              height={87}
              className="h-10 w-auto"
            />
            <span className="h-7 w-px bg-border" aria-hidden="true" />
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              Engineering since 1999
            </span>
          </div>

          {/* Technical label: publication date + category */}
          <div className="mt-9 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs uppercase tracking-[0.18em] text-accent">
            <span className="inline-flex items-center gap-2">
              <span
                className="inline-block size-2 bg-accent"
                aria-hidden="true"
              />
              {publicationDate}
            </span>
            {category ? (
              <>
                <span className="text-border" aria-hidden="true">
                  ·
                </span>
                <span className="text-muted-foreground">{category}</span>
              </>
            ) : null}
          </div>

          {/* Headline — dominant, never ellipsis-truncated */}
          <h1
            className={cn(
              'mt-5 text-balance font-semibold tracking-tight text-foreground',
              headlineClass(title),
            )}
          >
            {title}
          </h1>

          {/* Short description */}
          <p className="mt-5 max-w-[34ch] text-pretty text-[1.05rem] leading-relaxed text-muted-foreground line-clamp-3">
            {description}
          </p>

          {/* Optional call to action */}
          {showCTA ? (
            <div className="mt-7">
              <span className="inline-flex items-center gap-2 rounded-sm bg-primary px-5 py-3 text-sm font-medium text-primary-foreground">
                Read full article
                <span aria-hidden="true">→</span>
              </span>
            </div>
          ) : null}
        </div>

        {/* Visual column — the permanent IQtronic homepage globe, in full
            colour, with the article image as a complementary inset. */}
        <div className="relative w-[48%]">
          {showGlobeMotif ? (
            <div
              className={cn(
                'absolute inset-0 flex items-center justify-center',
                // When an article image is present, nudge the globe up so the
                // inset card sits below it — the two read as one composition
                // and the globe stays fully visible.
                hasArticleImage ? 'items-start pt-8' : 'py-8',
              )}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/hero-main-963.webp"
                alt="IQtronic industrial IoT ecosystem — a green world with the iQtronic logo, smart sockets, sensors, weather stations and connected devices"
                width={963}
                height={642}
                className={cn(
                  'select-none object-contain',
                  hasArticleImage
                    ? 'max-h-[62%] w-[92%]'
                    : 'max-h-full w-[96%]',
                )}
              />
            </div>
          ) : null}

          {/* Article image — a complementary framed inset. Never cropped
              (object-contain) and sized so the globe remains clearly visible
              above it. Omitted entirely for a clean text-only layout when the
              article has no image. */}
          {hasArticleImage ? (
            <div className="absolute bottom-10 left-2 right-12 flex justify-center">
              <div className="max-w-[300px] overflow-hidden rounded-sm border border-border bg-card p-2 shadow-[0_16px_40px_rgba(15,23,42,0.18)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={imageUrl || '/placeholder.svg'}
                  alt={imageAlt}
                  className="max-h-[168px] w-full rounded-[2px] object-contain"
                />
              </div>
            </div>
          ) : null}
        </div>
      </div>

      {/* Subtle technical footer line */}
      <footer className="relative flex items-center justify-between border-t border-border px-16 py-4">
        <span className="text-sm font-medium text-foreground">
          {displayHost}
        </span>
        <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
          Products Designed To Last.
        </span>
      </footer>
    </div>
  )
})
