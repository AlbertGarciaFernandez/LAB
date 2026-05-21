import type { Metadata } from "next";
import { createPageMetadata } from "@/utils/metadata";
import CustomLLMPageContent from "./PageContent";

const path = "/expertise/custom-llm-development";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return createPageMetadata({
    locale: params.locale,
    path,
    title: "Custom LLM Development & Fine-Tuning Netherlands",
    description:
      "Build private AI models for your enterprise. We fine-tune Llama and Mistral models for specific business use cases in the Netherlands.",
    keywords: [
      "custom llm development",
      "fine-tuning ai models",
      "private ai server",
      "llama 3 business implementation",
    ],
  });
}

export default function Page() {
  return <CustomLLMPageContent />;
}
