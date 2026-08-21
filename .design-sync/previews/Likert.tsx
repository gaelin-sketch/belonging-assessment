import { Likert, Card, Text } from "@elmore/design-system";
const OPTIONS = ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"];
export const Unanswered = () => (
  <Card>
    <Text style={{ fontWeight: 500, marginBottom: 16 }}>I feel genuinely welcomed on my immediate team.</Text>
    <Likert options={OPTIONS} ariaLabel="I feel genuinely welcomed on my immediate team" />
  </Card>
);
export const Answered = () => (
  <Card>
    <Text style={{ fontWeight: 500, marginBottom: 16 }}>My view shapes decisions that affect my work.</Text>
    <Likert options={OPTIONS} value={3} ariaLabel="My view shapes decisions that affect my work" />
  </Card>
);
