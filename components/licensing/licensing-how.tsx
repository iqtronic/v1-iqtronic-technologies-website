import { HOW_STEPS } from '@/components/licensing/data'

export function LicensingHow() {
  return (
    <section className="border-b border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="max-w-2xl">
          <div className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
            How licensing works
          </div>
          <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            From purchase to full feature set.
          </h2>
        </div>

        <ol className="mt-14 border-l border-border">
          {HOW_STEPS.map((step, i) => (
            <li
              key={step}
              className="relative pb-12 pl-16 last:pb-0 sm:pl-20"
            >
              <span
                className="absolute left-0 top-0 z-10 flex size-10 -translate-x-1/2 items-center justify-center rounded-full bg-accent font-mono text-sm font-semibold text-accent-foreground"
                aria-hidden="true"
              >
                {String(i + 1).padStart(2, '0')}
              </span>

              <div className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
                {`Step ${i + 1}`}
              </div>
              <h3 className="mt-1.5 text-balance text-xl font-semibold tracking-tight sm:text-2xl">
                {step}
              </h3>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
