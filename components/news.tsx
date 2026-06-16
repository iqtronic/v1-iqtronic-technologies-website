import { NEWS_ITEMS } from '@/lib/news'

export function News() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-5xl px-6 pb-20 pt-16 lg:px-10 lg:pb-28 lg:pt-20">
        <header className="max-w-2xl">
          <div className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
            News &amp; Development
          </div>
          <h1 className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            News &amp; Development
          </h1>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Latest product development updates, engineering notes and company
            milestones.
          </p>
        </header>

        <ol className="mt-12 overflow-hidden rounded-sm border border-border">
          {NEWS_ITEMS.map((item, i) => (
            <li
              key={item.title}
              className={
                i > 0 ? 'border-t border-border bg-card' : 'bg-card'
              }
            >
              <article className="flex flex-col gap-3 p-6 lg:flex-row lg:gap-10 lg:p-8">
                <div className="flex shrink-0 items-center gap-3 lg:w-44 lg:flex-col lg:items-start lg:gap-2">
                  <span className="font-mono text-sm font-medium text-foreground">
                    {item.date}
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
                    {item.category}
                  </span>
                </div>
                <div className="lg:flex-1">
                  <h2 className="text-balance text-xl font-medium tracking-tight">
                    {item.title}
                  </h2>
                  <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">
                    {item.text}
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
