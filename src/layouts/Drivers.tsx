import React from "react"
import { graphql } from "gatsby"
import Base from "./Base"
import { DriversList } from "../types"
import DriversTable from "../components/DriversTable"
import { Card } from "antd"
import Helmet from "react-helmet"

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
    <>
      <Helmet>
        <title>F1 Almanac - Drivers of season {season}</title>
        <meta
          name="keywords"
          content={`f1 formula 1 statistics almanac database drivers season ${season}`}
        />
      </Helmet>
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
        <Card>
          <DriversTable data={drivers} />
        </Card>
      </Base>
    </>
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
