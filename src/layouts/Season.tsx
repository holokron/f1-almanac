import * as React from "react"
import { Card, List } from "antd"
import Base from "./Base"
import { SeasonListItem } from "../types/Season"
import { Link } from "gatsby"

interface SeasonProps {
  pageContext: {
    season: SeasonListItem
  }
}

interface SiteDataItem {
  link: string
  title: string
}

function getSiteData(season: string): SiteDataItem[] {
  return [
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
    {
      link: `/seasons/${season}/results`,
      title: "Results",
    },
  ]
}

export default React.memo(({ pageContext }: SeasonProps): React.ReactElement<SeasonProps> => {
  const { season } = pageContext.season

  return (
    <Base
      title={`Season ${season}`}
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
      <List
        grid={{
          gutter: 32,
          md: 4,
          sm: 2,
        }}
        dataSource={getSiteData(season)}
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
})
