'use client'

import { useId, useState } from 'react'
import Link from 'next/link'
import {
  CATEGORIES,
  getFamiliesByCategory,
  getProductsByCategory,
  getProductsByFamily,
  getSubcategoriesByCategory,
} from '@/lib/products'
import { cn } from '@/lib/utils'

/** Category heading link shared by the mega menu columns. */
function CategoryHeading({
  category,
  onNavigate,
}: {
  category: (typeof CATEGORIES)[number]
  onNavigate?: () => void
}) {
  return (
    <Link
      href={`/products#${category.id}`}
      onClick={onNavigate}
      className="group/cat flex items-baseline justify-between border-b border-border pb-2"
    >
      <span className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
        {category.name}
      </span>
      <span
        aria-hidden="true"
        className="text-xs text-muted-foreground transition-transform group-hover/cat:translate-x-0.5"
      >
        →
      </span>
    </Link>
  )
}

/** Desktop mega menu panel. Rendered inside the Products nav item wrapper. */
export function ProductsMegaPanel({ onNavigate }: { onNavigate?: () => void }) {
  const controllers = CATEGORIES.find((c) => c.id === 'iqcontrollers')
  const secondary = CATEGORIES.filter((c) => c.id !== 'iqcontrollers')

  return (
    <div className="grid grid-cols-1 gap-8 p-8 lg:grid-cols-2">
      {/* IQtronic Controllers — wide column with its three families */}
      {controllers ? (
        <div>
          <CategoryHeading category={controllers} onNavigate={onNavigate} />
          <div className="mt-4 grid grid-cols-3 gap-6">
            {getFamiliesByCategory(controllers.id).map((family) => {
              const familyProducts = getProductsByFamily(family.id)
              // Skip families with no listable products (e.g. the accessories
              // family, whose items are shown via subcategories below).
              if (familyProducts.length === 0) return null
              return (
                <div key={family.id}>
                  <div className="text-sm font-medium tracking-tight text-foreground">
                    {family.name}
                  </div>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    {family.tagline}
                  </p>
                  <ul className="mt-3 flex flex-col gap-1.5">
                    {familyProducts.map((product) => (
                      <li key={product.slug}>
                        <Link
                          href={`/products/${product.slug}`}
                          onClick={onNavigate}
                          className="text-sm text-muted-foreground transition-colors hover:text-accent"
                        >
                          {product.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}

            {/* Accessories — rendered as subcategory links, not products */}
            {getSubcategoriesByCategory(controllers.id).length > 0 ? (
              <div>
                <div className="text-sm font-medium tracking-tight text-foreground">
                  Accessories
                </div>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  Antennas, sensors and add-ons.
                </p>
                <ul className="mt-3 flex flex-col gap-1.5">
                  {getSubcategoriesByCategory(controllers.id).map((sub) => (
                    <li key={sub.id}>
                      <Link
                        href={`/products/accessories/${sub.id}`}
                        onClick={onNavigate}
                        className="text-sm text-muted-foreground transition-colors hover:text-accent"
                      >
                        {sub.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      ) : null}

      {/* Remaining product families in a balanced 2×2 grid */}
      <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        {secondary.map((category) => (
          <div key={category.id}>
            <CategoryHeading category={category} onNavigate={onNavigate} />
            <div className="mt-4">
              <p className="text-xs leading-relaxed text-muted-foreground">
                {category.tagline}
              </p>
              <ul className="mt-3 flex flex-col gap-1.5">
                {/* Legacy / phase-out products are not listed here; they are
                    shown only on the category page after clicking through. */}
                {category.id !== 'phase-out'
                  ? getProductsByCategory(category.id).map((product) => (
                      <li key={product.slug}>
                        <Link
                          href={`/products/${product.slug}`}
                          onClick={onNavigate}
                          className="text-sm text-muted-foreground transition-colors hover:text-accent"
                        >
                          {product.name}
                        </Link>
                      </li>
                    ))
                  : null}
                {/* Accessories — single link only (products shown on its page) */}
                {getSubcategoriesByCategory(category.id).map((sub) => (
                  <li key={sub.id}>
                    <Link
                      href={`/products/accessories/${sub.id}`}
                      onClick={onNavigate}
                      className="text-sm font-medium text-foreground transition-colors hover:text-accent"
                    >
                      Accessories
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

/** Mobile expandable Products section. */
export function ProductsMegaMobile({ onNavigate }: { onNavigate?: () => void }) {
  const [open, setOpen] = useState(false)
  const panelId = useId()

  return (
    <div className="border-b border-border">
      <div className="flex items-center">
        <Link
          href="/products"
          onClick={onNavigate}
          className="flex-1 py-3 text-sm text-foreground"
        >
          Products
        </Link>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={panelId}
          className="flex size-9 items-center justify-center text-muted-foreground"
          aria-label="Toggle product categories"
        >
          <span
            className={cn(
              'block transition-transform',
              open && 'rotate-180',
            )}
            aria-hidden="true"
          >
            ▾
          </span>
        </button>
      </div>

      {open ? (
        <div id={panelId} className="pb-4 pl-3">
          {CATEGORIES.map((category) => (
            <div key={category.id} className="py-2">
              <Link
                href={`/products#${category.id}`}
                onClick={onNavigate}
                className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent"
              >
                {category.name}
              </Link>
              <ul className="mt-2 flex flex-col gap-1.5">
                {category.id !== 'phase-out'
                  ? getFamiliesByCategory(category.id).map((family) =>
                      getProductsByFamily(family.id).map((product) => (
                        <li key={product.slug}>
                          <Link
                            href={`/products/${product.slug}`}
                            onClick={onNavigate}
                            className="text-sm text-muted-foreground"
                          >
                            {product.name}
                          </Link>
                        </li>
                      )),
                    )
                  : null}
                {getSubcategoriesByCategory(category.id).map((sub) => (
                  <li key={sub.id}>
                    <Link
                      href={`/products/accessories/${sub.id}`}
                      onClick={onNavigate}
                      className="text-sm text-muted-foreground"
                    >
                      {sub.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  )
}
