import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Iheme Studio — Software Engineering & Digital Products";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div style={{ background: "#08090A", width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-end", padding: "64px 72px", fontFamily: "sans-serif", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div style={{ position: "absolute", top: -200, right: -100, width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(0,212,170,0.12) 0%, transparent 70%)" }} />
        <div style={{ position: "absolute", top: 56, left: 72, display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ width: 44, height: 44, borderRadius: 10, background: "#00D4AA", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, fontWeight: 700, color: "#08090A" }}>IS</div>
          <span style={{ color: "#ffffff", fontSize: 20, fontWeight: 600, letterSpacing: "-0.02em" }}>Iheme Studio</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8, background: "rgba(0,212,170,0.1)", border: "1px solid rgba(0,212,170,0.25)", borderRadius: 999, padding: "6px 16px", marginBottom: 24 }}>
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#00D4AA" }} />
          <span style={{ color: "#00D4AA", fontSize: 14, fontFamily: "monospace" }}>Available for new projects</span>
        </div>
        <div style={{ fontSize: 64, fontWeight: 800, color: "#ffffff", lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: 20 }}>
          We build software<br /><span style={{ color: "#00D4AA" }}>that scales.</span>
        </div>
        <div style={{ fontSize: 20, color: "#A0A8B4", lineHeight: 1.5, maxWidth: 640 }}>
          Software engineering studio · Lagos, Nigeria · Next.js · React · TypeScript
        </div>
      </div>
    ),
    { ...size }
  );
}
