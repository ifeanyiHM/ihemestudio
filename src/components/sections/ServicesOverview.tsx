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
    <section className="relative py-section border-t border-white/[0.06] overflow-hidden">
      {/* Sticky ambient background — holds position while this section scrolls, releases after */}
      <div
        className="hidden lg:block absolute inset-0 pointer-events-none select-none"
        aria-hidden="true"
      >
        <div className="sticky top-0 h-screen w-full">
          {/* Ambient glow, centered-right */}
          <div
            className="absolute top-1/2 right-[10%] xxxl:right-[12%] -translate-y-1/2 w-[520px] h-[520px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(0,212,170,0.06) 0%, transparent 70%)",
            }}
          />

          {/* Orbit rings + nodes */}
          <svg
            className="absolute top-1/2 right-[6%] xxxl:right-[8%] -translate-y-1/2 w-[440px] h-[440px] xxxl:w-[500px] xxxl:h-[500px] xl3:w-[560px] xl3:h-[560px]"
            viewBox="0 0 500 500"
            fill="none"
          >
            <circle
              cx="250"
              cy="250"
              r="220"
              stroke="rgba(255,255,255,0.04)"
              strokeWidth="1"
            />
            <circle
              cx="250"
              cy="250"
              r="160"
              stroke="rgba(255,255,255,0.05)"
              strokeWidth="1"
            />
            <circle
              cx="250"
              cy="250"
              r="90"
              stroke="rgba(0,212,170,0.08)"
              strokeWidth="1"
            />

            {/* Orbit nodes */}
            <circle cx="470" cy="250" r="4" fill="rgba(0,212,170,0.5)" />
            <circle cx="90" cy="120" r="3" fill="rgba(255,255,255,0.2)" />
            <circle cx="150" cy="410" r="3.5" fill="rgba(0,212,170,0.4)" />
            <circle cx="380" cy="70" r="3" fill="rgba(255,255,255,0.15)" />
            <circle cx="340" cy="410" r="3" fill="rgba(255,255,255,0.15)" />

            {/* Faint connecting lines from center */}
            <line
              x1="250"
              y1="250"
              x2="470"
              y2="250"
              stroke="rgba(0,212,170,0.15)"
              strokeWidth="1"
            />
            <line
              x1="250"
              y1="250"
              x2="150"
              y2="410"
              stroke="rgba(0,212,170,0.1)"
              strokeWidth="1"
            />

            {/* Center point */}
            <circle cx="250" cy="250" r="5" fill="rgba(0,212,170,0.6)" />
            <circle
              cx="250"
              cy="250"
              r="10"
              stroke="rgba(0,212,170,0.25)"
              strokeWidth="1"
            />
          </svg>

          {/* Small mono tag near the ring */}
          <div className="absolute top-[38%] right-[6%] xxxl:right-[8%] flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.08] bg-charcoal/60 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-teal/70" />
            <span className="text-2xs font-mono text-slate-muted/70 uppercase tracking-widest">
              {String(SERVICES.length).padStart(2, "0")} Disciplines
            </span>
          </div>
        </div>
      </div>

      <div className="relative site-container">
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

// import {
//   FiMonitor,
//   FiServer,
//   FiBarChart2,
//   FiZap,
//   FiSmartphone,
//   FiShoppingBag,
//   FiGlobe,
//   FiRefreshCw,
//   FiLayout,
//   FiClipboard,
//   FiArrowRight,
// } from "react-icons/fi";
// import { SectionLabel, Button } from "@/components/ui";
// import { FadeIn } from "@/components/animations/FadeIn";
// import { SERVICES } from "@/lib/data";

// const ICONS: Record<string, React.ElementType> = {
//   HiOutlineDesktopComputer: FiMonitor,
//   HiOutlineServer: FiServer,
//   HiOutlineChartBar: FiBarChart2,
//   HiOutlineSparkles: FiZap,
//   HiOutlineDeviceMobile: FiSmartphone,
//   HiOutlineShoppingBag: FiShoppingBag,
//   HiOutlineGlobe: FiGlobe,
//   HiOutlineRefresh: FiRefreshCw,
//   HiOutlineColorSwatch: FiLayout,
//   HiOutlineClipboardCheck: FiClipboard,
// };

// export function ServicesOverview() {
//   return (
//     <section className="py-section border-t border-white/[0.06]">
//       <div className="site-container">
//         <FadeIn direction="up">
//           <div className="max-w-2xl xl3:max-w-4xl xl4:max-w-5xl mb-16 space-y-4">
//             <SectionLabel>What We Do</SectionLabel>
//             <h2 className="section-heading-lg text-white font-bold leading-tight">
//               End-to-end digital <br />
//               <span className="text-gradient">engineering</span>
//             </h2>
//             <p className="text-body">
//               From the first line of architecture to the final pixel of UI — we
//               own the full delivery pipeline so you get coherent, integrated
//               systems.
//             </p>
//           </div>
//         </FadeIn>

//         <div className="mb-12">
//           {SERVICES.map((service, idx) => {
//             const Icon = ICONS[service.icon] || FiZap;
//             return (
//               <FadeIn key={service.id} delay={idx * 80} direction="up">
//                 <div
//                   className={`group relative grid grid-cols-1 md:grid-cols-[100px_1fr] gap-6 xxxl:gap-12 md:gap-10 py-10 xxxl:py-12 ${
//                     idx !== 0 ? "border-t border-white/[0.06]" : ""
//                   }`}
//                 >
//                   {/* Index */}
//                   <span className="font-display text-5xl md:text-6xl xxxl:text-[4rem] font-bold text-white/[0.06] group-hover:text-teal/20 transition-colors duration-300 select-none leading-none">
//                     {String(idx + 1).padStart(2, "0")}
//                   </span>

//                   {/* Content */}
//                   <div>
//                     <div className="flex items-center gap-4 xxxl:gap-5 mb-4 xxxl:mb-5">
//                       <div className="w-10 h-10 xxxl:w-11 xxxl:h-11 xl3:w-14 xl3:h-14 xl4:w-15 xl4:h-15 bg-teal-subtle border border-teal-border flex items-center justify-center group-hover:bg-teal group-hover:border-teal transition-all duration-300 flex-shrink-0">
//                         <Icon className="text-teal text-lg xxxl:text-xl xl3:text-2xl group-hover:text-ink transition-colors duration-300" />
//                       </div>
//                       <h3 className="font-display text-xl md:text-2xl xxxl:text-3xl text-white font-semibold group-hover:text-teal/90 transition-colors duration-300">
//                         {service.title}
//                       </h3>
//                     </div>

//                     <p className="text-body max-w-xl xl3:max-w-2xl xl4:max-w-3xl mb-5 xl3:mb-6 xl4:mb-8">
//                       {service.description}
//                     </p>

//                     <ul className="flex flex-wrap gap-x-6 gap-y-2">
//                       {service.deliverables.map((d) => (
//                         <li
//                           key={d}
//                           className="flex items-center gap-2 text-xs xxxl:text-[15px] xl3:text-[15.5px] xl4:text-[17.5px] text-slate-muted font-mono"
//                         >
//                           <span className="w-1 h-1 xxxl:w-2 xxxl:h-2 bg-teal/50 flex-shrink-0" />
//                           {d}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
//               </FadeIn>
//             );
//           })}
//         </div>

//         <FadeIn direction="up" delay={200}>
//           <div className="text-center">
//             <Button href="/services" variant="outline" size="lg">
//               Explore Our Services <FiArrowRight size={15} />
//             </Button>
//           </div>
//         </FadeIn>
//       </div>
//     </section>
//   );
// }
