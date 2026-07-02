import Link from 'next/link'

export function DevelopmentCta() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="rounded-sm border border-border bg-card px-8 py-16 text-center sm:px-12 lg:py-20">
          <div className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
            Start a project
          </div>
          <h2 className="mx-auto mt-5 max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Let&apos;s build your next product together.
          </h2>

          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row sm:items-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-sm bg-accent px-6 py-3.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
            >
              Start Your Project
              <span aria-hidden="true">→</span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-border bg-background px-6 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              Contact Engineering
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
