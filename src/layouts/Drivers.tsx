import * as React from "react"
import { graphql } from "gatsby"
import Base from "./Base"
import { DriversList } from "../types/Driver"
import DriversTable from "../components/DriversTable"

interface DriversProps {
  pageContext: {
    season: string
  }
  data: {
    dataJson: {
      DriverTable: {
        Drivers: DriversList
      }
    }
  }
}

export default function Drivers({
  data,
  pageContext,
}: DriversProps): React.ReactElement<DriversProps> {
  const season = pageContext.season
  const drivers = data.dataJson.DriverTable.Drivers

  return (
    <Base
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
      <DriversTable data={drivers} />
    </Base>
  )
}

export const query = graphql`
  query($season: Date!) {
    dataJson(DriverTable: { season: { eq: $season } }) {
      DriverTable {
        season
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
  }
`
