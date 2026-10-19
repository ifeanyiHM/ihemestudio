"use client";

import { useInView } from "@/lib/hooks/useInView";
import { cn } from "@/lib/utils";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // ms
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number; // ms
}

/**
 * Wraps children in a container that fades + slides into view
 * when the element enters the viewport.
 */
export function FadeIn({
  children,
  className,
  delay = 0,
  direction = "up",
  duration = 600,
}: FadeInProps) {
  const { ref, inView } = useInView<HTMLDivElement>();

  const translateMap = {
    up: "translateY(28px)",
    down: "translateY(-28px)",
    left: "translateX(28px)",
    right: "translateX(-28px)",
    none: "none",
  };

  return (
    <div
      ref={ref}
      className={cn("transition-all", className)}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : translateMap[direction],
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      }}
    >
      {children}
    </div>
  );
}

/**
 * Staggers FadeIn across a list of children.
 * Each child is wrapped in its own FadeIn with an incremental delay.
 */
export function StaggerFadeIn({
  children,
  className,
  baseDelay = 0,
  stagger = 80,
  direction = "up",
}: {
  children: React.ReactNode[];
  className?: string;
  baseDelay?: number;
  stagger?: number;
  direction?: FadeInProps["direction"];
}) {
  return (
    <>
      {children.map((child, i) => (
        <FadeIn
          key={i}
          className={className}
          delay={baseDelay + i * stagger}
          direction={direction}
        >
          {child}
        </FadeIn>
      ))}
    </>
  );
}
