"use client";

import { useEffect, useState } from "react";

const formatter = new Intl.DateTimeFormat("en-GB", {
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
  timeZone: "Africa/Lagos",
});

/**
 * Live Lagos time. Renders a fixed placeholder on the server and first client
 * paint, then fills in after mount — so there is no hydration mismatch.
 */
export function LocalTime({ className }: { className?: string }) {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const tick = () => setTime(formatter.format(new Date()));
    tick();
    const id = window.setInterval(tick, 30_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <span className={className}>
      <span
        className="inline-block w-1.5 h-1.5 mr-2 rounded-full bg-teal animate-pulse-slow align-middle"
        aria-hidden="true"
      />
      Lagos · <span className="tabular-nums">{time ?? "--:--"}</span> WAT
    </span>
  );
}
