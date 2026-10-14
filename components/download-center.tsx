import Link from 'next/link'
import { DownloadIcon } from '@/components/support/support-section'

type FileType = 'Software' | 'Firmware' | 'Manuals' | 'Datasheets' | 'Certificates' | 'Other'

type DownloadItem = {
  name: string
  description: string
  products: string[]
  version: string
  date: string
  os?: string
  size: string
  type: FileType
  releaseNotes?: string
}

const DOWNLOADS: DownloadItem[] = [
  { name: 'IQcontrol Utility', description: 'Configuration and diagnostics utility for IQtronic controllers.', products: ['IQGate', 'IQSocket'], version: 'v3.4.1', date: '2026-08-18', os: 'Windows', size: '42.8 MB', type: 'Software', releaseNotes: '#' },
  { name: 'IQGate Firmware', description: 'Production firmware package for remote switching and reboot devices.', products: ['IQGate GSM', 'IQGate IP'], version: 'v2.8.0', date: '2026-07-29', size: '8.6 MB', type: 'Firmware', releaseNotes: '#' },
  { name: 'IQSocket User Manual', description: 'Installation, configuration and operating guide.', products: ['IQSocket'], version: 'Rev. 5.2', date: '2026-06-12', size: '3.1 MB', type: 'Manuals' },
  { name: 'ENVISTATION Datasheet', description: 'Technical specifications for the rugged weather station range.', products: ['ENVISTATION'], version: 'Rev. 2.1', date: '2026-05-24', size: '1.4 MB', type: 'Datasheets' },
  { name: 'SENSORAGE Firmware', description: 'Firmware update package for sensor data loggers.', products: ['SENSORAGE'], version: 'v1.9.3', date: '2026-04-06', os: 'Windows', size: '12.2 MB', type: 'Firmware' },
  { name: 'CE Declaration of Conformity', description: 'Declaration of conformity for IQtronic controller products.', products: ['IQGate', 'IQSocket'], version: '2026-01', date: '2026-01-15', size: '820 KB', type: 'Certificates' },
  { name: 'Battery Monitor Integration Notes', description: 'Application notes for integrating BMS data into monitoring systems.', products: ['BMS'], version: 'Rev. 1.0', date: '2025-11-20', size: '690 KB', type: 'Other' },
]

const FILTERS: Array<'All' | FileType> = ['All', 'Software', 'Firmware', 'Manuals', 'Datasheets', 'Certificates', 'Other']
const ALPHABET = ['All', ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')]

export function DownloadCenter() {
  const filtered = [...DOWNLOADS].sort((a, b) => a.name.localeCompare(b.name))

  return (
    <div>
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-accent">
              <DownloadIcon className="size-5" />
              Support / Download Center
            </div>
            <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">Download Center</h1>
            <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              Find software, firmware, manuals, datasheets and certificates for IQtronic products. Search by file name, filter by type, or browse the library alphabetically.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-6 py-8 lg:px-10 lg:py-10">
          <label className="block">
            <span className="sr-only">Search downloads</span>
            <input aria-label="Search downloads preview" placeholder="Search downloads" readOnly className="h-12 w-full rounded-sm border border-border bg-card px-4 text-sm outline-none placeholder:text-muted-foreground" />
          </label>
          <div className="mt-6 flex flex-wrap gap-2" aria-label="Filter downloads by file type">
            {FILTERS.map((item) => <button key={item} type="button" aria-disabled={item !== 'All'} className={`rounded-sm border px-4 py-2 text-xs font-medium ${item === 'All' ? 'border-primary bg-primary text-primary-foreground' : 'border-border bg-card text-foreground'}`}>{item}</button>)}
          </div>
          <nav className="mt-8" aria-label="Browse downloads alphabetically">
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">Browse A–Z</p>
            <div className="flex flex-wrap gap-1">
              {ALPHABET.map((item) => <button key={item} type="button" aria-disabled={item !== 'All'} className={`min-size-8 min-w-8 rounded-sm border px-2 py-1.5 text-xs ${item === 'All' ? 'border-primary bg-primary text-primary-foreground' : 'border-border bg-card text-muted-foreground'}`}>{item}</button>)}
            </div>
          </nav>
        </div>
      </section>

      <section className="bg-card">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10 lg:py-16">
          <div className="flex items-end justify-between gap-4"><div><p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">Technical library</p><h2 className="mt-3 text-2xl font-semibold tracking-tight">Available files</h2></div><p className="text-sm text-muted-foreground">{filtered.length} files</p></div>
          <div className="mt-8 overflow-hidden rounded-sm border border-border">
            {filtered.length > 0 ? filtered.map((item) => (
              <article key={item.name} className="border-b border-border bg-background p-5 last:border-b-0 lg:p-6">
                <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
                  <div className="min-w-0 xl:max-w-[42%]"><h3 className="text-base font-semibold tracking-tight">{item.name}</h3><p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.description}</p><div className="mt-3 flex flex-wrap gap-1.5">{item.products.map((product) => <span key={product} className="rounded-sm border border-border px-2 py-1 font-mono text-[10px] uppercase tracking-[0.08em] text-muted-foreground">{product}</span>)}</div></div>
                  <dl className="grid grid-cols-2 gap-x-6 gap-y-3 text-xs text-muted-foreground sm:grid-cols-4 xl:min-w-[390px]"><div><dt className="font-mono text-[10px] uppercase tracking-[0.12em]">Version</dt><dd className="mt-1 text-foreground">{item.version}</dd></div><div><dt className="font-mono text-[10px] uppercase tracking-[0.12em]">Updated</dt><dd className="mt-1 text-foreground">{item.date}</dd></div><div><dt className="font-mono text-[10px] uppercase tracking-[0.12em]">OS / size</dt><dd className="mt-1 text-foreground">{item.os ? `${item.os} · ${item.size}` : item.size}</dd></div><div><dt className="font-mono text-[10px] uppercase tracking-[0.12em]">Type</dt><dd className="mt-1 text-foreground">{item.type}</dd></div></dl>
                  <div className="flex shrink-0 items-center gap-4"><Link href="#" className="inline-flex items-center gap-2 rounded-sm bg-primary px-4 py-2.5 text-xs font-medium text-primary-foreground transition-opacity hover:opacity-90">Download <span aria-hidden="true">↓</span></Link>{item.releaseNotes ? <Link href={item.releaseNotes} className="text-xs font-medium text-foreground underline decoration-border underline-offset-4 hover:decoration-accent">Release notes</Link> : null}</div>
                </div>
              </article>
            )) : <p className="bg-background p-8 text-sm text-muted-foreground">No files match your filters.</p>}
          </div>
        </div>
      </section>
    </div>
  )
}
