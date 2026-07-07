import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

/**
 * Shared layout wrapper for every product-support section. Keeps the eyebrow,
 * icon, title and spacing consistent so individual section components only need
 * to provide their content.
 */
export function SupportSection({
  id,
  eyebrow,
  title,
  icon,
  tinted = false,
  children,
}: {
  id?: string
  eyebrow: string
  title: string
  icon: ReactNode
  /** Alternate background so stacked sections read as distinct bands. */
  tinted?: boolean
  children: ReactNode
}) {
  return (
    <section
      id={id}
      className={cn(
        'border-b border-border',
        tinted ? 'bg-card' : 'bg-background',
      )}
    >
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <div className="flex items-center gap-3">
          <span className="flex size-9 items-center justify-center rounded-sm border border-border bg-background text-accent">
            {icon}
          </span>
          <span className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
            {eyebrow}
          </span>
        </div>
        <h2 className="mt-5 text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
          {title}
        </h2>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  )
}

/* ---------------------------------------------------------------- Icons ---- */

interface IconProps {
  className?: string
}

const svgProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
}

export function DocumentationIcon({ className }: IconProps) {
  return (
    <svg {...svgProps} className={className}>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
      <path d="M14 3v5h5" />
      <path d="M9 13h6" />
      <path d="M9 17h6" />
    </svg>
  )
}

export function VideoIcon({ className }: IconProps) {
  return (
    <svg {...svgProps} className={className}>
      <rect x="2" y="5" width="14" height="14" rx="2" />
      <path d="m22 8-6 4 6 4z" />
    </svg>
  )
}

export function KnowledgeIcon({ className }: IconProps) {
  return (
    <svg {...svgProps} className={className}>
      <path d="M12 3a6 6 0 0 0-4 10.5c.5.5 1 1.2 1 2V16h6v-.5c0-.8.5-1.5 1-2A6 6 0 0 0 12 3Z" />
      <path d="M9 20h6" />
      <path d="M10 22h4" />
    </svg>
  )
}

export function DownloadIcon({ className }: IconProps) {
  return (
    <svg {...svgProps} className={className}>
      <path d="M12 3v12" />
      <path d="m7 10 5 5 5-5" />
      <path d="M5 21h14" />
    </svg>
  )
}

export function ContactIcon({ className }: IconProps) {
  return (
    <svg {...svgProps} className={className}>
      <path d="M4 4h16a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Z" />
      <path d="m4 6 8 6 8-6" />
    </svg>
  )
}
