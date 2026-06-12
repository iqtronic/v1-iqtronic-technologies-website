'use client'

import { useState } from 'react'
import Image from 'next/image'
import type { GalleryImage } from '@/lib/products'
import { cn } from '@/lib/utils'

export function ProductGallery({
  images,
  productName,
}: {
  images: GalleryImage[]
  productName: string
}) {
  const [active, setActive] = useState(0)
  const current = images[active] ?? images[0]

  return (
    <div className="flex flex-col gap-4">
      <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-border bg-secondary">
        <Image
          src={current?.src || '/placeholder.svg'}
          alt={current?.alt || productName}
          fill
          priority
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
        {current?.caption ? (
          <span className="absolute left-3 top-3 rounded-sm bg-background/85 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-foreground backdrop-blur">
            {current.caption}
          </span>
        ) : null}
      </div>

      {images.length > 1 ? (
        <ul className="grid grid-cols-4 gap-3 sm:grid-cols-5">
          {images.map((image, index) => (
            <li key={image.src + index}>
              <button
                type="button"
                onClick={() => setActive(index)}
                aria-label={`View ${image.caption} image`}
                aria-current={index === active}
                className={cn(
                  'relative aspect-square w-full overflow-hidden rounded-sm border bg-secondary transition-colors',
                  index === active
                    ? 'border-accent'
                    : 'border-border hover:border-foreground/40',
                )}
              >
                <Image
                  src={image.src || '/placeholder.svg'}
                  alt={image.alt}
                  fill
                  sizes="120px"
                  className="object-cover"
                />
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  )
}
