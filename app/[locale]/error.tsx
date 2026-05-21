"use client";

import { useEffect } from "react";
import { m } from "framer-motion";
import Link from "next/link";
import { Warning } from "@phosphor-icons/react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-near-black px-4 text-center">
      <m.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center"
      >
        <m.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5, type: "spring", stiffness: 200 }}
          className="flex h-20 w-20 items-center justify-center rounded-full border border-hunter-orange/30 bg-hunter-orange/10"
        >
          <Warning size={40} className="text-hunter-orange" weight="fill" />
        </m.div>

        <m.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-8 font-mono text-3xl font-bold text-white md:text-4xl"
        >
          Something went wrong
        </m.h1>

        <m.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-4 max-w-md text-gray-400"
        >
          {error.message || "An unexpected error occurred. Please try again."}
        </m.p>

        {error.digest && (
          <m.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-2 font-mono text-xs text-gray-600"
          >
            Error ID: {error.digest}
          </m.p>
        )}

        <m.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-8 flex flex-col items-center gap-4 sm:flex-row"
        >
          <button
            onClick={() => reset()}
            className="inline-flex h-12 items-center justify-center rounded-full bg-hunter-green px-8 text-sm font-bold uppercase tracking-[0.2em] text-near-black transition-all hover:bg-hunter-green-dark"
          >
            Try again
          </button>

          <Link
            href="/"
            className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 px-8 text-sm font-bold uppercase tracking-[0.2em] text-white transition-all hover:border-white/40 hover:bg-white/5"
          >
            Back to Home
          </Link>
        </m.div>
      </m.div>
    </div>
  );
}
