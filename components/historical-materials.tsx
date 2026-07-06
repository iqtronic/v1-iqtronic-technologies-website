import Link from 'next/link'
import { cn } from '@/lib/utils'

/**
 * Known historical-material types. New kinds (datasheets, software, PCB photos,
 * marketing materials, press articles, CE documentation, videos, ...) can be
 * added here without touching any layout or styling.
 */
export const HISTORICAL_MATERIAL_LABELS: Record<string, string> = {
  gallery: 'Product gallery',
  manualCz: 'Original manual (CZ, PDF)',
  manualEn: 'English manual (PDF)',
  firmware: 'Firmware',
  windowsUtility: 'Windows Utility',
  datasheet: 'Datasheet (PDF)',
  software: 'Software',
  pcbPhotos: 'PCB photos',
  marketing: 'Marketing materials',
  press: 'Press articles',
  ceDocs: 'CE documentation',
  video: 'Video',
}

export interface HistoricalMaterialItem {
  /** Stable identifier — either a known key above or any custom string. */
  key: string
  /** Visible label. Falls back to the known label for the key. */
  label?: string
  /** Real URL. Defaults to a placeholder ("#") until content is available. */
  href?: string
}

/** Accepts either a known/custom key string or a fully described item. */
export type HistoricalMaterialInput = string | HistoricalMaterialItem

function normalize(input: HistoricalMaterialInput): HistoricalMaterialItem {
  if (typeof input === 'string') {
    return { key: input, label: HISTORICAL_MATERIAL_LABELS[input] ?? input }
  }
  return {
    ...input,
    label: input.label ?? HISTORICAL_MATERIAL_LABELS[input.key] ?? input.key,
  }
}

/**
 * Reusable "Historical materials" link row. Items are separated by "•" and wrap
 * naturally on small screens. Links open in a new tab; PDFs are rendered inline
 * by the browser (no forced download) because no `download` attribute is set.
 *
 * Designed to be dropped into the innovation timeline today and reused on future
 * historical-product pages. Show/hide individual entries simply by adjusting the
 * `items` list — the layout stays clean regardless of how many are present.
 */
export function HistoricalMaterials({
  items,
  className,
  heading = 'Historical materials',
}: {
  items?: HistoricalMaterialInput[]
  className?: string
  heading?: string
}) {
  if (!items || items.length === 0) return null
  const resolved = items.map(normalize)

  return (
    <div className={cn('mt-4', className)}>
      <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
        {heading}
      </div>
      <ul className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
        {resolved.map((item, i) => (
          <li key={item.key} className="flex items-center gap-2">
            {i > 0 ? (
              <span aria-hidden="true" className="text-muted-foreground/40">
                •
              </span>
            ) : null}
            <Link
              href={item.href ?? '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground underline-offset-4 transition-colors hover:text-accent hover:underline"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
