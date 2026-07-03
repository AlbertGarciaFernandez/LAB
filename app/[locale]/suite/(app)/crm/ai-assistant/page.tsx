export default function AiAssistantPage({ params }: { params: { locale: string } }) {
  return <div className="p-8">AI Assistant ({params.locale})</div>;
}
