// components/sections/TheLabSection.tsx

import React from "react";

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
        "Liderazgo integral del desarrollo frontend y la propiedad del producto (Product Ownership) de una aplicación web de productividad impulsada por IA. El desafío fue crear una arquitectura que pudiera escalar, integrando modelos de Machine Learning y APIs de terceros (OpenAI) para ofrecer una experiencia de usuario personalizada y de alto rendimiento.",
      tags: [
        "Next.js",
        "TypeScript",
        "OpenAI APIs",
        "Product Owner",
        "GraphQL",
        "Jest",
      ],
      results: [
        "Arquitectura Frontend definida con React, Next.js y TypeScript, enfocada en escalabilidad y mantenibilidad.",
        "Integración de características impulsadas por IA a través de las APIs de OpenAI y endpoints personalizados para experiencias personalizadas.",
        "Monitoreo constante del rendimiento (Lighthouse, Core Web Vitals) y pruebas robustas (Jest) para asegurar una UX optimizada.",
        "Definición de visión, hoja de ruta y criterios de aceptación, alineando la ejecución técnica con los objetivos de negocio.",
      ],
    },
    {
      number: "Case Study 02 / E-commerce",
      title: "Basic-Fit: High-Traffic E-commerce Migration (SFCC)",
      description:
        "Lideré el proceso de migración de la web de Basic-Fit a la plataforma Salesforce Commerce Cloud (SFCC), una migración crítica que afectaba a soluciones de cara al consumidor en múltiples plataformas. El objetivo fue asegurar una transición fluida y mejorar la experiencia del usuario final, el rendimiento y el SEO.",
      tags: [
        "SFCC",
        "E-commerce",
        "Migration Lead",
        "Web Performance",
        "A/B Testing",
        "SEO Strategy",
      ],
      results: [
        "Liderazgo en la migración a Salesforce Commerce Cloud, manteniendo una alta calidad de experiencia de usuario.",
        "Implementación de A/B testing para componentes clave, logrando mejores resultados en la conversión.",
        "Desarrollo de plantillas personalizadas dentro de SFCC y conversión de conceptos de diseño en sitios web funcionales y responsive.",
        "Aplicación de mejores prácticas de la industria para código seguro, escalable y con herramientas de análisis integradas.",
      ],
    },
  ];

  return (
    <section
      id="work"
      className="py-20 md:py-40 bg-near-black text-white px-4 md:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 tracking-tight">
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
          <button className="px-8 py-3 text-near-black bg-hunter-green font-bold rounded-lg transition duration-300 hover:bg-hunter-green/90 shadow-lg shadow-hunter-green/30">
            Discuss Your Challenge
          </button>
        </div>
      </div>
    </section>
  );
};

export default TheLabSection;
