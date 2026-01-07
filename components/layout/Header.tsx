// components/layout/Header.tsx

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navItems = [
    { name: "Expertise", href: "/#expertise", label: "Expertise" },
    { name: "The Lab", href: "/#work", label: "The Lab" },
    { name: "Bio", href: "/#about", label: "Bio" },
    { name: "Stack", href: "/#stack", label: "Stack" },
    { name: "Process", href: "/#process-contact", label: "Process" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = document.querySelectorAll("section[id], div[id]");
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 z-50 w-full backdrop-blur-xl bg-near-black/60 transition-all duration-300 supports-[backdrop-filter]:bg-near-black/40"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center h-24 px-4 md:px-8">
          {/* Logo and Brand Name */}
          {/* Logo and Brand Name - Enchanted */}
          <Link href="/" className="flex items-center gap-3 group relative z-50">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative h-11 w-11 rounded-xl bg-near-black border border-hunter-green/30 overflow-hidden flex items-center justify-center shadow-[0_0_15px_rgba(0,230,162,0.1)] group-hover:shadow-[0_0_25px_rgba(0,230,162,0.4)] group-hover:border-hunter-green/60 transition-all duration-500"
            >
              {/* Internal Glow Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-hunter-green/10 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Scanline Effect */}
              <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-transparent via-white/10 to-transparent -translate-y-[150%] group-hover:translate-y-[150%] transition-transform duration-700 ease-in-out" />

              <Image
                src="/logo-hntr.svg"
                alt="HNTR – CodeHunter Lab"
                width={28}
                height={28}
                className="relative z-10 w-7 h-7 object-contain drop-shadow-[0_0_8px_rgba(0,230,162,0.4)]"
                priority
              />
            </motion.div>

            <div className="flex flex-col justify-center">
              <span className="text-xs font-black uppercase tracking-[0.25em] text-white leading-none mb-1 group-hover:text-hunter-green transition-colors duration-300">
                CodeHunter
              </span>
              <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-hunter-green/80 group-hover:text-white transition-colors duration-300 group-hover:tracking-[0.4em]">
                Lab
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-1">
            <ul className="flex items-center space-x-1 bg-surface-dark/50 rounded-full px-2 py-1 border border-white/5">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.replace("/#", "");
                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={`relative px-5 py-2 text-sm font-medium transition-colors duration-300 block group ${isActive ? "text-white" : "text-gray-400 hover:text-white"
                        }`}
                    >
                      {item.name}
                      {/* Hover Glow Dot */}
                      <span
                        className={`absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-hunter-green rounded-full transition-all duration-300 shadow-[0_0_8px_rgba(0,230,162,0.8)] ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                          }`}
                      ></span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* CTAs */}
          <div className="hidden md:flex items-center gap-4">
            {/* AI Consulting Button - Enchanted Version */}
            <Link href="/ai-consulting" className="relative inline-flex h-10 overflow-hidden rounded-full p-[1px] focus:outline-none group hover:scale-105 transition-transform duration-300">
              <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00E6A2_0%,#0B0B0B_50%,#00E6A2_100%)] opacity-70" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-near-black px-6 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-white backdrop-blur-3xl transition-all group-hover:bg-near-black/80 group-hover:text-hunter-green">
                AI Consulting
              </span>
            </Link>

            {/* Let's Work Button - Enchanted Version */}
            <Link href="/#contact" className="relative inline-flex h-10 overflow-hidden rounded-full p-[1px] focus:outline-none group hover:scale-105 transition-transform duration-300">
              <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FF7A3C_0%,#0B0B0B_50%,#FF7A3C_100%)] opacity-70" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-near-black px-6 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-white backdrop-blur-3xl transition-all group-hover:bg-hunter-orange group-hover:text-near-black">
                Let&apos;s Work
              </span>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white relative z-[60] p-2"
            onClick={() => setOpen(!open)}
          >
            <div className="space-y-1.5">
              <motion.span
                animate={{ rotate: open ? 45 : 0, y: open ? 8 : 0 }}
                className="block w-6 h-0.5 bg-hunter-green origin-center transition-transform"
              />
              <motion.span
                animate={{ opacity: open ? 0 : 1 }}
                className="block w-6 h-0.5 bg-hunter-green transition-opacity"
              />
              <motion.span
                animate={{ rotate: open ? -45 : 0, y: open ? -8 : 0, width: open ? "24px" : "16px" }}
                className="block w-4 ml-auto h-0.5 bg-hunter-green origin-center transition-transform"
              />
            </div>
          </button>
        </div>

        {/* Enchanted Bottom Border */}
        <div className="absolute bottom-0 left-0 w-full h-[1px] overflow-hidden">
          {/* Base Line */}
          <div className="absolute inset-0 w-full h-full bg-white/10" />

          {/* Moving Gradients */}
          <motion.div
            className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-hunter-green to-transparent blur-[1px]"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-hunter-orange to-transparent blur-[1px]"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 2 }}
          />
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-near-black flex flex-col items-center justify-center space-y-8 md:hidden"
          >
            <nav className="flex flex-col items-center space-y-6">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="text-3xl font-bold text-gray-300 hover:text-hunter-orange transition-colors"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Link
                  href="/ai-consulting"
                  onClick={() => setOpen(false)}
                  className="px-8 py-3 text-hunter-green border border-hunter-green font-bold uppercase rounded-full mt-4 inline-block tracking-[0.2em] text-sm"
                >
                  AI Consulting
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <Link
                  href="/#contact"
                  onClick={() => setOpen(false)}
                  className="px-8 py-3 bg-hunter-orange text-near-black font-bold uppercase rounded-full mt-2 inline-block"
                >
                  Let&apos;s Work
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
