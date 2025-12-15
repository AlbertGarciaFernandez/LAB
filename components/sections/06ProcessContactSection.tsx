// components/sections/ProcessContactSection.tsx

import React from "react";
import Link from "next/link";

interface ProcessStepProps {
  step: string;
  title: string;
  description: string;
}

const processSteps: ProcessStepProps[] = [
  {
    step: "01",
    title: "Strategy & Definition",
    description:
      "We begin by translating your business goals and current technological challenges into a clear, actionable product roadmap and a defined technical architecture. This ensures alignment from day one.",
  },
  {
    step: "02",
    title: "Precision Engineering",
    description:
      "The build phase focuses on clean, component-driven development (Next.js, TypeScript). We prioritize robust testing (Jest) and maintainability to deliver stable, high-quality code that is built to last.",
  },
  {
    step: "03",
    title: "Optimization & Launch",
    description:
      "We finalize with a performance audit, ensuring superior Core Web Vitals and SEO readiness. After launch, we establish monitoring and A/B testing protocols to secure long-term success and scalability.",
  },
];

const ProcessContactSection: React.FC = () => {
  return (
    <section
      id="process-contact"
      className="py-20 md:py-32 bg-near-black text-white px-4 md:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* 06.1 Process Section */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 tracking-tight">
          <span className="text-hunter-green">06.</span> The Process
        </h2>
        <p className="text-center text-xl text-gray-400 mb-20 max-w-3xl mx-auto">
          A senior-level, three-step methodology designed for predictable
          outcomes and maximum performance.
        </p>

        {/* Process Steps Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {processSteps.map((item) => (
            <div key={item.step} className="p-6">
              <h3 className="text-7xl font-extrabold text-hunter-green mb-4 opacity-50 font-mono">
                {item.step}
              </h3>
              <h4 className="text-2xl font-bold text-white mb-3">
                {item.title}
              </h4>
              <p className="text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Separator / Break */}
        <div className="h-1 bg-surface-dark w-1/2 mx-auto my-20 rounded-full"></div>

        {/* 06.2 Contact / CTA Section (Final Call to Action) */}
        <div
          id="contact"
          className="text-center p-10 bg-surface-dark rounded-xl shadow-2xl border border-hunter-orange/20"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tighter text-white">
            Ready to Accelerate Your Digital Roadmap?
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-4xl mx-auto">
            Whether you need a full architecture redesign, an SFCC migration
            lead, or strategic product consultation—let's discuss the challenge.
          </p>

          <Link
            href="mailto:alberdbeto@gmail.com"
            className="inline-block px-12 py-4 text-near-black bg-hunter-orange font-bold text-lg rounded-lg transition duration-300 hover:bg-hunter-orange/90 shadow-2xl shadow-hunter-orange/30 uppercase tracking-wider"
          >
            Initialize Project
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProcessContactSection;
