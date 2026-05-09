import NotFoundContent from "@/components/layout/NotFoundContent";

export default function NotFound({ params }: { params: { locale: string } }) {
  return <NotFoundContent locale={params.locale} />;
}
