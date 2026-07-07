import type { SupportResource } from '@/lib/support'
import { SupportSection, VideoIcon } from './support-section'
import { SupportResourceGrid } from './support-resource-grid'

export function SupportVideoTutorials({
  items,
}: {
  items: SupportResource[]
}) {
  return (
    <SupportSection
      id="video-tutorials"
      eyebrow="Video Tutorials"
      title="Watch how it works."
      icon={<VideoIcon className="size-5" />}
      tinted
    >
      <SupportResourceGrid items={items} />
    </SupportSection>
  )
}
