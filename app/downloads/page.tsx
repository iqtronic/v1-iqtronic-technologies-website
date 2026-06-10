import type { Metadata } from 'next'
import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { PageHero } from '@/components/page-hero'

export const metadata: Metadata = {
  title: 'Download Center — IQtronic Technologies',
  description:
    'Datasheets, user manuals, firmware, declarations of conformity and software tools for IQtronic industrial IoT and meteorological products.',
}

type DownloadItem = { name: string; type: string; size: string; version?: string }

const CATEGORIES: { title: string; eyebrow: string; items: DownloadItem[] }[] = [
  {
    eyebrow: 'Datasheets',
    title: 'Product datasheets',
    items: [
      { name: 'IQSocket — Datasheet', type: 'PDF', size: '1.4 MB', version: 'Rev. C' },
      { name: 'Industrial Weather Station — Datasheet', type: 'PDF', size: '2.1 MB', version: 'Rev. B' },
      { name: 'Monitoring Gateway — Datasheet', type: 'PDF', size: '1.8 MB', version: 'Rev. A' },
    ],
  },
  {
    eyebrow: 'Manuals',
    title: 'User manuals',
    items: [
      { name: 'IQSocket — User Manual', type: 'PDF', size: '3.2 MB', version: 'v4.2' },
      { name: 'Weather Station — Installation Guide', type: 'PDF', size: '4.0 MB', version: 'v2.6' },
      { name: 'Monitoring System — Configuration Manual', type: 'PDF', size: '2.9 MB', version: 'v3.1' },
    ],
  },
  {
    eyebrow: 'Firmware',
    title: 'Firmware & software',
    items: [
      { name: 'IQSocket Firmware', type: 'BIN', size: '512 KB', version: 'v4.2.1' },
      { name: 'Monitoring Gateway Firmware', type: 'BIN', size: '1.1 MB', version: 'v3.1.0' },
      { name: 'IQtronic Configurator (Windows)', type: 'EXE', size: '28 MB', version: 'v2.4' },
    ],
  },
  {
    eyebrow: 'Compliance',
    title: 'Certificates & declarations',
    items: [
      { name: 'EU Declaration of Conformity — IQSocket', type: 'PDF', size: '320 KB' },
      { name: 'CE Certificate — Weather Station', type: 'PDF', size: '410 KB' },
      { name: 'ISO 9001 Certificate', type: 'PDF', size: '280 KB' },
    ],
  },
]

export default function DownloadsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Download Center"
          title="Documentation, firmware and tools."
          description="Everything you need to specify, install and maintain IQtronic products. Datasheets, manuals, firmware and compliance documents in one place."
          breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Downloads' }]}
        />

        {CATEGORIES.map((category, idx) => (
          <section
            key={category.title}
            className={`border-b border-border ${
              idx % 2 === 0 ? 'bg-background' : 'bg-card'
            }`}
          >
            <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
              <div className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                {category.eyebrow}
              </div>
              <h2 className="mt-5 text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
                {category.title}
              </h2>

              <ul className="mt-8 overflow-hidden rounded-sm border border-border">
                {category.items.map((item, i) => (
                  <li
                    key={item.name}
                    className={`flex flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between ${
                      i > 0 ? 'border-t border-border' : ''
                    } ${idx % 2 === 0 ? 'bg-card' : 'bg-background'}`}
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className="inline-flex shrink-0 items-center rounded-sm border border-border px-2 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground"
                      >
                        {item.type}
                      </span>
                      <span className="text-sm font-medium text-foreground">
                        {item.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-6 pl-12 sm:pl-0">
                      <span className="font-mono text-xs text-muted-foreground">
                        {item.version ? `${item.version} · ` : ''}
                        {item.size}
                      </span>
                      <a
                        href="#"
                        className="inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent"
                      >
                        Download
                        <span aria-hidden="true">↓</span>
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}

        {/* CTA */}
        <section className="bg-background">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
            <div className="flex flex-col items-start justify-between gap-8 rounded-sm border border-border bg-card p-8 lg:flex-row lg:items-center lg:p-12">
              <div className="max-w-2xl">
                <div className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                  Can&apos;t find a document?
                </div>
                <h2 className="mt-5 text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
                  Our support team can send it directly.
                </h2>
              </div>
              <Link
                href="/support"
                className="inline-flex shrink-0 items-center gap-2 rounded-sm bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                Technical support
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
