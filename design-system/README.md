# The Elmore Group — Design System

Tokens and components extracted from two source documents:

- **Be The Difference** — the keynote deck
- **Belonging Assessment Leadership Report** — the client deliverable

Every colour, size and shape below was sampled from those files. Nothing here was
invented to fill a gap in a palette.

```
design-system/
├── tokens.css     Design tokens as CSS custom properties. Load first.
├── elmore.css     Component layer built on the tokens. Load second.
├── tokens.json    The same tokens, machine-readable, for non-CSS targets.
├── index.html     Living style guide. Open it — it is the real documentation.
└── README.md      This file: the rules, and how to drive it from Claude Code.
```

---

## Use it

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,400;0,500;0,600;0,700;0,800;1,700;1,800&family=IBM+Plex+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/design-system/tokens.css">
<link rel="stylesheet" href="/design-system/elmore.css">

<body class="eg-page">
  <main class="eg-shell">…</main>
</body>
```

`tokens.css` sets no styles of its own — only `--eg-*` variables — so it is safe to
drop into a page that already has CSS. `elmore.css` includes a small reset and
styles `.eg-page`; everything else is opt-in via `eg-` classes.

---

## The seven rules

These are what actually make new work look like it came from the same studio.

**1. The page is cream, not white.** `--eg-paper` (`#FBFAF6`) is the single
most-used value in both documents. White is reserved for cards. That is the whole
reason a card reads as lifted without a heavy shadow.

**2. Every page opens with an eyebrow.** A short dash, a gap, wide-tracked caps.
It is the strongest single signal of the brand and it costs one line of markup.

**3. Colour one word.** The headline move in both documents is a navy sentence
with exactly one word in gold, orange or blue. Colour a phrase and it stops
working. The one exception is the word run (`.eg-wordrun`) — at most once per page.

**4. The two data scales are fixed.** Belonging → blue, ambiguity → gold,
exclusion → orange. Critical → orange, at-risk → gold, building → blue, strong →
deep blue. Never reassign them per chart. This is why forty pages of different
charts read as one document.

**5. Numbers are the argument.** The biggest thing on a page should be the number
the page is about. Figures are always tabular (`font-variant-numeric: tabular-nums`)
so columns line up.

**6. Nothing has a square corner.** Rounded rectangles come straight out of the
logo mark. Buttons and chips are full pills; cards are 12–16px; the decorative
blobs are the mark broken apart.

**7. One dark band per page, at the bottom.** `.eg-field` carries the sentence you
most want remembered. Two of them on a page and neither lands.

---

## Type

| Token | Job |
|---|---|
| `--eg-t-hero` | Cover, statement slide |
| `--eg-t-display` | Deck headline |
| `--eg-t-title` | Report page title |
| `--eg-t-section` | Card or section heading |
| `--eg-t-sub` | Sub-head, pull quote |
| `--eg-t-lead` | Intro paragraph |
| `--eg-t-body` | Running text |
| `--eg-t-small` | Card body, table cells |
| `--eg-t-micro` | Labels, legends, footnotes |
| `--eg-t-figure-*` | Numerals — their own scale |

Display type is set in **Figtree**. The source files use a licensed Gilroy-class
geometric grotesque (single-storey `g`, double-storey `a`); Figtree is the closest
freely-loadable stand-in, and it is what this system ships. If the licensed face is
available, swap the first entry in `--eg-font-display` and nothing else changes.
Body type is **IBM Plex Sans**, which is what the report's running text already uses.

Display never drops below weight 600. Body never goes above 700.

---

## Component map

Open `index.html` to see all of these rendered. Grouped by what they came from:

