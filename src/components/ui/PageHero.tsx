import { SectionLabel } from "@/components/ui";
import { cn } from "@/lib/utils";

interface PageHeroProps { label: string; title: React.ReactNode; description?: string; className?: string; }

export function PageHero({ label, title, description, className }: PageHeroProps) {
  return (
    <section className={cn("pt-36 pb-16 max-w-7xl mx-auto px-6 border-b border-white/[0.06]", className)}>
      <div className="max-w-3xl space-y-5">
        <SectionLabel>{label}</SectionLabel>
        <h1 className="font-display text-display-xl text-white font-bold leading-tight">{title}</h1>
        {description && <p className="text-slate text-lg leading-relaxed">{description}</p>}
      </div>
    </section>
  );
}
