import React, { ReactElement } from "react"
import { Table } from "antd"
import { Circuit, RacesList } from "../../types"
import ExternalLink from "../ExternalLink"

interface RacesTableProps {
  data: RacesList
}

function RacesTable({ data }: RacesTableProps): ReactElement<RacesTableProps> {
  return (
    <Table
      bodyStyle={{
        overflowX: "scroll",
      }}
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
            <>
              <ExternalLink title="Review" url={url} />
            </>
          ),
        },
      ]}
      dataSource={data}
    />
  )
}

export default React.memo(RacesTable)
