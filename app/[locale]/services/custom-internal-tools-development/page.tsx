import type { Metadata } from "next";
import { createPageMetadata } from "@/utils/metadata";
import CustomInternalToolsContent from "./PageContent";

const path = "/services/custom-internal-tools-development";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return createPageMetadata({
    locale: params.locale,
    path,
    title: "Custom Internal Tools Development — CodeHunter Lab",
    description:
      "Expert developer of custom internal tools, admin panels, and operation dashboards. Scale your business without per-user fees in the Netherlands.",
    keywords: [
      "build internal tools for business",
      "custom admin panel development",
      "workflow automation consulting",
      "replace excel with app",
      "internal software developer nl",
      "maatwerk software ontwikkeling",
    ],
  });
}

export default function Page() {
  return <CustomInternalToolsContent />;
}
