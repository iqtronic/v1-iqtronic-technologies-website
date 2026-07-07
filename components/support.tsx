import Image from 'next/image'
import Link from 'next/link'
import { SUPPORT_FAMILIES } from '@/lib/support'
import {
  DocumentationIcon,
  VideoIcon,
  ContactIcon,
} from '@/components/support/support-section'

/** Top-level quick links. Placeholder hrefs until each hub is built out. */
const QUICK_LINKS = [
  {
    title: 'Product Support',
    body: 'Documentation, firmware, tutorials and troubleshooting for every product family.',
    href: '#product-support',
    icon: <DocumentationIcon className="size-5" />,
  },
  {
    title: 'Video Tutorials',
    body: 'Step-by-step videos for installation, activation and configuration.',
    href: '#',
    icon: <VideoIcon className="size-5" />,
  },
  {
    title: 'Licensing',
    body: 'Activate, upgrade and manage the licenses tied to your organisation.',
    href: '#',
    icon: <KeyIcon className="size-5" />,
  },
  {
    title: 'Contact Support',
    body: 'Reach an engineer directly and open a support ticket.',
    href: '/contact',
    icon: <ContactIcon className="size-5" />,
  },
]

export function Support() {
  return (
    <>
      {/* Hero / intro */}
      <section className="border-b border-border bg-background pt-16">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
            Support
          </div>
          <h1 className="mt-5 max-w-3xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
            Support for every IQtronic product.
          </h1>
          <p className="mt-6 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            Choose your product to find documentation, firmware, video tutorials,
            a knowledge base and downloads — all in one place, backed by the same
            engineers who designed your hardware.
          </p>

          {/* Four primary tiles */}
          <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {QUICK_LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="group flex flex-col bg-card p-8 transition-colors hover:bg-background"
              >
                <span className="flex size-10 items-center justify-center rounded-sm border border-border bg-background text-accent">
                  {link.icon}
                </span>
                <div className="mt-6 flex items-baseline justify-between">
                  <h2 className="text-lg font-medium tracking-tight">
                    {link.title}
                  </h2>
                  <span
                    className="text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-accent"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {link.body}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Product Support — main section */}
      <section id="product-support" className="bg-card">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="max-w-2xl">
            <div className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
              Product Support
            </div>
            <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Select your product family.
            </h2>
            <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
              Each product family has a dedicated support page with everything you
              need — documentation, video tutorials, knowledge base, downloads and
              direct contact.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SUPPORT_FAMILIES.map((family) => (
              <Link
                key={family.id}
                href={`/support/${family.id}`}
                className="group flex flex-col overflow-hidden rounded-sm border border-border bg-background transition-colors hover:border-accent"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-card">
                  <Image
                    src={family.image || '/placeholder.svg'}
                    alt={family.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="text-lg font-semibold tracking-tight">
                      {family.name}
                    </h3>
                    <span
                      className="text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-accent"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {family.tagline}
                  </p>
                  <span className="mt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-accent">
                    View support
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

function KeyIcon({ className }: { className?: string }) {
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
      <circle cx="7.5" cy="15.5" r="4.5" />
      <path d="m10.7 12.3 8.3-8.3" />
      <path d="m16 5 3 3" />
      <path d="m13 8 3 3" />
    </svg>
  )
}
