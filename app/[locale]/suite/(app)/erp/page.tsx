export default function ErpPage({ params }: { params: { locale: string } }) {
  return <div className="p-8">ERP ({params.locale})</div>;
}
