import {MetadataRoute} from "next"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    return[
        {
            url:`${process.env.NEXT_PUBLIC_BASE_URL}`,
            lastModified: new Date(), 
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url:`${process.env.NEXT_PUBLIC_BASE_URL}/branding`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8, 
        },
        {
            url:`${process.env.NEXT_PUBLIC_BASE_URL}/web-design`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8, 
        },
        {
            url:`${process.env.NEXT_PUBLIC_BASE_URL}/digital-marketing`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8, 
        },
        {
            url:`${process.env.NEXT_PUBLIC_BASE_URL}/our-work`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8, 
        },
        {
            url:`${process.env.NEXT_PUBLIC_BASE_URL}/about`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8, 
        },
        {
            url:`${process.env.NEXT_PUBLIC_BASE_URL}/contact`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8, 
        },
    ]
}