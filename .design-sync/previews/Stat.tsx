import { Stat, Grid } from "@elmore/design-system";
export const ResearchRow = () => (
  <Grid columns={3}>
    <Stat value="56%" tone="blue">increase in <strong>job performance</strong></Stat>
    <Stat value="50%" tone="gold">reduction in <strong>turnover risk</strong></Stat>
    <Stat value="75%" tone="orange">reduction in <strong>sick days</strong></Stat>
  </Grid>
);
