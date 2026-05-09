import LabCard from "@/components/lab/LabCard";
import { getLabData } from "@/content/lab";

export default function LabSettingsPage({ params: { locale } }: { params: { locale: string } }) {
  const data = getLabData(locale);

  return (
    <div className="space-y-6">
      <section className="grid gap-4 xl:grid-cols-[1.05fr_0.95fr]">
        <LabCard className="bg-[linear-gradient(135deg,#fffefb_0%,#f4efe6_100%)]">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-black/40">
            Settings
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-black">
            Workspace preferences
          </h1>
          <p className="text-black/62 mt-4 max-w-2xl text-sm leading-7">
            Keep the Lab shell feeling like a real client workspace: stable identity, visible
            progress, and clear defaults tied to the active system.
          </p>
        </LabCard>

        <LabCard>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-black/40">Profile</p>
          <p className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-black">
            {data.user.name}
          </p>
          <p className="text-black/58 mt-2 text-sm">{data.user.role}</p>
          <p className="text-black/62 mt-4 text-sm leading-6">{data.user.overallProgressSummary}</p>
        </LabCard>
      </section>

      <section className="grid gap-4 lg:grid-cols-3">
        <LabCard>
          <p className="text-sm font-medium text-black">Active system</p>
          <p className="mt-3 text-lg font-semibold tracking-[-0.02em] text-black">
            {data.user.activeSystemSlug}
          </p>
          <p className="mt-2 text-sm leading-6 text-black/60">
            Use the mocked active system as the default focus for recommendations and progress cues
            across the app.
          </p>
        </LabCard>

        <LabCard>
          <p className="text-sm font-medium text-black">Notifications</p>
          <p className="mt-3 text-sm leading-6 text-black/60">
            This placeholder keeps room for future digest and milestone settings without introducing
            account logic yet.
          </p>
        </LabCard>

        <LabCard>
          <p className="text-sm font-medium text-black">Access</p>
          <p className="mt-3 text-sm leading-6 text-black/60">
            The route remains part of the non-public Lab workspace, inheriting the app shell noindex
            behavior.
          </p>
        </LabCard>
      </section>
    </div>
  );
}
