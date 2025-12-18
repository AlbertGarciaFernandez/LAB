// components/sections/TheLabSection.tsx

import React from "react";
import Link from "next/link";

interface ProjectCardProps {
  number: string;
  title: string;
  description: string;
  tags: string[];
  results: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  number,
  title,
  description,
  tags,
  results,
}) => (
  <div className="flex flex-col lg:flex-row bg-surface-dark rounded-xl p-6 md:p-10 shadow-2xl space-y-6 lg:space-y-0 lg:space-x-10 border border-surface-dark hover:border-hunter-orange/50 transition duration-300">
    <div className="lg:w-1/4 flex-shrink-0">
      <p className="text-hunter-orange text-sm font-mono tracking-widest mb-2">
        {number}
      </p>
      <h3 className="text-3xl font-bold mb-4 text-white">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs font-semibold px-3 py-1 bg-near-black text-hunter-green rounded-full border border-hunter-green/30"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>

    <div className="lg:w-3/4">
      <p className="text-gray-300 mb-6 leading-relaxed">{description}</p>

      <h4 className="text-lg font-semibold text-hunter-green mb-3">
        Resultados Clave:
      </h4>
      <ul className="text-gray-400 space-y-2 list-disc pl-5">
        {results.map((result, index) => (
          <li key={index} className="text-sm">
            {result}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const TheLabSection: React.FC = () => {
  const projects: ProjectCardProps[] = [
    {
      number: "Case Study 01 / AI Product",
      title: "Product Accelerator: AI-Powered Productivity App",
      description:
        "Led the frontend development and Product Ownership of an AI-powered productivity web application. The challenge was to create a scalable architecture, integrating Machine Learning models and third-party APIs (OpenAI) to deliver a personalized, high-performance user experience.",
      tags: [
        "Next.js",
        "TypeScript",
        "OpenAI APIs",
        "Product Owner",
        "GraphQL",
        "Jest",
      ],
      results: [
        "Defined Frontend Architecture with React, Next.js, and TypeScript, focused on scalability and maintainability.",
        "Integrated AI-driven features via OpenAI APIs and custom endpoints for personalized experiences.",
        "Constant performance monitoring (Lighthouse, Core Web Vitals) and robust testing (Jest) to ensure optimized UX.",
        "Defined vision, roadmap, and acceptance criteria, aligning technical execution with business objectives.",
      ],
    },
    {
      number: "Case Study 02 / E-commerce",
      title: "Basic-Fit: High-Traffic E-commerce Migration (SFCC)",
      description:
        "Led the migration process of the Basic-Fit website to the Salesforce Commerce Cloud (SFCC) platform, a critical migration affecting consumer-facing solutions across multiple platforms. The goal was to ensure a smooth transition and improve the end-user experience, performance, and SEO.",
      tags: [
        "SFCC",
        "E-commerce",
        "Migration Lead",
        "Web Performance",
        "A/B Testing",
        "SEO Strategy",
      ],
      results: [
        "Lead the migration to Salesforce Commerce Cloud, maintaining high user experience quality.",
        "Implemented A/B testing for key components, achieving better conversion results.",
        "Developed custom templates within SFCC and converted design concepts into functional, responsive websites.",
        "Applied industry best practices for secure, scalable code with integrated analytics tools.",
      ],
    },
    {
      number: "Case Study 03 / Track Record",
      title: "Empowering Digital Growth: 15+ Success Stories",
      description:
        "Over our years of experience, we have empowered more than 15 companies to elevate their web presence, applications, and e-commerce platforms. We don't just build; we optimize for growth and scalability.",
      tags: ["Consulting", "Architecture", "Scaling", "Mentorship"],
      results: [
        "Partnered with diverse clients from startups to enterprises.",
        "Successfully delivered scalable solutions in E-commerce, SaaS, and AI.",
        "Improved performance, SEO, and conversion rates across all partner portfolios.",
      ],
    },
  ];

  return (
    <section
      id="work"
      className="py-20 md:py-40 bg-near-black text-white px-4 md:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-center mb-8 text-white">
          <span className="text-hunter-orange">03.</span> The Lab
        </h2>
        <p className="text-center text-xl text-gray-400 mb-20 max-w-3xl mx-auto">
          Engineered solutions and strategic project leadership that delivered
          measurable business impact.
        </p>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        <div className="text-center pt-20">
          <Link href="#contact" className="px-8 py-3 text-near-black bg-hunter-green font-bold rounded-lg transition duration-300 hover:bg-hunter-green/90 shadow-lg shadow-hunter-green/30 inline-block">
            Discuss Your Challenge
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TheLabSection;
