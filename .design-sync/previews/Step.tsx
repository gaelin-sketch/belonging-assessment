import { Steps, Step, Text } from "@elmore/design-system";
export const Tones = () => (
  <Steps>
    <Step index={1} tone="navy" title="Build in capacity that cultivates connection" target="Targets the structural belonging gap">
      <Text variant="small">Treat connection as infrastructure, not an add-on.</Text>
    </Step>
    <Step index={2} tone="gold" title="Equip managers to prioritise the three indicators">
      <Text variant="small">Ambiguity is resolved in the daily experience of being managed.</Text>
    </Step>
    <Step index={3} tone="orange" title="Begin qualitative research with the most vulnerable groups">
      <Text variant="small">The data raises the signal; it can&rsquo;t say why.</Text>
    </Step>
  </Steps>
);
