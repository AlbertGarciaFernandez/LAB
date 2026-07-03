export default function LeadsPage({ params }: { params: { locale: string } }) {
  return <div className="p-8">Leads ({params.locale})</div>;
}
