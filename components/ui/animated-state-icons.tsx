"use client";

import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface StateIconProps {
  size?: number;
  color?: string;
  className?: string;
  duration?: number;
  animate?: boolean;
}

function useAutoToggle(interval: number, enabled: boolean) {
  const [on, setOn] = useState(false);
  useEffect(() => {
    if (!enabled) {
      setOn(false);
      return;
    }
    setOn(true);
    const id = setInterval(() => setOn((v) => !v), interval);
    return () => clearInterval(id);
  }, [interval, enabled]);
  return on;
}

/* ─── 1. LOADING → SUCCESS ─── */
export function SuccessIcon({ size = 40, color = "currentColor", className, duration = 2200, animate: anim = true }: StateIconProps) {
  const done = useAutoToggle(duration, anim);
  return (
    <svg viewBox="0 0 40 40" fill="none" className={cn("", className)} style={{ width: size, height: size }}>
      <motion.circle cx="20" cy="20" r="16" stroke={color} strokeWidth={2}
        animate={done ? { pathLength: 1, opacity: 1 } : { pathLength: 0.7, opacity: 0.4 }}
        transition={{ duration: 0.5 }}
      />
      {anim && !done && (
        <motion.circle cx="20" cy="20" r="16" stroke={color} strokeWidth={2}
          strokeLinecap="round" strokeDasharray="25 75"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "20px 20px" }}
        />
      )}
      <motion.path d="M12 20l6 6 10-12" stroke={color} strokeWidth={2.5}
        strokeLinecap="round" strokeLinejoin="round"
        animate={done ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
        transition={{ duration: 0.4, delay: done ? 0.2 : 0 }}
      />
    </svg>
  );
}

/* ─── 2. SEARCH ─── magnifier pulses */
export function SearchIcon({ size = 40, color = "currentColor", className, duration = 2000, animate: anim = true }: StateIconProps) {
  const active = useAutoToggle(duration, anim);
  return (
    <svg viewBox="0 0 40 40" fill="none" className={cn("", className)} style={{ width: size, height: size }}>
      <motion.circle cx="18" cy="18" r="10" stroke={color} strokeWidth={2}
        animate={active ? { scale: 1.1, opacity: 1 } : { scale: 1, opacity: 0.6 }}
        transition={{ duration: 0.4 }}
        style={{ transformOrigin: "18px 18px" }}
      />
      <motion.line x1="26" y1="26" x2="34" y2="34" stroke={color} strokeWidth={2.5} strokeLinecap="round"
        animate={active ? { opacity: 1 } : { opacity: 0.6 }}
        transition={{ duration: 0.3 }}
      />
    </svg>
  );
}

/* ─── 3. PENCIL/DESIGN ─── pen draws a line */
export function PenIcon({ size = 40, color = "currentColor", className, duration = 2200, animate: anim = true }: StateIconProps) {
  const drawing = useAutoToggle(duration, anim);
  return (
    <svg viewBox="0 0 40 40" fill="none" className={cn("", className)} style={{ width: size, height: size }}>
      <motion.path d="M8 32l2-8L26 8l6 6-16 16-8 2z" stroke={color} strokeWidth={2} strokeLinejoin="round"
        animate={drawing ? { opacity: 1 } : { opacity: 0.6 }}
        transition={{ duration: 0.3 }}
      />
      <motion.line x1="20" y1="14" x2="26" y2="8" stroke={color} strokeWidth={2} strokeLinecap="round" />
      <motion.path d="M8 32 Q14 30 18 28" stroke={color} strokeWidth={1.5} strokeLinecap="round"
        animate={drawing ? { pathLength: 1, opacity: 0.5 } : { pathLength: 0, opacity: 0 }}
        transition={{ duration: 0.6 }}
      />
    </svg>
  );
}

