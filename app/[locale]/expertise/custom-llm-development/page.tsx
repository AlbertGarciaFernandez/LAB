import type { Metadata } from "next";
import CustomLLMPageContent from "./PageContent";

const baseUrl = "https://www.codehunterlab.com";
const path = "/expertise/custom-llm-development";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const { locale } = params;
  return {
    title: "Custom LLM Development & Fine-Tuning Netherlands",
    description:
      "Build private AI models for your enterprise. We fine-tune Llama and Mistral models for specific business use cases in the Netherlands.",
    keywords: [
      "custom llm development",
      "fine-tuning ai models",
      "private ai server",
      "llama 3 business implementation",
    ],
    alternates: {
      canonical: `${baseUrl}/${locale}${path}`,
      languages: {
        en: `${baseUrl}/en${path}`,
        es: `${baseUrl}/es${path}`,
        "x-default": `${baseUrl}/en${path}`,
      },
    },
    openGraph: {
      title: "Custom LLM Development & Fine-Tuning Netherlands",
      description:
        "Build private AI models for your enterprise. We fine-tune Llama and Mistral models for specific business use cases in the Netherlands.",
      url: `${baseUrl}/${locale}${path}`,
      siteName: "CodeHunter Lab",
      type: "website",
      locale: locale === "es" ? "es_ES" : "en_US",
    },
  };
}

export default function Page() {
  return <CustomLLMPageContent />;
}
