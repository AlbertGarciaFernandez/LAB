import { MetadataRoute } from 'next'
import { routing } from '@/i18n/routing'

// Last modified dates per route — update when page content changes
const routeMeta: Record<string, { lastModified: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] }> = {
    '':                                            { lastModified: '2026-02-26', priority: 1.0,  changeFrequency: 'weekly' },
    '/ai-consulting':                              { lastModified: '2026-02-26', priority: 0.9,  changeFrequency: 'weekly' },
    '/ai-automation-consulting-netherlands':        { lastModified: '2026-02-26', priority: 0.9,  changeFrequency: 'weekly' },
    '/it-system-integration':                      { lastModified: '2026-02-26', priority: 0.8,  changeFrequency: 'weekly' },
    '/software-development-leiden':                { lastModified: '2026-02-26', priority: 0.8,  changeFrequency: 'weekly' },
    '/services/custom-internal-tools-development': { lastModified: '2026-02-26', priority: 0.8,  changeFrequency: 'monthly' },
    '/expertise/ai-agents-automation':             { lastModified: '2026-02-26', priority: 0.7,  changeFrequency: 'monthly' },
    '/expertise/n8n-migration-consulting':         { lastModified: '2026-02-26', priority: 0.7,  changeFrequency: 'monthly' },
    '/expertise/system-architecture-design':       { lastModified: '2026-02-26', priority: 0.7,  changeFrequency: 'monthly' },
    '/expertise/custom-llm-development':           { lastModified: '2026-02-26', priority: 0.7,  changeFrequency: 'monthly' },
    '/nextjs-development-agency':                          { lastModified: '2026-02-26', priority: 0.9,  changeFrequency: 'weekly' },
    '/react-consulting':                                   { lastModified: '2026-02-26', priority: 0.9,  changeFrequency: 'weekly' },
    '/dental-clinic-automation-netherlands':               { lastModified: '2026-02-26', priority: 0.9,  changeFrequency: 'weekly' },
    '/physiotherapy-clinic-automation-netherlands':        { lastModified: '2026-02-26', priority: 0.9,  changeFrequency: 'weekly' },
    '/aesthetic-clinic-automation-netherlands':            { lastModified: '2026-02-26', priority: 0.9,  changeFrequency: 'weekly' },
    '/veterinary-clinic-automation-netherlands':           { lastModified: '2026-02-26', priority: 0.9,  changeFrequency: 'weekly' },
    '/accounting-firm-automation-netherlands':             { lastModified: '2026-02-26', priority: 0.9,  changeFrequency: 'weekly' },
    '/real-estate-automation-netherlands':                 { lastModified: '2026-02-26', priority: 0.9,  changeFrequency: 'weekly' },
}

const insightRoutes: Record<string, { lastModified: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] }> = {
    '/en/insights': { lastModified: '2026-04-10', priority: 0.7, changeFrequency: 'weekly' },
    '/en/insights/workflow-automation-agency-netherlands': { lastModified: '2026-04-10', priority: 0.7, changeFrequency: 'monthly' },
    '/en/insights/conversational-ai-consultant-netherlands': { lastModified: '2026-04-10', priority: 0.7, changeFrequency: 'monthly' },
    '/en/insights/n8n-consultant-netherlands': { lastModified: '2026-04-10', priority: 0.7, changeFrequency: 'monthly' },
    '/en/insights/dental-clinic-whatsapp-automation-netherlands': { lastModified: '2026-04-10', priority: 0.7, changeFrequency: 'monthly' },
    '/en/insights/ai-consultants-netherlands': { lastModified: '2026-04-10', priority: 0.7, changeFrequency: 'monthly' },
    '/en/insights/automation-consultancy-netherlands': { lastModified: '2026-04-10', priority: 0.7, changeFrequency: 'monthly' },
    '/en/insights/system-integrator-netherlands': { lastModified: '2026-04-10', priority: 0.7, changeFrequency: 'monthly' },
    '/en/insights/crm-integration-services-netherlands': { lastModified: '2026-04-10', priority: 0.7, changeFrequency: 'monthly' },
    '/en/insights/app-developer-leiden': { lastModified: '2026-04-10', priority: 0.7, changeFrequency: 'monthly' },
    '/en/insights/accounting-automation-software-netherlands': { lastModified: '2026-04-10', priority: 0.7, changeFrequency: 'monthly' },
    '/en/insights/react-consulting-services': { lastModified: '2026-04-10', priority: 0.7, changeFrequency: 'monthly' },
    '/en/insights/nextjs-consultancy-europe': { lastModified: '2026-04-10', priority: 0.7, changeFrequency: 'monthly' },
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

    Object.entries(insightRoutes).forEach(([route, meta]) => {
        sitemapEntries.push({
            url: `${baseUrl}${route}`,
            lastModified: new Date(meta.lastModified),
            changeFrequency: meta.changeFrequency,
            priority: meta.priority,
        })
    })

    return sitemapEntries
}
