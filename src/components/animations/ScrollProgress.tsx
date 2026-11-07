"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

/** Thin teal reading-progress line, meant to sit on the bottom edge of the header. */
export function ScrollProgress() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      className="absolute bottom-[-1px] left-0 right-0 h-px origin-left bg-gradient-to-r from-teal to-teal-glow"
      style={{ scaleX: reduce ? scrollYProgress : scaleX }}
    />
  );
}
