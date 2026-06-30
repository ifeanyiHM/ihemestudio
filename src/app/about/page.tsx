import type { Metadata } from "next";
import { FiMapPin, FiArrowRight, FiGithub, FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";
import { SectionLabel, Tag, Button } from "@/components/ui";
import { SkillBar } from "@/components/ui/SkillBar";
import { SKILL_GROUPS, STATS } from "@/lib/data";
import { CTASection } from "@/components/sections/CTASection";
import { FadeIn } from "@/components/animations/FadeIn";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Iheme Studio — a software engineering organization based in Lagos, Nigeria.",
};

const SKILLS_PROFICIENCY = [
  { label: "HTML5 & CSS3",            pct: 90 },
  { label: "JavaScript / TypeScript", pct: 75 },
  { label: "React / Next.js",         pct: 82 },
  { label: "Tailwind / SCSS",         pct: 88 },
  { label: "Node.js / Express.js",    pct: 55 },
  { label: "Supabase / MongoDB",      pct: 65 },
];

const SOCIAL_LINKS = [
  { icon: FiGithub,   href: "https://github.com/ifeanyiHM",           label: "GitHub" },
  { icon: FiLinkedin, href: "https://www.linkedin.com/in/ifeanyihm/",  label: "LinkedIn" },
  { icon: FiTwitter,  href: "https://twitter.com/ifeanyimichaell",     label: "Twitter" },
  { icon: FiMail,     href: "mailto:ifeanyihm@gmail.com",              label: "Email" },
];

export default function AboutPage() {
  return (
    <>
      <section className="pt-36 pb-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <FadeIn direction="up">
            <div className="space-y-6">
              <SectionLabel>About the Studio</SectionLabel>
              <h1 className="font-display text-display-xl text-white font-bold leading-tight">
                We engineer products <em className="text-gradient not-italic">with purpose.</em>
              </h1>
              <div className="flex items-center gap-2 text-slate-muted text-sm">
                <FiMapPin size={14} /><span>Lagos, Nigeria · Working with clients worldwide</span>
              </div>
              <div className="flex items-center gap-3">
                {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                  <a key={label} href={href} target={href.startsWith("mailto") ? undefined : "_blank"} rel="noopener noreferrer" aria-label={label}
                    className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-slate hover:text-teal hover:border-teal-border hover:bg-teal-subtle transition-all duration-200">
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </FadeIn>
          <FadeIn direction="up" delay={100}>
            <div className="space-y-5 text-slate leading-relaxed">
              <p>Iheme Studio is a software engineering organization built on a simple belief: quality craftsmanship and relentless attention to detail produce digital products that stand the test of time.</p>
              <p>We are dedicated individuals based in Lagos, Nigeria, who put our hearts into everything we build. Our commitment to personal growth and high productivity has helped us successfully complete diverse projects across real estate, enterprise operations, environmental analytics, and HR technology.</p>
              <blockquote className="border-l-2 border-teal pl-4 text-slate-light italic">
                &ldquo;Let the beauty of what you love be what you do.&rdquo;
                <cite className="not-italic text-slate-muted text-sm block mt-1">— Rumi</cite>
              </blockquote>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="border-t border-white/[0.06] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat, i) => (
              <FadeIn key={stat.label} delay={i * 70} direction="up">
                <div className="text-center">
                  <p className="font-display text-4xl font-bold text-white mb-2">{stat.value}</p>
                  <p className="text-slate text-sm">{stat.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-section border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn direction="up">
            <div className="mb-14 space-y-3">
              <SectionLabel>Technical Skills</SectionLabel>
              <h2 className="font-display text-display-md text-white font-bold">Our technology stack</h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <FadeIn direction="up" delay={80}>
              <div className="space-y-8">
                {SKILL_GROUPS.map((group) => (
                  <div key={group.label}>
                    <p className="text-2xs font-mono text-teal uppercase tracking-widest mb-3">{group.label}</p>
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill) => <Tag key={skill}>{skill}</Tag>)}
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={140}>
              <div className="space-y-5">
                <p className="text-2xs font-mono text-teal uppercase tracking-widest mb-3">Competency</p>
                {SKILLS_PROFICIENCY.map((s, i) => (
                  <SkillBar key={s.label} label={s.label} pct={s.pct} delay={i * 80} />
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-12 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-white font-semibold text-lg mb-1">Want the full picture?</h3>
            <p className="text-slate text-sm">Download our resume for a complete overview of experience and skills.</p>
          </div>
          <Button href="https://ifeanyiiheme.vercel.app/Ifeanyi_Iheme_resume.pdf" external variant="primary" size="lg">
            Download Resume <FiArrowRight size={15} />
          </Button>
        </div>
      </section>

      <CTASection />
    </>
  );
}
