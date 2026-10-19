import type { Metadata } from "next";
import {
  FiMapPin,
  FiArrowRight,
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiMail,
} from "react-icons/fi";
import { SectionLabel, Tag, Button } from "@/components/ui";
import { SkillBar } from "@/components/ui/SkillBar";
import { SKILL_GROUPS, STATS } from "@/lib/data";
import { CTASection } from "@/components/sections/CTASection";
import { FadeIn } from "@/components/animations/FadeIn";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Iheme Studio — a software engineering organization based in Lagos, Nigeria.",
};

const FREQUENTLY_USED = [
  { label: "HTML5 & CSS3", pct: 85, usage: "Frequent" },
  { label: "JavaScript / TypeScript", pct: 95, usage: "Core" },
  { label: "React / Next.js", pct: 95, usage: "Core" },
  { label: "Tailwind / SCSS", pct: 90, usage: "Core" },
  { label: "Node.js / Express.js", pct: 55, usage: "Go-To" },
  { label: "Supabase / MongoDB", pct: 70, usage: "Regular" },
];

const SOCIAL_LINKS = [
  { icon: FiGithub, href: "https://github.com/ifeanyiHM", label: "GitHub" },
  {
    icon: FiLinkedin,
    href: "https://www.linkedin.com/in/ifeanyihm/",
    label: "LinkedIn",
  },
  {
    icon: FiTwitter,
    href: "https://twitter.com/ifeanyimichaell",
    label: "Twitter",
  },
  { icon: FiMail, href: "mailto:ifeanyihm@gmail.com", label: "Email" },
];

