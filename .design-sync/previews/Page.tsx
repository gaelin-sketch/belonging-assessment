import { Page, Shell, Eyebrow, TitleBlock, Text, Card, Stat, Grid } from "@elmore/design-system";
export const WrapsEverything = () => (
  <Page>
    <Shell>
      <Eyebrow>The premise</Eyebrow>
      <TitleBlock title="Why Does This Matter?" />
      <Text variant="lead">
        Every design must sit inside a Page — it paints the cream ground and sets the type.
      </Text>
      <div style={{ marginTop: 20 }}>
        <Grid columns={3}>
          <Stat value="56%" tone="blue">increase in <strong>job performance</strong></Stat>
          <Stat value="50%" tone="gold">reduction in <strong>turnover risk</strong></Stat>
          <Stat value="75%" tone="orange">reduction in <strong>sick days</strong></Stat>
        </Grid>
      </div>
      <div style={{ marginTop: 20 }}>
        <Card><Text variant="small">White is reserved for cards, which is what makes one read as lifted off the cream.</Text></Card>
      </div>
    </Shell>
  </Page>
);
