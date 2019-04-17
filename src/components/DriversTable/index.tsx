import React, { ReactElement } from "react"
import { Table } from "antd"
import { DriversList } from "../../types"

interface DriversTableProps {
  data: DriversList
}

export default React.memo(
  ({ data }: DriversTableProps): ReactElement<DriversTableProps> => (
    <Table
      bodyStyle={{
        overflowX: "scroll",
      }}
      pagination={false}
      size="small"
      rowKey="driverId"
      columns={[
        {
          title: "Code",
          dataIndex: "code",
        },
        {
          title: "Number",
          dataIndex: "permanentNumber",
        },
        {
          title: "Given name",
          dataIndex: "givenName",
        },
        {
          title: "Family name",
          dataIndex: "familyName",
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
              Biography
            </a>
          ),
        },
      ]}
      dataSource={data}
    />
  ),
)
