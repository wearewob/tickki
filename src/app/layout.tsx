import type { Metadata } from "next";
import { Inter, Figtree, Geist_Mono, Manrope, Onest } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

import { defaultMetadata } from "@/lib/seo.config";
import {
  JsonLd,
  organizationSchema,
  webSiteSchema,
} from "@/lib/structured-data";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const radioGrotesk = localFont({
  src: "../../public/RadioGrotesk-Regular.otf",
  variable: "--font-radio-grotesk",
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin"],
});

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <JsonLd data={organizationSchema} />
        <JsonLd data={webSiteSchema} />
      </head>
      <body
        className={`${inter.variable} ${radioGrotesk.variable} ${figtree.variable} ${geistMono.variable} ${manrope.variable} ${onest.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
