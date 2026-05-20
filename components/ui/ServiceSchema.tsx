import { BASE_URL, SITE_NAME } from "@/utils/constants";

type ServiceSchemaProps = {
  name: string;
  description: string;
  url: string;
  serviceType: string;
  areaServed?: string;
};

export default function ServiceSchema({
  name,
  description,
  url,
  serviceType,
  areaServed = "Netherlands",
}: ServiceSchemaProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name,
          description,
          serviceType,
          provider: {
            "@type": "Organization",
            "@id": `${BASE_URL}/#organization`,
            name: SITE_NAME,
            url: BASE_URL,
          },
          areaServed: {
            "@type": "Country",
            name: areaServed,
          },
          url,
        }),
      }}
    />
  );
}
