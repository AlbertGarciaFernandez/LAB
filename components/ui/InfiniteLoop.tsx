"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";

interface InfiniteLoopProps {
    children: React.ReactNode;
    direction?: "left" | "right";
    speed?: number;
    className?: string;
}

export const InfiniteLoop: React.FC<InfiniteLoopProps> = ({
    children,
    direction = "left",
    speed = 25,
    className = "",
}) => {
    const controls = useAnimationControls();
    const [width, setWidth] = useState(0);
    const containerRef = React.useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (containerRef.current) {
            setWidth(containerRef.current.scrollWidth / 2); // Assuming duplicate content
        }
    }, [children]);

    useEffect(() => {
        const startAnimation = async () => {
            // Start from 0
            if (direction === "left") {
                await controls.start({
                    x: -width,
                    transition: { duration: speed, ease: "linear", repeat: Infinity },
                });
            } else {
                // For right, we might want to start from negative and go to 0
                await controls.start({
                    x: 0,
                    // If we are moving right, we want to go from -width to 0
                    // But simpler logic: from 0 to width? No, that moves out.
                    // Let's standardise: always move one way, but container is reversed?
                    // Or simple x anim:
                    // left: 0 -> -width
                    // right: -width -> 0
                });
            }
        };

        // Better simple marquee logic without complex measuring if simply duplicating content enough times.
        // Let's use a standard marquee loop logic.
    }, [width, direction, speed, controls]);

    return (
        <div className={`overflow-hidden flex w-full mask-gradient ${className}`}>
            {/* We render a track that is 2x the content width (original + duplicate) */}
            {/* Actually simpler: render 2 sets of children in a flex row, animate parent x */}
            <motion.div
                className="flex gap-8 items-center flex-nowrap min-w-max"
                animate={{
                    x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
                }}
                transition={{
                    duration: speed,
                    ease: "linear",
                    repeat: Infinity,
                }}
                whileHover={{ opacity: 0.5 }} // Optional interaction
            >
                {children}
                {children}
            </motion.div>
        </div>
    );
};
