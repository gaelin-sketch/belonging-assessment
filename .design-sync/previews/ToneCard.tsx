import { ToneCard, Text, Grid } from "@elmore/design-system";
export const ThreeUp = () => (
  <Grid columns={3}>
    <ToneCard tone="positive">
      <Text variant="small">Connection is the strongest of the three indicators. <strong>4 in 5 staff (79%)</strong> feel connected to their immediate team.</Text>
    </ToneCard>
    <ToneCard tone="negative">
      <Text variant="small">That connection is local, not organisational. The 79% falls to 50% on the extended team.</Text>
    </ToneCard>
    <ToneCard tone="interesting">
      <Text variant="small">Connection has the <strong>widest racial gap</strong> of any indicator.</Text>
    </ToneCard>
  </Grid>
);
