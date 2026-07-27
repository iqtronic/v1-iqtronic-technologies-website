import Image from 'next/image'
import Link from 'next/link'
import type { NewsCardItem } from './data'

/**
 * The single, most prominent article shown directly under the video hero.
 * Desktop: image ~55% width, text ~45% width. Stacks on tablet/mobile.
 */
export function FeaturedNews({ item }: { item: NewsCardItem }) {
  return (
    <article className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center lg:gap-12">
      <Link
        href={item.articleUrl}
        className="group block overflow-hidden rounded-sm border border-border bg-card lg:col-span-7"
      >
        <div className="relative aspect-[16/10] w-full overflow-hidden">
          <Image
            src={item.imageUrl || '/placeholder.svg'}
            alt={item.title}
            fill
            sizes="(min-width: 1024px) 55vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
      </Link>

      <div className="flex flex-col justify-center lg:col-span-5">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[11px] uppercase tracking-[0.16em]">
          <span className="text-accent">{item.category}</span>
          <span aria-hidden="true" className="text-border">
            |
          </span>
          <span className="text-muted-foreground">{item.publicationDate}</span>
        </div>

        <h2 className="mt-4 text-balance text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl">
          <Link
            href={item.articleUrl}
            className="transition-colors hover:text-accent"
          >
            {item.title}
          </Link>
        </h2>

        <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
          {item.description}
        </p>

        <div className="mt-6">
          <Link
            href={item.articleUrl}
            className="inline-flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.14em] text-accent transition-all hover:gap-3"
          >
            Read more
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </article>
  )
}
