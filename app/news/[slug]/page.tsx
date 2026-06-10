import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { PageHero } from '@/components/page-hero'
import { NEWS, getArticle, formatNewsDate } from '@/lib/news'

export function generateStaticParams() {
  return NEWS.map((article) => ({ slug: article.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) return { title: 'News — IQtronic Technologies' }
  return {
    title: `${article.title} — IQtronic Technologies`,
    description: article.summary,
  }
}

export default async function NewsArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) notFound()

  const related = NEWS.filter((a) => a.slug !== article.slug).slice(0, 2)

  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow={article.category}
          title={article.title}
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'News', href: '/news' },
            { label: article.category },
          ]}
        />

        <article className="border-b border-border bg-background">
          <div className="mx-auto max-w-3xl px-6 py-20 lg:px-10 lg:py-28">
            <time
              dateTime={article.date}
              className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground"
            >
              {formatNewsDate(article.date)}
            </time>

            <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-sm border border-border bg-secondary">
              <Image
                src={article.image || '/placeholder.svg'}
                alt={article.title}
                fill
                priority
                sizes="(min-width: 768px) 48rem, 100vw"
                className="object-cover"
              />
            </div>

            <p className="mt-10 text-pretty text-lg leading-relaxed text-foreground">
              {article.summary}
            </p>

            <div className="mt-8 flex flex-col gap-6 border-t border-border pt-8">
              {article.body.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-pretty leading-relaxed text-muted-foreground"
                  dangerouslySetInnerHTML={{ __html: paragraph }}
                />
              ))}
            </div>

            <div className="mt-12 border-t border-border pt-8">
              <Link
                href="/news"
                className="inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent"
              >
                <span aria-hidden="true">←</span>
                Back to all news
              </Link>
            </div>
          </div>
        </article>

        {related.length > 0 && (
          <section className="bg-card">
            <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
              <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
                <div>
                  <div className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                    More news
                  </div>
                  <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                    Keep reading.
                  </h2>
                </div>
                <Link
                  href="/news"
                  className="inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent"
                >
                  All news
                  <span aria-hidden="true">→</span>
                </Link>
              </div>

              <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
                {related.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/news/${item.slug}`}
                    className="group flex flex-col overflow-hidden rounded-sm border border-border bg-background transition-shadow hover:shadow-md sm:flex-row"
                  >
                    <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-border bg-secondary sm:w-44 sm:border-b-0 sm:border-r">
                      <Image
                        src={item.image || '/placeholder.svg'}
                        alt={item.title}
                        fill
                        sizes="(min-width: 640px) 11rem, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-1 flex-col justify-center p-6">
                      <time
                        dateTime={item.date}
                        className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground"
                      >
                        {formatNewsDate(item.date)}
                      </time>
                      <h3 className="mt-2 text-lg font-medium leading-snug tracking-tight">
                        {item.title}
                      </h3>
                      <span className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors group-hover:text-accent">
                        Read article
                        <span aria-hidden="true">→</span>
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <SiteFooter />
    </>
  )
}
