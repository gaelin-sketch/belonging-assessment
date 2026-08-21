import { Contents, Card, Label } from "@elmore/design-system";
export const SectionContents = () => (
  <Card>
    <Label>Contents</Label>
    <div style={{ marginTop: 12 }}>
      <Contents rows={[
        { label: "Executive Summary", page: "05" },
        { label: "Key Themes", page: "06" },
        { label: "County at a Glance", page: "07" },
        { label: "County Belonging Index", page: "08" },
        { label: "Importance × Experience", page: "09" },
      ]} />
    </div>
  </Card>
);
