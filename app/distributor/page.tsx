import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { PageHero } from '@/components/page-hero'
import { DistributorDirectory } from '@/components/distributor-directory'
import { PartnerApplicationForm } from '@/components/partner-application-form'
import { PARTNER_TYPES } from '@/lib/distributors'

export const metadata: Metadata = {
  title: 'Become a Distributor — IQtronic Technologies',
  description:
    'Join the IQtronic global partner network. Distribute industrial IoT, GSM devices and meteorological systems with direct manufacturer and engineering support from a European developer and manufacturer.',
}

const BENEFITS = [
  {
    code: 'B-01',
    title: 'Direct manufacturer support',
    body: 'Work directly with the team that designs and builds the hardware — no intermediaries, no rebadged products.',
  },
  {
    code: 'B-02',
    title: 'Long-term product availability',
    body: 'In-house production and lifecycle planning mean stable, long-lived product lines you can commit to.',
  },
  {
    code: 'B-03',
    title: 'OEM customization',
    body: 'Private-label firmware, enclosures and branding options for your key accounts and verticals.',
  },
  {
    code: 'B-04',
    title: 'Technical documentation',
    body: 'Complete datasheets, integration guides, protocol references and application notes for every product.',
  },
  {
    code: 'B-05',
    title: 'Engineering support',
    body: 'Pre-sales and integration assistance from practising engineers, not a generic support queue.',
  },
  {
    code: 'B-06',
    title: 'European development & manufacturing',
    body: 'Designed, developed and manufactured in Europe with full traceability and compliance.',
  },
]

const PARTNER_TYPE_DESCRIPTIONS: Record<string, string> = {
  Distributor:
    'Stock and resell the full IQtronic catalogue across your territory with protected pricing.',
  Reseller:
    'Offer IQtronic products to your customers without holding large inventory.',
  'System Integrator':
    'Embed IQtronic devices into turnkey monitoring and control solutions.',
  'OEM Partner':
    'Build IQtronic hardware and firmware into your own branded products.',
}

export default function BecomeADistributorPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Partnership"
          title="Become a distributor."
          description="Join the IQtronic global partner network and bring field-proven industrial IoT, GSM devices and meteorological systems to your market — backed by the European engineers who design and manufacture them."
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Become a Distributor' },
          ]}
        />

        {/* Global network — map + directory */}
        <section className="border-b border-border bg-background">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-accent">
                <span
                  className="inline-block size-2 bg-accent"
                  aria-hidden="true"
                />
                Global network
              </div>
              <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                Partners across seven regions.
              </h2>
              <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
                Explore the IQtronic distributor network. Select a region marker
                or use the filters to find a partner by region and country.
              </p>
            </div>

            <div className="mt-12">
              <DistributorDirectory />
            </div>

            <p className="mt-10 font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
              Note · Distributor data shown is placeholder content and can be
              replaced with live partner records.
            </p>
          </div>
        </section>

        {/* Why become a distributor */}
        <section className="border-b border-border bg-card">
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

        {/* Partner types */}
        <section className="border-b border-border bg-background">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
            <div className="max-w-2xl">
              <div className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                Partner types
              </div>
              <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                Four ways to work together.
              </h2>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
              {PARTNER_TYPES.map((type, i) => (
                <div key={type} className="flex flex-col bg-card p-8">
                  <span className="font-mono text-sm text-accent">
                    {`P-0${i + 1}`}
                  </span>
                  <h3 className="mt-6 text-lg font-medium tracking-tight">
                    {type}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {PARTNER_TYPE_DESCRIPTIONS[type]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Application form */}
        <section className="bg-background">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
              <div className="lg:col-span-5">
                <div className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                  Apply
                </div>
                <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                  Apply to join the network.
                </h2>
                <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
                  Tell us about your company and the markets you serve. A partner
                  manager will follow up with territory availability, commercial
                  terms and onboarding details.
                </p>
                <dl className="mt-10 grid grid-cols-1 gap-6 border-t border-border pt-8 sm:grid-cols-2">
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
              </div>

              <div className="lg:col-span-7">
                <PartnerApplicationForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
