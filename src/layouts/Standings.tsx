import * as React from "react"
import { Tabs } from "antd"
import Base from "./Base"
import { Season } from "../types/Season"
import { DriverStandingsList, TeamStandingsList } from "../types/Standings"

interface StandingsProps {
  pageContext: {
    season: Season
    driversStandings: DriverStandingsList
    teamsStandings: TeamStandingsList
  }
}

export default function Standings({
  pageContext,
}: StandingsProps): React.ReactElement<StandingsProps> {
  const { season } = pageContext.season

  return (
    <Base
      title={`Standings of season ${season}`}
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
      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="Drivers" key="1">
          Drivers
        </Tabs.TabPane>
        <Tabs.TabPane tab="Teams" key="2">
          Teams
        </Tabs.TabPane>
      </Tabs>
    </Base>
  )
}
