'use client'

import { useState } from 'react'
import { FAQ_ITEMS } from '@/components/licensing/data'

export function LicensingFaq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="border-b border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
              FAQ
            </div>
            <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Common licensing questions.
            </h2>
          </div>

          <div className="lg:col-span-8">
            <div className="divide-y divide-border border-y border-border">
              {FAQ_ITEMS.map((item, i) => {
                const isOpen = open === i
                return (
                  <div key={item.question}>
                    <h3>
                      <button
                        type="button"
                        onClick={() => setOpen(isOpen ? null : i)}
                        aria-expanded={isOpen}
                        className="flex w-full items-center justify-between gap-4 py-5 text-left"
                      >
                        <span className="text-base font-medium tracking-tight text-foreground">
                          {item.question}
                        </span>
                        <span
                          className="flex size-7 shrink-0 items-center justify-center rounded-sm border border-border text-accent"
                          aria-hidden="true"
                        >
                          {isOpen ? '−' : '+'}
                        </span>
                      </button>
                    </h3>
                    {isOpen && (
                      <p className="max-w-2xl pb-6 text-pretty leading-relaxed text-muted-foreground">
                        {item.answer}
                      </p>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
