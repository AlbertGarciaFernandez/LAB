"use client";

import React from 'react';
import {
    Bot, Network, ShieldCheck, Cpu,
    BarChart3, ArrowRight, Check, Layers, Terminal
} from 'lucide-react';

const AIConsultingPage = () => {
    return (
        <div className="min-h-screen bg-black text-zinc-200 font-sans selection:bg-emerald-500/30">

            {/* --- HERO SECTION --- */}
            <section className="relative pt-32 pb-20 px-6 lg:px-8 max-w-7xl mx-auto text-center border-b border-zinc-900">
                <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-emerald-950/30 border border-emerald-900 text-emerald-400 text-sm font-medium">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                    AI Consulting & Automation
                </div>
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                    End-to-End AI Systems <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">
                        That Scale Revenue.
                    </span>
                </h1>
                <p className="text-xl text-zinc-400 max-w-3xl mx-auto mb-10 leading-relaxed">
                    The market is noisy. We move beyond chat interfaces to build <strong>Agentic Workflows</strong>—intelligent systems that execute tasks, make decisions, and drive your business forward without human intervention.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                    <button className="bg-emerald-500 hover:bg-emerald-400 text-black font-bold py-4 px-8 rounded-lg transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                        Book an Audit
                    </button>
                </div>
            </section>

            {/* --- WHY US (THE SHIFT) --- */}
            <section className="py-24 px-6 lg:px-8 bg-zinc-950">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-6">Profitability Over Novelty.</h2>
                            <p className="text-zinc-400 mb-6 text-lg">
                                Most companies waste months on isolated AI "experiments" that don't talk to their database. We act as your Strategic AI Architect.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Clarity amidst Technical Chaos",
                                    "Execution, Not Just Strategy",
                                    "Value-Based Impact & ROI"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-zinc-300">
                                        <Check className="text-emerald-500" size={20} />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="relative p-1 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-2xl">
                            <div className="bg-zinc-900 rounded-xl p-8 border border-zinc-800">
                                <div className="font-mono text-sm text-emerald-400 mb-4">// System_Status: OPTIMIZED</div>
                                <div className="space-y-4">
                                    <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                                        <div className="h-full w-3/4 bg-emerald-500"></div>
                                    </div>
                                    <div className="flex justify-between text-sm text-zinc-500">
                                        <span>Manual Task Load</span>
                                        <span className="text-emerald-400">-70% Reduction</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- SERVICES GRID --- */}
            <section className="py-24 px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Core AI Services</h2>
                    <p className="text-zinc-400">Specialized "Digital Workers" tailored to your infrastructure.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        { title: "Workflow Orchestration", icon: Network, desc: "Connecting siloed apps (CRM, ERP, Slack) into a unified ecosystem via n8n & Make." },
                        { title: "AI Sales Agents", icon: Bot, desc: "Autonomous agents that qualify leads, personalize outreach, and sync with your CRM." },
                        { title: "Inefficiency Audit", icon: BarChart3, desc: "We dissect your operations to find 'time leaks' and propose an automation roadmap." },
                        { title: "Support & Reception", icon: ShieldCheck, desc: "Intelligent voice/text agents that handle Tier-1 inquiries and scheduling." },
                        { title: "Content Automation", icon: Terminal, desc: "Systems that generate high-quality, brand-aligned content and schedule posts." },
                        { title: "Automated Finance", icon: Layers, desc: "Agents that scan invoices, match transactions, and categorize expenses automatically." }
                    ].map((service, idx) => (
                        <div key={idx} className="group p-8 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:border-emerald-500/40 hover:bg-zinc-900 transition-all duration-300">
                            <div className="mb-6 inline-block p-3 rounded-lg bg-emerald-500/10 text-emerald-400 group-hover:scale-110 transition-transform">
                                <service.icon size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                            <p className="text-zinc-400 leading-relaxed">{service.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- MIGRATION / TECH SECTION --- */}
            <section className="py-20 bg-zinc-900/30 border-y border-zinc-900">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-white mb-8">Zapier → n8n Migration</h2>
                    <p className="text-lg text-zinc-400 mb-10">
                        Own your infrastructure. We migrate expensive, high-volume workflows to self-hosted n8n,
                        often reducing monthly automation bills by <span className="text-emerald-400 font-bold">60-80%</span>.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                        <div className="p-6 bg-black border border-zinc-800 rounded-lg">
                            <h4 className="text-white font-bold mb-2">Cost Reduction</h4>
                            <p className="text-sm text-zinc-500">Stop paying per-task premiums.</p>
                        </div>
                        <div className="p-6 bg-black border border-zinc-800 rounded-lg">
                            <h4 className="text-white font-bold mb-2">Data Privacy</h4>
                            <p className="text-sm text-zinc-500">GDPR Compliant. Data stays on your servers.</p>
                        </div>
                        <div className="p-6 bg-black border border-zinc-800 rounded-lg">
                            <h4 className="text-white font-bold mb-2">Complex Logic</h4>
                            <p className="text-sm text-zinc-500">Branching logic that simple tools can't handle.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- FINAL CTA --- */}
            <section className="py-32 px-6 text-center">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Ready to Automate the Boring Stuff?</h2>
                    <p className="text-xl text-zinc-400 mb-12">
                        Stop drowning in manual tasks. Let's build a system that works for you while you sleep.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button className="px-10 py-5 bg-emerald-500 text-black text-lg font-bold rounded-xl hover:bg-emerald-400 transition-all shadow-[0_0_30px_rgba(16,185,129,0.4)]">
                            Book Your Automation Audit
                        </button>
                        <button className="px-10 py-5 bg-zinc-900 text-white text-lg font-bold rounded-xl border border-zinc-800 hover:bg-zinc-800 transition-all">
                            Talk to Lead Architect
                        </button>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default AIConsultingPage;
