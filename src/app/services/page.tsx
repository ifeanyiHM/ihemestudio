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
          <FadeIn direction="up">
            <div className="max-w-3xl space-y-6">
              <SectionLabel>Our Services</SectionLabel>
              <h1 className="font-display text-display-xl text-white font-bold leading-[1.05]">
                Everything you need to{" "}
                <span className="text-gradient">ship great software</span>
              </h1>
              <p className="text-slate text-lg font-light leading-relaxed max-w-xl">
                End-to-end digital engineering services — from the first line of
                architecture to the final interaction detail.
              </p>
              <div className="flex items-center gap-6 pt-2 text-2xs font-mono text-slate-muted uppercase tracking-widest">
                <span>
                  {String(SERVICES.length).padStart(2, "0")} Core Services
                </span>
                <span className="w-1 h-1 bg-teal/50" />
                <span>4-Step Process</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Services */}
      <section className="py-section border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6">
          {SERVICES.map((service, idx) => {
            const Icon = ICONS[service.icon] || FiZap;
            return (
              <FadeIn key={service.id} direction="up" delay={idx * 60}>
                <div
                  className={`group grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 lg:gap-16 py-12 ${
                    idx !== 0 ? "border-t border-white/[0.06]" : ""
                  }`}
                >
                  <div className="space-y-5">
                    <div className="w-12 h-12 bg-teal-subtle border border-teal-border flex items-center justify-center group-hover:bg-teal group-hover:border-teal transition-all duration-300">
                      <Icon
                        size={20}
                        className="text-teal group-hover:text-ink transition-colors duration-300"
                      />
                    </div>
                    <div>
                      <p className="text-xs font-mono text-slate-muted mb-2">
                        {String(idx + 1).padStart(2, "0")} /{" "}
                        {String(SERVICES.length).padStart(2, "0")}
                      </p>
                      <h2 className="font-display text-display-sm text-white font-bold group-hover:text-teal/90 transition-colors duration-300">
                        {service.title}
                      </h2>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <p className="text-slate leading-relaxed max-w-2xl">
                      {service.description}
                    </p>
                    <div>
                      <p className="text-2xs font-mono text-teal uppercase tracking-widest mb-4">
                        What we deliver
                      </p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                        {service.deliverables.map((d) => (
                          <li
                            key={d}
                            className="flex items-center gap-2.5 text-sm text-slate-light"
                          >
                            <span className="w-1.5 h-1.5 bg-teal flex-shrink-0" />
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
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn direction="up">
            <div className="mb-16 max-w-xl space-y-3">
              <SectionLabel>How We Work</SectionLabel>
              <h2 className="font-display text-display-md text-white font-bold">
                Our process
              </h2>
            </div>
          </FadeIn>

          <div>
            {PROCESS.map((step, i) => (
              <FadeIn key={step.step} delay={i * 70} direction="up">
                <div
                  className={`group grid grid-cols-1 md:grid-cols-[120px_1fr] gap-6 md:gap-12 py-10 ${
                    i !== 0 ? "border-t border-white/[0.06]" : ""
                  }`}
                >
                  <span className="font-display text-5xl md:text-6xl font-bold text-white/[0.06] group-hover:text-teal/20 transition-colors duration-300 select-none leading-none">
                    {step.step}
                  </span>
                  <div className="flex flex-col md:flex-row md:items-start gap-3 md:gap-10">
                    <h3 className="font-display text-xl text-white font-semibold flex-shrink-0 md:w-48 group-hover:text-teal/90 transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-slate text-sm leading-relaxed max-w-md">
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
