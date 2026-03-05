/**
 * Structured Data (JSON-LD) utilities for SEO & AI Engine Optimization.
 *
 * JSON-LD is the primary way search engines and AI assistants
 * (Google, Bing, ChatGPT, Perplexity, etc.) understand page content.
 *
 * Usage:
 *   import { JsonLd } from "@/lib/structured-data";
 *   <JsonLd data={organizationSchema} />
 */

import { SITE_NAME, SITE_URL, SITE_DESCRIPTION } from "./seo.config";

/* ------------------------------------------------------------------ */
/*  Generic JSON-LD renderer component                                 */
/* ------------------------------------------------------------------ */

interface JsonLdProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: Record<string, any>;
}

export function JsonLd({ data }: JsonLdProps) {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data, null, 0) }}
        />
    );
}

/* ------------------------------------------------------------------ */
/*  Pre-built schema objects — extend as needed                        */
/* ------------------------------------------------------------------ */

/** Organization schema — tells AI engines who you are. */
export const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    // logo: `${SITE_URL}/logo.png`,        // Uncomment when asset exists
    // sameAs: [                              // Social profiles for AI knowledge graphs
    //   "https://twitter.com/tickki",
    //   "https://linkedin.com/company/tickki",
    // ],
};

/** WebSite schema — enables sitelinks search box in Google. */
export const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    publisher: {
        "@type": "Organization",
        name: SITE_NAME,
        url: SITE_URL,
    },
    // potentialAction: {                      // Uncomment if you add a search feature
    //   "@type": "SearchAction",
    //   target: `${SITE_URL}/search?q={search_term_string}`,
    //   "query-input": "required name=search_term_string",
    // },
};

/**
 * Helper to create a WebPage schema for individual pages.
 * Pass page-specific values; defaults fall back to global config.
 */
export function createWebPageSchema({
    name,
    description,
    url,
}: {
    name: string;
    description: string;
    url: string;
}) {
    return {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name,
        description,
        url,
        isPartOf: {
            "@type": "WebSite",
            name: SITE_NAME,
            url: SITE_URL,
        },
    };
}

/**
 * Helper to create a FAQ schema — great for AI answer engines.
 * Pass an array of { question, answer } pairs.
 */
export function createFAQSchema(
    items: { question: string; answer: string }[]
) {
    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: items.map(({ question, answer }) => ({
            "@type": "Question",
            name: question,
            acceptedAnswer: {
                "@type": "Answer",
                text: answer,
            },
        })),
    };
}
