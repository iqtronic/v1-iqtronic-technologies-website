import Link from 'next/link'
import { cn } from '@/lib/utils'
import { CheckIcon, DashIcon } from '@/components/development/icons'

// Availability status per model. Change these values to update the badges.
type Availability = 'AVAILABLE' | 'FULLY BOOKED'

const AVAILABILITY: Record<'partnership' | 'full' | 'bid', Availability> = {
  partnership: 'AVAILABLE',
  full: 'AVAILABLE',
  bid: 'AVAILABLE',
}

function AvailabilityBadge({ status }: { status: Availability }) {
  const available = status === 'AVAILABLE'
  return (
    <span className="inline-flex items-center gap-1.5 rounded-sm border border-border bg-background px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
      <span
        className={cn(
          'size-1.5 rounded-full',
          available ? 'bg-accent' : 'bg-muted-foreground/50',
        )}
        aria-hidden="true"
      />
      {status}
    </span>
  )
}

function PaymentModel() {
  return (
    <div className="mt-6 rounded-sm border border-border bg-background p-5">
      <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
        Payment model
      </p>
      <div className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
        <p>
          Development starts after payment of the first prepaid development week.
        </p>
        <p>Each development week includes 8 hours of engineering work.</p>
        <p>At the end of every week the customer receives:</p>
        <ul className="flex flex-col gap-1.5">
          {['Completed work summary', 'Hours used', 'Plan for the following week'].map(
            (item) => (
              <li key={item} className="flex gap-2.5">
                <span
                  className="mt-2 size-1 shrink-0 bg-accent"
                  aria-hidden="true"
                />
                <span>{item}</span>
              </li>
            ),
          )}
        </ul>
        <p>
          The customer then decides whether to continue with another prepaid
          development week.
        </p>
        <p>There is no long-term commitment.</p>
        <p>The customer pays only for completed prepaid development weeks.</p>
      </div>
    </div>
  )
}

const PARTNERSHIP_INCLUDED = [
  'Electronic hardware development',
  'Embedded firmware development',
  'Prototype manufacturing',
  'Functional testing',
  'EMC pre-compliance optimization',
  'Production support',
  'Long-term firmware maintenance',
  'Future hardware revisions',
  'Manufacturing by IQtronic',
]

const PARTNERSHIP_EXCLUDED = [
  'Firmware source code',
  'Manufacturing documentation for third-party production',
]

const FULL_INCLUDED = [
  'Electronic hardware development',
  'Embedded firmware development',
  'Prototype manufacturing',
  'Functional testing',
  'EMC pre-compliance optimization',
  'Complete manufacturing documentation',
  'PCB production files',
  'BOM',
  'Gerbers',
  'Assembly documentation',
  'Firmware source code',
  'Manufacturing documentation',
  'Production by any EMS partner',
  'Complete project ownership',
]

type Cell = { type: 'check' } | { type: 'dash' } | { type: 'text'; value: string }

const COMPARISON: { label: string; partnership: Cell; full: Cell }[] = [
  {
    label: 'Development rate',
    partnership: { type: 'text', value: '€280 / week' },
    full: { type: 'text', value: '€520 / week' },
  },
  {
    label: 'Hardware development',
    partnership: { type: 'check' },
    full: { type: 'check' },
  },
  {
    label: 'Embedded firmware',
    partnership: { type: 'check' },
    full: { type: 'check' },
  },
  {
    label: 'Prototype manufacturing',
    partnership: { type: 'check' },
    full: { type: 'check' },
  },
  {
    label: 'EMC optimization',
    partnership: { type: 'check' },
    full: { type: 'check' },
  },
  {
    label: 'Firmware source code',
    partnership: { type: 'dash' },
    full: { type: 'text', value: 'Included' },
  },
  {
    label: 'Manufacturing documentation',
    partnership: { type: 'text', value: 'IQtronic internal' },
    full: { type: 'text', value: 'Complete documentation' },
  },
  {
    label: 'Production',
    partnership: { type: 'text', value: 'IQtronic only' },
    full: { type: 'text', value: 'Any manufacturer' },
  },
  {
    label: 'Project ownership',
    partnership: { type: 'text', value: 'Manufacturing Partnership' },
    full: { type: 'text', value: 'Complete ownership' },
  },
  {
    label: 'Long-term production support',
    partnership: { type: 'text', value: 'Included' },
    full: { type: 'text', value: 'Optional' },
  },
]

