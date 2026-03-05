/**
 * Centralized SEO & AEO configuration for Tickki.
 *
 * Single source of truth for all metadata, Open Graph, Twitter Cards,
 * structured data defaults, and AI-engine-facing signals.
 *
 * Update the values here once your domain, copy, and branding are finalised.
 */

/* ------------------------------------------------------------------ */
/*  Site-wide constants                                                */
/* ------------------------------------------------------------------ */

export const SITE_URL =
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://tickki.com";

export const SITE_NAME = "Tickki";

export const SITE_DESCRIPTION =
    "Tickki — your go-to platform for [value proposition]. Join us today.";

export const SITE_LOCALE = "en_US";

/* ------------------------------------------------------------------ */
/*  Default metadata (used in root layout)                             */
/* ------------------------------------------------------------------ */

export const defaultMetadata = {
    metadataBase: new URL(SITE_URL),

    title: {
        default: SITE_NAME,
        template: `%s | ${SITE_NAME}`,
    },

    description: SITE_DESCRIPTION,

    applicationName: SITE_NAME,

    keywords: [
        "Tickki",
        // Add your target keywords here
    ],

    authors: [{ name: SITE_NAME, url: SITE_URL }],
    creator: SITE_NAME,
    publisher: SITE_NAME,

    /* ---- Robots ---- */
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large" as const,
            "max-snippet": -1,
        },
    },

    /* ---- Open Graph ---- */
    openGraph: {
        type: "website" as const,
        locale: SITE_LOCALE,
        url: SITE_URL,
        siteName: SITE_NAME,
        title: SITE_NAME,
        description: SITE_DESCRIPTION,
        images: [
            {
                url: `${SITE_URL}/og-image.png`,
                width: 1200,
                height: 630,
                alt: `${SITE_NAME} — Open Graph Image`,
            },
        ],
    },

    /* ---- Twitter / X ---- */
    twitter: {
        card: "summary_large_image" as const,
        title: SITE_NAME,
        description: SITE_DESCRIPTION,
        // site: "@tickki",       // Uncomment when you have a handle
        // creator: "@tickki",
        images: [`${SITE_URL}/og-image.png`],
    },

    /* ---- Misc ---- */
    alternates: {
        canonical: SITE_URL,
    },

    /* ---- Verification (fill in when ready) ---- */
    verification: {
        // google: "your-google-verification-code",
        // yandex: "your-yandex-verification-code",
    },
};
