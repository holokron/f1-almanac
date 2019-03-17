import * as React from "react"
import { Link } from "gatsby"
import { Card, List } from "antd"
import Base from "./Base"
import { SeasonsList, SeasonListItem } from "../types/Season"

interface Props {
  pageContext: {
    seasonsList: SeasonsList
  }
}

export default function Home({
  pageContext,
}: Props): React.ReactElement<Props> {
  return (
    <Base
      title="Home"
      breadcrumbs={[
        {
          path: "/",
          name: "Home",
        },
      ]}
    >
      <List
        grid={{
          gutter: 32,
          md: 4,
        }}
        dataSource={pageContext.seasonsList}
        renderItem={(season: SeasonListItem) => (
          <List.Item>
            <Link to={`/seasons/${season.season}`}>
              <Card hoverable>
                <strong>{season.season}</strong>
              </Card>
            </Link>
          </List.Item>
        )}
      />
    </Base>
  )
}
