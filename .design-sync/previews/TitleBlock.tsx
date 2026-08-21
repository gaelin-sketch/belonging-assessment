import { TitleBlock, Eyebrow, Text, Stack } from "@elmore/design-system";
export const WithEyebrow = () => (
  <Stack gap="tight">
    <Eyebrow>County-wide results</Eyebrow>
    <TitleBlock title="County Belonging Index" />
    <Text variant="lead">Six relationships that hold up across the respondent-level data.</Text>
  </Stack>
);
export const Alone = () => <TitleBlock title="Strategic Next Steps" />;
