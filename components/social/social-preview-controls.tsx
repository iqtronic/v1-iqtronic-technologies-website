'use client'

import { cn } from '@/lib/utils'
import type { PlatformConfig } from '@/lib/social-news'

type ToggleProps = {
  id: string
  label: string
  checked: boolean
  onChange: (next: boolean) => void
}

function Toggle({ id, label, checked, onChange }: ToggleProps) {
  return (
    <label
      htmlFor={id}
      className="flex cursor-pointer items-center gap-2 text-sm text-muted-foreground"
    >
      <button
        id={id}
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        className={cn(
          'relative inline-flex h-5 w-9 shrink-0 items-center rounded-full border border-border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2',
          checked ? 'bg-accent' : 'bg-secondary',
        )}
      >
        <span
          className={cn(
            'inline-block size-3.5 rounded-full bg-background shadow-sm transition-transform',
            checked ? 'translate-x-4' : 'translate-x-0.5',
          )}
        />
      </button>
      {label}
    </label>
  )
}

export type SocialPreviewControlsProps = {
  config: PlatformConfig
  showCTA: boolean
  onShowCTAChange: (next: boolean) => void
  showGlobeMotif: boolean
  onShowGlobeMotifChange: (next: boolean) => void
  onCopyUrl: () => void
  onOpenArticle: () => void
  onExport: () => void
  copied: boolean
  exporting: boolean
}

export function SocialPreviewControls({
  config,
  showCTA,
  onShowCTAChange,
  showGlobeMotif,
  onShowGlobeMotifChange,
  onCopyUrl,
  onOpenArticle,
  onExport,
  copied,
  exporting,
}: SocialPreviewControlsProps) {
  return (
    <aside
      aria-label="Preview controls"
      className="mt-6 flex w-full max-w-[1200px] flex-wrap items-center justify-center gap-x-6 gap-y-3 rounded-sm border border-border/70 bg-card/70 px-5 py-3"
    >
      <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
        {config.label} · {config.width} × {config.height}
      </span>

      <span className="hidden h-4 w-px bg-border sm:block" aria-hidden="true" />

      <Toggle
        id="toggle-cta"
        label="CTA"
        checked={showCTA}
        onChange={onShowCTAChange}
      />
      <Toggle
        id="toggle-globe"
        label="Globe"
        checked={showGlobeMotif}
        onChange={onShowGlobeMotifChange}
      />

      <span className="hidden h-4 w-px bg-border sm:block" aria-hidden="true" />

      <button
        type="button"
        onClick={onCopyUrl}
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        {copied ? 'Copied' : 'Copy URL'}
      </button>
      <button
        type="button"
        onClick={onOpenArticle}
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        Open article
      </button>

      <button
        type="button"
        onClick={onExport}
        disabled={exporting}
        className="inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {exporting ? 'Exporting…' : 'Export PNG'}
      </button>
    </aside>
  )
}
