import type { FC } from 'react';
import Image from "next/image";
import { Reveal } from '@/components/shared';

const Footer: FC = () => {
    return (
        <div
            className="w-full relative [background:linear-gradient(180deg,_#fff,_#5e30eb)] flex flex-col items-center pt-[100px] pb-[40px] px-6 md:px-[326px] box-border text-center text-[12px] text-gray-200 font-figtree"
        >
            <div className="w-full max-w-[1536px] flex flex-col items-start shrink-0">
                <div
                    className="self-stretch rounded-[26px] overflow-hidden flex flex-col items-center pt-20 pb-0 px-0 relative isolate gap-10"
                >
                    <div
                        className="w-full h-full absolute top-0 right-0 bottom-0 left-0 rounded-[26px] overflow-hidden z-[0] shrink-0"
                    />
                    <div className="flex flex-col items-center gap-3 z-[1] shrink-0">
                        <div className="flex flex-col items-start">
                            <Reveal>
                                <div className="rounded-full bg-white flex items-center py-0.5 px-6">
                                    <div className="flex flex-col items-start">
                                        <div className="self-stretch flex flex-col items-center">
                                            <div className="relative tracking-[-0.12px] leading-4 text-brand-dark uppercase font-medium">
                                                Get Started Now
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Reveal>
                        </div>
                        <div className="flex flex-col items-center gap-5 text-[40px] font-radio-grotesk">
                            <div className="w-full max-w-[880px] flex flex-col items-center">
                                <Reveal delay={200}>
                                    <div className="self-stretch flex flex-col items-center">
                                        <h2 className="relative leading-10 m-0 text-brand-dark font-semibold">Ready to launch your AI support inbox?</h2>
                                    </div>
                                </Reveal>
                            </div>
                            <div className="w-full max-w-[560px] flex flex-col items-center text-[15px] font-figtree">
                                <Reveal delay={400}>
                                    <div className="self-stretch flex flex-col items-center">
                                        <div className="relative tracking-[-0.15px] leading-6 text-text-muted">
                                            Start with web chat today, enable WhatsApp AI when ready.
                                        </div>
                                    </div>
                                </Reveal>
                            </div>
                            <Reveal delay={600}>
                                <div
                                    className="h-9 shadow-[0px_0.2660039961338043px_1px_rgba(6,_6,_6,_0.1),_0px_0.5px_2px_rgba(6,_6,_6,_0.16),_0px_4px_12px_rgba(5,_5,_5,_0.24)] rounded-xl bg-gray-200 overflow-hidden shrink-0 flex items-center justify-center p-4 box-border relative isolate text-left text-[13px] text-white font-inter cursor-pointer transition-colors hover:bg-gray-800"
                                >
                                    <div className="flex flex-col items-start z-[0] shrink-0">
                                        <div className="self-stretch flex flex-col items-start">
                                            <div className="relative tracking-[-0.13px] leading-[20px] font-medium">
                                                Get Started — It&apos;s Free
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="h-full w-full absolute top-0 right-0 bottom-0 left-0 rounded-xl border-gray-400 border-solid border-[1px] box-border z-[1] shrink-0"
                                    />
                                </div>
                            </Reveal>
                        </div>
                    </div>
                    <div
                        className="w-full max-w-[880px] flex flex-col md:flex-row items-start pt-20 px-6 box-border gap-9 z-[2] shrink-0 text-left text-[7.71px] text-slate-500"
                    >
                        <div className="w-full md:w-[304px] flex flex-col items-start gap-5">
                            <div className="self-stretch flex flex-col items-start gap-4">
                                <div className="flex items-center">
                                    <Image
                                        className="h-[30px] w-auto relative object-contain"
                                        src="/tickki-logo.svg"
                                        width={120}
                                        height={30}
                                        alt="Tickki Logo"
                                        priority
                                    />
                                </div>
                                <div className="w-full flex md:w-[304px] flex-col items-start text-[13px] text-gray-200">
                                    <div className="self-stretch flex flex-col items-start">
                                        <div className="self-stretch relative tracking-[-0.13px] leading-[20px]">
                                            With Pulsefy, experience a light, open-source <br />
                                            analytics platform that honors privacy.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="rounded-full bg-gray-300 overflow-hidden flex items-center justify-center py-1.5 px-3.5 text-[12px] text-gray-200 cursor-pointer hover:bg-gray-400 transition-colors"
                            >
                                <div className="flex flex-col items-start">
                                    <div className="self-stretch flex flex-col items-start">
                                        <div className="relative tracking-[-0.12px] leading-[20px] font-medium text-brand-dark">
                                            Follow us on X
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 flex flex-wrap md:flex-nowrap items-start text-[13px] text-gray-200 gap-8">
                            <div className="flex-1 flex flex-col items-start gap-2 min-w-[140px]">
                                <div className="w-[180px] flex flex-col items-start mb-2">
                                    <div className="self-stretch flex flex-col items-start">
                                        <div className="self-stretch relative tracking-[-0.13px] leading-[20px] font-semibold text-brand-dark">Features</div>
                                    </div>
                                </div>
                                <div className="self-stretch flex flex-col items-start text-[14px] text-gray-200 gap-3">
                                    <a href="#" className="relative tracking-[-0.13px] leading-[20px] hover:text-brand-dark transition-colors">Integrations</a>
                                    <a href="#" className="relative tracking-[-0.13px] leading-[20px] hover:text-brand-dark transition-colors">Simple metrics</a>
                                    <a href="#" className="relative tracking-[-0.13px] leading-[20px] hover:text-brand-dark transition-colors">Privacy focused</a>
                                    <a href="#" className="relative tracking-[-0.13px] leading-[20px] hover:text-brand-dark transition-colors">Open source</a>
                                </div>
                            </div>
                            <div className="flex-1 flex flex-col items-start gap-2 min-w-[140px]">
                                <div className="w-[180px] flex flex-col items-start mb-2">
                                    <div className="self-stretch flex flex-col items-start">
                                        <div className="self-stretch relative tracking-[-0.13px] leading-[20px] font-semibold text-brand-dark">Company</div>
                                    </div>
                                </div>
                                <div className="self-stretch flex flex-col items-start text-[14px] text-gray-200 gap-3">
                                    <a href="#" className="relative tracking-[-0.13px] leading-[20px] hover:text-brand-dark transition-colors">About</a>
                                    <a href="#" className="relative tracking-[-0.13px] leading-[20px] hover:text-brand-dark transition-colors">Contact</a>
                                    <a href="#" className="relative tracking-[-0.13px] leading-[20px] hover:text-brand-dark transition-colors">Privacy Policy</a>
                                </div>
                            </div>
                            <div className="flex-1 flex flex-col items-start gap-2 min-w-[140px]">
                                <div className="w-[180px] flex flex-col items-start mb-2">
                                    <div className="self-stretch flex flex-col items-start">
                                        <div className="self-stretch relative tracking-[-0.13px] leading-[20px] font-semibold text-brand-dark">Resources</div>
                                    </div>
                                </div>
                                <div className="self-stretch flex flex-col items-start text-[14px] text-gray-200 gap-3">
                                    <a href="#" className="relative tracking-[-0.13px] leading-[20px] hover:text-brand-dark transition-colors">Blog</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex items-center justify-center pt-8 border-t border-slate-300 z-[3] shrink-0 text-slate-500">
                        <div className="flex flex-col items-start">
                            <div className="self-stretch flex flex-col items-center">
                                <div className="relative tracking-[-0.12px] leading-4 text-xs font-medium text-slate-600">
                                    Made with 🖤 2026 Tickki ― All rights reserved.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
