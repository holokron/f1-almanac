import React, { ReactElement } from "react"
import { Table } from "antd"
import { Team, TeamStandingsList, TeamStandingItem } from "../../types"

interface TeamStandingsTableProps {
  data: TeamStandingsList
}

function TeamsStandingsTable({
  data,
}: TeamStandingsTableProps): ReactElement<TeamStandingsTableProps> {
  return (
    <Table
      bodyStyle={{
        overflowX: "scroll",
      }}
      showHeader
      pagination={false}
      size="small"
      rowKey={(item: TeamStandingItem) => item.Constructor.constructorId}
      columns={[
        {
          title: "Position",
          dataIndex: "position",
        },
        {
          title: "Team",
          dataIndex: "Constructor",
          render: (team: Team) => team.name,
        },
        {
          title: "Nationality",
          dataIndex: "Constructor",
          render: (team: Team) => team.nationality,
          key: "Nationality",
        },
        {
          title: "Wins",
          dataIndex: "wins",
        },
        {
          title: "Points",
          dataIndex: "points",
        },
      ]}
      dataSource={data}
    />
  )
}

export default React.memo(TeamsStandingsTable)
