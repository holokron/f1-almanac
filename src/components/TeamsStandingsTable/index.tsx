import React from "react"
import { Table } from "antd"
import { Team, TeamStandingsList, TeamStandingItem } from "../../types"

interface TeamStandingsTableProps {
  data: TeamStandingsList
}

export default React.memo(
  ({
    data,
  }: TeamStandingsTableProps): React.ReactElement<TeamStandingsTableProps> => (
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
  ),
)
