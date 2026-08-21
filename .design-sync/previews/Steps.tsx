import { Steps, Step, StepSplit, Eyebrow, Text } from "@elmore/design-system";
export const NextSteps = () => (
  <Steps>
    <Step index={1} tone="navy" title="Build in capacity that cultivates connection"
      target="Targets the structural belonging gap (62.5% immediate → 28.8% extended)">
      <StepSplit>
        <div>
          <Eyebrow tone="navy">The county owns</Eyebrow>
          <Text variant="small">Belonging never crossed team boundaries because nothing was built to carry it there. Treat connection as <strong>infrastructure</strong>.</Text>
        </div>
        <div>
          <Eyebrow tone="blue">Where support helps</Eyebrow>
          <Text variant="small">A partner maps where connective capacity is missing, then designs structures that fit each unit&rsquo;s real workflow.</Text>
        </div>
      </StepSplit>
    </Step>
    <Step index={2} tone="gold" title="Equip managers to prioritise the three indicators"
      target="Targets ambiguity, the dominant state">
      <StepSplit>
        <div>
          <Eyebrow tone="navy">The county owns</Eyebrow>
          <Text variant="small">Ambiguity is resolved in the daily experience of being managed, not by programmes.</Text>
        </div>
        <div>
          <Eyebrow tone="blue">Where support helps</Eyebrow>
          <Text variant="small">A partner gives managers a shared language to read where their team sits.</Text>
        </div>
      </StepSplit>
    </Step>
  </Steps>
);
