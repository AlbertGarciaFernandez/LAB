"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CHARS = "-_~`!@#$%^&*()+=[]{}|;:,.<>?/";

interface ScrambleTextProps {
    text: string;
    className?: string;
    delay?: number;
}

export const ScrambleText: React.FC<ScrambleTextProps> = ({
    text,
    className,
    delay = 0,
}) => {
    const [displayText, setDisplayText] = useState("");
    const [isScrambling, setIsScrambling] = useState(true);

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;
        let intervalId: NodeJS.Timeout;

        // Start delay
        timeoutId = setTimeout(() => {
            let iteration = 0;

            intervalId = setInterval(() => {
                setDisplayText((prev) =>
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
                    setIsScrambling(false);
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
        <motion.span
            className={className}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            {displayText}
        </motion.span>
    );
};
