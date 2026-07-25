import {
  formatDocumentNumber,
  formatLastUpdated,
  type LegalDocument,
} from '@/lib/legal'
import {
  DocumentIcon,
  DownloadIcon,
  ExternalLinkIcon,
} from '@/components/legal/legal-icons'

export function LegalDocumentCard({ document }: { document: LegalDocument }) {
  return (
    <article className="group flex flex-col rounded-sm border border-border bg-card transition-all duration-300 hover:border-accent/50 hover:shadow-md">
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <div
            className="flex size-10 shrink-0 items-center justify-center rounded-sm border border-border bg-secondary text-muted-foreground transition-colors group-hover:border-accent/40 group-hover:text-accent"
            aria-hidden="true"
          >
            <DocumentIcon className="size-5" />
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-sm border border-border bg-background px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
            {document.category}
          </span>
        </div>

        <div className="mt-5 font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
          {formatDocumentNumber(document.id)}
        </div>
        <h3 className="mt-2 text-lg font-medium tracking-tight text-foreground">
          {document.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {document.description}
        </p>

        <dl className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-border pt-5 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <dt className="sr-only">Version</dt>
            <span aria-hidden="true">Ver.</span>
            <dd className="text-foreground">{document.version}</dd>
          </div>
          <div className="flex items-center gap-1.5">
            <dt className="sr-only">Last updated</dt>
            <span aria-hidden="true">Updated</span>
            <dd className="text-foreground">
              {formatLastUpdated(document.lastUpdated)}
            </dd>
          </div>
        </dl>
      </div>

      <div className="flex items-center gap-2 border-t border-border p-4">
        <a
          href={document.pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-sm bg-accent px-4 py-2.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
        >
          <ExternalLinkIcon className="size-4" />
          View
        </a>
        <a
          href={document.pdfUrl}
          download
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-sm border border-border bg-background px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
        >
          <DownloadIcon className="size-4" />
          Download PDF
        </a>
      </div>
    </article>
  )
}
