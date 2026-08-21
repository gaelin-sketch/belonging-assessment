import { Sheet, Blobs, Shell, Text, Label } from "@elmore/design-system";
export const InASheet = () => (
  <Sheet>
    <Blobs />
    <Shell>
      <Label>Corner decoration</Label>
      <Text variant="small">
        Four rounded shapes bleeding off the top-right — the logo mark broken apart.
        Decorative and aria-hidden.
      </Text>
    </Shell>
  </Sheet>
);
