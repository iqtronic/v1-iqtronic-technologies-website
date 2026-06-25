import Image from 'next/image'
import Link from 'next/link'
import type { Product } from '@/lib/products'
import { AvailabilityBadge, LifecycleBadge } from '@/components/status-badges'

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-sm border border-border bg-card transition-shadow hover:shadow-md">
      <Link
        href={`/products/${product.slug}`}
        className="flex flex-1 flex-col"
        aria-label={`${product.name} product details`}
      >
        <div className="relative aspect-[4/3] overflow-hidden border-b border-border bg-secondary">
          <Image
            src={product.image || '/placeholder.svg'}
            alt={product.imageAlt ?? `${product.name} — ${product.tagline}`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <span className="absolute left-3 top-3">
            <LifecycleBadge lifecycle={product.lifecycle} />
          </span>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-lg font-medium tracking-tight">
              {product.name}
            </h3>
            {product.price ? (
              <span className="shrink-0 font-mono text-sm text-foreground">
                {product.price}
                <span className="ml-1 text-[10px] text-muted-foreground">
                  excl. VAT
                </span>
              </span>
            ) : null}
          </div>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
            {product.tagline}
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-border pt-5">
            <AvailabilityBadge availability={product.availability} />
            <span className="ml-auto inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors group-hover:text-accent">
              Details
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
