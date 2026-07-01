import type {
  Project,
  SkillGroup,
  Service,
  Stat,
  NavItem,
  SocialLink,
} from "@/types";

export const NAV_ITEMS: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Resume", href: "/Ifeanyi_Iheme_resume.pdf" },
  { label: "Contact", href: "/contact" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/ifeanyiHM", icon: "FiGithub" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ifeanyihm/",
    icon: "FiLinkedin",
  },
  {
    label: "Twitter",
    href: "https://twitter.com/ifeanyimichaell",
    icon: "FiTwitter",
  },
  { label: "Email", href: "mailto:ifeanyihm@gmail.com", icon: "FiMail" },
];

export const STATS: Stat[] = [
  { value: "20+", label: "Projects Delivered" },
  { value: "4+", label: "Years of Experience" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "8+", label: "Technologies Mastered" },
];

export const FEATURED_PROJECTS: Project[] = [
  {
    id: "1502-properties",
    title: "1502 Properties",
    tagline: "Real estate platform that guides buyers home",
    description:
      "A full-featured property marketplace that simplifies how people search, explore, and purchase apartments and homes. We architected a robust data layer using Supabase, with a seamless React frontend that surfaces listings with rich detail and intuitive filtering — reducing the typical property-search friction from weeks to hours.",
    category: "fullstack",
    tags: ["TypeScript", "React", "Supabase", "SCSS", "JavaScript", "MongDB"],
    liveUrl: "https://1502properties.com/",
    codeUrl: "https://github.com/ifeanyiHM/phoenixglobal",
    featured: true,
    year: 2024,
    impact: "Full property search, listing management & buyer journey",
  },
  {
    id: "cra-foundation",
    title: "CRA Foundation",
    tagline: "NGO platform empowering vulnerable children through sponsorship",
    description:
      "A modern, full-stack website built for the Children Rights Advocate (CRA) Foundation to increase awareness, donations, and child sponsorship. The platform enables visitors to sponsor children, make secure donations, explore the foundation's impact, and learn about its mission through an accessible, responsive interface. ",
    category: "fullstack",
    tags: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Paystack"],
    liveUrl: "https://crafoundation.com.ng/",
    codeUrl: "https://github.com/ifeanyiHM/cra-foundation",
    featured: true,
    year: 2025,
    impact:
      "Online donations, child sponsorship & nonprofit digital transformation",
  },
  {
    id: "axign",
    title: "Axign",
    tagline: "Enterprise task management for distributed teams",
    description:
      "A comprehensive organizational operations platform built specifically for businesses. We engineered role-based access control so CEOs can create and assign tasks while employees manage progress in real time. Automated notifications, analytics dashboards, and a Storybook-documented component library replace scattered email threads with a single source of truth.",
    category: "fullstack",
    tags: [
      "Next.js",
      "TypeScript",
      "Storybook",
      "Shadcn UI",
      "Tailwind CSS",
      "React",
      "MongDB",
    ],
    liveUrl: "https://axign.vercel.app/",
    codeUrl: "https://github.com/ifeanyiHM/axign",
    featured: true,
    year: 2024,
    impact: "Role-based access, real-time analytics & team collaboration",
  },
  {
    id: "starsight-atlas",
    title: "Starsight Atlas",
    tagline: "NASA-powered environmental analytics dashboard",
    description:
      "A modern climate and energy intelligence platform that queries the NASA POWER API in real time. Users search any global location — or use GPS — to retrieve temperature, rainfall, and solar radiation data within a custom date range. We built responsive data visualizations and intelligent location-search suggestions into a professional dashboard built for energy analysts and environmental researchers.",
    category: "dashboard",
    tags: ["Next.js", "TypeScript", "React", "Tailwind CSS", "NASA API"],
    liveUrl: "https://starsight-solar.vercel.app/",
    codeUrl: "https://github.com/ifeanyiHM/starsight-solar",
    featured: true,
    year: 2024,
    impact: "Real-time climate data visualization from NASA POWER API",
  },
  {
    id: "starsight-portal",
    title: "Starsight Employee Portal",
    tagline: "Centralized HR documentation platform",
    description:
      "A digital HR operations hub that streamlines how employees access, complete, and track internal company forms. We focused relentlessly on reducing administrative drag — giving staff a clear, organized interface that cuts time-to-completion on routine documents and gives HR teams full visibility into submission status.",
    category: "platform",
    tags: ["Next.js", "TypeScript", "React", "Tailwind CSS", "JavaScript"],
    liveUrl: "https://starsight-employee-form-portal.vercel.app/",
    codeUrl: "https://github.com/ifeanyiHM/starsight-employee-form-portal",
    featured: true,
    year: 2024,
    impact: "Streamlined HR workflows & document management",
  },
];

