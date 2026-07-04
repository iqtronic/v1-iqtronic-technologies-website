import { Fragment } from 'react'
import { CheckIcon, DashIcon } from '@/components/development/icons'
import { COMPARISON } from '@/components/licensing/data'

function Cell({ enabled }: { enabled: boolean }) {
  return (
    <span className="flex items-center justify-center">
      {enabled ? (
        <CheckIcon className="size-5 text-accent" />
      ) : (
        <DashIcon className="size-5 text-muted-foreground/50" />
      )}
      <span className="sr-only">{enabled ? 'Included' : 'Not included'}</span>
    </span>
  )
}

export function LicensingComparison() {
  return (
    <section
      id="comparison"
      className="scroll-mt-24 border-b border-border bg-card"
    >
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="max-w-2xl">
          <div className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
            Feature comparison
          </div>
          <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Compare every feature across licences.
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Licences are cumulative — MEDIUM includes everything in BASE, and
            FULL includes everything in MEDIUM.
          </p>
        </div>

        <div className="mt-12 overflow-x-auto rounded-sm border border-border">
          <table className="w-full min-w-[640px] border-collapse bg-background">
            <thead>
              <tr>
                <th
                  scope="col"
                  className="w-2/5 py-5 pl-6 pr-4 text-left font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground"
                >
                  Feature
                </th>
                <th
                  scope="col"
                  className="px-2 py-5 text-center text-sm font-semibold tracking-tight"
                >
                  BASE
                </th>
                <th
                  scope="col"
                  className="bg-accent/5 px-2 py-5 text-center text-sm font-semibold tracking-tight"
                >
                  MEDIUM
                </th>
                <th
                  scope="col"
                  className="px-2 py-5 text-center text-sm font-semibold tracking-tight"
                >
                  FULL
                </th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON.map((group) => (
                <Fragment key={group.group}>
                  <tr className="border-t border-border">
                    <th
                      scope="colgroup"
                      colSpan={4}
                      className="bg-secondary/60 py-3 pl-6 pr-4 text-left font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground"
                    >
                      {group.group}
                    </th>
                  </tr>
                  {group.rows.map((row) => (
                    <tr
                      key={row.label}
                      className="border-t border-border [&>th]:pl-6"
                    >
                      <th
                        scope="row"
                        className="py-4 pr-4 text-left text-sm font-medium text-foreground"
                      >
                        {row.label}
                      </th>
                      <td className="px-2 py-4">
                        <Cell enabled={row.base} />
                      </td>
                      <td className="bg-accent/5 px-2 py-4">
                        <Cell enabled={row.medium} />
                      </td>
                      <td className="px-2 py-4">
                        <Cell enabled={row.full} />
                      </td>
                    </tr>
                  ))}
                </Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
