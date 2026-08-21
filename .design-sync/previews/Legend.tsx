import { Legend, Stack, Label } from "@elmore/design-system";
export const RelationalStates = () => (
  <Stack gap="tight">
    <Label>Relational states</Label>
    <Legend round items={[{ kind: "belonging", label: "Belonging" }, { kind: "ambiguity", label: "Ambiguity" }, { kind: "exclusion", label: "Exclusion" }]} />
  </Stack>
);
export const IndexTiers = () => (
  <Stack gap="tight">
    <Label>Index tiers</Label>
    <Legend items={[{ kind: "strong", label: "Strong 7.5–10" }, { kind: "building", label: "Building 5.5–7.4" }, { kind: "at-risk", label: "At-risk 3.5–5.4" }, { kind: "critical", label: "Critical 0–3.4" }]} />
  </Stack>
);
