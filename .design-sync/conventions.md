## How to build with this system

### Wrap everything in `Page`

`Page` paints the cream page ground (`--eg-paper`) and sets the body font. Without
it, components render on the host's white background in the system font — subtly
wrong rather than obviously broken, so it is easy to miss. Put a `Shell` inside it
for the centred column and the page gutter.

```jsx
<Page>
  <Shell>
    <Eyebrow>County-wide results</Eyebrow>
    <TitleBlock title="County Belonging Index" />
  </Shell>
</Page>
```

### The styling idiom: components first, then `eg-` utilities, then tokens

These components are thin wrappers over a hand-authored CSS layer. Reach for them
in this order:

1. **A component**, whenever one exists. There are 50; check the component list
   before styling anything by hand.
2. **A utility class** for your own layout glue: `eg-stack` (with
   `eg-stack--tight` / `eg-stack--loose`), `eg-row` (`eg-row--between`),
   `eg-grid` (`eg-grid--2` / `--3` / `--4`), `eg-rule`, `eg-center`, `eg-right`,
   `eg-muted`, `eg-faint`, `eg-tnum`, `eg-nowrap`, `eg-visually-hidden`. Numeric
   table cells take `eg-num`.
3. **A `--eg-*` token** for a one-off value. Never a raw hex, px size, or radius.

Colour tokens: `--eg-navy`, `--eg-gold`, `--eg-orange`, `--eg-blue` are the four
brand colours; `--eg-paper` is the page, `--eg-card` is white (cards only),
`--eg-ink` / `--eg-ink-soft` / `--eg-ink-faint` are the text ramp, `--eg-line` is
the hairline. Each brand colour has `-dark` / `-deep` / `-light` / `-wash` /
`-fill` variants — the plain value is a **fill**, the `-dark` variant is what you
use for **text on cream** (the mid blue clears only 2.85:1 there).

Spacing is `--eg-s-1` … `--eg-s-20` on a 4px base. Radii are `--eg-r-sm/md/lg/xl`
and `--eg-r-pill`. Type sizes are `--eg-t-hero/display/title/section/sub/lead/
body/small/micro/eyebrow` plus `--eg-t-figure-xl/l/m/s` for numerals.

### Rules that are not negotiable

- **The page is cream; white is for cards.** That is what makes a `Card` read as
  lifted without a heavy shadow.
- **Colour exactly one word** in a headline, with `Emphasis`. Never a phrase.
- **The two data scales are fixed.** `belonging`/`ambiguity`/`exclusion` and
  `critical`/`at-risk`/`building`/`strong` always take their own colours — never
  reassign them per chart. Blue is the branded colour; there is no green in this
  system.
- **One `FieldBand` per page**, at the bottom.
- **Every `Bar` needs `ariaLabel`.** The percentages printed inside segments are
  decorative and clip on narrow segments.
- **Never remove the focus ring.** There is one treatment: gold, offset.

### Where the truth lives

Read `styles.css` and the `_ds_bundle.css` it imports before styling anything by
hand — they carry every class and token named above. Each component's
`.prompt.md` carries its props and usage.

### An idiomatic page

```jsx
<Page>
  <Sheet>
    <Blobs />
    <Shell>
      <Eyebrow tone="blue">Indicator deep-dive · 02 of 03</Eyebrow>
      <TitleBlock title="Social Connection" />

      <Card>
        <Score value={49} tier="at-risk" percent={49}>
          <Text variant="small">At 49 the county sits at the top of the At-risk tier.</Text>
        </Score>
      </Card>

      <div className="eg-stack" style={{ marginTop: "var(--eg-s-6)" }}>
        <BarRow label="Immediate">
          <Bar
            ariaLabel="Immediate team: belonging 65.7 percent, ambiguity 27.6 percent, exclusion 6.7 percent"
            segments={[
              { kind: "belonging", percent: 65.7, label: "65.7%" },
              { kind: "ambiguity", percent: 27.6, label: "27.6%" },
              { kind: "exclusion", percent: 6.7 },
            ]}
          />
        </BarRow>
        <Legend round items={[
          { kind: "belonging", label: "Belonging" },
          { kind: "ambiguity", label: "Ambiguity" },
          { kind: "exclusion", label: "Exclusion" },
        ]} />
      </div>

      <StatBand value="8.16" caption="Out of 10">
        Belonging is intrinsic to thriving.
      </StatBand>
    </Shell>
  </Sheet>
</Page>
```
