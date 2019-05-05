import React from "react"
import { graphql } from "gatsby"
import Base from "./Base"
import { DriversList } from "../types"
import DriversTable from "../components/DriversTable"
import { Card } from "antd"

interface DriversProps {
  pageContext: {
    season: string
  }
  data: {
    driversPerSeasonJson: {
      Drivers: DriversList
    }
  }
}

export default function Drivers({
  data,
  pageContext,
}: DriversProps): React.ReactElement<DriversProps> {
  const season = pageContext.season
  const drivers = data.driversPerSeasonJson.Drivers

  return (
    <Base
      metadata={{
        keywords: `f1 formula 1 statistics almanac database drivers season ${season}`,
        siteTitle: `Drivers of season ${season}`,
      }}
      title={`Drivers of season ${season}`}
      breadcrumbs={[
        {
          name: "Home",
          path: "/",
        },
        {
          name: "Seasons",
          path: "/seasons",
        },
        {
          name: season,
          path: `/seasons/${season}`,
        },
      ]}
    >
      <Card>
        <DriversTable data={drivers} />
      </Card>
    </Base>
  )
}

export const query = graphql`
  query($season: Date!) {
    driversPerSeasonJson(season: { eq: $season }) {
      Drivers {
        driverId
        url
        givenName
        familyName
        dateOfBirth
        nationality
        code
        permanentNumber
      }
    }
  }
`
