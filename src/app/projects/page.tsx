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
      <section className="relative pt-40 pb-24 overflow-hidden border-b border-white/[0.06]">
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
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-3xl space-y-6">
            <SectionLabel>Our Work</SectionLabel>
            <h1 className="font-display text-display-xl text-white font-bold leading-[1.05]">
              Products <span className="text-gradient">we&apos;ve shipped</span>
            </h1>
            <p className="text-slate text-lg leading-relaxed max-w-xl">
              A selection of projects we&apos;ve designed, engineered, and
              launched — from enterprise platforms to real estate marketplaces
              and climate analytics tools.
            </p>
            <div className="flex items-center gap-6 pt-2 text-2xs font-mono text-slate-muted uppercase tracking-widest">
              <span>
                {String(FEATURED_PROJECTS.length).padStart(2, "0")} Featured
              </span>
              <span className="w-1 h-1 bg-teal/50" />
              <span>
                {String(OTHER_PROJECTS.length).padStart(2, "0")} Archived
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="py-section">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between gap-6 mb-12">
            <div className="space-y-2">
              <SectionLabel>Featured</SectionLabel>
              <h2 className="font-display text-display-md text-white font-bold">
                Recent work
              </h2>
            </div>
            <span className="hidden sm:block text-2xs font-mono text-slate-muted">
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
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between gap-6 mb-12">
            <div className="space-y-2">
              <SectionLabel>Archive</SectionLabel>
              <h2 className="font-display text-display-md text-white font-bold">
                Other projects
              </h2>
            </div>
            <span className="hidden sm:block text-2xs font-mono text-slate-muted">
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

// import type { Metadata } from "next";
// import { SectionLabel } from "@/components/ui";
// import { ProjectCard } from "@/components/ui/ProjectCard";
// import { FEATURED_PROJECTS, OTHER_PROJECTS } from "@/lib/data";
// import { CTASection } from "@/components/sections/CTASection";

// export const metadata: Metadata = {
//   title: "Projects",
//   description:
//     "Browse Iheme Studio's portfolio — real estate platforms, enterprise task management, NASA-powered analytics dashboards, and more.",
// };

// export default function ProjectsPage() {
//   return (
//     <>
//       <section className="pt-36 pb-20 max-w-7xl mx-auto px-6 border-b border-white/[0.06]">
//         <div className="max-w-3xl space-y-5">
//           <SectionLabel>Our Work</SectionLabel>
//           <h1 className="font-display text-display-xl text-white font-bold leading-tight">
//             Products <span className="text-gradient">we&apos;ve shipped</span>
//           </h1>
//           <p className="text-slate text-lg leading-relaxed">
//             A selection of projects we&apos;ve designed, engineered, and
//             launched — from enterprise platforms to real estate marketplaces and
//             climate analytics tools.
//           </p>
//         </div>
//       </section>

//       <section className="py-section">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="mb-12 space-y-2">
//             <SectionLabel>Featured</SectionLabel>
//             <h2 className="font-display text-display-md text-white font-bold">
//               Recent work
//             </h2>
//           </div>
//           <div className="flex flex-col gap-px bg-white/[0.06]">
//             {FEATURED_PROJECTS.map((project, i) => (
//               <ProjectCard
//                 key={project.id}
//                 project={project}
//                 index={i}
//                 reverse={i % 2 === 1}
//               />
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="border-t border-white/[0.06] py-section">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="mb-12 space-y-2">
//             <SectionLabel>Archive</SectionLabel>
//             <h2 className="font-display text-display-md text-white font-bold">
//               Other projects
//             </h2>
//           </div>
//           <div className="overflow-hidden rounded-2xl border border-white/[0.06] divide-y divide-white/[0.06]">
//             {OTHER_PROJECTS.map((project) => (
//               <ProjectCard key={project.id} project={project} compact />
//             ))}
//           </div>
//         </div>
//       </section>

//       <CTASection />
//     </>
//   );
// }
