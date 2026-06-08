import Image from 'next/image'

const SERVICES = [
  {
    code: 'E-01',
    title: 'Custom Electronics Development',
    body: 'From requirements and schematic capture to multilayer PCB layout, prototyping and design-for-manufacture.',
  },
  {
    code: 'E-02',
    title: 'OEM Development',
    body: 'White-label hardware engineered to your brand and volume — qualified, documented and ready for production.',
  },
  {
    code: 'E-03',
    title: 'Embedded Software',
    body: 'Firmware, RTOS and connectivity stacks built for reliability, low power and long-term field maintenance.',
  },
]

export function Engineering() {
  return (
    <section id="engineering" className="border-b border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <div className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
              Engineering services
            </div>
            <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Your electronics team, on demand.
            </h2>
            <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
              We take products from a napkin sketch to certified hardware. The
              same engineers who design your board write its firmware and run it
              through our laboratories — no handoffs, no finger-pointing.
            </p>

            <div className="relative mt-8 aspect-[4/3] overflow-hidden rounded-sm border border-border">
              <Image
                src="/images/engineering-lab.png"
                alt="IQtronic electronics engineering workbench with oscilloscope and prototype board"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="flex flex-col">
              {SERVICES.map((service, i) => (
                <div
                  key={service.code}
                  className="group flex flex-col gap-3 border-t border-border py-8 first:border-t-0 first:pt-0 sm:flex-row sm:gap-8"
                >
                  <div className="font-mono text-sm text-accent sm:w-16 sm:shrink-0">
                    {service.code}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-medium tracking-tight">
                      {service.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-muted-foreground">
                      {service.body}
                    </p>
                  </div>
                  <span
                    className="hidden text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-accent sm:block"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-sm border border-border bg-background p-6">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
                Process
              </p>
              <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {['Concept', 'Design', 'Validate', 'Produce'].map((step, i) => (
                  <div key={step} className="flex flex-col gap-1">
                    <span className="font-mono text-xs text-accent">
                      {`0${i + 1}`}
                    </span>
                    <span className="text-sm font-medium">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
