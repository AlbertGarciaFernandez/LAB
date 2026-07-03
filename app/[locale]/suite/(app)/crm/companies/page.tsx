export default function CompaniesPage({ params }: { params: { locale: string } }) {
  return <div className="p-8">Companies ({params.locale})</div>;
}
