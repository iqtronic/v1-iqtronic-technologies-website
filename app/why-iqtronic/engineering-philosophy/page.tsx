import type { Metadata } from 'next'
import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'Our Engineering Philosophy — IQtronic Technologies',
  description:
    'The engineering philosophy behind IQtronic: uncompromising quality, meaningful innovation, exceptional value and responsible engineering. Instrumentation, control and connectivity hardware designed, tested and certified by one long-term engineering team.',
  alternates: { canonical: '/why-iqtronic/engineering-philosophy' },
}

const PRINCIPLES = [
  {
    title: 'Uncompromising quality',
    body: 'Quality starts inside the device, where most customers never look. Every product is engineered for long-term reliability, efficient manufacturing and real-world durability.',
  },
  {
    title: 'Meaningful innovation',
    body: 'We do not chase trends. Every feature must have a purpose, every component must justify its place, and innovation must solve a real problem rather than add complexity.',
  },
  {
    title: 'Exceptional value',
    body: 'Great engineering should deliver lasting value throughout a product’s lifetime — not unnecessary cost. Our products are built to keep earning their place for years.',
  },
  {
    title: 'Responsible engineering',
    body: 'We design and manufacture with minimal environmental impact in mind, favouring longevity, repairability and efficient use of materials over disposability.',
  },
]

const CONTINUITY = [
  'Concept and system architecture',
  'Hardware and PCB design',
  'Firmware development',
  'Testing and validation',
  'Certification and compliance',
  'Long-term production and support',
]

export default function EngineeringPhilosophyPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-16">
        {/* Breadcrumb */}
        <div className="border-b border-border bg-background">
          <nav
            aria-label="Breadcrumb"
            className="mx-auto max-w-7xl px-6 py-4 lg:px-10"
          >
            <ol className="flex flex-wrap items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
              <li>
                <Link
                  href="/why-iqtronic"
                  className="transition-colors hover:text-accent"
                >
                  Why IQtronic
                </Link>
              </li>
              <li aria-hidden="true" className="text-muted-foreground/40">
                /
              </li>
              <li className="text-foreground">Engineering Philosophy</li>
            </ol>
          </nav>
        </div>

        {/* Hero */}
        <section className="border-b border-border bg-background">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <div className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                  The company
                </div>
                <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                  Our engineering philosophy.
                </h1>
              </div>
              <div className="lg:col-span-7">
                <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
                  We are an independent European engineering company led by Ing.
                  Libor Konečný and built by a team of highly experienced
                  engineers and industrial designers, including Ing. Kumbar,
                  Ing. Novák, Ing. ..., whose expertise and dedication have
                  shaped IQtronic products for decades.
                </p>
                <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
                  <strong className="font-semibold text-foreground">
                    For more than 25 years, our shared philosophy has remained
                    unchanged: uncompromising quality, meaningful innovation,
                    exceptional value for customers, and responsible engineering
                    with minimal environmental impact.
                  </strong>{' '}
                  We believe great engineering should solve real problems—not
                  create unnecessary complexity or cost. Every feature must have
                  a purpose, every component must justify its place, and every
                  product must deliver lasting value throughout its lifetime.
                </p>
                <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
                  We do not chase trends—we design, develop and manufacture
                  instrumentation, control and connectivity solutions engineered
                  to operate reliably for years, even in demanding industrial
                  and regulated environments.
                </p>
                <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
                  Every product we deliver is designed, tested and certified by
                  the same engineering team. That continuity—from the initial
                  concept and hardware design to firmware development, testing
                  and final compliance—is what our customers rely on.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Principles */}
        <section className="border-b border-border bg-background">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
            <div className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
              Our values
            </div>
            <h2 className="mt-5 max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Principles that have not changed in 25 years.
            </h2>
            <ul className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2">
              {PRINCIPLES.map((principle) => (
                <li key={principle.title} className="bg-card p-6 lg:p-8">
                  <h3 className="text-xl font-semibold tracking-tight">
                    {principle.title}
                  </h3>
                  <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                    {principle.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Continuity */}
        <section className="bg-background">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <div className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                  One team, end to end
                </div>
                <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                  Designed, tested and certified in house.
                </h2>
                <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
                  The same engineering team owns every product from first
                  concept to final compliance. That continuity is what keeps our
                  hardware dependable — and what our customers rely on for
                  long-term support.
                </p>
              </div>
              <div className="lg:col-span-7">
                <ul className="grid grid-cols-1 gap-1.5 sm:grid-cols-2">
                  {CONTINUITY.map((step) => (
                    <li key={step} className="flex gap-3 text-muted-foreground">
                      <span
                        className="mt-1.5 size-1.5 shrink-0 bg-accent"
                        aria-hidden="true"
                      />
                      <span className="leading-normal">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-14 border-t border-border pt-10">
              <Link
                href="/why-iqtronic"
                className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-[0.16em] text-accent transition-colors hover:text-foreground"
              >
                <span aria-hidden="true">←</span>
                Back to Why IQtronic
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
