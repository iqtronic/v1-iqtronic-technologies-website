import Link from 'next/link'
import {
  CATEGORIES,
  getFamiliesByCategory,
  getProduct,
  getProductsByCategory,
  getProductsByFamily,
} from '@/lib/products'
import { ProductCard } from '@/components/product-card'
import { LifecycleBadge } from '@/components/status-badges'

export function ProductsOverview() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-border bg-background pt-16">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
            Products
          </div>
          <h1 className="mt-5 max-w-3xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
            Industrial watchdogs, remote power control and monitoring
            hardware.
          </h1>
          <p className="mt-6 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
            IQtronic designs and manufactures IP watchdogs, remote power control
            sockets, industrial gateways, weather stations and battery
            monitoring systems — built for long product lifetimes and supported
            in-house for decades.
          </p>

          {/* Category quick-nav */}
          <nav
            aria-label="Product categories"
            className="mt-10 flex flex-wrap gap-2"
          >
            {CATEGORIES.map((category) => (
              <a
                key={category.id}
                href={`#${category.id}`}
                className="inline-flex items-center gap-2 rounded-sm border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
              >
                {category.name}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* Categories */}
      {CATEGORIES.map((category, index) => {
        const families = getFamiliesByCategory(category.id)
        const isPhaseOut = category.id === 'phase-out'
        return (
          <section
            key={category.id}
            id={category.id}
            className={
              index % 2 === 0
                ? 'scroll-mt-20 border-b border-border bg-card'
                : 'scroll-mt-20 border-b border-border bg-background'
            }
          >
            <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
              <div className="max-w-2xl">
                <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                  {category.name}
                </h2>
                <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                  {category.tagline}
                </p>
              </div>

              {isPhaseOut ? (
                <PhaseOutGrid categoryId={category.id} />
              ) : (
                <div className="mt-12 flex flex-col gap-16">
                  {families.map((family) => {
                    const products = getProductsByFamily(family.id)
                    if (products.length === 0) return null
                    // For single-family categories, skip the family header.
                    const showFamilyHeader = families.length > 1
                    return (
                      <div key={family.id}>
                        {showFamilyHeader ? (
                          <div className="mb-6 flex flex-col gap-2 border-l-2 border-accent pl-4">
                            <h3 className="text-xl font-medium tracking-tight">
                              {family.name}
                            </h3>
                            <p className="text-sm leading-relaxed text-muted-foreground">
                              {family.tagline}
                            </p>
                          </div>
                        ) : null}
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                          {products.map((product) => (
                            <ProductCard key={product.slug} product={product} />
                          ))}
                        </div>
                      </div>
                    )
                  })}
                </div>
              )}
            </div>
          </section>
        )
      })}
    </>
  )
}

function PhaseOutGrid({ categoryId }: { categoryId: 'phase-out' }) {
  const products = getProductsByCategory(categoryId)
  return (
    <div className="mt-12 overflow-hidden rounded-sm border border-border">
      <ul className="divide-y divide-border">
        {products.map((product) => (
          <li key={product.slug}>
            <Link
              href={`/products/${product.slug}`}
              className="group flex flex-col gap-4 bg-card p-6 transition-colors hover:bg-secondary sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex flex-col gap-2">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-lg font-medium tracking-tight">
                    {product.name}
                  </h3>
                  <LifecycleBadge lifecycle={product.lifecycle} />
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {product.tagline}
                </p>
              </div>
              <div className="flex flex-col gap-1 font-mono text-xs text-muted-foreground sm:items-end">
                <span>
                  Production:{' '}
                  {product.lifecycleDetail.productionStart}
                  {product.lifecycleDetail.productionEnd
                    ? `–${product.lifecycleDetail.productionEnd}`
                    : '+'}
                </span>
                {product.replacement ? (
                  <span className="text-accent">
                    Replacement →{' '}
                    {getProduct(product.replacement)?.name ??
                      product.replacement}
                  </span>
                ) : null}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
