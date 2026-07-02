import Image from 'next/image'
import Link from 'next/link'

export function DevelopmentHero() {
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
              Product development
            </div>

            <h1 className="mt-6 max-w-2xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Engineering from Idea to Production.
            </h1>

            <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
              Complete electronic product development — from the first schematic
              to certified production.
            </p>

            <div className="mt-6 max-w-xl space-y-4 text-pretty leading-relaxed text-muted-foreground">
              <p>
                For more than 25 years IQtronic has been developing industrial
                electronics, embedded firmware and complete IoT solutions.
              </p>
              <p>
                We transform ideas into reliable products ready for production.
              </p>
            </div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-sm bg-accent px-6 py-3.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
              >
                Request Development
                <span aria-hidden="true">→</span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-sm border border-border bg-background px-6 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm border border-border">
              <Image
                src="/images/development/dev-hero-lab.png"
                alt="IQtronic electronics research and development laboratory workbench"
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
