import { Grid, Card, Text, Stack, Label } from "@elmore/design-system";
export const Columns = () => (
  <Stack>
    <Label>Three up</Label>
    <Grid columns={3}>
      <Card padding="tight"><Text variant="small">Psychological safety</Text></Card>
      <Card padding="tight"><Text variant="small">Social connection</Text></Card>
      <Card padding="tight"><Text variant="small">Co-creation</Text></Card>
    </Grid>
    <Label>Two up</Label>
    <Grid columns={2}>
      <Card padding="tight"><Text variant="small">The county owns</Text></Card>
      <Card padding="tight"><Text variant="small">Where support helps</Text></Card>
    </Grid>
  </Stack>
);
