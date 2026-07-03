export default function WhatsappPage({ params }: { params: { locale: string } }) {
  return <div className="p-8">WhatsApp ({params.locale})</div>;
}
