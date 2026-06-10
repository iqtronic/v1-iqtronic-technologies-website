import Image from 'next/image'
import Link from 'next/link'
import { getLatestArticle, formatNewsDate } from '@/lib/news'

export function LatestNews() {
  const latest = getLatestArticle()

  return (
    <section id="news" className="border-b border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
              Latest News
            </div>
            <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              What&apos;s happening at IQtronic.
            </h2>
          </div>
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent"
          >
            View all news
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <article className="mt-12 grid grid-cols-1 overflow-hidden rounded-sm border border-border bg-background lg:grid-cols-2">
          <div className="relative aspect-[16/10] overflow-hidden border-b border-border bg-secondary lg:border-b-0 lg:border-r">
            <Image
              src={latest.image || '/placeholder.svg'}
              alt={latest.title}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <span className="absolute left-3 top-3 rounded-sm bg-background/85 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-foreground backdrop-blur">
              {latest.category}
            </span>
          </div>

          <div className="flex flex-col justify-center p-6 lg:p-10">
            <time
              dateTime={latest.date}
              className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground"
            >
              {formatNewsDate(latest.date)}
            </time>
            <h3 className="mt-4 text-balance text-2xl font-semibold tracking-tight">
              {latest.title}
            </h3>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              {latest.summary}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href={`/news/${latest.slug}`}
                className="inline-flex items-center gap-2 rounded-sm bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                Read article
                <span aria-hidden="true">→</span>
              </Link>
              <Link
                href="/news"
                className="inline-flex items-center gap-2 rounded-sm border border-border px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
              >
                View all news
              </Link>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}
