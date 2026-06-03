// components/sections/TheLabSection.tsx

import React from "react";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";

interface ProjectCardProps {
  number: string;
  title: string;
  description: string;
  tags: string[];
  results: string[];
  keyResultsLabel: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  number,
  title,
  description,
  tags,
  results,
  keyResultsLabel,
}) => (
  <div className="flex flex-col space-y-6 rounded-xl border border-surface-dark bg-surface-dark p-6 shadow-2xl transition duration-300 hover:border-hunter-orange/50 md:p-10 lg:flex-row lg:space-x-10 lg:space-y-0">
    <div className="flex-shrink-0 lg:w-1/4">
      <p className="mb-2 font-mono text-sm tracking-widest text-hunter-orange">{number}</p>
      <h3 className="mb-4 text-3xl font-bold text-white">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-hunter-green/30 bg-near-black px-3 py-1 text-xs font-semibold text-hunter-green"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>

    <div className="lg:w-3/4">
      <p className="mb-6 leading-relaxed text-gray-300">{description}</p>
      <h4 className="mb-3 text-lg font-semibold text-hunter-green">{keyResultsLabel}</h4>
      <ul className="list-disc space-y-2 pl-5 text-gray-400">
        {results.map((result) => (
          <li key={result} className="text-sm">
            {result}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const TheLabSection: React.FC = () => {
  const t = useTranslations("TheLab");

  const projects: ProjectCardProps[] = [
    {
      number: t("projects.0.number"),
      title: t("projects.0.title"),
      description: t("projects.0.description"),
      tags: ["Next.js", "TypeScript", "OpenAI APIs", "Product Owner", "GraphQL", "Jest"],
      results: [
        t("projects.0.results.0"),
        t("projects.0.results.1"),
        t("projects.0.results.2"),
        t("projects.0.results.3"),
      ],
      keyResultsLabel: t("keyResults"),
    },
    {
      number: t("projects.1.number"),
      title: t("projects.1.title"),
      description: t("projects.1.description"),
      tags: [
        "SFCC",
        "E-commerce",
        "Migration Lead",
        "Web Performance",
        "A/B Testing",
        "SEO Strategy",
      ],
      results: [
        t("projects.1.results.0"),
        t("projects.1.results.1"),
        t("projects.1.results.2"),
        t("projects.1.results.3"),
      ],
      keyResultsLabel: t("keyResults"),
    },
    {
      number: t("projects.2.number"),
      title: t("projects.2.title"),
      description: t("projects.2.description"),
      tags: ["Consulting", "Architecture", "Scaling", "Mentorship"],
      results: [t("projects.2.results.0"), t("projects.2.results.1"), t("projects.2.results.2")],
      keyResultsLabel: t("keyResults"),
    },
  ];

  return (
    <section id="work" className="bg-near-black px-4 py-20 text-white md:px-8 md:py-40">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-8 text-center text-5xl font-black uppercase tracking-tighter text-white md:text-7xl">
          <span className="text-hunter-orange">03.</span> {t("title")}
        </h2>
        <p className="mx-auto mb-20 max-w-3xl text-center text-xl text-gray-400">{t("subtitle")}</p>

        <div className="space-y-16">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>

        <div className="pt-20 text-center">
          <Link
            href="#contact"
            className="inline-block rounded-lg bg-hunter-green px-8 py-3 font-bold text-near-black shadow-lg shadow-hunter-green/30 transition duration-300 hover:bg-hunter-green/90"
          >
            {t("cta")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TheLabSection;
