import type { FC } from 'react';
import Image from 'next/image';
import { Reveal } from '@/components/shared';

const Feature2: FC = () => {
    return (
        <section className="w-full bg-white py-[60px] md:py-[100px] px-6 lg:px-[194px] box-border font-figtree flex flex-col items-center gap-[40px] md:gap-[64px] overflow-hidden">
            {/* Header Section */}
            <div className="w-full max-w-[1280px] flex flex-col lg:flex-row items-start lg:items-end justify-between gap-4 lg:gap-20 z-[2]">
                <div className="flex flex-col items-start gap-3 flex-1">
                    <Reveal>
                        <div className="relative text-[14px] md:text-[16px] leading-[120%] font-inter text-[#475569] tracking-tight">
                            Managing multiple businesses?
                        </div>
                    </Reveal>
                    <Reveal delay={200}>
                        <h2 className="m-0 relative text-3xl md:text-4xl leading-tight font-heading text-text-heading text-left max-w-[500px]">
                            One Calm Inbox for All Your Brands
                        </h2>
                    </Reveal>
                </div>
                <div className="flex-1 flex lg:justify-end">
                    <Reveal delay={400}>
                        <p className="m-0 text-[16px] font-body text-[#475569] leading-[140%] max-w-[480px]">
                            Tickki's multi-workspace feature lets you manage different brands from a single account. Switch contexts easily while keeping conversations, permissions, and internal notes strictly separated.
                        </p>
                    </Reveal>
                </div>
            </div>

            {/* Illustration Card Container */}
            <div className="w-full max-w-[1280px] h-[420px] md:h-[500px] relative rounded-[24px] overflow-hidden flex items-center justify-center bg-blue-50">
                {/* Background Graphic */}
                <div className="absolute inset-0 w-full h-full z-[0]">
                    <Image
                        src="/hero-bg.jpg"
                        alt="One Inbox Background"
                        fill
                        className="object-cover object-[center_top]"
                    />
                </div>

                {/* Main Multi-Asset Graphic */}
                <div className="relative z-[10] w-full max-w-[800px] h-[300px] md:h-[400px] px-4">
                    <Image
                        src="/multi-asset.svg"
                        alt="Channels and Inbox Integration"
                        fill
                        className="object-contain object-center"
                        priority
                    />
                </div>

                {/* Left Absolute Widget: AI Assistant Message */}
                <div className="absolute left-[0px] bottom-[12%] md:top-[40%] md:bottom-auto xl:top-[45%] bg-white rounded-r-[16px] shadow-[0_8px_24px_rgba(0,0,0,0.08)] p-4 md:p-5 z-[25] max-w-[200px] md:max-w-[280px]">
                    <div className="flex flex-col gap-2 items-start">
                        <p className="text-[11px] md:text-[13px] text-slate-800 leading-snug m-0 font-inter">
                            Hi there,<br /><br />I'm the Haven Spa Assistant. Are you here to Explore our products or do you need Support with an existing service?
                        </p>
                    </div>
                </div>

                {/* Right Absolute Widget: User Message */}
                <div className="absolute right-[0px] top-[8%] md:right-[5%] md:top-[50%] md:-translate-y-1/2 bg-[#5e30eb] rounded-l-[16px] md:rounded-[16px] shadow-sm px-4 py-3 md:px-5 md:py-4 z-[25] max-w-[200px] md:max-w-[280px]">
                    <div className="absolute -top-[22px] right-2 md:right-8 text-[12px] text-slate-600 font-medium whitespace-nowrap hidden md:block">Uti Egbai</div>
                    <div className="absolute -right-10 -top-3 w-8 h-8 rounded-full bg-slate-200 overflow-hidden border-2 border-white shadow-sm hidden md:block">
                        <img src="https://i.pravatar.cc/100?img=11" alt="Avatar" className="w-full h-full object-cover" />
                    </div>
                    <p className="text-[13px] md:text-[15px] text-white leading-snug m-0 font-inter">
                        Hi, do you guys offer deep massage?
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Feature2;
