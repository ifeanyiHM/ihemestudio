"use client";
import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";
import { cn } from "@/lib/utils";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollUp = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      onClick={scrollUp}
      aria-label="Scroll to top"
      className={cn(
        "fixed bottom-8 right-8 z-50 group flex flex-col items-center justify-center w-11 h-11 xxxl:w-12 xxxl:h-12 xl3:w-14 xl3:h-14 xl4:w-16 xl4:h-16 border border-white/[0.1] bg-ink-800/80 backdrop-blur-md text-slate hover:text-teal hover:border-teal-border hover:bg-teal-subtle transition-all duration-300",
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none",
      )}
    >
      <FiArrowUp className="transition-transform duration-300 group-hover:-translate-y-0.5 xxxl:text-lg xl3:text-xl xl4:text-2xl" />
      {/* Teal fill on hover — animates up from bottom */}
      <span className="absolute bottom-0 left-0 right-0 h-0 bg-teal/[0.08] group-hover:h-full transition-all duration-300 ease-out -z-10" />
    </button>
  );
}
