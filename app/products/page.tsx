import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { PageHero } from '@/components/page-hero'
import { PRODUCTS } from '@/lib/products'

export const metadata: Metadata = {
  title: 'Products — IQtronic Technologies',
  description:
    'Industrial IoT hardware built to survive the field: GSM-controlled IQSocket power switching, calibrated weather stations and SCADA monitoring systems.',
}

export default function ProductsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Products"
          title="Hardware built to survive the field."
          description="Designed, manufactured and supported in-house. Every unit is tested in our own laboratories before it leaves the building."
          breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Products' }]}
        />

        <section className="border-b border-border bg-background">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {PRODUCTS.map((product) => (
                <article
                  key={product.slug}
                  className="group flex flex-col overflow-hidden rounded-sm border border-border bg-card transition-shadow hover:shadow-md"
                >
                  <div className="relative aspect-[4/3] overflow-hidden border-b border-border bg-secondary">
                    <Image
                      src={product.image || '/placeholder.svg'}
                      alt={`${product.name} — IQtronic industrial product`}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute left-3 top-3 rounded-sm bg-background/85 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-foreground backdrop-blur">
                      {product.category}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-lg font-medium tracking-tight">
                      {product.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {product.body}
                    </p>
                    <ul className="mt-5 flex flex-1 flex-col gap-2 border-t border-border pt-5">
                      {product.specs.map((spec) => (
                        <li
                          key={spec}
                          className="flex items-center gap-2 font-mono text-xs text-muted-foreground"
                        >
                          <span
                            className="inline-block size-1 bg-accent"
                            aria-hidden="true"
                          />
                          {spec}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={`/products/${product.slug}`}
                      className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent"
                    >
                      View product
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-card">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
            <div className="flex flex-col items-start justify-between gap-8 rounded-sm border border-border bg-background p-8 lg:flex-row lg:items-center lg:p-12">
              <div className="max-w-2xl">
                <div className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                  Custom hardware
                </div>
                <h2 className="mt-5 text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
                  Need something that isn&apos;t on the shelf?
                </h2>
                <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                  We design and manufacture bespoke industrial electronics — from
                  a single prototype to full series production, certified in our
                  own laboratories.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex shrink-0 items-center gap-2 rounded-sm bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                Discuss a project
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
