const PILLARS = [
  {
    index: '01',
    title: 'Products',
    href: '#products',
    body: 'Field-proven hardware for monitoring, control and connectivity — manufactured and supported in Europe.',
    points: ['IQsocket', 'Industrial Weather Stations', 'Monitoring Systems'],
  },
  {
    index: '02',
    title: 'Engineering Services',
    href: '#engineering',
    body: 'A full electronics design house — from concept and schematic to production-ready firmware and OEM volume.',
    points: ['Custom Electronics', 'OEM Development', 'Embedded Software'],
  },
  {
    index: '03',
    title: 'Laboratories',
    href: '#laboratories',
    body: 'Accredited in-house facilities to characterise, certify and qualify products before they ship.',
    points: ['EMC Laboratory', 'Microwave Laboratory', 'Wind Tunnel'],
  },
]

export function Pillars() {
  return (
    <section className="border-b border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="max-w-2xl">
          <div className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
            Three pillars
          </div>
          <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            One team across the whole product lifecycle.
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-3">
          {PILLARS.map((pillar) => (
            <a
              key={pillar.title}
              href={pillar.href}
              className="group flex flex-col bg-card p-8 transition-colors hover:bg-background"
            >
              <div className="flex items-baseline justify-between">
                <span className="font-mono text-sm text-muted-foreground">
                  {pillar.index}
                </span>
                <span
                  className="text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-accent"
                  aria-hidden="true"
                >
                  →
                </span>
              </div>
              <h3 className="mt-6 text-xl font-medium tracking-tight">
                {pillar.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {pillar.body}
              </p>
              <ul className="mt-6 flex flex-col gap-2 border-t border-border pt-6">
                {pillar.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-center gap-2 text-sm text-foreground"
                  >
                    <span
                      className="inline-block size-1.5 bg-accent"
                      aria-hidden="true"
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
