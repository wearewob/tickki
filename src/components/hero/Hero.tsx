import Link from "next/link";
import { Reveal } from "@/components/shared";

export default function Hero() {
    return (
        <section className="flex flex-col items-center gap-10 text-center">
            {/* Heading */}
            <div className="flex flex-col items-center gap-5">
                <Reveal>
                    <h1 className="max-w-3xl text-6xl leading-[1] font-heading text-brand-dark">
                        Resolve Customer Queries <br /> in Seconds, Not Hours.
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

            {/* CTA Buttons */}
            <Reveal delay={400}>
                <div className="flex items-center gap-4 font-sans">
                    <Link
                        href="#get-started"
                        className="h-9 shadow-btn-strong rounded-md bg-brand-dark text-surface text-sm font-medium tracking-tight leading-5 flex items-center justify-center px-4 hover:opacity-90 transition-opacity"
                    >
                        Get Started — It&apos;s Free
                    </Link>
                    <Link
                        href="#demo"
                        className="h-9 shadow-btn rounded-md bg-surface text-brand-dark border border-border-default text-sm font-medium tracking-tight leading-5 flex items-center justify-center px-4 hover:bg-surface-light transition-colors"
                    >
                        Request Demo
                    </Link>
                </div>
            </Reveal>
        </section>
    );
}
