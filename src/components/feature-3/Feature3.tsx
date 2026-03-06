"use client";

import { useState, useEffect, useRef } from "react";
import { Reveal } from "@/components/shared";

export default function Feature3() {
    const [isVisible, setIsVisible] = useState(false);
    const [step, setStep] = useState(0);
    const sectionRef = useRef<HTMLElement>(null);

    // Initial observer to detect when section comes into view
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isVisible) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, [isVisible]);

    // Infinite step sequencer once visible
    useEffect(() => {
        let isActive = true;

        const playSequence = () => {
            if (!isActive || !isVisible) return;
            setStep(0);

            const sequence = [
                { step: 1, delay: 500 },
                { step: 2, delay: 1500 },
                { step: 3, delay: 6000 },
            ];

            const timers = sequence.map(({ step: nextStep, delay }) =>
                setTimeout(() => {
                    if (isActive) {
                        if (nextStep === 3) {
                            playSequence();
                        } else {
                            setStep(nextStep);
                        }
                    }
                }, delay)
            );

            return timers;
        };

        const currentTimers = playSequence();

        return () => {
            isActive = false;
            currentTimers?.forEach(clearTimeout);
        };
    }, [isVisible]);

    return (
        <section
            ref={sectionRef}
            className="w-full bg-surface flex items-center justify-center px-6 lg:px-[194px] py-16 md:py-24"
            aria-labelledby="feature-whatsapp-heading"
        >
            <div className="max-w-6xl w-full flex flex-col lg:flex-row items-start lg:items-stretch gap-12 lg:gap-16">

                {/* Text Column — heading at top, description at bottom */}
                <div className="flex-1 flex flex-col items-start gap-6 lg:justify-between w-full">
                    <div className="flex flex-col items-start gap-4 lg:gap-5">
                        <Reveal>
                            <p className="text-base leading-snug font-body text-text-muted">
                                Meet your customers where they already are.
                            </p>
                        </Reveal>
                        <Reveal delay={200}>
                            <h2
                                id="feature-whatsapp-heading"
                                className="max-w-md text-3xl md:text-4xl leading-tight font-heading text-text-heading"
                            >
                                Turn WhatsApp into a Support Superpower
                            </h2>
                        </Reveal>
                    </div>
                    <Reveal delay={400}>
                        <p className="max-w-lg text-base leading-snug font-body text-text-muted">
                            Connect your WhatsApp channel and let our AI provide instant
                            responses, with seamless handoffs to human agents the moment a
                            conversation requires a personal touch.
                        </p>
                    </Reveal>
                </div>

                {/* WhatsApp Chat Preview Card Container */}
                <div className="flex-1 w-full rounded-xl bg-surface-light flex items-center justify-center p-8 md:p-12 relative isolate overflow-hidden">
                    <div className="w-full max-w-(--width-chat-preview) flex flex-col items-center justify-end relative min-h-(--height-feature-preview)">

                        {/* The Chat Card (hidden initially, pops in at Step 2) */}
                        <div
                            className={`w-full shadow-card rounded-2xl bg-surface border border-border-warm flex flex-col overflow-hidden absolute bottom-(--spacing-card-bottom) transition-all duration-700 ease-in-out origin-center z-10 ${step >= 2
                                ? "opacity-100 scale-100 translate-y-0"
                                : "opacity-0 scale-50 translate-y-20 pointer-events-none"
                                }`}
                        >
                            {/* Header */}
                            <div className="h-12 bg-whatsapp border-b border-border-default flex items-center px-4">
                                <span className="text-sm font-medium text-surface">
                                    Chat on Whatsapp
                                </span>
                            </div>

                            {/* Chat Body */}
                            <div className="flex-1 bg-surface-light flex flex-col p-4">
                                <div className="flex flex-col items-start gap-1">
                                    <span className="text-xs text-brand-dark opacity-60 leading-snug ml-7">
                                        Haven Spa · AI Assistant
                                    </span>
                                    <div className="flex items-start gap-2">
                                        <div
                                            className="w-5 h-5 rounded-full bg-brand-primary shrink-0 mt-0.5"
                                            aria-hidden="true"
                                        />
                                        <div className="rounded-xl rounded-tl-sm bg-surface py-2 px-3 border border-border-warm/50 max-w-xs">
                                            <p className="text-xs font-body leading-snug text-brand-dark">
                                                Hi there,
                                                <br />
                                                I&apos;m the Haven Spa Assistant. Are you here to Explore
                                                our products or do you need Support with an existing
                                                service? You can talk to us on your favourite app,
                                                WHATSAPP
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Input Area */}
                            <div className="bg-surface border-t border-surface-muted p-4 flex flex-col gap-3">
                                <div className="rounded-2xl bg-surface-light p-4 flex flex-col gap-4">
                                    <span className="text-xs font-body text-text-muted opacity-60 leading-snug">
                                        Tell me what you want to achieve
                                    </span>
                                    <div className="flex items-center justify-between">
                                        <button className="text-xs text-text-muted flex items-center gap-1.5 hover:text-brand-dark transition-colors font-medium">
                                            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                                <path d="M12 5v14M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            Attach
                                        </button>
                                        <div className="flex items-center gap-2.5">
                                            {/* Microphone Icon */}
                                            <div className="w-7 h-7 rounded-full bg-surface-muted flex items-center justify-center text-text-muted" aria-hidden="true">
                                                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                                                    <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                                                    <line x1="12" y1="19" x2="12" y2="23" />
                                                    <line x1="8" y1="23" x2="16" y2="23" />
                                                </svg>
                                            </div>
                                            {/* Send Button */}
                                            <div className="w-7 h-7 rounded-full bg-whatsapp flex items-center justify-center text-surface" aria-hidden="true">
                                                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                                    <path d="M12 19V5M5 12l7-7 7 7" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-center text-xs text-text-muted font-body">
                                    Powered by Tickki
                                </p>
                            </div>
                        </div>

                        {/* WhatsApp Badge (appears at Step 1, anchors bottom at Step 2+) */}
                        <div
                            className={`shadow-card rounded-full bg-whatsapp py-2.5 px-6 h-12 flex items-center justify-center gap-2 absolute z-20 transition-all duration-700 ease-in-out ${step >= 2
                                ? "-bottom-(--spacing-badge-offset) left-1/2 -translate-x-1/2 opacity-100 scale-100"
                                : step === 1
                                    ? "bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 opacity-100 scale-100"
                                    : "bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 opacity-0 scale-50"
                                }`}
                        >
                            <svg className="w-6 h-6 text-surface shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            <span className="text-sm font-medium text-surface leading-tight whitespace-nowrap">
                                Whatsapp
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
