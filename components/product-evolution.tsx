'use client'

import Image from 'next/image'
import Link from 'next/link'
import {
  getProductEvolution,
  LIFECYCLE_LABELS,
  type Product,
} from '@/lib/products'
import { cn } from '@/lib/utils'

function yearRange(yearFrom: number, yearTo?: number, lifecycle?: string) {
  if (lifecycle === 'planned') return `Planned ${yearFrom}`
  if (!yearTo) return `${yearFrom}–Current`
  return `${yearFrom}–${yearTo}`
}

export function ProductEvolution({ product }: { product: Product }) {
  const entries = getProductEvolution(product)
  if (entries.length === 0) return null

  return (
    <aside
      aria-label="Product evolution"
      className="flex h-full flex-col rounded-sm border border-border bg-card"
    >
      <div className="border-b border-border px-5 py-4">
        <div className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
          Product Evolution
        </div>
        <p className="mt-1 text-sm text-muted-foreground">
          Generations of the {product.name} family.
        </p>
      </div>

      {/*
        Desktop: vertical timeline that scrolls within a fixed height aligned
        to the main image area. Mobile: horizontal swipe carousel.
      */}
      <div
        className={cn(
          'flex-1 overflow-x-auto p-4 lg:overflow-y-auto lg:overflow-x-hidden',
          // Fixed scroll height on desktop so the panel stays aligned with the
          // product image while supporting an unlimited number of items.
          'lg:max-h-[28rem]',
        )}
      >
        <ol className="flex gap-4 lg:flex-col lg:gap-0">
          {entries.map((entry, index) => {
            const isLast = index === entries.length - 1
            return (
              <li
                key={entry.slug + index}
                className="relative shrink-0 lg:shrink"
              >
                {/* Vertical connector line (desktop only) */}
                {!isLast ? (
                  <span
                    aria-hidden="true"
                    className="absolute left-[1.9rem] top-14 hidden h-[calc(100%-2.5rem)] w-px bg-border lg:block"
                  />
                ) : null}

                <Link
                  href={entry.href}
                  className={cn(
                    'group relative flex w-56 flex-col gap-3 rounded-sm border p-3 transition-colors lg:mb-3 lg:w-auto lg:flex-row lg:items-center',
                    entry.isCurrent
                      ? 'border-accent bg-accent/5'
                      : 'border-border bg-background hover:border-foreground/40',
                  )}
                >
                  {/* Current-product marker on the rail */}
                  {entry.isCurrent ? (
                    <span
                      aria-hidden="true"
                      className="absolute -left-px top-3 hidden font-mono text-sm text-accent lg:block"
                    >
                      ►
                    </span>
                  ) : null}

                  <div
                    className={cn(
                      'relative size-16 shrink-0 overflow-hidden rounded-sm border bg-secondary',
                      entry.isCurrent ? 'border-accent/50' : 'border-border',
                    )}
                  >
                    <Image
                      src={entry.image || '/placeholder.svg'}
                      alt={entry.name}
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <h3
                        className={cn(
                          'truncate text-sm font-medium tracking-tight',
                          entry.isCurrent
                            ? 'text-foreground'
                            : 'text-foreground',
                        )}
                      >
                        {entry.name}
                      </h3>
                    </div>
                    <div className="mt-0.5 font-mono text-[11px] text-muted-foreground">
                      {yearRange(entry.yearFrom, entry.yearTo, entry.lifecycle)}
                    </div>

                    {entry.isCurrent ? (
                      <span className="mt-2 inline-flex items-center gap-1.5 rounded-sm border border-accent/40 bg-accent/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-accent">
                        <span
                          className="inline-block size-1.5 rounded-full bg-accent"
                          aria-hidden="true"
                        />
                        Current Product
                      </span>
                    ) : (
                      <span className="mt-2 inline-flex items-center rounded-sm border border-border bg-card px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                        {LIFECYCLE_LABELS[entry.lifecycle]}
                      </span>
                    )}

                    {entry.note ? (
                      <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                        {entry.note}
                      </p>
                    ) : null}
                  </div>
                </Link>
              </li>
            )
          })}
        </ol>
      </div>
    </aside>
  )
}
