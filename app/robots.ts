import { MetadataRoute } from 'next';

// generates robots.txt for search engine crawlers
export default function robots(): MetadataRoute.Robots {
    const baseUrl = 'https://vincentdev.site';

    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/api/', '/_next/'],
            },
        ],
        sitemap: `${baseUrl}/sitemap.xml`,
    };
}