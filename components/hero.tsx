import { RotatingSlogan } from '@/components/rotating-slogan'
import { HeroVideo } from '@/components/hero-video'

export function Hero({ compact = false }: { compact?: boolean }) {
  return (
    <section id="top" className="relative overflow-hidden pt-16">
      <div
        className={`mx-auto grid max-w-7xl grid-cols-1 px-6 lg:grid-cols-12 lg:gap-8 lg:px-10 ${
          compact
            ? 'gap-6 pb-6 pt-6 lg:pb-8 lg:pt-8'
            : 'gap-12 pb-16 pt-16 lg:pb-24 lg:pt-24'
        }`}
      >
        <div className="flex flex-col justify-center lg:col-span-6">
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
            <span className="inline-block size-2 bg-accent" aria-hidden="true" />
            Engineering since 1999 · Industrial IoT since 2003
          </div>

          <h1
            className={`max-w-[8em] text-left font-semibold leading-[1.05] tracking-tight ${
              compact
                ? 'mt-5 text-[1.9rem] sm:text-[2.5rem] lg:text-[3.15rem]'
                : 'mt-6 text-[2.375rem] sm:text-[3.15rem] lg:text-[3.9375rem]'
            }`}
          >
            Engineering since <span className="text-[#e0420b]">1999</span>.
            <br />
            Industrial IoT since <span className="text-[#e0420b]">2003</span>.
          </h1>

          <div className={compact ? 'mt-4' : 'mt-6'}>
            <RotatingSlogan />
          </div>

          <p
            className={`max-w-xl text-pretty font-medium leading-relaxed text-foreground ${
              compact ? 'mt-3 text-sm' : 'mt-4 text-base'
            }`}
          >
            Hardware. Firmware. Testing. Manufacturing.
          </p>

          <div
            className={`flex flex-wrap items-center gap-3 ${
              compact ? 'mt-6' : 'mt-8'
            }`}
          >
            <a
              href="#products"
              className={`inline-flex items-center gap-2 rounded-sm bg-primary px-5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 ${
                compact ? 'py-2.5' : 'py-3'
              }`}
            >
              Explore products
              <span aria-hidden="true">→</span>
            </a>
            <a
              href="#engineering"
              className={`inline-flex items-center gap-2 rounded-sm border border-border px-5 text-sm font-medium text-foreground transition-colors hover:bg-secondary ${
                compact ? 'py-2.5' : 'py-3'
              }`}
            >
              Engineering services
            </a>
          </div>

          <dl
            className={`grid max-w-lg grid-cols-3 gap-px overflow-hidden rounded-sm border border-border bg-border ${
              compact ? 'mt-8' : 'mt-12'
            }`}
          >
            {[
              { value: '25+', label: 'Years of engineering' },
              { value: '100,000+', label: 'Devices delivered' },
              { value: '40+', label: 'Countries served' },
            ].map((stat) => (
              <div
                key={stat.label}
                className={`bg-card px-4 ${compact ? 'py-4' : 'py-5'}`}
              >
                <dt
                  className={`font-semibold tracking-tight ${
                    compact ? 'text-xl' : 'text-2xl'
                  }`}
                >
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
          <div className="mb-4 flex w-full items-center justify-center gap-2 text-center font-mono text-[11px] uppercase tracking-[0.14em] text-foreground lg:pointer-events-none lg:absolute lg:right-0 lg:top-0 lg:z-10 lg:mb-0 lg:aspect-square lg:h-full lg:w-auto lg:translate-x-[210px] lg:items-start lg:justify-start lg:text-left">
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
          <HeroVideo variant={compact ? 'compact' : 'default'} />
        </div>
      </div>
    </section>
  )
}
