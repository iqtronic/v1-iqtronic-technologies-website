import Link from 'next/link'

const CATEGORIES = [
  {
    title: 'Datasheets',
    items: [
      { name: 'IQsocket — Datasheet', meta: 'PDF · Rev. 4.2' },
      { name: 'Industrial Weather Station — Datasheet', meta: 'PDF · Rev. 2.1' },
      { name: 'Monitoring Gateway — Datasheet', meta: 'PDF · Rev. 3.0' },
    ],
  },
  {
    title: 'Manuals',
    items: [
      { name: 'IQsocket — Installation & Operation Manual', meta: 'PDF · EN' },
      { name: 'Weather Station — Field Setup Guide', meta: 'PDF · EN' },
      { name: 'Monitoring Gateway — Configuration Manual', meta: 'PDF · EN' },
    ],
  },
  {
    title: 'Software',
    items: [
      { name: 'IQtronic Configurator (Windows)', meta: 'EXE · v5.3.1' },
      { name: 'SCADA / Modbus Connector', meta: 'ZIP · v2.0' },
    ],
  },
  {
    title: 'Firmware',
    items: [
      { name: 'IQsocket Firmware', meta: 'BIN · v4.8.0 — stable' },
      { name: 'Monitoring Gateway Firmware', meta: 'BIN · v3.2.2 — stable' },
      { name: 'Weather Station Firmware', meta: 'BIN · v2.5.0 — stable' },
    ],
  },
]

export function Downloads() {
  return (
    <section className="bg-background pt-16">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
          Downloads
        </div>
        <h1 className="mt-5 max-w-3xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
          Datasheets, manuals, software &amp; firmware.
        </h1>
        <p className="mt-6 max-w-xl text-pretty leading-relaxed text-muted-foreground">
          All technical resources for IQtronic products in one place. Looking
          for licensing, warranty or to open a ticket?{' '}
          <Link
            href="/support"
            className="font-medium text-foreground underline-offset-4 transition-colors hover:text-accent"
          >
            Visit the Support hub
          </Link>
          .
        </p>

        <div className="mt-14 flex flex-col gap-12">
          {CATEGORIES.map((category) => (
            <div key={category.title}>
              <div className="flex items-center gap-3 border-b border-border pb-4">
                <span
                  className="inline-block size-1.5 bg-accent"
                  aria-hidden="true"
                />
                <h2 className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
                  {category.title}
                </h2>
              </div>
              <ul className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {category.items.map((item) => (
                  <li key={item.name}>
                    <a
                      href="#"
                      className="group flex h-full flex-col justify-between gap-6 rounded-sm border border-border bg-card p-6 transition-colors hover:bg-secondary"
                    >
                      <h3 className="text-sm font-medium leading-snug tracking-tight">
                        {item.name}
                      </h3>
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs text-muted-foreground">
                          {item.meta}
                        </span>
                        <span
                          className="text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-accent"
                          aria-hidden="true"
                        >
                          ↓
                        </span>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
