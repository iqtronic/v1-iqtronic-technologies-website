import Link from 'next/link'

export function ProductLicensingSummary() {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10 lg:py-16">
        <div className="rounded-sm border border-border bg-card p-6 lg:p-8">
          {/* Title + status badge */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
              Software Licensing
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-sm border border-emerald-600/30 bg-emerald-500/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-emerald-700 dark:text-emerald-400">
              <span aria-hidden="true">✓</span>
              BASE Licence Included
            </span>
          </div>

          {/* Card text */}
          <div className="mt-5 max-w-3xl space-y-3 text-pretty leading-relaxed text-muted-foreground">
            <p>
              Every IQsocket, IQgate and IQboard device is delivered with the
              BASE software licence already included.
            </p>
            <p>
              Additional features can be unlocked at any time by upgrading to the
              MEDIUM or FULL software licence. No hardware replacement is
              required.
            </p>
          </div>

          {/* Highlighted important information */}
          <div className="mt-6 rounded-sm border-l-2 border-accent bg-background p-4">
            <p className="text-sm leading-relaxed text-foreground">
              All displayed product prices already include the BASE software
              licence.
            </p>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              MEDIUM and FULL licences are optional software upgrades and can be
              purchased at any time.
            </p>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/iqtronic-smart-socket-licensing"
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-border bg-card px-6 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              View Licence Options
            </Link>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 rounded-sm bg-accent px-6 py-3.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
            >
              Upgrade Licence
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
