export default function SuitePage({ params }: { params: { locale: string } }) {
  return <div className="p-8">Suite Landing ({params.locale})</div>;
}
