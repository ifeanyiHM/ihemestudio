import type { Metadata } from "next";
import {
  FiMonitor,
  FiServer,
  FiBarChart2,
  FiZap,
  FiSmartphone,
  FiShoppingBag,
  FiGlobe,
  FiRefreshCw,
  FiLayout,
  FiClipboard,
  FiArrowRight,
} from "react-icons/fi";
import { SectionLabel } from "@/components/ui";
import { SERVICES } from "@/lib/data";
import { CTASection } from "@/components/sections/CTASection";
import { FadeIn } from "@/components/animations/FadeIn";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Frontend engineering, full-stack development, analytics dashboards, and UI/UX design from Iheme Studio.",
};

const ICONS: Record<string, React.ElementType> = {
  HiOutlineDesktopComputer: FiMonitor,
  HiOutlineServer: FiServer,
  HiOutlineChartBar: FiBarChart2,
  HiOutlineSparkles: FiZap,
  HiOutlineDeviceMobile: FiSmartphone,
  HiOutlineShoppingBag: FiShoppingBag,
  HiOutlineGlobe: FiGlobe,
  HiOutlineRefresh: FiRefreshCw,
  HiOutlineColorSwatch: FiLayout,
  HiOutlineClipboardCheck: FiClipboard,
};

const PROCESS = [
  {
    step: "01",
    title: "Discovery",
    body: "We start every engagement by understanding your goals, users, and constraints. Clear scope prevents expensive surprises.",
  },
  {
    step: "02",
    title: "Architecture",
    body: "We design the system before we build it — data models, component hierarchy, API contracts, and deployment strategy.",
  },
  {
    step: "03",
    title: "Build",
    body: "Iterative, test-informed development with regular demos. You always know exactly where things stand.",
  },
  {
    step: "04",
    title: "Ship & Support",
    body: "Deployment, performance monitoring, and post-launch support to ensure your product stays fast and reliable.",
  },
];

export default function ServicesPage() {
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
        <div className="relative site-container">
          <FadeIn direction="up">
            <div className="max-w-3xl space-y-6 xxxl:space-y-8 xl3:space-y-9 xl4:space-y-10">
              <SectionLabel>Our Services</SectionLabel>
              <h1 className="font-display text-display-xl xxxl:text-display-xxl xl3:text-[4.25rem] xl4:text-[4.5rem] text-white font-bold leading-[1.05]">
                Everything you need to{" "}
                <span className="text-gradient">ship great software</span>
              </h1>
              <p className="text-slate text-lg xxxl:text-xl xl3:text-[1.125rem] xl4:text-[1.15rem] font-light leading-relaxed xxxl:leading-8 xl3:leading-[1.9] xl4:leading-[2] max-w-xl xxxl:max-w-2xl">
                End-to-end digital engineering services — from the first line of
                architecture to the final interaction detail.
              </p>
              <div className="flex items-center gap-6 xxxl:gap-7 xl3:gap-8 pt-2 text-2xs xxxl:text-[0.875rem] xl3:text-[0.9rem] xl4:text-[0.95rem] font-mono text-slate-muted uppercase tracking-widest">
                <span>
                  {String(SERVICES.length).padStart(2, "0")} Core Services
                </span>
                <span className="w-1 h-1 xxxl:w-2 xxxl:h-2 xl3:w-2.5 xl3:h-2.5 bg-teal/50" />
                <span>4-Step Process</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Services */}
      <section className="py-section border-b border-white/[0.06]">
        <div className="site-container">
          {SERVICES.map((service, idx) => {
            const Icon = ICONS[service.icon] || FiZap;
            return (
              <FadeIn key={service.id} direction="up" delay={idx * 60}>
                <div
                  className={`group grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 lg:gap-16 xxxl:gap-20 py-12 xxxl:py-16 ${
                    idx !== 0 ? "border-t border-white/[0.06]" : ""
                  }`}
                >
                  <div className="space-y-5 xxxl:space-y-7">
                    <div className="w-12 h-12 xxxl:w-13 xxxl:h-13 bg-teal-subtle border border-teal-border flex items-center justify-center group-hover:bg-teal group-hover:border-teal transition-all duration-300">
                      <Icon className="text-xl xxxl:text-2xl text-teal group-hover:text-ink transition-colors duration-300" />
                    </div>
                    <div>
                      <p className="text-xs xxxl:text-[0.875rem] font-mono text-slate-muted mb-2 xxxl:mb-3">
                        {String(idx + 1).padStart(2, "0")} /{" "}
                        {String(SERVICES.length).padStart(2, "0")}
                      </p>
                      <h2 className="font-display text-display-sm xxxl:text-display-md text-white font-bold group-hover:text-teal/90 transition-colors duration-300">
                        {service.title}
                      </h2>
                    </div>
                  </div>

                  <div className="space-y-6 xxxl:space-y-8">
                    <p className="text-slate xxxl:text-[18px] leading-relaxed max-w-2xl xxxl:max-w-3xl">
                      {service.description}
                    </p>
                    <div>
                      <p className="text-2xs xxxl:text-[0.875rem] font-mono text-teal uppercase tracking-widest mb-4 xxxl:mb-5">
                        What we deliver
                      </p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 xxxl:gap-x-8 xxxl:gap-y-4">
                        {service.deliverables.map((d) => (
                          <li
                            key={d}
                            className="flex items-center gap-2.5 text-sm xxxl:text-[17px] text-slate-light"
                          >
                            <span className="w-1.5 h-1.5 xxxl:w-2 xxxl:h-2 bg-teal flex-shrink-0" />
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </section>

      {/* Process */}
      <section className="py-section border-b border-white/[0.06]">
        <div className="site-container">
          <FadeIn direction="up">
            <div className="mb-16 max-w-xl space-y-3 xxxl:space-y-5">
              <SectionLabel>How We Work</SectionLabel>
              <h2 className="font-display text-display-md xxxl:text-display-x text-white font-bold">
                Our process
              </h2>
            </div>
          </FadeIn>

          <div>
            {PROCESS.map((step, i) => (
              <FadeIn key={step.step} delay={i * 70} direction="up">
                <div
                  className={`group grid grid-cols-1 md:grid-cols-[120px_1fr] gap-6 xxxl:gap-14 md:gap-12 py-10 xxxl:py-14 ${
                    i !== 0 ? "border-t border-white/[0.06]" : ""
                  }`}
                >
                  <span className="font-display text-5xl md:text-6xl xxxl:text-7xl font-bold text-white/[0.06] group-hover:text-teal/20 transition-colors duration-300 select-none leading-none">
                    {step.step}
                  </span>
                  <div className="flex flex-col md:flex-row md:items-start gap-3 md:gap-10 xxxl:gap-14">
                    <h3 className="font-display text-xl xxxl:text-2xl text-white font-semibold flex-shrink-0 md:w-48 group-hover:text-teal/90 transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-slate text-sm xxxl:text-[17px] leading-relaxed max-w-md xxxl:max-w-lg">
                      {step.body}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
