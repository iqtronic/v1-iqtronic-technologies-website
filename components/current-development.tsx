import Link from 'next/link'
import { NEWS_ITEMS } from '@/lib/news'

export function CurrentDevelopment() {
  const highlights = NEWS_ITEMS.slice(0, 2)

  return (
    <section
      aria-labelledby="current-development-title"
      className="border-b border-border bg-card"
    >
      <div className="mx-auto max-w-7xl px-6 py-3 lg:px-10">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-8">
          <h2
            id="current-development-title"
            className="shrink-0 font-mono text-xs uppercase tracking-[0.18em] text-accent"
          >
            Current Development
          </h2>

          <ul className="grid flex-1 grid-cols-1 gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2">
            {highlights.map((item) => (
              <li key={item.title} className="bg-card">
                <Link
                  href="/news"
                  className="group flex h-full flex-col gap-0.5 px-4 py-2.5 transition-colors hover:bg-background"
                >
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                    {item.category}
                  </span>
                  <span className="text-sm font-medium tracking-tight text-foreground">
                    {item.title}
                  </span>
                  <span className="line-clamp-1 text-xs leading-snug text-muted-foreground">
                    {item.text}
                  </span>
                  <span className="mt-0.5 inline-flex items-center gap-1 text-xs font-medium text-accent">
                    Read more
                    <span
                      aria-hidden="true"
                      className="transition-transform group-hover:translate-x-0.5"
                    >
                      →
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
