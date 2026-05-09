import Link from "next/link";
import LabButton from "@/components/lab/LabButton";
import { getLabData } from "@/content/lab";

export default function LabHeader({ locale }: { locale: string }) {
  const data = getLabData(locale);

  return (
    <header className="border-black/8 sticky top-0 z-30 border-b bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4 lg:px-8">
        <Link href={`/${locale}/lab`} className="flex items-center gap-3 text-black">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-black text-sm font-semibold text-white">
            L
          </span>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-black/45">
              {data.landing.brandLabel}
            </p>
            <p className="text-sm font-semibold tracking-[-0.02em]">{data.landing.brandName}</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {data.landing.navItems.map((item) => (
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
          <LabButton
            href={`/${locale}/lab/app`}
            variant="secondary"
            className="hidden sm:inline-flex"
          >
            {data.copy.ctaSecondary}
          </LabButton>
          <LabButton href={`/${locale}/lab/app`}>{data.copy.ctaPrimary}</LabButton>
        </div>
      </div>
    </header>
  );
}
