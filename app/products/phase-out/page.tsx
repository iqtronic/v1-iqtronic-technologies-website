import type { Metadata } from 'next'
import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ProductCard } from '@/components/product-card'
import { getCategory, getProductsByCategory } from '@/lib/products'

const category = getCategory('phase-out')

export const metadata: Metadata = {
  title: `${category?.name ?? 'Legacy / Phase-out Products'} | IQtronic`,
  description: category?.tagline,
  alternates: { canonical: '/products/phase-out' },
  openGraph: {
    title: `${category?.name ?? 'Legacy / Phase-out Products'} — IQtronic`,
    description: category?.tagline,
    type: 'website',
  },
}

export default function PhaseOutPage() {
  const products = getProductsByCategory('phase-out')

  return (
    <>
      <SiteHeader />
      <main>
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="border-b border-border bg-background pt-16"
        >
          <div className="mx-auto max-w-7xl px-6 py-4 lg:px-10">
            <ol className="flex flex-wrap items-center gap-2 font-mono text-xs text-muted-foreground">
              <li>
                <Link href="/products" className="hover:text-foreground">
                  Products
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-foreground">{category?.name}</li>
            </ol>
          </div>
        </nav>

        {/* Header */}
        <section className="border-b border-border bg-background">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
            <div className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
              Legacy
            </div>
            <h1 className="mt-5 max-w-3xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
              {category?.name}
            </h1>
            <p className="mt-6 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
              {category?.tagline}
            </p>
          </div>
        </section>

        {/* Products */}
        <section className="border-b border-border bg-card">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
            {products.length > 0 ? (
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {products.map((product) => (
                  <ProductCard key={product.slug} product={product} />
                ))}
              </div>
            ) : (
              <p className="text-pretty leading-relaxed text-muted-foreground">
                No legacy products to show at the moment.
              </p>
            )}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
