// components/layout/Header.tsx

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const navItems = [
    { name: "Expertise", href: "#expertise", label: "Expertise" },
    { name: "The Lab", href: "#work", label: "The Lab" },
    { name: "Bio", href: "#about", label: "Bio" },
    { name: "Stack", href: "#stack", label: "Stack" },
    { name: "Process", href: "#process-contact", label: "Process" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 z-50 w-full backdrop-blur-xl bg-near-black/60 border-b border-white/5 transition-all duration-300 supports-[backdrop-filter]:bg-near-black/40"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center h-24 px-4 md:px-8">
          {/* Logo and Brand Name */}
          <Link href="/" className="flex items-center space-x-3 group relative z-50">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 180 }}
              transition={{ duration: 0.6 }}
              className="h-10 w-10 relative overflow-hidden rounded-lg bg-hunter-green/10 border border-hunter-green/30 p-1"
            >
              <Image
                src="/logo-hntr.svg"
                alt="HNTR – CodeHunter Lab"
                width={32}
                height={32}
                className="h-full w-full object-cover"
                priority
              />
            </motion.div>

            <div className="flex flex-col">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-white">
                CodeHunter
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-hunter-green/80">
                Lab
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-1">
            <ul className="flex items-center space-x-1 bg-surface-dark/50 rounded-full px-2 py-1 border border-white/5">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="relative px-5 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors duration-300 block group"
                  >
                    {item.name}
                    {/* Hover Glow Dot */}
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-hunter-green rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-[0_0_8px_rgba(0,230,162,0.8)]"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative inline-flex items-center justify-center px-6 py-2.5 text-xs font-bold uppercase tracking-widest text-near-black bg-hunter-orange rounded-full overflow-hidden group shadow-[0_0_0_0_rgba(255,122,60,0)] hover:shadow-[0_0_20px_rgba(255,122,60,0.4)] transition-shadow duration-300"
            >
              <span className="relative z-10">Let&apos;s Work</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            </motion.a>
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
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="px-8 py-3 bg-hunter-orange text-near-black font-bold uppercase rounded-full mt-4 inline-block"
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
