"use client";

import { useState, useEffect, useRef } from "react";
import { Reveal } from "@/components/shared";

export default function Feature1() {
    const [phase, setPhase] = useState<"typing" | "message" | "pause">("typing");
    const sectionRef = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    // Observe when the section enters the viewport
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isVisible) setIsVisible(true);
            },
            { threshold: 0.3 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, [isVisible]);

    // Infinite animation loop once visible
    useEffect(() => {
        if (!isVisible) return;
        let active = true;

        const loop = () => {
            if (!active) return;
            setPhase("typing");

            // Show typing dots for 2s, then message for 4s, then reset
            const t1 = setTimeout(() => { if (active) setPhase("message"); }, 2000);
            const t2 = setTimeout(() => { if (active) setPhase("pause"); }, 6000);
            const t3 = setTimeout(() => { if (active) loop(); }, 6500);

            return [t1, t2, t3];
        };

        const timers = loop();
        return () => {
            active = false;
            timers?.forEach(clearTimeout);
        };
    }, [isVisible]);

    return (
        <section
            ref={sectionRef}
            className="w-full bg-surface flex items-center justify-center px-6 lg:px-[194px] py-16 md:py-24"
            aria-labelledby="feature-ai-heading"
        >
            <div className="max-w-6xl w-full flex flex-col lg:flex-row items-start lg:items-stretch gap-12 lg:gap-16">

                {/* Text Column — heading at top, description at bottom */}
                <div className="flex-1 flex flex-col items-start gap-6 lg:justify-between w-full">
                    <div className="flex flex-col items-start gap-4 lg:gap-5">
                        <Reveal>
                            <p className="text-base leading-snug font-body text-text-muted">
                                Stop typing the same answers over and over.
                            </p>
                        </Reveal>
                        <Reveal delay={200}>
                            <h2
                                id="feature-ai-heading"
                                className="max-w-md text-3xl md:text-4xl leading-tight font-heading text-text-heading"
                            >
                                Slash Response Times with an AI Sidekick
                            </h2>
                        </Reveal>
                    </div>
                    <Reveal delay={400}>
                        <p className="max-w-lg text-base leading-snug font-body text-text-muted">
                            Tickki&apos;s AI automatically generates reply suggestions, extracts
                            key customer intent, and summarizes long conversations so your
                            agents can respond faster than ever.
                        </p>
                    </Reveal>
                </div>

                {/* Chat Preview Card */}
                <Reveal delay={300}>
                    <div className="flex-1 w-full rounded-xl bg-surface-light overflow-hidden flex flex-col justify-center p-8 md:p-10 lg:min-h-[400px]">
                        <div className="flex flex-col items-start gap-2.5 w-full max-w-sm">
                            {/* Label */}
                            <p className="text-sm font-sans text-brand-dark opacity-60 leading-snug">
                                Haven Spa · AI Assistant
                            </p>
                            {/* Bubble area — relative wrapper keeps size stable */}
                            <div className="flex items-start gap-2.5 w-full">
                                {/* Avatar */}
                                <div
                                    className="w-9 h-9 rounded-lg bg-brand-primary shrink-0 flex items-center justify-center"
                                    aria-hidden="true"
                                >
                                    <span className="text-sm font-heading font-bold text-surface leading-none">T</span>
                                </div>

                                {/* Message container — message stays in flow for sizing */}
                                <div className="relative flex-1">
                                    {/* Typing indicator — absolutely positioned */}
                                    <div
                                        className={`absolute top-0 left-0 rounded-xl bg-surface py-3.5 px-5 transition-all duration-500 z-10 ${phase === "typing"
                                                ? "opacity-100 scale-100"
                                                : "opacity-0 scale-95 pointer-events-none"
                                            }`}
                                    >
                                        <div className="flex items-center gap-1.5 h-[24px]">
                                            <span className="w-2 h-2 rounded-full bg-text-muted/40 animate-bounce [animation-delay:0ms]" />
                                            <span className="w-2 h-2 rounded-full bg-text-muted/40 animate-bounce [animation-delay:150ms]" />
                                            <span className="w-2 h-2 rounded-full bg-text-muted/40 animate-bounce [animation-delay:300ms]" />
                                        </div>
                                    </div>

                                    {/* Full message — always in flow to maintain container size */}
                                    <div
                                        className={`rounded-xl bg-surface py-3.5 px-5 transition-all duration-500 ${phase === "message"
                                                ? "opacity-100 scale-100 translate-y-0"
                                                : "opacity-0 scale-95 translate-y-2"
                                            }`}
                                    >
                                        <p className="text-base leading-snug font-body text-brand-dark">
                                            Hi there,
                                            <br />
                                            I&apos;m the Haven Spa Assistant. Are you here to Explore our
                                            products or do you need Support with an existing service?
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Reveal>

            </div>
        </section>
    );
}
