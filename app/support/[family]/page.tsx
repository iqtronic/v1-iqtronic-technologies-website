import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ProductSupportTemplate } from '@/components/support/product-support-template'
import { SUPPORT_FAMILIES, getSupportFamily } from '@/lib/support'

export function generateStaticParams() {
  return SUPPORT_FAMILIES.map((family) => ({ family: family.id }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ family: string }>
}): Promise<Metadata> {
  const { family } = await params
  const product = getSupportFamily(family)
  if (!product) {
    return { title: 'Support — IQtronic Technologies' }
  }
  return {
    title: `${product.name} Support — IQtronic Technologies`,
    description: product.description,
  }
}

export default async function ProductSupportPage({
  params,
}: {
  params: Promise<{ family: string }>
}) {
  const { family } = await params
  const product = getSupportFamily(family)
  if (!product) {
    notFound()
  }

  return (
    <>
      <SiteHeader />
      <main>
        <ProductSupportTemplate product={product} />
      </main>
      <SiteFooter />
    </>
  )
}
