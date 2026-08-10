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
import { SectionLabel, Button } from "@/components/ui";
import { FadeIn } from "@/components/animations/FadeIn";
import { SERVICES } from "@/lib/data";

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

export function ServicesOverview() {
  return (
    <section className="py-section border-t border-white/[0.06]">
      <div className="site-container">
        <FadeIn direction="up">
          <div className="max-w-2xl xl3:max-w-4xl xl4:max-w-5xl mb-16 space-y-4">
            <SectionLabel>What We Do</SectionLabel>
            <h2 className="section-heading-lg text-white font-bold leading-tight">
              End-to-end digital <br />
              <span className="text-gradient">engineering</span>
            </h2>
            <p className="text-body">
              From the first line of architecture to the final pixel of UI — we
              own the full delivery pipeline so you get coherent, integrated
              systems.
            </p>
          </div>
        </FadeIn>

        <div className="mb-12">
          {SERVICES.map((service, idx) => {
            const Icon = ICONS[service.icon] || FiZap;
            return (
              <FadeIn key={service.id} delay={idx * 80} direction="up">
                <div
                  className={`group relative grid grid-cols-1 md:grid-cols-[100px_1fr] gap-6 xxxl:gap-12 md:gap-10 py-10 xxxl:py-12 ${
                    idx !== 0 ? "border-t border-white/[0.06]" : ""
                  }`}
                >
                  {/* Index */}
                  <span className="font-display text-5xl md:text-6xl xxxl:text-[4rem] font-bold text-white/[0.06] group-hover:text-teal/20 transition-colors duration-300 select-none leading-none">
                    {String(idx + 1).padStart(2, "0")}
                  </span>

                  {/* Content */}
                  <div>
                    <div className="flex items-center gap-4 xxxl:gap-5 mb-4 xxxl:mb-5">
                      <div className="w-10 h-10 xxxl:w-11 xxxl:h-11 xl3:w-14 xl3:h-14 xl4:w-15 xl4:h-15 bg-teal-subtle border border-teal-border flex items-center justify-center group-hover:bg-teal group-hover:border-teal transition-all duration-300 flex-shrink-0">
                        <Icon className="text-teal text-lg xxxl:text-xl xl3:text-2xl group-hover:text-ink transition-colors duration-300" />
                      </div>
                      <h3 className="font-display text-xl md:text-2xl xxxl:text-3xl text-white font-semibold group-hover:text-teal/90 transition-colors duration-300">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-body max-w-xl xl3:max-w-2xl xl4:max-w-3xl mb-5 xl3:mb-6 xl4:mb-8">
                      {service.description}
                    </p>

                    <ul className="flex flex-wrap gap-x-6 gap-y-2">
                      {service.deliverables.map((d) => (
                        <li
                          key={d}
                          className="flex items-center gap-2 text-xs xxxl:text-[15px] xl3:text-[15.5px] xl4:text-[17.5px] text-slate-muted font-mono"
                        >
                          <span className="w-1 h-1 xxxl:w-2 xxxl:h-2 bg-teal/50 flex-shrink-0" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn direction="up" delay={200}>
          <div className="text-center">
            <Button href="/services" variant="outline" size="lg">
              Explore Our Services <FiArrowRight size={15} />
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
