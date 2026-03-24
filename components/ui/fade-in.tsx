"use client";

import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  scale?: boolean;
}

export function FadeIn({
  children,
  className,
  delay = 0,
  direction = "up",
  scale = false,
}: FadeInProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const directionOffset = {
    up: { y: 30 },
    down: { y: -30 },
    left: { x: -30 },
    right: { x: 30 },
    none: {},
  };

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        ...directionOffset[direction],
        ...(scale && { scale: 0.96 }),
      }}
      animate={
        inView ? { opacity: 1, x: 0, y: 0, ...(scale && { scale: 1 }) } : {}
      }
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
