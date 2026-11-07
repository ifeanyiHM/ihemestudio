"use client";

import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "framer-motion";

export interface TextSegment {
  text: string;
  className?: string;
}

interface BlurTextProps {
  segments: TextSegment[];
  as?: "h1" | "h2" | "h3" | "p";
  className?: string;
  /** "mount" animates immediately (hero); "inView" waits for the viewport. */
  trigger?: "mount" | "inView";
  delay?: number; // seconds
  stagger?: number; // seconds between words
}

/**
 * Word-by-word blur + rise reveal. Inspired by the blur-in / text-generate
 * patterns from Magic UI and React Bits, rebuilt on framer-motion so it
 * respects reduced-motion and keeps the full heading readable by screen
 * readers via aria-label.
 */
export function BlurText({
  segments,
  as: Tag = "h2",
  className,
  trigger = "inView",
  delay = 0,
  stagger = 0.06,
}: BlurTextProps) {
  const reduce = useReducedMotion();
  const label = segments.map((s) => s.text).join("");

  if (reduce) {
    return (
      <Tag className={className}>
        {segments.map((seg, i) => (
          <span key={i} className={seg.className}>
            {seg.text}
          </span>
        ))}
      </Tag>
    );
  }

  let wordIndex = 0;
  const visible = { opacity: 1, y: 0, filter: "blur(0px)" };

  return (
    <Tag className={className} aria-label={label}>
      {segments.map((seg, si) =>
        seg.text
          .split(/(\s+)/)
          .filter((chunk) => chunk.length > 0)
          .map((chunk, ci) => {
            if (/^\s+$/.test(chunk)) return " ";
            const i = wordIndex++;
            return (
              <motion.span
                key={`${si}-${ci}`}
                aria-hidden="true"
                className={cn("inline-block will-change-transform", seg.className)}
                initial={{ opacity: 0, y: "0.35em", filter: "blur(10px)" }}
                animate={trigger === "mount" ? visible : undefined}
                whileInView={trigger === "inView" ? visible : undefined}
                viewport={{ once: true, margin: "0px 0px -60px 0px" }}
                transition={{
                  duration: 0.7,
                  delay: delay + i * stagger,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {chunk}
              </motion.span>
            );
          }),
      )}
    </Tag>
  );
}
