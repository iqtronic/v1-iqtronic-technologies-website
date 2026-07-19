import Image from 'next/image'
import Link from 'next/link'
import {
  CATEGORIES,
  type CategoryId,
  getFamiliesByCategory,
  getProduct,
  getProductsByCategory,
  getProductsByFamily,
  getProductsBySubcategory,
  getSubcategoriesByCategory,
  type Subcategory,
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
            sockets, industrial gateways, ENVISTATION weather systems, battery
            monitoring systems and SENSORAGE sensor and data-logging systems —
            built for long product lifetimes and supported in-house for decades.
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
        const subcategories = getSubcategoriesByCategory(category.id)
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

                  {/* Accessories — shown as subcategory cards linking to their pages */}
                  {subcategories.length > 0 ? (
                    <div>
                      <div className="mb-6 flex flex-col gap-2 border-l-2 border-accent pl-4">
                        <h3 className="text-xl font-medium tracking-tight">
                          Accessories
                        </h3>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                          Antennas, sensors, mounting and add-ons for{' '}
                          {category.name}.
                        </p>
                      </div>
                      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {subcategories.map((sub) => (
                          <SubcategoryCard key={sub.id} subcategory={sub} />
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>
              )}
            </div>
          </section>
        )
      })}
    </>
  )
}

function SubcategoryCard({ subcategory }: { subcategory: Subcategory }) {
  const count = getProductsBySubcategory(subcategory.id).length
  return (
    <article className="group flex flex-col overflow-hidden rounded-sm border border-border bg-card transition-shadow hover:shadow-md">
      <Link
        href={`/products/accessories/${subcategory.id}`}
        className="flex flex-1 flex-col"
        aria-label={`${subcategory.name} accessories`}
      >
        <div className="relative aspect-[4/3] overflow-hidden border-b border-border bg-secondary">
          <Image
            src={subcategory.image || '/placeholder.svg'}
            alt={subcategory.name}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="flex flex-1 flex-col p-6">
          <h3 className="text-lg font-medium tracking-tight">
            {subcategory.name}
          </h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
            {subcategory.tagline}
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-border pt-5">
            <span className="font-mono text-xs text-muted-foreground">
              {count} {count === 1 ? 'product' : 'products'}
            </span>
            <span className="ml-auto inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors group-hover:text-accent">
              View
              <span
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-0.5"
              >
                →
              </span>
            </span>
          </div>
        </div>
      </Link>
    </article>
  )
}

function PhaseOutGrid({ categoryId }: { categoryId: CategoryId }) {
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
