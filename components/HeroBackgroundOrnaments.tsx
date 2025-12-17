"use client";

import { motion } from "framer-motion";

export default function HeroBackgroundOrnaments() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* Glow verde */}
      <motion.div
        animate={{ opacity: [0.15, 0.25, 0.15], scale: [1, 1.1, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-40 right-[-10rem] h-[420px] w-[420px] rounded-full bg-hunter-green/20 blur-[90px]"
      />

      {/* Cuadrado redondeado técnico */}
      <motion.svg
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 0.45,
          y: [0, -10, 0],
          rotate: [0, 5, 0]
        }}
        transition={{
          opacity: { duration: 0.8, delay: 0.1 },
          y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 10, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute -left-16 top-10 hidden h-40 w-40 text-hunter-green md:block"
        viewBox="0 0 160 160"
        fill="none"
      >
        <rect
          x="10"
          y="10"
          width="140"
          height="140"
          rx="28"
          stroke="currentColor"
          strokeWidth="2"
        />
        <rect
          x="35"
          y="35"
          width="90"
          height="90"
          rx="18"
          stroke="currentColor"
          strokeWidth="1.5"
          opacity="0.4"
        />
        <path
          d="M30 130L130 30"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeDasharray="6 8"
          opacity="0.5"
        />
      </motion.svg>

      {/* Triángulo */}
      <motion.svg
        initial={{ opacity: 0, y: -10 }}
        animate={{
          opacity: 0.4,
          y: [0, 15, 0],
          rotate: [0, -5, 0]
        }}
        transition={{
          opacity: { duration: 0.9, delay: 0.2 },
          y: { duration: 7, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 12, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute right-6 top-32 h-28 w-28 text-hunter-orange md:right-24 md:top-24"
        viewBox="0 0 120 120"
        fill="none"
      >
        <path
          d="M60 15L103 95H17L60 15Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M60 40L82 82H38L60 40Z"
          stroke="currentColor"
          strokeWidth="1.5"
          opacity="0.5"
        />
      </motion.svg>

      {/* Círculo tipo crosshair */}
      <motion.svg
        initial={{ opacity: 0, x: 15 }}
        animate={{
          opacity: 0.35,
          x: [0, 10, 0],
          scale: [1, 1.05, 1]
        }}
        transition={{
          opacity: { duration: 0.9, delay: 0.25 },
          x: { duration: 8, repeat: Infinity, ease: "easeInOut" },
          scale: { duration: 5, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute bottom-10 left-10 hidden h-32 w-32 text-hunter-green md:block"
        viewBox="0 0 140 140"
        fill="none"
      >
        <circle cx="70" cy="70" r="40" stroke="currentColor" strokeWidth="2" />
        <circle
          cx="70"
          cy="70"
          r="18"
          stroke="currentColor"
          strokeWidth="1.4"
          opacity="0.5"
        />
        <line
          x1="70"
          y1="20"
          x2="70"
          y2="40"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <line
          x1="70"
          y1="100"
          x2="70"
          y2="120"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <line
          x1="20"
          y1="70"
          x2="40"
          y2="70"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <line
          x1="100"
          y1="70"
          x2="120"
          y2="70"
          stroke="currentColor"
          strokeWidth="1.4"
        />
      </motion.svg>

      {/* Marca HNTR */}
      <motion.svg
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{
          opacity: 0.5,
          scale: [1, 1.05, 1],
          rotate: [0, 2, 0]
        }}
        transition={{
          opacity: { duration: 0.9, delay: 0.35 },
          scale: { duration: 9, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 15, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute bottom-[-3rem] right-[-3rem] h-40 w-40 text-hunter-green/60"
        viewBox="0 0 180 180"
        fill="none"
      >
        <rect
          x="30"
          y="30"
          width="120"
          height="120"
          rx="26"
          transform="rotate(45 90 90)"
          stroke="currentColor"
          strokeWidth="2"
          opacity="0.75"
        />

        <text
          x="50%"
          y="54%"
          textAnchor="middle"
          fontFamily="var(--font-space-grotesk, system-ui, sans-serif)"
          fontSize="28"
          fontWeight="700"
          fill="#00E6A2"
        >
          HNTR
        </text>

        <text
          x="50%"
          y="72%"
          textAnchor="middle"
          fontFamily="var(--font-inter, system-ui, sans-serif)"
          fontSize="9"
          letterSpacing="0.3em"
          fill="#FF7A3C"
        >
          LAB
        </text>
      </motion.svg>
    </div>
  );
}
