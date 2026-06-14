'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import Link from 'next/link'
import { PRODUCTS, LIFECYCLE_LABELS } from '@/lib/products'
import { cn } from '@/lib/utils'

type SearchType = 'Product' | 'Document' | 'Firmware' | 'Support'

interface SearchEntry {
  title: string
  description: string
  href: string
  type: SearchType
  keywords: string[]
}

/**
 * Static, non-product entries. These point only at routes that exist today
 * (/downloads, /support) and are intentionally lightweight so the overlay can
 * later be swapped for a real site-wide search index without UI changes.
 */
const STATIC_ENTRIES: SearchEntry[] = [
  {
    title: 'Datasheets',
    description: 'Technical specifications and electrical ratings for every product.',
    href: '/downloads',
    type: 'Document',
    keywords: ['datasheet', 'specification', 'spec', 'pdf', 'drawing'],
  },
  {
    title: 'Product manuals',
    description: 'Installation, configuration and operation guides for field deployment.',
    href: '/downloads',
    type: 'Document',
    keywords: ['manual', 'guide', 'installation', 'configuration', 'handbook'],
  },
  {
    title: 'Firmware images',
    description: 'Latest stable and legacy firmware with release notes.',
    href: '/downloads',
    type: 'Firmware',
    keywords: ['firmware', 'update', 'release', 'image', 'flash'],
  },
  {
    title: 'Configuration software',
    description: 'Desktop utilities, SCADA connectors and configuration tools.',
    href: '/downloads',
    type: 'Firmware',
    keywords: ['software', 'tool', 'utility', 'scada', 'driver'],
  },
  {
    title: 'Open a support ticket',
    description: 'Reach an engineer directly with your product serial number.',
    href: '/support',
    type: 'Support',
    keywords: ['support', 'ticket', 'help', 'rma', 'contact', 'service'],
  },
  {
    title: 'Licensing & activation',
    description: 'Activate, upgrade and manage licenses tied to your organisation.',
    href: '/support#licensing',
    type: 'Support',
    keywords: ['license', 'licensing', 'activation', 'upgrade', 'key'],
  },
  {
    title: 'Warranty & service',
    description: 'Warranty terms, repairs and long-term service information.',
    href: '/support#warranty',
    type: 'Support',
    keywords: ['warranty', 'service', 'repair', 'guarantee'],
  },
]

const TYPE_ORDER: SearchType[] = ['Product', 'Document', 'Firmware', 'Support']

function buildIndex(): SearchEntry[] {
  const productEntries: SearchEntry[] = PRODUCTS.map((p) => ({
    title: p.name,
    description: p.tagline,
    href: `/products/${p.slug}`,
    type: 'Product',
    keywords: [
      p.name,
      p.tagline,
      p.family,
      p.category,
      LIFECYCLE_LABELS[p.lifecycle],
      ...p.keywords,
    ].map((k) => k.toLowerCase()),
  }))
  return [...productEntries, ...STATIC_ENTRIES]
}

export function SearchOverlay({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) {
  const [query, setQuery] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const index = useMemo(buildIndex, [])

  // Focus the input and lock body scroll while open.
  useEffect(() => {
    if (!open) return
    const t = setTimeout(() => inputRef.current?.focus(), 20)
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      clearTimeout(t)
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [open, onClose])

  // Reset the query each time the overlay closes.
  useEffect(() => {
    if (!open) setQuery('')
  }, [open])

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return []
    const terms = q.split(/\s+/)
    return index
      .map((entry) => {
        const title = entry.title.toLowerCase()
        const haystack = [
          title,
          entry.description.toLowerCase(),
          ...entry.keywords,
        ].join(' ')
        // Count how many of the typed terms appear anywhere in the entry.
        const matched = terms.filter((term) => haystack.includes(term)).length
        if (matched === 0) return null
        // Rank: more matched terms first, then title hits, then exact prefix.
        let score = matched * 10
        if (terms.some((term) => title.includes(term))) score += 5
        if (title.startsWith(terms[0])) score += 3
        return { entry, score }
      })
      .filter((r): r is { entry: SearchEntry; score: number } => r !== null)
      .sort((a, b) => b.score - a.score)
      .slice(0, 24)
      .map((r) => r.entry)
  }, [index, query])

  const grouped = useMemo(() => {
    const map = new Map<SearchType, SearchEntry[]>()
    for (const entry of results) {
      const list = map.get(entry.type) ?? []
      list.push(entry)
      map.set(entry.type, list)
    }
    return TYPE_ORDER.filter((t) => map.has(t)).map((t) => ({
      type: t,
      items: map.get(t)!,
    }))
  }, [results])

  if (!open) return null

  const hasQuery = query.trim().length > 0

  return (
    <div
      className="fixed inset-0 z-[60] flex items-start justify-center"
      role="dialog"
      aria-modal="true"
      aria-label="Search"
    >
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close search"
        onClick={onClose}
        className="absolute inset-0 cursor-default bg-foreground/40 backdrop-blur-sm"
      />

      {/* Panel */}
      <div className="relative mt-[12vh] w-full max-w-2xl px-4">
        <div className="overflow-hidden rounded-sm border border-border bg-background shadow-2xl">
          <div className="flex items-center gap-3 border-b border-border px-4">
            <SearchIcon className="size-5 shrink-0 text-muted-foreground" />
            <input
              ref={inputRef}
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products, documents, firmware, support articles and news..."
              className="h-14 w-full bg-transparent text-base text-foreground outline-none placeholder:text-muted-foreground"
              aria-label="Search query"
            />
            <button
              type="button"
              onClick={onClose}
              className="flex size-8 shrink-0 items-center justify-center rounded-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              aria-label="Close search"
            >
              <CloseIcon className="size-5" />
            </button>
          </div>

          <div className="max-h-[60vh] overflow-y-auto">
            {!hasQuery ? (
              <p className="px-5 py-10 text-center text-sm text-muted-foreground">
                Start typing to search across products, documents, firmware and
                support.
              </p>
            ) : results.length === 0 ? (
              <p className="px-5 py-10 text-center text-sm text-muted-foreground">
                No results for{' '}
                <span className="font-medium text-foreground">“{query}”</span>.
              </p>
            ) : (
              <div className="py-2">
                {grouped.map((group) => (
                  <div key={group.type} className="py-2">
                    <div className="px-5 py-1 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                      {group.type}
                    </div>
                    <ul>
                      {group.items.map((item) => (
                        <li key={`${item.type}-${item.href}-${item.title}`}>
                          <Link
                            href={item.href}
                            onClick={onClose}
                            className="flex items-start gap-3 px-5 py-3 transition-colors hover:bg-secondary"
                          >
                            <span
                              aria-hidden="true"
                              className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent"
                            />
                            <span className="min-w-0">
                              <span className="block truncate text-sm font-medium text-foreground">
                                {item.title}
                              </span>
                              <span className="block truncate text-sm text-muted-foreground">
                                {item.description}
                              </span>
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="flex items-center justify-between border-t border-border px-5 py-2.5 text-[11px] text-muted-foreground">
            <span>Site-wide search</span>
            <span className="font-mono">ESC to close</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}
