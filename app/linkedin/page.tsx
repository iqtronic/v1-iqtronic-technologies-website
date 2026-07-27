import type { Metadata } from 'next'
import { SocialPreview } from '@/components/social/social-preview'
import { getSocialNewsItem } from '@/lib/social-news'

export const metadata: Metadata = {
  title: 'LinkedIn News Preview · IQtronic',
  description:
    'Internal preview template for presenting IQtronic company news as a LinkedIn post.',
  robots: { index: false, follow: false },
}

export default async function LinkedInPreviewPage({
  searchParams,
}: {
  searchParams: Promise<{ article?: string }>
}) {
  const { article } = await searchParams
  const item = getSocialNewsItem(article)
  return <SocialPreview platform="linkedin" item={item} />
}
