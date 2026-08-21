import { PageFooter, Card, Text } from "@elmore/design-system";
export const Default = () => (
  <Card>
    <Text variant="small">Page content sits above the footer rule.</Text>
    <PageFooter note="Leadership distribution · Confidential · Not for general circulation" folio="08" />
  </Card>
);
