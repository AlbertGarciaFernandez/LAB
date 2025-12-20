"use client";

import React from 'react';
import {
    Bot, Network, ShieldCheck, Cpu,
    BarChart3, ArrowRight, Check, Layers, Terminal, Zap
} from 'lucide-react';
import Header from "../../components/layout/Header";
import ROICalculator from '../../components/sections/ROICalculator';
import Footer from "../../components/layout/Footer";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import AnimatedSection from "../../components/layout/AnimatedSection";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
};

const ServiceCard = ({ service, idx }: { service: any, idx: number }) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({
        currentTarget,
        clientX,
        clientY,
    }: React.MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            className="group relative p-10 bg-surface-dark/40 border border-white/5 rounded-2xl transition-all duration-300 overflow-hidden"
        >
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
                    radial-gradient(
                        500px circle at ${mouseX}px ${mouseY}px,
                        rgba(0, 230, 162, 0.12) 0%,
                        rgba(255, 122, 60, 0.12) 35%,
                        transparent 80%
                    )
                `,
                }}
            />
            <div className="relative z-10">
                <div className="mb-8 inline-block p-4 rounded-xl bg-near-black border border-white/5 text-hunter-green group-hover:scale-110 group-hover:bg-hunter-green group-hover:text-near-black transition-all duration-300">
                    <service.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">{service.desc}</p>
            </div>
        </motion.div>
    );
};

const AIConsultingPage = () => {
    return (
        <div className="min-h-screen bg-near-black text-white font-sans selection:bg-hunter-green/30">
            <Header />

            <main>
                {/* --- HERO SECTION --- */}
                <section className="relative pt-40 pb-24 px-6 lg:px-8 max-w-7xl mx-auto text-center border-b border-white/5 overflow-hidden">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-hunter-green/10 rounded-full blur-[120px] pointer-events-none -z-10" />

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="relative z-10"
                    >
                        <motion.div
                            variants={itemVariants}
                            className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-hunter-green/10 border border-hunter-green/20 text-hunter-green text-[10px] font-bold tracking-[0.2em] uppercase"
                        >
                            <div className="w-2 h-2 rounded-full bg-hunter-green animate-pulse"></div>
                            AI Consulting & Automation
                        </motion.div>

                        <motion.h1
                            variants={itemVariants}
                            className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.9]"
                        >
                            End-to-End AI Systems <br />
                            <span className="text-hunter-green">
                                That Scale Revenue.
                            </span>
                        </motion.h1>

                        <motion.p
                            variants={itemVariants}
                            className="text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed"
                        >
                            The market is noisy. We move beyond chat interfaces to build <strong className="text-white">Agentic Workflows</strong>—intelligent systems that execute tasks, make decisions, and drive your business forward.
                        </motion.p>

                        <motion.div
                            variants={itemVariants}
                            className="flex flex-wrap justify-center gap-4"
                        >
                            <a href="#roi-calculator" className="relative group px-12 py-5 text-near-black font-bold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(0,230,162,0.3)] hover:shadow-[0_0_50px_rgba(0,230,162,0.5)]">
                                <div className="absolute inset-0 bg-hunter-green w-full h-full transition-all duration-300 group-hover:bg-hunter-green-dark" />
                                <span className="relative z-10">Get Your Audit</span>
                            </a>
                        </motion.div>
                    </motion.div>
                </section>

                {/* --- WHY US --- */}
                <AnimatedSection className="py-32 px-6 lg:px-8 bg-surface-dark/30">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-20 items-center">
                            <div className="space-y-8">
                                <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter leading-tight">
                                    Profitability <br />
                                    <span className="text-hunter-orange">Over Novelty.</span>
                                </h2>
                                <p className="text-gray-400 text-lg leading-relaxed">
                                    Most companies waste months on isolated AI "experiments" that don't talk to their database. We act as your Strategic AI Architect, focusing on ROI first.
                                </p>
                                <ul className="space-y-5">
                                    {[
                                        "Clarity amidst Technical Chaos",
                                        "Execution, Not Just Strategy",
                                        "Value-Based Impact & ROI"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-4 text-white/90 font-medium">
                                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-hunter-green/10 flex items-center justify-center border border-hunter-green/20">
                                                <Check className="text-hunter-green" size={14} />
                                            </div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-hunter-green to-hunter-orange rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                                <div className="relative bg-near-black rounded-xl p-10 border border-white/10">
                                    <div className="font-mono text-[10px] tracking-[0.2em] text-hunter-green mb-6 uppercase tracking-widest">// System_Status: OPTIMIZED</div>
                                    <div className="space-y-6">
                                        <div className="space-y-2">
                                            <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-gray-500">
                                                <span>Workforce Efficiency</span>
                                                <span className="text-hunter-green">+320%</span>
                                            </div>
                                            <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: "85%" }}
                                                    transition={{ duration: 1.5, ease: "easeOut" }}
                                                    className="h-full bg-hunter-green"
                                                ></motion.div>
                                            </div>
                                        </div>
                                        <div className="flex justify-between items-end">
                                            <div className="space-y-1">
                                                <span className="block text-[10px] text-gray-500 uppercase font-bold tracking-widest">Manual Task Load</span>
                                                <span className="text-2xl font-black text-white tracking-tighter">-70% Reduction</span>
                                            </div>
                                            <ShieldCheck className="text-hunter-green/40" size={40} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </AnimatedSection>

                {/* --- SERVICES GRID --- */}
                <AnimatedSection className="py-32 px-6 lg:px-8 max-w-7xl mx-auto">
                    <div className="text-center mb-20 space-y-4">
                        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase">Core AI Services</h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">Specialized "Digital Workers" tailored to your infrastructure.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "Workflow Orchestration", icon: Network, desc: "Connecting siloed apps (CRM, ERP, Slack) into a unified ecosystem via n8n & Make." },
                            { title: "AI Sales Agents", icon: Bot, desc: "Autonomous agents that qualify leads, personalize outreach, and sync with your CRM." },
                            { title: "Inefficiency Audit", icon: BarChart3, desc: "We dissect your operations to find 'time leaks' and propose an automation roadmap." },
                            { title: "Support & Reception", icon: ShieldCheck, desc: "Intelligent voice/text agents that handle Tier-1 inquiries and scheduling." },
                            { title: "Content Automation", icon: Terminal, desc: "Systems that generate high-quality, brand-aligned content and schedule posts." },
                            { title: "Automated Finance", icon: Layers, desc: "Agents that scan invoices, match transactions, and categorize expenses automatically." }
                        ].map((service, idx) => (
                            <ServiceCard key={idx} service={service} idx={idx} />
                        ))}
                    </div>
                </AnimatedSection>

                {/* --- MIGRATION / TECH SECTION --- */}
                <AnimatedSection className="py-32 bg-surface-dark/10 border-y border-white/5 relative overflow-hidden">
                    {/* Background Ornaments */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-hunter-orange/5 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />

                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-20 items-center">
                            {/* Left Side: Content */}
                            <div className="space-y-8">
                                <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-hunter-orange/10 border border-hunter-orange/20 text-hunter-orange text-[10px] font-bold tracking-[0.2em] uppercase">
                                    Infrastructure Migration
                                </div>
                                <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-[0.9]">
                                    Zapier <ArrowRight className="inline text-hunter-orange" size={40} /> <br />
                                    <span className="text-hunter-orange">n8n Migration</span>
                                </h2>
                                <p className="text-xl text-gray-400 leading-relaxed max-w-xl text-left">
                                    Stop paying for every single task executed. We migrate high-volume, mission-critical workflows to <strong className="text-white">self-hosted infrastructure</strong>.
                                </p>

                                <div className="space-y-4">
                                    <div className="p-6 bg-near-black/50 border border-white/5 rounded-2xl relative overflow-hidden group">
                                        <div className="absolute top-0 left-0 w-1 h-full bg-hunter-green" />
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-1">Estimated Savings</p>
                                                <p className="text-3xl font-black text-white">-80% <span className="text-sm font-medium text-gray-500 tracking-normal capitalize">on monthly bills</span></p>
                                            </div>
                                            <Zap className="text-hunter-green animate-pulse" size={32} />
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 gap-4">
                                    {[
                                        { label: "Cost Reduction", desc: "No more per-task usage fees. Run unlimited workflows.", icon: Zap },
                                        { label: "Data Ownership", desc: "Server-side control. Your data never leaves your VPC.", icon: ShieldCheck },
                                        { label: "Architecture", desc: "Advanced branching and loops that Zapier can't handle.", icon: Cpu }
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-4 p-4 rounded-xl border border-white/5 bg-near-black/30 hover:bg-near-black/50 transition-colors">
                                            <div className="w-10 h-10 rounded-lg bg-surface-dark flex items-center justify-center border border-white/10 text-hunter-orange">
                                                <item.icon size={20} />
                                            </div>
                                            <div>
                                                <h4 className="text-white font-bold text-sm tracking-tight">{item.label}</h4>
                                                <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Right Side: Reimagined Visual Flow */}
                            <div className="relative group">
                                {/* Glow behind the main container */}
                                <div className="absolute -inset-4 bg-hunter-green/5 rounded-[40px] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                                <div className="relative aspect-[4/5] w-full max-w-[450px] mx-auto bg-near-black/40 border border-white/5 rounded-[32px] p-10 overflow-hidden backdrop-blur-sm">
                                    {/* Subtler technical background */}
                                    <div className="absolute inset-0 opacity-[0.03]"
                                        style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />

                                    <div className="relative h-full flex flex-col items-center z-10">
                                        {/* Header of the visualizer */}
                                        <div className="w-full flex justify-between items-center mb-12 opacity-40">
                                            <div className="flex gap-1.5">
                                                <div className="w-2 h-2 rounded-full bg-red-500/50" />
                                                <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                                                <div className="w-2 h-2 rounded-full bg-green-500/50" />
                                            </div>
                                            <div className="text-[10px] font-mono tracking-widest uppercase">System_migration_v2.0</div>
                                        </div>

                                        {/* Zapier Node (The "Old Way") */}
                                        <motion.div
                                            initial={{ opacity: 0.5, scale: 0.95 }}
                                            whileInView={{ opacity: 0.5, scale: 0.95 }}
                                            className="w-full p-6 rounded-2xl border border-white/10 bg-surface-dark/40 flex items-center justify-between grayscale relative group/old"
                                        >
                                            <div className="flex items-center gap-5">
                                                <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                                                    <Zap className="text-orange-500/40" size={24} />
                                                </div>
                                                <div className="space-y-2">
                                                    <div className="text-xs font-bold text-gray-400 uppercase tracking-tighter">Legacy Flow</div>
                                                    <div className="w-28 h-1.5 bg-white/10 rounded-full" />
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <div className="text-[10px] text-orange-500/60 font-mono font-bold">COST: $$$$</div>
                                            </div>

                                            {/* Red diagonal strike-through on hover/init */}
                                            <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
                                                <div className="w-[120%] h-[1px] bg-red-500/20 rotate-[15deg]" />
                                            </div>
                                        </motion.div>

                                        {/* Central Flow Lane */}
                                        <div className="flex-1 relative w-full flex justify-center py-4">
                                            {/* Vertical circuit lines */}
                                            <div className="w-px h-full bg-white/5 relative">
                                                {/* Pulsing data points */}
                                                {[0, 1, 2].map((i) => (
                                                    <motion.div
                                                        key={i}
                                                        animate={{
                                                            y: [-20, 180],
                                                            opacity: [0, 1, 0]
                                                        }}
                                                        transition={{
                                                            duration: 3,
                                                            repeat: Infinity,
                                                            delay: i * 1,
                                                            ease: "linear"
                                                        }}
                                                        className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-hunter-green rounded-full shadow-[0_0_15px_#00E6A2]"
                                                    />
                                                ))}
                                            </div>

                                            {/* Side scanning lines */}
                                            <div className="absolute inset-0 flex items-center justify-around opacity-10 pointer-events-none">
                                                <div className="w-full h-px bg-gradient-to-r from-transparent via-white to-transparent" />
                                            </div>
                                        </div>

                                        {/* n8n Node (The "New Way") */}
                                        <motion.div
                                            initial={{ y: 20, opacity: 0 }}
                                            whileInView={{ y: 0, opacity: 1 }}
                                            transition={{ delay: 0.2 }}
                                            className="w-full p-8 rounded-2xl border border-hunter-green/30 bg-hunter-green/5 flex items-center justify-between shadow-[0_0_40px_rgba(0,230,162,0.1)] relative overflow-hidden"
                                        >
                                            {/* Selection glow and accent */}
                                            <div className="absolute top-0 left-0 w-1 h-full bg-hunter-green" />
                                            <div className="absolute -right-4 -top-4 w-12 h-12 bg-hunter-green/10 blur-xl rounded-full" />

                                            <div className="flex items-center gap-5">
                                                <div className="w-14 h-14 rounded-xl bg-hunter-green flex items-center justify-center shadow-[0_0_20px_rgba(0,230,162,0.4)]">
                                                    <Cpu className="text-near-black" size={28} />
                                                </div>
                                                <div className="space-y-2">
                                                    <div className="text-xs font-black text-hunter-green uppercase tracking-[0.2em]">Optimized Core</div>
                                                    <div className="flex gap-1">
                                                        <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-8 h-1.5 bg-hunter-green/40 rounded-full" />
                                                        <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }} className="w-12 h-1.5 bg-hunter-green/40 rounded-full" />
                                                        <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }} className="w-6 h-1.5 bg-hunter-green/40 rounded-full" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-hunter-green/10 border border-hunter-green/20 text-[9px] font-black text-hunter-green uppercase mb-2">
                                                    Activating...
                                                </div>
                                                <div className="text-[10px] text-gray-500 font-mono">ID: n8n_SYSTEM_01</div>
                                            </div>
                                        </motion.div>

                                        {/* Status Footer */}
                                        <div className="w-full grid grid-cols-2 gap-4 mt-8">
                                            <div className="p-3 bg-white/5 rounded-lg border border-white/5 flex flex-col">
                                                <span className="text-[8px] uppercase text-gray-500 font-bold mb-1">Latency</span>
                                                <span className="text-xs font-mono text-hunter-green">4ms (Local)</span>
                                            </div>
                                            <div className="p-3 bg-white/5 rounded-lg border border-white/5 flex flex-col">
                                                <span className="text-[8px] uppercase text-gray-500 font-bold mb-1">Scalability</span>
                                                <span className="text-xs font-mono text-hunter-green">Unlimited</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </AnimatedSection>

                {/* ROICalculator moved here */}
                <ROICalculator />

                {/* --- FINAL CTA --- */}
                <section className="py-40 px-6 text-center relative overflow-hidden">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-hunter-orange/5 rounded-full blur-[120px] pointer-events-none" />

                    <AnimatedSection className="max-w-4xl mx-auto relative z-10 border-none bg-transparent">
                        <h2 className="text-5xl md:text-7xl font-black text-white mb-10 tracking-tighter leading-[0.9]">
                            Ready to Automate <br />
                            <span className="text-hunter-orange">the Boring Stuff?</span>
                        </h2>
                        <p className="text-xl text-gray-400 mb-16 leading-relaxed max-w-2xl mx-auto">
                            Stop drowning in manual tasks. Let's build a system that works for you while you sleep.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-6">
                            <a href="/#contact" className="relative group px-12 py-6 text-near-black font-extrabold rounded-lg overflow-hidden transition-all duration-300 hover:scale-[1.05] shadow-[0_0_30px_rgba(255,122,60,0.3)] hover:shadow-[0_0_50px_rgba(255,122,60,0.5)] inline-block">
                                <div className="absolute inset-0 bg-hunter-orange w-full h-full transition-all duration-300 group-hover:bg-hunter-orange-dark" />
                                <span className="relative z-10 uppercase tracking-widest text-sm">Initialize Project</span>
                            </a>
                            <a href="mailto:albert@codehunterlab.com" className="px-12 py-6 bg-transparent text-white text-sm uppercase tracking-widest font-extrabold rounded-lg border border-white/10 hover:bg-white/5 hover:border-white/20 transition-all inline-block">
                                Talk to Lead Architect
                            </a>
                        </div>
                    </AnimatedSection>
                </section>
            </main>


        </div>
    );
};

export default AIConsultingPage;
