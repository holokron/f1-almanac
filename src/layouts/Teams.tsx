import React from "react"
import Base from "./Base"
import { TeamsList } from "../types"
import TeamsTable from "../components/TeamsTable"
import { graphql } from "gatsby"
import { Card } from "antd"

interface TeamsProps {
  data: {
    constructorsPerSeasonJson: {
      Constructors: TeamsList
    }
  }
  pageContext: {
    season: string
  }
}

export default function Teams({
  data,
  pageContext,
}: TeamsProps): React.ReactElement<TeamsProps> {
  const season = pageContext.season
  const teams = data.constructorsPerSeasonJson.Constructors

  return (
    <Base
      metadata={{
        keywords: `f1 formula 1 statistics almanac database teams season ${season}`,
        siteTitle: `F1 Almanac - Teams of season ${season}`,
      }}
      title={`Teams of season ${season}`}
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
        <TeamsTable data={teams} />
      </Card>
    </Base>
  )
}

export const query = graphql`
  query($season: Date!) {
    constructorsPerSeasonJson(season: { eq: $season }) {
      season
      Constructors {
        constructorId
        url
        name
        nationality
      }
    }
  }
`
