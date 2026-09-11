# Cross-Cutting Principles

These are overarching principles derived from observations that should guide Antigravity's behavior across tasks.

- **CSS Layout Physics over Hacks**: Prefer native CSS behavior over force-fixes. Use w-full instead of w-screen to avoid viewport unit reflows on mobile. Use overflow-clip instead of overflow-hidden to avoid breaking sticky positioning.
- **Understand Z-Space in 3D Animations**: Do not artificially overlap elements in the DOM using negative margins if they are expected to rotate along the X or Y axis, as they will mathematically clip through each other.
- **Flexbox Dimensionality Rules**: Never rely on w-full for absolute positioned content (like <Image fill />) when inside an auto-shrinking flex container. Always provide a hard width constraint or viewport unit (w) to guarantee layout resolution.
