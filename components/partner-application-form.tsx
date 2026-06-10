'use client'

import { PARTNER_TYPES, REGIONS } from '@/lib/distributors'

export function PartnerApplicationForm() {
  return (
    <form
      className="grid grid-cols-1 gap-4 rounded-sm border border-border bg-card p-6 sm:grid-cols-2 sm:p-8"
      onSubmit={(e) => e.preventDefault()}
    >
      <Field label="Company" name="company" placeholder="Company name" />
      <div>
        <label
          htmlFor="country"
          className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground"
        >
          Country
        </label>
        <input
          id="country"
          name="country"
          placeholder="Country"
          className="mt-2 w-full rounded-sm border border-border bg-background px-3 py-2.5 text-sm text-foreground outline-none placeholder:text-muted-foreground/60 focus:border-accent"
        />
      </div>
      <Field
        label="Website"
        name="website"
        placeholder="https://"
        className="sm:col-span-2"
      />
      <Field label="Contact person" name="contact" placeholder="Full name" />
      <Field
        label="Email"
        name="email"
        type="email"
        placeholder="you@company.com"
      />
      <div className="sm:col-span-2">
        <label
          htmlFor="focus"
          className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground"
        >
          Business focus
        </label>
        <select
          id="focus"
          name="focus"
          className="mt-2 w-full rounded-sm border border-border bg-background px-3 py-2.5 text-sm text-foreground outline-none focus:border-accent"
        >
          {PARTNER_TYPES.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </div>
      <div className="sm:col-span-2">
        <label
          htmlFor="target-region"
          className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground"
        >
          Target region
        </label>
        <select
          id="target-region"
          name="target-region"
          className="mt-2 w-full rounded-sm border border-border bg-background px-3 py-2.5 text-sm text-foreground outline-none focus:border-accent"
        >
          {REGIONS.map((r) => (
            <option key={r}>{r}</option>
          ))}
        </select>
      </div>
      <div className="sm:col-span-2">
        <label
          htmlFor="message"
          className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Tell us about your markets, customers and current product lines."
          className="mt-2 w-full resize-none rounded-sm border border-border bg-background px-3 py-2.5 text-sm text-foreground outline-none placeholder:text-muted-foreground/60 focus:border-accent"
        />
      </div>
      <button
        type="submit"
        className="sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
      >
        Submit application
        <span aria-hidden="true">→</span>
      </button>
    </form>
  )
}

function Field({
  label,
  name,
  type = 'text',
  placeholder,
  className,
}: {
  label: string
  name: string
  type?: string
  placeholder?: string
  className?: string
}) {
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full rounded-sm border border-border bg-background px-3 py-2.5 text-sm text-foreground outline-none placeholder:text-muted-foreground/60 focus:border-accent"
      />
    </div>
  )
}
