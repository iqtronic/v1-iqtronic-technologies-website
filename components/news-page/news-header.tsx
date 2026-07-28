'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

/**
 * Minimal header for the /facebook news page.
 * Keeps only the IQtronic logo (links to the homepage) and the language
 * switcher — no navigation, search, cart or contact actions.
 */
export function NewsHeader() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
        scrolled
          ? 'border-b border-border bg-background/90 backdrop-blur-md'
          : 'border-b border-transparent',
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-10">
        {/* Logo → homepage */}
        <a href="/" className="text-foreground" aria-label="IQtronic — home">
          <Image
            src="/images/iqtronic-logo.png"
            alt="IQtronic Technologies"
            width={281}
            height={87}
            priority
            className="h-12 w-auto"
          />
        </a>

        {/* Language switcher — multilingual page */}
        <div className="group relative">
          <button
            type="button"
            className="flex h-9 items-center gap-1 rounded-sm px-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            aria-label="Select language"
          >
            <GlobeGlyph className="size-5" />
            <span className="font-mono text-xs uppercase tracking-[0.12em]">
              EN
            </span>
            <span aria-hidden="true" className="text-[10px]">
              ▾
            </span>
          </button>
          <div className="pointer-events-none absolute right-0 top-full min-w-full pt-1 opacity-0 transition-opacity duration-150 group-hover:pointer-events-auto group-hover:opacity-100">
            <ul className="overflow-hidden rounded-sm border border-border bg-background shadow-lg">
              {['EN', 'DE', 'CZ'].map((lang) => (
                <li
                  key={lang}
                  className="px-3 py-1.5 text-center font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground"
                >
                  {lang}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

function GlobeGlyph({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a14 14 0 0 1 0 18a14 14 0 0 1 0-18" />
    </svg>
  )
}
