import { SectionDivider, Eyebrow, Heading, Text, Contents, Emphasis } from "@elmore/design-system";
export const CountySnapshot = () => (
  <SectionDivider accent={2} part="Part 02 / 08" numeral="02" pages="Pages 05–09">
    <Eyebrow bare tone="blue">Section 02</Eyebrow>
    <Heading level="title">County<br /><Emphasis tone="blue">Snapshot</Emphasis></Heading>
    <Text variant="lead">Where the county stands today, read across the three relational levels.</Text>
    <div style={{ marginTop: 24 }}>
      <Contents rows={[
        { label: "Executive Summary", page: "05" },
        { label: "Key Themes", page: "06" },
        { label: "County Belonging Index", page: "08" },
      ]} />
    </div>
  </SectionDivider>
);
