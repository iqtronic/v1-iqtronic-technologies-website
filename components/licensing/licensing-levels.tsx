import { cn } from '@/lib/utils'
import { CheckIcon } from '@/components/development/icons'
import { LICENCE_LEVELS } from '@/components/licensing/data'

export function LicensingLevels() {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="max-w-2xl">
          <div className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
            Licence levels
          </div>
          <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Three licence levels. One device.
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Every device ships with BASE. MEDIUM and FULL are unlocked with a
            licence key — each level builds on the one before it.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {LICENCE_LEVELS.map((level) => (
            <article
              key={level.id}
              className={cn(
                'relative flex flex-col rounded-sm bg-card p-8',
                level.featured
                  ? 'border-2 border-accent'
                  : 'border border-border',
              )}
            >
              {level.featured && (
                <span className="absolute -top-3 left-8 inline-flex items-center rounded-sm bg-accent px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-accent-foreground">
                  Most popular
                </span>
              )}

              <h3 className="text-2xl font-semibold tracking-tight">
                {level.name}
              </h3>
              <p className="mt-2 font-mono text-xs uppercase tracking-[0.16em] text-accent">
                {level.eyebrow}
              </p>

              <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
                {level.description}
              </p>

              <ul className="mt-8 flex flex-1 flex-col gap-3 border-t border-border pt-6">
                {level.adds.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckIcon className="mt-0.5 size-4 shrink-0 text-accent" />
                    <span className="text-sm leading-relaxed text-foreground">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
