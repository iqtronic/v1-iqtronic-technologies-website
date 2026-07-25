'use client'

import { useId } from 'react'
import { ClearIcon, SearchIcon } from '@/components/legal/legal-icons'

export function LegalSearch({
  value,
  onChange,
  onClear,
  resultCount,
}: {
  value: string
  onChange: (value: string) => void
  onClear: () => void
  resultCount: number
}) {
  const id = useId()

  return (
    <div>
      <label
        htmlFor={id}
        className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground"
      >
        Search legal documents
      </label>
      <div className="mt-3 flex items-center gap-2 rounded-sm border border-border bg-card pl-3 pr-1 transition-colors focus-within:border-accent">
        <SearchIcon className="size-5 shrink-0 text-muted-foreground" />
        <input
          id={id}
          type="search"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search legal documents..."
          autoComplete="off"
          aria-label="Search legal documents"
          aria-describedby={`${id}-count`}
          className="h-11 w-full min-w-0 bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground [&::-webkit-search-cancel-button]:hidden"
        />
        {value ? (
          <button
            type="button"
            onClick={onClear}
            aria-label="Clear search"
            className="flex size-9 shrink-0 items-center justify-center rounded-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            <ClearIcon className="size-4" />
          </button>
        ) : (
          <span className="size-9 shrink-0" aria-hidden="true" />
        )}
      </div>
      <p id={`${id}-count`} className="sr-only" aria-live="polite">
        {resultCount} documents found
      </p>
    </div>
  )
}
