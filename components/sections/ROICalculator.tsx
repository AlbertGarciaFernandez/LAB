"use client";

import React, { useState } from "react";
import { Link } from "@/navigation";
import { CalculatorIcon, WarningCircleIcon, ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";
import { m } from "framer-motion";
import { useTranslations } from "next-intl";

const ROICalculator = () => {
  const t = useTranslations("AIConsulting.ROICalculator");
  const [employees, setEmployees] = useState(5);
  const [hoursPerWeek, setHoursPerWeek] = useState(10);
  const [hourlyRate, setHourlyRate] = useState(65);

  const weeklyCost = employees * hoursPerWeek * hourlyRate;
  const monthlySavings = Math.round(weeklyCost * 4.33);
  const annualSavings = Math.round(weeklyCost * 52);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-NL", {
      style: "currency",
      currency: "EUR",
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <section
      id="roi-calculator"
      className="relative z-20 overflow-hidden border-t border-white/5 bg-near-black px-6 py-32"
    >
      {/* Background Decor */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-hunter-green/5 blur-[120px]" />

      <div className="relative z-20 mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-2">
        {/* Lado Izquierdo */}
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-hunter-green/20 bg-hunter-green/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-hunter-green">
            <CalculatorIcon size={14} />
            {t("badge")}
          </div>

          <h2 className="text-5xl font-black leading-[0.9] tracking-tighter text-white md:text-7xl">
            {t("title")} <br />
            <span className="text-hunter-orange">{t("highlight")}</span> {t("subtitle")}
          </h2>

          <p className="max-w-xl text-xl leading-relaxed text-gray-400">{t("description")}</p>

          <m.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-surface-dark p-8"
          >
            <div className="absolute left-0 top-0 h-full w-1 bg-hunter-green opacity-20 transition-all duration-500 group-hover:w-full" />
            <div className="relative z-10 flex items-start gap-5">
              <WarningCircleIcon className="mt-1 shrink-0 text-hunter-green" size={28} />
              <div>
                <h4 className="text-xl font-bold tracking-tight text-white">
                  {t("realityCard.title")}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">
                  {t("realityCard.description")}
                </p>
              </div>
            </div>
          </m.div>
        </div>

        {/* Lado Derecho: La Calculadora */}
        <m.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative z-30 rounded-3xl border border-white/10 bg-surface-dark/50 p-10 shadow-2xl backdrop-blur-sm"
        >
          <div className="mb-12 space-y-10">
            {/* Slider 1 */}
            <div className="space-y-4">
              <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-gray-400">
                <span>{t("inputs.employees")}</span>
                <span className="text-hunter-green">
                  {employees} {t("inputs.employeesUnit")}
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="50"
                step="1"
                value={employees}
                onChange={(e) => setEmployees(Number(e.target.value))}
                className="h-1.5 w-full cursor-pointer appearance-none rounded-lg bg-near-black accent-hunter-green transition-colors hover:accent-white"
              />
            </div>

            {/* Slider 2 */}
            <div className="space-y-4">
              <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-gray-400">
                <span>{t("inputs.hours")}</span>
                <span className="text-hunter-green">
                  {hoursPerWeek} {t("inputs.hoursUnit")}
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="40"
                step="1"
                value={hoursPerWeek}
                onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                className="h-1.5 w-full cursor-pointer appearance-none rounded-lg bg-near-black accent-hunter-green transition-colors hover:accent-white"
              />
            </div>

            {/* Slider 3 */}
            <div className="space-y-4">
              <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-gray-400">
                <span>{t("inputs.rate")}</span>
                <span className="text-hunter-green">
                  €{hourlyRate}
                  {t("inputs.rateUnit")}
                </span>
              </div>
              <input
                type="range"
                min="20"
                max="200"
                step="5"
                value={hourlyRate}
                onChange={(e) => setHourlyRate(Number(e.target.value))}
                className="h-1.5 w-full cursor-pointer appearance-none rounded-lg bg-near-black accent-hunter-green transition-colors hover:accent-white"
              />
            </div>
          </div>

          {/* Resultados */}
          <div className="group relative overflow-hidden rounded-2xl border border-white/5 bg-near-black p-8">
            <div className="pointer-events-none absolute right-0 top-0 h-[200px] w-[200px] rounded-full bg-hunter-orange/10 blur-[60px]" />

            <div className="relative z-10 grid grid-cols-2 gap-10 text-center">
              <div className="space-y-1 border-r border-white/10 pr-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">
                  {t("results.monthly")}
                </p>
                <p className="text-3xl font-black tracking-tighter text-white">
                  {formatCurrency(monthlySavings)}
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
                  {t("results.annual")}
                </p>
                <p className="text-3xl font-black tracking-tighter text-hunter-green">
                  {formatCurrency(annualSavings)}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 space-y-6 text-center">
            <p className="text-xs font-medium tracking-wide text-gray-500">{t("results.note")}</p>
            <Link
              href="/#contact"
              className="group flex w-full items-center justify-center gap-3 rounded-xl bg-hunter-green py-5 text-xs font-black uppercase tracking-widest text-near-black shadow-[0_0_30px_rgba(0,230,162,0.2)] transition-all hover:scale-[1.02] hover:bg-white"
            >
              {t("results.cta")}
              <ArrowRightIcon
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </m.div>
      </div>
    </section>
  );
};

export default ROICalculator;
