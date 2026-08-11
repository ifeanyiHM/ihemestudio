"use client";
import { useInView } from "@/lib/hooks/useInView";

interface SkillBarProps {
  label: string;
  pct: number;
  delay?: number;
}

export function SkillBar({ label, pct, delay = 0 }: SkillBarProps) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.5 });
  return (
    <div ref={ref}>
      <div className="flex justify-between items-center mb-1.5 xxxl:mb-2 xl3:mb-2.5 xl4:mb-3">
        <span className="text-sm xxxl:text-[16px] xl3:text-[17.5px] xl4:text-[18px] text-slate-light">
          {label}
        </span>
        <span className="text-xs xxxl:text-[14px] xl3:text-[15.5px] xl4:text-[16px] font-mono text-teal">
          {pct}%
        </span>
      </div>
      <div className="h-[3px] xxxl:h-[4px] xl3:h-[4px] xl4:h-[5px] bg-white/[0.06] rounded-full overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-teal to-teal-glow transition-all ease-out"
          style={{
            width: inView ? `${pct}%` : "0%",
            transitionDuration: "1000ms",
            transitionDelay: `${delay}ms`,
          }}
        />
      </div>
    </div>
  );
}
