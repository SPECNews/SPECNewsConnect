"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  label?: string;
}

export default function AnimatedCounter({ value, suffix = "+", label }: AnimatedCounterProps) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1400;
    const stepTime = 24;
    const increment = Math.ceil(value / (duration / stepTime));

    const interval = window.setInterval(() => {
      start += increment;
      if (start >= value) {
        window.clearInterval(interval);
        setDisplayValue(value);
        return;
      }
      setDisplayValue(start);
    }, stepTime);

    return () => window.clearInterval(interval);
  }, [value]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -18 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="space-y-3"
      >
        <div className="text-5xl sm:text-6xl font-black tracking-tight text-white">
          {displayValue}
          <span className="text-blue-400">{suffix}</span>
        </div>
        {label ? <p className="text-sm uppercase tracking-[0.35em] text-slate-400">{label}</p> : null}
      </motion.div>
    </AnimatePresence>
  );
}
