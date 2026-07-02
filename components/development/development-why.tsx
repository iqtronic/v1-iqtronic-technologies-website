import { CheckIcon } from '@/components/development/icons'

const FEATURES = [
  'Complete hardware development',
  'Embedded firmware',
  'Prototype manufacturing',
  'EMC optimization',
  'Certification support',
  'Long-term production',
  'Industrial IoT expertise',
  'More than 25 years of engineering experience',
]

export function DevelopmentWhy() {
  return (
    <section className="border-b border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="max-w-2xl">
          <div className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
            Why IQtronic
          </div>
          <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            One engineering partner for the entire product lifecycle.
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature) => (
            <div key={feature} className="flex flex-col bg-card p-8">
              <span
                className="flex size-9 items-center justify-center rounded-sm bg-accent/10 text-accent"
                aria-hidden="true"
              >
                <CheckIcon className="size-5" />
              </span>
              <h3 className="mt-6 text-pretty text-base font-medium leading-snug tracking-tight">
                {feature}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
