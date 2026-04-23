import Link from "next/link";
import LabButton from "@/components/lab/LabButton";

const navItems = [
  { label: "Why Lab", href: "#problem" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Systems", href: "#systems" },
  { label: "Proof", href: "#differentiation" },
];

export default function LabHeader({ locale }: { locale: string }) {
  return (
    <header className="sticky top-0 z-30 border-b border-black/8 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4 lg:px-8">
        <Link href={`/${locale}/lab`} className="flex items-center gap-3 text-black">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-black text-sm font-semibold text-white">
            L
          </span>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-black/45">
              CodeHunter
            </p>
            <p className="text-sm font-semibold tracking-[-0.02em]">Lab</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={`/${locale}/lab${item.href}`}
              className="text-sm text-black/60 transition-colors hover:text-black"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LabButton href={`/${locale}/lab#preview`} variant="secondary" className="hidden sm:inline-flex">
            Preview Platform
          </LabButton>
          <LabButton href={`/${locale}/lab#systems`}>View Systems</LabButton>
        </div>
      </div>
    </header>
  );
}
