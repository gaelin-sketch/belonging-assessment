# design-sync notes — belonging-assessment

- **The CSS is the source of truth, not the React.** `design-system/tokens.css`
  and `design-system/elmore.css` are hand-authored and serve the live GitHub
  Pages site. `packages/design-system` is a thin React wrapper over those same
  `eg-` classes, built only so Claude Design has real components to render.
  Change the CSS first; the components follow.
- `packages/design-system/scripts/build-css.mjs` concatenates tokens.css then
  elmore.css into `dist/design-system.css`, in that order (tokens must come
  first), and prepends the Google Fonts `@import` for Figtree + IBM Plex Sans.
  That is why `cfg.cssEntry` points at a build artifact rather than at a
  checked-in stylesheet.
- `cfg.provider` is `Page`. It paints the cream ground (`--eg-paper`) and sets
  the body font. Without it every preview renders on white in the system font,
  which looks subtly wrong rather than obviously broken — worth checking first
  if previews look off.
- The repo root has no `package.json` and the published site has no build step.
  Run the converter from the repo root pointing `--entry` and `--node-modules`
  into `packages/design-system`.
- Fonts load from Google Fonts via `@import`, so `[FONT_REMOTE]` is expected
  and correct here. There are no self-hosted font files to ship.

## Known render warns

These are expected on a clean run. A warn NOT in this list is new and worth reading.

- `[FONT_REMOTE]` for "IBM Plex Sans", "Figtree", "Archivo", "IBM Plex Mono" —
  the fonts load from Google Fonts via an `@import` in the built stylesheet, by
  design. There are no self-hosted font files to ship, so `[FONT_MISSING]` is
  correctly absent.

Fixed rather than triaged, recorded so the overrides aren't mistaken for
arbitrary: `Heading`, `Likert`, `Score` and `TitleBlock` each flagged
`[GRID_OVERFLOW] wide` and carry `cardMode: "column"` in `cfg.overrides`. Their
stories are genuinely full-width compositions; one per row is the correct
presentation, not a workaround.

## Re-sync risks

- The component API is hand-written, so a new `eg-` class in `elmore.css` does
  NOT automatically become a React prop. When the CSS gains a component or a
  modifier, add it to `packages/design-system/src/components/` or the two
  drift apart silently.
- `design-system/index.html` (the living style guide) is maintained separately
  from the React previews. Both demo the same classes; neither generates the
  other. A component added in one should be added in the other.
