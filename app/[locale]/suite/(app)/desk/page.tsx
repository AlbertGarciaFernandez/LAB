export default function DeskPage({ params }: { params: { locale: string } }) {
  return <div className="p-8">Desk ({params.locale})</div>;
}
