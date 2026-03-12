import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import HeroSection from "@/components/sections/HeroSection";
import WhatWeBuildSection from "@/components/sections/WhatWeBuildSection";
import AIBanner from "@/components/sections/AIBanner";
import ExpertiseSection from "@/components/sections/02ExpertiseSection";
import QuickWinsSection from "@/components/sections/QuickWinsSection";
import TheLabSection from "@/components/sections/03TheLabSection";
import BioSection from "@/components/sections/04BioSection";
import StackSection from "@/components/sections/05StackSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import ProcessContactSection from "@/components/sections/06ProcessContactSection";

export const metadata: Metadata = {
    title: "AI Consulting & Automation Agency | CodeHunter Lab",
    description: "We design and deploy AI consulting, automation, and AI agents for businesses in the Netherlands and beyond. Production systems, not demos. Based in Leiden.",
};

const Home = () => {
    return (
        <div className="min-h-screen bg-near-black text-white antialiased">
            <Header />
            <main>
                <HeroSection />
                <WhatWeBuildSection />
                <AIBanner />
                <ExpertiseSection />
                <QuickWinsSection />
                <TheLabSection />
                <BioSection />
                <StackSection />
                <TestimonialsSection />
                <IndustriesSection />
                <ProcessContactSection />
            </main>
        </div>
    );
};

export default Home;
