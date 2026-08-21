import { Text, Stack } from "@elmore/design-system";
export const Variants = () => (
  <Stack gap="tight">
    <Text variant="lead">The emotional and aspirational side of the equation.</Text>
    <Text>
      Belonging is a fundamental human need that drives creativity, problem solving, and
      life satisfaction. It is one of the <strong>strongest protective factors</strong>{" "}
      during challenging times.
    </Text>
    <Text variant="small">Source: BetterUp research, Harvard Business Review (2019)</Text>
    <Text variant="micro">Leadership distribution · Confidential · Not for general circulation</Text>
    <Text variant="note">Small samples read as direction, not precision.</Text>
  </Stack>
);
export const Prose = () => (
  <Text>
    This assessment was conducted to better understand employees&rsquo; belief in
    belonging, while determining how employees experience belonging across teams,
    divisions, and leadership. It is <strong>not a pass/fail test</strong>.
  </Text>
);
