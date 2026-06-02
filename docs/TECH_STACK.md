# Technical Stack - FWC2026

> version 0.1.0-planning Last Updated: 2026-06-02

## Core Framework

| Layer      | Technology              | Rationale |
| ---------- | ----------------------- | --------- |
| Framework  | Next.js 16 (App Router) |
| Language   | TypeScript              |
| Deployment | Vercel                  |

## Frontend

| Concern          | Technology                   | Notes                                                                  |
| ---------------- | ---------------------------- | ---------------------------------------------------------------------- |
| UI Components    | **Custom** (design system)   | Built on top of native React components and Tailwind utilities         |
| Styling          | **Tailwind CSS v4**          | Utility-first styling with design tokens defined in `DESIGN_SYSTEM.md` |
| Icons            | **Lucide React**             | Lightweight, consistent icon set                                       |
| State Management | **React Context + useState** | Sufficient for MVP scope — no external library                         |
| 3D Globe         | **react-globe.gl**           | Performance should be validated on low-end mobile devices.             |
| Toasts           | **Sonner**                   | Next.js-compatible, minimal, accessible                                |
| Monitoring       | **Vercel Analytics**         |

## Development Tooling

| Tool                    | Purpose                                                   |
| ----------------------- | --------------------------------------------------------- |
| **npm**                 | Package manager                                           |
| **ESLint**              | Next.js recommended config                                |
| **Prettier**            | Code formatting                                           |
| **Husky + lint-staged** | Pre-commit hooks                                          |
| **GitHub Actions**      | CI: lint + type-check + build validation on pull requests |
| **Vercel**              | CD: auto-deploy on merge to `main`                        |

---

## Project Structure

```
fwc2026/
├── app/
│   ├── fonts/                  # Local fonts
│   ├── layout/                 # Layout components
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   ├── matches/
│   │   ├── page.tsx            # Match schedule
│   ├── stadiums/
│   │   └── page.tsx            # Stadiums page -> Future feature with globe visualization
│   └── teams/
│       └── page.tsx            # Teams page -> Future feature with globe visualization
│   ├── favicon.ico
│   ├── global.css
│   ├── layout.tsx
│   └── page.tsx                # Homepage
├── components/
│   ├── GroupCard.tsx
│   ├── globe/
│   │   └── Globe.tsx           # Globe 3D -> Future Feature
├── docs/
├── public/
├── next.config.ts
└── tsconfig.json
```
