import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { PageHero } from '@/components/page-hero'
import { ContactForm } from '@/components/contact-form'

export const metadata: Metadata = {
  title: 'Contact — IQtronic Technologies',
  description:
    'Talk to the engineers at IQtronic Technologies about industrial IoT products, custom electronics development, laboratory testing and technical support.',
}

const OFFICES = [
  {
    city: 'Headquarters',
    lines: [
      'IQtronic Technologies',
      'Industrial Park 12',
      '100 00 Prague, Czech Republic',
    ],
  },
  {
    city: 'Laboratories',
    lines: [
      'EMC · Microwave · Wind Tunnel',
      'Engineering Campus, Building B',
      '100 00 Prague, Czech Republic',
    ],
  },
  {
    city: 'Manufacturing',
    lines: [
      'Production & Injection Moulding',
      'Industrial Park 14',
      '100 00 Prague, Czech Republic',
    ],
  },
]

const HOURS = [
  { label: 'Monday – Friday', value: '08:00 – 17:00 CET' },
  { label: 'Saturday – Sunday', value: 'Closed' },
  { label: 'Response time', value: 'Within 1 business day' },
]

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Contact"
          title="Talk to our engineers."
          description="Tell us about your product, your environment and your timeline. An engineer — not a salesperson — will get back to you."
          breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Contact' }]}
        />

        {/* Message form */}
        <section className="bg-background">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <div className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                  Start a project
                </div>
                <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                  Send us a message.
                </h2>
                <p className="mt-6 max-w-md text-pretty leading-relaxed text-muted-foreground">
                  Use the form to reach the engineering team directly. Share as
                  much technical detail as you can — it helps us route your
                  enquiry to the right specialists.
                </p>
              </div>
              <div className="lg:col-span-7">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* Offices & facilities */}
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
