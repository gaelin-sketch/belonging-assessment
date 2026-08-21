import { TierCard, Grid } from "@elmore/design-system";
export const Current = () => (
  <Grid columns={2}>
    <TierCard tier="at-risk" name="At-risk" range="Index 35–49" current>
      Early signs of belonging exist but don&rsquo;t sustain. Pockets of connection are real
      for many, yet most feel trapped in ambiguity.
    </TierCard>
    <TierCard tier="building" name="Building" range="Index 50–64">
      A real, functioning foundation with clear, reachable room to grow.
    </TierCard>
  </Grid>
);
