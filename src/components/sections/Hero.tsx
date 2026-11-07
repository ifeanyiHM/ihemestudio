import { BlurText } from "@/components/animations/BlurText";
import { FadeIn } from "@/components/animations/FadeIn";
import { Magnetic } from "@/components/animations/Magnetic";
import { Button } from "@/components/ui";
import { FiArrowRight } from "react-icons/fi";
import { HeroVisual } from "./HeroVisual";

const HERO_STACK = ["Next.js", "React", "React Native", "TypeScript"];

export function Hero() {
  return (
    <section className="relative min-h-screen md:min-h-[70vh] lg:min-h-screen flex items-center overflow-hidden pt-28 pb-16">
      <div className="absolute inset-0 grid-bg opacity-30" aria-hidden="true" />
      {/* Grid fades out toward the edges so it reads as texture, not a wall */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 40%, transparent 40%, #08090A 100%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 80% 30%, rgba(0,212,170,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="site-container relative z-10 px-6 grid lg:grid-cols-2 gap-16 xl4:gap-20 items-center w-full">
        {/* Left — content */}
        <div>
          <FadeIn direction="none" duration={800}>
            <div className="inline-flex items-center gap-3 pl-3 pr-4 py-2 xxxl:py-2.5 xl3:py-3 xl4:py-3.5 border border-teal-border bg-teal-subtle mb-8 xxxl:mb-10 xl3:mb-12 xl4:mb-14">
              <span className="w-1 h-3 bg-teal animate-pulse-slow" />
              <span className="text-teal text-xs xxxl:text-[13px] xl3:text-[14.5px] xl4:text-[17px] font-mono uppercase tracking-[0.12em]">
                Available for new projects
              </span>
            </div>
          </FadeIn>

          <BlurText
            as="h1"
            trigger="mount"
            delay={0.15}
            segments={[
              { text: "We build software that " },
              { text: "scales.", className: "text-gradient" },
            ]}
            className="font-display text-white mb-6 xl3:mb-8 xl4:mb-10 leading-[1.05] tracking-tight text-[clamp(2.25rem,5vw,3.75rem)] lg:text-[clamp(2rem,5vw,2.9rem)] xl:text-[clamp(2.25rem,5vw,3.75rem)] xxl:text-[4rem] xxxl:text-[4.2rem] xl3:text-[4.5rem] xl4:text-[5.2rem] font-bold"
          />

          <FadeIn delay={500}>
            <p className="max-w-[35rem] xxxl:max-w-[41rem] xl3:max-w-[43rem] xl4:max-w-[49rem] text-slate-light font-light text-[clamp(1rem,1.5vw,1.125rem)] xxxl:text-[1.3rem] xl3:text-[1.37rem] xl4:text-[1.6rem] leading-relaxed mb-10">
              Iheme Studio is a software engineering organization based in
              Lagos, Nigeria. We design and engineer high-performance web
              applications, enterprise dashboards, and digital products for
              ambitious teams.
            </p>
          </FadeIn>

          <FadeIn delay={650}>
            <div className="flex flex-wrap items-center gap-4 mb-14">
              <Magnetic>
                <Button href="/projects" size="lg" variant="primary">
                  View Our Work <FiArrowRight size={16} />
                </Button>
              </Magnetic>
              <Button href="/contact" size="lg" variant="secondary">
                Start a Project
              </Button>
            </div>
          </FadeIn>

          <FadeIn delay={800}>
            <ul className="flex flex-wrap items-center gap-2 md:gap-8 lg:gap-6 xl:gap-8 text-slate-muted text-xs xxxl:text-[15px] xl3:text-[15.5px] xl4:text-[16px] font-mono tracking-wide uppercase">
              {HERO_STACK.map((tech, i) => (
                <li
                  key={tech}
                  className="flex items-center gap-2 md:gap-8 lg:gap-6 xl:gap-8"
                >
                  {i > 0 && (
                    <span
                      className="w-1 h-1 rounded-full bg-white/20"
                      aria-hidden="true"
                    />
                  )}
                  <span>{tech}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>

        {/* Right — interactive structural visual */}
        <HeroVisual />
      </div>

      {/* Scroll cue */}
      <div
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex-col items-center gap-3"
        aria-hidden="true"
      >
        <span className="text-2xs font-mono uppercase tracking-[0.3em] text-slate-muted">
          Scroll
        </span>
        <span className="relative block w-px h-10 overflow-hidden bg-white/10">
          <span className="absolute inset-0 bg-teal animate-scroll-cue" />
        </span>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to top, #08090A, transparent)" }}
      />
    </section>
  );
}
