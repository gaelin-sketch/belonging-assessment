import { Sheet, Blobs, Shell, Eyebrow, TitleBlock, Text } from "@elmore/design-system";
export const WithCornerDecoration = () => (
  <Sheet>
    <Blobs />
    <Shell>
      <Eyebrow>Division detail</Eyebrow>
      <TitleBlock title="Division Results" />
      <Text variant="lead">A Sheet clips the corner shapes so they bleed off the edge.</Text>
    </Shell>
  </Sheet>
);
