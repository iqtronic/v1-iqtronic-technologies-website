import Image from 'next/image'
import { RotatingSlogan } from '@/components/rotating-slogan'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 pb-16 pt-16 lg:grid-cols-12 lg:gap-8 lg:px-10 lg:pb-24 lg:pt-24">
        <div className="flex flex-col justify-center lg:col-span-6">
          <Image
            src="/images/iqtronic-logo.png"
            alt="IQtronic Technologies"
            width={281}
            height={87}
            priority
            className="h-auto w-60"
          />

          <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Engineering since 1999.
            <br />
            Industrial IoT since 2003.
          </h1>

          <div className="mt-6">
            <RotatingSlogan />
          </div>

          <p className="mt-4 max-w-xl text-pretty text-base font-medium leading-relaxed text-foreground">
            Hardware. Firmware. Testing. Manufacturing.
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
              { value: '100,000+', label: 'Devices delivered' },
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
              Proudly designed in Czechia
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
