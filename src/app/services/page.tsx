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
      {/* <section className="relative pt-40 pb-24 xxxl:pt-48 xl3:pt-52 xl4:pt-56 xxxl:pb-32 xl3:pb-36 xl4:pb-40 overflow-hidden border-b border-white/[0.06]">
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
            <div className="max-w-xl xxxl:max-w-2xl xl4:max-w-3xl space-y-6 xxxl:space-y-8 xl3:space-y-9 xl4:space-y-10">
              <SectionLabel>Our Services</SectionLabel>
              <h1 className="font-display text-display-xl xxxl:text-display-xxl xl3:text-[4.4rem] xl4:text-[5rem] text-white font-bold leading-[1.05]">
                Everything you need to{" "}
                <span className="text-gradient">ship great software</span>
              </h1>
              <p className="text-slate text-lg xxxl:text-xl xl3:text-[1.4rem] xl4:text-[1.6rem] font-light leading-relaxed xxxl:leading-8 xl3:leading-[2.3rem] xl4:leading-[2.7rem] max-w-xl xxxl:max-w-2xl xl4:max-w-3xl">
                End-to-end digital engineering services — from the first line of
                architecture to the final interaction detail.
              </p>
              <div className="flex items-center gap-6 xxxl:gap-7 xl3:gap-8 pt-2 text-2xs xxxl:text-[0.7rem] xl3:text-[0.75rem] xl4:text-[0.9rem] font-mono text-slate-muted uppercase tracking-widest">
                <span>
                  {String(SERVICES.length).padStart(2, "0")} Core Services
                </span>
                <span className="w-1 h-1 xxxl:w-1.5 xxxl:h-1.5 xl4:w-2 xl4:h-2 bg-teal/50" />
                <span>4-Step Process</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section> */}
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

        {/* Right-side decorative process diagram — large desktop only */}
        <div
          className="hidden xl:block absolute top-1/2 -translate-y-1/2 right-[8%] xxxl:right-[10%] pointer-events-none select-none"
          aria-hidden="true"
        >
          {/* Ambient glow */}
          <div
            className="absolute -inset-16 rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(0,212,170,0.07) 0%, transparent 70%)",
            }}
          />

          <div className="relative flex flex-col items-start gap-0">
            {[
              { n: "01", label: "Discover", active: true },
              { n: "02", label: "Design", active: true },
              { n: "03", label: "Build", active: false },
              { n: "04", label: "Ship", active: false },
            ].map((step, i, arr) => (
              <div key={step.n} className="flex items-stretch">
                <div className="flex flex-col items-center">
                  {/* Node */}
                  <span
                    className={`flex-shrink-0 w-11 h-11 xxxl:w-12 xxxl:h-12 rounded-full border flex items-center justify-center font-mono text-2xs tracking-widest transition-colors ${
                      step.active
                        ? "border-teal/50 bg-teal/[0.08] text-teal"
                        : "border-white/[0.1] bg-white/[0.02] text-slate-muted/60"
                    }`}
                  >
                    {step.n}
                  </span>
                  {/* Connector line */}
                  {i < arr.length - 1 && (
                    <span
                      className={`w-px flex-1 my-1 ${
                        step.active && arr[i + 1].active
                          ? "bg-teal/30"
                          : "bg-white/[0.08]"
                      }`}
                      style={{ minHeight: "2.5rem" }}
                    />
                  )}
                </div>
                {/* Label */}
                <div className="pl-4 pt-2.5">
                  <span
                    className={`text-sm xxxl:text-base font-display tracking-wide ${
                      step.active ? "text-white" : "text-slate-muted/60"
                    }`}
                  >
                    {step.label}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Small floating status tag */}
          <div className="absolute -top-8 left-14 xxxl:left-16 flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.08] bg-charcoal/80 backdrop-blur-sm shadow-lg whitespace-nowrap w-max">
            <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
            <span className="text-2xs font-mono text-slate-muted uppercase tracking-widest">
              Our Process
            </span>
          </div>
        </div>

        <div className="relative site-container">
          <FadeIn direction="up">
            <div className="max-w-xl xxxl:max-w-2xl xl4:max-w-3xl space-y-6 xxxl:space-y-8 xl3:space-y-9 xl4:space-y-10">
              <SectionLabel>Our Services</SectionLabel>
              <h1 className="font-display text-display-xl xxxl:text-display-xxl xl3:text-[4.4rem] xl4:text-[5rem] text-white font-bold leading-[1.05]">
                Everything you need to{" "}
                <span className="text-gradient">ship great software</span>
              </h1>
              <p className="text-slate text-lg xxxl:text-xl xl3:text-[1.4rem] xl4:text-[1.6rem] font-light leading-relaxed xxxl:leading-8 xl3:leading-[2.3rem] xl4:leading-[2.7rem] max-w-xl xxxl:max-w-2xl xl4:max-w-3xl">
                End-to-end digital engineering services — from the first line of
                architecture to the final interaction detail.
              </p>
              <div className="flex items-center gap-6 xxxl:gap-7 xl3:gap-8 pt-2 text-2xs xxxl:text-[0.7rem] xl3:text-[0.75rem] xl4:text-[0.9rem] font-mono text-slate-muted uppercase tracking-widest">
                <span>
                  {String(SERVICES.length).padStart(2, "0")} Core Services
                </span>
                <span className="w-1 h-1 xxxl:w-1.5 xxxl:h-1.5 xl4:w-2 xl4:h-2 bg-teal/50" />
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
                  className={`group grid grid-cols-1 lg:grid-cols-[280px_1fr] xxxl:grid-cols-[320px_1fr] xl3:grid-cols-[340px_1fr] xl4:grid-cols-[390px_1fr] gap-8 lg:gap-16 xxxl:gap-20 py-12 xxxl:py-16 ${
                    idx !== 0 ? "border-t border-white/[0.06]" : ""
                  }`}
                >
                  <div className="space-y-5 xxxl:space-y-7">
                    <div className="w-12 h-12 xxxl:w-14 xxxl:h-14 xl4:w-[4.5rem] xl4:h-[4.5rem] bg-teal-subtle border border-teal-border flex items-center justify-center group-hover:bg-teal group-hover:border-teal transition-all duration-300">
                      <Icon className="text-xl xxxl:text-2xl xl4:text-[1.6rem] text-teal group-hover:text-ink transition-colors duration-300" />
                    </div>
                    <div>
                      <p className="text-xs xxxl:text-[0.875rem] font-mono text-slate-muted mb-2 xxxl:mb-3">
                        {String(idx + 1).padStart(2, "0")} /{" "}
                        {String(SERVICES.length).padStart(2, "0")}
                      </p>
                      <h2 className="font-display text-display-sm xxxl:text-[1.7rem] xl3:text-[1.8rem] xl4:text-[2.1rem] text-white font-bold group-hover:text-teal/90 transition-colors duration-300">
                        {service.title}
                      </h2>
                    </div>
                  </div>

                  <div className="space-y-6 xxxl:space-y-8">
                    <p className="text-slate xxxl:text-[18px] xl3:text-[20px] xl4:text-[23px] leading-relaxed max-w-2xl xxxl:max-w-[47.5rem] xl4:max-w-[57rem]">
                      {service.description}
                    </p>
                    <div>
                      <p className="text-2xs xxxl:text-[0.875rem] font-mono text-teal uppercase tracking-widest mb-4 xxxl:mb-5 xl4:mb-6">
                        What we deliver
                      </p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 xxxl:gap-x-8 xxxl:gap-y-4">
                        {service.deliverables.map((d) => (
                          <li
                            key={d}
                            className="flex items-center gap-2.5 text-sm xxxl:text-base xl3:text-md xl4:text-xl text-slate-light"
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
              <h2 className="font-display text-display-md xxxl:text-[2.3rem] xl3:text-[2.5rem] xl4:text-[2.8rem] text-white font-bold">
                Our process
              </h2>
            </div>
          </FadeIn>

          <div>
            {PROCESS.map((step, i) => (
              <FadeIn key={step.step} delay={i * 70} direction="up">
                <div
                  className={`group grid grid-cols-1 md:grid-cols-[120px_1fr] gap-6 md:gap-12 xxxl:gap-14 xl3:gap-20 xl4:gap-24 py-10 xxxl:py-14 ${
                    i !== 0 ? "border-t border-white/[0.06]" : ""
                  }`}
                >
                  <span className="font-display text-5xl md:text-6xl xxxl:text-7xl font-bold text-white/[0.06] group-hover:text-teal/20 transition-colors duration-300 select-none leading-none">
                    {step.step}
                  </span>
                  <div className="flex flex-col md:flex-row md:items-start gap-3 md:gap-10 xxxl:gap-14 xl3:gap-20 xl4:gap-32">
                    <h3 className="font-display text-xl xxxl:text-2xl xl4:text-3xl text-white font-semibold flex-shrink-0 md:w-48 group-hover:text-teal/90 transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-slate text-sm xxxl:text-[17px] xl3:text-[18px] xl4:text-[20px] leading-relaxed max-w-md xxxl:max-w-lg xl3:max-w-xl xl4:max-w-2xl">
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
