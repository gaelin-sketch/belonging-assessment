import { Chip, Row } from "@elmore/design-system";
export const Tiers = () => (
  <Row>
    <Chip tier="critical">Critical · 0–34</Chip>
    <Chip tier="at-risk">At-risk · 35–49</Chip>
    <Chip tier="building">Building · 50–64</Chip>
    <Chip tier="strong">Strong · 65+</Chip>
  </Row>
);
export const NeutralAndSolid = () => (
  <Row><Chip>Neutral</Chip><Chip solid>Hold closely</Chip></Row>
);
