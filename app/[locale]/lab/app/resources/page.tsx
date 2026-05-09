import ResourceItem from "@/components/lab/ResourceItem";
import { getLabData } from "@/content/lab";

const resourceCategories = [
  "Acquisition",
  "Content",
  "Reporting",
  "Operations",
  "Security",
] as const;

export default function LabResourcesPage({ params: { locale } }: { params: { locale: string } }) {
  const data = getLabData(locale);

  return (
    <div className="space-y-6">
      <section className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="border-black/8 rounded-[28px] border bg-[linear-gradient(135deg,#fffefb_0%,#f4efe6_100%)] p-6 shadow-[0_18px_50px_rgba(17,24,39,0.06)]">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-black/40">
            Resources
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-black">
            Downloadable tools for each operating layer in the Lab.
          </h1>
          <p className="text-black/62 mt-4 max-w-2xl text-sm leading-7">
            These resource cards come directly from <code>content/lab.ts</code> so the workspace
            tools stay aligned with the same source used across the public and private Lab surfaces.
          </p>
        </div>

        <div className="border-black/8 rounded-[28px] border bg-white p-6 shadow-[0_18px_50px_rgba(17,24,39,0.06)]">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-black/40">
            Categories
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {resourceCategories.map((category) => (
              <span
                key={category}
                className="border-black/8 rounded-full border bg-[#faf7f2] px-4 py-2 text-sm font-medium text-black/70"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-4 xl:grid-cols-2">
        {resourceCategories.map((category) => {
          const resource = data.resources.find((item) => item.category === category);

          return resource ? <ResourceItem key={resource.slug} resource={resource} /> : null;
        })}
      </section>
    </div>
  );
}
