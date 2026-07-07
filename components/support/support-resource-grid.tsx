import Link from 'next/link'
import type { SupportResource } from '@/lib/support'

/**
 * Shared list renderer for resource-style sections (Documentation, Video
 * Tutorials, Downloads). Renders each item as a bordered, hoverable link with
 * an optional metadata tag. Reused across sections for a consistent look.
 */
export function SupportResourceGrid({
  items,
  emptyLabel = 'Content coming soon.',
}: {
  items: SupportResource[]
  emptyLabel?: string
}) {
  if (items.length === 0) {
    return (
      <p className="text-sm leading-relaxed text-muted-foreground">
        {emptyLabel}
      </p>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2">
      {items.map((item) => (
        <Link
          key={item.label}
          href={item.href ?? '#'}
          className="group flex items-center justify-between gap-4 bg-card p-5 transition-colors hover:bg-background"
        >
          <span className="flex items-baseline gap-3">
            <span className="text-base font-medium tracking-tight text-foreground">
              {item.label}
            </span>
            {item.meta ? (
              <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                {item.meta}
              </span>
            ) : null}
          </span>
          <span
            aria-hidden="true"
            className="shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-accent"
          >
            →
          </span>
        </Link>
      ))}
    </div>
  )
}
