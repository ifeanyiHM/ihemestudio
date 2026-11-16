import { Button, SectionLabel } from "@/components/ui";
import { FEATURED_PROJECTS } from "@/lib/data";
import { FiArrowRight } from "react-icons/fi";
import { ProjectShowcase } from "./ProjectShowcase";

export function FeaturedProjects() {
  return (
    <section className="site-container section-xl">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div className="space-y-4">
          <SectionLabel>Selected Work</SectionLabel>

          <h2 className="section-heading-lg text-white font-bold leading-tight max-w-lg xxxl:max-w-xl xl3:max-w-2xl">
            Products we&apos;ve <span className="text-gradient">shipped</span>
          </h2>

          <p className="text-slate xxl:text-[18px] xl3:text-[18.5px] xl4:text-[22px] leading-relaxed">
            Portfolio excludes products covered by non-disclosure agreements
            (NDAs).
          </p>
        </div>
        <Button href="/projects" variant="outline">
          View all projects
          <FiArrowRight size={14} />
        </Button>
      </div>

      {/* Category filter + project list (shows 5 on "All", every match when filtered) */}
      <ProjectShowcase projects={FEATURED_PROJECTS} limit={5} />
    </section>
  );
}
