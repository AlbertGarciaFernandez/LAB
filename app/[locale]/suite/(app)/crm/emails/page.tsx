export default function EmailsPage({ params }: { params: { locale: string } }) {
  return <div className="p-8">Emails ({params.locale})</div>;
}
