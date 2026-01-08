"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Calculator, AlertCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

const ROICalculator = () => {
    const t = useTranslations("AIConsulting.ROICalculator");
    const [employees, setEmployees] = useState(5);
    const [hoursPerWeek, setHoursPerWeek] = useState(10);
    const [hourlyRate, setHourlyRate] = useState(65);

    const [monthlySavings, setMonthlySavings] = useState(0);
    const [annualSavings, setAnnualSavings] = useState(0);

    useEffect(() => {
        const weeklyCost = employees * hoursPerWeek * hourlyRate;
        const monthly = weeklyCost * 4.33;
        const annual = weeklyCost * 52;
        setMonthlySavings(Math.round(monthly));
        setAnnualSavings(Math.round(annual));
    }, [employees, hoursPerWeek, hourlyRate]);

    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat('en-NL', {
            style: 'currency',
            currency: 'EUR',
            maximumFractionDigits: 0,
        }).format(value);
    };

    return (
        <section id="roi-calculator" className="py-32 px-6 bg-near-black relative overflow-hidden border-t border-white/5 z-20">
            {/* Background Decor */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-hunter-green/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-20">
                {/* Lado Izquierdo */}
                <div className="space-y-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-hunter-green/10 border border-hunter-green/20 text-hunter-green text-[10px] font-bold tracking-[0.2em] uppercase">
                        <Calculator size={14} />
                        {t("badge")}
                    </div>

                    <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.9]">
                        {t("title")} <br />
                        <span className="text-hunter-orange">{t("highlight")}</span> {t("subtitle")}
                    </h2>

                    <p className="text-xl text-gray-400 leading-relaxed max-w-xl">
                        {t("description")}
                    </p>

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-8 bg-surface-dark border border-white/10 rounded-2xl relative overflow-hidden group"
                    >
                        <div className="absolute top-0 left-0 w-1 h-full bg-hunter-green group-hover:w-full transition-all duration-500 opacity-20" />
                        <div className="flex items-start gap-5 relative z-10">
                            <AlertCircle className="text-hunter-green shrink-0 mt-1" size={28} />
                            <div>
                                <h4 className="text-white font-bold text-xl tracking-tight">{t("realityCard.title")}</h4>
                                <p className="text-sm text-gray-400 mt-2 leading-relaxed">
                                    {t("realityCard.description")}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Lado Derecho: La Calculadora */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative bg-surface-dark/50 backdrop-blur-sm border border-white/10 rounded-3xl p-10 shadow-2xl z-30"
                >
                    <div className="space-y-10 mb-12">
                        {/* Slider 1 */}
                        <div className="space-y-4">
                            <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-gray-400">
                                <span>{t("inputs.employees")}</span>
                                <span className="text-hunter-green">{employees} {t("inputs.employeesUnit")}</span>
                            </div>
                            <input
                                type="range" min="1" max="50" step="1"
                                value={employees} onChange={(e) => setEmployees(Number(e.target.value))}
                                className="w-full h-1.5 bg-near-black rounded-lg appearance-none cursor-pointer accent-hunter-green hover:accent-white transition-colors"
                            />
                        </div>

                        {/* Slider 2 */}
                        <div className="space-y-4">
                            <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-gray-400">
                                <span>{t("inputs.hours")}</span>
                                <span className="text-hunter-green">{hoursPerWeek} {t("inputs.hoursUnit")}</span>
                            </div>
                            <input
                                type="range" min="1" max="40" step="1"
                                value={hoursPerWeek} onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                                className="w-full h-1.5 bg-near-black rounded-lg appearance-none cursor-pointer accent-hunter-green hover:accent-white transition-colors"
                            />
                        </div>

                        {/* Slider 3 */}
                        <div className="space-y-4">
                            <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-gray-400">
                                <span>{t("inputs.rate")}</span>
                                <span className="text-hunter-green">€{hourlyRate}{t("inputs.rateUnit")}</span>
                            </div>
                            <input
                                type="range" min="20" max="200" step="5"
                                value={hourlyRate} onChange={(e) => setHourlyRate(Number(e.target.value))}
                                className="w-full h-1.5 bg-near-black rounded-lg appearance-none cursor-pointer accent-hunter-green hover:accent-white transition-colors"
                            />
                        </div>
                    </div>

                    {/* Resultados */}
                    <div className="bg-near-black rounded-2xl p-8 border border-white/5 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-hunter-orange/10 rounded-full blur-[60px] pointer-events-none" />

                        <div className="grid grid-cols-2 gap-10 text-center relative z-10">
                            <div className="space-y-1 border-r border-white/10 pr-5">
                                <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-bold">{t("results.monthly")}</p>
                                <p className="text-3xl font-black text-white tracking-tighter">{formatCurrency(monthlySavings)}</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-[10px] text-gray-400 uppercase tracking-[0.2em] font-bold">{t("results.annual")}</p>
                                <p className="text-3xl font-black text-hunter-green tracking-tighter">{formatCurrency(annualSavings)}</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-10 text-center space-y-6">
                        <p className="text-gray-500 text-xs font-medium tracking-wide">
                            {t("results.note")}
                        </p>
                        <Link href="/#contact" className="w-full py-5 bg-hunter-green text-near-black font-black uppercase tracking-widest text-xs rounded-xl transition-all hover:scale-[1.02] hover:bg-white shadow-[0_0_30px_rgba(0,230,162,0.2)] flex items-center justify-center gap-3 group">
                            {t("results.cta")}
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ROICalculator;