import Link from 'next/link'

export function LegalContact() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="rounded-sm border border-border bg-card px-8 py-16 text-center sm:px-12 lg:py-20">
          <div className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
            Contact
          </div>
          <h2 className="mx-auto mt-5 max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Need legal assistance?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
            If you have questions regarding contracts, legal policies or
            compliance, our team will be happy to assist you.
          </p>

          <div className="mt-10 flex justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-sm bg-accent px-6 py-3.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
            >
              Contact IQtronic
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
