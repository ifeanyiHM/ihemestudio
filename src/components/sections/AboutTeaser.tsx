import { FiArrowRight, FiMapPin } from "react-icons/fi";
import { SectionLabel, Button } from "@/components/ui";
import { FadeIn } from "@/components/animations/FadeIn";

const VALUES = [
  {
    title: "Quality First",
    body: "We set a high quality floor and never ship anything we wouldn't use ourselves.",
  },
  {
    title: "Clarity in Code",
    body: "Clean architecture, readable TypeScript, and thorough documentation are non-negotiable.",
  },
  {
    title: "Continuous Growth",
    body: "We stay current with evolving technologies and best practices, so you don't have to.",
  },
  {
    title: "Accountable Delivery",
    body: "We set realistic timelines, communicate proactively, and hit our deadlines.",
  },
];

export function AboutTeaser() {
  return (
    <section className="py-section border-t border-white/[0.06]">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* Left — narrative */}
          <FadeIn direction="up">
            <div className="space-y-7 xxxl:space-y-8 xl3:space-y-9 xl4:space-y-10 lg:sticky lg:top-32">
              <SectionLabel>About the Studio</SectionLabel>

              <h2 className="section-heading-lg text-white font-bold leading-tight">
                Passionate about craft.
                <br />
                <span className="text-gradient">Obsessed with quality.</span>
              </h2>

              <p className="text-body max-w-lg xl3:max-w-[39rem] xl4:max-w-[44rem]">
                We are a dedicated software engineering studio that puts
                craftsmanship at the center of everything we build. Our
                commitment to personal growth and high standards has helped us
                deliver successful projects across real estate, HR tech,
                environmental analytics, and enterprise operations.
              </p>

              <blockquote className="relative pl-5 border-l border-teal/40">
                <p className="font-display text-lg xxxl:text-xl xl3:text-[1.35rem] xl4:text-[1.6rem] text-white/90 italic leading-snug">
                  &ldquo;Let the beauty of what you love be what you do.&rdquo;
                </p>
                <cite className="block not-italic text-slate-muted text-xs xxxl:text-[15px] xl3:text-[15.5px] xl4:text-[16px] font-mono uppercase tracking-[0.1em] mt-2">
                  — Rumi
                </cite>
              </blockquote>

              <div className="flex items-center gap-2 text-slate-muted text-sm xxxl:text-[17px] pt-1">
                <FiMapPin size={14} className="text-teal/70" />
                <span>Based in Lagos, Nigeria. Working worldwide.</span>
              </div>

              <Button href="/about" variant="secondary">
                Our Story <FiArrowRight size={14} />
              </Button>
            </div>
          </FadeIn>

          {/* Right — values list */}
          <div>
            {VALUES.map((value, i) => (
              <FadeIn key={value.title} delay={i * 70} direction="up">
                <div
                  className={`group grid grid-cols-[64px_1fr] gap-5 xxxl:gap-6 xl3:gap-8 xl4:gap-10 py-7 xxxl:py-8 xl4:py-9 ${
                    i !== 0 ? "border-t border-white/[0.06]" : ""
                  }`}
                >
                  <span className="font-display text-3xl xxxl:text-4xl xl4:text-5xl font-bold text-white/[0.08] group-hover:text-teal/25 transition-colors duration-300 select-none leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display font-semibold text-white text-base xxxl:text-lg xl3:text-xl xl4:text-2xl mb-2 xxxl:mb-3 group-hover:text-teal/90 transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-slate-muted text-sm xxxl:text-[17px] xl3:text-[18px] xl4:text-[20.5px] leading-relaxed max-w-sm xxxl:max-w-md xl3:max-w-lg xl4:max-w-xl group-hover:text-slate transition-colors duration-300">
                      {value.body}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
