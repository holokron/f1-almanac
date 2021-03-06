import React, { useState, useCallback } from "react"
import { Card } from "antd"
import Base from "./Base"
import { graphql } from "gatsby"
import { TeamStandingsList, DriverStandingsList } from "../types"
import DriverStandingsTable from "../components/DriverStandingsTable"
import TeamsStandingsTable from "../components/TeamsStandingsTable"

interface StandingsProps {
  data: {
    allDataJson: {
      nodes: {
        StandingsTable: {
          StandingsLists: {
            season: string
            round: string
            ConstructorStandings: null | TeamStandingsList
            DriverStandings: null | DriverStandingsList
          }[]
        }
      }[]
    }
  }
  pageContext: {
    season: string
  }
}

export default function Standings({
  data,
  pageContext,
}: StandingsProps): React.ReactElement<StandingsProps> {
  const season = pageContext.season
  const teamsStandings =
    data.allDataJson.nodes[0].StandingsTable.StandingsLists.length > 0
      ? data.allDataJson.nodes[0].StandingsTable.StandingsLists[0]
          .ConstructorStandings || []
      : []
  const driversStandings =
    data.allDataJson.nodes[1].StandingsTable.StandingsLists.length > 0
      ? data.allDataJson.nodes[1].StandingsTable.StandingsLists[0]
          .DriverStandings || []
      : []

  const [activeTabKey, setTabKey] = useState("drivers")

  const handleTabChange = useCallback(key => setTabKey(key), [])

  const tabs = {
    drivers: <DriverStandingsTable data={driversStandings} />,
    teams: <TeamsStandingsTable data={teamsStandings} />,
  }

  const tabList = [
    {
      key: "drivers",
      tab: "Drivers",
    },
    {
      key: "teams",
      tab: "Teams",
    },
  ]

  return (
    <Base
      metadata={{
        keywords: `f1 formula 1 statistics almanac database drivers teams standings season ${season}`,
        siteTitle: `Standings of season ${season}`,
      }}
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
      <Card
        activeTabKey={activeTabKey}
        defaultActiveTabKey="drivers"
        onTabChange={handleTabChange}
        tabList={tabList}
      >
        {tabs[activeTabKey]}
      </Card>
    </Base>
  )
}

export const query = graphql`
  query($season: Date!) {
    allDataJson(filter: { StandingsTable: { season: { eq: $season } } }) {
      nodes {
        StandingsTable {
          StandingsLists {
            season
            round
            ConstructorStandings {
              position
              positionText
              points
              wins
              Constructor {
                constructorId
                url
                name
                nationality
              }
            }
            DriverStandings {
              position
              positionText
              points
              wins
              Driver {
                driverId
                url
                givenName
                familyName
                dateOfBirth
                nationality
                code
                permanentNumber
              }
              Constructors {
                constructorId
                url
                name
                nationality
              }
            }
          }
        }
      }
    }
  }
`
