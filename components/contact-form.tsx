'use client'

import { useState } from 'react'

/**
 * Frontend-only contact form placeholder.
 * No backend, no email sending — submission is intentionally inert and only
 * shows a local confirmation message. Wire up a real handler when a backend
 * becomes available.
 */
const MAX_ATTACHMENT_BYTES = 10 * 1024 * 1024 // 10 MB

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [fileError, setFileError] = useState<string | null>(null)
  const [fileName, setFileName] = useState<string | null>(null)

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) {
      setFileError(null)
      setFileName(null)
      return
    }
    const isPdf =
      file.type === 'application/pdf' || file.name.toLowerCase().endsWith('.pdf')
    if (!isPdf) {
      setFileError('Only PDF files are allowed.')
      setFileName(null)
      e.target.value = ''
      return
    }
    if (file.size > MAX_ATTACHMENT_BYTES) {
      setFileError('File is too large. Maximum size is 10MB.')
      setFileName(null)
      e.target.value = ''
      return
    }
    setFileError(null)
    setFileName(file.name)
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        if (fileError) return
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
          <option>Development</option>
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

      <div className="sm:col-span-2">
        <label
          htmlFor="attachment"
          className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground"
        >
          Attachment
        </label>
        <input
          id="attachment"
          name="attachment"
          type="file"
          accept="application/pdf,.pdf"
          onChange={handleFileChange}
          aria-describedby="attachment-hint"
          className="mt-2 w-full rounded-sm border border-border bg-background px-3 py-2.5 text-sm text-foreground outline-none file:mr-3 file:rounded-sm file:border-0 file:bg-secondary file:px-3 file:py-1 file:text-xs file:font-medium file:text-foreground focus:border-accent"
        />
        <p
          id="attachment-hint"
          className="mt-2 text-xs leading-relaxed text-muted-foreground"
        >
          PDF only · max 10MB
        </p>
        {fileName && !fileError ? (
          <p className="mt-1 text-xs leading-relaxed text-accent">
            Attached: {fileName}
          </p>
        ) : null}
        {fileError ? (
          <p role="alert" className="mt-1 text-xs leading-relaxed text-destructive">
            {fileError}
          </p>
        ) : null}
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
