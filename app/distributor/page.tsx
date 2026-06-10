import type { Metadata } from 'next'
import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { PageHero } from '@/components/page-hero'

export const metadata: Metadata = {
  title: 'Become a Distributor — IQtronic Technologies',
  description:
    'Partner with IQtronic Technologies to distribute industrial IoT, GSM devices and meteorological systems across your region with full engineering and technical support.',
}

const BENEFITS = [
  {
    code: 'D-01',
    title: 'Competitive margins',
    body: 'Tiered distributor pricing with volume incentives and protected project registration.',
  },
  {
    code: 'D-02',
    title: 'Engineering support',
    body: 'Direct access to the engineers who design the products — pre-sales and integration help included.',
  },
  {
    code: 'D-03',
    title: 'Marketing assets',
    body: 'Datasheets, imagery, application notes and co-branded materials ready for your market.',
  },
  {
    code: 'D-04',
    title: 'Stock & lead times',
    body: 'In-house manufacturing means reliable availability and transparent production planning.',
  },
  {
    code: 'D-05',
    title: 'Training',
    body: 'Onboarding and ongoing technical training for your sales and support teams.',
  },
  {
    code: 'D-06',
    title: 'OEM & customization',
    body: 'Options for private-label firmware, enclosures and branding for your key accounts.',
  },
]

const STEPS = [
  { step: '01', title: 'Apply', body: 'Send us your company profile, markets and target segments.' },
  { step: '02', title: 'Qualify', body: 'We align on territory, product focus and commercial terms.' },
  { step: '03', title: 'Onboard', body: 'Receive pricing, assets, training and engineering contacts.' },
  { step: '04', title: 'Grow', body: 'Launch with ongoing support and joint demand-generation.' },
]

const REGIONS = [
  'Central & Eastern Europe',
  'Western Europe',
  'Nordics & Baltics',
  'Middle East',
  'North Africa',
  'Asia-Pacific',
]

export default function DistributorPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Partnership"
          title="Become an IQtronic distributor."
          description="Bring field-proven industrial IoT, GSM devices and meteorological systems to your market — backed by the engineers who build them."
          breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Distributor' }]}
        />

        {/* Benefits */}
        <section className="border-b border-border bg-background">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
            <div className="max-w-2xl">
              <div className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                Why partner with us
              </div>
              <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                A manufacturer that backs its partners.
              </h2>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
              {BENEFITS.map((item) => (
                <div key={item.code} className="flex flex-col bg-card p-8">
                  <span className="font-mono text-sm text-accent">
                    {item.code}
                  </span>
                  <h3 className="mt-6 text-lg font-medium tracking-tight">
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

        {/* Process */}
        <section className="border-b border-border bg-card">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
            <div className="max-w-2xl">
              <div className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                How it works
              </div>
              <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                Four steps to partnership.
              </h2>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
              {STEPS.map((item) => (
                <div key={item.step} className="flex flex-col bg-card p-8">
                  <span className="font-mono text-sm text-accent">
                    {item.step}
                  </span>
                  <h3 className="mt-6 text-lg font-medium tracking-tight">
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

        {/* Regions + apply */}
        <section className="bg-background">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
              <div className="lg:col-span-5">
                <div className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                  Territories
                </div>
                <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                  Open regions.
                </h2>
                <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
                  We are actively expanding our distributor network. If your
                  region isn&apos;t listed, talk to us anyway.
                </p>
                <ul className="mt-8 flex flex-col">
                  {REGIONS.map((region) => (
                    <li
                      key={region}
                      className="flex items-center gap-3 border-t border-border py-4 first:border-t-0 text-sm text-foreground"
                    >
                      <span
                        className="inline-block size-1.5 bg-accent"
                        aria-hidden="true"
                      />
                      {region}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:col-span-7">
                <div className="rounded-sm border border-border bg-card p-8 lg:p-12">
                  <div className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                    Apply
                  </div>
                  <h2 className="mt-5 text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
                    Tell us about your business.
                  </h2>
                  <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                    Send us your company profile and the markets you serve. A
                    partner manager will get back to you with next steps and
                    commercial terms.
                  </p>
                  <dl className="mt-8 grid grid-cols-1 gap-6 border-t border-border pt-8 sm:grid-cols-2">
                    {[
                      { label: 'Partnerships', value: 'partners@iqtronic.com' },
                      { label: 'Phone', value: '+420 000 000 000' },
                    ].map((item) => (
                      <div key={item.label}>
                        <dt className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
                          {item.label}
                        </dt>
                        <dd className="mt-1 text-sm font-medium text-foreground">
                          {item.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                  <Link
                    href="/contact"
                    className="mt-8 inline-flex items-center gap-2 rounded-sm bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                  >
                    Apply to distribute
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
