"use client";

import { m } from "framer-motion";
import {
  MagnifyingGlassIcon,
  ChatTeardropTextIcon,
  CalendarCheckIcon,
  ClipboardTextIcon,
  StarIcon,
} from "@phosphor-icons/react/dist/ssr";

const journeySteps = [
  {
    icon: MagnifyingGlassIcon,
    step: "01",
    title: "Discovery",
    time: "0 min",
    desc: "Patient searches Google or clicks ad",
    auto: "UTM tracking + instant landing page",
  },
  {
    icon: ChatTeardropTextIcon,
    step: "02",
    title: "First Contact",
    time: "< 2 min",
    desc: "WhatsApp or form enquiry received",
    auto: "Auto-reply with booking link + FAQ",
  },
  {
    icon: CalendarCheckIcon,
    step: "03",
    title: "Booking",
    time: "3-5 min",
    desc: "Self-service calendar booking",
    auto: "Calendar sync + confirmation message",
  },
  {
    icon: ClipboardTextIcon,
    step: "04",
    title: "Pre-Visit",
    time: "48h + 2h before",
    desc: "Automated reminders and intake",
    auto: "WhatsApp reminders + digital forms",
  },
  {
    icon: StarIcon,
    step: "05",
    title: "Post-Visit",
    time: "Same day",
    desc: "Follow-up and reactivation",
    auto: "Review request + reactivation trigger",
  },
];

export default function PatientJourneyTimeline() {
  return (
    <section className="relative z-10 border-y border-white/5 bg-gradient-to-b from-[#0B1A1A] to-near-black py-24">
      <div className="mx-auto max-w-7xl px-6">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-hunter-green">
            Patient Journey Automation
          </p>
          <h2 className="text-4xl font-black uppercase tracking-tighter text-white md:text-5xl">
            From Search to Loyal Patient
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-400">
            Every touchpoint automated. Zero manual work from your team.
          </p>
        </m.div>

        <div className="relative">
          {/* Connector line */}
          <div className="absolute bottom-12 left-6 top-12 w-0.5 bg-gradient-to-b from-hunter-green/50 via-hunter-green/20 to-hunter-green/5 md:left-1/2 md:-ml-0.5" />

          <div className="space-y-12">
            {journeySteps.map((step, idx) => {
              const Icon = step.icon;
              const isEven = idx % 2 === 0;
              return (
                <m.div
                  key={step.step}
                  initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`relative flex items-start gap-6 md:gap-0 ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content side */}
                  <div className={`flex-1 ${isEven ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <div
                      className={`rounded-2xl border border-white/5 bg-white/[0.02] p-6 backdrop-blur-sm transition-colors hover:border-hunter-green/20 hover:bg-white/[0.04] ${isEven ? "md:ml-auto md:max-w-md" : "md:max-w-md"}`}
                    >
                      <div
                        className={`mb-3 flex items-center gap-3 ${isEven ? "md:flex-row-reverse" : ""}`}
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-hunter-green/10">
                          <Icon size={20} className="text-hunter-green" />
                        </div>
                        <span className="font-mono text-xs text-hunter-green">{step.step}</span>
                      </div>
                      <h3 className="mb-2 text-xl font-black uppercase tracking-tight text-white">
                        {step.title}
                      </h3>
                      <p className="mb-3 text-sm text-gray-400">{step.desc}</p>
                      <div
                        className={`inline-flex items-center gap-2 rounded-full border border-hunter-green/20 bg-hunter-green/5 px-3 py-1.5 text-xs font-bold text-hunter-green`}
                      >
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-hunter-green" />
                        {step.auto}
                      </div>
                      <div
                        className={`mt-3 font-mono text-[10px] uppercase tracking-widest text-gray-500`}
                      >
                        Response time: {step.time}
                      </div>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border-2 border-hunter-green/30 bg-near-black md:absolute md:left-1/2 md:-ml-6">
                    <span className="font-mono text-sm font-bold text-hunter-green">
                      {step.step}
                    </span>
                  </div>

                  {/* Empty side for balance */}
                  <div className="hidden flex-1 md:block" />
                </m.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
