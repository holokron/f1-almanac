import * as React from "react"
import { Box, Text, Grid, DataTable } from "grommet"
import { Link } from "gatsby"
import Base from "./Base"
import { SeasonListItem } from "../types/Season"
import { DriversList, DriverListItem } from "../types/Driver"

interface Props {
  pageContext: {
    season: SeasonListItem
    driversList: DriversList
  }
}

export default function Drivers({
  pageContext,
}: Props): React.ReactElement<Props> {
  return (
    <Base>
      <Grid
        rows={["xxsmall", "auto"]}
        columns={["auto"]}
        areas={[
          { name: "driversTitle", start: [0, 0], end: [0, 0] },
          { name: "driversContent", start: [0, 1], end: [0, 1] },
        ]}
      >
        <Box align="center" justify="center" gridArea="driversTitle">
          <Text size="xlarge">
            Drivers of season{" "}
            <Link to={`/seasons/${pageContext.season.season}`}>
              {pageContext.season.season}
            </Link>
          </Text>
        </Box>
        <Box margin="medium" gridArea="driversContent">
          <DataTable
            columns={[
              {
                header: <Text>Code</Text>,
                property: "code",
              },
              {
                header: <Text>Number</Text>,
                property: "permanentNumber",
              },
              {
                header: <Text>Given name</Text>,
                property: "givenName",
              },
              {
                header: <Text>Family name</Text>,
                property: "familyName",
                primary: true,
              },
              {
                header: <Text>Nationality</Text>,
                property: "nationality",
              },
              {
                header: <Text>Info</Text>,
                property: "url",
                render: (driver: DriverListItem) => (
                  <Text>
                    <a href={driver.url} target="_blank">
                      Biography
                    </a>
                  </Text>
                ),
              },
            ]}
            data={pageContext.driversList}
          />
        </Box>
      </Grid>
    </Base>
  )
}
