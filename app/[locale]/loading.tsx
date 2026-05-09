export default function Loading() {
  return (
    <div className="min-h-screen bg-near-black">
      {/* Header skeleton */}
      <div className="fixed top-0 z-50 w-full bg-near-black/60 backdrop-blur-xl">
        <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-4 md:px-8">
          <div className="flex items-center gap-3">
            <div className="h-11 w-11 animate-pulse rounded-xl bg-white/10" />
            <div className="flex flex-col gap-1.5">
              <div className="h-3 w-24 animate-pulse rounded bg-white/10" />
              <div className="h-2.5 w-12 animate-pulse rounded bg-white/5" />
            </div>
          </div>
          <div className="hidden items-center space-x-1 lg:flex">
            <div className="flex items-center space-x-1 rounded-full border border-white/5 bg-surface-dark/50 px-2 py-1">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="h-8 w-20 animate-pulse rounded-full bg-white/5" />
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2 md:gap-4">
            <div className="h-9 w-28 animate-pulse rounded-full bg-white/10 md:h-10" />
            <div className="hidden h-10 w-28 animate-pulse rounded-full bg-white/10 md:inline-flex" />
          </div>
        </div>
      </div>

      {/* Main content skeleton */}
      <main className="pt-24">
        {/* Hero skeleton */}
        <section className="relative flex min-h-[80vh] items-center px-4 md:px-8">
          <div className="mx-auto w-full max-w-7xl">
            <div className="h-6 w-48 animate-pulse rounded bg-white/5" />
            <div className="mt-6 h-16 w-3/4 animate-pulse rounded bg-white/10 md:h-24 md:w-2/3" />
            <div className="mt-4 h-16 w-1/2 animate-pulse rounded bg-white/10 md:h-24" />
            <div className="mt-8 h-24 w-full max-w-lg animate-pulse rounded bg-white/5" />
            <div className="mt-8 flex gap-4">
              <div className="h-12 w-40 animate-pulse rounded-full bg-white/10" />
              <div className="h-12 w-40 animate-pulse rounded-full bg-white/5" />
            </div>
          </div>
        </section>

        {/* Sections skeleton */}
        {[...Array(4)].map((_, i) => (
          <section key={i} className="px-4 py-24 md:px-8">
            <div className="mx-auto max-w-7xl">
              <div className="mb-12 flex items-end justify-between">
                <div>
                  <div className="h-4 w-32 animate-pulse rounded bg-white/5" />
                  <div className="mt-3 h-10 w-64 animate-pulse rounded bg-white/10" />
                </div>
                <div className="hidden h-10 w-32 animate-pulse rounded bg-white/5 md:block" />
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[...Array(3)].map((__, j) => (
                  <div key={j} className="rounded-2xl border border-white/5 bg-white/5 p-6">
                    <div className="h-12 w-12 animate-pulse rounded-xl bg-white/10" />
                    <div className="mt-4 h-6 w-3/4 animate-pulse rounded bg-white/10" />
                    <div className="mt-3 h-20 w-full animate-pulse rounded bg-white/5" />
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}
