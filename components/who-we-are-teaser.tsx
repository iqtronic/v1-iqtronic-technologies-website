import Link from 'next/link'

export function WhoWeAreTeaser() {
  return (
    <section id="company" className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <div className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
              Who We Are
            </div>
            <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              A quarter century of disciplined engineering.
            </h2>
          </div>

          <div className="lg:col-span-7">
            <div className="space-y-2 text-pretty text-xl font-medium leading-relaxed tracking-tight sm:text-2xl">
              <p>Engineering since 1999.</p>
              <p>Industrial IoT since 2003.</p>
              <p className="text-accent">Proudly Designed in Czechia.</p>
            </div>
            <Link
              href="/who-we-are"
              className="mt-8 inline-flex items-center gap-2 rounded-sm border border-border bg-background px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              Learn More
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
