"use client";

import Header from "@/components/layout/Header";
import HeroSection from "@/components/sections/HeroSection";
import AIBanner from "@/components/sections/AIBanner";
import ExpertiseSection from "@/components/sections/02ExpertiseSection";
import TheLabSection from "@/components/sections/03TheLabSection";
import BioSection from "@/components/sections/04BioSection";
import StackSection from "@/components/sections/05StackSection";
import ProcessContactSection from "@/components/sections/06ProcessContactSection";
import Footer from "@/components/layout/Footer";

const Home = () => {
    return (
        <div className="min-h-screen bg-near-black text-white antialiased">
            <Header />
            <main>
                <HeroSection />
                <AIBanner />
                <ExpertiseSection />
                <TheLabSection />
                <BioSection />
                <StackSection />
                <ProcessContactSection />
            </main>
        </div>
    );
};

export default Home;
