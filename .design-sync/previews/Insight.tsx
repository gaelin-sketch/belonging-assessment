import { Insight, Stack } from "@elmore/design-system";
export const NumberedFindings = () => (
  <Stack gap="tight">
    <Insight index={1} tone="blue" title="Staff value belonging highly; the organisation delivers it unevenly.">
      Staff rate belonging 8.16 of 10 as essential to their own thriving. But the overall
      Belonging Index of 49 sits in the At-risk band.
    </Insight>
    <Insight index={2} tone="gold" title="Immediate teams are a real strength; the connections between teams are not.">
      Within immediate teams, belonging reaches 62.5%. On the extended team it falls to 28.8%.
    </Insight>
    <Insight index={3} tone="navy" title="Exclusion is rare, but ambiguity is widespread — and ambiguity is not neutral.">
      Outright exclusion stays well under 8% at every level. The challenge is diffuse.
    </Insight>
    <Insight index={4} tone="orange" title="Leadership is trusted, though not yet universally.">
      A majority feel included at the leadership level, with only 4.9% excluded.
    </Insight>
  </Stack>
);
