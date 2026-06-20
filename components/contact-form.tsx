'use client'

import { useState } from 'react'

/**
 * Frontend-only contact form placeholder.
 * No backend, no email sending — submission is intentionally inert and only
 * shows a local confirmation message. Wire up a real handler when a backend
 * becomes available.
 */
export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        setSubmitted(true)
      }}
      className="grid grid-cols-1 gap-4 rounded-sm border border-border bg-card p-6 sm:grid-cols-2 lg:p-8"
    >
      <Field label="Name" name="name" placeholder="Your name" required />
      <Field label="Company" name="company" placeholder="Company name" />
      <Field
        label="Email"
        name="email"
        type="email"
        placeholder="you@company.com"
        required
        className="sm:col-span-2"
      />

      <div className="sm:col-span-2">
        <label
          htmlFor="interest"
          className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground"
        >
          Area of interest
        </label>
        <select
          id="interest"
          name="interest"
          className="mt-2 w-full rounded-sm border border-border bg-background px-3 py-2.5 text-sm text-foreground outline-none focus:border-accent"
        >
          <option>Products</option>
          <option>Engineering Services</option>
          <option>Laboratory Testing</option>
          <option>Other</option>
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
          placeholder="What are you building?"
          className="mt-2 w-full resize-none rounded-sm border border-border bg-background px-3 py-2.5 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-accent"
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 rounded-sm bg-accent px-5 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90 sm:col-span-2"
      >
        Send message
        <span aria-hidden="true">→</span>
      </button>

      {submitted && (
        <p
          role="status"
          className="text-sm leading-relaxed text-muted-foreground sm:col-span-2"
        >
          Thanks — your message has been noted. This form is a placeholder and
          does not yet send anything; an engineer will follow up once messaging
          is connected.
        </p>
      )}
    </form>
  )
}

function Field({
  label,
  name,
  type = 'text',
  placeholder,
  required,
  className,
}: {
  label: string
  name: string
  type?: string
  placeholder?: string
  required?: boolean
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
        required={required}
        className="mt-2 w-full rounded-sm border border-border bg-background px-3 py-2.5 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-accent"
      />
    </div>
  )
}
