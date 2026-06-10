import type { Metadata } from 'next'
import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { PageHero } from '@/components/page-hero'

export const metadata: Metadata = {
  title: 'Technical Support — IQtronic Technologies',
  description:
    'Engineer-led technical support for IQtronic industrial IoT, GSM devices and meteorological systems — documentation, firmware, RMA and direct assistance.',
}

const CHANNELS = [
  {
    code: 'S-01',
    title: 'Documentation',
    body: 'Datasheets, manuals and application notes for every product in the Download Center.',
    href: '/downloads',
    link: 'Open downloads',
  },
  {
    code: 'S-02',
    title: 'Email support',
    body: 'Reach the engineers directly. We answer technical questions, not scripts.',
    href: 'mailto:support@iqtronic.com',
    link: 'support@iqtronic.com',
  },
  {
    code: 'S-03',
    title: 'Phone support',
    body: 'Talk to our support desk during European business hours for urgent issues.',
    href: 'tel:+420000000000',
    link: '+420 000 000 000',
  },
]

const PROCESS = [
  { step: '01', title: 'Describe', body: 'Send your product model, firmware version and a description of the issue.' },
  { step: '02', title: 'Diagnose', body: 'An engineer reviews logs and configuration to identify the root cause.' },
  { step: '03', title: 'Resolve', body: 'We provide a fix, firmware update or, if needed, an RMA number.' },
  { step: '04', title: 'Follow up', body: 'We confirm the resolution and document it for future reference.' },
]

const FAQ = [
  {
    q: 'How do I update the firmware on my device?',
    a: 'Download the latest firmware from the Download Center and follow the update procedure in your product manual. Monitoring gateways also support remote OTA updates.',
  },
  {
    q: 'My GSM device is offline — what should I check first?',
    a: 'Verify SIM activation and data plan, signal strength at the install location, and that the APN is configured correctly. The user manual includes a connectivity checklist.',
  },
  {
    q: 'How do I request an RMA?',
    a: 'Contact technical support with your serial number and a fault description. We will issue an RMA number and shipping instructions within two business days.',
  },
  {
    q: 'Do you offer integration support for SCADA systems?',
    a: 'Yes. Our monitoring systems speak Modbus, MQTT and REST, and our engineers can assist with integration into your existing control platform.',
  },
  {
    q: 'What warranty applies to IQtronic products?',
    a: 'Standard products carry a 24-month warranty. Extended warranty and service agreements are available for fleet deployments.',
  },
]

export default function SupportPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Technical Support"
          title="Support from the engineers who built it."
          description="No call-centre scripts. When you contact IQtronic support, you reach the people who design, test and manufacture the products you run."
          breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Support' }]}
        />

        {/* Channels */}
        <section className="border-b border-border bg-background">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
            <div className="max-w-2xl">
              <div className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                Get help
              </div>
              <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                Three ways to reach us.
              </h2>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-3">
              {CHANNELS.map((channel) => (
                <div key={channel.code} className="flex flex-col bg-card p-8">
                  <span className="font-mono text-sm text-accent">
                    {channel.code}
                  </span>
                  <h3 className="mt-6 text-lg font-medium tracking-tight">
                    {channel.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {channel.body}
                  </p>
                  <Link
                    href={channel.href}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent"
                  >
                    {channel.link}
                    <span aria-hidden="true">→</span>
                  </Link>
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
                How support works
              </div>
              <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                A clear path to resolution.
              </h2>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
              {PROCESS.map((item) => (
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

        {/* FAQ */}
        <section className="border-b border-border bg-background">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <div className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                  FAQ
                </div>
                <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                  Common questions.
                </h2>
                <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
                  Quick answers to the questions our support desk hears most
                  often.
                </p>
              </div>

              <div className="lg:col-span-8">
                <dl className="flex flex-col">
                  {FAQ.map((item) => (
                    <div
                      key={item.q}
                      className="border-t border-border py-7 first:border-t-0 first:pt-0"
                    >
                      <dt className="text-lg font-medium tracking-tight">
                        {item.q}
                      </dt>
                      <dd className="mt-2 leading-relaxed text-muted-foreground">
                        {item.a}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-card">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
            <div className="flex flex-col items-start justify-between gap-8 rounded-sm border border-border bg-background p-8 lg:flex-row lg:items-center lg:p-12">
              <div className="max-w-2xl">
                <div className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                  Still stuck?
                </div>
                <h2 className="mt-5 text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
                  Open a support request and we&apos;ll take it from there.
                </h2>
              </div>
              <Link
                href="/contact"
                className="inline-flex shrink-0 items-center gap-2 rounded-sm bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                Contact support
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
