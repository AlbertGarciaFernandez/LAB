import Link from "next/link";
import ProgressBadge from "@/components/lab/ProgressBadge";
import { getLabData } from "@/content/lab";
import { cn } from "@/utils/cn";

type LabSidebarProps = {
  locale: string;
};

const systemNavLabels = {
  foundations: "System 01 (Foundations)",
  operations: "System 02 (Operations)",
  architecture: "System 03 (Architecture)",
} as const;

const secondaryItems = [
  { label: "Resources", href: "#resources" },
  { label: "Settings", href: "#settings" },
];

export default function LabSidebar({ locale }: LabSidebarProps) {
  const data = getLabData(locale);

  return (
    <aside className="flex h-full flex-col rounded-[30px] border border-black/8 bg-[linear-gradient(180deg,#fffdf8_0%,#f6f1e7_100%)] p-5 shadow-[0_24px_80px_rgba(17,24,39,0.08)]">
      <Link href={`/${locale}/lab`} className="flex items-center gap-3 text-black">
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-black text-sm font-semibold text-white">
          L
        </span>
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-black/45">
            {data.landing.brandLabel}
          </p>
          <p className="text-sm font-semibold tracking-[-0.02em] text-black">{data.landing.brandName}</p>
        </div>
      </Link>

      <div className="mt-8 rounded-[24px] border border-black/8 bg-white/80 p-4">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-black/40">Workspace</p>
        <p className="mt-3 text-xl font-semibold tracking-[-0.03em] text-black">{data.user.name}</p>
        <p className="mt-1 text-sm text-black/58">{data.user.role}</p>
        <p className="mt-4 text-sm leading-6 text-black/62">{data.user.overallProgressSummary}</p>
      </div>

      <nav className="mt-8 flex-1 space-y-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-black/40">Systems</p>
          <div className="mt-3 space-y-2">
            {data.systems.map((system) => {
              const itemLabel =
                systemNavLabels[system.slug as keyof typeof systemNavLabels] ?? system.title;
              const isActive = system.slug === data.user.activeSystemSlug;

              return (
                <Link
                  key={system.slug}
                  href={`/${locale}/lab/app/system/${system.slug}`}
                  className={cn(
                    "block rounded-[22px] border px-4 py-3 transition-colors",
                    isActive
                      ? "border-black bg-black text-white"
                      : "border-black/8 bg-white/75 text-black hover:bg-white",
                  )}
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-sm font-medium">{itemLabel}</span>
                    <ProgressBadge
                      value={system.progressPercent}
                      className={cn(
                        "border-0",
                        isActive ? "bg-white/14 text-white" : "bg-[#f4f1ea] text-black/65",
                      )}
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-black/40">Workspace tools</p>
          <div className="mt-3 space-y-2">
            {secondaryItems.map((item) => (
              <Link
                key={item.label}
                href={`/${locale}/lab/app/${item.href}`}
                className="block rounded-[22px] border border-black/8 bg-white/75 px-4 py-3 text-sm font-medium text-black transition-colors hover:bg-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </aside>
  );
}
