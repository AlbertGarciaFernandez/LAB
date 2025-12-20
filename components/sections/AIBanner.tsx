"use client";

import React from 'react';
import { Bot, TrendingUp, Zap, ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

const AIBanner = () => {
  return (
    <section className="relative w-full py-20 bg-zinc-950 overflow-hidden border-y border-zinc-800">
      {/* Background Decor - Subtle Grid */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

          {/* Left Content */}
          <div className="lg:w-1/2 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/20 border border-emerald-500/30 text-emerald-400 text-xs font-mono tracking-wider uppercase">
              <Zap size={14} />
              AI & Process Automation
            </div>

            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                Stop Experimenting. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                  Start Scaling.
                </span>
              </h2>
              <p className="text-lg text-zinc-400 leading-relaxed max-w-xl">
                Most companies are just "playing" with AI. We architect autonomous systems that integrate seamlessly with your existing stack to slash overhead and drive pure profit margins.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/ai-consulting" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-zinc-950 transition-all duration-200 bg-emerald-400 rounded-lg hover:bg-emerald-300 hover:shadow-[0_0_20px_rgba(52,211,153,0.3)]">
                Explore AI Audits
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a href="#roi-calculator" className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white transition-all duration-200 bg-transparent border border-zinc-700 rounded-lg hover:bg-zinc-800 hover:border-zinc-600">
                Calculate ROI
              </a>
            </div>
          </div>

          {/* Right Content - Value Cards */}
          <div className="lg:w-5/12 w-full">
            <div className="relative z-10 grid gap-4">
              {[
                { title: "Autonomous Agents", desc: "Deploy 24/7 AI staff for Sales & Ops.", icon: Bot },
                { title: "Workflow Orchestration", desc: "Replace manual data entry with n8n.", icon: Zap },
                { title: "Value-Driven Architecture", desc: "We sell recurring efficiency, not hours.", icon: TrendingUp },
              ].map((item, idx) => (
                <div key={idx} className="group flex items-start gap-4 p-5 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-emerald-500/30 transition-all duration-300">
                  <div className="p-3 rounded-lg bg-zinc-950 border border-zinc-800 text-emerald-400 group-hover:text-emerald-300 group-hover:border-emerald-500/30 transition-colors">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">{item.title}</h3>
                    <p className="text-zinc-400 text-sm mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AIBanner;