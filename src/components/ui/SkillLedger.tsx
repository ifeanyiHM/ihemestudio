import { FadeIn } from "@/components/animations/FadeIn";

interface LedgerEntry {
  label: string;
  usage: string;
}

/**
 * "Frequently used" as an editorial ledger — name, dotted leader, how often it's
 * reached for — instead of progress bars.
 */
export function SkillLedger({ entries }: { entries: LedgerEntry[] }) {
  return (
    <ul className="divide-y divide-white/[0.06] border-y border-white/[0.06]">
      {entries.map((entry, i) => (
        <li key={entry.label}>
          <FadeIn delay={i * 60} direction="up" duration={500}>
            <div className="group flex items-baseline gap-4 py-4 xxxl:py-5 xl4:py-6">
              <span
                aria-hidden="true"
                className="font-mono text-2xs xxxl:text-[0.8rem] xl4:text-[0.9rem] text-slate-muted tabular-nums"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-display font-semibold text-white text-base xxxl:text-xl xl3:text-[1.3rem] xl4:text-2xl transition-transform duration-300 group-hover:translate-x-1">
                {entry.label}
              </span>
              <span
                aria-hidden="true"
                className="flex-1 self-end mb-1.5 border-b border-dotted border-white/15 transition-colors duration-300 group-hover:border-teal/60"
              />
              <span className="font-mono text-2xs xxxl:text-[0.875rem] xl4:text-[1rem] uppercase tracking-[0.15em] text-teal">
                {entry.usage}
              </span>
            </div>
          </FadeIn>
        </li>
      ))}
    </ul>
  );
}
