import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ProductDetail } from '@/components/product-detail'
import { PRODUCTS, getProduct, LIFECYCLE_LABELS } from '@/lib/products'

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
  if (!product) {
    return { title: 'Product not found — IQtronic' }
  }
  return {
    title: `${product.name} — ${product.tagline} | IQtronic`,
    description: product.seoDescription,
    keywords: product.keywords,
    alternates: { canonical: `/products/${product.slug}` },
    openGraph: {
      title: `${product.name} — IQtronic`,
      description: product.seoDescription,
      images: [{ url: product.image }],
      type: 'website',
    },
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

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.seoDescription,
    image: product.image,
    brand: { '@type': 'Brand', name: 'IQtronic' },
    category: product.category,
    productionDate: product.lifecycleDetail.productionStart,
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'Lifecycle status',
        value: LIFECYCLE_LABELS[product.lifecycle],
      },
    ],
    ...(product.price
      ? {
          offers: {
            '@type': 'Offer',
            price: product.price.replace(/[^0-9.]/g, ''),
            priceCurrency: 'EUR',
            availability:
              product.availability === 'in-stock'
                ? 'https://schema.org/InStock'
                : 'https://schema.org/PreOrder',
          },
        }
      : {}),
  }

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />
      <main>
        <ProductDetail product={product} />
      </main>
      <SiteFooter />
    </>
  )
}
