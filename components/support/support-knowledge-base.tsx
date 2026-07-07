import type { SupportFaqItem } from '@/lib/support'
import { SupportSection, KnowledgeIcon } from './support-section'
import { SupportAccordion } from './support-accordion'

export function SupportKnowledgeBase({
  items,
}: {
  items: SupportFaqItem[]
}) {
  return (
    <SupportSection
      id="knowledge-base"
      eyebrow="Knowledge Base"
      title="Answers, how-tos and troubleshooting."
      icon={<KnowledgeIcon className="size-5" />}
    >
      <div className="max-w-3xl">
        <SupportAccordion items={items} />
      </div>
    </SupportSection>
  )
}
