import Link from "next/link";
import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiMail,
  FiArrowUpRight,
} from "react-icons/fi";
import { NAV_ITEMS, FEATURED_PROJECTS } from "@/lib/data";
import Image from "next/image";

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
    <footer className="relative overflow-hidden border-t border-white/[0.06] bg-ink-900">
      {/* Ambient background monogram — right side, very low opacity */}
      {/* <div
        className="absolute inset-0 pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <span
          className="absolute top-1/2 -translate-y-1/2 -right-[2%] xxxl:-right-[1%] font-display font-bold leading-none text-white/[0.025] text-[16rem] xxxl:text-[19rem] xl3:text-[21rem] xl4:text-[23rem] select-none"
          style={{ letterSpacing: "-0.02em" }}
        >
          IS
        </span>
      </div> */}
      <div className="site-container py-16 xxxl:py-20 xl3:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 xxxl:gap-[3.5rem] xl3:gap-[4rem] xl4:gap-[4.5rem] mb-12 xxxl:mb-[3.5rem] xl3:mb-[4rem] xl4:mb-[4.5rem]">
          {/* Brand */}
          <div className="space-y-5 xxxl:space-y-6 xl3:space-y-7 xl4:space-y-8">
            <Link
              href="/"
              className="flex items-center"
              aria-label="Iheme Studio — Home"
            >
              <Image
                src="/logo.png"
                alt="Iheme Studio"
                width={180}
                height={48}
                priority
                className="h-10 w-auto xl3:h-12 xl4:h-14"
              />
            </Link>
            <p className="text-body max-w-xs xl4:max-w-sm">
              We design and engineer high-performance digital products for
              ambitious teams worldwide. Based in Lagos, Nigeria.
            </p>
            <div className="row-inline-sm">
              {SOCIAL.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 xxxl:w-10 xxxl:h-10 xl3:w-11 xl3:h-11 xl4:w-12 xl4:h-12 bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-slate hover:text-teal hover:border-teal-border hover:bg-teal-subtle transition-all duration-200"
                >
                  <Icon className="text-[15px] xxxl:text-lg xl3:text-[16px] xl4:text-[17px]" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-meta mb-5 xl3:mb-7">Navigation</p>
            <ul className="space-y-3 xxxl:space-y-4 xl3:space-y-5">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-body hover:text-white transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div>
            <p className="text-meta mb-5 xl3:mb-7">Projects</p>
            <ul className="space-y-3 xxxl:space-y-4 xl3:space-y-5">
              {FEATURED_PROJECTS.slice(0, 5).map((project) => (
                <li key={project.id}>
                  <a
                    href={project.liveUrl ?? `/projects/${project.id}`}
                    target={project.liveUrl ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="group flex items-center gap-1.5 text-body hover:text-white transition-colors duration-200"
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
                  className="text-teal text-sm xxxl:text-[17px] xl4:text-[19px] font-medium hover:text-teal-glow transition-colors duration-200"
                >
                  View all →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-meta mb-5 xl3:mb-7">Get in Touch</p>
            <div className="space-y-3 xxxl:space-y-4 xl3:space-y-5">
              <a
                href="mailto:ifeanyihm@gmail.com"
                className="block text-body hover:text-white transition-colors duration-200"
              >
                ifeanyihm@gmail.com
              </a>
              <p className="text-slate text-sm xxxl:text-[17px] xl3:text-[17.5px] xl4:text-[19px]">
                Lagos, Nigeria
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-teal text-sm xxxl:text-[17px] xl3:text-[17.5px] xl4:text-[19px] font-medium hover:text-teal-glow transition-colors duration-200 mt-2"
              >
                Start a project →
              </Link>
            </div>
          </div>
        </div>

        {/* Previous Portfolios row */}
        <div className="border-t border-white/[0.06] py-8 xl4:py-10 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 xl3:gap-10 xl4:gap-12 mb-4 xxxl:mb-5 xl3:mb-6 xl4:mb-7">
          <span className="text-slate-muted text-2xs xxxl:text-[0.875rem] xl3:text-[0.9rem] xl4:text-[0.95rem] font-mono uppercase tracking-widest flex-shrink-0">
            Previous Portfolios
          </span>
          <div className="flex flex-wrap items-center gap-3 xl4:gap-5">
            {PREVIOUS_PORTFOLIOS.map((p) => (
              <a
                key={p.href}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 xxxl:gap-3 px-4 py-2 xxxl:px-5 xxxl:py-3 xl4:px-6 xl4:py-4 border border-white/[0.08] bg-white/[0.02] text-slate text-sm xxxl:text-[17px] xl4:text-[19px] hover:text-white hover:border-teal-border hover:bg-teal-subtle transition-all duration-200"
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

        <div className="border-t border-white/[0.06] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 xxxl:gap-6">
          <p className="text-slate-muted text-xs xxxl:text-[15px] xl4:text-[19px]">
            © {year} Iheme Studio. All rights reserved.
          </p>
          <p className="text-slate-muted text-xs xxxl:text-[15px] xl4:text-[19px]">
            Lagos, Nigeria
          </p>
        </div>
      </div>
    </footer>
  );
}
