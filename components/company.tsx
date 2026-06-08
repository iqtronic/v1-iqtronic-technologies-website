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
    year: 'Today',
    title: 'Products, services & labs',
    body: 'A vertically integrated partner — from first schematic to certified, deployed hardware.',
  },
]

export function Company() {
  return (
    <section id="company" className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
              The company
            </div>
            <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              A quarter century of disciplined engineering.
            </h2>
            <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
              We are an independent European engineering company. We do not
              chase trends — we build instrumentation, control and connectivity
              hardware that is expected to run for years in harsh, regulated
              environments. Every product we ship is designed, tested and
              certified by the same team.
            </p>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              That continuity, from first principles to final compliance report,
              is what our clients rely on.
            </p>
          </div>

          <div className="lg:col-span-7">
            <ol className="relative border-l border-border">
              {TIMELINE.map((item) => (
                <li key={item.year} className="relative pb-10 pl-8 last:pb-0">
                  <span
                    className="absolute -left-[5px] top-1.5 size-2.5 rounded-full bg-accent ring-4 ring-background"
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
  )
}
