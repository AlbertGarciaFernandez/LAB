import { MetadataRoute } from 'next'
import { routing } from '@/i18n/routing'

// Last modified dates per route — update when page content changes
const routeMeta: Record<string, { lastModified: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] }> = {
    '':                                            { lastModified: '2026-02-20', priority: 1.0,  changeFrequency: 'weekly' },
    '/ai-consulting':                              { lastModified: '2026-02-20', priority: 0.9,  changeFrequency: 'weekly' },
    '/ai-automation-consulting-netherlands':        { lastModified: '2026-02-20', priority: 0.9,  changeFrequency: 'weekly' },
    '/it-system-integration':                      { lastModified: '2026-02-20', priority: 0.8,  changeFrequency: 'weekly' },
    '/software-development-leiden':                { lastModified: '2026-02-20', priority: 0.8,  changeFrequency: 'weekly' },
    '/services/custom-internal-tools-development': { lastModified: '2026-02-20', priority: 0.8,  changeFrequency: 'monthly' },
    '/expertise/ai-agents-automation':             { lastModified: '2026-02-05', priority: 0.7,  changeFrequency: 'monthly' },
    '/expertise/n8n-migration-consulting':         { lastModified: '2026-02-20', priority: 0.7,  changeFrequency: 'monthly' },
    '/expertise/system-architecture-design':       { lastModified: '2026-02-05', priority: 0.7,  changeFrequency: 'monthly' },
    '/expertise/custom-llm-development':           { lastModified: '2026-02-05', priority: 0.7,  changeFrequency: 'monthly' },
}

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.codehunterlab.com'
    const sitemapEntries: MetadataRoute.Sitemap = []

    Object.entries(routeMeta).forEach(([route, meta]) => {
        routing.locales.forEach((locale) => {
            sitemapEntries.push({
                url: `${baseUrl}/${locale}${route}`,
                lastModified: new Date(meta.lastModified),
                changeFrequency: meta.changeFrequency,
                priority: meta.priority,
            })
        })
    })

    // Root URL (redirects to default locale)
    sitemapEntries.push({
        url: baseUrl,
        lastModified: new Date('2026-02-20'),
        changeFrequency: 'weekly',
        priority: 1,
    })

    return sitemapEntries
}
