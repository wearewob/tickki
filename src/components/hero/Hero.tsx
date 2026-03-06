import Link from "next/link";
import { Reveal } from "@/components/shared";

export default function Hero() {
    return (
        <section className="flex flex-col items-center gap-8 text-center">
            {/* Heading */}
            <div className="flex flex-col items-center gap-4 md:gap-5">
                <Reveal>
                    <h1 className="max-w-3xl text-4xl md:text-6xl leading-tight md:leading-none font-heading text-brand-dark">
                        Resolve Customer Queries in Seconds, Not Hours.
                    </h1>
                </Reveal>
                <Reveal delay={200}>
                    <p className="max-w-lg text-base leading-snug font-body text-text-muted">
                        The intelligent support inbox that unites web chat and WhatsApp. Let AI
                        instantly draft replies and summarize conversations, while your human
                        agents step in exactly when needed.
                    </p>
                </Reveal>
            </div>

            {/* CTA Buttons — stacked on mobile, side-by-side on md+ */}
            <Reveal delay={400}>
                <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3 md:gap-4 w-full max-w-xs md:max-w-none font-sans">
                    <Link
                        href="#get-started"
                        className="h-12 md:h-9 shadow-btn-strong rounded-xl md:rounded-md bg-brand-dark text-surface text-sm font-medium tracking-tight leading-5 flex items-center justify-center px-6 hover:opacity-90 transition-opacity"
                    >
                        Get Started — It&apos;s Free
                    </Link>
                    <Link
                        href="#demo"
                        className="h-12 md:h-9 shadow-btn rounded-xl md:rounded-md bg-surface text-brand-dark border border-border-default text-sm font-medium tracking-tight leading-5 flex items-center justify-center px-6 hover:bg-surface-light transition-colors"
                    >
                        Request Demo
                    </Link>
                </div>
            </Reveal>
        </section>
    );
}
