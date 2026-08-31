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


## 5. Critical Engineering Lessons & Mistake Log (August 31, 2026)
This section documents bugs encountered and solved during the mobile rigid layout and sticky sidebar fixes. **Do not repeat these mistakes.**

1. **Viewport Zoom Reflow (Mobile)**
   - *Mistake*: Using `w-screen` and `fixed` layouts to cover the viewport. When users pinch-zoomed on iOS/Safari, the visual viewport shrank, recalculating `w-screen` (which equals `100vw`) and breaking/squishing the entire layout.
   - *Correction*: Replaced all instances of `w-screen` with `w-full`, and replaced `fixed` background wrappers with `absolute inset-0 w-full h-full`. Added `viewport` lock in Next.js `layout.tsx` (`maximumScale: 1, userScalable: false`). This prevents the layout structure from breaking upon zoom.

2. **Horizontal Overflow / Black Void on Zoom Out**
   - *Mistake*: Decorative elements (like 600px blur circles) were absolutely positioned in sections (like `ProjectsSection.tsx`) without `overflow-hidden`. This pushed the DOM layout width beyond the 390px mobile screen. When a user zoomed out, they saw half the screen as a black void.
   - *Correction*: Added `max-width: 100vw !important` and `overscroll-behavior-x: none` to `html, body`. Wrapped large decorative blurs inside `absolute inset-0 overflow-hidden pointer-events-none` containers instead of applying overflow rules directly to the parent section.

3. **Sticky Positioning Breakage (`overflow-hidden`)**
   - *Mistake*: Tried to fix horizontal overflow by adding `overflow-hidden` to `html`, `body`, or parent section wrappers. This completely disabled `position: sticky` on the Project Directory timeline.
   - *Correction*: Replaced `overflow-x-hidden` with `overflow-x-clip` in global styles. `overflow-clip` successfully hides horizontal overflow without turning the body into a block formatting scroll container, thereby preserving native `position: sticky` behavior.

4. **Flexbox Collapse to Zero (Next.js Image)**
   - *Mistake*: Removed hardcoded `min-h-[487px]` from the About section portrait and used `aspect-ratio: 4/5` with `w-full` inside a flexbox `justify-center` container. Because the parent collapsed to fit content, `w-full` calculated as 0, making the image disappear entirely on mobile.
   - *Correction*: Replaced `w-full` with explicit physical viewport widths `w-[85vw] sm:w-[390px]`. Viewport widths (`vw`) never collapse inside flex containers, guaranteeing the element has a size for the `aspect-ratio` to calculate its height against.

5. **3D Flip (rotateX) Clipping with Overlapping DOM Elements**
   - *Mistake*: Attempted to make the `ScrollStack` projects appear as a tightly packed cascading deck initially by setting `itemDistance` to a massive negative number (e.g. `-280px`). While they cascaded beautifully in 2D, hovering over a card caused its 3D `rotateX(180deg)` flip to physically slice/clip through the card layered on top of it.
   - *Correction*: Restored `itemDistance={20}`. 3D physics require physical DOM space to rotate without Z-clipping. If elements need to flip on hover, they must start spaced out.
