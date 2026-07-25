import { InfoIcon } from '@/components/legal/legal-icons'

export function LegalInformationCard() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-6 pt-16 lg:px-10 lg:pt-20">
        <div className="rounded-sm border border-border bg-card p-8 lg:p-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:gap-8">
            <div
              className="flex size-11 shrink-0 items-center justify-center rounded-sm border border-accent/40 bg-accent/10 text-accent"
              aria-hidden="true"
            >
              <InfoIcon className="size-5" />
            </div>
            <div className="max-w-3xl">
              <div className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                About the framework
              </div>
              <h2 className="mt-4 text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
                About the IQtronic Legal Framework
              </h2>
              <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
                The IQtronic Legal Framework consists of multiple complementary
                documents. These documents should be interpreted together unless
                a specific written agreement expressly states otherwise.
              </p>
              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                If any conflict exists between individual documents, the{' '}
                <span className="font-medium text-foreground">
                  Document Precedence
                </span>{' '}
                policy shall determine the applicable order of priority.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
