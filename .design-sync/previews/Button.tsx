import { Button, Row, FieldBand } from "@elmore/design-system";
export const Variants = () => (
  <Row>
    <Button>Begin the assessment</Button>
    <Button variant="gold">Download the report</Button>
    <Button variant="ghost">Back</Button>
  </Row>
);
export const SizesAndStates = () => (
  <Row>
    <Button size="sm">Small</Button>
    <Button disabled>Disabled</Button>
  </Row>
);
export const OnNavy = () => (
  <FieldBand><Button variant="onField">Book a conversation</Button></FieldBand>
);
