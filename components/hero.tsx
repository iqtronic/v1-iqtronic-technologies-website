import Image from 'next/image'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 pb-16 pt-16 lg:grid-cols-12 lg:gap-8 lg:px-10 lg:pb-24 lg:pt-24">
        <div className="flex flex-col justify-center lg:col-span-6">
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
            <span className="inline-block size-2 bg-accent" aria-hidden="true" />
            Engineering since 1999 · Industrial IoT since 2003
          </div>

          <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Engineering since 1999.
            <br />
            Industrial IoT since 2003.
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground">
            From concept to certified product.
            <br className="hidden sm:block" />
            <span className="font-medium text-foreground">
              Hardware. Firmware. Testing. Manufacturing.
            </span>
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#products"
              className="inline-flex items-center gap-2 rounded-sm bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Explore products
              <span aria-hidden="true">→</span>
            </a>
            <a
              href="#engineering"
              className="inline-flex items-center gap-2 rounded-sm border border-border px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              Engineering services
            </a>
          </div>

          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-px overflow-hidden rounded-sm border border-border bg-border">
            {[
              { value: '25+', label: 'Years of engineering' },
              { value: '3', label: 'Accredited laboratories' },
              { value: '40+', label: 'Countries served' },
            ].map((stat) => (
              <div key={stat.label} className="bg-card px-4 py-5">
                <dt className="text-2xl font-semibold tracking-tight">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-xs leading-snug text-muted-foreground">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative lg:col-span-6">
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-border bg-card lg:aspect-auto lg:h-full">
            <Image
              src="/images/hero-products.png"
              alt="IQtronic industrial IoT product family — smart power socket, monitoring gateway and weather sensor"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute left-4 top-4 flex items-center gap-2 rounded-sm border border-border bg-background/90 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-foreground backdrop-blur">
              <span className="inline-block size-1.5 bg-accent" aria-hidden="true" />
              Designed & manufactured in Europe
            </div>
          </div>

          <div className="absolute -bottom-4 left-4 hidden rounded-sm border border-border bg-card px-4 py-3 shadow-sm sm:block lg:-left-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
              Certified to
            </p>
            <p className="mt-1 text-sm font-medium">
              ISO 9001 · CE · EN 61000
            </p>
          </div>
        </div>
      </div>

      <Marquee />
    </section>
  )
}

function Marquee() {
  const items = [
    'Industrial IoT Products',
    'Electronics Development',
    'EMC Laboratory',
    'Microwave Laboratory',
    'Wind Tunnel',
    'Industrial Enclosures',
    'Injection Moulding',
    'OEM Customization',
  ]
  return (
    <div className="border-y border-border bg-card">
      <div className="mx-auto flex max-w-7xl items-center gap-8 overflow-x-auto px-6 py-4 font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground lg:px-10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {items.map((item) => (
          <span key={item} className="flex shrink-0 items-center gap-8">
            {item}
            <span className="text-accent" aria-hidden="true">
              /
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}
