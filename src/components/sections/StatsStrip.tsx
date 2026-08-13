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
  "Gemini API",
  "Groq API",
  "OpenRouter",
  "LLM Integration",
  "AI Assistants",
];

export function StatsStrip() {
  return (
    <section>
      <div className="py-8 xxl:py-10 xl3:py-12 xl4:py-14 border-y border-white/[0.06] overflow-hidden">
        <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
          <div className="flex gap-4 xxxl:gap-5 xl3:gap-6 xl4:gap-7 animate-marquee whitespace-nowrap">
            {[...TECH_MARQUEE, ...TECH_MARQUEE].map((tech, i) => (
              <div
                key={`${tech}-${i}`}
                className="flex items-center gap-2.5 px-4 py-2.5 xxxl:px-5 xxxl:py-3 xl3:px-6 xl3:py-3.5 xl4:px-7 xl4:py-4 border border-white/[0.08] bg-white/[0.03] text-slate-light text-sm xxl:text-[15px] xxxl:text-[17px] xl3:text-[17.5px] xl4:text-[18px] font-mono flex-shrink-0"
              >
                <span className="w-1.5 h-1.5 bg-teal/60 flex-shrink-0" />
                {tech}
              </div>
            ))}
          </div>
        </div>{" "}
      </div>
      <div className="site-container pt-10 lg:pt-15 xxxl:pt-20 xl3:pt-24 xl4:pt-28 px-6 mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {STATS.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 80} direction="up">
              <div
                className={`group relative px-6 py-2 text-center md:text-left ${
                  i !== 0 ? "border-l border-white/[0.06]" : ""
                }`}
              >
                <span className="block w-6 h-px bg-teal/50 mb-4 mx-auto md:mx-0 transition-all duration-300 group-hover:w-10 group-hover:bg-teal" />
                <p className="font-display text-[clamp(2rem,5vw,3rem)] xxxl:text-[3.5rem] xl3:text-[3.75rem] xl4:text-[4rem] font-bold text-white leading-none mb-2 tracking-tight">
                  {stat.value}
                </p>
                <p className="text-slate-muted text-xs xxxl:text-sm xl3:text-[0.95rem] xl4:text-[1rem] font-mono uppercase tracking-[0.12em]">
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
