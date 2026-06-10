import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { PageHero } from '@/components/page-hero'

export const metadata: Metadata = {
  title: 'Who We Are — IQtronic Technologies',
  description:
    'An independent European engineering company building industrial IoT, custom electronics and accredited test laboratories since 1999.',
}

const TIMELINE = [
  {
    year: '1999',
    title: 'Founded as an engineering practice',
    body: 'Established to solve hard electronics problems for industrial clients across Europe.',
  },
  {
    year: '2003',
    title: 'Entered Industrial IoT',
    body: 'Among the first to bring connected telemetry and remote control to the industrial field.',
  },
  {
    year: '2011',
    title: 'In-house laboratories',
    body: 'Opened EMC and microwave facilities to certify products end to end, under one roof.',
  },
  {
    year: '2018',
    title: 'Own tooling & moulding',
    body: 'Added plastic injection moulding to deliver complete, enclosed products in-house.',
  },
  {
    year: 'Today',
    title: 'Products, services & labs',
    body: 'A vertically integrated partner — from first schematic to certified, deployed hardware.',
  },
]

const VALUES = [
  {
    code: 'V-01',
    title: 'Engineering first',
    body: 'Decisions are made by engineers, not by trends. We build what will still run in ten years.',
  },
  {
    code: 'V-02',
    title: 'Vertical integration',
    body: 'Hardware, firmware, testing and enclosures under one roof — no handoffs, no finger-pointing.',
  },
  {
    code: 'V-03',
    title: 'Built to be certified',
    body: 'Compliance is designed in from the first schematic and proven in our own laboratories.',
  },
  {
    code: 'V-04',
    title: 'Independent & European',
    body: 'Privately held and self-funded, we answer to our clients and our standards — nobody else.',
  },
]

const STATS = [
  { value: '25+', label: 'Years of engineering' },
  { value: '3', label: 'Accredited laboratories' },
  { value: '40+', label: 'Countries served' },
  { value: '100%', label: 'In-house development' },
]

export default function WhoWeArePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="The company"
          title="A quarter century of disciplined engineering."
          description="We are an independent European engineering company. We do not chase trends — we build instrumentation, control and connectivity hardware expected to run for years in harsh, regulated environments."
          breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Who We Are' }]}
        />

        {/* Intro + image */}
        <section className="border-b border-border bg-background">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
              <div className="flex flex-col justify-center lg:col-span-6">
                <div className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                  Our approach
                </div>
                <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                  One team, from first principles to final compliance.
                </h2>
                <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
                  Every product we ship is designed, tested and certified by the
                  same team. That continuity, from the first schematic to the
                  final compliance report, is what our clients rely on.
                </p>
                <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                  We combine a full electronics design house, our own accredited
                  laboratories, and in-house tooling and injection moulding —
                  giving us complete ownership of quality and lead time.
                </p>
              </div>
              <div className="lg:col-span-6">
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-border bg-card lg:h-full">
                  <Image
                    src="/images/engineering-lab.png"
                    alt="IQtronic engineering team at work in the electronics laboratory"
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="border-b border-border bg-card">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
            <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-border bg-border lg:grid-cols-4">
              {STATS.map((stat) => (
                <div key={stat.label} className="bg-card px-6 py-8">
                  <dt className="text-3xl font-semibold tracking-tight">
                    {stat.value}
                  </dt>
                  <dd className="mt-2 text-sm leading-snug text-muted-foreground">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Values */}
        <section className="border-b border-border bg-background">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
            <div className="max-w-2xl">
              <div className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                What we stand for
              </div>
              <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                Principles that outlast trends.
              </h2>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
              {VALUES.map((value) => (
                <div key={value.code} className="flex flex-col bg-card p-8">
                  <span className="font-mono text-sm text-accent">
                    {value.code}
                  </span>
                  <h3 className="mt-6 text-lg font-medium tracking-tight">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {value.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="border-b border-border bg-card">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <div className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                  Our history
                </div>
                <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                  Built step by step, since 1999.
                </h2>
                <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
                  Each milestone added a capability we now own outright — never
                  outsourced, always under our control.
                </p>
              </div>

              <div className="lg:col-span-7">
                <ol className="relative border-l border-border">
                  {TIMELINE.map((item) => (
                    <li key={item.year} className="relative pb-10 pl-8 last:pb-0">
                      <span
                        className="absolute -left-[5px] top-1.5 size-2.5 rounded-full bg-accent ring-4 ring-card"
                        aria-hidden="true"
                      />
                      <div className="font-mono text-sm font-medium text-accent">
                        {item.year}
                      </div>
                      <h3 className="mt-1 text-lg font-medium tracking-tight">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {item.body}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-background">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
            <div className="flex flex-col items-start justify-between gap-8 rounded-sm border border-border bg-card p-8 lg:flex-row lg:items-center lg:p-12">
              <div className="max-w-2xl">
                <div className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                  Work with us
                </div>
                <h2 className="mt-5 text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
                  Let&apos;s engineer something that lasts.
                </h2>
              </div>
              <Link
                href="/contact"
                className="inline-flex shrink-0 items-center gap-2 rounded-sm bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                Contact us
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
