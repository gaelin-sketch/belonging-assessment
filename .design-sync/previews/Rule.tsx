import { Rule, Text, Stack } from "@elmore/design-system";
export const Weights = () => (
  <Stack gap="tight">
    <Text variant="small">Hairline, on cream</Text>
    <Rule />
    <Text variant="small">Navy, to open a contents block</Text>
    <Rule strong />
  </Stack>
);
