"use client";

import { m } from "framer-motion";
import { ClockIcon, TrendUpIcon, HouseIcon, WarningIcon } from "@phosphor-icons/react/dist/ssr";

const responseData = [
  { hour: "0-2h", rate: 85, label: "85% conversion", color: "bg-emerald-400" },
  { hour: "2-6h", rate: 62, label: "62% conversion", color: "bg-emerald-300" },
  { hour: "6-12h", rate: 41, label: "41% conversion", color: "bg-amber-400" },
  { hour: "12-24h", rate: 23, label: "23% conversion", color: "bg-amber-300" },
  { hour: "24h+", rate: 8, label: "8% conversion", color: "bg-red-400" },
];

const speedInsights = [
  {
    icon: ClockIcon,
    stat: "< 2 min",
    desc: "Average response time with automation vs 4-6 hours manually",
  },
  {
    icon: TrendUpIcon,
    stat: "3.2x",
    desc: "Higher conversion rate when leads are contacted within 15 minutes",
  },
  {
    icon: HouseIcon,
    stat: "10 PM",
    desc: "Peak enquiry time. Most agencies miss 60% of evening leads",
  },
  {
    icon: WarningIcon,
    stat: "€0",
    desc: "Cost per automated response. Manual follow-up costs €12-18 per lead",
  },
];

export default function ResponseSpeedChart() {
  return (
    <section className="relative z-10 border-y border-white/5 bg-gradient-to-b from-[#1A120B] to-near-black py-24">
      <div className="mx-auto max-w-7xl px-6">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-hunter-orange">
            Speed Wins Deals
          </p>
          <h2 className="text-4xl font-black uppercase tracking-tighter text-white md:text-5xl">
            Response Time = Revenue
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-400">
            In real estate, the first agency to respond wins the client. Every minute costs money.
          </p>
        </m.div>

        {/* Chart */}
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 rounded-3xl border border-white/5 bg-white/[0.02] p-8 backdrop-blur-sm md:p-12"
        >
          <div className="mb-8 flex items-center justify-between">
            <h3 className="text-lg font-black uppercase tracking-tight text-white">
              Lead Response Time vs Conversion
            </h3>
            <span className="rounded-full border border-hunter-orange/20 bg-hunter-orange/10 px-3 py-1 text-xs font-bold text-hunter-orange">
              Data from 200+ Dutch agencies
            </span>
          </div>

          <div className="space-y-6">
            {responseData.map((item, idx) => (
              <m.div
                key={item.hour}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm font-bold text-white">{item.hour}</span>
                  <span className="text-xs font-mono text-gray-400">{item.label}</span>
                </div>
                <div className="h-8 w-full overflow-hidden rounded-full bg-white/5">
                  <m.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.rate}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: idx * 0.1 + 0.3, ease: "easeOut" }}
                    className={`h-full rounded-full ${item.color} opacity-80`}
                  />
                </div>
              </m.div>
            ))}
          </div>

          <div className="mt-8 flex items-center gap-2 rounded-xl border border-hunter-orange/10 bg-hunter-orange/5 p-4">
            <WarningIcon size={20} className="flex-shrink-0 text-hunter-orange" />
            <p className="text-sm text-gray-300">
              <span className="font-bold text-white">Critical insight:</span> 78% of leads who
              contact an agency after 5 PM never receive a response until the next business day.
              Automated systems capture these leads instantly.
            </p>
          </div>
        </m.div>

        {/* Speed insights grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {speedInsights.map((insight, idx) => {
            const Icon = insight.icon;
            return (
              <m.div
                key={insight.stat}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 text-center transition-colors hover:border-hunter-orange/20 hover:bg-white/[0.04]"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-hunter-orange/10">
                  <Icon size={24} className="text-hunter-orange" />
                </div>
                <div className="mb-2 text-3xl font-black text-white">{insight.stat}</div>
                <p className="text-xs leading-relaxed text-gray-400">{insight.desc}</p>
              </m.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
