import { Quote, Underscore, Emphasis, Stack } from "@elmore/design-system";
export const Tones = () => (
  <Stack>
    <Quote cite="The Belonging Barometer">
      Belonging is not a work <Underscore>perk</Underscore>, but a precondition for{" "}
      <Emphasis tone="orange">BETTER</Emphasis>.
    </Quote>
    <Quote tone="blue">
      It is the daily distance between what someone is capable of and the conditions they
      are asked to be capable in.
    </Quote>
  </Stack>
);
