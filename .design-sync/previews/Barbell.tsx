import { Barbell, Card, Label, Text, Legend } from "@elmore/design-system";
export const LeadersVsLed = () => (
  <Card>
    <Label>Leaders vs. those they lead</Label>
    <div style={{ marginTop: 28 }}>
      <Text variant="small">Feel valued by leadership</Text>
      <Barbell from={53} to={86} fromLabel="53%" toLabel="86%" wide
        ariaLabel="Feel valued by leadership: those being led 53 percent, leaders 86 percent, a 33 point gap" />
    </div>
    <div style={{ marginTop: 24 }}>
      <Text variant="small">Have voice to leadership</Text>
      <Barbell from={65} to={81} fromLabel="65%" toLabel="81%"
        ariaLabel="Have voice to leadership: those being led 65 percent, leaders 81 percent, a 16 point gap" />
    </div>
    <div style={{ marginTop: 24 }}>
      <Legend round items={[{ kind: "ambiguity", label: "Being led" }, { kind: "strong", label: "Leaders" }]} />
    </div>
  </Card>
);
