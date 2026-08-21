import { Progress, Card, Label, Stack } from "@elmore/design-system";
export const Stages = () => (
  <Card>
    <Stack gap="tight">
      <Label>Just started</Label><Progress percent={12} />
      <Label>Halfway</Label><Progress percent={50} />
      <Label>Nearly done</Label><Progress percent={88} />
    </Stack>
  </Card>
);
