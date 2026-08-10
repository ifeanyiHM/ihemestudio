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
      <div className="max-w-7xl xxl:max-w-[95%] mx-auto px-6">
        <FadeIn direction="up">
          <div className="max-w-2xl mb-16 space-y-4">
            <SectionLabel>What We Do</SectionLabel>
            <h2 className="font-display text-display-lg xxxl:text-display-x text-white font-bold leading-tight">
              End-to-end digital <br />
              <span className="text-gradient">engineering</span>
            </h2>
            <p className="text-slate xxxl:text-[18px] leading-relaxed">
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
                      <div className="w-10 h-10 xxxl:w-11 xxxl:h-11 bg-teal-subtle border border-teal-border flex items-center justify-center group-hover:bg-teal group-hover:border-teal transition-all duration-300 flex-shrink-0">
                        <Icon
                          size={18}
                          className="text-teal group-hover:text-ink transition-colors duration-300"
                        />
                      </div>
                      <h3 className="font-display text-xl md:text-2xl xxxl:text-3xl text-white font-semibold group-hover:text-teal/90 transition-colors duration-300">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-slate text-sm xxxl:text-[17px] leading-relaxed max-w-xl mb-5">
                      {service.description}
                    </p>

                    <ul className="flex flex-wrap gap-x-6 gap-y-2">
                      {service.deliverables.map((d) => (
                        <li
                          key={d}
                          className="flex items-center gap-2 text-xs xxxl:text-[15px] text-slate-muted font-mono"
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
