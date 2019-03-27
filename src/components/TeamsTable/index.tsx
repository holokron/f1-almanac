import React from "react"
import { Table } from "antd"
import { TeamsList } from "../../types"

interface TeamsTableProps {
  data: TeamsList
}

export default React.memo(
  ({ data }: TeamsTableProps): React.ReactElement<TeamsTableProps> => (
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
  ),
)
