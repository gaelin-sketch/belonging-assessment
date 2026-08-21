import { Meter, Card, Label, Stack, Text } from "@elmore/design-system";
export const AcrossTiers = () => (
  <Card>
    <Stack gap="tight">
      <Label>Psychological safety by division</Label>
      <Text variant="small">Critical</Text><Meter percent={28} tier="critical" />
      <Text variant="small">At-risk</Text><Meter percent={46} tier="at-risk" />
      <Text variant="small">Building</Text><Meter percent={63} tier="building" />
      <Text variant="small">Strong</Text><Meter percent={82} tier="strong" />
    </Stack>
  </Card>
);
