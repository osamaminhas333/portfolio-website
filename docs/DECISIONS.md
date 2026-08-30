# Project Decisions Log

Running log: date · decision · reason

## 2026-08-28
- **Decision:** Categorize all Sustainability certificates under `CA & Finance > Sustainability & Reporting`.
- **Reason:** Explicitly instructed by owner, overriding the `AGENTS.md` rule that placed them under AI. Priority difference for CA Inter needs to be highlighted, so nesting Sustainability there allows the CA Inter cert to sit at the top of that specific category rail group.

- **Decision:** Pinned CA Inter certificate as the highlighted item in `CA & Finance`.
- **Reason:** Per `AGENTS.md` §5.4 and user request. It requires a specific gold/metallic treatment.

- **Decision:** Contact details integrated from chat rather than CV.
- **Reason:** Owner provided direct links for Instagram, LinkedIn, and WhatsApp in chat to be placed natively on the site. Added these to `CV-SOURCE.md`.

- **Decision:** Renamed all source assets to kebab-case and moved originals to `_source/`.
- **Reason:** Step 3 of the Intake Protocol from `AGENTS.md` §4.2. Spaces in filenames break URLs in public folder.

## 2026-08-30
- **Decision:** Kept content hardcoded in React components instead of using a `content/` layer.
- **Reason:** Explicitly requested by the owner to perfectly replicate the reference video ("jsi reference video mh thi wsi kr do").

- **Decision:** Modified `ScrollStack` mathematics to support arbitrary numbers of items dynamically (`baseScale = 1 - (projects.length - 1) * itemScale`).
- **Reason:** The original reference repo hardcoded math for exactly 4 projects. Upon adding a 5th and 6th project, they scaled beyond `1.0` and broke out of the deck layout.

- **Decision:** Swapped project cards to be 3D Hover Flip cards (`transform-style: preserve-3d` with `rotateX(180deg)`).
- **Reason:** The owner requested the projects flip exactly like they did in the older version of their portfolio while retaining the cinematic scrolling stack layout.

- **Decision:** Enforced `min-h-[487px]` on the portrait image wrapper in `AboutSection.tsx`.
- **Reason:** Next.js `<Image fill />` requires parent boundaries. Without this, the container resolved to 0 height in Tailwind v4 and the image disappeared.
