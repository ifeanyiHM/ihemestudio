import { FadeIn } from "@/components/animations/FadeIn";
import { STATS } from "@/lib/data";

const TECH_MARQUEE = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Supabase",
  "Framer Motion",
  "Storybook",
  "Figma",
  "MongoDB",
  "Express.js",
  "SCSS",
  "Shadcn UI",
  "Vercel",
  "GitHub",
];

export function StatsStrip() {
  return (
    <section>
      <div className="py-8 xxxl:py-10 border-y border-white/[0.06] overflow-hidden">
        <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
          <div className="flex gap-4 xxxl:gap-5 animate-marquee whitespace-nowrap">
            {[...TECH_MARQUEE, ...TECH_MARQUEE].map((tech, i) => (
              <div
                key={`${tech}-${i}`}
                className="flex items-center gap-2.5 px-4 py-2.5 xxxl:px-5 xxxl:py-3 border border-white/[0.08] bg-white/[0.03] text-slate-light text-sm xxxl:text-[17px] font-mono flex-shrink-0"
              >
                <span className="w-1.5 h-1.5 bg-teal/60 flex-shrink-0" />
                {tech}
              </div>
            ))}
          </div>
        </div>{" "}
      </div>
      <div className="max-w-7xl xxl:max-w-[95%] mx-auto pt-10 lg:pt-15 xxxl:pt-20 px-6 mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {STATS.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 80} direction="up">
              <div
                className={`group relative px-6 py-2 text-center md:text-left ${
                  i !== 0 ? "border-l border-white/[0.06]" : ""
                }`}
              >
                <span className="block w-6 h-px bg-teal/50 mb-4 mx-auto md:mx-0 transition-all duration-300 group-hover:w-10 group-hover:bg-teal" />
                <p className="font-display text-[clamp(2rem,5vw,3rem)] xxxl:text-[3.5rem] font-bold text-white leading-none mb-2 tracking-tight">
                  {stat.value}
                </p>
                <p className="text-slate-muted text-xs xxxl:text-sm font-mono uppercase tracking-[0.12em]">
                  {stat.label}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
