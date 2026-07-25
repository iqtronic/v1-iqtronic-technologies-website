'use client'

import { cn } from '@/lib/utils'
import { LEGAL_CATEGORIES, type LegalCategory } from '@/lib/legal'

export type CategoryValue = 'All' | LegalCategory

export function CategoryFilter({
  active,
  onChange,
}: {
  active: CategoryValue
  onChange: (value: CategoryValue) => void
}) {
  const options: CategoryValue[] = ['All', ...LEGAL_CATEGORIES]

  return (
    <div
      role="group"
      aria-label="Filter documents by category"
      className="flex flex-wrap gap-2"
    >
      {options.map((option) => {
        const isActive = active === option
        return (
          <button
            key={option}
            type="button"
            onClick={() => onChange(option)}
            aria-pressed={isActive}
            className={cn(
              'rounded-sm border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] transition-all duration-200',
              isActive
                ? 'border-accent bg-accent text-accent-foreground'
                : 'border-border bg-card text-muted-foreground hover:border-accent/40 hover:text-foreground',
            )}
          >
            {option}
          </button>
        )
      })}
    </div>
  )
}
