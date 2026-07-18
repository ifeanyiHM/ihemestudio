"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";
import { NAV_ITEMS } from "@/lib/data";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
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
            ? "bg-ink/90 backdrop-blur-xl border-b border-white/[0.06] py-3"
            : "bg-transparent border-b border-transparent py-5",
        )}
      >
        <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          {/* <Link
            href="/"
            className="flex items-center"
            aria-label="Iheme Studio — Home"
          >
            <span className="font-body text-sm font-medium tracking-[0.06em] uppercase text-white">
              Iheme<span className="font-light"> Studio</span>
            </span>
          </Link> */}
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
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-9">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "text-[13px] tracking-[0.04em] pb-[2px] border-b transition-colors duration-200",
                      isActive
                        ? "text-white font-medium border-teal"
                        : "text-slate font-normal border-transparent hover:text-white",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden md:inline-block text-xs font-medium tracking-[0.08em] uppercase border border-teal text-teal px-5 py-[9px] transition-all duration-200 hover:bg-teal hover:text-ink"
            >
              Start a Project
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-lg text-slate hover:text-white hover:bg-white/[0.05] transition-colors"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 md:hidden transition-all duration-300",
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
