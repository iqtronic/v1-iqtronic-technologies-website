import type { Metadata } from 'next'
import { SocialPreview } from '@/components/social/social-preview'
import { getSocialNewsItem } from '@/lib/social-news'

export const metadata: Metadata = {
  title: 'Facebook News Preview · IQtronic',
  description:
    'Internal preview template for presenting IQtronic company news as a Facebook post.',
  robots: { index: false, follow: false },
}

export default async function FacebookPreviewPage({
  searchParams,
}: {
  searchParams: Promise<{ article?: string }>
}) {
  const { article } = await searchParams
  const item = getSocialNewsItem(article)
  return <SocialPreview platform="facebook" item={item} />
}
