import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import HeroSection from "@/components/sections/HeroSection";
import TrustProofSection from "@/components/sections/TrustProofSection";
import WhatWeBuildSection from "@/components/sections/WhatWeBuildSection";
import PackagesSection from "@/components/sections/PackagesSection";
import InsightsSection from "@/components/sections/InsightsSection";
import BioSection from "@/components/sections/04BioSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import ProcessContactSection from "@/components/sections/06ProcessContactSection";

export const metadata: Metadata = {
    title: "AI Automation Agency Netherlands | CodeHunter Lab",
    description: "AI automation agency in the Netherlands for AI agents, n8n workflows, and custom integrations. Production systems, not demos. Based in Leiden.",
};

const Home = () => {
    return (
        <div className="min-h-screen bg-near-black text-white antialiased">
            <Header />
            <main>
                <HeroSection />
                <TrustProofSection />
                <WhatWeBuildSection />
                <PackagesSection />
                <IndustriesSection />
                <InsightsSection />
                <BioSection />
                <ProcessContactSection />
            </main>
        </div>
    );
};

export default Home;
