import type { FC } from 'react';
import Image from 'next/image';
import { Reveal } from '@/components/shared';

const HowItWorks: FC = () => {
    return (
        <section className="w-full bg-white py-[60px] md:py-[100px] px-6 lg:px-[194px] box-border font-figtree flex flex-col items-center gap-16 overflow-hidden">
            {/* Header Section */}
            <div className="flex flex-col items-center gap-4 z-[2]">
                <Reveal delay={200}>
                    <h2 className="m-0 relative text-3xl md:text-4xl leading-tight font-heading text-text-heading text-center max-w-[800px]">
                        From setup to live support in minutes.
                    </h2>
                </Reveal>
            </div>

            {/* Main Content Grid */}
            <div className="w-full max-w-[1280px] flex flex-col items-center gap-6">

                {/* Hero Graphic Container */}
                <div className="w-full h-[500px] md:h-[500px] relative rounded-[24px] overflow-hidden flex items-center justify-center bg-gray-50">
                    <Image
                        src="/how-img.png"
                        alt="How Tickki Works Graphic"
                        fill
                        className="object-cover object-center z-[0]"
                        priority
                    />

                    {/* Central Icon */}
                    <div className="relative z-[10] w-[60px] md:w-[80px] h-[60px] md:h-[80px] shadow-[0_12px_32px_rgba(0,0,0,0.12)] flex items-center justify-center p-2">
                        <Image
                            src="/tickki-icon.svg"
                            alt="Tickki Feature"
                            width={60}
                            height={60}
                            className="w-[80%] h-[80%] object-contain block mx-auto my-auto"
                        />
                    </div>

                    {/* Left Float (desktop) / Top Float (mobile) - Widget Visibility */}
                    <div className="absolute left-[5%] xl:left-[10%] top-[5%] md:top-1/2 md:-translate-y-1/2 flex flex-col bg-white rounded-[20px] shadow-[0_8px_24px_rgba(0,0,0,0.08)] p-4 md:p-6 gap-3 md:gap-4 w-[85%] md:w-[380px] z-[5]">
                        <div className="flex flex-col gap-1">
                            <span className="text-[14px] font-semibold text-slate-900">Widget Visibility</span>
                            <span className="text-[12px] text-slate-500">Control whether the Tickki Website Widget renders on your site.</span>
                        </div>
                        <div className="p-3 border border-slate-100 rounded-xl bg-slate-50/50 flex gap-3 items-start">
                            <div className="h-4 w-7 rounded-full bg-green-500 flex items-center p-[2px] mt-0.5 shrink-0 justify-end">
                                <div className="h-3 w-3 shadow-sm rounded-full bg-white ml-auto"></div>
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="text-[13px] font-medium text-slate-800 leading-tight">Enable Tickki Website Widget</span>
                                <span className="text-[11px] text-slate-500 leading-tight">When disabled, core chat widget won't render; WhatsApp launcher remains separately controlled.</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Float (desktop) / Bottom Float (mobile) - AI Training Confidence */}
                    <div className="absolute right-[5%] xl:right-[10%] bottom-[5%] md:bottom-auto md:top-1/2 md:-translate-y-1/2 flex flex-col bg-white rounded-[20px] shadow-[0_8px_24px_rgba(0,0,0,0.08)] p-4 md:p-6 gap-3 md:gap-4 w-[85%] md:w-[380px] z-[5]">
                        <div className="flex flex-col gap-2">
                            <div className="flex justify-between items-center w-full">
                                <span className="text-[14px] font-semibold text-slate-900">AI Training Confidence</span>
                                <span className="text-[13px] font-bold text-slate-900">93% (High)</span>
                            </div>
                            <span className="text-[12px] text-slate-500">Improve AI accuracy by completing your business profile.</span>
                        </div>
                        <div className="px-3 py-2 bg-green-50 rounded-lg self-start">
                            <span className="text-[11px] font-medium text-green-700">Website training active • 0 pages</span>
                        </div>
                    </div>
                </div>

                {/* Bottom Descriptors */}
                <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-8 text-left">
                    {/* Col 1 */}
                    <Reveal delay={100}>
                        <div className="flex flex-col gap-1">
                            <h3 className="text-[16px] text-slate-900 font-figtree m-0">Train With Your Data</h3>
                            <p className="text-[16px] text-slate-500 m-0">Your data. Your rules. Tickki is simpply the enabler.</p>
                        </div>
                    </Reveal>
                    {/* Col 2 */}
                    <Reveal delay={200}>
                        <div className="flex flex-col gap-1">
                            <h3 className="text-[16px] text-slate-900 font-figtree m-0">Connect Your Channels</h3>
                            <p className="text-[16px] text-slate-500 m-0">Start instantly with our web widget, then plug in your WhatsApp channel.</p>
                        </div>
                    </Reveal>
                    {/* Col 3 */}
                    <Reveal delay={300}>
                        <div className="flex flex-col gap-1">
                            <h3 className="text-[16px] text-slate-900 font-figtree m-0">Centralize the Chaos</h3>
                            <p className="text-[16px] text-slate-500 m-0">Watch messages flow into one unified, real-time inbox—no constant page refreshing required.</p>
                        </div>
                    </Reveal>
                    {/* Col 4 */}
                    <Reveal delay={400}>
                        <div className="flex flex-col gap-1">
                            <h3 className="text-[16px] text-slate-900 font-figtree m-0">Tickki & Human Loop</h3>
                            <p className="text-[16px] text-slate-500 m-0">Your human agents approve, edit, or take over with full customer context</p>
                        </div>
                    </Reveal>
                </div>

            </div>
        </section>
    );
};

export default HowItWorks;
