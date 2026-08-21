import { BarRow, Bar, Card, Label, Legend } from "@elmore/design-system";
export const ThreeLevels = () => (
  <Card>
    <Label>Belonging by level</Label>
    <div style={{ marginTop: 16 }}>
      <BarRow label="Immediate">
        <Bar ariaLabel="Immediate team: belonging 65.7 percent, ambiguity 27.6 percent, exclusion 6.7 percent"
          segments={[{ kind: "belonging", percent: 65.7, label: "65.7%" }, { kind: "ambiguity", percent: 27.6, label: "27.6%" }, { kind: "exclusion", percent: 6.7 }]} />
      </BarRow>
      <BarRow label="Extended">
        <Bar ariaLabel="Extended team: belonging 29.8 percent, ambiguity 62.4 percent, exclusion 7.8 percent"
          segments={[{ kind: "belonging", percent: 29.8, label: "29.8%" }, { kind: "ambiguity", percent: 62.4, label: "62.4%" }, { kind: "exclusion", percent: 7.8 }]} />
      </BarRow>
      <BarRow label="Leadership">
        <Bar ariaLabel="Leadership: belonging 56.7 percent, ambiguity 38.8 percent, exclusion 4.5 percent"
          segments={[{ kind: "belonging", percent: 56.7, label: "56.7%" }, { kind: "ambiguity", percent: 38.8, label: "38.8%" }, { kind: "exclusion", percent: 4.5 }]} />
      </BarRow>
    </div>
    <div style={{ marginTop: 16 }}>
      <Legend round items={[{ kind: "belonging", label: "Belonging" }, { kind: "ambiguity", label: "Ambiguity" }, { kind: "exclusion", label: "Exclusion" }]} />
    </div>
  </Card>
);
