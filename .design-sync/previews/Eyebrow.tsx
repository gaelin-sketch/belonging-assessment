import { Eyebrow, Stack } from "@elmore/design-system";
export const Default = () => <Eyebrow>County-wide results</Eyebrow>;
export const Tones = () => (
  <Stack gap="tight">
    <Eyebrow tone="orange">Leadership review</Eyebrow>
    <Eyebrow tone="blue">Indicator deep-dive · 02 of 03</Eyebrow>
    <Eyebrow tone="gold">From insight to action</Eyebrow>
    <Eyebrow tone="navy">The county owns</Eyebrow>
  </Stack>
);
export const Bare = () => <Eyebrow bare tone="blue">Section 02</Eyebrow>;
