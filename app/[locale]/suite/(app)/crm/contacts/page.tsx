export default function ContactsPage({ params }: { params: { locale: string } }) {
  return <div className="p-8">Contacts ({params.locale})</div>;
}
