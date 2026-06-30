import Link from "next/link";
import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiMail,
  FiArrowUpRight,
} from "react-icons/fi";
import { NAV_ITEMS, FEATURED_PROJECTS } from "@/lib/data";

const SOCIAL = [
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

const PREVIOUS_PORTFOLIOS = [
  { label: "Portfolio v1", href: "https://ifeanyimichael.vercel.app/" },
  { label: "Portfolio v2", href: "https://ifeanyiiheme.vercel.app/" },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/[0.06] bg-ink-900">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-5">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 bg-teal flex items-center justify-center text-ink font-display font-bold text-sm">
                IS
              </div>
              <span className="font-display font-semibold text-white">
                Iheme Studio
              </span>
            </div>
            <p className="text-slate text-sm leading-relaxed max-w-xs">
              We design and engineer high-performance digital products for
              ambitious teams worldwide. Based in Lagos, Nigeria.
            </p>
            <div className="flex items-center gap-3">
              {SOCIAL.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-slate hover:text-teal hover:border-teal-border hover:bg-teal-subtle transition-all duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-2xs font-mono text-teal uppercase tracking-widest mb-5">
              Navigation
            </p>
            <ul className="space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-slate text-sm hover:text-white transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div>
            <p className="text-2xs font-mono text-teal uppercase tracking-widest mb-5">
              Projects
            </p>
            <ul className="space-y-3">
              {FEATURED_PROJECTS.slice(0, 5).map((project) => (
                <li key={project.id}>
                  <a
                    href={project.liveUrl ?? `/projects/${project.id}`}
                    target={project.liveUrl ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="group flex items-center gap-1.5 text-slate text-sm hover:text-white transition-colors duration-200"
                  >
                    {project.title}
                    <FiArrowUpRight
                      size={12}
                      className="text-slate-muted opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                    />
                  </a>
                </li>
              ))}
              <li>
                <Link
                  href="/projects"
                  className="text-teal text-sm font-medium hover:text-teal-glow transition-colors duration-200"
                >
                  View all →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-2xs font-mono text-teal uppercase tracking-widest mb-5">
              Get in Touch
            </p>
            <div className="space-y-3">
              <a
                href="mailto:ifeanyihm@gmail.com"
                className="block text-slate text-sm hover:text-white transition-colors duration-200"
              >
                ifeanyihm@gmail.com
              </a>
              <p className="text-slate text-sm">Lagos, Nigeria</p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-teal text-sm font-medium hover:text-teal-glow transition-colors duration-200 mt-2"
              >
                Start a project →
              </Link>
            </div>
          </div>
        </div>

        {/* Previous Portfolios row */}
        <div className="border-t border-white/[0.06] py-8 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 mb-4">
          <span className="text-slate-muted text-2xs font-mono uppercase tracking-widest flex-shrink-0">
            Previous Portfolios
          </span>
          <div className="flex flex-wrap items-center gap-3">
            {PREVIOUS_PORTFOLIOS.map((p) => (
              <a
                key={p.href}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-4 py-2 border border-white/[0.08] bg-white/[0.02] text-slate text-sm hover:text-white hover:border-teal-border hover:bg-teal-subtle transition-all duration-200"
              >
                {p.label}
                <FiArrowUpRight
                  size={13}
                  className="text-slate-muted group-hover:text-teal transition-colors duration-200"
                />
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-white/[0.06] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-muted text-xs">
            © {year} Iheme Studio. All rights reserved.
          </p>
          <p className="text-slate-muted text-xs">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}

// import Link from "next/link";
// import {
//   FiGithub,
//   FiLinkedin,
//   FiTwitter,
//   FiMail,
//   FiArrowUpRight,
// } from "react-icons/fi";
// import { NAV_ITEMS, FEATURED_PROJECTS } from "@/lib/data";

// const SOCIAL = [
//   { icon: FiGithub, href: "https://github.com/ifeanyiHM", label: "GitHub" },
//   {
//     icon: FiLinkedin,
//     href: "https://www.linkedin.com/in/ifeanyihm/",
//     label: "LinkedIn",
//   },
//   {
//     icon: FiTwitter,
//     href: "https://twitter.com/ifeanyimichaell",
//     label: "Twitter",
//   },
//   { icon: FiMail, href: "mailto:ifeanyihm@gmail.com", label: "Email" },
// ];

// export function Footer() {
//   const year = new Date().getFullYear();
//   return (
//     <footer className="border-t border-white/[0.06] bg-ink-900">
//       <div className="max-w-7xl mx-auto px-6 py-16">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
//           {/* Brand */}
//           <div className="space-y-5">
//             <div className="flex items-center gap-2.5">
//               <div className="w-8 h-8 bg-teal flex items-center justify-center text-ink font-display font-bold text-sm">
//                 IS
//               </div>
//               <span className="font-display font-semibold text-white">
//                 Iheme Studio
//               </span>
//             </div>
//             <p className="text-slate text-sm leading-relaxed max-w-xs">
//               We design and engineer high-performance digital products for
//               ambitious teams worldwide. Based in Lagos, Nigeria.
//             </p>
//             <div className="flex items-center gap-3">
//               {SOCIAL.map(({ icon: Icon, href, label }) => (
//                 <a
//                   key={label}
//                   href={href}
//                   target={href.startsWith("mailto") ? undefined : "_blank"}
//                   rel="noopener noreferrer"
//                   aria-label={label}
//                   className="w-9 h-9 bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-slate hover:text-teal hover:border-teal-border hover:bg-teal-subtle transition-all duration-200"
//                 >
//                   <Icon size={15} />
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Navigation */}
//           <div>
//             <p className="text-2xs font-mono text-teal uppercase tracking-widest mb-5">
//               Navigation
//             </p>
//             <ul className="space-y-3">
//               {NAV_ITEMS.map((item) => (
//                 <li key={item.href}>
//                   <Link
//                     href={item.href}
//                     className="text-slate text-sm hover:text-white transition-colors duration-200"
//                   >
//                     {item.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Projects */}
//           <div>
//             <p className="text-2xs font-mono text-teal uppercase tracking-widest mb-5">
//               Projects
//             </p>
//             <ul className="space-y-3">
//               {FEATURED_PROJECTS.slice(0, 5).map((project) => (
//                 <li key={project.id}>
//                   <a
//                     href={project.liveUrl ?? `/projects/${project.id}`}
//                     target={project.liveUrl ? "_blank" : undefined}
//                     rel="noopener noreferrer"
//                     className="group flex items-center gap-1.5 text-slate text-sm hover:text-white transition-colors duration-200"
//                   >
//                     {project.title}
//                     <FiArrowUpRight
//                       size={12}
//                       className="text-slate-muted opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
//                     />
//                   </a>
//                 </li>
//               ))}
//               <li>
//                 <Link
//                   href="/projects"
//                   className="text-teal text-sm font-medium hover:text-teal-glow transition-colors duration-200"
//                 >
//                   View all →
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Contact */}
//           <div>
//             <p className="text-2xs font-mono text-teal uppercase tracking-widest mb-5">
//               Get in Touch
//             </p>
//             <div className="space-y-3">
//               <a
//                 href="mailto:ifeanyihm@gmail.com"
//                 className="block text-slate text-sm hover:text-white transition-colors duration-200"
//               >
//                 ifeanyihm@gmail.com
//               </a>
//               <p className="text-slate text-sm">Lagos, Nigeria</p>
//               <Link
//                 href="/contact"
//                 className="inline-flex items-center gap-1.5 text-teal text-sm font-medium hover:text-teal-glow transition-colors duration-200 mt-2"
//               >
//                 Start a project →
//               </Link>
//             </div>
//           </div>
//         </div>

//         <div className="border-t border-white/[0.06] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
//           <p className="text-slate-muted text-xs">
//             © {year} Iheme Studio. All rights reserved.
//           </p>
//           <p className="text-slate-muted text-xs">
//             Built with Next.js & Tailwind CSS
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }
