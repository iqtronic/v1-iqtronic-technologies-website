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
      className="flex cursor-pointer items-center justify-between gap-4 py-1"
    >
      <span className="text-sm text-foreground">{label}</span>
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
      className="w-full rounded-sm border border-border bg-card p-5 lg:w-72 lg:shrink-0"
    >
      <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
        Preview controls
      </div>

      <dl className="mt-4 space-y-2 border-b border-border pb-4 text-sm">
        <div className="flex items-center justify-between gap-4">
          <dt className="text-muted-foreground">Platform</dt>
          <dd className="font-medium text-foreground">{config.label}</dd>
        </div>
        <div className="flex items-center justify-between gap-4">
          <dt className="text-muted-foreground">Canvas</dt>
          <dd className="font-mono text-xs text-foreground">
            {config.width} × {config.height}
          </dd>
        </div>
      </dl>

      <div className="mt-4 space-y-1 border-b border-border pb-4">
        <Toggle
          id="toggle-cta"
          label="Show CTA button"
          checked={showCTA}
          onChange={onShowCTAChange}
        />
        <Toggle
          id="toggle-globe"
          label="Show globe motif"
          checked={showGlobeMotif}
          onChange={onShowGlobeMotifChange}
        />
      </div>

      <div className="mt-4 flex flex-col gap-2">
        <button
          type="button"
          onClick={onExport}
          disabled={exporting}
          className="inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
        >
          {exporting ? 'Exporting…' : 'Export PNG'}
        </button>
        <button
          type="button"
          onClick={onCopyUrl}
          className="inline-flex items-center justify-center gap-2 rounded-sm border border-border px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
        >
          {copied ? 'Copied' : 'Copy article URL'}
        </button>
        <button
          type="button"
          onClick={onOpenArticle}
          className="inline-flex items-center justify-center gap-2 rounded-sm border border-border px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
        >
          Open article
          <span aria-hidden="true">→</span>
        </button>
      </div>

      <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
        This panel is for internal preview only and is never included in the
        exported image.
      </p>
    </aside>
  )
}
