import React from "react";
import Link from "next/link";
import { Linkedin, Mail, ArrowUpRight, Github, Twitter } from "lucide-react";

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-near-black pt-24 pb-12 px-6 overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-hunter-green/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-hunter-orange/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
                    {/* Brand Section */}
                    <div className="space-y-6 col-span-1 lg:col-span-1">
                        <Link href="/" className="group inline-block">
                            <h3 className="text-3xl font-black uppercase tracking-tighter text-white transition-transform group-hover:scale-105 duration-300">
                                CodeHunter <span className="text-hunter-green">Lab</span>
                            </h3>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                            Architecting the future of enterprise automation and AI-driven workflows.
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="https://www.linkedin.com/in/albertgarciafernandez/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-hunter-green hover:bg-hunter-green/10 transition-all duration-300"
                            >
                                <Linkedin size={20} />
                            </a>
                            <a
                                href="mailto:albert@codehunterlab.com"
                                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-hunter-orange hover:bg-hunter-orange/10 transition-all duration-300"
                            >
                                <Mail size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Expertise</h4>
                        <ul className="space-y-4">
                            {['AI Agents', 'n8n Migration', 'System Architecture', 'Custom LLMs'].map((item) => (
                                <li key={item}>
                                    <a href="#services" className="text-gray-500 hover:text-white text-sm transition-colors flex items-center group gap-2">
                                        {item}
                                        <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Navigation</h4>
                        <ul className="space-y-4">
                            {[
                                { name: 'AI Consulting', href: '/ai-consulting' },
                                { name: 'Our Work', href: '/#work' },
                                { name: 'Calculator', href: '/ai-consulting#calculator' },
                                { name: 'Contact', href: '/#contact' }
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="text-gray-500 hover:text-white text-sm transition-colors">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Availability */}
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-2 h-2 rounded-full bg-hunter-green animate-pulse" />
                            <span className="text-[10px] font-bold text-hunter-green uppercase tracking-[0.2em]">Next Opening: Feb 2026</span>
                        </div>
                        <h4 className="text-white font-bold text-lg mb-2">Ready to scale?</h4>
                        <p className="text-gray-400 text-xs mb-6">Booking architecture audits for Q1.</p>
                        <a
                            href="mailto:albert@codehunterlab.com"
                            className="block w-full py-3 bg-hunter-orange/10 border border-hunter-orange/20 text-hunter-orange text-center rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-hunter-orange hover:text-near-black transition-all"
                        >
                            Drop a Line
                        </a>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex flex-col md:flex-row items-center gap-2 md:gap-8">
                        <p className="text-[11px] text-gray-500 font-medium uppercase tracking-widest">
                            &copy; {currentYear} CodeHunter Lab.
                        </p>
                        <div className="flex gap-4">
                            <span className="text-[11px] font-bold text-hunter-green/80 uppercase tracking-widest">Leiden, Netherlands</span>
                        </div>
                    </div>

                    <div className="text-[11px] text-gray-500 font-medium uppercase tracking-[0.2em]">
                        Developed by <span className="text-gray-300 font-bold hover:text-hunter-orange transition-colors cursor-default">Albert Garcia</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
