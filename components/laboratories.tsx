import Image from 'next/image'

const LABS = [
  {
    name: 'EMC Laboratory',
    image: '/images/emc-lab.png',
    body: 'Emissions and immunity testing in a shielded anechoic chamber, supporting CE marking and pre-compliance.',
    tags: ['EN 61000', 'Radiated & conducted', 'Pre-compliance'],
  },
  {
    name: 'Microwave Laboratory',
    image: '/images/microwave-lab.png',
    body: 'RF and microwave characterisation with vector network and spectrum analysis for antennas and high-frequency designs.',
    tags: ['VNA / spectrum', 'Antenna tuning', 'Up to GHz'],
  },
  {
    name: 'Wind Tunnel',
    image: '/images/wind-tunnel.png',
    body: 'Aerodynamic and environmental testing of sensors and enclosures under controlled, repeatable airflow.',
    tags: ['Calibrated airflow', 'Sensor qualification', 'Durability'],
  },
]

export function Laboratories() {
  return (
    <section id="laboratories" className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="max-w-2xl">
          <div className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
            Laboratories
          </div>
          <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Certified under our own roof.
          </h2>
          <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
            Owning our test facilities means faster iteration and total
            confidence in compliance. We also open our laboratories to external
            clients who need accredited testing.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {LABS.map((lab) => (
            <article
              key={lab.name}
              className="group relative flex flex-col overflow-hidden rounded-sm border border-border"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <Image
                  src={lab.image || '/placeholder.svg'}
                  alt={`IQtronic ${lab.name}`}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-background">
                  <h3 className="text-xl font-medium tracking-tight">
                    {lab.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-background/80">
                    {lab.body}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {lab.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-sm border border-background/30 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-background/90"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
