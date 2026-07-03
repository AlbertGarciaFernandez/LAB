export default function PipelinePage({ params }: { params: { locale: string } }) {
  return <div className="p-8">Pipeline ({params.locale})</div>;
}
