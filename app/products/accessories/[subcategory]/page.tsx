import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ProductCard } from '@/components/product-card'
import {
  SUBCATEGORIES,
  getCategory,
  getSubcategory,
  getProductsBySubcategory,
  type SubcategoryId,
} from '@/lib/products'

export function generateStaticParams() {
  return SUBCATEGORIES.map((s) => ({ subcategory: s.id }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ subcategory: string }>
}): Promise<Metadata> {
  const { subcategory } = await params
  const sub = getSubcategory(subcategory as SubcategoryId)
  if (!sub) {
    return { title: 'Accessories not found — IQtronic' }
  }
  const category = getCategory(sub.category)
  return {
    title: `${sub.name} — ${category?.name} Accessories | IQtronic`,
    description: sub.tagline,
    alternates: { canonical: `/products/accessories/${sub.id}` },
    openGraph: {
      title: `${sub.name} — IQtronic`,
      description: sub.tagline,
      images: sub.image ? [{ url: sub.image }] : undefined,
      type: 'website',
    },
  }
}

export default async function SubcategoryPage({
  params,
}: {
  params: Promise<{ subcategory: string }>
}) {
  const { subcategory } = await params
  const sub = getSubcategory(subcategory as SubcategoryId)
  if (!sub) notFound()

  const category = getCategory(sub.category)
  const products = getProductsBySubcategory(sub.id)

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
              <li>
                <Link
                  href={`/products#${sub.category}`}
                  className="hover:text-foreground"
                >
                  {category?.name}
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-foreground">{sub.name}</li>
            </ol>
          </div>
        </nav>

        {/* Header */}
        <section className="border-b border-border bg-background">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
            <div className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
              {category?.name} · Accessories
            </div>
            <h1 className="mt-5 max-w-3xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
              {sub.name}
            </h1>
            <p className="mt-6 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
              {sub.tagline}
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
                Products in this category are coming soon. Please{' '}
                <Link
                  href="/#contact"
                  className="font-medium text-accent hover:underline"
                >
                  contact us
                </Link>{' '}
                for current availability.
              </p>
            )}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
