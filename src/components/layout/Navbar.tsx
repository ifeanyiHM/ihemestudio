"use client";
// import { ScrollProgress } from "@/components/animations/ScrollProgress";
import { NAV_ITEMS } from "@/lib/data";
import { cn } from "@/lib/utils";
import { LayoutGroup, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-ink/90 backdrop-blur-xl border-b border-white/[0.06] py-3 xxxl:py-4"
            : "bg-transparent border-b border-transparent py-5 xxxl:py-6",
        )}
      >
        <nav className="site-container flex items-center justify-between">
          {/* Logo */}

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

          {/* Desktop links — a single pill glides between items */}
          <LayoutGroup id="primary-nav">
            <ul
              className="hidden lg:flex items-center gap-1 p-1 rounded-full border border-white/[0.07] bg-white/[0.02] backdrop-blur-md"
              onMouseLeave={() => setHovered(null)}
            >
              {NAV_ITEMS.map((item) => {
                const isActive = pathname === item.href;
                const pillOn = hovered ? hovered === item.href : isActive;
                return (
                  <li key={item.href} className="relative">
                    {pillOn && (
                      <motion.span
                        layoutId="nav-pill"
                        aria-hidden="true"
                        className="absolute inset-0 rounded-full bg-white/[0.08] border border-white/[0.08]"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 32,
                        }}
                      />
                    )}
                    <Link
                      href={item.href}
                      aria-current={isActive ? "page" : undefined}
                      onMouseEnter={() => setHovered(item.href)}
                      onFocus={() => setHovered(item.href)}
                      onBlur={() => setHovered(null)}
                      className={cn(
                        "relative z-10 flex items-center gap-2 rounded-full px-4 xxxl:px-5 xl3:px-6 xl4:px-7 py-1.5 xxxl:py-2 xl4:py-2.5 text-[13px] xxl:text-[14px] xxxl:text-[1rem] xl3:text-[1.05rem] xl4:text-[1.2rem] tracking-[0.03em] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal",
                        isActive || hovered === item.href
                          ? "text-white"
                          : "text-slate",
                      )}
                    >
                      {isActive && (
                        <span
                          className="w-1 h-1 rounded-full bg-teal shadow-teal-sm"
                          aria-hidden="true"
                        />
                      )}
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </LayoutGroup>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="group/cta hidden lg:inline-block text-xs xxxl:text-[15px] xl3:text-[15.5px] xl4:text-[18px] font-medium tracking-[0.08em] uppercase border border-teal text-teal px-5 py-[9px] xxxl:px-6 xxxl:py-3 xl3:px-7 xl3:py-3.5 xl4:px-8 xl4:py-4 transition-all duration-200 hover:bg-teal hover:text-ink"
            >
              Start a Project
              <FiArrowUpRight
                className="ml-2 inline -mt-0.5 transition-transform duration-200 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5"
                aria-hidden="true"
              />
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg text-slate hover:text-white hover:bg-white/[0.05] transition-colors"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>
        </nav>
        {/* <ScrollProgress /> */}
      </header>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 lg:hidden transition-all duration-300",
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        )}
      >
        <div
          className="absolute inset-0 bg-ink/95 backdrop-blur-xl"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={cn(
            "absolute inset-0 flex flex-col justify-center px-6 transition-transform duration-400",
            mobileOpen ? "translate-y-0" : "-translate-y-4",
          )}
        >
          <ul className="space-y-2">
            {NAV_ITEMS.map((item, i) => {
              const isActive = pathname === item.href;
              return (
                <li
                  key={item.href}
                  style={{
                    transitionDelay: mobileOpen ? `${i * 60}ms` : "0ms",
                  }}
                  className={cn(
                    "transition-all duration-300",
                    mobileOpen
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4",
                  )}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "block text-4xl font-display font-bold py-2 transition-colors duration-200",
                      isActive ? "text-teal" : "text-white/80 hover:text-white",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div
            className={cn(
              "mt-10 transition-all duration-300 delay-300",
              mobileOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4",
            )}
          >
            <Link
              href="/contact"
              className="inline-block text-sm font-medium tracking-[0.08em] uppercase border border-teal text-teal px-7 py-3.5"
            >
              Start a Project →
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
