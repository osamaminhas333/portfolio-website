# Antigravity Skill Observations

### Observation 1: Mobile Zoom & Tailwind Viewport Units
**Date:** 2026-08-31
**Context:** Creating a rigid mobile layout that doesn't reflow text when a user pinches to zoom on iOS.
**Observation:** Using `w-screen` equates to visual viewport width (`100vw`). On mobile Safari, zooming shrinks the visual viewport, causing the layout to recalculate and squash. Using `w-full` on `body` children prevents this because it anchors to the layout block, keeping the layout rigid upon zoom.
**Status:** OPEN

### Observation 2: CSS `overflow-hidden` Breaking `position: sticky`
**Date:** 2026-08-31
**Context:** Trying to prevent horizontal overflow caused by large decorative elements.
**Observation:** Applying `overflow-hidden` or `overflow-x-hidden` to `body` or a parent wrapper creates a block formatting context that completely disables `position: sticky` for descendant elements. Using `overflow-clip` achieves the same horizontal overflow prevention without breaking sticky positioning.
**Status:** OPEN

### Observation 3: Flexbox Collapsing Next.js Image
**Date:** 2026-08-31
**Context:** Ensuring a portrait image (Image fill inside a canvas) maintains a 4/5 aspect ratio without hardcoding pixel heights.
**Observation:** In a flex parent, a child container with `w-full` and `aspect-ratio: 4/5` will collapse to 0x0 because the parent shrinks to fit the child's missing content. Using explicit viewport units (e.g., `w-[85vw]`) on the child prevents this, as viewport units are immune to flex collapse, allowing the aspect ratio to correctly resolve a height.
**Status:** OPEN

### Observation 4: 3D Flip (rotateX) Clipping with Overlapping DOM Layouts
**Date:** 2026-08-31
**Context:** Attempting to make 3D flip cards cascade/overlap tightly in their initial static DOM flow.
**Observation:** Applying negative margins to make cards visually overlap creates Z-clipping when `rotateX(180deg)` is applied on hover. The card physically sweeps through the Z-axis, slicing through the adjacent overlapping card. Elements requiring 3D rotations must have adequate static layout spacing to clear the rotation radius.
**Status:** OPEN
