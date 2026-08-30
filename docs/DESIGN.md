# Design System & Art Direction

## Architecture (Inspired by UI-UX Pro Max)

```text
+----------------------------------------------------------------------------------------+
|  TARGET: Elite 3D Portfolio - RECOMMENDED DESIGN SYSTEM                                |
+----------------------------------------------------------------------------------------+
|                                                                                        |
|  PATTERN: Scroll-Driven 3D Narrative                                                   |
|     Conversion: High-credibility, authoritative professional showcase                  |
|     Signature: The OM-01 Laptop (central 3D object)                                    |
|                                                                                        |
|  STYLE: Technical Schematic & Hard Monochrome                                          |
|     Keywords: Precision, machined, terminal, discipline, evidence                      |
|     Best For: Agentic AI Engineering & Audit / Assurance                               |
|                                                                                        |
|  COLORS (tokens.css):                                                                  |
|     --surface-primary:    #030303 (Deep Black Field)                                   |
|     --surface-secondary:  #0A0A0A (Slight elevation for rails/modals)                  |
|     --text-primary:       #EDEDED (Off-white, prevents bloom)                          |
|     --text-secondary:     #808080 (Technical grey)                                     |
|     --border-hairline:    #1F1F1F (Schematic linework)                                 |
|     --accent-gold:        #C5A059 (Used EXCLUSIVELY for CA Inter certificate)          |
|                                                                                        |
|  TYPOGRAPHY: Self-hosted local fonts                                                   |
|     Display: Geist Sans (Geometric, modern, bold)                                      |
|     Body: Inter (Neutral, invisible, highly legible)                                   |
|     Mono: Geist Mono (Ledgers, audit trails, code, credential IDs)                     |
|                                                                                        |
|  KEY EFFECTS & Vanta.js Integration:                                                   |
|     - Vanta.js will be used specifically for the CA Inter Certificate gold treatment.  |
|       A Vanta effect (e.g., Topology or HALO) tuned to the gold palette, masked        |
|       inside the card, reacting strictly to pointer coordinates.                       |
|     - Certificate rail uses framer-motion useSpring for instant, damped hover peeks.   |
|                                                                                        |
|  AVOID (Anti-patterns):                                                                |
|     Cream + Serif + Terracotta | Neon green + near-black | Any warm colors except gold |
|                                                                                        |
+----------------------------------------------------------------------------------------+
```

## Vanta.js Application Strategy
Per the owner's chat instruction to pull from Vanta, we will deploy it strategically to satisfy the `AGENTS.md` mandate for the CA Inter certificate's "gold treatment". 
Instead of a generic CSS sheen, we will mount a highly customized, low-opacity Vanta WebGL instance (likely `vanta.fog` or `vanta.halo` tuned for metallic warmth) *inside* the CA Inter card. It will be paused by default and scrubbed/driven by the mouse coordinates during the hover-peek interaction. This yields a stunning "struck metal" / "warm inner glow" effect that is unique on the page without violating the strict "quiet and disciplined" rules for the rest of the site.

## ASCII Layout Wireframe

```text
[ Desktop View - Ultra Wide ]

+-----------------------------------------------------------+
| [ HERO VIDEO: hero.mp4 looping muted full bleed ]         |
|                                                           |
|                                                           |
|       MOHAMMAD OSAMA MINHAS                               |
|       AI Agent Engineer · LLM Orchestration...            |
|       CA Finalist (ICAP) · Audit, Assurance...            |
|                                                           |
| [ Scroll initiates video fade -> Laptop lid opens ]       |
+-----------------------------------------------------------+
|                                                           |
|  [ CONTENT GRID - Left Aligned ]                          |
|                                                           |
|  01 PROFILE                                               |
|  AI agent engineer and...            [ LAPTOP OM-01 ]     |
|                                      [ Hovering in ]      |
|                                      [ negative space ]   |
|  02 PROJECTS                         [ driven by scroll ] |
|  - Autonomous Agent                  [ posing shifts ]    |
|  - ContentOS                                              |
|                                                           |
|  03 CERTIFICATIONS                                        |
|  [ Content Text ]                                [ RAIL ] |
|                                                  [ CA ]*- | <- Vanta Gold
|                                                  [ AI ]   |
|                                                  [ AI ]   |
|                                                  [ AI ]   |
+-----------------------------------------------------------+
```
