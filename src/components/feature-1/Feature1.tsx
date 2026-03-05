import { Reveal } from "@/components/shared";

export default function Feature1() {
    return (
        <section
            className="w-full h-(--height-feature-section) bg-surface flex items-center justify-center px-6 lg:px-[194px]"
            aria-labelledby="feature-ai-heading"
        >
            <div className="max-w-6xl w-full flex flex-col lg:flex-row items-center gap-16">
                {/* Text Column */}
                <div className="flex-1 flex flex-col items-start justify-between h-(--height-feature-card)">
                    <div className="flex flex-col items-start gap-5">
                        <Reveal>
                            <p className="text-base leading-snug font-body text-text-muted">
                                Stop typing the same answers over and over.
                            </p>
                        </Reveal>
                        <Reveal delay={200}>
                            <h2
                                id="feature-ai-heading"
                                className="max-w-md text-4xl leading-tight font-heading text-text-heading"
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
                <div className="flex-1 w-full h-(--height-feature-card) rounded-xl bg-surface-light overflow-hidden flex items-center justify-center p-10">
                    <div className="flex flex-col items-start gap-2.5">
                        {/* Label */}
                        <p className="text-sm font-sans text-brand-dark opacity-60 leading-snug">
                            Haven Spa · AI Assistant
                        </p>
                        {/* Bubble */}
                        <div className="flex items-start gap-2.5">
                            <div
                                className="w-9 h-9 rounded-full bg-brand-primary shrink-0"
                                aria-hidden="true"
                            />
                            <div className="shadow-chat-bubble rounded-xl bg-surface py-3.5 px-5">
                                <p className="text-lg leading-snug font-body text-brand-dark">
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
        </section>
    );
}
