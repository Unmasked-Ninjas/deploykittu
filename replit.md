# Our Love Story

A scroll-driven interactive love story website with Hello Kitty kawaii aesthetic, built for a long-distance couple (Nepal ↔ Sydney). Features 8 animated sections including a pigeon journey, virtual bouquet maker, and cinematic finale.

## Run & Operate

- `pnpm --filter @workspace/love-story run dev` — run the frontend (port assigned by workflow)
- `pnpm --filter @workspace/api-server run dev` — run the API server
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React + Vite + Tailwind CSS v4
- Animations: Framer Motion, GSAP + ScrollTrigger, Lenis smooth scroll
- Fonts: Nunito, Dancing Script, Pacifico (Google Fonts)
- No backend needed — purely presentational

## Where things live

- `artifacts/love-story/src/pages/Home.tsx` — assembles all 8 sections
- `artifacts/love-story/src/components/` — one file per section + FloatingParticles
- `artifacts/love-story/src/index.css` — kawaii theme tokens + keyframe animations
- `artifacts/love-story/src/App.tsx` — Lenis + GSAP ScrollTrigger integration

## Architecture decisions

- **Lenis + GSAP sync**: `LenisSync` is a dedicated null-rendering component that uses `useEffect` (not `useGSAP`) to sync Lenis RAF with GSAP's ticker. Using `useGSAP` with a dependency array caused a hooks-count violation due to its internal conditional layout effect.
- **No backend**: All state (messages, bouquet) is local React state. No API or DB needed.
- **CSS-only visuals**: All illustrations (cat face, pigeon, mountains, flowers, Opera House) are built with CSS shapes and inline SVG — no image dependencies.

## Product

8 interactive sections:
1. Loading screen — Hello Kitty cat face with animated loading bar
2. Scroll bouquet — GSAP ScrollTrigger pinned bouquet assembly
3. Parallax polaroids — cinematic memory cards with Framer Motion
4. Photo album — 3D page-flip scrapbook
5. Message wall — interactive sticky notes mailbox
6. Pigeon journey — 500vh horizontal scroll Nepal → Sydney
7. Bouquet maker — interactive flower shop
8. Our Forever — emotional finale with lanterns and starfield

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
