'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { Logo } from '@/components/logo'
import { cn } from '@/lib/utils'
import {
  ProductsMegaPanel,
  ProductsMegaMobile,
} from '@/components/products-mega-menu'
import { SearchOverlay } from '@/components/search-overlay'

const NAV_LINKS = [
  { label: 'Development', href: '/#engineering' },
  { label: 'Enclosures', href: '/#enclosures' },
  { label: 'Who We Are', href: '/who-we-are' },
  { label: 'Where to Buy', href: '/distributor' },
  { label: 'Support', href: '/support' },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [megaOpen, setMegaOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const openMega = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setMegaOpen(true)
  }
  const scheduleCloseMega = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    closeTimer.current = setTimeout(() => setMegaOpen(false), 120)
  }

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
        scrolled || megaOpen
          ? 'border-b border-border bg-background/90 backdrop-blur-md'
          : 'border-b border-transparent',
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-10">
        <a href="/#top" className="text-foreground">
          <Logo />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {/* Products with mega menu */}
          <div
            className="static"
            onMouseEnter={openMega}
            onMouseLeave={scheduleCloseMega}
          >
            <Link
              href="/products"
              className="flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
              aria-expanded={megaOpen}
              aria-haspopup="true"
              onFocus={openMega}
            >
              Products
              <span
                aria-hidden="true"
                className={cn(
                  'text-[10px] transition-transform',
                  megaOpen && 'rotate-180',
                )}
              >
                ▾
              </span>
            </Link>
          </div>

          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            onClick={() => setSearchOpen(true)}
            className="flex size-9 items-center justify-center rounded-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            aria-label="Open search"
          >
            <SearchGlyph className="size-5" />
          </button>

          {/* Language selector — visual placeholder for future implementation */}
          <div className="group relative">
            <button
              type="button"
              className="flex h-9 items-center gap-1 rounded-sm px-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              aria-label="Select language (placeholder)"
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

          {/* Shopping cart — visual placeholder for future webshop */}
          <button
            type="button"
            className="flex size-9 items-center justify-center rounded-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            aria-label="Shopping cart (placeholder)"
          >
            <CartGlyph className="size-5" />
          </button>

          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-sm bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Contact us
            <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={() => setSearchOpen(true)}
            className="flex size-10 items-center justify-center rounded-sm border border-border"
            aria-label="Open search"
          >
            <SearchGlyph className="size-5" />
          </button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex size-10 items-center justify-center rounded-sm border border-border"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
          >
            <span className="flex flex-col gap-1.5">
              <span
                className={cn(
                  'block h-0.5 w-5 bg-foreground transition-transform',
                  open && 'translate-y-2 rotate-45',
                )}
              />
              <span
                className={cn(
                  'block h-0.5 w-5 bg-foreground transition-opacity',
                  open && 'opacity-0',
                )}
              />
              <span
                className={cn(
                  'block h-0.5 w-5 bg-foreground transition-transform',
                  open && '-translate-y-2 -rotate-45',
                )}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Desktop mega menu panel */}
      <div
        className={cn(
          'absolute inset-x-0 top-16 hidden md:block',
          megaOpen ? 'pointer-events-auto' : 'pointer-events-none',
        )}
        onMouseEnter={openMega}
        onMouseLeave={scheduleCloseMega}
      >
        <div
          className={cn(
            'mx-auto max-w-7xl px-6 transition-all duration-150 lg:px-10',
            megaOpen
              ? 'translate-y-0 opacity-100'
              : '-translate-y-2 opacity-0',
          )}
        >
          <div className="overflow-hidden rounded-sm border border-border bg-background shadow-lg">
            <ProductsMegaPanel onNavigate={() => setMegaOpen(false)} />
          </div>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-6 py-4">
            <ProductsMegaMobile onNavigate={() => setOpen(false)} />
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-border py-3 text-sm text-foreground last:border-0"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-4 py-3 text-sm font-medium text-primary-foreground"
            >
              Contact us
            </a>
          </nav>
        </div>
      )}

      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  )
}

function SearchGlyph({ className }: { className?: string }) {
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
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.3-4.3" />
    </svg>
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

function CartGlyph({ className }: { className?: string }) {
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
      <circle cx="9" cy="20" r="1.4" />
      <circle cx="18" cy="20" r="1.4" />
      <path d="M2 3h2.5l2.2 12.2a1.5 1.5 0 0 0 1.5 1.3h8.4a1.5 1.5 0 0 0 1.5-1.2L21 7H6" />
    </svg>
  )
}
