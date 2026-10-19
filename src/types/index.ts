export interface Project {
  image?: string;
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: "fullstack" | "frontend" | "dashboard" | "platform";
  tags: string[];
  liveUrl?: string;
  codeUrl?: string;
  featured: boolean;
  year: number;
  impact?: string;
}

export interface Skill {
  name: string;
  level: number; // 0–100
  category: "language" | "framework" | "tool" | "design";
}

export interface SkillGroup {
  label: string;
  skills: string[];
}

export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  deliverables: string[];
}

export interface Stat {
  value: string;
  label: string;
  suffix?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}
