import type { SupportResource } from '@/lib/support'
import { SupportSection, DocumentationIcon } from './support-section'
import { SupportResourceGrid } from './support-resource-grid'

export function SupportDocumentation({
  items,
}: {
  items: SupportResource[]
}) {
  return (
    <SupportSection
      id="documentation"
      eyebrow="Documentation"
      title="Manuals, guides and references."
      icon={<DocumentationIcon className="size-5" />}
    >
      <SupportResourceGrid items={items} />
    </SupportSection>
  )
}
