import * as React from "react"
import { Card, List } from "antd"
import Base from "./Base"
import { Link } from "gatsby"

interface SeasonProps {
  pageContext: {
    season: string
  }
}

interface SiteDataItem {
  link: string
  title: string
}

export default function Season({
  pageContext,
}: SeasonProps): React.ReactElement<SeasonProps> {
  const season = pageContext.season

  return (
    <Base
      navigateBack="/seasons"
      title={`Season ${season}`}
      breadcrumbs={[
        {
          name: "Home",
          path: "/",
        },
        {
          name: "Seasons",
          path: "/seasons",
        },
      ]}
    >
      <List
        grid={{
          gutter: 32,
          md: 4,
          sm: 2,
        }}
        dataSource={[
          {
            link: `/seasons/${season}/drivers`,
            title: "Drivers",
          },
          {
            link: `/seasons/${season}/teams`,
            title: "Teams",
          },
          {
            link: `/seasons/${season}/races`,
            title: "Races",
          },
        ]}
        renderItem={(item: SiteDataItem) => (
          <List.Item>
            <Link to={item.link}>
              <Card hoverable>
                <strong>{item.title}</strong>
              </Card>
            </Link>
          </List.Item>
        )}
      />
    </Base>
  )
}
