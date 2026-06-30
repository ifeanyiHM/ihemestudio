# Iheme Studio — Portfolio Website

A production-ready, enterprise-quality portfolio website built for **Iheme Studio**, a software engineering organization based in Lagos, Nigeria.

## ✦ Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router, Turbopack default) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Icons | React Icons |
| Animations | CSS + Custom hooks (no heavy deps) |
| Fonts | Syne (display) · Inter (body) · JetBrains Mono |
| Deployment | Vercel (recommended) |

---

## 🗂 Project Structure

```
iheme-studio/
├── src/
│   ├── app/                        # Next.js App Router pages
│   │   ├── layout.tsx              # Root layout (fonts, metadata, navbar, footer)
│   │   ├── page.tsx                # Homepage
│   │   ├── loading.tsx             # Global loading skeleton
│   │   ├── error.tsx               # Global error boundary
│   │   ├── not-found.tsx           # 404 page
│   │   ├── sitemap.ts              # Auto-generated sitemap.xml
│   │   ├── robots.ts               # Auto-generated robots.txt
│   │   ├── about/page.tsx          # About page
│   │   ├── services/page.tsx       # Services page
│   │   ├── projects/page.tsx       # Projects page
│   │   └── contact/page.tsx        # Contact page
│   │
│   ├── components/
│   │   ├── animations/             # Scroll & interaction animations
│   │   │   ├── FadeIn.tsx          # Scroll-triggered fade-up wrapper
│   │   │   ├── CountUp.tsx         # Animated number counter
│   │   │   ├── CursorGlow.tsx      # Cursor-following radial glow
│   │   │   └── index.ts
│   │   ├── layout/                 # Site-wide chrome
│   │   │   ├── Navbar.tsx          # Sticky nav + mobile menu
│   │   │   ├── Footer.tsx          # Footer with socials
│   │   │   └── index.ts
│   │   ├── sections/               # Page sections (one per concern)
│   │   │   ├── Hero.tsx            # Homepage hero with particle canvas
│   │   │   ├── StatsStrip.tsx      # Stats grid + tech marquee
│   │   │   ├── FeaturedProjects.tsx
│   │   │   ├── ServicesOverview.tsx
│   │   │   ├── AboutTeaser.tsx
│   │   │   ├── CTASection.tsx
│   │   │   ├── ContactForm.tsx     # Client-side contact form
│   │   │   └── index.ts
│   │   └── ui/                     # Primitive UI components
│   │       ├── index.tsx           # Button, Tag, SectionLabel, Card, Divider
│   │       └── JsonLd.tsx          # Structured data (Schema.org)
│   │
│   ├── lib/
│   │   ├── data.ts                 # All portfolio content (single source of truth)
│   │   ├── utils.ts                # cn(), slugify()
│   │   └── hooks/
│   │       ├── useInView.ts        # IntersectionObserver hook
│   │       ├── useScrollLock.ts    # Body scroll lock
│   │       └── index.ts
│   │
│   ├── styles/
│   │   └── globals.css             # Tailwind base + custom utilities
│   │
│   └── types/
│       └── index.ts                # TypeScript interfaces
│
├── public/                         # Static assets (add og-image.png, favicon, etc.)
├── tailwind.config.ts              # Full design system (colors, fonts, animations)
├── next.config.ts
├── tsconfig.json
├── .env.example
└── README.md
```

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
# or
pnpm install
```

### 2. Configure environment variables

```bash
cp .env.example .env.local
# Edit .env.local with your values
```

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

### 4. Build for production

```bash
npm run build
npm run start
```

---

## 🎨 Design System

### Color Palette

| Token | Value | Usage |
|---|---|---|
| `ink` | `#08090A` | Page background |
| `ink-800` | `#141618` | Card backgrounds |
| `teal` | `#00D4AA` | Primary accent, CTAs |
| `teal-glow` | `#00FFD0` | Hover state accent |
| `slate` | `#A0A8B4` | Body text |
| `slate-light` | `#C8CDD6` | Slightly elevated text |
| `white` | `#FFFFFF` | Headings |

### Typography

