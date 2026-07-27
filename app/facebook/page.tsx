import type { Metadata } from 'next'
import { SocialPreview } from '@/components/social/social-preview'

export const metadata: Metadata = {
  title: 'Facebook News Preview · IQtronic',
  description:
    'Internal preview template for presenting IQtronic company news as a Facebook post.',
  robots: { index: false, follow: false },
}

export default function FacebookPreviewPage() {
  return <SocialPreview platform="facebook" />
}
