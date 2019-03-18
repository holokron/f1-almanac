import * as React from "react"
import { Table } from "antd"
import { RacesList } from "../../types/Race"
import { Circuit } from "../../types/Circuit"

interface RacesTableProps {
  data: RacesList
}

export default React.memo(
  ({ data }: RacesTableProps): React.ReactElement<RacesTableProps> => (
    <Table
      bodyStyle={{
        overflowX: "scroll",
      }}
      bordered
      size="small"
      rowKey="round"
      pagination={false}
      columns={[
        {
          title: "Round",
          dataIndex: "round",
        },
        {
          title: "Date",
          dataIndex: "date",
        },
        {
          title: "Name",
          dataIndex: "raceName",
        },
        {
          title: "Circuit",
          dataIndex: "Circuit",
          render: (circuit: Circuit) => circuit.circuitName,
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
)
