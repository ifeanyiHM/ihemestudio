"use client";
import { useState, useRef, useEffect } from "react";
import { FiSend, FiCheck, FiChevronDown, FiAlertCircle } from "react-icons/fi";
import { cn } from "@/lib/utils";

type Status = "idle" | "sending" | "sent" | "error";

const SERVICES_LIST = [
  "Frontend Engineering",
  "Full-Stack Development",
  "Dashboard / Analytics",
  "Mobile App Development",
  "E-commerce / Marketplace",
  "Landing Page / Marketing Site",
  "Website Redesign",
  "Component Library / Design System",
  "UI/UX Design",
  "Code Review / Audit",
  "Other",
];

const BUDGET_LIST = [
  { value: "<5k", label: "Under $5,000" },
  { value: "5k+", label: "$5,000+" },
  // { value: "5k-15k", label: "$5,000 – $15,000" },
  // { value: "15k-50k", label: "$15,000 – $50,000" },
  // { value: "50k+", label: "$50,000+" },
  { value: "discuss", label: "Let's discuss" },
];

// ─── Custom Select ────────────────────────────────────────────────────────────
function CustomSelect({
  id,
  value,
  placeholder,
  options,
  onChange,
}: {
  id: string;
  value: string;
  placeholder: string;
  options: { value: string; label: string }[];
  onChange: (value: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node))
        setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const selected = options.find((o) => o.value === value);

  return (
    <div ref={ref} className="relative" id={id}>
      <button
        type="button"
        onClick={() => setOpen((p) => !p)}
        className={cn(
          "w-full flex items-center justify-between px-4 py-3 xxxl:px-5 xxxl:py-4 xl3:px-6 xl3:py-4 xl4:px-7 xl4:py-5 text-sm xxxl:text-[17px] xl3:text-[17.5px] xl4:text-[20px] border transition-all duration-200 focus:outline-none",
          open
            ? "border-teal/50 bg-teal-subtle text-white"
            : "border-white/[0.1] bg-white/[0.04] text-slate-muted hover:border-white/[0.2] hover:text-white",
        )}
      >
        <span className={selected ? "text-white" : ""}>
          {selected ? selected.label : placeholder}
        </span>
        <FiChevronDown
          className={cn(
            "text-slate-muted transition-transform duration-200 text-[15px] xxxl:text-[18px] xl3:text-[19px] xl4:text-[20px]",
            open && "rotate-180 text-teal",
          )}
        />
      </button>

      {open && (
        <div className="absolute top-full left-0 right-0 z-50 mt-px border border-white/[0.1] bg-ink-800 divide-y divide-white/[0.06] shadow-card-hover">
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => {
                onChange(option.value);
                setOpen(false);
              }}
              className={cn(
                "w-full text-left px-4 py-3 xxxl:px-5 xxxl:py-4 xl4:py-5 text-sm xxxl:text-[17px] xl4:text-[20px] transition-colors duration-150",
                value === option.value
                  ? "text-teal bg-teal-subtle"
                  : "text-slate hover:text-white hover:bg-white/[0.05]",
              )}
            >
              {option.value === value && (
                <span className="inline-block w-1.5 h-1.5 xxxl:w-2.5 xxxl:h-2.5 bg-teal mr-2.5 xxxl:mr-3.5 mb-[1px] xxxl:mb[3px]" />
              )}
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Contact Form ─────────────────────────────────────────────────────────────
export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    budget: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="flex flex-col items-center justify-center py-16 xxxl:py-20 xl3:py-24 xl4:py-28 text-center space-y-5">
        <div className="w-14 h-14 xxxl:w-16 xxxl:h-16 xl3:w-18 xl3:h-18 xl4:w-20 xl4:h-20 bg-teal-subtle border border-teal-border flex items-center justify-center">
          <FiCheck className="text-teal text-[22px] xxxl:text-2xl xl3:text-[24px] xl4:text-[26px]" />
        </div>
        <div>
          <h3 className="font-display text-white font-semibold text-lg xxxl:text-xl xl3:text-[1.2rem] xl4:text-[1.25rem] mb-1">
            Message received!
          </h3>
          <p className="text-slate text-sm xxxl:text-[17px] xl3:text-[17.5px] xl4:text-[18px] max-w-xs xxxl:max-w-sm">
            Thanks for reaching out. We&apos;ll get back to you within 24 hours.
          </p>
        </div>
        <button
          onClick={() => {
            setStatus("idle");
            setForm({
              name: "",
              email: "",
              service: "",
              budget: "",
              message: "",
            });
          }}
          className="text-2xs xxxl:text-[0.875rem] font-mono uppercase tracking-widest text-teal border-b border-teal/30 hover:border-teal transition-colors duration-200 pb-px"
        >
          Send another message
        </button>
      </div>
    );
  }

  const inputClass =
    "w-full bg-white/[0.04] border border-white/[0.1] px-4 py-3 xxxl:px-5 xxxl:py-4 xl3:px-6 xl3:py-4 xl4:px-7 xl4:py-5 text-white text-sm xxxl:text-[17px] xl3:text-[17.5px] xl4:text-[20px] placeholder:text-slate-muted focus:outline-none focus:border-teal/50 focus:bg-teal-subtle transition-all duration-200";

  const labelClass =
    "block text-2xs xxxl:text-[0.875rem] xl3:text-[0.9rem] xl4:text-[0.9rem] font-mono uppercase tracking-widest text-slate-muted mb-2 xxxl:mb-3 xl3:mb-4";

  return (
    <form onSubmit={handleSubmit} className="space-y-6 xl4:space-y-8">
      {status === "error" && (
        <div className="flex items-center gap-3 xxxl:gap-4 xl3:gap-5 xl4:gap-6 px-4 py-3 xxxl:px-5 xxxl:py-4 xl3:px-6 xl3:py-5 xl4:px-7 xl4:py-5 border border-red-500/30 bg-red-500/10 text-red-400 text-sm xxxl:text-[17px] xl3:text-[17.5px] xl4:text-[18px]">
          <FiAlertCircle className="flex-shrink-0 text-[15px] xxxl:text-[18px] xl3:text-[19px] xl4:text-[20px]" />
          Something went wrong. Please try again or email us directly at
          ifeanyihm@gmail.com.
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className={labelClass}>
            Name{" "}
            <span className="text-teal xxxl:text-lg xl3:text-xl xl4:text-[1.1rem]">
              *
            </span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email{" "}
            <span className="text-teal xxxl:text-lg xl3:text-xl xl4:text-[1.1rem]">
              *
            </span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="you@company.com"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="service" className={labelClass}>
          Service
        </label>
        <CustomSelect
          id="service"
          value={form.service}
          placeholder="Select a service"
          options={SERVICES_LIST.map((s) => ({ value: s, label: s }))}
          onChange={(v) => setForm((p) => ({ ...p, service: v }))}
        />
      </div>

      <div>
        <label htmlFor="budget" className={labelClass}>
          Budget range
        </label>
        <CustomSelect
          id="budget"
          value={form.budget}
          placeholder="Select a range"
          options={BUDGET_LIST}
          onChange={(v) => setForm((p) => ({ ...p, budget: v }))}
        />
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Message <span className="text-teal xxxl:text-lg">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us about your project, timeline, and any specific requirements…"
          className={cn(inputClass, "resize-none")}
        />
      </div>

      <div>
        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full flex items-center justify-center gap-2 px-6 py-3.5 xxxl:px-7 xxxl:py-4 xl3:px-8 xl3:py-4 xl4:px-9 xl4:py-5 bg-teal text-ink font-semibold text-sm xxxl:text-[17px] xl3:text-[17.5px] xl4:text-[18px] uppercase tracking-[0.08em] transition-all duration-200 hover:bg-teal-glow hover:shadow-teal-sm disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "sending" ? (
            <>
              <span className="w-4 h-4 xxxl:w-5 xxxl:h-5 xl3:w-6 xl3:h-6 xl4:w-7 xl4:h-7 border-2 border-ink/30 border-t-ink rounded-full animate-spin" />
              Sending…
            </>
          ) : (
            <>
              Send Message <FiSend className="text-sm xxxl:text-base" />
            </>
          )}
        </button>
        <p className="text-2xs xxxl:text-[0.75rem] xl3:text-[0.8rem] xl4:text-[0.85rem] font-mono text-slate-muted text-center mt-3 xxxl:mt-4 xl3:mt-5 xl4:mt-6 uppercase tracking-widest">
          We respond to all enquiries within 24 hours.
        </p>
      </div>
    </form>
  );
}
