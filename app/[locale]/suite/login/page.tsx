export default function LoginPage({ params }: { params: { locale: string } }) {
  return <div className="p-8">Login ({params.locale})</div>;
}
