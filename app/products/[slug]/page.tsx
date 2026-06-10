import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { PageHero } from '@/components/page-hero'
import { PRODUCTS, getProduct } from '@/lib/products'

export function generateStaticParams() {
  return PRODUCTS.map((product) => ({ slug: product.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const product = getProduct(slug)
  if (!product) return { title: 'Product — IQtronic Technologies' }
  return {
    title: `${product.name} — IQtronic Technologies`,
    description: product.body,
  }
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const product = getProduct(slug)
  if (!product) notFound()

  const related = PRODUCTS.filter((p) => p.slug !== product.slug)

  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow={product.category}
          title={product.name}
          description={product.tagline}
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Products', href: '/products' },
            { label: product.name },
          ]}
        />

        {/* Overview: image + intro */}
        <section className="border-b border-border bg-background">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
              <div className="lg:col-span-6">
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-border bg-secondary">
                  <Image
                    src={product.image || '/placeholder.svg'}
                    alt={`${product.name} — IQtronic industrial product`}
                    fill
                    priority
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute left-4 top-4 flex items-center gap-2 rounded-sm border border-border bg-background/90 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-foreground backdrop-blur">
                    <span className="inline-block size-1.5 bg-accent" aria-hidden="true" />
                    Designed & manufactured in Europe
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center lg:col-span-6">
                <div className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                  Overview
                </div>
                <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                  {product.tagline}
                </h2>
                <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
                  {product.body}
                </p>
                <ul className="mt-8 flex flex-col gap-3 border-t border-border pt-8">
                  {product.specs.map((spec) => (
                    <li
                      key={spec}
                      className="flex items-center gap-2 text-sm text-foreground"
                    >
                      <span
                        className="inline-block size-1.5 bg-accent"
                        aria-hidden="true"
                      />
                      {spec}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-sm bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                  >
                    Request datasheet
                    <span aria-hidden="true">→</span>
                  </Link>
                  <Link
                    href="/downloads"
                    className="inline-flex items-center gap-2 rounded-sm border border-border px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
                  >
                    Download center
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Highlights */}
        <section className="border-b border-border bg-card">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
            <div className="max-w-2xl">
              <div className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                Key features
              </div>
              <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                Engineered for the field.
              </h2>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-3">
              {product.highlights.map((item, i) => (
                <div key={item.title} className="flex flex-col bg-card p-8">
                  <span className="font-mono text-sm text-accent">
                    {`0${i + 1}`}
                  </span>
                  <h3 className="mt-6 text-lg font-medium tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical specs + applications */}
        <section className="border-b border-border bg-background">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
              <div className="lg:col-span-7">
                <div className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                  Technical specification
                </div>
                <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                  The details.
                </h2>
                <dl className="mt-10 overflow-hidden rounded-sm border border-border">
                  {product.technical.map((row, i) => (
                    <div
                      key={row.label}
                      className={`flex flex-col gap-1 px-5 py-4 sm:flex-row sm:items-center sm:justify-between ${
                        i % 2 === 1 ? 'bg-card' : 'bg-background'
                      } ${i > 0 ? 'border-t border-border' : ''}`}
                    >
                      <dt className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
                        {row.label}
                      </dt>
                      <dd className="text-sm font-medium text-foreground sm:text-right">
                        {row.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="lg:col-span-5">
                <div className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                  Applications
                </div>
                <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                  Where it works.
                </h2>
                <ul className="mt-10 flex flex-col">
                  {product.applications.map((app) => (
                    <li
                      key={app}
                      className="flex items-center gap-3 border-t border-border py-4 first:border-t-0 text-sm text-foreground"
                    >
                      <span
                        className="inline-block size-1.5 bg-accent"
                        aria-hidden="true"
                      />
                      {app}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Related products */}
        <section className="bg-card">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <div className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                  More products
                </div>
                <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                  Explore the range.
                </h2>
              </div>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent"
              >
                All products
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/products/${item.slug}`}
                  className="group flex flex-col overflow-hidden rounded-sm border border-border bg-background transition-shadow hover:shadow-md sm:flex-row"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-border bg-secondary sm:w-44 sm:border-b-0 sm:border-r">
                    <Image
                      src={item.image || '/placeholder.svg'}
                      alt={`${item.name} — IQtronic industrial product`}
                      fill
                      sizes="(min-width: 640px) 11rem, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-center p-6">
                    <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                      {item.category}
                    </span>
                    <h3 className="mt-2 text-lg font-medium tracking-tight">
                      {item.name}
                    </h3>
                    <span className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors group-hover:text-accent">
                      View product
                      <span aria-hidden="true">→</span>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
