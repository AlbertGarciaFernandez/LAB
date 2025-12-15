// components/sections/BioSection.tsx

import React from "react";

const BioSection: React.FC = () => {
  const experienceStats = [
    {
      label: "Yrs. Experience (Tech)",
      value: "4+",
      description:
        "Total years dedicated to software development and engineering.",
    },
    {
      label: "Key Platforms",
      value: "SFCC / Next.js",
      description:
        "Expertise in high-traffic E-commerce and modern React frameworks.",
    },
    {
      label: "Role Focus",
      value: "Hybrid Lead",
      description:
        "Combining Senior Frontend Engineering with Product Ownership.",
    },
    {
      label: "Team Leadership",
      value: "Agile/Scrum",
      description:
        "Experienced coordinating complex digital initiatives and cross-functional teams.",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 md:py-40 bg-near-black text-white px-4 md:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-16 tracking-tight text-center lg:text-left">
          <span className="text-hunter-green">04.</span> Bio / The Engineer
        </h2>

        <div className="lg:flex lg:space-x-16">
          <div className="lg:w-2/3 space-y-8">
            <p className="text-xl text-gray-300 leading-relaxed border-l-4 border-hunter-orange pl-6 italic">
              "I operate at the intersection between technology, product
              strategy, and user-centric design."
            </p>

            <p className="text-lg text-gray-400 leading-relaxed">
              I am a Senior Frontend Engineer and Tech Lead focused on building
              high-performance, scalable digital products. My expertise is
              rooted in deep hands-on experience with modern component-driven
              architectures (React, Next.js, TypeScript), ensuring robust
              systems and maintainable code.
            </p>

            <p className="text-lg text-gray-400 leading-relaxed">
              Beyond technical execution, I bring a **Product Mindset**. I
              combine technical excellence with strategic thinking, translating
              complex business requirements into clear, technical roadmaps that
              align with real business impact. This approach was honed by
              experience as a Product Owner and my background leading teams
              across engineering, design, and product.
            </p>

            <p className="text-lg text-gray-400 leading-relaxed">
              My career began in high-stakes event management and hospitality in
              Spain and Australia, which fundamentally shaped my **adaptability,
              coordination skills, and a people-first approach**. This unique
              blend of experience allows me to not just ship code, but to lead
              cross-functional teams and build digital experiences that are
              performant, meaningful, and strategically aligned.
            </p>
          </div>

          <div className="lg:w-1/3 mt-12 lg:mt-0">
            <div className="space-y-6 p-6 bg-surface-dark rounded-xl shadow-inner border border-hunter-green/20">
              <h3 className="text-xl font-bold text-hunter-green mb-4">
                Core Facts
              </h3>

              {experienceStats.map((stat) => (
                <div
                  key={stat.label}
                  className="border-b border-gray-700 pb-4 last:border-b-0"
                >
                  <p className="text-3xl font-extrabold text-hunter-orange">
                    {stat.value}
                  </p>
                  <p className="text-sm uppercase tracking-wide text-gray-300 mt-1">
                    {stat.label}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {stat.description}
                  </p>
                </div>
              ))}

              <div className="pt-4">
                <h3 className="text-lg font-bold text-white mb-2">Education</h3>
                <p className="text-sm text-gray-400">
                  Master in Software Development <br />
                  <span className="text-xs text-hunter-green">
                    Assembler Institute of Technology
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BioSection;
