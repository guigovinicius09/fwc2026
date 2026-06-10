# Changelog

> All notable changes to this project will be documented in this file.

## [Unreleased]

### Added - 2026-05-21

- Initial project setup with Next.js 16
- Docker First development workflow
- Tailwind CSS v4 configuration

### Added - 2026-05-25

- Header component
- Footer component
- Reusable Group Card component
- World Cup groups page

### Added - 2026-06-02

- Project documentation structure
- Documentation preparation
- Documentation folder organization
- Application pages routing configuration

### Added/Changed - 2026-06-05

- **Homepage (`/`) Redesign:** Added a new Hero section and Fast Links for Matches and Stadiums.
- **Teams Page (`/teams`):** Migrated the Groups grid from the homepage to this dedicated page.
- **Matches Page (`/matches`):** Created `MatchCard` component and implemented the match schedule with mock data.
- **Stadiums Page (`/stadiums`):** Created `StadiumCard` component and implemented the host cities/stadiums layout with mock data.
- **Navigation:** Updated Header to rename the "Seleções" link to "Grupos e Seleções".

### Added/Changed - 2026-06-08

- **Stadiums Page (`/stadiums`):** Updated stadium's card images.

## [Released] v0.1.0

### Initial deploy - 2026-06-08

- Vercel deployment

### Changes - 2026-06-09

#### UI Fix - v0.1.1

- Fixed dropdown menu for mobile menu bar.
- Fixed matchCard.tsx responsiveness for line breaks and flag alignment.
- Changed background to official FWC2026 image
- Changed favicon to official FWC2026 image

## [1.2.0] - 2026-06-10

### Refactor

- Migrated hardcoded mock data from `app/teams/page.tsx` and `app/matches/page.tsx` to static JSON files under `lib/data/`
- Created `lib/data/groups.json` with all 12 groups and 48 teams
- Created `lib/data/matches.json` with match schedule data
- Created `lib/data/stadiums.json` with stadiums and host cities data
- Created `lib/types.ts` defining shared interfaces (`Match`, `MatchTeam`)
- Pages now import data directly via Server Components, removing inline `const` arrays
