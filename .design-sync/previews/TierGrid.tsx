import { TierGrid, TierCard } from "@elmore/design-system";
export const FourStages = () => (
  <TierGrid>
    <TierCard tier="critical" name="Critical" range="Index 0–34">
      Belonging is the exception. Exclusion recurs across levels. Foundational, urgent repair is needed.
    </TierCard>
    <TierCard tier="at-risk" name="At-risk" range="Index 35–49" current>
      Early signs of belonging exist but don&rsquo;t sustain. Most feel trapped in ambiguity.
    </TierCard>
    <TierCard tier="building" name="Building" range="Index 50–64">
      A real, functioning foundation with clear, reachable room to grow. A tipping point.
    </TierCard>
    <TierCard tier="strong" name="Strong" range="Index 65+">
      Belonging is the consistent, lived experience. The work shifts from building to sustaining.
    </TierCard>
  </TierGrid>
);
