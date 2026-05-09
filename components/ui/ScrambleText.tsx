"use client";

import { useEffect, useReducer } from "react";
import { m } from "framer-motion";

const CHARS = "-_~`!@#$%^&*()+=[]{}|;:,.<>?/";

interface ScrambleTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export const ScrambleText: React.FC<ScrambleTextProps> = ({ text, className, delay = 0 }) => {
  const [displayText, updateText] = useReducer((_: string, next: string) => next, "");

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    const timeoutId = setTimeout(() => {
      let iteration = 0;

      intervalId = setInterval(() => {
        updateText(
          text
            .split("")
            .map((letter, index) => {
              if (index < iteration) {
                return text[index];
              }
              return CHARS[Math.floor(Math.random() * CHARS.length)];
            })
            .join("")
        );

        if (iteration >= text.length) {
          clearInterval(intervalId);
        }

        iteration += 1 / 3; // Controls speed
      }, 30);
    }, delay * 1000);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [text, delay]);

  return (
    <m.span className={className} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      {displayText}
    </m.span>
  );
};
