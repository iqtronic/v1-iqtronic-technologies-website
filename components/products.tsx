import Image from 'next/image'
import Link from 'next/link'

const PRODUCTS = [
  {
    slug: 'iqsocket-lan',
    name: 'IQsocket',
    category: 'Remote Power Control',
    image: '/images/iqsocket.png',
    body: 'GSM and IP controlled power sockets for remote switching, reboot and monitoring of critical equipment in unattended sites.',
    specs: ['GSM / Wi-Fi / Ethernet', 'Temperature sensing', 'Scheduling & alerts'],
  },
  {
    slug: 'envistation-pro',
    name: 'Industrial Weather Stations',
    category: 'Environmental Sensing',
    image: '/images/weather-station.png',
    body: 'Rugged, calibrated stations measuring wind, temperature, humidity, pressure and solar radiation for energy and infrastructure.',
    specs: ['IP66 enclosure', 'Calibrated sensors', 'Solar / battery powered'],
  },
  {
    slug: 'bms-100',
    name: 'Monitoring Systems',
    category: 'Telemetry & SCADA',
    image: '/images/monitoring-system.png',
    body: 'DIN-rail gateways and telemetry units that acquire, log and transmit field data over cellular and industrial protocols.',
    specs: ['Modbus / MQTT', 'Edge logging', 'Remote firmware update'],
  },
]

export function Products() {
  return (
    <section id="products" className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
              Products
            </div>
            <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Hardware built to survive the field.
            </h2>
          </div>
          <div className="flex max-w-sm flex-col items-start gap-4">
            <p className="text-sm leading-relaxed text-muted-foreground">
              Designed, manufactured and supported in-house. Every unit is
              tested in our own laboratories before it leaves the building.
            </p>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent"
            >
              View all products
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((product) => (
            <article
              key={product.name}
              className="group flex flex-col overflow-hidden rounded-sm border border-border bg-card transition-shadow hover:shadow-md"
            >
              <div className="relative aspect-[4/3] overflow-hidden border-b border-border bg-secondary">
                <Image
                  src={product.image || '/placeholder.svg'}
                  alt={`${product.name} — IQtronic industrial product`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded-sm bg-background/85 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-foreground backdrop-blur">
                  {product.category}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-medium tracking-tight">
                  {product.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {product.body}
                </p>
                <ul className="mt-5 flex flex-1 flex-col gap-2 border-t border-border pt-5">
                  {product.specs.map((spec) => (
                    <li
                      key={spec}
                      className="flex items-center gap-2 font-mono text-xs text-muted-foreground"
                    >
                      <span
                        className="inline-block size-1 bg-accent"
                        aria-hidden="true"
                      />
                      {spec}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/products/${product.slug}`}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent"
                >
                  Learn more
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