| Class | Source | What it is |
|---|---|---|
| `.eg-eyebrow` | every page | Dash + wide-tracked caps kicker |
| `.eg-titleblock` + `.eg-ghost` | report page heads | Translucent echo behind the title |
| `.eg-card`, `.eg-card--rail` | throughout | White container; optional colour rail |
| `.eg-tonecard` | "What stands out" | Positive / negative / interesting three-up |
| `.eg-panel` | supporting detail | Recessed cream |
| `.eg-field`, `.eg-statband` | page footers | Navy band; figure + reading of it |
| `.eg-stat` | "The research is clear" | One coloured number + one line |
| `.eg-score` + `.eg-meter` + `.eg-scalekey` | Belonging Index | Score, track, four bands |
| `.eg-tiers` / `.eg-tier` | "Four stages of the index" | Tier cards, current one badged |
| `.eg-chip` | throughout | Tier pills |
| `.eg-bar` / `.eg-barrow` | belonging by level | Stacked three-state bar |
| `.eg-rated` | "By identifiers" | Label + mini bar + value |
| `.eg-barbell` | Leaders vs. those they lead | Two points and the gap |
| `.eg-legend` | every chart | Swatch + caps label |
| `.eg-table` | Core metrics | Navy header, hairline body |
| `.eg-insight` | "What this means" | Numbered finding in a tinted panel |
| `.eg-steps` / `.eg-step` | "Strategic next steps" | Timeline, split into owns / helps |
| `.eg-toc` | section dividers | Dotted-leader contents rows |
| `.eg-quote`, `.eg-underscore` | pull quotes | Rail + italic display + gold underscore |
| `.eg-divider` | section pages | Colour rail, numeral, contents |
| `.eg-footer` | every page | Mark, confidentiality line, folio |
| `.eg-blobs` | page corners | The logo mark broken apart |
| `.eg-slide`, `.eg-statement` | the deck | 16:9 slide; C.A.R.E. statement card |
| `.eg-btn`, `.eg-likert`, `.eg-input` | the assessment | Controls |

---

## Accessibility

The system carries these; don't undo them in a component.

- **Focus is gold, offset, and never removed.** One `:focus-visible` rule covers
  every interactive element.
- **Bars are images.** The percentages printed inside a `.eg-bar__seg` are
  decorative — they clip on narrow segments. Every bar needs `role="img"` and an
  `aria-label` carrying the full reading.
- **`.eg-ghost` is `aria-hidden`.** It repeats text already in the heading.
- **The current tier is `aria-current="true"`.** The outline is styled off that
  attribute, so the visual state and the accessible state cannot drift apart.
- **Bold in body copy goes navy** (`--eg-ink-strong`), never grey — grey bold is
  invisible on cream.
- Reduced-motion collapses every duration to 1ms.
- Text pairings hold at 4.5:1 or better on their intended background. The two that
  need care: `--eg-gold` and `--eg-orange` are for *fills and large display type*,
  not small text on cream — use `--eg-gold-dark` / `--eg-orange-dark` there. On
  navy the reverse applies, which `.eg-field .eg-em-*` handles for you.

---

## Driving it from Claude Code

The repo's root `CLAUDE.md` points Claude at this directory, so in a session you
can just say what you want:

> Build a one-page division summary using the design system. Eyebrow, ghost title,
> a score block at 44 with the At-risk tier, belonging-by-level bars for the three
> levels, and a dark band closing on the ambiguity number.

Useful phrasings, because they map to real components:

- "eyebrow + ghost title" → `.eg-eyebrow` + `.eg-titleblock`
- "the three-state bar" → `.eg-bar` with belonging / ambiguity / exclusion segments
- "tier cards with the current one marked" → `.eg-tiers`
- "close it with a dark band" → `.eg-field` or `.eg-statband`
- "numbered findings" → `.eg-insight`; "numbered actions" → `.eg-steps`
- "make it a slide" → `.eg-slide`

For a non-web target (Canva, Keynote, a PDF pipeline), hand over `tokens.json` —
it carries the same values with the role of each one written out.

---

## Relationship to the existing assessment page

`assessment/index.html` predates this system and carries its own inline palette.
The values are the same ones; the names differ. The map, if you migrate it:

| Assessment page | Design system |
|---|---|
| `--navy` | `--eg-navy` |
| `--paper` / `--paper-2` | `--eg-paper` / `--eg-paper-sunk` |
| `--ink` / `--ink-soft` / `--ink-faint` | `--eg-ink` / `--eg-ink-soft` / `--eg-ink-faint` |
| `--line` | `--eg-line` |
| `--blue` / `--blue-d` / `--blue-soft` | `--eg-blue-dark` / `--eg-blue-deep` / `--eg-blue-wash` |
| `--ambig` / `--ambig-text` / `--ambig-soft` | `--eg-gold` / `--eg-gold-dark` / `--eg-gold-wash` |
| `--exclu` / `--exclu-d` / `--exclu-soft` | `--eg-orange` / `--eg-orange-deep` / `--eg-orange-wash` |
| `--belong` / `--belong-d` / `--belong-soft` | `--eg-green-mid` / `--eg-green` / `--eg-green-wash` |

One real difference: the assessment page uses **green** for Belonging, while the
report uses **blue**. The report is the client-facing artefact, so this system
follows it — blue for belonging, green reserved for section marks and positive
movement. Migrating the assessment page is a deliberate change, not a rename, and
is not part of this commit.

---

**Version 1.0.0**
