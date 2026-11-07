"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useEffect, useRef, type PointerEvent, type ReactNode } from "react";
import { FiCode, FiLayers, FiZap } from "react-icons/fi";

interface FloatCardProps {
  icon: ReactNode;
  title: string;
  body: string;
  className: string;
  /** How strongly this layer reacts to the pointer (parallax depth). */
  depth: number;
  px: MotionValue<number>;
  py: MotionValue<number>;
}

function FloatCard({ icon, title, body, className, depth, px, py }: FloatCardProps) {
  const x = useTransform(px, (v) => v * depth);
  const y = useTransform(py, (v) => v * depth);
  return (
    <motion.div
      style={{ x, y }}
      className={`absolute rounded-xl border border-white/[0.08] bg-ink-800/80 backdrop-blur-md p-5 xxxl:p-6 xl3:p-6 xl4:p-8 shadow-card-hover ${className}`}
    >
      <div className="flex items-center gap-2 xxxl:gap-3 xl3:gap-4 xl4:gap-5 mb-3">
        <div className="icon-box-sm">{icon}</div>
        <span className="text-white text-sm xxxl:text-[17px] xl3:text-[17.5px] xl4:text-[18px] font-semibold">
          {title}
        </span>
      </div>
      <p className="text-slate text-xs xxxl:text-[15px] xl3:text-[15.5px] xl4:text-[17px] leading-relaxed">
        {body}
      </p>
    </motion.div>
  );
}

const ICON_CLASS = "text-teal xxxl:text-[20px] xl3:text-[21px] xl4:text-[22px]";

export function HeroVisual() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduce = useReducedMotion();

  // Pointer parallax: normalised -1..1 offsets, smoothed with a spring.
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const px = useSpring(rawX, { stiffness: 90, damping: 18, mass: 0.4 });
  const py = useSpring(rawY, { stiffness: 90, damping: 18, mass: 0.4 });

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    if (reduce || e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    rawX.set(((e.clientX - r.left) / r.width - 0.5) * 2);
    rawY.set(((e.clientY - r.top) / r.height - 0.5) * 2);
  };
  const onLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let animId = 0;
    let time = 0;
    let running = false;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
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
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
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
      if (running) animId = requestAnimationFrame(draw);
    };

    const start = () => {
      if (running || prefersReduced) return;
      running = true;
      animId = requestAnimationFrame(draw);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(animId);
    };

    draw(); // always paint one frame (static for reduced motion)

    // Only animate while the hero is actually on screen.
    const observer = new IntersectionObserver(
      ([entry]) => (entry.isIntersecting ? start() : stop()),
      { threshold: 0 },
    );
    observer.observe(canvas);

    return () => {
      stop();
      observer.disconnect();
      window.removeEventListener("resize", resize);
    };
  }, []);

  const gx = useTransform(px, (v) => v * -10);
  const gy = useTransform(py, (v) => v * -10);

  return (
    <div
      className="relative hidden lg:block h-[450px] xl:h-[520px] xxxl:h-[600px] xl3:h-[640px] xl4:h-[700px]"
      onPointerMove={onMove}
      onPointerLeave={onLeave}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-70"
        aria-hidden="true"
      />

      {/* Blueprint frame with corner ticks and a coordinate readout */}
      <div
        className="absolute inset-0 rounded-2xl border border-white/[0.06]"
        aria-hidden="true"
      />
      {(["top-3 left-3 border-t border-l", "top-3 right-3 border-t border-r", "bottom-3 left-3 border-b border-l", "bottom-3 right-3 border-b border-r"] as const).map(
        (pos) => (
          <span
            key={pos}
            aria-hidden="true"
            className={`absolute w-3 h-3 border-teal/50 ${pos}`}
          />
        ),
      )}
      <p
        className="absolute bottom-5 left-8 text-2xs xxxl:text-[0.75rem] xl4:text-[0.9rem] font-mono uppercase tracking-[0.2em] text-slate-muted"
        aria-hidden="true"
      >
        6.5244° N · 3.3792° E — Lagos
      </p>

      <motion.svg
        style={{ x: gx, y: gy }}
        className="absolute inset-0 w-full h-full pointer-events-none"
        aria-hidden="true"
      >
        <line x1="35%" y1="20%" x2="55%" y2="45%" stroke="rgba(0,212,170,0.15)" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="55%" y1="45%" x2="40%" y2="78%" stroke="rgba(0,212,170,0.15)" strokeWidth="1" strokeDasharray="4 4" />
        <circle cx="55%" cy="45%" r="3" fill="rgba(0,212,170,0.7)" />
      </motion.svg>

      <FloatCard
        px={px}
        py={py}
        depth={14}
        className="top-8 xl4:top-10 right-6 xl3:right-8 xl4:right-9 w-56 xxxl:w-60 xl3:w-64 xl4:w-80"
        icon={<FiCode size={14} className={ICON_CLASS} />}
        title="Clean Code"
        body="Maintainable, scalable architecture from day one."
      />
      <FloatCard
        px={px}
        py={py}
        depth={26}
        className="top-[36%] xl:top-[42%] left-6 xl3:left-7 xl4:left-10 w-52 xxxl:w-60 xl3:w-64 xl4:w-72"
        icon={<FiLayers size={14} className={ICON_CLASS} />}
        title="Design Systems"
        body="Consistent UI components built to scale across products."
      />
      <FloatCard
        px={px}
        py={py}
        depth={18}
        className="bottom-10 right-10 xl3:right-12 xl4:right-13 w-48 xxxl:w-56 xl3:w-60 xl4:w-[17rem]"
        icon={<FiZap size={14} className={ICON_CLASS} />}
        title="Fast Delivery"
        body="From concept to production, built for speed."
      />
    </div>
  );
}
