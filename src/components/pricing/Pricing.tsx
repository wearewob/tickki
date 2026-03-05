"use client";

import { useState, type FC } from 'react';
import { Reveal } from '@/components/shared';

const CheckIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.6666 5L7.49992 14.1667L3.33325 10" stroke="#5E30EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const Pricing: FC = () => {
    const [isYearly, setIsYearly] = useState(true);

    return (
        <section className="w-full relative bg-surface-light flex flex-col items-center justify-center py-[100px] px-6 md:px-[194px] box-border text-center text-[48px] text-brand-dark font-heading">
            <div className="w-full flex flex-col items-center gap-16 max-w-[1280px]">
                <div className="self-stretch overflow-hidden flex flex-col items-center">
                    <div className="flex flex-col items-center gap-6">
                        <Reveal>
                            <h2 className="self-stretch relative leading-[120%] m-0">Start growing today</h2>
                        </Reveal>
                        <Reveal delay={200}>
                            <div className="relative text-[16px] leading-[120%] font-body text-text-muted text-center">Choose a plan that fits your support team. Upgrade anytime.</div>
                        </Reveal>
                    </div>
                </div>

                <div className="flex flex-col items-center text-left text-[14px] text-text-muted font-manrope w-full">
                    <div className="flex flex-col items-center gap-12 w-full">
                        {/* Billing Toggle */}
                        <div className="flex items-center relative isolate">
                            <div className="flex items-center justify-center gap-3 z-[0] shrink-0">
                                <span className={`tracking-[-0.28px] leading-[19.6px] font-medium transition-colors ${!isYearly ? "text-brand-dark" : "text-text-muted"}`}>Monthly</span>

                                <button
                                    onClick={() => setIsYearly(!isYearly)}
                                    className={`w-16 rounded-[20px] bg-brand-primary overflow-hidden shrink-0 flex items-center p-1 box-border cursor-pointer transition-all ${isYearly ? "justify-end" : "justify-start"}`}
                                >
                                    <div className="w-[28.7px] h-[28.7px] relative shadow-[0px_-2px_7px_-3px_#0c120c_inset] rounded-[20px] bg-white shrink-0" />
                                </button>

                                <span className={`tracking-[-0.28px] leading-[19.6px] font-medium transition-colors ${isYearly ? "text-brand-dark" : "text-text-muted"}`}>Yearly</span>
                            </div>
                            <div className="absolute top-1/2 -translate-y-1/2 -right-[90px] shadow-[0px_2px_4px_-2px_rgba(0,_0,_0,_0.25)] rounded-full bg-white flex items-center justify-center py-1.5 px-2 z-[1] text-[12px] text-brand-primary font-onest">
                                <span className="tracking-[-0.24px] leading-[14.4px] font-semibold whitespace-nowrap">Save 20%</span>
                            </div>
                        </div>

                        {/* Pricing Cards */}
                        <div className="w-full flex flex-col lg:flex-row items-stretch justify-center gap-5 text-[24px] text-brand-dark font-body">

                            {/* Pro Plan */}
                            <Reveal delay={400} className="flex-1 w-full max-w-[430px]">
                                <div className="w-full h-full rounded-[20px] bg-surface-muted flex flex-col p-6 relative isolate gap-6 border border-gainsboro">
                                    <div className="flex flex-col gap-6 z-[0]">
                                        <div className="flex flex-col">
                                            <h3 className="leading-[120%] m-0 text-[20px]">Pro</h3>
                                        </div>
                                        <div className="flex flex-col gap-[15.2px] text-[32px]">
                                            <div className="flex items-center gap-2 transition-opacity">
                                                <span className="leading-[120%] font-semibold">{isYearly ? "$144" : "$15"}</span>
                                                <span className="text-[18px] text-text-muted tracking-[-0.36px] font-medium">{isYearly ? "/year" : "/month"}</span>
                                            </div>
                                            <p className="m-0 text-[14px] text-text-muted leading-[120%] font-medium text-left">
                                                Suitable for small businesses with just one brand
                                            </p>
                                        </div>
                                    </div>

                                    <button className="w-full h-9 shadow-btn rounded-md bg-surface text-brand-dark border border-border-default text-sm font-medium tracking-tight leading-5 flex items-center justify-center px-4 hover:bg-surface-light transition-colors relative z-[1] cursor-pointer font-sans">
                                        Get Started Today
                                    </button>

                                    <div className="flex flex-col gap-6 z-[2] text-[14px] flex-1">
                                        <span className="leading-[120%] font-medium">30-days free trial</span>

                                        <div className="w-full h-px border-t border-gainsboro border-dashed" />

                                        <div className="flex flex-col gap-[15px] text-[14px] text-text-muted">
                                            <span className="leading-[120%] font-semibold">Includes:</span>
                                            <div className="flex flex-col gap-[7px] text-[14px]">
                                                {[
                                                    "AI profile", "Push notifications", "Email alerts",
                                                    "Visitor profiles", "AI inbox experience",
                                                    "Web chat widget included", "Realtime updates"
                                                ].map((feature, idx) => (
                                                    <div key={idx} className="flex items-center gap-2">
                                                        <div className="w-5 h-5 flex items-center justify-center shrink-0">
                                                            <CheckIcon />
                                                        </div>
                                                        <span className="tracking-[-0.32px] leading-[120%] font-medium">{feature}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="w-full h-px border-t border-gainsboro border-dashed mt-auto" />

                                        <div className="flex flex-col gap-[7px] text-[14px] text-text-muted">
                                            {[
                                                "1 AI Agents", "1,000 messages per month",
                                                "Unlimited Files per conversation", "Unlimited file size"
                                            ].map((feature, idx) => (
                                                <div key={idx} className="flex items-center gap-2">
                                                    <div className="w-5 h-5 flex items-center justify-center shrink-0">
                                                        <CheckIcon />
                                                    </div>
                                                    <span className="tracking-[-0.32px] leading-[120%] font-medium">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </Reveal>

                            {/* Business Plan (Highlighted) */}
                            <Reveal delay={500} className="flex-1 w-full max-w-[430px]">
                                <div className="w-full h-full rounded-[20px] bg-white border border-gainsboro flex flex-col p-6 relative isolate gap-6 text-[14px] xl:scale-[1.02] z-10">
                                    <div className="absolute top-0 right-8 rounded-b-sm bg-brand-primary flex items-center justify-center pt-[7px] px-4 pb-2 z-[4] text-white">
                                        <span className="leading-[120%] text-[14px]">Best Value!</span>
                                    </div>

                                    <div className="flex flex-col gap-6 z-[0]">
                                        <div className="flex flex-col">
                                            <h3 className="leading-[120%] m-0 text-[20px] text-brand-dark">Business</h3>
                                        </div>
                                        <div className="flex flex-col gap-[15.2px] text-[30px] text-brand-dark">
                                            <div className="flex items-center gap-2 transition-opacity">
                                                <span className="leading-[120%] font-semibold">{isYearly ? "$240" : "$25"}</span>
                                                <span className="text-[18px] text-text-muted tracking-[-0.36px] font-medium">{isYearly ? "/year" : "/month"}</span>
                                            </div>
                                            <p className="m-0 text-[14px] text-text-muted leading-[120%] font-medium text-left">
                                                Suitable if you’re managing different brands
                                            </p>
                                        </div>
                                    </div>

                                    <button className="w-full h-9 shadow-btn-strong rounded-md bg-brand-dark text-surface text-sm font-medium tracking-tight leading-5 flex items-center justify-center px-4 hover:opacity-90 transition-opacity relative z-[1] cursor-pointer font-sans">
                                        Get Started Today
                                    </button>

                                    <div className="flex flex-col gap-6 z-[2] text-brand-dark flex-1 text-[14px]">
                                        <span className="leading-[120%] font-medium">Includes Everything in Pro</span>

                                        <div className="w-full h-px border-t border-gainsboro border-dashed" />

                                        <div className="flex flex-col gap-[15px] text-[14px] text-text-muted">
                                            <span className="leading-[120%] font-semibold">Includes:</span>
                                            <div className="flex flex-col gap-[7px] text-[14px]">
                                                {[
                                                    "Voice notes", "Chatbot rules", "Webhooks/API access",
                                                    "20 AI Agents", "50,000 messages per month", "Custom branding"
                                                ].map((feature, idx) => (
                                                    <div key={idx} className="flex items-center gap-2">
                                                        <div className="w-5 h-5 flex items-center justify-center shrink-0">
                                                            <CheckIcon />
                                                        </div>
                                                        <span className="tracking-[-0.32px] leading-[120%] font-medium">{feature}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Reveal>

                            {/* Enterprise Plan */}
                            <Reveal delay={600} className="flex-1 w-full max-w-[430px]">
                                <div className="w-full h-full rounded-[20px] bg-surface-muted flex flex-col p-6 relative isolate gap-6 border border-gainsboro">
                                    <div className="flex flex-col gap-6 z-[1] font-manrope">
                                        <div className="flex flex-col">
                                            <h3 className="tracking-[-0.96px] leading-[28.8px] m-0 text-[20px] text-brand-dark">Enterprise</h3>
                                        </div>
                                        <div className="flex flex-col gap-[15.2px] font-body text-[18px] text-brand-dark">
                                            <p className="m-0 text-[14px] text-text-muted leading-[120%] font-medium text-left">
                                                Suitable for small businesses with just one brand
                                            </p>
                                        </div>
                                    </div>

                                    <button className="w-full h-9 shadow-btn rounded-md bg-surface text-brand-dark border border-border-default text-sm font-medium tracking-tight leading-5 flex items-center justify-center px-4 hover:bg-surface-light transition-colors relative z-[2] cursor-pointer font-sans">
                                        Contact Sales
                                    </button>

                                    <div className="flex flex-col gap-6 z-[3] text-[14px] text-brand-dark flex-1">
                                        <span className="leading-[120%] font-medium">Includes Everything in Pro plan</span>

                                        <div className="w-full h-px border-t border-gainsboro border-dashed" />

                                        <div className="flex flex-col gap-[15px] text-[14px] text-text-muted">
                                            <span className="leading-[120%] font-semibold">Includes:</span>
                                            <div className="flex flex-col gap-[7px] text-[14px]">
                                                {[
                                                    "AI profile", "Push notifications", "Email alerts",
                                                    "Visitor profiles", "Custom branding"
                                                ].map((feature, idx) => (
                                                    <div key={idx} className="flex items-center gap-2">
                                                        <div className="w-5 h-5 flex items-center justify-center shrink-0">
                                                            <CheckIcon />
                                                        </div>
                                                        <span className="tracking-[-0.32px] leading-[120%] font-medium">{feature}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Reveal>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
