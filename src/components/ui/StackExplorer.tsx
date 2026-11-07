"use client";

import { cn } from "@/lib/utils";
import type { SkillGroup } from "@/types";
import { AnimatePresence, LayoutGroup, motion, useReducedMotion } from "framer-motion";
import { useRef, useState, type KeyboardEvent } from "react";

/**
 * Tabbed stack explorer: skills are grouped by discipline and revealed as a
 * typographic cloud. Replaces a static wall of tags with something you can
 * explore, while keeping every skill as real text (indexable, readable).
 */
export function StackExplorer({ groups }: { groups: SkillGroup[] }) {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    let next = i;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") next = (i + 1) % groups.length;
    else if (e.key === "ArrowLeft" || e.key === "ArrowUp") next = (i - 1 + groups.length) % groups.length;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = groups.length - 1;
    else return;
    e.preventDefault();
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  const group = groups[active];

  return (
    <div>
      <LayoutGroup id="stack-tabs">
        <div
          role="tablist"
          aria-label="Technology groups"
          className="flex gap-6 xl3:gap-8 overflow-x-auto border-b border-white/[0.06] [scrollbar-width:none]"
        >
          {groups.map((g, i) => (
            <button
              key={g.label}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              role="tab"
              id={`stack-tab-${i}`}
              aria-selected={active === i}
              aria-controls={`stack-panel-${i}`}
              tabIndex={active === i ? 0 : -1}
              onClick={() => setActive(i)}
              onKeyDown={(e) => onKeyDown(e, i)}
              className={cn(
                "relative flex-shrink-0 pb-4 text-left transition-colors duration-200 focus-visible:outline-none focus-visible:text-white",
                active === i ? "text-white" : "text-slate-muted hover:text-slate-light",
              )}
            >
              <span className="block font-mono text-2xs xxxl:text-[0.8rem] xl4:text-[0.9rem] tracking-[0.2em] text-teal/70">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="block font-display font-semibold text-sm xxxl:text-[17px] xl3:text-[18px] xl4:text-[20px] whitespace-nowrap">
                {g.label}
              </span>
              {active === i && (
                <motion.span
                  layoutId="stack-underline"
                  className="absolute left-0 right-0 -bottom-px h-px bg-teal"
                  transition={{ type: "spring", stiffness: 400, damping: 34 }}
                />
              )}
            </button>
          ))}
        </div>
      </LayoutGroup>

      <div
        role="tabpanel"
        id={`stack-panel-${active}`}
        aria-labelledby={`stack-tab-${active}`}
        className="pt-8 xl4:pt-10 min-h-[11rem]"
      >
        <AnimatePresence mode="wait">
          <motion.ul
            key={group.label}
            className="flex flex-wrap gap-x-3 gap-y-3 xl4:gap-x-4 xl4:gap-y-4"
            initial={reduce ? false : "hidden"}
            animate="visible"
            exit={reduce ? undefined : { opacity: 0, transition: { duration: 0.12 } }}
            variants={{ visible: { transition: { staggerChildren: 0.035 } } }}
          >
            {group.skills.map((skill) => (
              <motion.li
                key={skill}
                variants={{
                  hidden: { opacity: 0, y: 10, filter: "blur(6px)" },
                  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
                }}
                className="px-4 py-2.5 xxxl:px-5 xxxl:py-3 xl4:px-6 xl4:py-4 border border-white/[0.08] bg-white/[0.02] font-display text-base xxxl:text-xl xl3:text-[1.3rem] xl4:text-2xl text-white/90 transition-colors duration-200 hover:border-teal-border hover:bg-teal-subtle hover:text-white"
              >
                {skill}
              </motion.li>
            ))}
          </motion.ul>
        </AnimatePresence>
      </div>
    </div>
  );
}
