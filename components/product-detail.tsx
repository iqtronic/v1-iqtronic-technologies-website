import Image from 'next/image'
import Link from 'next/link'
import {
  ECOSYSTEM_LABELS,
  getCategory,
  getFamily,
  getProduct,
  getProductEvolution,
  getRelatedProducts,
  type Product,
} from '@/lib/products'
import { ProductGallery } from '@/components/product-gallery'
import { ProductCard } from '@/components/product-card'
import { SocketVersions } from '@/components/socket-versions'
import { SocketTypeSelector } from '@/components/socket-type-selector'
import { ProductEvolution } from '@/components/product-evolution'
import {
  AvailabilityBadge,
  LifecycleBadge,
} from '@/components/status-badges'
import { cn } from '@/lib/utils'

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
      {children}
    </div>
  )
}

export function ProductDetail({ product }: { product: Product }) {
  const family = getFamily(product.family)
  const category = getCategory(product.category)
  const related = getRelatedProducts(product)
  const hasEvolution = getProductEvolution(product).length > 0
  const replacement = product.replacement
    ? getProduct(product.replacement)
    : undefined

  return (
    <>
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
                href={`/products#${product.category}`}
                className="hover:text-foreground"
              >
                {category?.name}
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-foreground">{product.name}</li>
          </ol>
        </div>
      </nav>

      {/* Product header */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10 lg:py-16">
          <div
            className={cn(
              'grid grid-cols-1 gap-12',
              hasEvolution
                ? 'lg:grid-cols-2 xl:grid-cols-12'
                : 'lg:grid-cols-2',
            )}
          >
            <div className={hasEvolution ? 'xl:col-span-5' : undefined}>
              <ProductGallery
                images={product.gallery}
                productName={product.name}
              />
            </div>

            <div
              className={cn(
                'flex flex-col',
                hasEvolution ? 'xl:col-span-4' : undefined,
              )}
            >
              {family ? (
                <div className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                  {family.name}
                </div>
              ) : null}
              <h1 className="mt-4 text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
                {product.name}
              </h1>
              <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
                {product.tagline}
              </p>

              {/* Lifecycle + availability */}
              <div className="mt-6 flex flex-wrap items-center gap-2">
                <LifecycleBadge lifecycle={product.lifecycle} />
                <AvailabilityBadge availability={product.availability} />
              </div>

              {/* Lifecycle detail */}
              {(() => {
                const items = [
                  product.lifecycleDetail.productionStart
                    ? {
                        label: 'Production started',
                        value: product.lifecycleDetail.productionStart,
                      }
                    : null,
                  product.lifecycleDetail.productionUntil
                    ? {
                        label: 'Planned until',
                        value: product.lifecycleDetail.productionUntil,
                      }
                    : null,
                  product.lifecycleDetail.productionEnd
                    ? {
                        label: 'Production ending',
                        value: product.lifecycleDetail.productionEnd,
                      }
                    : null,
                ].filter(Boolean) as { label: string; value: string }[]
                if (items.length === 0) return null
                return (
                  <dl
                    className="mt-6 grid gap-px overflow-hidden rounded-sm border border-border bg-border"
                    style={{
                      gridTemplateColumns: `repeat(${items.length}, minmax(0, 1fr))`,
                    }}
                  >
                    {items.map((item) => (
                      <div key={item.label} className="bg-card p-4">
                        <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                          {item.label}
                        </dt>
                        <dd className="mt-1 text-sm font-medium">
                          {item.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                )
              })()}

              {replacement ? (
                <p className="mt-4 text-sm text-muted-foreground">
                  Recommended replacement:{' '}
                  <Link
                    href={`/products/${replacement.slug}`}
                    className="font-medium text-accent hover:underline"
                  >
                    {replacement.name}
                  </Link>
                </p>
              ) : null}

              {/* Price */}
              {product.price ? (
                <div className="mt-6 flex items-baseline gap-2">
                  <span className="text-3xl font-semibold tracking-tight">
                    {product.price}
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">
                    excl. VAT
                  </span>
                </div>
              ) : null}

              {/* Socket type selector — IQsocket family only */}
              {product.family === 'iqsocket' ? <SocketTypeSelector /> : null}

              {/* CTAs */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-sm bg-accent px-6 py-3.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
                >
                  Request Quote
                  <span aria-hidden="true">→</span>
                </a>
                {product.licenseTiers ? (
                  <a
                    href="#licensing"
                    className="inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                  >
                    Get License
                  </a>
                ) : null}
                <a
                  href="#documents"
                  className="inline-flex items-center justify-center gap-2 rounded-sm border border-border bg-card px-6 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
                >
                  Download Datasheet
                </a>
              </div>
            </div>

            {hasEvolution ? (
              <div className="xl:col-span-3">
                <ProductEvolution product={product} />
              </div>
            ) : null}
          </div>
        </div>
      </section>

      {/* Ecosystem / compatibility (optional) */}
      {product.ecosystem && product.ecosystem.length > 0 ? (
        <section className="border-b border-border bg-card">
          <div className="mx-auto max-w-7xl px-6 py-10 lg:px-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-md">
                <SectionEyebrow>Product Ecosystem</SectionEyebrow>
                <h2 className="mt-3 text-xl font-medium tracking-tight">
                  Compatibility &amp; integration
                </h2>
                {product.iqcontrolPlatforms &&
                product.iqcontrolPlatforms.length > 0 ? (
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    IQControl app available for{' '}
                    {product.iqcontrolPlatforms.join(', ')}.
                  </p>
                ) : null}
              </div>
              <ul className="flex flex-wrap gap-2">
                {product.ecosystem.map((tag) => (
                  <li
                    key={tag}
                    className="inline-flex items-center gap-2 rounded-sm border border-border bg-background px-3 py-2 text-sm text-foreground"
                  >
                    <span
                      className="inline-block size-1.5 rounded-full bg-accent"
                      aria-hidden="true"
                    />
                    {ECOSYSTEM_LABELS[tag]}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ) : null}

      {/* Overview / SEO description */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionEyebrow>Overview</SectionEyebrow>
              <h2 className="mt-4 text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
                {product.name} — {product.tagline}
              </h2>
            </div>
            <div className="lg:col-span-8">
              <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
                {product.seoDescription}
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                {product.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Socket versions — IQsocket family only */}
      {product.family === 'iqsocket' ? <SocketVersions /> : null}

      {/* Recommended accessories */}
      {product.accessories.length > 0 ? (
        <section className="border-b border-border bg-background">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
            <div className="max-w-2xl">
              <SectionEyebrow>Recommended Accessories</SectionEyebrow>
              <h2 className="mt-4 text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
                Recommended accessories
              </h2>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {product.accessories.map((accessory) => (
                <article
                  key={accessory.name}
                  className="flex gap-4 rounded-sm border border-border bg-card p-4"
                >
                  <div className="relative size-20 shrink-0 overflow-hidden rounded-sm border border-border bg-secondary">
                    <Image
                      src={accessory.image || '/placeholder.svg'}
                      alt={accessory.name}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium tracking-tight">
                      {accessory.name}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {accessory.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* Licensing */}
      {product.licenseTiers && product.licenseTiers.length > 0 ? (
        <section
          id="licensing"
          className="scroll-mt-20 border-b border-border bg-card"
        >
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
            <div className="max-w-2xl">
              <SectionEyebrow>Licensing</SectionEyebrow>
              <h2 className="mt-4 text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
                License tiers &amp; feature unlocks
              </h2>
              {product.licenseOverview ? (
                <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                  {product.licenseOverview}
                </p>
              ) : null}
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
              {product.licenseTiers.map((tier) => (
                <div
                  key={tier.name}
                  className="flex flex-col rounded-sm border border-border bg-background p-6"
                >
                  <div className="flex items-baseline justify-between">
                    <h3 className="text-lg font-medium tracking-tight">
                      {tier.name}
                    </h3>
                    {tier.price ? (
                      <span className="font-mono text-sm text-accent">
                        {tier.price}
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {tier.description}
                  </p>
                  <ul className="mt-5 flex flex-1 flex-col gap-2 border-t border-border pt-5">
                    {tier.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span
                          className="mt-1.5 inline-block size-1 shrink-0 bg-accent"
                          aria-hidden="true"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <a
              href="/#contact"
              className="mt-8 inline-flex items-center gap-2 rounded-sm bg-accent px-6 py-3.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
            >
              Get License
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </section>
      ) : null}

      {/* Product family */}
      {related.length > 0 ? (
        <section className="border-b border-border bg-background">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div className="max-w-2xl">
                <SectionEyebrow>Product Family</SectionEyebrow>
                <h2 className="mt-4 text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
                  More from the {family?.name} family
                </h2>
              </div>
              <Link
                href={`/products#${product.category}`}
                className="inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent"
              >
                View all {family?.name}
                <span aria-hidden="true">→</span>
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <ProductCard key={item.slug} product={item} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* Applications */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
          <div className="max-w-2xl">
            <SectionEyebrow>Applications</SectionEyebrow>
            <h2 className="mt-4 text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
              Real-world use cases
            </h2>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {product.applications.map((application) => (
              <div key={application.title} className="flex flex-col bg-card p-6">
                <span
                  className="inline-block size-2 bg-accent"
                  aria-hidden="true"
                />
                <h3 className="mt-5 text-base font-medium tracking-tight">
                  {application.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {application.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical specifications */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionEyebrow>Technical Specifications</SectionEyebrow>
              <h2 className="mt-4 text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
                Specifications
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Full electrical and mechanical data is available in the
                datasheet.
              </p>
            </div>
            <div className="lg:col-span-8">
              <table className="w-full border-collapse overflow-hidden rounded-sm border border-border text-sm">
                <tbody>
                  {product.specs.map((spec, index) => (
                    <tr
                      key={spec.label}
                      className={index % 2 === 0 ? 'bg-background' : 'bg-card'}
                    >
                      <th
                        scope="row"
                        className="w-1/2 border-b border-border px-4 py-3 text-left font-mono text-xs uppercase tracking-[0.1em] text-muted-foreground"
                      >
                        {spec.label}
                      </th>
                      <td className="border-b border-l border-border px-4 py-3 font-medium text-foreground">
                        {spec.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Documents */}
      <section
        id="documents"
        className="scroll-mt-20 border-b border-border bg-card"
      >
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
          <div className="max-w-2xl">
            <SectionEyebrow>Documents</SectionEyebrow>
            <h2 className="mt-4 text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
              Documentation &amp; downloads
            </h2>
          </div>
          <ul className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {product.documents.map((document) => (
              <li key={document.title}>
                <a
                  href="#"
                  className="group flex items-center justify-between gap-4 bg-card p-5 transition-colors hover:bg-background"
                >
                  <div>
                    <div className="text-sm font-medium tracking-tight">
                      {document.title}
                    </div>
                    {document.meta ? (
                      <div className="mt-1 font-mono text-[11px] text-muted-foreground">
                        {document.meta}
                      </div>
                    ) : null}
                  </div>
                  <span className="flex shrink-0 items-center gap-2">
                    <span className="rounded-sm border border-border px-2 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                      {document.type}
                    </span>
                    <span
                      aria-hidden="true"
                      className="text-muted-foreground transition-transform group-hover:translate-y-0.5 group-hover:text-accent"
                    >
                      ↓
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Support */}
      <section className="bg-card">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
          <div className="max-w-2xl">
            <SectionEyebrow>Support</SectionEyebrow>
            <h2 className="mt-4 text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
              Support for {product.name}
            </h2>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: 'Open Support Ticket',
                body: 'Reach an engineer directly for help with this product.',
                href: '/support',
              },
              {
                title: 'Knowledge Base',
                body: 'Setup guides, configuration notes and how-tos.',
                href: '/support#faq',
              },
              {
                title: 'FAQ',
                body: 'Answers to the most common questions.',
                href: '/support#faq',
              },
              {
                title: 'Warranty Information',
                body: 'Coverage terms, RMA and service procedures.',
                href: '/support#warranty',
              },
            ].map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group flex flex-col bg-card p-6 transition-colors hover:bg-background"
              >
                <div className="flex items-baseline justify-between">
                  <h3 className="text-base font-medium tracking-tight">
                    {item.title}
                  </h3>
                  <span
                    aria-hidden="true"
                    className="text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-accent"
                  >
                    →
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
