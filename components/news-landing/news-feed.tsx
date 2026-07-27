'use client'

import Link from 'next/link'
import { useState } from 'react'
import type { ResolvedArticle } from '@/lib/news'
import { SITE } from '@/lib/site'

/** How many grid articles (excluding the featured one) to reveal per step. */
const PAGE_SIZE = 6

/**
 * Returns the real hero image for an article, or null when the article only
 * has the generic site-default OG image (i.e. no dedicated image). Never
 * returns a placeholder — callers render a clean text-only card instead.
 */
function realImage(article: ResolvedArticle): string | null {
  if (!article.heroImage) return null
  if (article.heroImage === SITE.defaultOgImage) return null
  return article.heroImage
}

function formatDate(iso: string, fallback: string): string {
  const parsed = new Date(iso)
  if (Number.isNaN(parsed.getTime())) return fallback
  return parsed.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

function ArticleMeta({ article }: { article: ResolvedArticle }) {
  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[11px] uppercase tracking-[0.16em]">
      <span className="text-accent">{article.category}</span>
      <span className="text-muted-foreground">
        {formatDate(article.publishDate, article.displayDate)}
      </span>
    </div>
  )
}

/** The single, visually dominant newest article. */
function FeaturedArticle({ article }: { article: ResolvedArticle }) {
  const image = realImage(article)
  return (
    <article className="group overflow-hidden rounded-sm border border-border bg-card transition-shadow hover:shadow-md">
      <Link
        href={`/news/${article.slug}`}
        className="grid grid-cols-1 lg:grid-cols-2"
      >
        {image ? (
          <div className="relative aspect-[16/10] overflow-hidden border-b border-border bg-secondary lg:border-b-0 lg:border-r">
            <img
              src={image || '/placeholder.svg'}
              alt={article.title}
              className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        ) : null}
        <div className="flex flex-col justify-center gap-4 p-6 lg:p-10">
          <ArticleMeta article={article} />
          <h3 className="text-balance text-2xl font-semibold tracking-tight transition-colors group-hover:text-accent sm:text-3xl">
            {article.title}
          </h3>
          <p className="text-pretty leading-relaxed text-muted-foreground">
            {article.summary}
          </p>
          <span className="inline-flex items-center gap-1 text-sm font-medium text-accent">
            Read more
            <span
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-0.5"
            >
              →
            </span>
          </span>
        </div>
      </Link>
    </article>
  )
}

/** A standard article card used inside the responsive grid. */
function ArticleCard({ article }: { article: ResolvedArticle }) {
  const image = realImage(article)
  return (
    <article className="group flex flex-col overflow-hidden rounded-sm border border-border bg-card transition-shadow hover:shadow-md">
      <Link href={`/news/${article.slug}`} className="flex h-full flex-col">
        {image ? (
          <div className="relative aspect-[4/3] overflow-hidden border-b border-border bg-secondary">
            <img
              src={image || '/placeholder.svg'}
              alt={article.title}
              className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        ) : null}
        <div className="flex flex-1 flex-col gap-3 p-6">
          <ArticleMeta article={article} />
          <h3 className="text-balance text-lg font-medium tracking-tight transition-colors group-hover:text-accent">
            {article.title}
          </h3>
          <p className="line-clamp-3 text-pretty text-sm leading-relaxed text-muted-foreground">
            {article.summary}
          </p>
          <span className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-accent">
            Read more
            <span
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-0.5"
            >
              →
            </span>
          </span>
        </div>
      </Link>
    </article>
  )
}

export function NewsFeed({ articles }: { articles: ResolvedArticle[] }) {
  const [visible, setVisible] = useState(PAGE_SIZE)

  if (articles.length === 0) return null

  const [featured, ...rest] = articles
  const shown = rest.slice(0, visible)
  const hasMore = rest.length > visible

  return (
    <section id="news" className="bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <header className="max-w-2xl">
          <div className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
            News &amp; Development
          </div>
          <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Company news &amp; engineering updates
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Product development milestones, engineering notes and company
            announcements — newest first.
          </p>
        </header>

        <div className="mt-10">
          <FeaturedArticle article={featured} />
        </div>

        {shown.length > 0 ? (
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {shown.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        ) : null}

        {hasMore ? (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setVisible((v) => v + PAGE_SIZE)}
              className="inline-flex items-center gap-2 rounded-sm border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              Load more
              <span aria-hidden="true">↓</span>
            </button>
          </div>
        ) : null}
      </div>
    </section>
  )
}
