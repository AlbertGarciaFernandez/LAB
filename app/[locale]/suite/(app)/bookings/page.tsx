export default function BookingsPage({ params }: { params: { locale: string } }) {
  return <div className="p-8">Bookings ({params.locale})</div>;
}
