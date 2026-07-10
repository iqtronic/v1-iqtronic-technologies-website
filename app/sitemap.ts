import type { MetadataRoute } from 'next'
import { absoluteUrl } from '@/lib/site'
import { getPublishedArticles } from '@/lib/news'
import { PRODUCTS } from '@/lib/products'
import { SUPPORT_FAMILIES } from '@/lib/support'

/**
 * Generates /sitemap.xml.
 *
 * Includes the primary static routes, every product and support-family page,
 * and — as required — every published News article.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticRoutes = [
    '/',
    '/products',
    '/sensorage',
    '/support',
    '/news',
    '/why-iqtronic',
    '/development',
    '/contact',
    '/distributor',
    '/iqcontrol',
    '/iqtronic-smart-socket-licensing',
  ].map((path) => ({
    url: absoluteUrl(path),
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: path === '/' ? 1 : 0.7,
  }))

  const productRoutes = PRODUCTS.map((product) => ({
    url: absoluteUrl(`/products/${product.slug}`),
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  const supportRoutes = SUPPORT_FAMILIES.map((family) => ({
    url: absoluteUrl(`/support/${family.id}`),
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }))

  const newsRoutes = getPublishedArticles().map((article) => ({
    url: article.canonicalUrl,
    lastModified: new Date(article.updatedDate),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))

  return [...staticRoutes, ...productRoutes, ...supportRoutes, ...newsRoutes]
}
