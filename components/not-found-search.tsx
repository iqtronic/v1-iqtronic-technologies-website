'use client'

import { useState } from 'react'
import { SearchOverlay } from '@/components/search-overlay'

/**
 * Compact product search for the 404 page. Reuses the site-wide SearchOverlay
 * rather than introducing a second search system: submitting the field opens
 * the existing overlay seeded with the typed query.
 */
export function NotFoundSearch() {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState('')

  return (
    <div>
      <label
        htmlFor="nf-search"
        className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground"
      >
        Search products
      </label>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          setOpen(true)
        }}
        className="mt-3 flex items-center gap-2 rounded-sm border border-border bg-card pl-3 pr-1 transition-colors focus-within:border-accent"
      >
        <input
          id="nf-search"
          type="search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Search by product name, category or model…"
          className="h-11 w-full min-w-0 bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
          aria-label="Search products"
        />
        <button
          type="submit"
          aria-label="Search"
          className="flex size-9 shrink-0 items-center justify-center rounded-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
        >
          <SearchIcon className="size-5" />
        </button>
      </form>
      <SearchOverlay
        open={open}
        onClose={() => setOpen(false)}
        initialQuery={value}
      />
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
