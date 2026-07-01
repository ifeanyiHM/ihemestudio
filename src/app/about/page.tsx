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

const SKILLS_PROFICIENCY = [
  { label: "HTML5 & CSS3", pct: 90 },
  { label: "JavaScript / TypeScript", pct: 85 },
  { label: "React / Next.js", pct: 92 },
  { label: "Tailwind / SCSS", pct: 88 },
  { label: "Node.js / Express.js", pct: 65 },
  { label: "Supabase / MongoDB", pct: 85 },
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <FadeIn direction="up">
              <div className="space-y-7">
                <SectionLabel>About the Studio</SectionLabel>
                <h1 className="font-display text-display-xl text-white font-bold leading-[1.05]">
                  We engineer products{" "}
                  <em className="text-gradient not-italic">with purpose.</em>
                </h1>
                <div className="flex items-center gap-2 text-slate-muted text-sm">
                  <FiMapPin size={14} className="text-teal/70" />
                  <span>Lagos, Nigeria · Working with clients worldwide</span>
                </div>
                <div className="flex items-center gap-3">
                  {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target={href.startsWith("mailto") ? undefined : "_blank"}
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="w-10 h-10 bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-slate hover:text-teal hover:border-teal-border hover:bg-teal-subtle transition-all duration-200"
                    >
                      <Icon size={16} />
                    </a>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={100}>
              <div className="space-y-5 text-slate leading-relaxed">
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
                  <p className="font-display text-lg text-white/90 italic leading-snug">
                    &ldquo;Let the beauty of what you love be what you
                    do.&rdquo;
                  </p>
                  <cite className="block not-italic text-slate-muted text-xs font-mono uppercase tracking-[0.1em] mt-2">
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
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {STATS.map((stat, i) => (
              <FadeIn key={stat.label} delay={i * 70} direction="up">
                <div
                  className={`group relative px-6 py-2 text-center md:text-left ${
                    i !== 0 ? "border-l border-white/[0.06]" : ""
                  }`}
                >
                  <span className="block w-6 h-px bg-teal/50 mb-4 mx-auto md:mx-0 transition-all duration-300 group-hover:w-10 group-hover:bg-teal" />
                  <p className="font-display text-[clamp(2rem,5vw,3rem)] font-bold text-white leading-none mb-2 tracking-tight">
                    {stat.value}
                  </p>
                  <p className="text-slate-muted text-xs font-mono uppercase tracking-[0.12em]">
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
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn direction="up">
            <div className="mb-16 space-y-3">
              <SectionLabel>Technical Skills</SectionLabel>
              <h2 className="font-display text-display-md text-white font-bold">
                Our technology stack
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <FadeIn direction="up" delay={80}>
              <div className="space-y-8">
                {SKILL_GROUPS.map((group) => (
                  <div key={group.label}>
                    <p className="text-2xs font-mono text-teal uppercase tracking-widest mb-3">
                      {group.label}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <Tag key={skill}>{skill}</Tag>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={140}>
              <div className="space-y-5">
                <p className="text-2xs font-mono text-teal uppercase tracking-widest mb-3">
                  Competency
                </p>
                {SKILLS_PROFICIENCY.map((s, i) => (
                  <SkillBar
                    key={s.label}
                    label={s.label}
                    pct={s.pct}
                    delay={i * 80}
                  />
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Resume */}
      <section className="py-section border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative border border-teal-border bg-ink-800/40 overflow-hidden">
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 60% 80% at 100% 50%, rgba(0,212,170,0.05) 0%, transparent 70%)",
              }}
            />
            <div className="relative grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-center p-10 md:p-14">
              <div className="space-y-2">
                <p className="text-2xs font-mono text-teal uppercase tracking-widest">
                  Resume
                </p>
                <h3 className="font-display text-white font-bold text-2xl md:text-3xl">
                  Want the full picture?
                </h3>
                <p className="text-slate text-sm leading-relaxed max-w-md">
                  Download our resume for a complete overview of experience,
                  skills, and past engagements.
                </p>
              </div>
              <div className="lg:border-l lg:border-white/[0.08] lg:pl-14">
                <Button
                  href="https://ifeanyiiheme.vercel.app/Ifeanyi_Iheme_resume.pdf"
                  external
                  variant="primary"
                  size="lg"
                >
                  Download Resume <FiArrowRight size={15} />
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
