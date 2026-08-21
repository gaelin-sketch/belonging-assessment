import { Heading, Emphasis, Text, Stack } from "@elmore/design-system";

export const Hero = () => (
  <Heading level="hero">
    Be the <Emphasis tone="gold">difference</Emphasis>.
  </Heading>
);

export const Display = () => (
  <Heading level="display">
    There&rsquo;s daily conflict between the{" "}
    <Emphasis tone="blue">&ldquo;what could be&rdquo;</Emphasis> and the{" "}
    <Emphasis tone="orange">&ldquo;what is.&rdquo;</Emphasis>
  </Heading>
);

export const PageTitle = () => (
  <Stack gap="tight">
    <Heading level="title">County Belonging Index</Heading>
    <Text variant="lead">
      Where the county stands today, read across the three relational levels.
    </Text>
  </Stack>
);

export const SectionAndSub = () => (
  <Stack gap="tight">
    <Heading level="section">Social Connection</Heading>
    <Heading level="sub">How important is belonging to Scott County?</Heading>
    <Text>
      The Barometer defines this as emotional and social connection, satisfaction with
      one&rsquo;s relationships, and feeling welcomed and included. At 6.63 it is the{" "}
      <strong>highest of the three indicators</strong>, but still Building.
    </Text>
  </Stack>
);
