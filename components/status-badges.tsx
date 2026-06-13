import { cn } from '@/lib/utils'
import {
  AVAILABILITY_LABELS,
  LIFECYCLE_LABELS,
  type Availability,
  type Lifecycle,
} from '@/lib/products'

const LIFECYCLE_STYLES: Record<Lifecycle, string> = {
  active: 'border-accent/40 bg-accent/10 text-accent',
  'phase-out': 'border-foreground/30 bg-secondary text-foreground',
  obsolete: 'border-border bg-muted text-muted-foreground',
  planned: 'border-foreground/30 bg-secondary text-foreground',
}

export function LifecycleBadge({
  lifecycle,
  className,
}: {
  lifecycle: Lifecycle
  className?: string
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-sm border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em]',
        LIFECYCLE_STYLES[lifecycle],
        className,
      )}
    >
      <span
        className={cn(
          'inline-block size-1.5 rounded-full',
          lifecycle === 'active' ? 'bg-accent' : 'bg-current',
        )}
        aria-hidden="true"
      />
      {LIFECYCLE_LABELS[lifecycle]}
    </span>
  )
}

export function AvailabilityBadge({
  availability,
  className,
}: {
  availability: Availability
  className?: string
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-sm border border-border bg-card px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground',
        className,
      )}
    >
      {AVAILABILITY_LABELS[availability]}
    </span>
  )
}
