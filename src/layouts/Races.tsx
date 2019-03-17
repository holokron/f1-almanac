import * as React from "react"
import { Col, Row, Table } from "antd"
import Base from "./Base"
import { SeasonListItem } from "../types/Season"
import { RacesList } from "../types/Race"
import { Circuit } from "../types/Circuit"

interface Props {
  pageContext: {
    season: SeasonListItem
    racesList: RacesList
  }
}

export default function Races({
  pageContext,
}: Props): React.ReactElement<Props> {
  const { season } = pageContext.season

  return (
    <Base
      title={`Races of season ${season}`}
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
      <Row>
        <Col span={24}>
          <Table
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
            dataSource={pageContext.racesList}
          />
        </Col>
      </Row>
    </Base>
  )
}
