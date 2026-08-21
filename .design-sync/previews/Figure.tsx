import { Figure, Stack, Label } from "@elmore/design-system";
export const Sizes = () => (
  <Stack gap="tight">
    <div><Label>Index</Label><Figure value={49} unit="/ 100" size="xl" /></div>
    <div><Label>Indicator</Label><Figure value="6.63" unit="/ 10" size="l" /></div>
    <div><Label>Division</Label><Figure value={44} size="m" /></div>
    <div><Label>Sample</Label><Figure value="n=134" size="s" /></div>
  </Stack>
);
