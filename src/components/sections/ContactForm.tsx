"use client";
import { useState } from "react";
import { FiSend, FiCheck } from "react-icons/fi";
import { cn } from "@/lib/utils";

type Status = "idle" | "sending" | "sent";
const SERVICES_LIST = ["Frontend Engineering","Full-Stack Development","Dashboard / Analytics","UI/UX Design","Code Review / Audit","Other"];

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name:"", email:"", service:"", budget:"", message:"" });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); setStatus("sending");
    await new Promise((r) => setTimeout(r, 1500)); setStatus("sent");
  };

  if (status === "sent") {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center space-y-4">
        <div className="w-14 h-14 rounded-full bg-teal/10 border border-teal-border flex items-center justify-center">
          <FiCheck size={24} className="text-teal" />
        </div>
        <h3 className="font-display text-white font-semibold text-lg">Message received!</h3>
        <p className="text-slate text-sm max-w-xs">Thanks for reaching out. We&apos;ll get back to you within 24 hours.</p>
        <button onClick={() => { setStatus("idle"); setForm({ name:"", email:"", service:"", budget:"", message:"" }); }}
          className="text-teal text-sm hover:text-teal-glow transition-colors mt-2">Send another message</button>
      </div>
    );
  }

  const inputClass = "w-full bg-white/[0.04] border border-white/[0.1] rounded-xl px-4 py-3 text-white text-sm placeholder:text-slate-muted focus:outline-none focus:border-teal/50 focus:bg-teal-subtle transition-all duration-200";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-xs font-medium text-slate mb-1.5">Name <span className="text-teal">*</span></label>
          <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} placeholder="Your name" className={inputClass} />
        </div>
        <div>
          <label htmlFor="email" className="block text-xs font-medium text-slate mb-1.5">Email <span className="text-teal">*</span></label>
          <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="you@company.com" className={inputClass} />
        </div>
      </div>
      <div>
        <label htmlFor="service" className="block text-xs font-medium text-slate mb-1.5">Service</label>
        <select id="service" name="service" value={form.service} onChange={handleChange} className={cn(inputClass, "cursor-pointer")}>
          <option value="" disabled>Select a service</option>
          {SERVICES_LIST.map((s) => <option key={s} value={s} className="bg-ink-800">{s}</option>)}
        </select>
      </div>
      <div>
        <label htmlFor="budget" className="block text-xs font-medium text-slate mb-1.5">Budget range</label>
        <select id="budget" name="budget" value={form.budget} onChange={handleChange} className={cn(inputClass, "cursor-pointer")}>
          <option value="" disabled>Select a range</option>
          <option value="<5k" className="bg-ink-800">Under $5,000</option>
          <option value="5k-15k" className="bg-ink-800">$5,000 – $15,000</option>
          <option value="15k-50k" className="bg-ink-800">$15,000 – $50,000</option>
          <option value="50k+" className="bg-ink-800">$50,000+</option>
          <option value="discuss" className="bg-ink-800">Let&apos;s discuss</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-xs font-medium text-slate mb-1.5">Message <span className="text-teal">*</span></label>
        <textarea id="message" name="message" required rows={5} value={form.message} onChange={handleChange} placeholder="Tell us about your project, timeline, and any specific requirements…" className={cn(inputClass, "resize-none")} />
      </div>
      <button type="submit" disabled={status === "sending"}
        className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-teal text-ink font-semibold text-sm transition-all duration-200 hover:bg-teal-glow hover:shadow-teal-sm disabled:opacity-60 disabled:cursor-not-allowed">
        {status === "sending" ? (
          <><span className="w-4 h-4 border-2 border-ink/30 border-t-ink rounded-full animate-spin" />Sending…</>
        ) : (
          <>Send Message <FiSend size={14} /></>
        )}
      </button>
      <p className="text-xs text-slate-muted text-center">We respond to all enquiries within 24 hours.</p>
    </form>
  );
}
