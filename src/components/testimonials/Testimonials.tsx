'use client';
import type { FC } from 'react';
import { useState, useRef } from 'react';
import Image from 'next/image';
import { Reveal } from '@/components/shared';

const testimonialsData = [
    {
        name: "Hikmet Atçeken",
        handle: "@hiatceken",
        avatar: "https://i.pravatar.cc/150?img=11",
        quote: "Pulsefy's our daily tool to bypass averages and reveal true insights, for the whole team!",
        icon: "/x-icon.svg",
    },
    {
        name: "Arda Guler",
        handle: "@ardaguler_",
        avatar: "https://i.pravatar.cc/150?img=12",
        quote: "Pulsefy levels the analytics field for our team, enabling both beginners and pros to easily bypass average data and uncover the actionable insights that truly shape our marketing strategies.",
        icon: "/x-icon.svg",
    },
    {
        name: "Maria Ancelotti",
        handle: "@maria_ancelotti",
        avatar: "https://i.pravatar.cc/150?img=5",
        quote: "From novice to pro, Pulsefy helps our team uncover the extraordinary in our marketing data!",
        icon: "/x-icon.svg",
    }
];

const AsteriskIcon = () => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="14" y1="2" x2="14" y2="26" stroke="#F87171" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="2" y1="14" x2="26" y2="14" stroke="#F87171" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="4.93" y1="4.93" x2="23.07" y2="23.07" stroke="#F87171" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="23.07" y1="4.93" x2="4.93" y2="23.07" stroke="#F87171" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
);

const TestimonialCard: FC<{ testimonial: typeof testimonialsData[0] }> = ({ testimonial }) => (
    <div className="w-full rounded-[18px] bg-[#F8F8F8] flex flex-col items-start p-6 gap-5 hover:shadow-md transition-shadow relative">
        {/* Asterisk icon top-right */}
        <div className="absolute top-5 right-5 opacity-70">
            <AsteriskIcon />
        </div>
        {/* Avatar + Name + Handle */}
        <div className="self-stretch flex items-center gap-3 pr-10">
            <div className="h-11 w-11 relative rounded-full overflow-hidden shrink-0">
                <Image
                    src={testimonial.avatar}
                    fill
                    className="object-cover"
                    sizes="44px"
                    alt={testimonial.name}
                />
            </div>
            <div className="flex flex-col items-start justify-center gap-0.5">
                <div className="relative tracking-tight leading-snug font-semibold text-[#0f172a] text-[15px]">
                    {testimonial.name}
                </div>
                <div className="text-[13px] text-slate-400 leading-tight">
                    {testimonial.handle}
                </div>
            </div>
        </div>
        {/* Quote */}
        <div className="w-full">
            <p className="m-0 self-stretch relative tracking-tight leading-relaxed text-[14px] text-slate-700">
                {testimonial.quote}
            </p>
        </div>
    </div>
);

const Testimonials: FC = () => {
    const [activeIdx, setActiveIdx] = useState(0);
    const scrollRef = useRef<HTMLDivElement>(null);

    const handleScroll = () => {
        if (!scrollRef.current) return;
        const { scrollLeft, offsetWidth } = scrollRef.current;
        // Each card is approximately 80% of viewport width with a 16px gap
        const cardWidth = offsetWidth * 0.80 + 16;
        const idx = Math.round(scrollLeft / cardWidth);
        setActiveIdx(Math.max(0, Math.min(idx, testimonialsData.length - 1)));
    };

    return (
        <section className="w-full relative bg-white overflow-hidden flex flex-col items-center py-[60px] md:py-[100px] px-0 md:px-6 lg:px-[194px] box-border gap-10 md:gap-16 text-left text-[16px] text-darkslategray font-radio-grotesk">
            {/* Header */}
            <div className="flex flex-col items-center gap-4 px-6 md:px-0">
                <Reveal>
                    <div className="relative leading-[120%] uppercase text-[#F87171] tracking-widest font-semibold text-[13px] text-center">
                        Customers Testimonials
                    </div>
                </Reveal>
                <Reveal delay={200}>
                    <h2 className="m-0 relative text-3xl md:text-4xl leading-tight font-heading text-text-heading text-center">
                        Voices From Our Community
                    </h2>
                </Reveal>
            </div>

            {/* Desktop: Grid layout */}
            <div className="hidden md:flex flex-wrap justify-center items-start gap-6 text-[14px] text-gray-800 font-body w-full max-w-[1280px] px-6 lg:px-0">
                {testimonialsData.map((testimonial, idx) => (
                    <Reveal key={idx} delay={300 + idx * 100} className="w-full md:w-[320px]">
                        <TestimonialCard testimonial={testimonial} />
                    </Reveal>
                ))}
            </div>

            {/* Mobile: Horizontal Carousel */}
            <div className="flex flex-col items-center gap-4 w-full md:hidden">
                <div
                    ref={scrollRef}
                    onScroll={handleScroll}
                    className="w-full flex flex-row gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar pl-6 pr-6"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {testimonialsData.map((testimonial, idx) => (
                        <div
                            key={idx}
                            className="snap-center shrink-0 w-[80vw]"
                        >
                            <TestimonialCard testimonial={testimonial} />
                        </div>
                    ))}
                </div>
                {/* Dot indicators */}
                <div className="flex items-center gap-2">
                    {testimonialsData.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => {
                                if (!scrollRef.current) return;
                                const cardWidth = scrollRef.current.offsetWidth * 0.80 + 16;
                                scrollRef.current.scrollTo({ left: idx * cardWidth, behavior: 'smooth' });
                                setActiveIdx(idx);
                            }}
                            className={`rounded-full transition-all duration-300 ${idx === activeIdx
                                ? 'w-6 h-2 bg-[#0f172a]'
                                : 'w-2 h-2 bg-slate-300'
                                }`}
                            aria-label={`Go to testimonial ${idx + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
