import * as React from "react"
import { Link } from "gatsby"
import { Card, List } from "antd"
import Base from "./Base"
import { SeasonsList, SeasonListItem } from "../types/Season"

interface HomeProps {
  pageContext: {
    seasonsList: SeasonsList
  }
}

export default React.memo(
  ({ pageContext }: HomeProps): React.ReactElement<HomeProps> => (
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
          sm: 2,
        }}
        pagination={{
          position: "bottom",
          pageSize: 12,
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
)
