import React, { ReactElement } from "react"
import { Table } from "antd"
import { TeamsList } from "../../types"

interface TeamsTableProps {
  data: TeamsList
}

function TeamsTable({ data }: TeamsTableProps): ReactElement<TeamsTableProps> {
  return (
    <Table
      pagination={false}
      size="small"
      rowKey="constructorId"
      columns={[
        {
          title: "Name",
          dataIndex: "name",
        },
        {
          title: "Nationality",
          dataIndex: "nationality",
        },
        {
          title: "Info",
          dataIndex: "url",
          render: (url: string) => (
            <a href={url} target="_blank">
              Review
            </a>
          ),
        },
      ]}
      dataSource={data}
    />
  )
}

export default React.memo(TeamsTable)
