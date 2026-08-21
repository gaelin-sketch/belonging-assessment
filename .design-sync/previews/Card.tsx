import { Card, Label, Text, Heading, Grid } from "@elmore/design-system";
export const Default = () => (
  <Card>
    <Heading level="section">Aging &amp; Disability Services</Heading>
    <Text variant="small">
      Strongest at the leadership level (66% Belonging). Extended-team Belonging sits at
      24% with 66% in ambiguity.
    </Text>
  </Card>
);
export const WithRail = () => (
  <Grid columns={2}>
    <Card rail="gold"><Label>The county owns</Label><Text variant="small">Ambiguity is resolved in the daily experience of being managed, not by programmes.</Text></Card>
    <Card rail="blue"><Label>Where support helps</Label><Text variant="small">A partner gives managers a shared language to read where their team sits.</Text></Card>
  </Grid>
);
export const Padding = () => (
  <Grid columns={3}>
    <Card padding="tight"><Text variant="small">Tight</Text></Card>
    <Card><Text variant="small">Default</Text></Card>
    <Card padding="roomy"><Text variant="small">Roomy</Text></Card>
  </Grid>
);
