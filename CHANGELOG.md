a partir daqui

# Changelog

> All notable changes to this project will be documented in this file.
> The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
> and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.3.1] 2026-06-17

### Changed

- Responsiveness fix for the finished matches page (`/matchesFinalized`)
- JSON data update for the first round of games

## [1.3.0] - 2026-06-17

### Added

- New `/matchesFinalized` page to display the results of finished matches, grouped by stage.
- `FinalizedCard` component with glassmorphism design to display match results and dynamic scores.
- Premium interactive button in the `/matches` page to seamlessly navigate to the finalized matches page.

### Changed

- Filtered out `FINISHED` matches from the main schedule (`/matches`), naturally leaving only `UPCOMING` and `LIVE` matches visible.
- Refactored `FinalizedCard` to accept grouped matches (`Match[]`) instead of a flattened prop structure.

## [1.2.3] - 2026-06-12

### Added

- Integrated football-data.org API for automatic FIFA World Cup 2026 match result updates.
- Added dynamic match result endpoint using football-data.org match IDs.
- Added live match status support (`IN_PLAY`, `PAUSED`, `FINISHED`, `POSTPONED`, `CANCELLED`).

### Changed

- Match results are now retrieved dynamically instead of requiring manual updates to match data files.
- Added automatic score refresh every 60 seconds for active matches.

## [1.1.3] - 2026-06-11

### Added

- Display of the user's system timezone alongside match time (e.g. "15:00 BRT")
- Automatic match status detection based on the user's system clock

### Changed

- JSON fields `date`, `time` and `status` replaced by `matchDate` in ISO 8601 UTC format
- `Match` type in `lib/types.ts` updated to reflect the new `matchDate` field
- `MatchCard` component now computes `status`, date and time internally from `matchDate`

---

## [1.0.3] - 2026-06-10

### Fixed

- Responsiveness for `/matches`, `/stadiums` and `/teams` pages
- Line breaks and flag alignment in `MatchCard` and `StadiumCard` components

## [1.0.2] - 2026-06-10

### Changed

- Migrated hardcoded mock data from `app/teams/page.tsx` and `app/matches/page.tsx` to static JSON files under `lib/data/`
- Stadium pictures converted to `.webp` format

### Added

- `lib/data/groups.json` with all 12 groups and 48 teams
- `lib/data/matches.json` with match schedule data
- `lib/data/stadiums.json` with stadiums and host cities data
- `lib/types.ts` defining shared interfaces (`Match`, `MatchTeam`)

## [1.0.1] - 2026-06-09

### Fixed

- Dropdown menu behavior on mobile navigation bar
- `MatchCard` responsiveness for line breaks and flag alignment

### Changed

- Background updated to official FWC2026 image
- Favicon updated to official FWC2026 image

## [1.0.0] - 2026-06-08

### Added

- Initial production deployment to Vercel

---

## [0.4.0] - 2026-06-05

### Added

- Hero section and fast links for Matches and Stadiums on homepage (`/`)
- `MatchCard` component with match schedule using mock data (`/matches`)
- `StadiumCard` component with host cities and stadiums layout using mock data (`/stadiums`)

### Changed

- Groups grid moved from homepage to dedicated Teams page (`/teams`)
- Header navigation renamed "Seleções" to "Grupos e Seleções"

## [0.3.0] - 2026-06-08

### Changed

- Updated stadium card images (`/stadiums`)

## [0.2.0] - 2026-06-02

### Added

- Project documentation structure and folder organization
- Application pages routing configuration

## [0.1.0] - 2026-05-25

### Added

- `Header` and `Footer` components
- Reusable `GroupCard` component
- World Cup groups page

## [0.0.1] - 2026-05-21

### Added

- Initial project setup with Next.js 16
- Docker-first development workflow
- Tailwind CSS v4 configuration
