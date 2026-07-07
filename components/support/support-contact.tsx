import { SupportSection, ContactIcon } from './support-section'

export function SupportContact({ productName }: { productName: string }) {
  return (
    <SupportSection
      eyebrow="Contact Support"
      title="Still need help?"
      icon={<ContactIcon className="size-5" />}
    >
      <div className="rounded-sm border border-border bg-card p-8 sm:p-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <p className="text-pretty leading-relaxed text-muted-foreground">
              {`Can't find what you need for your ${productName}? Open a support
              ticket and an engineer — not a call centre — will get back to you.
              Direct contact details and a ticket form will be available here.`}
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-sm bg-accent px-6 py-4 text-base font-medium text-accent-foreground transition-opacity hover:opacity-90"
            >
              Open Support Ticket
              <span aria-hidden="true">→</span>
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-border bg-background px-6 py-4 text-base font-medium text-foreground transition-colors hover:bg-secondary"
            >
              Contact us
            </a>
          </div>
        </div>
      </div>
    </SupportSection>
  )
}
