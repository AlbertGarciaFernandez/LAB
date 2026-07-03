export default function ReportsPage({ params }: { params: { locale: string } }) {
  return <div className="p-8">Reports ({params.locale})</div>;
}
