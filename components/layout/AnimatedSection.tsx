"use client";

import { m } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  id?: string;
  children: ReactNode;
  className?: string;
};

export default function AnimatedSection({ id, children, className = "" }: Props) {
  return (
    <m.section
      id={id}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`bg-background border-b border-white/5 ${className}`}
    >
      {children}
    </m.section>
  );
}
