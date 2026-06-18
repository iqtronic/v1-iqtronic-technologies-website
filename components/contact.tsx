export function Contact() {
  return (
    <section id="contact" className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Left column — company information */}
          <div className="lg:col-span-6">
            <div className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
              Company
            </div>
            <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              IQtronic Technologies
            </h2>
            <p className="mt-6 max-w-md text-pretty leading-relaxed text-primary-foreground/70">
              Independent European engineering company. Industrial IoT products,
              custom electronics and test laboratories since 1999.
            </p>

            <dl className="mt-10 space-y-1 text-sm leading-relaxed text-primary-foreground/80">
              <dt className="font-medium text-primary-foreground">
                IQtronic technologies Europe s.r.o.
              </dt>
              <dd>[Company address]</dd>
              <dd>Company ID: [Company ID]</dd>
              <dd>VAT ID: [VAT ID]</dd>
            </dl>

            <p className="mt-4 max-w-md text-xs leading-relaxed text-primary-foreground/50">
              Registered with the Regional Court in [city], Section [section],
              Insert [insert number].
            </p>

            <a
              href="/contact"
              className="mt-10 inline-flex items-center gap-2 rounded-sm border border-primary-foreground/20 px-5 py-3 text-sm font-medium transition-colors hover:border-primary-foreground/50"
            >
              Contact Information
              <span aria-hidden="true">→</span>
            </a>
          </div>

          {/* Right column — newsletter signup (frontend-only placeholder) */}
          <div className="lg:col-span-6">
            <div className="rounded-sm border border-primary-foreground/15 bg-primary-foreground/5 p-6 sm:p-8">
              <div className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                Newsletter
              </div>
              <h3 className="mt-4 text-balance text-2xl font-semibold tracking-tight">
                Stay Updated
              </h3>
              <p className="mt-4 max-w-md text-pretty leading-relaxed text-primary-foreground/70">
                Subscribe to our newsletter for the latest product updates,
                firmware releases, and engineering insights.
              </p>

              {/*
                Frontend-only placeholder. No backend, database, or email
                provider is wired up. Validation relies on native HTML required
                attributes only.
                TODO (future): wire up double opt-in confirmation flow.
                TODO (future): add server-side rate limiting on submit.
              */}
              <form className="mt-8 grid grid-cols-1 gap-5">
                {/* Honeypot — hidden from users, ignored by real submissions */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="company-website">
                    Do not fill this field
                  </label>
                  <input
                    id="company-website"
                    name="company-website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div>
                  <label
                    htmlFor="newsletter-email"
                    className="font-mono text-xs uppercase tracking-[0.14em] text-primary-foreground/60"
                  >
                    Email address
                  </label>
                  <input
                    id="newsletter-email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@company.com"
                    className="mt-2 w-full rounded-sm border border-primary-foreground/20 bg-primary px-3 py-2.5 text-sm text-primary-foreground outline-none placeholder:text-primary-foreground/40 focus:border-accent"
                  />
                </div>

                <label
                  htmlFor="gdpr-consent"
                  className="flex items-start gap-3 text-sm leading-relaxed text-primary-foreground/70"
                >
                  <input
                    id="gdpr-consent"
                    name="gdpr-consent"
                    type="checkbox"
                    required
                    className="mt-0.5 size-4 shrink-0 cursor-pointer rounded-sm border border-primary-foreground/40 bg-primary-foreground/10 accent-accent"
                  />
                  <span>
                    I agree to the GDPR terms and privacy policy.
                  </span>
                </label>

                <p className="-mt-2 text-xs leading-relaxed text-primary-foreground/50">
                  No spam. Only important product updates and engineering news.
                </p>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-sm bg-accent px-5 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
                >
                  Subscribe
                  <span aria-hidden="true">→</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
