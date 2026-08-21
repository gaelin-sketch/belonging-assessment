import { Stack, Card, Text, Label } from "@elmore/design-system";
export const Gaps = () => (
  <Stack gap="loose">
    <div><Label>Tight</Label><Stack gap="tight"><Card padding="tight"><Text variant="small">One</Text></Card><Card padding="tight"><Text variant="small">Two</Text></Card></Stack></div>
    <div><Label>Default</Label><Stack><Card padding="tight"><Text variant="small">One</Text></Card><Card padding="tight"><Text variant="small">Two</Text></Card></Stack></div>
  </Stack>
);
