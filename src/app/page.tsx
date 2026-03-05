import { Navbar, Hero, ChatWidget } from "@/components/hero";
import { Feature1 } from "@/components/feature-1";
import { Feature2 } from "@/components/feature-2";
import { Feature3 } from "@/components/feature-3";
import { HowItWorks } from "@/components/how-it-works";
import { Pricing } from "@/components/pricing";
import { FAQ } from "@/components/faq";
import Testimonials from "@/components/testimonials";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <main
        className="w-full min-h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center pt-5 px-6 md:px-36 pb-24 gap-16"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      >
        <Navbar />
        <Hero />
        <ChatWidget />
      </main>
      <Feature1 />
      <Feature2 />
      <Feature3 />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Footer />
    </>
  );
}
