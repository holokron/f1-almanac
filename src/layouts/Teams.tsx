import React from "react"
import Base from "./Base"
import { TeamsList } from "../types"
import TeamsTable from "../components/TeamsTable"
import { graphql } from "gatsby"
import { Card } from "antd"

interface TeamsProps {
  data: {
    dataJson: {
      ConstructorTable: {
        Constructors: TeamsList
      }
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
  const teams = data.dataJson.ConstructorTable.Constructors

  return (
    <Base
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
    dataJson(ConstructorTable: { season: { eq: $season } }) {
      ConstructorTable {
        season
        Constructors {
          constructorId
          url
          name
          nationality
        }
      }
    }
  }
`
