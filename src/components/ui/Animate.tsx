"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";

interface AnimateProps {
  children: React.ReactNode;
  type?: "fade" | "slideUp" | "slideDown" | "scale";
  show?: boolean;
  className?: string;
  delay?: number;
}

export function Animate({
  children,
  type = "fade",
  show = true,
  className = "",
  delay = 0,
}: AnimateProps) {
  const variants = {
    fade: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
    slideUp: {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    },
    slideDown: {
      hidden: { opacity: 0, y: -20 },
      visible: { opacity: 1, y: 0 },
    },
    scale: {
      hidden: { opacity: 0, scale: 0.95 },
      visible: { opacity: 1, scale: 1 },
    },
  };

  const transition = {
    duration: 0.3,
    delay,
    ease: [0.4, 0, 0.2, 1] as const,
  };

  const initial = "hidden";
  const animate = show ? "visible" : "hidden";
  const exit = "hidden";

  return (
    <AnimatePresence mode="wait">
      {show && (
        <motion.div
          initial={initial}
          animate={animate}
          exit={exit}
          variants={variants[type]}
          transition={transition}
          className={className}
          style={{
            willChange: 'transform, opacity',
            backfaceVisibility: 'hidden',
            WebkitFontSmoothing: 'antialiased',
          }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}