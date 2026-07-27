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
  /** Show the subtle globe watermark motif from the homepage hero. */
  showGlobeMotif?: boolean
  className?: string
}

/**
 * A single reusable social-news composition rendered at the exact platform
 * canvas size. The layout is data-driven and degrades gracefully for longer
 * headlines, four-line descriptions, any image aspect ratio, a missing
 * category or a hidden CTA. Uses the existing IQtronic design system only.
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
      {/* Subtle globe motif — cropped, low-opacity supporting detail only.
          Positioned bottom-right behind content so it never competes with the
          news image or headline. */}
      {showGlobeMotif ? (
        <img
          src="/images/hero-main-963.webp"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-40 -right-40 h-[560px] w-[560px] select-none object-contain opacity-[0.06]"
        />
      ) : null}

      {/* Brand header */}
      <header className="relative flex items-center justify-between px-14 pt-12">
        <div className="flex items-center gap-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/iqtronic-logo.png"
            alt="IQtronic Technologies"
            width={281}
            height={87}
            className="h-11 w-auto"
          />
          <span
            className="h-8 w-px bg-border"
            aria-hidden="true"
          />
          <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Engineering Since 1999
          </span>
        </div>

        {category ? (
          <span className="inline-flex items-center gap-2 rounded-sm border border-border bg-card px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-accent">
            <span
              className="inline-block size-1.5 bg-accent"
              aria-hidden="true"
            />
            {category}
          </span>
        ) : null}
      </header>

      {/* Main news area */}
      <div className="relative grid min-h-0 flex-1 grid-cols-12 items-center gap-10 px-14 py-10">
        {/* Text column */}
        <div className="col-span-6 flex min-w-0 flex-col">
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-accent">
            <span className="inline-block size-2 bg-accent" aria-hidden="true" />
            {publicationDate}
          </div>

          <h1 className="mt-5 text-pretty text-[2.6rem] font-semibold leading-[1.08] tracking-tight line-clamp-3">
            {title}
          </h1>

          <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground line-clamp-4">
            {description}
          </p>

          {showCTA ? (
            <div className="mt-8">
              <span className="inline-flex items-center gap-2 rounded-sm bg-primary px-5 py-3 text-sm font-medium text-primary-foreground">
                Read full article
                <span aria-hidden="true">→</span>
              </span>
            </div>
          ) : null}
        </div>

        {/* Image column */}
        <div className="col-span-6 flex h-full items-center">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm border border-border bg-secondary">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={imageUrl || '/placeholder.svg'}
              alt={imageAlt}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative flex items-center justify-between border-t border-border px-14 py-6">
        <span className="text-sm font-medium text-foreground">
          {displayHost}
        </span>
        <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
          IQtronic Technologies
        </span>
      </footer>
    </div>
  )
})
