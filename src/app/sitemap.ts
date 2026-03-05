import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo.config";

/**
 * Dynamic sitemap generator.
 * Add new routes as you build pages.
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap
 */
export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date().toISOString();

    // Static routes — extend this array as you add pages
    const routes: MetadataRoute.Sitemap = [
        {
            url: SITE_URL,
            lastModified: now,
            changeFrequency: "weekly",
            priority: 1.0,
        },
        // Example: uncomment and add more routes as needed
        // {
        //   url: `${SITE_URL}/about`,
        //   lastModified: now,
        //   changeFrequency: "monthly",
        //   priority: 0.8,
        // },
        // {
        //   url: `${SITE_URL}/pricing`,
        //   lastModified: now,
        //   changeFrequency: "monthly",
        //   priority: 0.8,
        // },
    ];

    return routes;
}
