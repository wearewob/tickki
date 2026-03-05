import type { MetadataRoute } from "next";
import { SITE_NAME, SITE_DESCRIPTION } from "@/lib/seo.config";

/**
 * Web App Manifest — enhances SEO signals for PWA-aware crawlers
 * and enables "Add to Home Screen" on mobile devices.
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/metadata/manifest
 */
export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "TICKKI",
        short_name: "TICKKI",
        description: "The intelligent customer support system",
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#000000",
        icons: [
            {
                src: "/favicon.ico",
                sizes: "any",
                type: "image/x-icon",
            },
            // Add more icon sizes as you create them:
            // { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
            // { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
        ],
    };
}
