import { Slide, Eyebrow, Heading, Text, Emphasis } from "@elmore/design-system";
export const Cream = () => (
  <Slide framed>
    <Eyebrow tone="blue">Potential</Eyebrow>
    <Heading level="display">The<br /><Emphasis tone="blue">&ldquo;What could be&rdquo;</Emphasis></Heading>
    <Text variant="lead">The emotional and aspirational side of the equation.</Text>
  </Slide>
);
export const Navy = () => (
  <Slide framed dark>
    <Eyebrow>The honest question</Eyebrow>
    <Heading level="display">Do you <Emphasis tone="gold">Empower</Emphasis> others to be a part of the solution?</Heading>
  </Slide>
);
export const Centered = () => (
  <Slide framed center>
    <Heading level="display">Be the <Emphasis tone="gold">difference</Emphasis>.</Heading>
  </Slide>
);
