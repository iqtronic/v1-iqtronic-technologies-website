'use client'

import { useId, useState } from 'react'
import Link from 'next/link'
import {
  CATEGORIES,
  getFamiliesByCategory,
  getProductsByCategory,
  getProductsByFamily,
} from '@/lib/products'
import { cn } from '@/lib/utils'

/** Desktop mega menu panel. Rendered inside the Products nav item wrapper. */
export function ProductsMegaPanel({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <div className="grid grid-cols-12 gap-8 p-8">
      {CATEGORIES.map((category) => {
        const families = getFamiliesByCategory(category.id)
        const isControllers = category.id === 'iqcontrollers'
        return (
          <div
            key={category.id}
            className={isControllers ? 'col-span-6' : 'col-span-2'}
          >
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

            {isControllers ? (
              <div className="mt-4 grid grid-cols-3 gap-6">
                {families.map((family) => (
                  <div key={family.id}>
                    <div className="text-sm font-medium tracking-tight text-foreground">
                      {family.name}
                    </div>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                      {family.tagline}
                    </p>
                    <ul className="mt-3 flex flex-col gap-1.5">
                      {getProductsByFamily(family.id).map((product) => (
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
                ))}
              </div>
            ) : (
              <div className="mt-4">
                <p className="text-xs leading-relaxed text-muted-foreground">
                  {category.tagline}
                </p>
                <ul className="mt-3 flex flex-col gap-1.5">
                  {getProductsByCategory(category.id).map((product) => (
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
            )}
          </div>
        )
      })}
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
                {getFamiliesByCategory(category.id).map((family) =>
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
                )}
              </ul>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  )
}
