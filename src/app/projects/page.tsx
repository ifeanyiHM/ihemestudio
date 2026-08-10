import type { Metadata } from "next";
import { FiArrowUpRight } from "react-icons/fi";
import { SectionLabel } from "@/components/ui";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { FEATURED_PROJECTS, OTHER_PROJECTS } from "@/lib/data";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Browse Iheme Studio's portfolio — real estate platforms, enterprise task management, NASA-powered analytics dashboards, and more.",
};

export default function ProjectsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-24 xxxl:pt-48 xl3:pt-52 xl4:pt-56 xxxl:pb-32 xl3:pb-36 xl4:pb-40 overflow-hidden border-b border-white/[0.06]">
        <div
          className="absolute inset-0 grid-bg opacity-20 pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 50% 60% at 15% 0%, rgba(0,212,170,0.06) 0%, transparent 70%)",
          }}
        />
        <div className="relative site-container">
          <div className="content-panel-lg space-y-6 xxxl:space-y-8 xl3:space-y-9 xl4:space-y-10">
            <SectionLabel>Our Work</SectionLabel>
            <h1 className="font-display text-display-xl xxxl:text-display-xxl xl3:text-[4.25rem] xl4:text-[4.5rem] text-white font-bold leading-[1.05]">
              Products <span className="text-gradient">we&apos;ve shipped</span>
            </h1>
            <p className="text-slate text-lg xxxl:text-xl xl3:text-[1.125rem] xl4:text-[1.15rem] font-light leading-relaxed xxxl:leading-8 xl3:leading-[1.9] xl4:leading-[2] max-w-xl xxxl:max-w-2xl">
              A selection of projects we&apos;ve designed, engineered, and
              launched — from enterprise platforms to real estate marketplaces
              and climate analytics tools. Some client projects are not included
              due to non-disclosure agreements (NDAs).
            </p>
            <div className="flex items-center gap-6 xxxl:gap-7 xl3:gap-8 pt-2 text-2xs xxxl:text-[0.875rem] xl3:text-[0.9rem] xl4:text-[0.95rem] font-mono text-slate-muted uppercase tracking-widest">
              <span>
                {String(FEATURED_PROJECTS.length).padStart(2, "0")} Featured
              </span>
              <span className="w-1 h-1 xxxl:w-2 xxxl:h-2 xl3:w-2.5 xl3:h-2.5 bg-teal/50" />
              <span>
                {String(OTHER_PROJECTS.length).padStart(2, "0")} Archived
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="py-section xxxl:py-section-xl xl3:py-[10rem] xl4:py-[11rem]">
        <div className="site-container">
          <div className="flex items-end justify-between gap-6 xl3:gap-8 xl4:gap-10 mb-12 xl3:mb-14">
            <div className="space-y-2 xxxl:space-y-4 xl3:space-y-5 xl4:space-y-6">
              <SectionLabel>Featured</SectionLabel>
              <h2 className="font-display text-display-md text-white font-bold">
                Recent work
              </h2>
            </div>
            <span className="hidden sm:block text-2xs xxxl:text-[0.875rem] xl3:text-[0.9rem] xl4:text-[0.95rem] font-mono text-slate-muted">
              {String(FEATURED_PROJECTS.length).padStart(2, "0")} Projects
            </span>
          </div>
          <div className="flex flex-col gap-px bg-white/[0.06]">
            {FEATURED_PROJECTS.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                reverse={i % 2 === 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Archive */}
      <section className="border-t border-white/[0.06] py-section">
        <div className="site-container">
          <div className="flex items-end justify-between gap-6 mb-12">
            <div className="space-y-2 xxxl:space-y-4">
              <SectionLabel>Archive</SectionLabel>
              <h2 className="font-display text-display-md text-white font-bold">
                Other projects
              </h2>
            </div>
            <span className="hidden sm:block text-2xs xxxl:text-[0.875rem] font-mono text-slate-muted">
              {String(OTHER_PROJECTS.length).padStart(2, "0")} Projects
            </span>
          </div>
          <div className="border border-white/[0.06] divide-y divide-white/[0.06]">
            {OTHER_PROJECTS.map((project) => (
              <ProjectCard key={project.id} project={project} compact />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
