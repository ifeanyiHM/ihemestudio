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
      {/* <section className="relative pt-40 pb-24 xxxl:pt-48 xl3:pt-52 xl4:pt-56 xxxl:pb-32 xl3:pb-36 xl4:pb-40 overflow-hidden border-b border-white/[0.06]">
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
          <div className="space-y-6 xxxl:space-y-8 xl3:space-y-9 xl4:space-y-10">
            <SectionLabel>Our Work</SectionLabel>
            <h1 className="font-display text-display-xl xxxl:text-display-xxl xl3:text-[4.4rem] xl4:text-[5rem] text-white font-bold leading-[1.05] max-w-xl xxxl:max-w-2xl xl4:max-w-3xl ">
              Products <span className="text-gradient">we&apos;ve shipped</span>
            </h1>
            <p className="text-slate text-lg xxxl:text-xl xl3:text-[1.4rem] xl4:text-[1.6rem] font-light leading-relaxed xxxl:leading-8 xl3:leading-[2.3rem] xl4:leading-[2.7rem] max-w-xl xxxl:max-w-2xl xl3:max-w-3xl xl4:max-w-4xl">
              A selection of projects we&apos;ve designed, engineered, and
              launched — from enterprise platforms to real estate marketplaces
              and climate analytics tools. Some client projects are not included
              due to non-disclosure agreements (NDAs).
            </p>
            <div className="flex items-center gap-6 xxxl:gap-7 xl3:gap-8 pt-2 text-2xs xxxl:text-[0.7rem] xl3:text-[0.75rem] xl4:text-[0.9rem] font-mono text-slate-muted uppercase tracking-widest">
              <span>
                {String(FEATURED_PROJECTS.length).padStart(2, "0")} Featured
              </span>
              <span className="w-1 h-1 xxxl:w-1.5 xxxl:h-1.5 xl4:w-2 xl4:h-2 bg-teal/50" />
              <span>
                {String(OTHER_PROJECTS.length).padStart(2, "0")} Archived
              </span>
            </div>
          </div>
        </div>
      </section> */}

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

        {/* Right-side decorative mockup — large desktop only */}
        <div
          className="hidden xl:block absolute top-1/2 -translate-y-1/2 right-[6%] xxxl:right-[8%] w-[340px] xxxl:w-[380px] xl3:w-[420px] xl4:w-[460px] pointer-events-none select-none"
          aria-hidden="true"
        >
          {/* Ambient glow behind the panel */}
          <div
            className="absolute -inset-10 rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(0,212,170,0.08) 0%, transparent 70%)",
            }}
          />

          {/* Main window panel */}
          <div className="relative rounded-2xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm overflow-hidden shadow-2xl">
            {/* Window chrome */}
            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/[0.06]">
              <span className="w-2 h-2 rounded-full bg-white/10" />
              <span className="w-2 h-2 rounded-full bg-white/10" />
              <span className="w-2 h-2 rounded-full bg-teal/40" />
              <span className="ml-auto text-[0.6rem] font-mono text-slate-muted/60 tracking-widest uppercase">
                project.tsx
              </span>
            </div>

            {/* Abstract code / UI lines */}
            <div className="p-5 space-y-2.5">
              <div className="h-2 w-2/3 rounded-full bg-teal/30" />
              <div className="h-2 w-full rounded-full bg-white/[0.06]" />
              <div className="h-2 w-5/6 rounded-full bg-white/[0.06]" />
              <div className="h-2 w-1/2 rounded-full bg-white/[0.06]" />

              <div className="pt-3 grid grid-cols-3 gap-2">
                <div className="h-14 rounded-lg border border-white/[0.06] bg-white/[0.02]" />
                <div className="h-14 rounded-lg border border-teal/20 bg-teal/[0.04]" />
                <div className="h-14 rounded-lg border border-white/[0.06] bg-white/[0.02]" />
              </div>

              <div className="pt-2 space-y-2.5">
                <div className="h-2 w-4/5 rounded-full bg-white/[0.06]" />
                <div className="h-2 w-2/5 rounded-full bg-white/[0.06]" />
              </div>
            </div>
          </div>

          {/* Floating tag — top right */}
          <div className="absolute -top-4 -right-4 xxxl:-right-6 flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.08] bg-charcoal/80 backdrop-blur-sm shadow-lg">
            <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
            <span className="text-2xs font-mono text-slate-muted uppercase tracking-widest">
              Live
            </span>
          </div>

          {/* Floating tag — bottom left */}
          <div className="absolute -bottom-5 -left-6 xxxl:-left-8 px-3 py-2 rounded-xl border border-white/[0.08] bg-charcoal/80 backdrop-blur-sm shadow-lg">
            <span className="text-2xs font-mono text-teal tracking-widest uppercase">
              TypeScript
            </span>
          </div>
        </div>

        <div className="relative site-container">
          <div className="space-y-6 xxxl:space-y-8 xl3:space-y-9 xl4:space-y-10">
            <SectionLabel>Our Work</SectionLabel>
            <h1 className="font-display text-display-xl xxl:text-[3.8rem] xxxl:text-display-xxl xl3:text-[4.4rem] xl4:text-[5rem] text-white font-bold leading-[1.05] max-w-xl xxxl:max-w-2xl xl4:max-w-3xl ">
              Products <span className="text-gradient">we&apos;ve shipped</span>
            </h1>
            <p className="text-slate text-lg xxl:text-[19px] xxxl:text-xl xl3:text-[1.4rem] xl4:text-[1.6rem] font-light leading-relaxed xxxl:leading-8 xl3:leading-[2.3rem] xl4:leading-[2.7rem] max-w-xl xxl:max-w-[39rem] xxxl:max-w-2xl xl3:max-w-3xl xl4:max-w-4xl">
              A selection of projects we&apos;ve designed, engineered, and
              launched — from enterprise platforms to real estate marketplaces
              and climate analytics tools. Some client projects are not included
              due to non-disclosure agreements (NDAs).
            </p>
            <div className="flex items-center gap-6 xxxl:gap-7 xl3:gap-8 pt-2 text-2xs xxxl:text-[0.7rem] xl3:text-[0.75rem] xl4:text-[0.9rem] font-mono text-slate-muted uppercase tracking-widest">
              <span>
                {String(FEATURED_PROJECTS.length).padStart(2, "0")} Featured
              </span>
              <span className="w-1 h-1 xxxl:w-1.5 xxxl:h-1.5 xl4:w-2 xl4:h-2 bg-teal/50" />
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
              <h2 className="font-display text-display-md xxxl:text-[2.3rem] xl3:text-[2.5rem] xl4:text-[2.8rem] text-white font-bold">
                Recent work
              </h2>
            </div>
            <span className="hidden sm:block text-2xs xxxl:text-[0.65rem] xl3:text-[0.7rem] xl4:text-[0.875rem] font-mono text-slate-muted">
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
              <h2 className="font-display text-display-md xxxl:text-[2.3rem] xl3:text-[2.5rem] xl4:text-[2.8rem] text-white font-bold">
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
