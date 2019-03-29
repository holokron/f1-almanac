import React from "react"
import Base from "./Base"
import { RacesList } from "../types"
import RacesTable from "../components/RacesTable"
import { graphql } from "gatsby"
import { Card } from "antd"
import Helmet from "react-helmet"

interface RacesProps {
  pageContext: {
    season: string
  }
  data: {
    dataJson: {
      RaceTable: {
        Races: RacesList
      }
    }
  }
}

export default function Races({
  data,
  pageContext,
}: RacesProps): React.ReactElement<RacesProps> {
  const season = pageContext.season
  const races = data.dataJson.RaceTable.Races

  return (
    <>
      <Helmet>
        <title>F1 Almanac - Races of season {season}</title>
        <meta
          name="keywords"
          content={`f1 formula 1 statistics almanac database races season ${season}`}
        />
      </Helmet>
      <Base
        title={`Races of season ${season}`}
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
          <RacesTable data={races} />
        </Card>
      </Base>
    </>
  )
}

export const query = graphql`
  query($season: Date!) {
    dataJson(RaceTable: { season: { eq: $season } }) {
      RaceTable {
        season
        Races {
          season
          round
          url
          raceName
          Circuit {
            circuitId
            url
            circuitName
            Location {
              lat
              long
              locality
              country
            }
          }
          date
          time
        }
      }
    }
  }
`
