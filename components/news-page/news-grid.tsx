'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import type { NewsCardItem } from './data'

const PAGE_SIZE = 6

function NewsCard({ item }: { item: NewsCardItem }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-sm border border-border bg-card transition-shadow hover:shadow-md">
      <Link href={item.articleUrl} className="block">
        <div className="relative aspect-[16/10] w-full overflow-hidden">
          <Image
            src={item.imageUrl || '/placeholder.svg'}
            alt={item.title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[11px] uppercase tracking-[0.16em]">
          <span className="text-accent">{item.category}</span>
          <span aria-hidden="true" className="text-border">
            |
          </span>
          <span className="text-muted-foreground">{item.publicationDate}</span>
        </div>

        <h3 className="mt-3 text-balance text-lg font-medium tracking-tight">
          <Link
            href={item.articleUrl}
            className="transition-colors group-hover:text-accent"
          >
            {item.title}
          </Link>
        </h3>

        <p className="mt-2 line-clamp-3 text-pretty text-sm leading-relaxed text-muted-foreground">
          {item.description}
        </p>

        <div className="mt-4 pt-2">
          <Link
            href={item.articleUrl}
            className="inline-flex items-center gap-2 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-accent transition-all hover:gap-3"
          >
            Read more
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </article>
  )
}

/**
 * Responsive grid of secondary articles: 3 columns on desktop, 2 on tablet,
 * 1 on mobile. Uses a "Load more" control so the layout scales cleanly from a
 * few articles to hundreds.
 */
export function NewsGrid({ items }: { items: NewsCardItem[] }) {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)
  const visibleItems = items.slice(0, visibleCount)
  const hasMore = visibleCount < items.length

  return (
    <div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {visibleItems.map((item) => (
          <NewsCard key={item.id} item={item} />
        ))}
      </div>

      {hasMore ? (
        <div className="mt-12 flex justify-center">
          <button
            type="button"
            onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
            className="inline-flex items-center gap-2 rounded-sm border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          >
            Load more
            <span aria-hidden="true">↓</span>
          </button>
        </div>
      ) : null}
    </div>
  )
}
