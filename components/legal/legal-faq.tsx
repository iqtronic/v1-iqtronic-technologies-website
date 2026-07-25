'use client'

import { useState } from 'react'

const FAQ_ITEMS = [
  {
    question: 'Why are there multiple legal documents?',
    answer:
      'Each document governs a distinct aspect of our products, software, services and website. Splitting the framework into focused documents keeps each policy clear, maintainable and easy to reference, while allowing them to be interpreted together as a single coherent framework.',
  },
  {
    question: 'Which document has priority?',
    answer:
      'When individual documents appear to conflict, the Document Precedence policy defines the applicable order of priority. A specific written agreement signed with IQtronic always takes precedence over the general framework where it expressly states so.',
  },
  {
    question: 'How often are documents updated?',
    answer:
      'Documents are reviewed regularly and updated whenever legal, regulatory or product changes require it. Every document carries a version number and a last-updated date, and all changes are recorded in the Revision History.',
  },
  {
    question: 'Where can I obtain previous versions?',
    answer:
      'Superseded versions are archived. If you require a specific previous version — for example to match the terms in force at the time of a purchase — please contact us and our team will provide the relevant document.',
  },
  {
    question: 'Who should I contact regarding legal questions?',
    answer:
      'For any question regarding contracts, legal policies or compliance, please reach out through our contact page. Our team will direct your enquiry to the appropriate specialist.',
  },
]

export function LegalFaq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
              FAQ
            </div>
            <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Frequently asked questions.
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
