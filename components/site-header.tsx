'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Logo } from '@/components/logo'
import { cn } from '@/lib/utils'

const NAV_LINKS = [
  { label: 'Products', href: '/products' },
  { label: 'Distributor', href: '/distributor' },
  { label: 'Who We Are', href: '/who-we-are' },
  { label: 'Downloads', href: '/downloads' },
  { label: 'Support', href: '/support' },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

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
        <Link href="/" className="text-foreground">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'text-sm transition-colors hover:text-foreground',
                isActive(link.href)
                  ? 'text-foreground'
                  : 'text-muted-foreground',
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-sm bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Contact us
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex size-10 items-center justify-center rounded-sm border border-border md:hidden"
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

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-6 py-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-border py-3 text-sm text-foreground last:border-0"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-4 py-3 text-sm font-medium text-primary-foreground"
            >
              Contact us
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
