"use client";
import { useInView } from "@/lib/hooks/useInView";

interface SkillBarProps { label: string; pct: number; delay?: number; }

export function SkillBar({ label, pct, delay = 0 }: SkillBarProps) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.5 });
  return (
    <div ref={ref}>
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm text-slate-light">{label}</span>
        <span className="text-xs font-mono text-teal">{pct}%</span>
      </div>
      <div className="h-[3px] bg-white/[0.06] rounded-full overflow-hidden">
        <div className="h-full rounded-full bg-gradient-to-r from-teal to-teal-glow transition-all ease-out"
          style={{ width: inView ? `${pct}%` : "0%", transitionDuration: "1000ms", transitionDelay: `${delay}ms` }} />
      </div>
    </div>
  );
}
