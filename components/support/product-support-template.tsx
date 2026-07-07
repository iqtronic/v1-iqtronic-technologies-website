import Image from 'next/image'
import Link from 'next/link'
import type { ProductSupport } from '@/lib/support'
import { SupportDocumentation } from './support-documentation'
import { SupportVideoTutorials } from './support-video-tutorials'
import { SupportKnowledgeBase } from './support-knowledge-base'
import { SupportDownloads } from './support-downloads'
import { SupportContact } from './support-contact'

/**
 * Reusable product support page. Every product family renders through this
 * single template — pass a `ProductSupport` data object and the hero, sections
 * and content are generated automatically. Adding a new product needs data
 * only, no layout changes.
 */
export function ProductSupportTemplate({
  product,
}: {
  product: ProductSupport
}) {
  return (
    <>
      {/* Hero: product photo + short description */}
      <section className="border-b border-border bg-background pt-16">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10 lg:py-20">
          <nav className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
            <Link href="/support" className="transition-colors hover:text-accent">
              Support
            </Link>
            <span className="px-2" aria-hidden="true">
              /
            </span>
            <span className="text-foreground">{product.name}</span>
          </nav>

          <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm border border-border bg-card">
              <Image
                src={product.image || '/placeholder.svg'}
                alt={product.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                Product Support
              </div>
              <h1 className="mt-5 text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
                {product.name}
              </h1>
              <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
                {product.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      <SupportDocumentation items={product.documentation} />
      <SupportVideoTutorials items={product.videos} />
      <SupportKnowledgeBase items={product.knowledgeBase} />
      <SupportDownloads items={product.downloads} />
      <SupportContact productName={product.name} />
    </>
  )
}
