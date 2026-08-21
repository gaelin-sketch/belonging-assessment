import { Shell, Card, Text, Label, Stack } from "@elmore/design-system";
export const Widths = () => (
  <Stack>
    <Shell width="narrow"><Card><Label>Narrow · 780px</Label><Text variant="small">For prose.</Text></Card></Shell>
    <Shell><Card><Label>Default · 1100px</Label><Text variant="small">Report and app pages.</Text></Card></Shell>
  </Stack>
);
