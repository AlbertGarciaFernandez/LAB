import { MetadataRoute } from 'next'
import { routing } from '@/i18n/routing'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://codehunterlab.com'

    // Define all static routes (without locale prefix)
    const routes = [
        '',
        '/ai-consulting',
        '/ai-automation-consulting-netherlands',
        '/it-system-integration',
        '/software-development-leiden',
        '/services/custom-internal-tools-development'
    ]

    const sitemapEntries: MetadataRoute.Sitemap = []

    routes.forEach((route) => {
        routing.locales.forEach((locale) => {
            sitemapEntries.push({
                url: `${baseUrl}/${locale}${route}`,
                lastModified: new Date(),
                changeFrequency: 'weekly',
                priority: route === '' ? 1 : 0.8,
            })
        })
    })

    // Add root URL as well (usually redirects to default locale, but good to have)
    sitemapEntries.push({
        url: baseUrl,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 1,
    })

    return sitemapEntries
}
