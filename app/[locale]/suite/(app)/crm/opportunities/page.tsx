export default function OpportunitiesPage({ params }: { params: { locale: string } }) {
  return <div className="p-8">Opportunities ({params.locale})</div>;
}
