import ProductPlaceholder from "@/components/suite/product-placeholder";

export default function DeskPage({ params }: { params: { locale: string } }) {
  return <ProductPlaceholder slug="desk" locale={params.locale} />;
}
