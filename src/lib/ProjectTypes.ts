import type { Project, ProjectType } from "@/types";

/** Every project type the portfolio can use, in display order. */
export const PROJECT_TYPES: { id: ProjectType; label: string }[] = [
  { id: "website", label: "Website" },
  { id: "webapp", label: "Web App" },
  { id: "ecommerce", label: "E-commerce" },
  { id: "marketplace", label: "Marketplace" },
  { id: "saas", label: "SaaS" },
  { id: "service-app", label: "Service App" },
  { id: "internal-tool", label: "Internal Tool" },
  { id: "dashboard", label: "Dashboard" },
  { id: "mobile", label: "Mobile App" },
  { id: "api", label: "API & Backend" },
  { id: "design-system", label: "Design System" },
];

export interface ProjectTypeOption {
  id: ProjectType;
  label: string;
  count: number;
}

/** Only the types that actually have projects, so the filter never shows empty chips. */
export function getProjectTypes(projects: Project[]): ProjectTypeOption[] {
  return PROJECT_TYPES.map(({ id, label }) => ({
    id,
    label,
    count: projects.filter((p) => p.type === id).length,
  })).filter((t) => t.count > 0);
}
