import { Steps, Step, StepSplit, Eyebrow, Text } from "@elmore/design-system";
export const OwnsVsHelps = () => (
  <Steps>
    <Step index={3} tone="blue" title="Strategically prioritise co-creation opportunities"
      target="Targets the lowest indicator (Co-Creation, 6.27)">
      <StepSplit>
        <div>
          <Eyebrow tone="navy">The county owns</Eyebrow>
          <Text variant="small">Staff are included far more than empowered: <strong>78%</strong> welcomed, <strong>65%</strong> able to influence.</Text>
        </div>
        <div>
          <Eyebrow tone="blue">Where support helps</Eyebrow>
          <Text variant="small">A partner distinguishes where agency is genuinely blocked from where it only feels that way.</Text>
        </div>
      </StepSplit>
    </Step>
  </Steps>
);
