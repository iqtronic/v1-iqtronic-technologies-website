'use client'

import { useState } from 'react'

const TOPICS = [
  { title: 'New products', desc: 'Launches across IoT, GSM and metrology lines.' },
  { title: 'Firmware releases', desc: 'Updates, fixes and new device capabilities.' },
  { title: 'Technical articles', desc: 'Engineering notes and application guides.' },
  { title: 'Distributor updates', desc: 'Partner news and channel announcements.' },
]

export function StayInformed() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section
      id="stay-informed"
      className="border-t border-border bg-background"
    >
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
              Stay Informed
            </div>
            <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Updates from the workbench.
            </h2>
            <p className="mt-6 max-w-md text-pretty leading-relaxed text-muted-foreground">
              Subscribe for product and company updates. We send a focused
              digest when there is something worth your time — no noise.
            </p>

            <form
              className="mt-8 flex w-full max-w-md flex-col gap-3 sm:flex-row"
              onSubmit={(e) => {
                e.preventDefault()
                setSubmitted(true)
              }}
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                name="email"
                type="email"
                required
                placeholder="you@company.com"
                className="w-full rounded-sm border border-border bg-card px-3 py-3 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-accent"
              />
              <button
                type="submit"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-sm bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                Subscribe
                <span aria-hidden="true">→</span>
              </button>
            </form>

            <p
              className="mt-3 h-5 font-mono text-xs uppercase tracking-[0.14em] text-accent"
              role="status"
              aria-live="polite"
            >
              {submitted ? 'Thanks — you are on the list.' : ''}
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2">
              {TOPICS.map((topic) => (
                <div key={topic.title} className="flex flex-col bg-card p-6">
                  <h3 className="flex items-center gap-2 text-base font-medium tracking-tight">
                    <span
                      className="inline-block size-1.5 bg-accent"
                      aria-hidden="true"
                    />
                    {topic.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {topic.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
