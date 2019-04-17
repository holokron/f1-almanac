import React, { ReactElement } from "react"
import { Table } from "antd"
import {
  Driver,
  DriverStandingsList,
  Team,
  DriverStandingItem,
} from "../../types"

interface DriverStandingsTableProps {
  data: DriverStandingsList
}

function DriverStandingsTable({
  data,
}: DriverStandingsTableProps): ReactElement<DriverStandingsTableProps> {
  return (
    <Table
      bodyStyle={{
        overflowX: "scroll",
      }}
      showHeader
      pagination={false}
      size="small"
      rowKey={(item: DriverStandingItem) => item.Driver.driverId}
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
          key: "Nationality",
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
  )
}

export default React.memo(DriverStandingsTable)
