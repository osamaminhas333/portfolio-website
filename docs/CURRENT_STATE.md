# Cinematic Portfolio - Current State & Memory Bank

**Date:** 2026-08-30
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
*Note: Per the owner's explicit request to strictly match the reference video ("jsi reference video mh thi wsi kr do"), the content is currently hardcoded within the components rather than extracted from a dynamic `content/` layer. Do not extract to `content/` unless explicitly instructed to revert.*

### `HeroSection.tsx`
- Fullscreen background video LCP (`public/media/hero.mp4`).
- Headline: "A CA FINALIST WHO BUILDS AGENTIC SYSTEMS".
- Spinning `watermark.png` floating in the background.

### `AboutSection.tsx`
- Displays the enhanced portrait (`public/media/enhanced.png`).
- **Technical Note:** The Next.js `<Image fill />` requires the parent container to have a strict height. The parent uses `aspect-[4/5] min-h-[487px]` to prevent the height from collapsing to 0 during rendering.
- Features dynamic 3D tilt physics (`useSpring`) and holographic spotlights based on mouse movement.
- Stat updated to "12+" Agent Harnesses.

### `ProjectsSection.tsx` & `ScrollStack.tsx`
- Contains 7 AI/Automation projects (including the new Automated MS Excel project).
- **ScrollStack Mechanism:** The component `ScrollStack.tsx` pins cards as you scroll down.
- **Dynamic Math Fix:** The original reference repo was hardcoded for exactly 4 cards. To support 7+ cards without them growing out of bounds (scale > 1.0), the math was dynamically updated:
  - `itemStackDistance={18}` (tighter stack gap).
  - `baseScale = 1 - (projects.length - 1) * 0.035` (ensures the last card is always exactly `1.0` scale).
  - `padding-bottom: 80vh;` in `ScrollStack.css` (provides a longer scrolling runway).
- **3D Hover Flip:** Each project card inside the stack is built as a 3D flip card (`[transform-style:preserve-3d]`). The front face shows the title/category, and the back face (`rotateX(180deg)`) reveals the description, tech stack pills, and metrics.

### `SkillsSection.tsx`
- A Bento grid displaying competencies.
- Added various specific skills per owner request: OpenClaw, Mirofish, Claude Mem, Obsidian, DeepSeek Harness, OMP, Grok Bot.
- The 4th card was manually updated to `"AUDIT, ASSURANCE, SUSTAINABILITY & LEASE"` and redundant pills were removed to ensure cleaner reading.

### `ExperienceSection.tsx`
- Cinematic timeline.
- Updated organizations for Sustainability Associate and Audit Associate to `"PETER & CO. CHARTERED ACCOUNTANTS"`.
- Added `"AI AUTOMATION ENGINEER"` role at the top, dated `DECEMBER 2025 - PRESENT`.
- Simplified `"CA INTER..."` to `"CA FINALIST"`.

### `CertificationsSection.tsx`
- Bespoke grid for AI & Finance certifications.
- 4 new Sustainability/IFRS certificates were added and injected into the grid data.

### `ContactSection.tsx`
- Footer section ported from the cinematic reference.
- **Backend-less Email Delivery:** Uses `fetch` to POST form data to `https://formsubmit.co/ajax/osama.minhas111@gmail.com`. This allows real email delivery while preserving the `output: 'export'` static architecture.

## 4. Next Steps & Future Amendments
- If the owner requests a new project to be added, simply append it to the `projects` array in `ProjectsSection.tsx`. The `ScrollStack` math will dynamically adjust `baseScale` automatically.
- If the owner requests a new certificate, append it to `CertificationsSection.tsx` and place the image/PDF in the `public/` directory.
- Maintain the exact CSS styles (gradients, blur shadows, text-shadows) to preserve the cinematic/studio lighting effect. Do not revert to standard flat web UI.

---
*End of Memory State.*
