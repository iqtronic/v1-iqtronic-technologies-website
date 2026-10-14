import Link from 'next/link'
import { DownloadIcon } from '@/components/support/support-section'

type FileType = 'Software' | 'Firmware' | 'Manuals' | 'Datasheets' | 'Certificates' | 'Other'

type DownloadItem = {
  fileName: string
  date: string
  size: string
  sha256: string
  type: FileType
}

const DOWNLOADS: DownloadItem[] = [
  { fileName: 'configuration-utility.zip', date: '2026-08-18', size: '42.8 MB', sha256: '9f3a…c821', type: 'Software' },
  { fileName: 'controller-firmware.bin', date: '2026-07-29', size: '8.6 MB', sha256: 'a71c…04ef', type: 'Firmware' },
  { fileName: 'user-manual.pdf', date: '2026-06-12', size: '3.1 MB', sha256: '42bd…91a0', type: 'Manuals' },
  { fileName: 'datasheet.pdf', date: '2026-05-24', size: '1.4 MB', sha256: 'd18e…77b2', type: 'Datasheets' },
  { fileName: 'firmware-update.bin', date: '2026-04-06', size: '12.2 MB', sha256: '6c04…a5d9', type: 'Firmware' },
  { fileName: 'declaration-of-conformity.pdf', date: '2026-01-15', size: '820 KB', sha256: 'b0e2…6f14', type: 'Certificates' },
]

const FILTERS: Array<'All' | FileType> = ['All', 'Software', 'Firmware', 'Manuals', 'Datasheets', 'Certificates', 'Other']
const ALPHABET = ['All', ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')]

export function DownloadCenter() {
  const filtered = [...DOWNLOADS].sort((a, b) => a.fileName.localeCompare(b.fileName))

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
              <article key={item.fileName} className="border-b border-border bg-background p-5 last:border-b-0 lg:p-6">
                <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
                  <div className="min-w-0 xl:flex-1"><p className="break-all font-mono text-sm font-medium text-foreground">{item.fileName}</p><p className="mt-1 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">{item.type}</p></div>
                  <dl className="grid grid-cols-3 gap-5 text-xs text-muted-foreground sm:min-w-[390px] sm:grid-cols-3"><div><dt className="font-mono text-[10px] uppercase tracking-[0.12em]">File size</dt><dd className="mt-1 text-foreground">{item.size}</dd></div><div><dt className="font-mono text-[10px] uppercase tracking-[0.12em]">Uploaded</dt><dd className="mt-1 text-foreground">{item.date}</dd></div><div><dt className="font-mono text-[10px] uppercase tracking-[0.12em]">SHA-256</dt><dd className="mt-1 font-mono text-foreground">{item.sha256}</dd></div></dl>
                  <Link href="#" aria-label={`Download ${item.fileName}`} className="inline-flex size-10 shrink-0 items-center justify-center rounded-sm border border-border bg-card text-foreground transition-colors hover:border-accent hover:text-accent"><DownloadIcon className="size-4" /></Link>
                </div>
              </article>
            )) : <p className="bg-background p-8 text-sm text-muted-foreground">No files match your filters.</p>}
          </div>
        </div>
      </section>
    </div>
  )
}
