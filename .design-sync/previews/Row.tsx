import { Row, Chip, Button, Label, Stack } from "@elmore/design-system";
export const Default = () => (
  <Stack gap="tight">
    <Label>Grouped</Label>
    <Row><Chip tier="building">Building</Chip><Chip tier="at-risk">At-risk</Chip><Chip tier="strong">Strong</Chip></Row>
    <Label>Pushed apart</Label>
    <Row between><Button variant="ghost">Back</Button><Button>Continue</Button></Row>
  </Stack>
);
