export default function TasksPage({ params }: { params: { locale: string } }) {
  return <div className="p-8">Tasks ({params.locale})</div>;
}
