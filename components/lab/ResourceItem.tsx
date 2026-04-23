import type { LabResource } from "@/content/lab";
import LabCard from "@/components/lab/LabCard";

type ResourceItemProps = {
  resource: LabResource;
};

export default function ResourceItem({ resource }: ResourceItemProps) {
  return (
    <LabCard className="flex h-full flex-col justify-between">
      <div>
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-black/40">{resource.category}</p>
          <span className="rounded-full border border-black/8 bg-[#faf7f2] px-3 py-1 text-xs text-black/55">
            Download
          </span>
        </div>
        <h3 className="mt-4 text-xl font-semibold tracking-[-0.03em] text-black">{resource.title}</h3>
        <p className="mt-3 text-sm leading-6 text-black/62">{resource.description}</p>
      </div>

      <button
        type="button"
        className="mt-6 inline-flex w-fit items-center justify-center rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-medium text-black transition-colors hover:border-black/20 hover:bg-black/[0.03]"
      >
        {resource.downloadLabel}
      </button>
    </LabCard>
  );
}
