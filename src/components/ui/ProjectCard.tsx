import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import { Tag } from "@/components/ui";
import type { Project } from "@/types";

const CATEGORY_LABELS: Record<string, string> = {
  fullstack: "Full-Stack",
  frontend: "Frontend",
  dashboard: "Dashboard",
  platform: "Platform",
};
const CATEGORY_COLORS: Record<string, string> = {
  fullstack: "text-teal bg-teal-subtle border-teal-border",
  frontend: "text-blue-400 bg-blue-400/10 border-blue-400/25",
  dashboard: "text-purple-400 bg-purple-400/10 border-purple-400/25",
  platform: "text-orange-400 bg-orange-400/10 border-orange-400/25",
};

const PLACEHOLDER_IMAGES = [
  "/project/1502pro.png",
  "/project/craf.png",
  "/project/axi.png",
  "project/group.png",
  "/project/grou.png",
];

function getProjectImage(project: Project, index = 0) {
  return project.image ?? PLACEHOLDER_IMAGES[index % PLACEHOLDER_IMAGES.length];
}

function getProjectDomain(project: Project) {
  if (!project.liveUrl) return project.title.toLowerCase().replace(/\s+/g, "");
  try {
    return new URL(project.liveUrl).hostname;
  } catch {
    return project.liveUrl;
  }
}

export function ProjectCard({
  project,
  compact = false,
  index = 0,
  reverse = false,
}: {
  project: Project;
  compact?: boolean;
  index?: number;
  reverse?: boolean;
}) {
  if (compact) {
    return (
      <div className="group flex flex-col sm:flex-row sm:items-center gap-4 p-6 hover:bg-white/[0.02] transition-colors duration-200">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-1">
            <span className="text-xs font-mono text-slate-muted">
              {project.year}
            </span>
            <span
              className={`text-2xs font-mono px-2 py-0.5 border ${CATEGORY_COLORS[project.category]}`}
            >
              {CATEGORY_LABELS[project.category]}
            </span>
          </div>
          <h3 className="font-display font-semibold text-white text-sm group-hover:text-teal/90 transition-colors">
            {project.title}
          </h3>
          <p className="text-slate text-xs mt-0.5 truncate">
            {project.tagline}
          </p>
        </div>
        <div className="flex flex-wrap gap-2 sm:max-w-[200px] md:max-w-[250px]">
          {project.tags.map((tag) => (
            <Tag key={tag} className="text-2xs">
              {tag}
            </Tag>
          ))}
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} live site`}
              className="p-2 text-slate hover:text-teal hover:bg-teal-subtle transition-all duration-200"
            >
              <FiArrowUpRight size={15} />
            </a>
          )}
          {project.codeUrl && (
            <a
              href={project.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} source code`}
              className="p-2 text-slate hover:text-white hover:bg-white/[0.05] transition-all duration-200"
            >
              <FiGithub size={15} />
            </a>
          )}
        </div>
      </div>
    );
  }

  return (
    <article className="group relative grid grid-cols-1 lg:grid-cols-2 border border-white/[0.06] bg-ink-800/40 hover:border-teal-border hover:bg-ink-800/70 transition-all duration-300">
      {/* Image side */}
      <div
        className={`relative ${reverse ? "lg:order-2" : "lg:order-1"} border-b lg:border-b-0 border-white/[0.06] ${reverse ? "lg:border-l" : "lg:border-r"}`}
      >
        {/* Chrome bar */}
        <div className="flex items-center gap-3 px-4 py-3 bg-ink-900/60 border-b border-white/[0.06]">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 bg-white/[0.12]" />
            <span className="w-2.5 h-2.5 bg-white/[0.12]" />
            <span className="w-2.5 h-2.5 bg-white/[0.12]" />
          </div>
          <div className="flex-1 flex items-center justify-center">
            <span className="inline-flex items-center gap-2 px-3 py-1 border border-white/[0.08] bg-white/[0.03] text-2xs font-mono text-slate-muted">
              <span className="w-1.5 h-1.5 bg-teal/60" />
              {getProjectDomain(project)}
            </span>
          </div>
        </div>

        {/* Screenshot */}
        <div className="relative h-72 lg:h-full lg:min-h-[420px] overflow-hidden">
          <img
            src={getProjectImage(project, index)}
            alt={`${project.title} preview`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background:
                "linear-gradient(to top, rgba(8,9,10,0.6) 0%, transparent 50%)",
            }}
          />
        </div>
      </div>

      {/* Content side */}
      <div
        className={`relative flex flex-col justify-center p-8 lg:p-12 ${reverse ? "lg:order-1" : "lg:order-2"}`}
      >
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0,212,170,0.04) 0%, transparent 100%)",
          }}
        />
        <div className="relative space-y-5">
          <div className="flex items-center gap-3">
            <span
              className={`text-2xs font-mono px-2.5 py-1 border ${CATEGORY_COLORS[project.category]}`}
            >
              {CATEGORY_LABELS[project.category]}
            </span>
            <span className="text-slate-muted text-2xs font-mono">
              {project.year}
            </span>
          </div>

          <div>
            <h3 className="font-display text-2xl lg:text-3xl text-white font-bold mb-2 group-hover:text-teal/90 transition-colors">
              {project.title}
            </h3>
            <p className="text-teal/70 text-sm font-medium mb-3">
              {project.tagline}
            </p>
            <p className="text-slate text-sm leading-relaxed">
              {project.description}
            </p>
          </div>

          {project.impact && (
            <div className="flex items-start gap-2">
              <span className="w-1 h-1 bg-teal flex-shrink-0 mt-1.5" />
              <p className="text-xs text-slate-muted">{project.impact}</p>
            </div>
          )}

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>

          <div className="flex items-center gap-3 pt-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-white font-medium px-4 py-2 bg-teal/10 border border-teal-border hover:bg-teal hover:text-ink transition-all duration-200"
              >
                Live Site <FiArrowUpRight size={13} />
              </a>
            )}
            {project.codeUrl && (
              <a
                href={project.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-slate hover:text-white px-4 py-2 bg-white/[0.04] border border-white/[0.08] hover:border-white/20 transition-all duration-200"
              >
                <FiGithub size={13} /> Code
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
