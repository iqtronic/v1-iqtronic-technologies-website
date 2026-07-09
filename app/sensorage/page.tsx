import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { BrandName } from '@/components/support/brand-name'

export const metadata: Metadata = {
  title: 'SENSORAGE — Sensing & Data Logging Systems | IQtronic Technologies',
  description:
    'SENSORAGE is the IQtronic family of sensor systems, data loggers and remote measurement units for continuous environmental and industrial monitoring.',
  alternates: { canonical: '/sensorage' },
}

const STRENGTHS = [
  {
    title: 'Continuous measurement',
    body: 'Reliable, uninterrupted acquisition of environmental and industrial parameters, day and night.',
  },
  {
    title: 'Long-term data logging',
    body: 'On-board storage keeps your measurement history safe, with store-and-forward over unstable links.',
  },
  {
    title: 'Remote by design',
    body: 'Built for unattended and off-grid sites, with cellular connectivity and low-power operation.',
  },
  {
    title: 'Industrial integration',
    body: 'Speaks the protocols your infrastructure already uses, so data flows straight into your systems.',
  },
]

const APPLICATIONS = [
  'Environmental monitoring',
  'Industrial automation',
  'Energy & utilities',
  'Agriculture & field research',
]

export default function SensoragePage() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="border-b border-border bg-card pt-16">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
            <nav
              aria-label="Breadcrumb"
              className="mb-8 flex flex-wrap items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground"
            >
              <Link
                href="/"
                className="transition-colors hover:text-foreground"
              >
                Home
              </Link>
              <span className="text-accent" aria-hidden="true">
                /
              </span>
              <span className="text-foreground">
                <BrandName name="SENSORAGE" />
              </span>
            </nav>

            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-accent">
                  <span
                    className="inline-block size-2 bg-accent"
                    aria-hidden="true"
                  />
                  Sensing &amp; Data Logging
                </div>
                <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
                  <BrandName name="SENSORAGE" />
                </h1>
                <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
                  Measurement you can build on. <BrandName name="SENSORAGE" />{' '}
                  turns remote and demanding environments into a continuous,
                  dependable stream of data.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/products#sensorage"
                    className="inline-flex items-center gap-2 rounded-sm bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                  >
                    View products
                    <span aria-hidden="true">→</span>
                  </Link>
                  <Link
                    href="/support/sensorage"
                    className="inline-flex items-center gap-2 rounded-sm border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
                  >
                    Product support
                  </Link>
                </div>
              </div>

              <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-border bg-secondary">
                <Image
                  src="/images/iqtronic-sensorage-datalogger.png"
                  alt="SENSORAGE industrial data logger and sensor system"
                  fill
                  priority
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="border-b border-border bg-background">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
            <div className="max-w-3xl">
              <div className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                Overview
              </div>
              <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                Data where it&apos;s hardest to get.
              </h2>
              <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
                <BrandName name="SENSORAGE" /> is the IQtronic family of sensor
                systems, data loggers and remote measurement units. Engineered
                for the field and supported in-house for the long term, it is
                designed to keep measuring where conditions are toughest and
                access is limited — quietly, continuously and for years.
              </p>
            </div>
          </div>
        </section>

        {/* Strengths */}
        <section className="border-b border-border bg-card">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
            <div className="max-w-2xl">
              <div className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                Why SENSORAGE
              </div>
              <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                Built to keep measuring.
              </h2>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2">
              {STRENGTHS.map((item) => (
                <div key={item.title} className="flex flex-col bg-card p-8">
                  <span
                    className="inline-block size-2 bg-accent"
                    aria-hidden="true"
                  />
                  <h3 className="mt-5 text-lg font-medium tracking-tight text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="border-b border-border bg-background">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
            <div className="max-w-2xl">
              <div className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                Applications
              </div>
              <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                Where it works.
              </h2>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
              {APPLICATIONS.map((app) => (
                <div key={app} className="flex flex-col bg-card p-8">
                  <span
                    className="inline-block size-2 bg-accent"
                    aria-hidden="true"
                  />
                  <h3 className="mt-5 text-base font-medium tracking-tight text-foreground">
                    {app}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-card">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
            <div className="flex flex-col items-start justify-between gap-8 rounded-sm border border-border bg-background p-10 md:flex-row md:items-center">
              <div className="max-w-xl">
                <h2 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
                  Explore the <BrandName name="SENSORAGE" /> range.
                </h2>
                <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                  See the full product line-up, specifications and downloads.
                </p>
              </div>
              <Link
                href="/products#sensorage"
                className="inline-flex shrink-0 items-center gap-2 rounded-sm bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                View products
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
