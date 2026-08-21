import { Bar } from "@elmore/design-system";

export const BelongingByLevel = () => (
  <Bar
    ariaLabel="Immediate team: belonging 65.7 percent, ambiguity 27.6 percent, exclusion 6.7 percent"
    segments={[
      { kind: "belonging", percent: 65.7, label: "65.7%" },
      { kind: "ambiguity", percent: 27.6, label: "27.6%" },
      { kind: "exclusion", percent: 6.7 },
    ]}
  />
);

export const AmbiguityDominant = () => (
  <Bar
    ariaLabel="Extended team: belonging 29.8 percent, ambiguity 62.4 percent, exclusion 7.8 percent"
    segments={[
      { kind: "belonging", percent: 29.8, label: "29.8%" },
      { kind: "ambiguity", percent: 62.4, label: "62.4%" },
      { kind: "exclusion", percent: 7.8 },
    ]}
  />
);

export const FourTierSpread = () => (
  <Bar
    size="tall"
    ariaLabel="Strong 33 percent, building 47 percent, at-risk 15 percent, critical 5 percent"
    segments={[
      { kind: "strong", percent: 33, label: "33%" },
      { kind: "building", percent: 47, label: "47%" },
      { kind: "at-risk", percent: 15, label: "15%" },
      { kind: "critical", percent: 5, label: "5%" },
    ]}
  />
);

export const Slim = () => (
  <Bar
    size="slim"
    ariaLabel="Belonging 56 percent, ambiguity 34 percent, exclusion 10 percent"
    segments={[
      { kind: "belonging", percent: 56 },
      { kind: "ambiguity", percent: 34 },
      { kind: "exclusion", percent: 10 },
    ]}
  />
);
