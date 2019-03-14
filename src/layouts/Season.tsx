import * as React from "react"
import { Box, Text, Grid } from "grommet"
import Base from "./Base"
import { SeasonListItem } from "../types/Season"
import Card from "../components/Card"

interface Props {
  pageContext: {
    season: SeasonListItem
  }
}

export default function Season({
  pageContext,
}: Props): React.ReactElement<Props> {
  return (
    <Base>
      <Grid
        rows={["xxsmall", "auto"]}
        columns={["auto"]}
        areas={[
          { name: "seasonTitle", start: [0, 0], end: [0, 0] },
          { name: "seasonContent", start: [0, 1], end: [0, 1] },
        ]}
      >
        <Box align="center" justify="center" gridArea="seasonTitle">
          <Text size="xlarge">{pageContext.season.season}</Text>
        </Box>
        <Grid
          gap="large"
          margin={{
            bottom: "large",
          }}
          gridArea="seasonContent"
          columns={["auto", "auto"]}
          rows={["auto", "auto"]}
          areas={[
            { name: "drivers", start: [0, 0], end: [0, 0] },
            { name: "teams", start: [1, 0], end: [1, 0] },
            { name: "races", start: [0, 1], end: [0, 1] },
            { name: "results", start: [1, 1], end: [1, 1] },
          ]}
        >
          <Card
            label="Drivers"
            gridArea="drivers"
            link={`/seasons/${pageContext.season.season}/drivers`}
          />
          <Card
            label="Teams"
            gridArea="teams"
            link={`/seasons/${pageContext.season.season}/teams`}
          />
          <Card
            label="Races"
            gridArea="races"
            link={`/seasons/${pageContext.season.season}/races`}
          />
          <Card
            label="Results"
            gridArea="results"
            link={`/seasons/${pageContext.season.season}/results`}
          />
        </Grid>
      </Grid>
    </Base>
  )
}
