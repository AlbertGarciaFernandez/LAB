// components/layout/Header.tsx

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

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
    <header className="fixed top-0 z-50 w-full backdrop-blur-md bg-near-black/80 border-b border-surface-dark transition-all duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-20 px-4 md:px-8">
        {/* Logo and Brand Name */}
        <Link href="/" className="flex items-center space-x-2 group">
          <motion.div
            animate={{ scale: [1, 1.06, 1] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            className="h-12 w-12 overflow-hidden border-hunterGreen/70 bg-background"
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

          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-textMuted hidden uppercase  md:inline text-gray-400 group-hover:text-white transition-colors duration-300 tracking-[0.22em] ">
            CodeHunter Lab
          </span>
        </Link>
        <ul className="hidden items-center gap-6 text-sm text-textMuted md:flex">
          <nav className="hidden md:flex space-x-8 text-sm font-medium">
            {navItems.map((item) => (
              <motion.li
                key={item.name}
                whileHover={{ y: -2 }}
                className="relative text-gray-300 hover:text-hunter-green
                  transition-colors duration-200 group"
              >
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-1 transition hover:text-hunterGreen"
                >
                  {item.name}
                </a>
                <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-hunter-green opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </motion.li>
            ))}
          </nav>
        </ul>

        <ul>
          <motion.li whileHover={{ y: -2, scale: 1.03 }}>
            <a
              href="#contact"
              className="rounded-full border border-hunter-orange px-4 py-1.5 text-xs font-semibold text-hunter-orange transition hover:bg-hunter-orange hover:text-black "
            >
              Let&apos;s work
            </a>
          </motion.li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
