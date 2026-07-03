import ProductPlaceholder from "@/components/suite/product-placeholder";

export default function ErpPage({ params }: { params: { locale: string } }) {
  return <ProductPlaceholder slug="erp" locale={params.locale} />;
}
