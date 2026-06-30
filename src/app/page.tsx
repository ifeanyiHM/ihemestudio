import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { StatsStrip } from "@/components/sections/StatsStrip";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { AboutTeaser } from "@/components/sections/AboutTeaser";
import { CTASection } from "@/components/sections/CTASection";

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
