import type { Metadata } from 'next'
import { SocialPreview } from '@/components/social/social-preview'

export const metadata: Metadata = {
  title: 'LinkedIn News Preview · IQtronic',
  description:
    'Internal preview template for presenting IQtronic company news as a LinkedIn post.',
  robots: { index: false, follow: false },
}

export default function LinkedInPreviewPage() {
  return <SocialPreview platform="linkedin" />
}
