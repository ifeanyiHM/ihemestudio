import type { MetadataRoute } from "next";
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Iheme Studio",
    short_name: "Iheme Studio",
    description: "Software engineering studio — Next.js, React, TypeScript. Based in Lagos, Nigeria.",
    start_url: "/",
    display: "standalone",
    background_color: "#08090A",
    theme_color: "#00D4AA",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
