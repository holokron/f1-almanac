import React from "react"
import { Table } from "antd"
import { Team, TeamStandingsList } from "../../types"

interface TeamStandingsTableProps {
  data: TeamStandingsList
}

export default React.memo(
  ({
    data,
  }: TeamStandingsTableProps): React.ReactElement<TeamStandingsTableProps> => (
    <Table
      bordered
      bodyStyle={{
        overflowX: "scroll",
      }}
      showHeader
      pagination={false}
      size="small"
      rowKey="driverId"
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
