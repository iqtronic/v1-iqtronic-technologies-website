import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ShareButtons } from '@/components/share-buttons'
import {
  articleJsonLd,
  getArticleBySlug,
  getPublishedArticles,
} from '@/lib/news'
import { SITE, absoluteUrl } from '@/lib/site'

type PageProps = { params: Promise<{ slug: string }> }

/** Pre-render a static page for every published article. */
export function generateStaticParams() {
  return getPublishedArticles().map((a) => ({ slug: a.slug }))
}

/** Per-article SEO, Open Graph and Twitter/X metadata. */
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) return { title: 'Article not found' }

  const ogImage = absoluteUrl(article.ogImage)

  return {
    title: article.seoTitle,
    description: article.seoDescription,
    keywords: article.tags,
    authors: [{ name: article.author }],
    alternates: { canonical: article.canonicalUrl },
    openGraph: {
      type: 'article',
      title: article.seoTitle,
      description: article.seoDescription,
      url: article.canonicalUrl,
      siteName: SITE.name,
      locale: SITE.locale,
      images: [{ url: ogImage, alt: article.title }],
      publishedTime: article.publishDate,
      modifiedTime: article.updatedDate,
      section: article.category,
      tags: article.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: article.seoTitle,
      description: article.seoDescription,
      site: SITE.social.twitter,
      creator: SITE.social.twitter,
      images: [ogImage],
    },
  }
}

export default async function NewsArticlePage({ params }: PageProps) {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) notFound()

  const jsonLd = articleJsonLd(article)

  return (
    <>
      <SiteHeader />
      <main>
        {/* JSON-LD Article schema for search engines */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <article className="bg-background">
          <div className="mx-auto max-w-3xl px-6 pb-20 pt-16 lg:px-10 lg:pb-28 lg:pt-20">
            <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
              <Link href="/news" className="transition-colors hover:text-accent">
                News &amp; Development
              </Link>
              <span className="mx-2" aria-hidden="true">
                /
              </span>
              <span className="text-foreground">{article.title}</span>
            </nav>

            <header className="mt-6">
              <div className="flex items-center gap-3">
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
                  {article.category}
                </span>
                <span className="font-mono text-sm text-muted-foreground">
                  {article.displayDate}
                </span>
              </div>
              <h1 className="mt-4 text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                {article.title}
              </h1>
              <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
                {article.summary}
              </p>
              <div className="mt-4 font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
                By {article.author}
              </div>
            </header>

            {article.heroImage ? (
              <div className="mt-8 overflow-hidden rounded-sm border border-border bg-card">
                <img
                  src={article.heroImage || '/placeholder.svg'}
                  alt={article.title}
                  className="aspect-[16/9] w-full object-cover"
                />
              </div>
            ) : null}

            <div className="mt-8 flex flex-col gap-5 text-pretty leading-relaxed text-foreground">
              {article.body.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            {article.tags.length > 0 ? (
              <ul className="mt-8 flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-sm border border-border bg-card px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            ) : null}

            <div className="mt-10 border-t border-border pt-6">
              <ShareButtons url={article.canonicalUrl} title={article.title} />
            </div>
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  )
}
