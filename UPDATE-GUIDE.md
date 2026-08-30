# Updating the Portfolio

This repository is built with Next.js, React Three Fiber, GSAP, and Tailwind. Content is strictly separated from the presentation layer.

## How to edit content

Never edit a `.tsx` file to change text.
1. Open `docs/CV-SOURCE.md` and make your changes there first. This is the master record.
2. Open `content/` and update the relevant `.ts` file (e.g., `projects.ts`, `experience.ts`).
3. The site will automatically reflect the new data.

## How to add a new certificate

1. Drop the raw image/PDF into the root folder.
2. Open `docs/CV-SOURCE.md` and add it to the list.
3. Rename the file to `kebab-case.png` (or `.jpeg` / `.pdf`).
4. Move it into `public/documents/certificates/ai/` or `public/documents/certificates/ca/`.
5. Open `content/certifications.ts` and add a new entry. Set `isGold: true` ONLY if it is the primary CA Inter certificate.

## Architecture Rules

- **Design Tokens**: All colors and fonts are in `src/styles/tokens.css`.
- **3D Logic**: All WebGL/Three.js code is isolated in `src/three/`. The laptop is procedural.
- **Scroll Sync**: `src/components/ui/SmoothScroll.tsx` binds Lenis to GSAP ScrollTrigger.
