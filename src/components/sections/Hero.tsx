"use client";
import { useEffect, useRef } from "react";
import { FiArrowRight, FiCode, FiLayers, FiZap } from "react-icons/fi";
import { Button } from "@/components/ui";

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let animId: number,
      time = 0;
    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener("resize", resize);
    const dots = Array.from({ length: 28 }, () => ({
      x: Math.random() * (canvas.offsetWidth || 600),
      y: Math.random() * (canvas.offsetHeight || 600),
      size: Math.random() * 1.5 + 0.3,
      speed: Math.random() * 0.3 + 0.1,
      phase: Math.random() * Math.PI * 2,
    }));
    const draw = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
      time += 0.005;
      dots.forEach((dot) => {
        const y = dot.y + Math.sin(time * dot.speed + dot.phase) * 8;
        const alpha = 0.15 + Math.sin(time * dot.speed + dot.phase) * 0.08;
        ctx.beginPath();
        ctx.arc(dot.x, y, dot.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,212,170,${alpha})`;
        ctx.fill();
      });
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x,
            dy = dots[i].y - dots[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.strokeStyle = `rgba(0,212,170,${0.05 * (1 - dist / 130)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="relative min-h-screen md:min-h-[70vh] lg:min-h-screen flex items-center overflow-hidden pt-28 pb-16">
      <div className="absolute inset-0 grid-bg opacity-30" aria-hidden="true" />
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 80% 30%, rgba(0,212,170,0.07) 0%, transparent 70%)",
        }}
      />
      {/* py-section max-w-7xl mx-auto px-6 */}
      <div className="relative z-10 max-w-7xl xxl:max-w-[95%] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center w-full">
        {/* Left — content */}
        <div>
          <div className="inline-flex items-center gap-3 pl-3 pr-4 py-2 border border-teal-border bg-teal-subtle mb-8">
            <span className="w-1 h-3 bg-teal animate-pulse-slow" />
            <span className="text-teal text-xs xxxl:text-[15px] font-mono uppercase tracking-[0.12em]">
              Available for new projects
            </span>
          </div>

          <h1 className="font-display text-white mb-6 leading-[1.05] tracking-tight text-[clamp(2.25rem,5vw,3.75rem)] lg:text-[clamp(2rem,5vw,2.9rem)] xl:text-[clamp(2.25rem,5vw,3.75rem)] xxxl:text-[4rem] font-bold">
            We build software that scales.
            {/* <em className="text-gradient not-italic">scales.</em> */}
          </h1>

          <p className="max-w-xl text-slate-light font-light text-[clamp(1rem,1.5vw,1.125rem)] xxxl:text-[1.3rem] leading-relaxed mb-10">
            Iheme Studio is a software engineering organization based in Lagos,
            Nigeria. We design and engineer high-performance web applications,
            enterprise dashboards, and digital products for ambitious teams.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-14">
            <Button href="/projects" size="lg" variant="primary">
              View Our Work <FiArrowRight size={16} />
            </Button>
            <Button href="/contact" size="lg" variant="secondary">
              Start a Project
            </Button>
          </div>

          <div className="flex flex-wrap items-center gap-2 md:gap-8 lg:gap-6 xl:gap-8 text-slate-muted text-xs xxxl:text-[15px] font-mono tracking-wide uppercase">
            <span>Next.js</span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span>React</span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span>React Native</span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span>TypeScript</span>
          </div>
        </div>

        {/* Right — structural visual */}
        <div className="relative hidden lg:block h-[450px] xl:h-[520px] xxxl:h-[600px]">
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full opacity-70"
            aria-hidden="true"
          />

          {/* Outer frame */}
          <div
            className="absolute inset-0 rounded-2xl border border-white/[0.06]"
            aria-hidden="true"
          />

          {/* Floating card 1 — top */}
          <div className="absolute top-8 right-6 w-56 xxxl:w-60 rounded-xl border border-white/[0.08] bg-ink-800/80 backdrop-blur-md p-5 xxxl:p-6  animate-float-slow">
            <div className="flex items-center gap-2 xxxl:gap-3 mb-3">
              <div className="w-8 h-8 xxxl:w-9 xxxl:h-9 rounded-lg bg-teal-subtle border border-teal-border flex items-center justify-center">
                <FiCode size={14} className="text-teal xxxl:text-[20px]" />
              </div>
              <span className="text-white text-sm xxxl:text-[17px] font-semibold">
                Clean Code
              </span>
            </div>
            <p className="text-slate text-xs xxxl:text-[15px] leading-relaxed">
              Maintainable, scalable architecture from day one.
            </p>
          </div>

          {/* Floating card 2 — middle, offset left */}
          <div className="absolute top-[36%] xl:top-[42%] left-6 w-52 xxxl:w-60 rounded-xl border border-white/[0.08] bg-ink-800/80 backdrop-blur-md p-5 xxxl:p-6 shadow-card-hover animate-float-slower">
            <div className="flex items-center gap-2 xxxl:gap-3 mb-3">
              <div className="w-8 h-8 xxxl:w-9 xxxl:h-9 rounded-lg bg-teal-subtle border border-teal-border flex items-center justify-center">
                <FiLayers size={14} className="text-teal xxxl:text-[20px]" />
              </div>
              <span className="text-white text-sm xxxl:text-[17px] font-semibold">
                Design Systems
              </span>
            </div>
            <p className="text-slate text-xs xxxl:text-[15px] leading-relaxed">
              Consistent UI components built to scale across products.
            </p>
          </div>

          {/* Floating card 3 — bottom right */}
          <div className="absolute bottom-10 right-10 w-48 xxxl:w-56 rounded-xl border border-white/[0.08] bg-ink-800/80 backdrop-blur-md p-5 xxxl:p-6 shadow-card-hover animate-float-slow">
            <div className="flex items-center gap-2 xxxl:gap-3 mb-3">
              <div className="w-8 h-8 xxxl:w-9 xxxl:h-9 rounded-lg bg-teal-subtle border border-teal-border flex items-center justify-center">
                <FiZap size={14} className="text-teal xxxl:text-[20px]" />
              </div>
              <span className="text-white text-sm xxxl:text-[17px] font-semibold">
                Fast Delivery
              </span>
            </div>
            <p className="text-slate text-xs xxxl:text-[15px] leading-relaxed">
              From concept to production, built for speed.
            </p>
          </div>

          {/* Center connecting lines */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            aria-hidden="true"
          >
            <line
              x1="35%"
              y1="20%"
              x2="55%"
              y2="45%"
              stroke="rgba(0,212,170,0.15)"
              strokeWidth="1"
              strokeDasharray="4 4"
            />
            <line
              x1="55%"
              y1="45%"
              x2="40%"
              y2="78%"
              stroke="rgba(0,212,170,0.15)"
              strokeWidth="1"
              strokeDasharray="4 4"
            />
          </svg>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to top, #08090A, transparent)" }}
      />
    </section>
  );
}
