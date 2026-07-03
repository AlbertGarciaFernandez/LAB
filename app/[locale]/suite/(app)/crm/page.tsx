export default function CrmDashboardPage({ params }: { params: { locale: string } }) {
  return <div className="p-8">CRM Dashboard ({params.locale})</div>;
}
