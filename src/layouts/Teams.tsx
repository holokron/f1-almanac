import * as React from "react"
import { Table } from "antd"
import Base from "./Base"
import { SeasonListItem } from "../types/Season"
import { TeamsList } from "../types/Team"

interface Props {
  pageContext: {
    season: SeasonListItem
    teamsList: TeamsList
  }
}

export default function Teams({
  pageContext,
}: Props): React.ReactElement<Props> {
  const { season } = pageContext.season

  return (
    <Base
      title={`Teams of season ${season}`}
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
        bordered
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
        dataSource={pageContext.teamsList}
      />
    </Base>
  )
}
