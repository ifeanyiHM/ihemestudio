"use client";

import { ProjectCard } from "@/components/ui/ProjectCard";
import { cn } from "@/lib/utils";
import type { Project, ProjectType } from "@/types";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useMemo, useState } from "react";
import { getProjectTypes } from "../../lib/ProjectTypes";

type Filter = "all" | ProjectType;

interface ProjectShowcaseProps {
  projects: Project[];
  /** Cap applied only while "All" is selected (e.g. the home page shows 5). */
  limit?: number;
}

export function ProjectShowcase({ projects, limit }: ProjectShowcaseProps) {
  const [active, setActive] = useState<Filter>("all");
  const reduce = useReducedMotion();
  const types = useMemo(() => getProjectTypes(projects), [projects]);

  const visible = useMemo(() => {
    // Keep each project's original index so image fallbacks don't shift when filtering.
    const indexed = projects.map((project, sourceIndex) => ({
      project,
      sourceIndex,
    }));
    if (active === "all") return limit ? indexed.slice(0, limit) : indexed;
    return indexed.filter(({ project }) => project.type === active);
  }, [projects, active, limit]);

  const chipClass = (on: boolean) =>
    cn(
      "inline-flex items-center gap-2 px-3.5 py-2 xxxl:px-4 xxxl:py-2.5 xl4:px-5 xl4:py-3 border font-mono uppercase tracking-[0.12em] text-2xs xxxl:text-[0.8rem] xl4:text-[0.95rem] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal",
      on
        ? "border-teal-border bg-teal-subtle text-teal"
        : "border-white/[0.08] bg-white/[0.02] text-slate hover:text-white hover:border-white/20",
    );

  return (
    <div>
      <div
        role="group"
        aria-label="Filter projects by category"
        className="flex flex-wrap gap-2 xl4:gap-3 mb-8 xl4:mb-10"
      >
        <button
          type="button"
          aria-pressed={active === "all"}
          onClick={() => setActive("all")}
          className={chipClass(active === "all")}
        >
          All
          <span className="tabular-nums opacity-60">{projects.length}</span>
        </button>
        {types.map((t) => (
          <button
            key={t.id}
            type="button"
            aria-pressed={active === t.id}
            onClick={() => setActive(t.id)}
            className={chipClass(active === t.id)}
          >
            {t.label}
            <span className="tabular-nums opacity-60">{t.count}</span>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={active}
          className="flex flex-col gap-px bg-white/[0.06]"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={
            reduce ? undefined : { opacity: 0, transition: { duration: 0.12 } }
          }
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          {visible.map(({ project, sourceIndex }, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={sourceIndex}
              reverse={i % 2 === 1}
            />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
