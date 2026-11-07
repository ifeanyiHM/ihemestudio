import { CTASection } from "@/components/sections";
import { AboutTeaser } from "@/components/sections/AboutTeaser";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Hero } from "@/components/sections/Hero";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { StatsStrip } from "@/components/sections/StatsStrip";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Iheme Studio — Software Engineering & Digital Products",
  description:
    "We design and engineer high-performance web applications, enterprise dashboards, and digital products for ambitious teams. Based in Lagos, Nigeria.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <FeaturedProjects />
      <ServicesOverview />
      <AboutTeaser />
      <CTASection />
    </>
  );
}