function IncludedItem({ label }: { label: string }) {
  return (
    <li className="flex gap-3">
      <CheckIcon className="mt-0.5 size-5 shrink-0 text-accent" />
      <span className="leading-relaxed text-foreground">{label}</span>
    </li>
  )
}

function ExcludedItem({ label }: { label: string }) {
  return (
    <li className="flex gap-3">
      <DashIcon className="mt-0.5 size-5 shrink-0 text-muted-foreground" />
      <span className="leading-relaxed text-muted-foreground">{label}</span>
    </li>
  )
}

function ComparisonCell({ cell }: { cell: Cell }) {
  if (cell.type === 'check') {
    return (
      <span className="inline-flex items-center justify-center">
        <CheckIcon className="size-5 text-accent" />
        <span className="sr-only">Included</span>
      </span>
    )
  }
  if (cell.type === 'dash') {
    return (
      <span className="inline-flex items-center justify-center">
        <DashIcon className="size-5 text-muted-foreground" />
        <span className="sr-only">Not included</span>
      </span>
    )
  }
  return <span className="text-sm text-foreground">{cell.value}</span>
}

export function DevelopmentModels() {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        {/* Intro */}
        <div className="max-w-2xl">
          <div className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
            Development models
          </div>
          <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Two ways to build your product.
          </h2>
          <div className="mt-6 space-y-4 text-pretty leading-relaxed text-muted-foreground">
            <p>Every project is different.</p>
            <p>
              Some customers prefer the most cost-effective long-term
              manufacturing partnership. Others require complete ownership of the
              project including firmware source code and manufacturing
              documentation.
            </p>
            <p>Therefore IQtronic offers two development models.</p>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 — Manufacturing Partnership (highlighted) */}
          <article className="relative flex flex-col rounded-sm border-2 border-accent bg-card p-8 sm:p-10">
            <div className="flex items-center justify-between gap-4">
              <span className="inline-flex items-center rounded-sm bg-accent px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-accent-foreground">
                Most popular
              </span>
              <AvailabilityBadge status={AVAILABILITY.partnership} />
            </div>

            <h3 className="mt-6 text-2xl font-semibold tracking-tight">
              Manufacturing Partnership
            </h3>
            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-4xl font-semibold tracking-tight">€280</span>
              <span className="text-muted-foreground">/ week</span>
            </div>
            <p className="mt-1.5 text-sm text-muted-foreground">
              8 development hours included
            </p>

            <div className="mt-5 space-y-3 text-pretty leading-relaxed text-muted-foreground">
              <p>
                The most cost-effective solution for customers planning long-term
                manufacturing with IQtronic.
              </p>
              <p>
                Development costs are reduced while IQtronic handles
                manufacturing, production optimization and long-term support.
              </p>
            </div>

            <div className="mt-8 border-t border-border pt-6">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
                Included
              </p>
              <ul className="mt-4 flex flex-col gap-3">
                {PARTNERSHIP_INCLUDED.map((item) => (
                  <IncludedItem key={item} label={item} />
                ))}
              </ul>
            </div>

            <div className="mt-6 border-t border-border pt-6">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
                Not included
              </p>
              <ul className="mt-4 flex flex-col gap-3">
                {PARTNERSHIP_EXCLUDED.map((item) => (
                  <ExcludedItem key={item} label={item} />
                ))}
              </ul>
            </div>

            <PaymentModel />

            <div className="mt-6 rounded-sm border border-border bg-background p-5">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
                Important information
              </p>
              <div className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
                <p>
                  Firmware remains the intellectual property of IQtronic.
                </p>
                <p>Devices are manufactured exclusively by IQtronic.</p>
                <p>
                  Firmware is supplied only as part of IQtronic manufactured
                  products.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-1 items-end">
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center gap-2 rounded-sm bg-accent px-6 py-3.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
              >
                Request Partnership
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </article>

          {/* Card 2 — Full Custom Development */}
          <article className="relative flex flex-col rounded-sm border border-border bg-card p-8 sm:p-10">
            <div className="flex items-center justify-between gap-4">
              <span className="inline-flex items-center rounded-sm border border-border px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                Full ownership
              </span>
              <AvailabilityBadge status={AVAILABILITY.full} />
            </div>

            <h3 className="mt-6 text-2xl font-semibold tracking-tight">
              Full Custom Development
            </h3>
            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-4xl font-semibold tracking-tight">€520</span>
              <span className="text-muted-foreground">/ week</span>
            </div>
            <p className="mt-1.5 text-sm text-muted-foreground">
              8 development hours included
            </p>

            <div className="mt-5 space-y-3 text-pretty leading-relaxed text-muted-foreground">
              <p>
                Ideal for customers requiring complete ownership of the project.
              </p>
            </div>

            <div className="mt-8 border-t border-border pt-6">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
                Included
              </p>
              <ul className="mt-4 flex flex-col gap-3">
                {FULL_INCLUDED.map((item) => (
                  <IncludedItem key={item} label={item} />
                ))}
              </ul>
            </div>

            <PaymentModel />

            <div className="mt-8 flex flex-1 items-end">
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center gap-2 rounded-sm bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                Request Full Development
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </article>

          {/* Card 3 — Project Bid */}
          <article className="relative flex flex-col rounded-sm border border-border bg-card p-8 sm:p-10">
            <div className="flex items-center justify-between gap-4">
              <span className="inline-flex items-center rounded-sm border border-border px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                Fixed budget
              </span>
              <AvailabilityBadge status={AVAILABILITY.bid} />
            </div>

            <h3 className="mt-6 text-2xl font-semibold tracking-tight">
              Project Bid
            </h3>
            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-4xl font-semibold tracking-tight">
                Your Budget
              </span>
            </div>
            <p className="mt-1.5 text-sm text-muted-foreground">
              Evaluated individually
            </p>

            <div className="mt-5 space-y-3 text-pretty leading-relaxed text-muted-foreground">
              <p>Have a fixed budget?</p>
            </div>

            <div className="mt-8 border-t border-border pt-6">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
                Send us
              </p>
              <ul className="mt-4 flex flex-col gap-3">
                {[
                  'Complete technical specification',
                  'Required delivery date',
                  'Target budget',
                  'Expected production quantity',
                ].map((item) => (
                  <IncludedItem key={item} label={item} />
                ))}
              </ul>
            </div>

            <div className="mt-6 rounded-sm border border-border bg-background p-5">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
                Evaluation
              </p>
              <div className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
                <p>
                  We evaluate every proposal individually and respond within
                  five business days.
                </p>
                <p>Possible responses:</p>
                <ul className="flex flex-col gap-1.5">
                  {['Accepted', 'Declined'].map((item) => (
                    <li key={item} className="flex gap-2.5">
                      <span
                        className="mt-2 size-1 shrink-0 bg-accent"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p>Only complete technical specifications are evaluated.</p>
              </div>
            </div>

            <div className="mt-8 flex flex-1 items-end">
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center gap-2 rounded-sm border border-border bg-card px-6 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-background"
              >
                Submit Project Bid
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </article>
        </div>

        {/* Comparison table */}
        <div className="mt-16">
          <h3 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
            Compare development models
          </h3>

          <div className="mt-8 overflow-x-auto rounded-sm border border-border">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <caption className="sr-only">
                Comparison of the Manufacturing Partnership and Full Custom
                Development models
              </caption>
              <thead>
                <tr className="border-b border-border bg-card">
                  <th
                    scope="col"
                    className="px-6 py-5 font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground"
                  >
                    Feature
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-5 text-sm font-semibold tracking-tight"
                  >
                    Manufacturing Partnership
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-5 text-sm font-semibold tracking-tight"
                  >
                    Full Custom Development
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row, i) => (
                  <tr
                    key={row.label}
                    className={cn(
                      'border-b border-border last:border-0',
                      i % 2 === 1 && 'bg-card/50',
                    )}
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 text-sm font-medium text-foreground"
                    >
                      {row.label}
                    </th>
                    <td className="px-6 py-4">
                      <ComparisonCell cell={row.partnership} />
                    </td>
                    <td className="px-6 py-4">
                      <ComparisonCell cell={row.full} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom information block */}
        <div className="mt-16 rounded-sm border border-border bg-card p-8 sm:p-10 lg:p-12">
          <h3 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
            Which model is right for your project?
          </h3>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="border-t-2 border-accent pt-5">
              <p className="text-lg font-medium tracking-tight">
                Looking for the most cost-effective solution?
              </p>
              <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                Choose our Manufacturing Partnership model and benefit from
                reduced development costs while IQtronic handles manufacturing,
                production optimization and long-term support.
              </p>
            </div>
            <div className="border-t-2 border-border pt-5">
              <p className="text-lg font-medium tracking-tight">
                Need complete ownership?
              </p>
              <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                Choose Full Custom Development and receive the complete project
                including firmware source code, PCB production files and
                manufacturing documentation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
