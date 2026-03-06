"use client";

import { useState } from 'react';
import type { FC } from 'react';
import { Reveal } from '@/components/shared';

const ChevronDownIcon = ({ className = "" }: { className?: string }) => (
    <svg className={className} width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1L7 7L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const ArrowUpRightIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.66667 11.3333L11.3333 4.66667M11.3333 4.66667H4.66667M11.3333 4.66667V11.3333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const SparkleIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 2C10.5523 2 11 2.44772 11 3V9H17C17.5523 9 18 9.44772 18 10C18 10.5523 17.5523 11 17 11H11V17C11 17.5523 10.5523 18 10 18C9.44772 18 9 17.5523 9 17V11H3C2.44772 11 2 10.5523 2 10C2 9.44772 2.44772 9 3 9H9V3C9 2.44772 9.44772 2 10 2Z" fill="currentColor" />
        <path d="M14.5 4.5L15.5 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M15.5 14.5L14.5 15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M5.5 14.5L4.5 15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M4.5 4.5L5.5 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
);

const FAQuestions = [
    {
        question: "Do you support WhatsApp?",
        answer: "Yes, Tickki seamlessly integrates with WhatsApp, allowing you to manage customer conversations directly from your unified inbox."
    },
    {
        question: "Can a human take over?",
        answer: "Absolutely. Our AI handles initial inquiries, but your team can step in at any time to take over the conversation seamlessly."
    },
    {
        question: "Is AI mandatory?",
        answer: "No, you can configure the level of AI automation that fits your needs. You can use it just for drafting suggestions, or have it handle complete interactions."
    },
    {
        question: "What types of projects do you typically work on?",
        answer: "We support a wide range of businesses and use cases, from customer support for e-commerce to lead qualification for agencies."
    },
    {
        question: "How fast is the setup?",
        answer: "Setting up Tickki takes just a few minutes. You can connect your channels and start managing your inbox immediately."
    },
];

const FAQ: FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (idx: number) => {
        setOpenIndex(openIndex === idx ? null : idx);
    };

    return (
        <section className="w-full relative bg-surface-light overflow-hidden flex flex-col items-center py-[60px] md:py-[100px] px-6 lg:px-[194px] box-border text-left font-body">
            <div className="w-full flex flex-col lg:flex-row items-start gap-8 lg:gap-16 max-w-[1280px]">

                {/* Left Column (Header & Actions) */}
                <div className="flex-1 lg:max-w-[50%] flex flex-col items-start justify-between gap-6 lg:gap-5 lg:self-stretch lg:h-[500px]">
                    <div className="flex flex-col items-start gap-4 w-full">
                        <Reveal>
                            <div className="relative leading-[109%] text-text-muted text-[16px]">FAQ</div>
                        </Reveal>
                        <Reveal delay={200}>
                            <h2 className="w-full xl:max-w-[579px] m-0 text-3xl md:text-4xl leading-tight font-heading text-text-heading">
                                All Your Questions Answered
                            </h2>
                        </Reveal>

                        <Reveal delay={400}>
                            <button className="h-10 mt-1 rounded-xl bg-white flex items-center justify-center py-2 px-5 box-border border-gainsboro border hover:bg-surface-muted transition-colors cursor-pointer text-[14px] font-sans text-brand-dark">
                                <div className="flex items-center gap-2">
                                    <span className="tracking-[-0.13px] leading-5 font-medium">Contact Support</span>
                                    <div className="text-text-muted flex items-center justify-center">
                                        <ArrowUpRightIcon />
                                    </div>
                                </div>
                            </button>
                        </Reveal>
                    </div>

                    {/* Ask AI - desktop only (positioned at bottom of left column) */}
                    <Reveal delay={600} className="hidden lg:flex">
                        <div className="flex items-center gap-2.5 text-text-muted text-[16px] cursor-pointer hover:text-brand-dark transition-colors">
                            <span className="leading-[120%] font-medium">Ask AI about Tickki</span>
                            <div className="flex items-center justify-center text-brand-primary">
                                <SparkleIcon />
                            </div>
                        </div>
                    </Reveal>
                </div>

                {/* Right Column (Questions List) */}
                <Reveal delay={200} className="flex-[1.5] w-full">
                    <div className="w-full rounded-3xl bg-white flex flex-col items-start py-2 px-5 md:px-6 lg:px-8 text-[17px] md:text-[18px] lg:text-[20px]">
                        {FAQuestions.map((item, idx) => {
                            const isOpen = openIndex === idx;
                            return (
                                <div
                                    key={idx}
                                    className="self-stretch border-b border-border-default last:border-0 flex flex-col items-start group cursor-pointer transition-colors my-1 bg-transparent"
                                    onClick={() => toggleAccordion(idx)}
                                >
                                    <div className="self-stretch flex items-center justify-between py-5 md:py-6 px-2 md:px-4 gap-4">
                                        <span className={`leading-[120%] font-medium transition-colors ${isOpen ? 'text-brand-primary' : 'text-brand-dark'}`}>{item.question}</span>
                                        <div className={`w-5 h-5 flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-brand-primary' : 'text-text-muted group-hover:text-brand-dark'}`}>
                                            <ChevronDownIcon />
                                        </div>
                                    </div>

                                    {/* Accordion Answer */}
                                    <div
                                        className="px-2 md:px-4 overflow-hidden transition-all duration-300 ease-in-out"
                                        style={{
                                            maxHeight: isOpen ? '200px' : '0',
                                            opacity: isOpen ? 1 : 0,
                                            paddingBottom: isOpen ? '24px' : '0'
                                        }}
                                    >
                                        <p className="m-0 text-[15px] md:text-[16px] text-[#475569] leading-[150%]">
                                            {item.answer}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </Reveal>
            </div>

            {/* Ask AI - mobile only (centered below accordion) */}
            <Reveal delay={600} className="flex lg:hidden mt-8 justify-center w-full">
                <div className="flex items-center gap-2.5 text-text-muted text-[16px] cursor-pointer hover:text-brand-dark transition-colors">
                    <span className="leading-[120%] font-medium">Ask AI about Tickki</span>
                    <div className="flex items-center justify-center text-brand-primary">
                        <ArrowUpRightIcon />
                    </div>
                </div>
            </Reveal>
        </section>
    );
};

export default FAQ;
