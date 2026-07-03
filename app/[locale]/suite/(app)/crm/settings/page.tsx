export default function SettingsPage({ params }: { params: { locale: string } }) {
  return <div className="p-8">Settings ({params.locale})</div>;
}
