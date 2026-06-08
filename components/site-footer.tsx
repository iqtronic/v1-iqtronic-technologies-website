import { Logo } from '@/components/logo'

const COLUMNS = [
  {
    title: 'Products',
    links: ['IQSocket', 'Weather Stations', 'Monitoring Systems'],
  },
  {
    title: 'Development',
    links: ['Hardware', 'Firmware', 'Certification'],
  },
  {
    title: 'Laboratories',
    links: ['EMC Laboratory', 'Microwave Laboratory', 'Wind Tunnel'],
  },
  {
    title: 'Enclosures',
    links: ['Own Tooling', 'Injection Moulds', 'OEM Customization'],
  },
]

export function SiteFooter() {
  return (
    <footer className="bg-card">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-6">
          <div className="col-span-2">
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Independent European engineering. Industrial IoT products, custom
              electronics and accredited test laboratories since 1999.
            </p>
            <div className="mt-6 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
              <span className="inline-block size-1.5 bg-accent" aria-hidden="true" />
              ISO 9001 certified
            </div>
          </div>

          {COLUMNS.map((column) => (
            <div key={column.title}>
              <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
                {column.title}
              </h3>
              <ul className="mt-4 flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-foreground transition-colors hover:text-accent"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} IQtronic Technologies. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-foreground">
              Privacy
            </a>
            <a href="#" className="transition-colors hover:text-foreground">
              Terms
            </a>
            <a href="#" className="transition-colors hover:text-foreground">
              Imprint
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
