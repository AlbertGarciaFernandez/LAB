import ProductPlaceholder from "@/components/suite/product-placeholder";

export default function BookingsPage({ params }: { params: { locale: string } }) {
  return <ProductPlaceholder slug="bookings" locale={params.locale} />;
}
