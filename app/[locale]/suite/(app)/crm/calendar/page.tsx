export default function CalendarPage({ params }: { params: { locale: string } }) {
  return <div className="p-8">Calendar ({params.locale})</div>;
}
