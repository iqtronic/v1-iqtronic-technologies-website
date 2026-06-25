import { RotatingSlogan } from '@/components/rotating-slogan'
import { HeroVideo } from '@/components/hero-video'

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
            Engineering since <span className="text-[#e0420b]">1999</span>.
            <br />
            Industrial IoT since <span className="text-[#e0420b]">2003</span>.
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

        <div className="relative flex w-full flex-col items-center justify-center lg:col-span-6 lg:block">
          <div className="mb-4 flex w-full items-center justify-center gap-2 text-center font-mono text-[11px] uppercase tracking-[0.14em] text-foreground lg:absolute lg:right-0 lg:top-0 lg:z-10 lg:mb-0 lg:w-auto lg:justify-end">
            <span className="inline-block size-1.5 bg-accent" aria-hidden="true" />
            Proudly designed in Czechia
            <svg
              viewBox="0 0 18 12"
              className="h-3 w-[18px] shrink-0"
              role="img"
              aria-label="Flag of Czechia"
            >
              <rect width="18" height="6" y="0" fill="#fff" />
              <rect width="18" height="6" y="6" fill="#d7141a" />
              <path d="M0 0 L9 6 L0 12 Z" fill="#11457e" />
            </svg>
          </div>
          <HeroVideo />
        </div>
      </div>
    </section>
  )
}
