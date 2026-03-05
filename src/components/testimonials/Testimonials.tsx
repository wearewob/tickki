import type { FC } from 'react';
import Image from 'next/image';
import { Reveal } from '@/components/shared';

const testimonialsData = [
    {
        name: "Hikmet Atçeken",
        handle: "@hiatceken",
        avatar: "https://i.pravatar.cc/150?img=11",
        quote: "Pulsefy's our daily tool to bypass averages \nand reveal true insights, for the whole team!",
        icon: "/x-icon.svg", // assuming an X/Twitter icon
    },
    {
        name: "Arda Guler",
        handle: "@ardaguler_",
        avatar: "https://i.pravatar.cc/150?img=12",
        quote: "Pulsefy levels the analytics field for our \nteam, enabling both beginners and pros to \neasily bypass average data and uncover \nthe actionable insights that truly shape our \nmarketing strategies.",
        icon: "/x-icon.svg",
    },
    {
        name: "Maria Ancelotti",
        handle: "@maria_ancelotti",
        avatar: "https://i.pravatar.cc/150?img=5",
        quote: "From novice to pro, Pulsefy helps our team \nuncover the extraordinary in our marketing \ndata!",
        icon: "/x-icon.svg",
    }
];

const Testimonials: FC = () => {
    return (
        <section className="w-full relative bg-white overflow-hidden flex flex-col items-center py-[60px] md:py-[100px] px-6 lg:px-[194px] box-border gap-12 md:gap-16 text-left text-[16px] text-darkslategray font-radio-grotesk">
            <div className="flex flex-col items-center gap-5">
                <Reveal>
                    <div className="relative leading-[120%] uppercase text-brand-primary tracking-widest font-semibold text-sm">Customers Testimonials</div>
                </Reveal>
                <Reveal delay={200}>
                    <h2 className="m-0 relative text-[36px] md:text-[48px] leading-[109%] font-heading font-semibold text-brand-dark text-center">
                        Voices From Our Community
                    </h2>
                </Reveal>
            </div>

            <div className="flex flex-col md:flex-row flex-wrap justify-center items-start gap-6 text-[14px] text-gray-800 font-body w-full max-w-[1280px]">
                {testimonialsData.map((testimonial, idx) => (
                    <Reveal key={idx} delay={300 + idx * 100} className="w-full md:w-[320px]">
                        <div className="w-full rounded-[18px] bg-surface-muted flex flex-col items-start p-6 gap-6 hover:shadow-md transition-shadow">
                            <div className="self-stretch flex items-start gap-4">
                                <div className="h-10 w-10 relative rounded-full overflow-hidden shrink-0">
                                    <Image
                                        src={testimonial.avatar}
                                        fill
                                        className="object-cover"
                                        sizes="40px"
                                        alt={testimonial.name}
                                    />
                                </div>
                                <div className="flex-1 flex flex-col items-start justify-center h-10">
                                    <div className="relative tracking-tight leading-snug font-semibold text-brand-dark text-[15px]">
                                        {testimonial.name}
                                    </div>
                                </div>
                            </div>
                            <div className="w-full flex flex-col items-start">
                                <p className="m-0 self-stretch relative tracking-tight leading-relaxed text-[14px] text-slate-700 whitespace-pre-line">
                                    {testimonial.quote}
                                </p>
                            </div>
                        </div>
                    </Reveal>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
