import Link from 'next/link'

const DOWNLOAD_GROUPS = [
  {
    title: 'Datasheets',
    body: 'Technical specifications, mechanical drawings and electrical ratings for every product.',
  },
  {
    title: 'Manuals',
    body: 'Installation, configuration and operation guides for field deployment.',
  },
  {
    title: 'Software',
    body: 'Configuration tools, SCADA connectors and desktop utilities.',
  },
  {
    title: 'Firmware',
    body: 'Latest stable and legacy firmware images with release notes.',
  },
]

const LICENSING = [
  {
    title: 'License activation',
    body: 'Activate a new license key for software, firmware features or laboratory tools.',
  },
  {
    title: 'License upgrades',
    body: 'Move to a higher tier or extend feature sets on existing deployments.',
  },
  {
    title: 'License management',
    body: 'View, transfer and renew the licenses tied to your organisation.',
  },
]

const FAQ = [
  {
    q: 'How do I open a support ticket?',
    a: 'Use the “Open Support Ticket” button above. Provide your product serial number and a description of the issue, and an engineer will respond directly.',
  },
  {
    q: 'Where can I find firmware for my device?',
    a: 'All firmware images are in the Downloads section under Firmware, organised by product family with release notes.',
  },
  {
    q: 'How do I activate or transfer a license?',
    a: 'See the Licensing section. License activation, upgrades and management are all handled from a single portal tied to your organisation.',
  },
  {
    q: 'What is covered under warranty?',
    a: 'Standard warranty covers manufacturing defects. See Warranty & Service for full terms, RMA procedures and service options.',
  },
]

export function Support() {
  return (
    <>
      {/* Hero + primary CTA */}
      <section className="border-b border-border bg-background pt-16">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
            Support
          </div>
          <h1 className="mt-5 max-w-3xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
            Everything you need to keep your hardware running.
          </h1>
          <p className="mt-6 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            A single place to open a support ticket, find firmware and manuals,
            manage licenses and access downloads — backed by the same engineers
            who designed your products.
          </p>

          <div className="mt-10 rounded-sm border border-border bg-card p-8 sm:p-10">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-xl">
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  Open a support ticket
                </h2>
                <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                  Have an issue or a question? Open a ticket and an engineer —
                  not a call centre — will get back to you with an answer.
                </p>
              </div>
              <a
                href="/#contact"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-sm bg-accent px-8 py-5 text-base font-medium text-accent-foreground transition-opacity hover:opacity-90"
              >
                Open Support Ticket
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Downloads */}
      <section id="downloads" className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <div className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                Downloads
              </div>
              <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                Datasheets, manuals, software & firmware.
              </h2>
            </div>
            <Link
              href="/downloads"
              className="inline-flex items-center gap-2 rounded-sm border border-border bg-background px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              Browse all downloads
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {DOWNLOAD_GROUPS.map((group) => (
              <Link
                key={group.title}
                href="/downloads"
                className="group flex flex-col bg-card p-8 transition-colors hover:bg-background"
              >
                <div className="flex items-baseline justify-between">
                  <h3 className="text-lg font-medium tracking-tight">
                    {group.title}
                  </h3>
                  <span
                    className="text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-accent"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {group.body}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Licensing */}
      <section id="licensing" className="border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                Licensing
              </div>
              <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                Activate, upgrade and manage your licenses.
              </h2>
              <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
                Software and feature licenses for your IQtronic products are
                handled from one portal, tied to your organisation. Activate new
                keys, upgrade tiers and keep track of every active deployment.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-3">
                {LICENSING.map((item) => (
                  <div key={item.title} className="flex flex-col bg-card p-8">
                    <span
                      className="inline-block size-2 bg-accent"
                      aria-hidden="true"
                    />
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
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <div className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                FAQ
              </div>
              <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                Frequently asked questions.
              </h2>
            </div>

            <div className="lg:col-span-8">
              <dl className="divide-y divide-border border-y border-border">
                {FAQ.map((item) => (
                  <div key={item.q} className="py-6">
                    <dt className="text-lg font-medium tracking-tight">
                      {item.q}
                    </dt>
                    <dd className="mt-2 text-pretty leading-relaxed text-muted-foreground">
                      {item.a}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Warranty & Service */}
      <section id="warranty" className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                Warranty &amp; Service
              </div>
              <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                Service and warranty information.
              </h2>
              <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
                Every IQtronic product is built to run for years in harsh,
                regulated environments — and backed by clear warranty terms and
                an engineer-led service process.
              </p>
              <a
                href="/#contact"
                className="mt-8 inline-flex items-center gap-2 rounded-sm bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                Request service or RMA
                <span aria-hidden="true">→</span>
              </a>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2">
                {[
                  {
                    title: 'Warranty information',
                    body: 'Standard coverage periods, what is and isn’t included, and how to register your product for warranty.',
                  },
                  {
                    title: 'Service information',
                    body: 'Repair, recalibration and RMA procedures, including turnaround times and shipping guidance.',
                  },
                ].map((item) => (
                  <div key={item.title} className="flex flex-col bg-card p-8">
                    <h3 className="text-lg font-medium tracking-tight">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
