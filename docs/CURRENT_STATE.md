# Cinematic Portfolio - Current State & Memory Bank

**Date:** 2026-08-31
**Purpose:** This document serves as the memory bank for future agents working on this repository. It contains the exact state of the project, architectural decisions, and custom modifications made to match the reference video perfectly. Read this before making any new amendments.

## 1. Project Architecture & Stack
- **Framework:** Next.js 16 (App Router) + TypeScript
- **Styling:** Tailwind CSS v4 (`@tailwindcss/postcss`)
- **Animation & Scroll:** `framer-motion` (for DOM motion, 3D physics, scroll reveals) and `lenis` (for buttery smooth scrolling).
- **Typography:** 
  - Display: `'Bebas Neue', sans-serif`
  - Body/Utility: `'Montserrat', sans-serif`
  - Signature: `'Allura', cursive` (or similar script)

## 2. Design Language (Cinematic Palette)
- **Backgrounds:** Deep Studio Black (`#000000`, `#0E0C0A`, `#120F0C`)
- **Primary Text:** Warm off-white (`#E8DFD8`, `#F4EBE2`, `#FFFFFF`)
- **Accent/Glows:** Studio Gold & Warm Bronze (`#D4AF37`, `#8C6D4F`, `#C99E5D`, `#F7E7C4`)
- **Vibe:** High-contrast, film-noir shadows, glowing radial spotlights, and strict uppercase tracking for headers.

## 3. Core Components & Structure
The entire portfolio is rendered as a single-page scrolling narrative in `src/app/page.tsx`.
*Note: Per the owner's explicit request to strictly match the reference video, the content is currently hardcoded within the components rather than extracted from a dynamic content/ layer.*

### `HeroSection.tsx`
- Fullscreen background video LCP (`public/media/hero.mp4`).
- Video layout is strictly anchored to the right (`h-screen w-auto origin-right`) to preserve cinematic framing of the laptop/car assets.

### `AboutSection.tsx`
- Displays the enhanced portrait (`public/media/enhanced.png`).
- Profile description rewritten to emphasize elite financial rigor (CA) + advanced artificial intelligence intersection.

### `ProjectsSection.tsx` & `ScrollStack.tsx`
- Contains 7 AI/Automation projects, prioritizing Odoo, QuickBooks, and Automated MS Excel.
- Descriptions utilize bulleted lists to explicitly outline agentic capabilities.
- **Project Directory Navigation:** A right-aligned sticky timeline sidebar allows users to click and jump directly to specific projects without scrolling the whole deck. Clicks are hooked into `Lenis` (`lenisRef.current.scrollTo(triggerStart)`) for smooth native operation.
- **ScrollStack Mechanism:** The component `ScrollStack.tsx` pins cards as you scroll down.
- **3D Hover Flip:** Each project card inside the stack is built as a 3D flip card. The back face reveals the description, tech stack pills, and a "View Deployment" button (Architecture Metrics were removed to clean up space).

### `SkillsSection.tsx`
- A Bento grid displaying competencies with AI/Automation tooling front and center.

### `ExperienceSection.tsx`
- Cinematic timeline. Trailing text removed from the CA Finalist block for succinctness.

### `CertificationsSection.tsx`
- Bespoke grid for AI & Finance certifications.
- CA certificate category labeled "CA CERTIFICATES AND QUALIFICATION".
- Image paths corrected to `.jpeg` to ensure accurate modal previews.

### `ContactSection.tsx`
- Instagram handle updated to `@osamabuilds_` with custom `subText` pointing users to demo videos.
- Uses `fetch` to POST form data to Formsubmit.co.

## 4. Next Steps & Future Amendments
- If the owner requests a new project to be added, simply append it to the `projects` array in `ProjectsSection.tsx`. The `ScrollStack` math will dynamically adjust `baseScale` automatically.
- Ensure any programmatic scrolling (e.g. jumping to sections) integrates with `Lenis` rather than native `scrollIntoView` to avoid scroll hijacking conflicts.
- Maintain the exact CSS styles (gradients, blur shadows, text-shadows) to preserve the cinematic/studio lighting effect.
