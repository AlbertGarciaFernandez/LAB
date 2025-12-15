// components/sections/StackSection.tsx

import React from "react";

// Definición de tipos para una tecnología
interface Technology {
  name: string;
  level: "primary" | "secondary" | "tool";
}

// Datos de las tecnologías agrupadas
const techStack: { [key: string]: Technology[] } = {
  "Core Engineering & Architecture": [
    { name: "Next.js (App Router)", level: "primary" },
    { name: "React", level: "primary" },
    { name: "TypeScript", level: "primary" },
    { name: "JavaScript (ES6+)", level: "tool" },
    { name: "Server Components", level: "secondary" },
  ],
  "E-commerce & Product Focus": [
    { name: "SFCC (B2C/B2B)", level: "secondary" },
    { name: "Product Ownership", level: "secondary" },
    { name: "Shopify", level: "tool" },
    { name: "UX/Performance Optimization", level: "primary" },
  ],
  "Styling, UI/UX & Animation": [
    { name: "Tailwind CSS", level: "primary" },
    { name: "Framer Motion", level: "secondary" },
    { name: "Figma", level: "tool" },
    { name: "A11Y (WCAG 2.1)", level: "tool" },
  ],
  "Testing, APIs & DevOps": [
    { name: "Jest / RTL", level: "primary" },
    { name: "GraphQL / REST APIs", level: "secondary" },
    { name: "Git / GitLab / GitHub", level: "tool" },
    { name: "CI/CD Pipelines", level: "tool" },
  ],
};

const getChipStyles = (level: "primary" | "secondary" | "tool") => {
  switch (level) {
    case "primary":
      return "bg-hunter-green/20 text-hunter-green border-hunter-green";
    case "secondary":
      return "bg-hunter-orange/20 text-hunter-orange border-hunter-orange";
    case "tool":
    default:
      return "bg-surface-dark/50 text-gray-400 border-gray-600";
  }
};

const StackSection: React.FC = () => {
  return (
    <section
      id="stack"
      className="py-20 md:py-32 bg-near-black text-white px-4 md:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 tracking-tight">
          <span className="text-hunter-orange">05.</span> The{" "}
          <span className="text-hunter-green">TECH</span> Stack
        </h2>
        <p className="text-center text-xl text-gray-400 mb-16 max-w-3xl mx-auto">
          The modern, high-performance technology ecosystem used to build and
          scale CodeHunter Lab solutions.
        </p>

        {/* Grid de Categorías de Tecnología */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(techStack).map(([category, technologies]) => (
            <div
              key={category}
              className="p-6 bg-surface-dark rounded-xl shadow-xl border border-surface-dark hover:border-hunter-green/50 transition duration-300"
            >
              <h3 className="text-xl font-bold mb-4 text-white border-b border-gray-700 pb-2">
                {category}
              </h3>

              <div className="flex flex-wrap gap-2 pt-2">
                {technologies.map((tech) => (
                  <span
                    key={tech.name}
                    className={`text-sm font-medium px-3 py-1 rounded-full border transition-all ${getChipStyles(
                      tech.level
                    )}`}
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Legend / Key */}
        <div className="flex justify-center space-x-6 mt-16 text-sm">
          <span className="flex items-center space-x-2 text-hunter-green">
            <span className="block w-3 h-3 rounded-full bg-hunter-green"></span>
            <span>Core / Deep Expertise</span>
          </span>
          <span className="flex items-center space-x-2 text-hunter-orange">
            <span className="block w-3 h-3 rounded-full bg-hunter-orange"></span>
            <span>Strategic / Specialized</span>
          </span>
          <span className="flex items-center space-x-2 text-gray-400">
            <span className="block w-3 h-3 rounded-full bg-gray-600"></span>
            <span>Standard Tooling</span>
          </span>
        </div>
      </div>
    </section>
  );
};

export default StackSection;