| Role | Font | Weight |
|---|---|---|
| Display headings | Syne | 700, 800 |
| Body text | Inter | 300–500 |
| Monospace labels | JetBrains Mono | 400, 500 |

### Spacing

- Section vertical padding: `7rem` (`py-section`)
- Card padding: `2rem` / `2.5rem`
- Max content width: `80rem` (`max-w-7xl`)

---

## 📄 Pages

| Route | Description |
|---|---|
| `/` | Homepage — hero, stats, featured projects, services, about teaser, CTA |
| `/about` | Studio story, values, skills, tech stack, resume download |
| `/services` | Service offerings and 4-step process |
| `/projects` | All projects (featured + archive table) |
| `/contact` | Contact form with service/budget selectors |

---

## 🔧 Customisation

All content lives in **`src/lib/data.ts`** — projects, services, stats, nav items, and social links. Update that file to personalise the site without touching any UI code.

To add a new project, push to `FEATURED_PROJECTS` or `OTHER_PROJECTS` in `data.ts`:

```ts
{
  id: "my-project",
  title: "My Project",
  tagline: "One-line description",
  description: "Full paragraph description",
  category: "fullstack",          // "fullstack" | "frontend" | "dashboard" | "platform"
  tags: ["Next.js", "TypeScript"],
  liveUrl: "https://example.com",
  codeUrl: "https://github.com/...",
  featured: true,
  year: 2025,
  impact: "Key outcome or metric",
}
```

---

## 📬 Contact Form

The form currently runs a simulated delay. To wire up a real backend:

**Option A — Resend (recommended)**
1. `npm install resend`
2. Create `src/app/api/contact/route.ts`
3. Use the Resend SDK to send from your domain email
4. Point the `ContactForm` `fetch` call to `/api/contact`

**Option B — Formspree / Web3Forms**
Replace the `handleSubmit` logic in `ContactForm.tsx` with a `fetch` to your form endpoint.

---

## 🌐 Deployment

Deploy on [Vercel](https://vercel.com) in one click:

```bash
npx vercel
```

Before going live:
- [ ] Add `og-image.png` (1200×630) to `/public`
- [ ] Add `favicon.ico` and `apple-touch-icon.png` to `/public`
- [ ] Set `NEXT_PUBLIC_SITE_URL` in Vercel environment variables
- [ ] Update `metadataBase` in `layout.tsx` with your real domain
- [ ] Wire up the contact form to a real email service

---

## ♿ Accessibility

- Semantic HTML throughout (`<header>`, `<nav>`, `<main>`, `<footer>`, `<article>`, `<section>`)
- All interactive elements have visible focus rings
- `aria-label` on icon-only buttons
- `prefers-reduced-motion` respected in `globals.css`
- Colour contrast meets WCAG AA on all text/background combinations

---

## ⚡ Performance

- Fonts loaded with `display=swap`
- Images use Next.js `<Image>` with AVIF/WebP formats
- `removeConsole` enabled in production build
- Tailwind purges unused CSS at build time
- No heavy animation library — all animations use native CSS transitions and `requestAnimationFrame`

---

MIT License · Built with ♥ by Iheme Studio

---

## 🔄 Next.js 16 Upgrade Notes

This project targets **Next.js 16.2.9** (latest stable as of June 2026). Key changes from v14:

| Area | Change |
|---|---|
| **Bundler** | Turbopack is now the default — no `--turbo` flag needed |
| **React** | Upgraded to React 19.2 — React Compiler enabled by default |
| **Fonts** | `next/font/google` replaces manual `<link>` tags — zero layout shift |
| **Images** | `images.domains` removed — use `remotePatterns` in `next.config.ts` |
| **Caching** | Fully dynamic by default — use `"use cache"` directive to opt in |
| **ESLint** | Flat config (`eslint.config.mjs`) replaces `.eslintrc.json` |
| **Tailwind** | v4 — design tokens live in `@theme {}` inside `globals.css` |
| **TypeScript** | Target `ES2022`, React Compiler plugin added to `tsconfig.json` |
| **Node.js** | Minimum version is **Node.js 20** |

### Running the codemod (for existing Next.js 14/15 projects)
```bash
npx @next/codemod@canary upgrade latest
```
