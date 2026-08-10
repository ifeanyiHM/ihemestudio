import type { Metadata } from "next";
import { ContactForm } from "@/components/sections/ContactForm";
import { SectionLabel } from "@/components/ui";
import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiMail,
  FiMapPin,
  FiClock,
} from "react-icons/fi";
import { FadeIn } from "@/components/animations/FadeIn";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a conversation with Iheme Studio. Tell us about your project and we'll get back to you within 24 hours.",
};

const CONTACT_DETAILS = [
  {
    icon: FiMail,
    label: "Email",
    value: "ifeanyihm@gmail.com",
    href: "mailto:ifeanyihm@gmail.com",
  },
  { icon: FiMapPin, label: "Location", value: "Lagos, Nigeria", href: null },
  {
    icon: FiClock,
    label: "Response Time",
    value: "Within 24 hours",
    href: null,
  },
];

const SOCIALS = [
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
];

export default function ContactPage() {
  return (
    <section className="relative pt-40 pb-section xxxl:pt-48 xl3:pt-52 xl4:pt-56 xxxl:pb-section-xl xl3:pb-[9rem] xl4:pb-[10rem] overflow-hidden">
      <div
        className="absolute inset-0 grid-bg opacity-20 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 50% 60% at 85% 0%, rgba(0,212,170,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative site-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 xxxl:gap-24 xl3:gap-28 xl4:gap-32 items-start">
          <FadeIn direction="up">
            <div className="space-y-10 xxxl:space-y-12 xl3:space-y-14 xl4:space-y-16">
              <div className="space-y-5 xxxl:space-y-7 xl3:space-y-8 xl4:space-y-9">
                <SectionLabel>Get in Touch</SectionLabel>
                <h1 className="font-display text-display-xl xxxl:text-display-xxl xl3:text-[4.25rem] xl4:text-[4.5rem] text-white font-bold leading-[1.05]">
                  Let&apos;s build{" "}
                  <span className="text-gradient">something great</span>
                </h1>
                <p className="text-slate text-lg xxxl:text-xl xl3:text-[1.125rem] xl4:text-[1.2rem] font-light leading-relaxed xxxl:leading-loose xl3:leading-[1.9] xl4:leading-[2] max-w-md xxxl:max-w-lg">
                  Whether you have a fully scoped product or a rough idea worth
                  exploring, we want to hear about it.
                </p>
              </div>

              <div className="border border-white/[0.06] divide-y divide-white/[0.06]">
                {CONTACT_DETAILS.map((detail) => {
                  const Icon = detail.icon;
                  const content = (
                    <div className="flex items-center gap-4 p-5 xxxl:p-7 xl3:gap-5 xl4:gap-6 xl3:p-8 xl4:p-9 group">
                      <div className="w-10 h-10 bg-teal-subtle border border-teal-border flex items-center justify-center flex-shrink-0">
                        <Icon className="text-[16px] xxxl:text-lg xl3:text-[17px] xl4:text-[18px] text-teal" />
                      </div>
                      <div>
                        <p className="text-2xs xxxl:text-[0.875rem] xl3:text-[0.9rem] xl4:text-[0.95rem] font-mono text-slate-muted uppercase tracking-widest mb-0.5">
                          {detail.label}
                        </p>
                        <p className="text-white text-sm xxxl:text-[17px] xl3:text-[18px] xl4:text-[19px] font-medium group-hover:text-teal/90 transition-colors duration-200">
                          {detail.value}
                        </p>
                      </div>
                    </div>
                  );
                  return detail.href ? (
                    <a
                      key={detail.label}
                      href={detail.href}
                      className="block hover:bg-white/[0.02] transition-colors duration-200"
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={detail.label}>{content}</div>
                  );
                })}
              </div>

              <div>
                <p className="text-meta mb-4">Find us online</p>
                <div className="row-inline-sm">
                  {SOCIALS.map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="w-11 h-11 bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-slate hover:text-teal hover:border-teal-border hover:bg-teal-subtle transition-all duration-200"
                    >
                      <Icon className="text-[17px] xxxl:text-lg xl3:text-[18px] xl4:text-[19px]" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={100}>
            <div className="relative bg-ink-800/40 border border-white/[0.06] p-8 md:p-10 xxxl:p-12">
              <div
                className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(0,212,170,0.04) 0%, transparent 100%)",
                }}
              />
              <h2 className="font-display text-white font-semibold text-lg xxxl:text-xl mb-6 relative">
                Send us a message
              </h2>
              <div className="relative">
                <ContactForm />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
