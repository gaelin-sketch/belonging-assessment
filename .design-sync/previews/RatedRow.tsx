import { RatedRow, Card, Label } from "@elmore/design-system";
export const ByRole = () => (
  <Card>
    <Label>By role</Label>
    <div style={{ marginTop: 16 }}>
      <RatedRow name="Supervisors · n=30" value="7.06" percent={70.6} tier="building" />
      <RatedRow name="Support staff · n=46" value="6.70" percent={67} tier="building" />
      <RatedRow name="Frontline practitioners · n=134" value="6.56" percent={65.6} tier="building" />
      <RatedRow name="Managers · n=9" value="6.29" percent={62.9} tier="building" />
      <RatedRow name="Other roles · n=21" value="6.27" percent={62.7} tier="at-risk" />
    </div>
  </Card>
);
