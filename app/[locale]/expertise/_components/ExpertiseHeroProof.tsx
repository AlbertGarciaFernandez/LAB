type Tone = "green" | "orange" | "cyan";

const toneClasses: Record<
  Tone,
  {
    border: string;
    bg: string;
    dot: string;
    text: string;
  }
> = {
  green: {
    border: "border-hunter-green/20",
    bg: "bg-hunter-green/[0.06]",
    dot: "bg-hunter-green shadow-[0_0_12px_rgba(0,230,162,0.55)]",
    text: "text-hunter-green",
  },
  orange: {
    border: "border-hunter-orange/20",
    bg: "bg-hunter-orange/[0.06]",
    dot: "bg-hunter-orange shadow-[0_0_12px_rgba(255,122,60,0.55)]",
    text: "text-hunter-orange",
  },
  cyan: {
    border: "border-cyan-400/20",
    bg: "bg-cyan-400/[0.06]",
    dot: "bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.55)]",
    text: "text-cyan-300",
  },
};

export default function ExpertiseHeroProof({
  items,
  tone = "green",
}: {
  items: string[];
  tone?: Tone;
}) {
  const classes = toneClasses[tone];

  return (
    <div className="mt-8 grid w-full max-w-3xl gap-3 sm:grid-cols-3">
      {items.map((item) => (
        <div
          key={item}
          className={`group flex items-center justify-center gap-3 rounded-2xl border ${classes.border} ${classes.bg} px-4 py-3 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.04]`}
        >
          <span className={`h-2 w-2 flex-shrink-0 rounded-full ${classes.dot}`} />
          <span
            className={`text-center font-mono text-[10px] font-black uppercase tracking-[0.16em] ${classes.text}`}
          >
            {item}
          </span>
        </div>
      ))}
    </div>
  );
}
