import { CheckIcon } from '@/components/development/icons'

const POINTS = [
  'No hardware replacement is required.',
  'No device modification is required.',
]

export function LicensingUpgrade() {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="rounded-sm border-2 border-accent bg-card p-8 sm:p-12 lg:p-16">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <div className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                Licence upgrade
              </div>
              <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                Upgrade Anytime
              </h2>
              <p className="mt-5 max-w-xl text-pretty leading-relaxed text-muted-foreground">
                Your IQsocket, IQgate or IQboard device can be upgraded at any
                time using a software licence key.
              </p>
            </div>

            <div className="lg:col-span-5">
              <ul className="flex flex-col gap-4">
                {POINTS.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 rounded-sm border border-border bg-background p-4"
                  >
                    <span
                      className="flex size-8 shrink-0 items-center justify-center rounded-sm bg-accent/10 text-accent"
                      aria-hidden="true"
                    >
                      <CheckIcon className="size-4" />
                    </span>
                    <span className="text-sm font-medium leading-relaxed text-foreground">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
