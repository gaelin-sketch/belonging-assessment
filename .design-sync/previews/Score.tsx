import { Score, Text, Card } from "@elmore/design-system";

export const AtRisk = () => (
  <Card>
    <Score value={49} tier="at-risk" percent={49}>
      <Text variant="small">
        At 49, the county sits at the very top of the At-risk tier, one point short of
        Building. Whether it climbs or slips back depends on whether this work is
        prioritised now.
      </Text>
    </Score>
  </Card>
);

export const Building = () => (
  <Card>
    <Score value={58} tier="building" percent={58}>
      <Text variant="small">
        A real, functioning foundation with clear, reachable room to grow.
      </Text>
    </Score>
  </Card>
);

export const IndicatorOutOfTen = () => (
  <Card>
    <Score
      value="6.63"
      unit="/ 10"
      tier="building"
      percent={66}
      scale={[
        { tier: "critical", range: "0–3.4" },
        { tier: "at-risk", range: "3.5–5.4" },
        { tier: "building", range: "5.5–7.4" },
        { tier: "strong", range: "7.5–10" },
      ]}
    >
      <Text variant="small">
        Social Connection is the highest of the three indicators, but still Building.
      </Text>
    </Score>
  </Card>
);
