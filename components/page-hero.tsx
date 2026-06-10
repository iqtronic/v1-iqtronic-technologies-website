import Link from 'next/link'

type Crumb = { label: string; href?: string }

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
}: {
  eyebrow: string
  title: string
  description?: string
  breadcrumbs?: Crumb[]
}) {
  return (
    <section className="border-b border-border bg-card pt-16">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav
            aria-label="Breadcrumb"
            className="mb-8 flex flex-wrap items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground"
          >
            {breadcrumbs.map((crumb, i) => (
              <span key={crumb.label} className="flex items-center gap-2">
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    className="transition-colors hover:text-foreground"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-foreground">{crumb.label}</span>
                )}
                {i < breadcrumbs.length - 1 && (
                  <span className="text-accent" aria-hidden="true">
                    /
                  </span>
                )}
              </span>
            ))}
          </nav>
        )}

        <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-accent">
          <span className="inline-block size-2 bg-accent" aria-hidden="true" />
          {eyebrow}
        </div>

        <h1 className="mt-6 max-w-3xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
          {title}
        </h1>

        {description && (
          <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground">
            {description}
          </p>
        )}
      </div>
    </section>
  )
}
