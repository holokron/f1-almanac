import * as React from "react"
import { Table } from "antd"
import Base from "./Base"
import { SeasonListItem } from "../types/Season"
import { DriversList } from "../types/Driver"

interface Props {
  pageContext: {
    season: SeasonListItem
    driversList: DriversList
  }
}

export default function Drivers({
  pageContext,
}: Props): React.ReactElement<Props> {
  const { season } = pageContext.season

  return (
    <Base
      title={`Drivers of season ${season}`}
      breadcrumbs={[
        {
          name: "Home",
          path: "/",
        },
        {
          name: "Seasons",
          path: "/",
        },
        {
          name: season,
          path: `/seasons/${season}`,
        },
      ]}
    >
      <Table
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
        dataSource={pageContext.driversList}
      />
    </Base>
  )
}
