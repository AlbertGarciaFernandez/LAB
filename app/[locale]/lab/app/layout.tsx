import type { Metadata } from "next";
import type { ReactNode } from "react";
import LabSidebar from "@/components/lab/LabSidebar";
import LabTopbar from "@/components/lab/LabTopbar";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function LabWorkspaceLayout({
  children,
  params: { locale },
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,#f8f3e9_0%,#f4efe7_28%,#efe8dd_56%,#ebe5dc_100%)] px-4 py-4 text-black sm:px-6 lg:px-8">
      <div className="mx-auto grid min-h-[calc(100vh-2rem)] max-w-7xl gap-4 lg:grid-cols-[290px_minmax(0,1fr)]">
        <div className="lg:sticky lg:top-4 lg:h-[calc(100vh-2rem)]">
          <LabSidebar locale={locale} />
        </div>

        <main className="flex min-h-full flex-col gap-4">
          <LabTopbar locale={locale} />
          <div className="border-black/8 bg-white/72 flex-1 rounded-[34px] border p-4 shadow-[0_24px_80px_rgba(17,24,39,0.06)] backdrop-blur sm:p-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
