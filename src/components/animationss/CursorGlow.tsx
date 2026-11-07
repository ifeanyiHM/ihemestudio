"use client";
import { useEffect, useRef } from "react";

export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    let x = 0, y = 0, raf: number;
    const update = () => { el.style.transform = `translate(${x - 300}px, ${y - 300}px)`; };
    const onMove = (e: MouseEvent) => { x = e.clientX; y = e.clientY; raf = requestAnimationFrame(update); };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => { window.removeEventListener("mousemove", onMove); cancelAnimationFrame(raf); };
  }, []);
  return (
    <div ref={ref} aria-hidden="true" className="pointer-events-none fixed top-0 left-0 z-0 w-[600px] h-[600px] rounded-full transition-transform duration-[120ms] ease-out"
      style={{ background: "radial-gradient(circle, rgba(0,212,170,1) 0%, transparent 70%)", opacity: 0.04 }} />
  );
}
