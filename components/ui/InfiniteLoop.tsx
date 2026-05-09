"use client";

import React from "react";
import { m } from "framer-motion";

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
  return (
    <div className={`mask-gradient flex w-full overflow-hidden ${className}`}>
      {/* We render a track that is 2x the content width (original + duplicate) */}
      {/* Actually simpler: render 2 sets of children in a flex row, animate parent x */}
      <m.div
        className="flex min-w-max flex-nowrap items-center gap-8"
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
      </m.div>
    </div>
  );
};
