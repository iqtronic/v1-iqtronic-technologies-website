import Link from 'next/link'
import { SUPPORTED_PRODUCTS } from '@/components/licensing/data'

export function LicensingProducts() {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="max-w-2xl">
          <div className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
            Supported products
          </div>
          <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            One licensing model for three product families.
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            This licensing model applies only to IQsocket, IQgate and IQboard
            products. Other IQtronic products — for example ENVISTATION — use
            their own separate licensing model.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {SUPPORTED_PRODUCTS.map((product) => (
            <Link
              key={product.name}
              href={product.href}
              className="group flex flex-col rounded-sm border border-border bg-card p-8 transition-colors hover:border-accent"
            >
              <span className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
                Licensed product
              </span>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight">
                {product.name}
              </h3>
              <p className="mt-3 flex-1 text-pretty leading-relaxed text-muted-foreground">
                {product.tagline}
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground">
                View products
                <span
                  className="transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                >
                  →
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
