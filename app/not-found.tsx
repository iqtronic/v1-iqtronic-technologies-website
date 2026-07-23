import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'Page not found (404) — IQtronic Technologies',
  description:
    'The page you are looking for could not be found. It may have been moved, renamed, or it never existed.',
}

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main>
        <section id="top" className="relative overflow-hidden pt-16">
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 pb-16 pt-16 lg:grid-cols-12 lg:gap-8 lg:px-10 lg:pb-24 lg:pt-24">
            {/* Copy */}
            <div className="flex flex-col justify-center lg:col-span-6">
              <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                <span
                  className="inline-block size-2 bg-accent"
                  aria-hidden="true"
                />
                Error 404 · Board fault
              </div>

              <h1 className="mt-6 max-w-[9em] text-balance text-left text-[2.375rem] font-semibold leading-[1.05] tracking-tight sm:text-[3.15rem] lg:text-[3.9375rem]">
                This page went up in <span className="text-[#e0420b]">smoke</span>
                .
              </h1>

              <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground">
                The page you requested could not be found. It may have been
                moved, renamed, or the board it lived on finally let out the
                magic smoke. Let&apos;s get you back to something that still
                powers on.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 rounded-sm bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Back to home
                  <span aria-hidden="true">→</span>
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 rounded-sm border border-border px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
                >
                  Browse products
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-sm border border-border px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
                >
                  Contact support
                </Link>
              </div>

              <dl className="mt-12 grid max-w-lg grid-cols-3 gap-px overflow-hidden rounded-sm border border-border bg-border">
                {[
                  { value: '404', label: 'Status code' },
                  { value: '0 V', label: 'Signal on this route' },
                  { value: '100%', label: 'Recoverable' },
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

            {/* Burnt PCB image */}
            <div className="lg:col-span-6">
              <figure className="relative aspect-[4/3] w-full max-w-full overflow-hidden rounded-sm border border-border bg-background">
                <Image
                  src="/images/burnt-pcb-404.png"
                  alt="A burnt-out circuit board with a blown capacitor and a wisp of smoke"
                  fill
                  priority
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
                <figcaption className="absolute bottom-0 left-0 right-0 flex items-center gap-2 bg-background/80 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground backdrop-blur-sm">
                  <span
                    className="inline-block size-1.5 bg-accent"
                    aria-hidden="true"
                  />
                  Diagnosis: page not found
                </figcaption>
              </figure>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