export const OTHER_PROJECTS: Project[] = [
  {
    id: "race-edu",
    title: "Race Edu Consult",
    tagline: "Education consultancy web presence",
    description:
      "Clean, conversion-focused landing site for an education consultancy.",
    category: "frontend",
    tags: ["Next.js", "React", "JavaScript"],
    liveUrl: "https://race-navy.vercel.app/",
    codeUrl: "https://github.com/ifeanyiHM/race",
    featured: false,
    year: 2023,
  },
  {
    id: "notal",
    title: "Notal",
    tagline: "Minimal note-taking app",
    description:
      "A clean, focused React application for personal note management.",
    category: "frontend",
    tags: ["React"],
    liveUrl: "https://notal.vercel.app/",
    codeUrl: "https://github.com/ifeanyiHM/NOTAL",
    featured: false,
    year: 2023,
  },
  {
    id: "pinterest-clone",
    title: "Pinterest Clone",
    tagline: "Visual discovery UI recreation",
    description:
      "Pixel-perfect recreation of Pinterest's masonry grid and interaction patterns.",
    category: "frontend",
    tags: ["HTML", "SCSS", "JavaScript"],
    liveUrl: "https://pinterest-clone-ten-silk.vercel.app/",
    codeUrl: "https://github.com/ifeanyiHM/Pinterest-Clone",
    featured: false,
    year: 2022,
  },
  {
    id: "material-dashboard",
    title: "Material Dashboard",
    tagline: "Admin analytics interface",
    description:
      "A data-rich admin dashboard inspired by Material Design principles.",
    category: "dashboard",
    tags: ["HTML", "JavaScript"],
    liveUrl: "https://dashboard-theta-hazel.vercel.app/",
    codeUrl: "https://github.com/ifeanyiHM/Dashboard",
    featured: false,
    year: 2022,
  },
  {
    id: "custom-calculator",
    title: "React Calculator",
    tagline: "Custom arithmetic interface",
    description: "A fully functional calculator with custom UI built in React.",
    category: "frontend",
    tags: ["React"],
    liveUrl: "https://ifeanyihm.github.io/A-React-calculator-app/",
    codeUrl: "https://github.com/ifeanyiHM/A-React-calculator-app",
    featured: false,
    year: 2022,
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    label: "Languages",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "Node.js",
      "SCSS / SASS",
    ],
  },
  {
    label: "Frameworks & Libraries",
    skills: [
      "React",
      "React Native",
      "Next.js",
      "Tailwind CSS",
      "Express.js",
      "Styled Components",
      "Bootstrap",
    ],
  },
  {
    label: "Tooling & Platforms",
    skills: ["Supabase", "GitHub", "Git", "Vercel", "MongoDB", "Storybook"],
  },
  {
    label: "Design",
    skills: ["Figma", "Adobe XD", "Canva", "Shadcn UI"],
  },
];

export const SERVICES: Service[] = [
  {
    id: "frontend",
    icon: "HiOutlineDesktopComputer",
    title: "Frontend Engineering",
    description:
      "We craft pixel-perfect, performance-optimized user interfaces that users love to navigate. Every component is built for accessibility, responsiveness, and long-term maintainability.",
    deliverables: [
      "React & Next.js applications",
      "TypeScript-first codebases",
      "Component libraries & design systems",
      "Performance audits & optimization",
    ],
  },
  {
    id: "fullstack",
    icon: "HiOutlineServer",
    title: "Full-Stack Development",
    description:
      "End-to-end product engineering — from database schema to the last pixel of UI. We own the full delivery pipeline so you get coherent, integrated systems rather than stitched-together parts.",
    deliverables: [
      "Next.js full-stack applications",
      "REST API design & integration",
      "Supabase & MongoDB backends",
      "Authentication & authorization",
    ],
  },
  {
    id: "dashboard",
    icon: "HiOutlineChartBar",
    title: "Dashboards & Data Platforms",
    description:
      "Complex data, made intelligible. We build analytics interfaces and operational dashboards that surface insights at a glance — giving decision-makers the context they need, instantly.",
    deliverables: [
      "Real-time data visualization",
      "Interactive charts & graphs",
      "API-powered analytics dashboards",
      "Role-based access & permissions",
    ],
  },
  {
    id: "ui-ux",
    icon: "HiOutlineSparkles",
    title: "UI/UX Design",
    description:
      "Design is not decoration — it is the product. We apply systematic visual thinking to produce interfaces that communicate trust, guide user behavior, and feel premium at every interaction.",
    deliverables: [
      "Figma prototypes & wireframes",
      "Design system creation",
      "User flow mapping",
      "Interaction design & micro-animations",
    ],
  },
];
