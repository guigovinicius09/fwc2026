<!-- BEGIN:nextjs-agent-rules -->
# FIFA World Cup 2026 — Project Context for AI Agents

## Overview

This project is a frontend web application built with Next.js, inspired by a Figma community design. The goal is to create an interactive and visual experience around the FIFA World Cup 2026, covering groups, host cities, stadiums, and match results.

The project is being developed hands-on by the developer with AI assistance — not automated generation. Architecture decisions are intentional and educational, with a focus on building real production experience.

---

## Stack

- **Framework:** Next.js 16 with TypeScript
- **Styling:** Tailwind CSS
- **Container:** Docker (Docker First approach)
- **Dev Environment:** WSL2 (Ubuntu) + Docker Desktop on Windows
- **Future Deploy:** Google Cloud Platform (Cloud Run)
- **Observability:** Google Cloud Monitoring + Cloud Logging (planned)

---

## Project Goals

1. **Learning objective:** Ship a real project to production during the 2026 World Cup to gain hands-on experience with Docker, GCP, observability, and CI/CD for future job interviews.
2. **Design source:** Figma community project adapted to Next.js/React.
3. **Scope:** Primarily frontend, no complex backend — data updates done manually via production environment.

---

## Features Planned

### 1. Group Stage Cards
- List all 12 World Cup groups
- Each group rendered as a reusable `Card` component
- Props used to pass team names, flags, and group identifiers
- Component reuse is a core design principle here

### 2. Host Cities — Interactive Globe
- Use `react-globe.gl` to render an interactive 3D globe
- Mark the 11 host cities across USA, Canada, and Mexico
- On interaction: display city name, stadium, and key specs
- All 48 participating countries are highlighted on the globe using each country's flag colors (primary and secondary)
- As teams are eliminated from the group stage, their country polygon transitions to grayscale (`filter: grayscale(100%)`) with a smooth CSS transition
- Countries not participating in the Cup are rendered with a neutral/transparent color
- The champion country receives a special highlight (glow or animation)
- Country status is managed via `lib/data/teams.json` with a `status` field: `"active"` | `"eliminated"` | `"champion"`
- Color logic is applied via `polygonCapColor` callback on the `<Globe>` component using `react-globe.gl` + GeoJSON data
- Data updates (eliminations, results) are done manually by editing the JSON and redeploying — no real-time API

### 3. Stadiums
- List all official 2026 stadiums
- Show: name, city, capacity, and relevant specs

### 4. Match Schedule & Results
- Full list of all matches with dates and times
- After each match, results are manually updated via the production environment
- No real-time API — static or manually updated data

---

## Folder Structure

```
app/
  layout/
    Header.tsx
    Footer.tsx
    Hero.tsx
  components/        ← reusable components (Card, GlobeMap, MatchRow, etc.)
  lib/               ← utility functions and helpers
  types/             ← TypeScript interfaces and types
  page.tsx
  layout.tsx
  globals.css
public/
  images/            ← SVGs, logos, flags, and static assets
  fonts/             ← local fonts (FIFA 26, FWC2026 Expanded)
```

---

## Typography

| Variable | Font | Source |
|---|---|---|
| `--font-noto` | Noto Sans | Google Fonts |
| `--font-fifa26` | FIFA 26 | Local (`app/fonts/fifa-26.ttf`) |
| `--font-fwc2026` | FWC2026 Expanded | Local (`app/fonts/FWC2026_expanded.ttf`) |

---

## Docker Setup

### Development (`Dockerfile`)
```dockerfile
FROM node:22
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev"]
```

### docker-compose.yml
```yaml
services:
  next-app:
    build: .
    container_name: next16-app
    ports:
      - "3000:3000"
    volumes:
      - .:/app
      - /app/node_modules
      - /app/.next
    environment:
      NODE_ENV: development
      WATCHPACK_POLLING: "true"
    stdin_open: true
    tty: true
    restart: unless-stopped
    command: npm run dev
```

### Production (`Dockerfile.prod`)
Multi-stage build with `output: standalone` — used for GCP Cloud Run deployment.

---

## Key Commands

```bash
# Start development environment
docker-compose up --build

# Stop containers
docker-compose down

# Rebuild without cache
docker-compose build --no-cache

# View logs
docker-compose logs -f
```

---

## Conventions for AI Agents

- **Language:** Code in English; comments and commit messages can be in Portuguese (pt-BR)
- **Components:** Functional components with TypeScript props interface defined above the component
- **Styling:** Tailwind CSS utility classes only — no inline styles, no CSS modules
- **Images:** Always use `next/image` (`<Image>`) instead of native `<img>`
- **SVG backgrounds:** Use `relative/absolute` + `z-10` pattern for content layered over SVG backgrounds
- **Local fonts:** Defined in `layout.tsx` via `next/font/local`, exposed as CSS variables
- **File naming:** PascalCase for components (`GroupCard.tsx`), kebab-case for utilities (`get-matches.ts`)
- **Do not** generate full pages automatically — suggest code for the developer to write and understand
<!-- END:nextjs-agent-rules -->
