import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // Es buena práctica incluir también ./src si lo usa:
    // "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "near-black": "#0B0B0B",
        "surface-dark": "#151515",
        "hunter-green": "#00E6A2",
        "hunter-green-dark": "#00C086", // Correcto
        "hunter-orange": "#FF7A3C",
      },
      backgroundImage: {
        // CORRECCIÓN: Usar #0B0B0B (near-black) para asegurar que el borde se fusione
        "radial-gradient-mask":
          "radial-gradient(circle, transparent 0%, transparent 40%, #0B0B0B 80%)",
      },
      keyframes: {
        "background-pan": {
          "0%": { backgroundPosition: "0% 0%" },
          "100%": { backgroundPosition: "100% 100%" },
        },
      },
      animation: {
        "pan-slow": "background-pan 45s linear infinite alternate",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
