"use client";

import React from 'react';
import { Bot, TrendingUp, Zap, ArrowRight, BrainCircuit } from 'lucide-react';
import Link from 'next/link';

const AIBanner = () => {
  return (
    <section className="relative w-full py-24 bg-[#0a0a0a] overflow-hidden border-y border-white/5">
      {/* Background Decor - Grid */}
      <div className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}>
      </div>

      {/* Background Glows (Subtle) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-hunter-green/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">

          {/* Left Content */}
          <div className="lg:w-1/2 space-y-8 relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1A2E26] border border-[#2D4A3E] text-[#00E6A0] text-[10px] font-bold tracking-widest uppercase shadow-[0_0_10px_rgba(0,230,160,0.1)]">
              <Zap size={12} fill="#00E6A0" />
              <span>AI & Process Automation</span>
            </div>

            <div className="space-y-4">
              <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter leading-[0.95]">
                Stop Experimenting. <br />
                <span className="text-[#00E6A0]">
                  Start Scaling.
                </span>
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed max-w-xl">
                Most companies are just "playing" with AI. We architect autonomous systems that integrate seamlessly with your existing stack to slash overhead and drive pure profit margins.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-5">
              <Link href="/ai-consulting" className="group inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-black transition-all duration-300 bg-[#00E6A0] rounded-lg hover:bg-[#00cc8e] hover:shadow-[0_0_30px_rgba(0,230,160,0.3)]">
                Explore The Lab
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="/ai-consulting#roi-calculator" className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-[#FF7A3C] transition-all duration-300 bg-transparent border border-[#FF7A3C]/30 rounded-lg hover:bg-[#FF7A3C]/10 hover:border-[#FF7A3C] hover:text-[#FF7A3C]">
                Calculate ROI
              </Link>
            </div>
          </div>

          {/* Right Content - Value Cards */}
          <div className="lg:w-5/12 w-full relative z-10">
            <div className="grid gap-4">
              {[
                { title: "Autonomous Agents", desc: "Deploy 24/7 AI staff for Sales & Ops.", icon: Bot },
                { title: "Workflow Orchestration", desc: "Replace manual data entry with n8n.", icon: Zap },
                { title: "Value-Driven Architecture", desc: "We sell recurring efficiency, not hours.", icon: TrendingUp },
              ].map((item, idx) => (
                <div key={idx} className="group flex items-center gap-5 p-5 rounded-2xl bg-[#0F0F0F] border border-white/5 hover:border-[#00E6A0]/30 transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#131313] border border-white/5 flex items-center justify-center text-[#00E6A0] group-hover:bg-[#00E6A0]/10 group-hover:border-[#00E6A0]/20 transition-all duration-300">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-base mb-1">{item.title}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
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