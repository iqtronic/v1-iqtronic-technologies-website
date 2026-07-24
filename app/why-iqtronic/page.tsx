import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { InnovationTimeline } from '@/components/innovation-timeline'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'Why IQtronic — IQtronic Technologies',
  description:
    'IQtronic is an independent European engineering company. Engineering since 1999, Industrial IoT since 2003, proudly designed in Czechia — instrumentation, control and connectivity hardware built to run for years.',
  alternates: { canonical: '/why-iqtronic' },
}

const STATS = [
  { value: '100,000+', label: 'Devices delivered' },
  { value: '40+', label: 'Countries served' },
  { value: '25+', label: 'Years of engineering' },
]

export default function WhoWeArePage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-16">
        {/* Hero */}
        <section className="border-b border-border bg-background">
          <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-10 lg:py-28">
            <div className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
              Who we are
            </div>
            <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              25+ Years of Innovation
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
              Engineering Since 1999.
              <br />
              Industrial IoT Since 2003.
            </p>
          </div>
        </section>

        {/* Company introduction */}
        <section className="border-b border-border bg-background">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <div className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                  The company
                </div>
                <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                  A quarter century of disciplined engineering.
                </h2>
              </div>
              <div className="lg:col-span-7">
                <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
                  We are an independent European engineering company led by Ing.
                  Libor Konečný and built by a long-term team of experienced
                  engineers and industrial designers.
                </p>
                <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
                  For more than 25 years, our philosophy has remained unchanged:
                </p>
                <p className="mt-4 text-pretty text-base leading-loose sm:text-lg">
                  <span className="box-decoration-clone bg-accent/15 px-1.5 py-0.5 font-bold uppercase tracking-[0.06em] text-foreground [-webkit-box-decoration-break:clone]">
                    Uncompromising quality · Meaningful innovation · Exceptional
                    value for customers · Long-term fair pricing · Responsible
                    engineering with minimal environmental impact
                  </span>
                </p>
                <Link
                  href="/why-iqtronic/engineering-philosophy"
                  className="mt-8 inline-flex items-center gap-2 font-mono text-sm uppercase tracking-[0.16em] text-accent transition-colors hover:text-foreground"
                >
                  Learn more about our company
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Engineering quality teaser */}
        <section className="border-b border-border bg-card">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <figure>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm border border-border bg-secondary">
                  <Image
                    src="/images/engineering-quality-teaser.png"
                    alt="Disassembled IQtronic device revealing its printed circuit board"
                    fill
                    sizes="(min-width: 1024px) 560px, 100vw"
                    className="object-cover"
                  />
                </div>
              </figure>

              <div>
                <div className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                  Product quality
                </div>
                <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                  Engineered for Reliability
                </h2>
                <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
                  True product quality starts where most customers never look —
                  inside the device. Every IQtronic product is engineered with
                  long-term reliability, efficient manufacturing and real-world
                  durability in mind. Rather than making marketing claims, we
                  prefer to demonstrate the engineering decisions behind every
                  product.
                </p>
                <Link
                  href="/engineering-quality"
                  className="mt-8 inline-flex items-center gap-2 rounded-sm bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Discover Our Engineering
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Innovation timeline */}
        <InnovationTimeline />

        {/* Closing section */}
        <section className="bg-background">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
            <dl className="grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-3">
              {STATS.map((stat) => (
                <div key={stat.label} className="bg-card px-6 py-10 text-center">
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <div className="text-4xl font-semibold tracking-tight sm:text-5xl">
                      {stat.value}
                    </div>
                    <div className="mt-2 font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
                      {stat.label}
                    </div>
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-16 border-t border-border pt-12 text-center">
              <p className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
                Products Designed To Last.
              </p>
              <p className="mt-2 text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
                Engineering Before Marketing.
              </p>
              <p className="mt-6 font-mono text-sm uppercase tracking-[0.18em] text-accent">
                Original Ideas. Real Engineering. Since 1999.
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
