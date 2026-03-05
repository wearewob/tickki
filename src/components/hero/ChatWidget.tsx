"use client";

import { useState, useEffect, useRef } from "react";

const QUICK_ACTIONS = [
    { icon: "📅", label: "Book Appointment" },
    { icon: "🔄", label: "Reschedule Appointment" },
    { icon: "❌", label: "Cancel Appointment" },
    { icon: "📝", label: "Make a Complaint" },
    { icon: "⭐", label: "Make a Review" },
    { icon: "💳", label: "Pay for a Service" },
];

export default function ChatWidget() {
    const [step, setStep] = useState(0);
    const [userInputValue, setUserInputValue] = useState("");
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollTo({
                top: scrollContainerRef.current.scrollHeight,
                behavior: "smooth"
            });
        }
    }, [step]);

    // Animation sequence timings
    useEffect(() => {
        let isActive = true;
        const playSequence = () => {
            if (!isActive) return;
            setStep(0);
            setUserInputValue("");

            const sequence = [
                { step: 1, delay: 500 },  // Show AI greeting (faster)
                { step: 2, delay: 1200 }, // Show quick actions (faster)
                { step: 3, delay: 2000 }, // Start typing user input 1 (faster)
                { step: 4, delay: 3500 }, // Send user message 1 (faster)
                { step: 5, delay: 4000 }, // AI typing indicator 1 (faster)
                { step: 6, delay: 5500 }, // AI final response 1 (faster)
                { step: 8, delay: 7000 }, // Start typing user input 2
                { step: 9, delay: 8500 }, // Send user message 2
                { step: 10, delay: 9000 }, // AI typing indicator 2
                { step: 11, delay: 10500 }, // AI final response 2 (booking confirmed)
                { step: 12, delay: 13500 }, // Wait, then trigger reset loop
            ];

            const timers = sequence.map(({ step: nextStep, delay }) =>
                setTimeout(() => {
                    if (isActive) {
                        if (nextStep === 12) {
                            playSequence(); // loop back to start
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
    }, []);

    // Simulate typing effect for the input field
    useEffect(() => {
        let typingInterval: NodeJS.Timeout;

        if (step === 3 || step === 8) {
            const targetText = step === 3 ? "I'd like to book an appointment" : "Tomorrow at 2pm";
            let i = 0;
            typingInterval = setInterval(() => {
                if (i <= targetText.length) {
                    setUserInputValue(targetText.slice(0, i));
                    i++;
                } else {
                    clearInterval(typingInterval);
                }
            }, 30); // Speed of typing (faster)
        } else if (step === 4 || step === 9) {
            setUserInputValue(""); // Clear input when message is "sent"
        }

        return () => {
            if (typingInterval) clearInterval(typingInterval);
        };
    }, [step]);

    return (
        <article
            className="w-[416px] shadow-card rounded-lg bg-surface border border-border-warm overflow-hidden flex flex-col"
            aria-label="Chat widget preview"
        >
            {/* Header */}
            <header className="border-b border-border-default px-4 py-3 flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-brand-primary shrink-0" aria-hidden="true" />
                <div className="flex flex-col">
                    <span className="text-xs font-medium text-brand-dark leading-tight">
                        Haven Spa Clinic
                    </span>
                    <span className="text-xs text-text-subtle leading-tight">
                        Luxury comfort home for elites
                    </span>
                </div>
            </header>

            {/* Chat Body */}
            <div
                ref={scrollContainerRef}
                className="flex flex-col bg-surface-light p-4 gap-3 h-[320px] min-h-[320px] shrink-0 overflow-y-auto"
            >
                {/* AI Greeting Message */}
                <div
                    className={`flex flex-col gap-1 transition-opacity duration-500 ${step >= 1 ? "opacity-100" : "opacity-0"
                        }`}
                >
                    <span className="text-[10px] text-brand-dark opacity-60 leading-snug ml-7">
                        Haven Spa · AI Assistant
                    </span>
                    <div className="flex items-start gap-2">
                        <div className="w-5 h-5 rounded-full bg-brand-primary shrink-0 mt-0.5" aria-hidden="true" />
                        <div className="rounded-xl rounded-tl-sm bg-surface py-3 px-4">
                            <p className="text-xs font-body leading-snug text-brand-dark">
                                Hi there,
                                <br />
                                I&apos;m the Haven Spa Assistant. Are you here to Explore our
                                products or do you need Support with an existing service?
                            </p>
                        </div>
                    </div>
                </div>

                {/* Quick Action Chips */}
                <div
                    className={`flex flex-wrap gap-1 transition-all duration-700 ml-7 ${step >= 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
                        }`}
                >
                    {QUICK_ACTIONS.map(({ icon, label }) => (
                        <button
                            key={label}
                            className="rounded-full bg-surface border border-surface-muted py-1.5 px-3 text-[10px] font-medium leading-snug text-brand-dark flex items-center gap-1 hover:border-brand-primary transition-colors hover:text-brand-primary"
                        >
                            <span className="text-xs" aria-hidden="true">{icon}</span>
                            {label}
                        </button>
                    ))}
                </div>

                {/* User Message */}
                {step >= 4 && (
                    <div className="flex flex-col gap-1 items-end mt-2 animate-in fade-in slide-in-from-bottom-2 duration-300">
                        <div className="rounded-xl rounded-tr-sm bg-brand-primary text-surface py-3 px-4">
                            <p className="text-xs font-body leading-snug">
                                I&apos;d like to book an appointment
                            </p>
                        </div>
                    </div>
                )}

                {/* AI Typing / Response 1 */}
                {step >= 5 && (
                    <div className="flex flex-col gap-1 animate-in fade-in duration-300">
                        <span className="text-[10px] text-brand-dark opacity-60 leading-snug ml-7">
                            Haven Spa · AI Assistant
                        </span>
                        <div className="flex items-start gap-2">
                            <div className="w-5 h-5 rounded-full bg-brand-primary shrink-0 mt-0.5" aria-hidden="true" />
                            <div className="rounded-xl rounded-tl-sm bg-surface py-3 px-4 flex items-center min-h-[40px]">
                                {step === 5 ? (
                                    // Typing Indicator
                                    <div className="flex gap-1 items-center px-1">
                                        <div className="w-1.5 h-1.5 rounded-full bg-brand-primary/60 animate-bounce" style={{ animationDelay: "0ms" }} />
                                        <div className="w-1.5 h-1.5 rounded-full bg-brand-primary/60 animate-bounce" style={{ animationDelay: "150ms" }} />
                                        <div className="w-1.5 h-1.5 rounded-full bg-brand-primary/60 animate-bounce" style={{ animationDelay: "300ms" }} />
                                    </div>
                                ) : (
                                    // Final AI Response
                                    <p className="text-xs font-body leading-snug text-brand-dark">
                                        I&apos;d love to help you book! What date and time works best for you?
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {/* User Message 2 */}
                {step >= 9 && (
                    <div className="flex flex-col gap-1 items-end mt-2 animate-in fade-in slide-in-from-bottom-2 duration-300">
                        <div className="rounded-xl rounded-tr-sm bg-brand-primary text-surface py-3 px-4">
                            <p className="text-xs font-body leading-snug">
                                Tomorrow at 2pm
                            </p>
                        </div>
                    </div>
                )}

                {/* AI Typing / Response 2 */}
                {step >= 10 && (
                    <div className="flex flex-col gap-1 animate-in fade-in duration-300">
                        <span className="text-[10px] text-brand-dark opacity-60 leading-snug ml-7">
                            Haven Spa · AI Assistant
                        </span>
                        <div className="flex items-start gap-2">
                            <div className="w-5 h-5 rounded-full bg-brand-primary shrink-0 mt-0.5" aria-hidden="true" />
                            <div className="rounded-xl rounded-tl-sm bg-surface py-3 px-4 flex items-center min-h-[40px]">
                                {step === 10 ? (
                                    // Typing Indicator
                                    <div className="flex gap-1 items-center px-1">
                                        <div className="w-1.5 h-1.5 rounded-full bg-brand-primary/60 animate-bounce" style={{ animationDelay: "0ms" }} />
                                        <div className="w-1.5 h-1.5 rounded-full bg-brand-primary/60 animate-bounce" style={{ animationDelay: "150ms" }} />
                                        <div className="w-1.5 h-1.5 rounded-full bg-brand-primary/60 animate-bounce" style={{ animationDelay: "300ms" }} />
                                    </div>
                                ) : (
                                    // Final AI Response 2
                                    <div className="flex flex-col gap-2">
                                        <p className="text-xs font-body leading-snug text-brand-dark">
                                            Perfect! Your appointment is confirmed for <span className="font-semibold">tomorrow at 2:00 PM</span>.
                                        </p>
                                        <div className="rounded-md bg-green-50 border border-green-200 p-2 flex items-center gap-2">
                                            <span className="text-[10px] text-green-700 bg-green-200/50 w-5 h-5 rounded-full flex items-center justify-center shrink-0">✓</span>
                                            <span className="text-[10px] font-medium text-green-800">Booking Confirmed</span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Input Area */}
            <footer className="bg-surface border-t border-surface-muted p-3 flex flex-col gap-3 shrink-0">
                <div className="rounded-lg bg-surface-light border border-border-warm/60 p-2.5 flex flex-col gap-2 relative h-[72px] shrink-0">
                    {/* Simulated Input Field */}
                    <div className="h-4 flex items-center">
                        {(step < 3 || (step >= 4 && step < 8)) && !userInputValue ? (
                            <span className="text-xs font-body text-text-muted-50 leading-snug">
                                Tell me what you want to achieve
                            </span>
                        ) : (
                            <span className="text-xs font-body text-brand-dark leading-snug">
                                {userInputValue}
                                {(step === 3 || step === 8) && (
                                    <span className="inline-block w-0.5 h-3 bg-brand-primary ml-0.5 animate-pulse" />
                                )}
                            </span>
                        )}
                    </div>

                    <div className="flex items-center justify-between mt-1">
                        <button className="text-[10px] font-medium text-text-muted flex items-center gap-1 hover:text-brand-dark transition-colors px-1">
                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                            </svg>
                            Attach
                        </button>
                        <div className="flex items-center gap-1.5">
                            <button className="w-6 h-6 rounded-full bg-surface-muted flex items-center justify-center text-text-muted hover:bg-border-warm transition-colors">
                                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </button>
                            <button
                                className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors ${userInputValue.length > 0
                                    ? "bg-brand-primary text-surface"
                                    : "bg-surface-muted text-text-muted-50"
                                    }`}
                            >
                                <svg className="w-3 h-3 translate-x-[1px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <p className="text-center text-[10px] text-text-muted">
                    <a
                        href="https://tickki.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-muted hover:text-brand-primary transition-colors inline-flex items-center gap-1"
                    >
                        Powered by <span className="font-semibold text-brand-dark">Tickki</span>
                    </a>
                </p>
            </footer>
        </article>
    );
}