/* ─── 4. CODE ─── brackets animate */
export function CodeIcon({ size = 40, color = "currentColor", className, duration = 2000, animate: anim = true }: StateIconProps) {
  const active = useAutoToggle(duration, anim);
  return (
    <svg viewBox="0 0 40 40" fill="none" className={cn("", className)} style={{ width: size, height: size }}>
      <motion.polyline points="14,10 6,20 14,30" stroke={color} strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"
        animate={active ? { x: -2, opacity: 1 } : { x: 0, opacity: 0.6 }}
        transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
      />
      <motion.polyline points="26,10 34,20 26,30" stroke={color} strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"
        animate={active ? { x: 2, opacity: 1 } : { x: 0, opacity: 0.6 }}
        transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
      />
      <motion.line x1="22" y1="8" x2="18" y2="32" stroke={color} strokeWidth={2} strokeLinecap="round"
        animate={active ? { opacity: 1 } : { opacity: 0.3 }}
        transition={{ duration: 0.3 }}
      />
    </svg>
  );
}

/* ─── 5. ROCKET/LAUNCH ─── rocket lifts off */
export function RocketIcon({ size = 40, color = "currentColor", className, duration = 2400, animate: anim = true }: StateIconProps) {
  const launched = useAutoToggle(duration, anim);
  return (
    <svg viewBox="0 0 40 40" fill="none" className={cn("", className)} style={{ width: size, height: size }}>
      <motion.g
        animate={launched ? { y: -4, scale: 1.05 } : { y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
        style={{ transformOrigin: "20px 20px" }}
      >
        <path d="M20 6c-4 6-6 14-6 20h12c0-6-2-14-6-20z" stroke={color} strokeWidth={2} strokeLinejoin="round" />
        <circle cx="20" cy="18" r="3" stroke={color} strokeWidth={2} />
        <path d="M14 26c-4-2-6 0-6 2" stroke={color} strokeWidth={2} strokeLinecap="round" />
        <path d="M26 26c4-2 6 0 6 2" stroke={color} strokeWidth={2} strokeLinecap="round" />
      </motion.g>
      {/* Flame */}
      <motion.path d="M17 32 Q20 38 23 32" stroke={color} strokeWidth={2} strokeLinecap="round"
        animate={launched ? { opacity: 1, scaleY: 1.3 } : { opacity: 0, scaleY: 0.5 }}
        transition={{ duration: 0.3 }}
        style={{ transformOrigin: "20px 32px" }}
      />
    </svg>
  );
}

/* ─── 6. SEND ─── paper plane flies */
export function SendIcon({ size = 40, color = "currentColor", className, duration = 2600, animate: anim = true }: StateIconProps) {
  const sent = useAutoToggle(duration, anim);
  return (
    <svg viewBox="0 0 40 40" fill="none" className={cn("", className)} style={{ width: size, height: size }}>
      <motion.g
        animate={sent ? { x: 30, y: -30, opacity: 0, scale: 0.5 } : { x: 0, y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}>
        <path d="M34 6L16 20l-6-2L34 6z" stroke={color} strokeWidth={2} strokeLinejoin="round" />
        <path d="M34 6L22 34l-6-14" stroke={color} strokeWidth={2} strokeLinejoin="round" />
        <line x1="16" y1="20" x2="22" y2="34" stroke={color} strokeWidth={2} />
      </motion.g>
    </svg>
  );
}

/* ─── 7. DOWNLOAD → DONE ─── */
export function DownloadDoneIcon({ size = 40, color = "currentColor", className, duration = 2400, animate: anim = true }: StateIconProps) {
  const done = useAutoToggle(duration, anim);
  return (
    <svg viewBox="0 0 40 40" fill="none" className={cn("", className)} style={{ width: size, height: size }}>
      <path d="M8 28v4a2 2 0 002 2h20a2 2 0 002-2v-4" stroke={color} strokeWidth={2} strokeLinecap="round" />
      <AnimatePresence mode="wait">
        {done ? (
          <motion.path key="check" d="M14 22l6 6 8-10" stroke={color} strokeWidth={2.5}
            strokeLinecap="round" strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            exit={{ pathLength: 0, opacity: 0 }}
            transition={{ duration: 0.35 }}
          />
        ) : (
          <motion.g key="arrow"
            initial={{ y: -4, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 8, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}>
            <line x1="20" y1="6" x2="20" y2="24" stroke={color} strokeWidth={2} strokeLinecap="round" />
            <polyline points="14,18 20,24 26,18" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
          </motion.g>
        )}
      </AnimatePresence>
    </svg>
  );
}
