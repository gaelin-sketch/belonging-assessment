import { SelectField, Card } from "@elmore/design-system";
export const Default = () => (
  <Card>
    <SelectField label="What is your role?" defaultValue="Frontline practitioner">
      <option>Frontline practitioner</option>
      <option>Supervisor</option>
      <option>Manager</option>
      <option>Executive leader</option>
    </SelectField>
  </Card>
);
