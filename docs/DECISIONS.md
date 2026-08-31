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

- **Decision:** Integrated Formsubmit.co API in `ContactSection.tsx`.
- **Reason:** To enable direct email delivery to `osama.minhas111@gmail.com` without needing a backend server or complex third-party SDKs, keeping the static export (`output: 'export'`) constraint intact.

- **Decision:** Added 7th project ("Automated MS Excel Office Work") and dynamically adjusted the `ScrollStack` component to handle arbitrary array lengths.
- **Reason:** Added per user request. The prior hardcoded math was removed so adding new projects naturally scales without breaking the 3D flip deck.

- **Decision:** Updated various skills and experience titles (e.g. CA Finalist, Mirofish, Claude Mem, Obsidian).
- **Reason:** User requested specific additions to perfectly align the portfolio with their most recent tooling and credentials.

## 2026-08-31
- **Decision:** Switched Hero section background video sizing back to \h-screen w-auto max-w-none origin-right\.
- **Reason:** To preserve the original cinematic framing (e.g. keeping the laptop/car fully in view on the right side), prioritizing artistic layout over strict text non-overlapping on extreme zoom.

- **Decision:** Rewrote Project descriptions to emphasize Agentic Workflows (Odoo, QuickBooks, Excel) using bulleted lists, and prioritized them at the top of the deck.
- **Reason:** To explicitly frame the portfolio around elite AI Agent Engineering and Automation capabilities.

- **Decision:** Removed 'Architecture Metrics' from Project cards and added a sticky right-side 'Project Directory' timeline navigation.
- **Reason:** Cleaned up card space for 'View Deployment' tutorial videos, and provided users a way to instantly jump to a specific project without scrolling the entire deck.

- **Decision:** Hooked the new sidebar navigation clicks directly into the \Lenis\ instance inside \ScrollStack\.
- **Reason:** Native \scrollIntoView()\ was being blocked by Lenis's smooth scrolling loop. Using \lenis.scrollTo()\ ensures smooth snapping directly to the card's trigger position.

- **Decision:** Fixed CA Certificate Image Paths from \.png\ to \.jpeg\.
- **Reason:** The certificates were resolving as black/blank in the modal due to incorrect hardcoded extensions.
