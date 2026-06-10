import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Contact } from '@/components/contact'

export const metadata: Metadata = {
  title: 'Contact — IQtronic Technologies',
  description:
    'Talk to the engineers at IQtronic Technologies about industrial IoT products, custom electronics development, laboratory testing and technical support.',
}

const OFFICES = [
  {
    city: 'Headquarters',
    lines: ['IQtronic Technologies', 'Industrial Park 12', '100 00 Prague, Czech Republic'],
  },
  {
    city: 'Laboratories',
    lines: ['EMC · Microwave · Wind Tunnel', 'Engineering Campus, Building B', '100 00 Prague, Czech Republic'],
  },
  {
    city: 'Manufacturing',
    lines: ['Production & Injection Moulding', 'Industrial Park 14', '100 00 Prague, Czech Republic'],
  },
]

const HOURS = [
  { label: 'Monday – Friday', value: '08:00 – 17:00 CET' },
  { label: 'Saturday – Sunday', value: 'Closed' },
  { label: 'Support email', value: 'Answered within 1 business day' },
]

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-16">
        <Contact />

        <section className="border-t border-border bg-background">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
            <div className="max-w-2xl">
              <div className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                Find us
              </div>
              <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                Offices & facilities.
              </h2>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-3">
              {OFFICES.map((office) => (
                <div key={office.city} className="flex flex-col bg-card p-8">
                  <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
                    {office.city}
                  </h3>
                  <address className="mt-4 flex flex-col gap-1 text-sm not-italic leading-relaxed text-foreground">
                    {office.lines.map((line) => (
                      <span key={line}>{line}</span>
                    ))}
                  </address>
                </div>
              ))}
            </div>

            <div className="mt-12 rounded-sm border border-border bg-card p-6 lg:p-8">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
                Opening hours
              </p>
              <dl className="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-3">
                {HOURS.map((item) => (
                  <div key={item.label}>
                    <dt className="text-sm font-medium text-foreground">
                      {item.label}
                    </dt>
                    <dd className="mt-1 text-sm text-muted-foreground">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
