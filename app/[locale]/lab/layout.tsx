import type { ReactNode } from "react";
import LabHeader from "@/components/lab/LabHeader";

export default function LabLayout({
  children,
  params,
}: Readonly<{
  children: ReactNode;
  params: { locale: string };
}>) {
  return (
    <div className="min-h-screen bg-white text-black">
      <LabHeader locale={params.locale} />
      {children}
    </div>
  );
}
