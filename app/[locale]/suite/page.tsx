"use client";

import Link from "next/link";
import { m } from "framer-motion";
import {
  Users,
  Boxes,
  Headset,
  CalendarCheck,
  GitBranch,
  BarChart3,
  Sparkles,
  ArrowRight,
  ChevronDown,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { suiteProducts } from "@/content/suite/products";
import type { SuiteProduct } from "@/content/suite/products";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Users,
  Boxes,
  Headset,
  CalendarCheck,
  GitBranch,
  BarChart3,
  Sparkles,
};

const colorStyles: Record<string, { text: string; bg: string; border: string; glow: string }> = {
  "hunter-green": {
    text: "text-hunter-green",
    bg: "bg-hunter-green/10",
    border: "border-hunter-green/20",
    glow: "shadow-hunter-green/20",
  },
  "blue-500": {
    text: "text-blue-500",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    glow: "shadow-blue-500/20",
  },
  "violet-500": {
    text: "text-violet-500",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
    glow: "shadow-violet-500/20",
  },
  "hunter-orange": {
    text: "text-hunter-orange",
    bg: "bg-hunter-orange/10",
    border: "border-hunter-orange/20",
    glow: "shadow-hunter-orange/20",
  },
  "cyan-500": {
    text: "text-cyan-500",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
    glow: "shadow-cyan-500/20",
  },
  "emerald-500": {
    text: "text-emerald-500",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    glow: "shadow-emerald-500/20",
  },
  "amber-400": {
    text: "text-amber-400",
    bg: "bg-amber-400/10",
    border: "border-amber-400/20",
    glow: "shadow-amber-400/20",
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function ProductIcon({ product }: { product: SuiteProduct }) {
  const Icon = iconMap[product.icon] ?? Sparkles;
  const styles = colorStyles[product.color] ?? colorStyles["hunter-green"];

  return (
    <div
      className={`flex h-12 w-12 items-center justify-center rounded-xl border ${styles.bg} ${styles.border}`}
    >
      <Icon className={`h-6 w-6 ${styles.text}`} />
    </div>
  );
}

function ProductCard({ product }: { product: SuiteProduct }) {
  const styles = colorStyles[product.color] ?? colorStyles["hunter-green"];
  const isLive = product.status === "live";

  const cardContent = (
    <m.div
      variants={itemVariants}
      className="group relative h-full rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
    >
      {/* Gradient border reveal on hover */}
      <div
        className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-hunter-green/40 via-white/10 to-hunter-orange/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
      />
      <div
        className={`relative flex h-full flex-col rounded-2xl border border-white/10 bg-surface-dark/60 p-6 backdrop-blur-sm transition-all duration-300 group-hover:border-transparent group-hover:bg-surface-dark/80 group-hover:shadow-[0_0_30px_-5px_rgba(0,230,162,0.15)]`}
      >
        <div className="mb-5 flex items-start justify-between gap-4">
          <ProductIcon product={product} />
          <Badge
            variant="outline"
            className={
              isLive
                ? "border-hunter-green/30 bg-hunter-green/10 text-hunter-green"
                : "border-white/10 bg-white/5 text-gray-400"
            }
          >
            {isLive ? "Live demo" : "Coming soon"}
          </Badge>
        </div>
        <h3 className="mb-2 text-xl font-black tracking-tight text-white">{product.name}</h3>
        <p className="flex-grow text-sm leading-relaxed text-gray-400">{product.description}</p>
        <div className="mt-5 flex items-center gap-2 text-sm font-bold">
          {isLive ? (
            <>
              <span className={`${styles.text}`}>Explore</span>
              <ArrowRight
                className={`h-4 w-4 transition-transform group-hover:translate-x-1 ${styles.text}`}
              />
            </>
          ) : (
            <span className="text-gray-500">Join waitlist</span>
          )}
        </div>
      </div>
    </m.div>
  );

  if (isLive && product.href) {
    return (
      <Link href={product.href} className="block h-full focus:outline-none">
        {cardContent}
      </Link>
    );
  }

  return (
    <div className="h-full cursor-default" aria-disabled="true">
      {cardContent}
    </div>
  );
}

export default function SuitePage() {
  return (
    <div className="min-h-screen bg-near-black text-white">
      {/* Hero */}
      <section className="relative overflow-hidden px-6 pb-20 pt-32 md:pb-28 md:pt-40">
        {/* Background gradient */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-hunter-green/[0.03] via-transparent to-transparent" />
        <div className="pointer-events-none absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-hunter-green/5 blur-[120px]" />
        <div className="pointer-events-none absolute -right-40 top-20 h-[400px] w-[400px] rounded-full bg-hunter-orange/5 blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <m.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-hunter-green">
              CodeHunter Suite
            </p>
            <h1 className="text-5xl font-black leading-none tracking-tighter md:text-7xl">
              AI-powered tools that{" "}
              <span className="text-gradient-enchanted">run your business</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-400 md:text-xl">
              A connected platform for sales, operations, support, and scheduling. Built for modern
              teams.
            </p>
          </m.div>

          <m.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button
              asChild
              size="lg"
              className="group bg-hunter-green font-bold text-near-black hover:bg-white"
            >
              <Link href="/suite/crm">
                Explore HunterCRM
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/10 bg-transparent font-bold text-white hover:border-hunter-green hover:text-hunter-green"
            >
              <a href="#products">
                View all products
                <ChevronDown className="h-4 w-4" />
              </a>
            </Button>
          </m.div>
        </div>
      </section>

      {/* Products grid */}
      <section id="products" className="scroll-mt-24 px-6 pb-24">
        <div className="mx-auto max-w-7xl">
          <m.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-12 text-center"
          >
            <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-hunter-green">
              Meet the suite
            </p>
            <h2 className="text-4xl font-black tracking-tighter md:text-5xl">
              Everything you need to operate
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-400">
              One platform. Modular products. AI-native from the ground up.
            </p>
          </m.div>

          <m.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {suiteProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </m.div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-y border-white/5 bg-white/[0.02] px-6 py-14">
        <div className="mx-auto max-w-7xl">
          <m.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 gap-8 text-center sm:grid-cols-3"
          >
            {[
              { value: "7", label: "Products" },
              { value: "1", label: "Platform" },
              { value: "AI-native", label: "From the ground up" },
            ].map((stat) => (
              <div key={stat.label} className="space-y-1">
                <p className="text-3xl font-black tracking-tight text-white md:text-4xl">
                  {stat.value}
                </p>
                <p className="text-sm font-medium uppercase tracking-widest text-gray-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </m.div>
        </div>
      </section>
    </div>
  );
}
