export default function AnalyticsPage({ params }: { params: { locale: string } }) {
  return <div className="p-8">Analytics ({params.locale})</div>;
}
