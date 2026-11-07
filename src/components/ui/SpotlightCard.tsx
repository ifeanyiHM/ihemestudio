"use client";

import { cn } from "@/lib/utils";
import type { PointerEvent, ReactNode } from "react";

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "article";
}

/**
 * Cursor-tracked spotlight + border highlight (Magic UI "Magic Card" idea).
 * Pointer position is written to CSS variables, so hovering never re-renders React.
 * The visual layers live in globals.css (.spotlight).
 */
export function SpotlightCard({ children, className, as: Tag = "div" }: SpotlightCardProps) {
  const onMove = (e: PointerEvent<HTMLElement>) => {
    if (e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  return (
    <Tag className={cn("spotlight", className)} onPointerMove={onMove}>
      {children}
    </Tag>
  );
}
