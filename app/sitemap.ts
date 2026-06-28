import { MetadataRoute } from 'next'

const SITE_URL = 'https://veloralabs.com.br'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/sobre',
    '/servicos',
    '/servicos/software',
    '/servicos/dashboards',
    '/servicos/marketing',
    '/servicos/trafego-pago',
    '/servicos/seo',
    '/servicos/social-media',
    '/contato',
  ]

  const lastModified = new Date()

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8,
  }))
}
