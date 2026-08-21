# belonging-assessment

A static site: the Individual Belonging Assessment (`assessment/`), the report
tooling (`report/`), and the shared design system (`design-system/`). Served from
GitHub Pages — there is no build step and no framework. Plain HTML and CSS only.

## Design system — read this before building any UI

`design-system/` holds the visual language extracted from Gaelin's keynote deck
and the Belonging Assessment Leadership Report. **Use it for anything new that has
a surface**: a page, a report layout, an email, a slide, a one-off graphic.

- `design-system/README.md` — the rules. Read it first.
- `design-system/tokens.css` — `--eg-*` custom properties. Load before elmore.css.
- `design-system/elmore.css` — `eg-`-prefixed component classes.
- `design-system/index.html` — living style guide; the real reference for markup.
- `design-system/tokens.json` — same tokens for non-CSS targets.

Do not introduce new colours, font sizes, radii or shadows. If something seems
missing, it is almost always a combination of existing components — check
`index.html` before adding to `elmore.css`. When a genuinely new component is
needed, build it from tokens, add it to `elmore.css` in the numbered section it
belongs to, and demo it in `index.html`.

The rules that matter most, in short: the page is cream and white is for cards;
every page opens with an eyebrow; colour exactly one word in a headline; blue is
the branded colour and there is no green in the system — where you would reach for
green, reach for blue; the belonging/ambiguity/exclusion and
critical/at-risk/building/strong colour scales are fixed and never reassigned; one
dark band per page, at the bottom.

## The React package

`packages/design-system/` is a thin React wrapper over the same `eg-` classes —
50 components, no styling of its own. It exists so Claude Design (claude.ai/design)
has real components to build with; `/design-sync` reads it. It is the one part of
this repo with a build step, and it is deliberately outside the published site:
GitHub Pages serves the static HTML and CSS only, and nothing in `assessment/`,
`report/` or `design-system/` imports it.

The CSS is the source of truth. Change `design-system/*.css` first, then bring the
React wrapper into line — a new class does **not** become a prop on its own. Adding
a component means all four of: the CSS in `elmore.css`, a demo in
`design-system/index.html`, a wrapper in `packages/design-system/src/components/`,
and a preview in `.design-sync/previews/`.

Sync state lives in `.design-sync/` (config, notes, conventions header, previews).
See `.design-sync/NOTES.md` before re-running a sync.

## Conventions

- Two-space indentation in HTML and CSS.
- Comments explain *why* a value or rule exists, not what it does. Match the
  density already in the file you are editing.
- Charts and bars are built from CSS, not a charting library.
- Every bar carries `role="img"` and an `aria-label` with the full reading — the
  percentages printed inside segments are decorative and clip when narrow.
- Never remove a focus outline. There is one focus treatment, in `elmore.css`.

## Existing pages

`assessment/index.html` predates the design system and carries its own inline
palette under different names, but the values now match the tokens — belonging is
blue in both. The mapping is at the end of `design-system/README.md`. Switching
the page over to the `--eg-*` tokens is a rename rather than a recolour at this
point, and is still worth doing on its own rather than as a side effect of other
work.

`report/email-template.html` shares that palette by hand, because email clients
cannot use custom properties. Any palette change has to be applied there too.
