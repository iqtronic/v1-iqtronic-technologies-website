import Image from 'next/image'

const CAPABILITIES = [
  {
    code: 'M-01',
    title: 'Own Tooling',
    body: 'In-house tool design and manufacturing for precise, repeatable housings — no external dependencies.',
  },
  {
    code: 'M-02',
    title: 'Plastic Injection Moulds',
    body: 'Industrial injection moulding for durable enclosures in technical polymers, from prototype to series.',
  },
  {
    code: 'M-03',
    title: 'OEM Customization',
    body: 'Housings tailored to your hardware, branding and mounting — colours, labelling and connectors.',
  },
]

export function Enclosures() {
  return (
    <section id="enclosures" className="border-b border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-6">
            <div className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
              Industrial enclosures
            </div>
            <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              From bare board to finished product.
            </h2>
            <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
              We close the loop with our own tooling and plastic injection
              moulding. Electronics, firmware and the enclosure that protects
              them are developed together — so the finished product fits, seals
              and ships as one.
            </p>

            <div className="mt-8 flex flex-col">
              {CAPABILITIES.map((item) => (
                <div
                  key={item.code}
                  className="group flex flex-col gap-3 border-t border-border py-7 first:border-t-0 first:pt-0 sm:flex-row sm:gap-8"
                >
                  <div className="font-mono text-sm text-accent sm:w-16 sm:shrink-0">
                    {item.code}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-medium tracking-tight">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] w-full max-w-full overflow-hidden rounded-sm border border-border bg-background lg:h-full">
              <Image
                src="/images/enclosures.png"
                alt="IQtronic injection-moulded industrial electronic enclosures"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
              <div className="absolute left-4 top-4 flex items-center gap-2 rounded-sm border border-border bg-background/90 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-foreground backdrop-blur">
                <span className="inline-block size-1.5 bg-accent" aria-hidden="true" />
                In-house tooling & moulding
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
