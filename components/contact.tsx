export function Contact() {
  return (
    <section id="contact" className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <div className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
              Start a project
            </div>
            <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              Let&apos;s engineer something that lasts.
            </h2>
            <p className="mt-6 max-w-md text-pretty leading-relaxed text-primary-foreground/70">
              Tell us about your product, your environment and your timeline.
              An engineer — not a salesperson — will get back to you.
            </p>

            <dl className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {[
                { label: 'Response time', value: 'Within 1 business day' },
                { label: 'Phone', value: '+420 000 000 000' },
                { label: 'Hours', value: 'Mon–Fri · 08:00–17:00 CET' },
                { label: 'Best way to reach us', value: 'Use the form →' },
              ].map((item) => (
                <div key={item.label}>
                  <dt className="font-mono text-xs uppercase tracking-[0.14em] text-primary-foreground/50">
                    {item.label}
                  </dt>
                  <dd className="mt-1 text-sm">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:col-span-6">
            <form className="grid grid-cols-1 gap-4 rounded-sm border border-primary-foreground/15 bg-primary-foreground/5 p-6 sm:grid-cols-2 sm:p-8">
              <Field label="Name" name="name" placeholder="Your name" />
              <Field
                label="Company"
                name="company"
                placeholder="Company name"
              />
              <Field
                label="Email"
                name="email"
                type="email"
                placeholder="you@company.com"
                className="sm:col-span-2"
              />
              <div className="sm:col-span-2">
                <label
                  htmlFor="interest"
                  className="font-mono text-xs uppercase tracking-[0.14em] text-primary-foreground/60"
                >
                  Area of interest
                </label>
                <select
                  id="interest"
                  name="interest"
                  className="mt-2 w-full rounded-sm border border-primary-foreground/20 bg-primary px-3 py-2.5 text-sm text-primary-foreground outline-none focus:border-accent"
                >
                  <option>Products</option>
                  <option>Engineering Services</option>
                  <option>Laboratory Testing</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="font-mono text-xs uppercase tracking-[0.14em] text-primary-foreground/60"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="What are you building?"
                  className="mt-2 w-full resize-none rounded-sm border border-primary-foreground/20 bg-primary px-3 py-2.5 text-sm text-primary-foreground outline-none placeholder:text-primary-foreground/40 focus:border-accent"
                />
              </div>
              <button
                type="submit"
                className="sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-sm bg-accent px-5 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
              >
                Send enquiry
                <span aria-hidden="true">→</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  name,
  type = 'text',
  placeholder,
  className,
}: {
  label: string
  name: string
  type?: string
  placeholder?: string
  className?: string
}) {
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="font-mono text-xs uppercase tracking-[0.14em] text-primary-foreground/60"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full rounded-sm border border-primary-foreground/20 bg-primary px-3 py-2.5 text-sm text-primary-foreground outline-none placeholder:text-primary-foreground/40 focus:border-accent"
      />
    </div>
  )
}
