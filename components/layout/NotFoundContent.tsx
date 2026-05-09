import Link from "next/link";

interface NotFoundContentProps {
  locale?: string;
}

export default function NotFoundContent({ locale = "en" }: NotFoundContentProps) {
  const homeHref = locale ? `/${locale}` : "/";

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-near-black px-4 text-center">
      <h1 className="font-mono text-9xl font-black text-white/10">404</h1>
      <h2 className="mt-4 text-3xl font-bold text-white">Page not found</h2>
      <p className="mt-4 max-w-md text-gray-400">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href={homeHref}
        className="mt-8 inline-flex items-center rounded-full border border-hunter-green px-8 py-3 text-sm font-bold uppercase tracking-[0.2em] text-hunter-green transition-all hover:bg-hunter-green hover:text-near-black"
      >
        Back to Home
      </Link>
    </div>
  );
}
