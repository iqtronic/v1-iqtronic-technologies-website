import type { SupportResource } from '@/lib/support'
import { SupportSection, DownloadIcon } from './support-section'
import { SupportResourceGrid } from './support-resource-grid'

export function SupportDownloads({
  items,
}: {
  items: SupportResource[]
}) {
  return (
    <SupportSection
      id="downloads"
      eyebrow="Downloads"
      title="Firmware, software and files."
      icon={<DownloadIcon className="size-5" />}
      tinted
    >
      <SupportResourceGrid items={items} />
    </SupportSection>
  )
}
