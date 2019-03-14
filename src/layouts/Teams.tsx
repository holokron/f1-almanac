import * as React from "react"
import { Box, Text, Grid, DataTable } from "grommet"
import { Link } from "gatsby"
import Base from "./Base"
import { SeasonListItem } from "../types/Season"
import { TeamsList, TeamListItem } from "../types/Team"

interface Props {
  pageContext: {
    season: SeasonListItem
    teamsList: TeamsList
  }
}

export default function Teams({
  pageContext,
}: Props): React.ReactElement<Props> {
  return (
    <Base>
      <Grid
        rows={["xxsmall", "auto"]}
        columns={["auto"]}
        areas={[
          { name: "teamsTitle", start: [0, 0], end: [0, 0] },
          { name: "teamsContent", start: [0, 1], end: [0, 1] },
        ]}
      >
        <Box align="center" justify="center" gridArea="teamsTitle">
          <Text size="xlarge">
            Teams of season{" "}
            <Link to={`/seasons/${pageContext.season.season}`}>
              {pageContext.season.season}
            </Link>
          </Text>
        </Box>
        <Box margin="medium" gridArea="teamsContent">
          <DataTable
            columns={[
              {
                header: <Text>Name</Text>,
                property: "name",
              },
              {
                header: <Text>Nationality</Text>,
                property: "nationality",
              },
              {
                header: <Text>Info</Text>,
                property: "url",
                render: (team: TeamListItem) => (
                  <Text>
                    <a href={team.url} target="_blank">
                      Review
                    </a>
                  </Text>
                ),
              },
            ]}
            data={pageContext.teamsList}
          />
        </Box>
      </Grid>
    </Base>
  )
}
