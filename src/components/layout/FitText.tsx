"use client";

import { useEffect, useId, useRef, useState } from "react";

interface FitTextProps {
  text: string;
  /** Vertical stretch used when `fill` is off. 1 = natural proportions. */
  stretch?: number;
  /** Stretch to fill the parent's full width AND height (parent must be positioned). */
  fill?: boolean;
  className?: string;
}

interface InkMetrics {
  width: number;
  height: number;
  x: number;
  y: number;
}

const BASE = 100; // measure at a known size; the SVG viewBox does the scaling

/**
 * Renders text as an SVG so the glyphs' actual ink bounds span the container
 * edge to edge (no side bearings, no leftover space), with an adjustable
 * vertical stretch. Scales with CSS alone, so no resize listeners are needed.
 */
export function FitText({
  text,
  stretch = 1.7,
  fill = false,
  className,
}: FitTextProps) {
  const textRef = useRef<SVGTextElement>(null);
  const gradientId = useId().replace(/:/g, "");
  const [m, setM] = useState<InkMetrics | null>(null);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;

    const measure = () => {
      const ctx = document.createElement("canvas").getContext("2d");
      if (!ctx) return;
      const cs = getComputedStyle(el);
      ctx.font = `${cs.fontWeight} ${BASE}px ${cs.fontFamily}`;
      const t = ctx.measureText(text);
      const width = t.actualBoundingBoxLeft + t.actualBoundingBoxRight;
      const height = t.actualBoundingBoxAscent + t.actualBoundingBoxDescent;
      if (width > 0 && height > 0) {
        setM({
          width,
          height,
          x: t.actualBoundingBoxLeft,
          y: t.actualBoundingBoxAscent,
        });
      }
    };

    measure();
    void document.fonts?.ready.then(measure); // re-measure once the web font is in
  }, [text]);

  const width = m?.width ?? 800;
  const height = m?.height ?? 70;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="none"
      aria-hidden="true"
      className={fill ? "absolute inset-0 block h-full w-full" : "block w-full"}
      style={{
        aspectRatio: fill ? undefined : `${width} / ${height * stretch}`,
        visibility: m ? "visible" : "hidden",
      }}
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.04" />
          <stop offset="55%" stopColor="#fff" stopOpacity="0.015" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0.002" />
        </linearGradient>
      </defs>
      <text
        ref={textRef}
        x={m?.x ?? 0}
        y={m?.y ?? height}
        fontSize={BASE}
        fill={`url(#${gradientId})`}
        className={className}
      >
        {text}
      </text>
    </svg>
  );
}
