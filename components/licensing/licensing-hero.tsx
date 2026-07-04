import Image from 'next/image'
import Link from 'next/link'

export function LicensingHero() {
  return (
    <section className="border-b border-border bg-card pt-16">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-accent">
              <span
                className="inline-block size-2 bg-accent"
                aria-hidden="true"
              />
              Software licensing
            </div>

            <h1 className="mt-6 max-w-2xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              IQtronic Smart Socket Licensing
            </h1>

            <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
              Flexible software licensing for IQsocket, IQgate and IQboard
              products.
            </p>

            <div className="mt-6 max-w-xl space-y-4 text-pretty leading-relaxed text-muted-foreground">
              <p>
                Every IQsocket, IQgate and IQboard device includes a software
                licence.
              </p>
              <p>
                Additional features can be unlocked at any time using a licence
                key. No hardware replacement is required.
              </p>
            </div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="#comparison"
                className="inline-flex items-center justify-center gap-2 rounded-sm bg-accent px-6 py-3.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
              >
                View Licence Comparison
                <span aria-hidden="true">→</span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-sm border border-border bg-background px-6 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
              >
                Contact Sales
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm border border-border bg-background">
              <Image
                src="/images/licensing/license-activation.png"
                alt="Illustration of software licence key activation unlocking device features"
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