export default function AboutPage() {
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

        {/* Ambient background layer — oversized monogram + constellation, full section, very low opacity */}
        <div
          className="absolute inset-0 pointer-events-none select-none overflow-hidden"
          aria-hidden="true"
        >
          {/* Giant faint monogram, bleeding off the right edge */}
          <span
            className="absolute top-1/2 -translate-y-1/2 -right-[4%] xxxl:-right-[3%] font-display font-bold leading-none text-white/[0.025] text-[28rem] xxxl:text-[32rem] xl3:text-[36rem] xl4:text-[40rem] select-none"
            style={{ letterSpacing: "-0.02em" }}
          >
            IS
          </span>

          {/* Faint constellation of dots + connecting lines, scattered across the section */}
          <svg
            className="absolute inset-0 w-full h-full opacity-[0.15]"
            preserveAspectRatio="none"
            viewBox="0 0 1600 700"
          >
            <g stroke="rgba(0,212,170,0.5)" strokeWidth="1">
              <line x1="120" y1="90" x2="340" y2="180" />
              <line x1="340" y1="180" x2="300" y2="380" />
              <line x1="1250" y1="60" x2="1420" y2="220" />
              <line x1="1420" y1="220" x2="1500" y2="450" />
              <line x1="1250" y1="60" x2="1350" y2="320" />
            </g>
            <g fill="rgba(0,212,170,0.7)">
              <circle cx="120" cy="90" r="3" />
              <circle cx="340" cy="180" r="3" />
              <circle cx="300" cy="380" r="2.5" />
              <circle cx="1250" cy="60" r="3" />
              <circle cx="1420" cy="220" r="3" />
              <circle cx="1500" cy="450" r="2.5" />
              <circle cx="1350" cy="320" r="2.5" />
            </g>
            <g fill="rgba(255,255,255,0.3)">
              <circle cx="60" cy="300" r="2" />
              <circle cx="900" cy="40" r="2" />
              <circle cx="1550" cy="120" r="2" />
              <circle cx="750" cy="650" r="2" />
            </g>
          </svg>
        </div>

        <div className="relative site-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <FadeIn direction="up">
              <div className="space-y-7 xxxl:space-y-9 xl3:space-y-10 xl4:space-y-12">
                <SectionLabel>About the Studio</SectionLabel>
                <h1 className="font-display text-display-xl xxl:text-[3.8rem] xxxl:text-display-xxl xl3:text-[4.25rem] xl4:text-[4.7rem] text-white font-bold leading-[1.05]">
                  We engineer products{" "}
                  <em className="text-gradient not-italic">with purpose.</em>
                </h1>
                <div className="flex items-center gap-2 text-slate-muted text-sm xxl:text-[15px] xl3:text-[17.5px] xl4:text-[20px]">
                  <FiMapPin className="text-[14px] xxxl:text-base xl3:text-[15px] xl4:text-[16px] text-teal/70" />
                  <span>Lagos, Nigeria · Working with clients worldwide</span>
                </div>
                <div className="row-inline-sm">
                  {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target={href.startsWith("mailto") ? undefined : "_blank"}
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="w-10 h-10 xxxl:w-11 xxxl:h-11 xl3:w-12 xl3:h-12 xl4:w-14 xl4:h-14 bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-slate hover:text-teal hover:border-teal-border hover:bg-teal-subtle transition-all duration-200"
                    >
                      <Icon className="text-base xxxl:text-lg" />
                    </a>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={100}>
              <div className="space-y-5 xxxl:space-y-7 xl3:space-y-8 xl4:space-y-9 xxl:text-[17px] xxxl:text-[18px] xl3:text-[20px] xl4:text-[23px] text-slate leading-relaxed xxxl:leading-8 xl4:leading-9">
                <p>
                  Iheme Studio is a software engineering organization built on a
                  simple belief: quality craftsmanship and relentless attention
                  to detail produce digital products that stand the test of
                  time.
                </p>
                <p>
                  We are dedicated individuals based in Lagos, Nigeria, who put
                  our hearts into everything we build. Our commitment to
                  personal growth and high productivity has helped us
                  successfully complete diverse projects across real estate,
                  enterprise operations, environmental analytics, and HR
                  technology.
                </p>
                <blockquote className="relative pl-5 border-l border-teal/40">
                  <p className="font-display text-lg xxxl:text-xl xl3:text-[1.4rem] xl4:text-[1.6rem] text-white/90 italic leading-snug">
                    &ldquo;Let the beauty of what you love be what you
                    do.&rdquo;
                  </p>
                  <cite className="block not-italic text-slate-muted text-xs xxxl:text-[15px] xl3:text-[15.5px] xl4:text-[17px] font-mono uppercase tracking-[0.1em] mt-2 xl4:mt-3">
                    — Rumi
                  </cite>
                </blockquote>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-b border-white/[0.06]">
        <div className="site-container">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {STATS.map((stat, i) => (
              <FadeIn key={stat.label} delay={i * 70} direction="up">
                <div
                  className={`group relative px-6 py-2 text-center md:text-left ${
                    i !== 0 ? "border-l border-white/[0.06]" : ""
                  }`}
                >
                  <span className="block w-6 h-px bg-teal/50 mb-4 mx-auto md:mx-0 transition-all duration-300 group-hover:w-10 group-hover:bg-teal" />
                  <p className="font-display text-[clamp(2rem,5vw,3rem)] xxxl:text-[3.5rem] font-bold text-white leading-none mb-2 tracking-tight">
                    {stat.value}
                  </p>
                  <p className="text-slate-muted text-xs xxxl:text-[15px] font-mono uppercase tracking-[0.12em]">
                    {stat.label}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-section border-b border-white/[0.06]">
        <div className="site-container">
          <FadeIn direction="up">
            <div className="mb-16 xl4:mb-20 space-y-3">
              <SectionLabel>Technical Skills</SectionLabel>
              <h2 className="font-display text-display-md xxxl:text-[2.3rem] xl3:text-[2.5rem] xl4:text-[2.8rem] text-white font-bold">
                Our technology stack
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl4:gap-24">
            <FadeIn direction="up" delay={80}>
              <div className="space-y-8 xxxl:space-y-10">
                {SKILL_GROUPS.map((group) => (
                  <div key={group.label}>
                    <p className="text-2xs xxxl:text-[0.675rem] xl3:text-[0.75rem] xl4:text-[0.825rem] font-mono text-teal uppercase tracking-widest mb-3 xl3:mb-4 xl4:mb-6">
                      {group.label}
                    </p>
                    <div className="flex flex-wrap gap-2 xxxl:gap-3">
                      {group.skills.map((skill) => (
                        <Tag key={skill}>{skill}</Tag>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={140}>
              <div className="space-y-5 xxxl:space-y-7">
                <p className="text-2xs xxxl:text-[0.875rem] font-mono text-teal uppercase tracking-widest mb-3 xxxl:mb-4">
                  Frequently Used
                </p>
                {FREQUENTLY_USED.map((s, i) => (
                  <SkillBar
                    key={s.label}
                    label={s.label}
                    pct={s.pct}
                    usage={s.usage}
                    delay={i * 80}
                  />
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Resume */}
      <section className="section-xl border-b border-white/[0.06]">
        <div className="site-container">
          <div className="relative border border-teal-border bg-ink-800/40 overflow-hidden">
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 60% 80% at 100% 50%, rgba(0,212,170,0.05) 0%, transparent 70%)",
              }}
            />
            <div className="relative grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-center p-10 md:p-14 xl3:p-20 xl4:p-24">
              <div className="space-y-2 xxxl:space-y-3">
                <p className="text-2xs xxxl:text-[0.875rem] font-mono text-teal uppercase tracking-widest">
                  Resume
                </p>
                <h3 className="font-display text-white font-bold text-2xl md:text-3xl xxxl:text-4xl xl4:text-[2.7rem] leading-snug">
                  Want the full picture?
                </h3>
                <p className="text-slate text-sm xxxl:text-[17px] xl4:text-[21px] leading-relaxed max-w-md xxxl:max-w-lg xl4:max-w-2xl">
                  Download our resume for a complete overview of experience,
                  skills, and past engagements.
                </p>
              </div>
              <div className="lg:border-l lg:border-white/[0.08] lg:pl-14">
                <Button
                  href="https://ihemestudio.vercel.app/Ifeanyi_Iheme_resume.pdf"
                  external
                  variant="primary"
                  size="lg"
                >
                  Download Resume{" "}
                  <FiArrowRight className="text-[15px] xxxl:text-lg" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
