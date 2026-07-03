type Block =
  | { type: 'paragraph'; text: string }
  | { type: 'list'; items: string[] }

interface Step {
  title: string
  content: Block[]
}

const STEPS: Step[] = [
  { title: 'Project proposal', content: [] },
  { title: 'Accepted', content: [] },
  { title: 'First prepaid development week', content: [] },
  { title: 'Development', content: [] },
  { title: 'Weekly progress report', content: [] },
  { title: 'Customer decides to continue', content: [] },
  { title: 'Next prepaid development week', content: [] },
  { title: 'Prototype', content: [] },
  { title: 'Testing', content: [] },
  { title: 'Production', content: [] },
]

function StepContent({ blocks }: { blocks: Block[] }) {
  return (
    <div className="mt-3 flex flex-col gap-4">
      {blocks.map((block, idx) =>
        block.type === 'paragraph' ? (
          <p
            key={idx}
            className="max-w-2xl text-pretty leading-relaxed text-muted-foreground"
          >
            {block.text}
          </p>
        ) : (
          <ul
            key={idx}
            className="grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2 lg:grid-cols-3"
          >
            {block.items.map((item) => (
              <li key={item} className="flex gap-3 text-muted-foreground">
                <span
                  className="mt-2 size-1.5 shrink-0 bg-accent"
                  aria-hidden="true"
                />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        ),
      )}
    </div>
  )
}

export function DevelopmentProcess() {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <header className="max-w-2xl">
          <div className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
            Our development process
          </div>
          <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            From first schematic to certified production.
          </h2>
          <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
            A disciplined, in-house engineering process. Every stage — hardware,
            firmware, testing and certification — is handled by the same team.
          </p>
        </header>

        <ol className="relative mt-14">
          {/* Vertical axis */}
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-5 top-0 w-px -translate-x-1/2 bg-border sm:left-6"
          />

          {STEPS.map((step, i) => (
            <li
              key={step.title}
              className="relative pb-12 pl-16 last:pb-0 sm:pl-20"
            >
              {/* Numbered marker */}
              <span
                className="absolute left-5 top-0 z-10 flex size-10 -translate-x-1/2 items-center justify-center rounded-full bg-accent font-mono text-sm font-semibold text-accent-foreground sm:left-6"
                aria-hidden="true"
              >
                {String(i + 1).padStart(2, '0')}
              </span>

              <div className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
                {`Step ${i + 1}`}
              </div>
              <h3 className="mt-1.5 text-balance text-xl font-semibold tracking-tight sm:text-2xl">
                {step.title}
              </h3>

              {step.content.length > 0 && <StepContent blocks={step.content} />}
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
