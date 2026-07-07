'use client'

import { useId, useState } from 'react'
import { cn } from '@/lib/utils'

export interface AccordionItem {
  question: string
  answer: string
}

/**
 * Reusable, self-contained accordion. Each item expands independently. Used by
 * the Knowledge Base section but generic enough for reuse elsewhere.
 */
export function SupportAccordion({ items }: { items: AccordionItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const baseId = useId()

  return (
    <div className="overflow-hidden rounded-sm border border-border">
      {items.map((item, index) => {
        const isOpen = openIndex === index
        const panelId = `${baseId}-panel-${index}`
        const buttonId = `${baseId}-button-${index}`
        return (
          <div
            key={item.question}
            className="border-b border-border last:border-0"
          >
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-4 bg-card px-6 py-5 text-left transition-colors hover:bg-background"
              >
                <span className="text-base font-medium tracking-tight text-foreground">
                  {item.question}
                </span>
                <span
                  aria-hidden="true"
                  className={cn(
                    'shrink-0 text-muted-foreground transition-transform duration-200',
                    isOpen && 'rotate-45 text-accent',
                  )}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    className="size-5"
                  >
                    <path d="M12 5v14" />
                    <path d="M5 12h14" />
                  </svg>
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="bg-background px-6 pb-6 pt-1"
            >
              <p className="text-pretty leading-relaxed text-muted-foreground">
                {item.answer}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
