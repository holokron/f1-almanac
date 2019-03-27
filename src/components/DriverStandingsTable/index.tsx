import React from "react"
import { Table } from "antd"
import { Driver, DriverStandingsList, Team } from "../../types"

interface DriverStandingsTableProps {
  data: DriverStandingsList
}

export default React.memo(
  ({
    data,
  }: DriverStandingsTableProps): React.ReactElement<
    DriverStandingsTableProps
  > => (
    <Table
      bordered
      bodyStyle={{
        overflowX: "scroll",
      }}
      showHeader
      pagination={false}
      size="small"
      rowKey="position"
      columns={[
        {
          title: "Position",
          dataIndex: "position",
        },
        {
          title: "Driver",
          dataIndex: "Driver",
          render: (driver: Driver) =>
            `${driver.givenName} ${driver.familyName}`,
        },
        {
          title: "Nationality",
          dataIndex: "Driver",
          render: (driver: Driver) => driver.nationality,
        },
        {
          title: "Team",
          dataIndex: "Constructors",
          render: (teams: Team[]) =>
            teams.map((team: Team) => team.name).join(", "),
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
