import { FiArrowRight } from "react-icons/fi";
import { SectionLabel, Button } from "@/components/ui";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { FEATURED_PROJECTS } from "@/lib/data";

export function FeaturedProjects() {
  return (
    <section className="site-container section-xl">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        {/* <div className="space-y-4 max-w-xl">
          <SectionLabel>Selected Work</SectionLabel>
          <h2 className="font-display text-display-lg text-white font-bold leading-tight">
            Products we&apos;ve <span className="text-gradient">shipped</span>
          </h2>
        </div> */}
        <div className="space-y-4">
          <SectionLabel>Selected Work</SectionLabel>

          <h2 className="section-heading-lg text-white font-bold leading-tight max-w-lg xxxl:max-w-xl xl3:max-w-2xl xl4:max-w-3xl">
            Products we&apos;ve <span className="text-gradient">shipped</span>
          </h2>

          <p className="text-slate xxxl:text-[18px] xl3:text-[18.5px] xl4:text-[19px] leading-relaxed">
            Portfolio excludes products covered by non-disclosure agreements
            (NDAs).
          </p>
        </div>
        <Button href="/projects" variant="outline">
          View all projects
          <FiArrowRight size={14} />
        </Button>
      </div>

      {/* 2-column grid for featured projects */}
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
    </section>
  );
}
