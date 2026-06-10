import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { PageHero } from '@/components/page-hero'
import { NEWS, formatNewsDate } from '@/lib/news'

export const metadata: Metadata = {
  title: 'News | IQtronic Technologies',
  description:
    'Product updates, deployments and company news from IQtronic Technologies — industrial electronics, IoT, GSM devices and meteorological systems.',
}

export default function NewsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="News"
          title="Updates from the field and the lab."
          description="Product releases, deployments and company news from across our engineering, manufacturing and laboratory teams."
          breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'News' }]}
        />

        <section className="bg-background">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {NEWS.map((article) => (
                <article
                  key={article.slug}
                  className="group flex flex-col overflow-hidden rounded-sm border border-border bg-card transition-shadow hover:shadow-md"
                >
                  <div className="relative aspect-[4/3] overflow-hidden border-b border-border bg-secondary">
                    <Image
                      src={article.image || '/placeholder.svg'}
                      alt={article.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute left-3 top-3 rounded-sm bg-background/85 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-foreground backdrop-blur">
                      {article.category}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <time
                      dateTime={article.date}
                      className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground"
                    >
                      {formatNewsDate(article.date)}
                    </time>
                    <h2 className="mt-3 text-lg font-medium leading-snug tracking-tight">
                      {article.title}
                    </h2>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {article.summary}
                    </p>
                    <Link
                      href={`/news/${article.slug}`}
                      className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent"
                    >
                      Read article
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
