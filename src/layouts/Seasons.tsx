import React, { ReactElement } from "react"
import { Link, graphql } from "gatsby"
import { Card, List, Typography } from "antd"
import Base from "./Base"
import { SeasonsList, Season } from "../types"

interface SeasonsProps {
  data: {
    allSeasonsJson: {
      nodes: SeasonsList
    }
  }
}

export default function Seasons({
  data,
}: SeasonsProps): ReactElement<SeasonsProps> {
  const seasons = data.allSeasonsJson.nodes

  return (
    <Base
      metadata={{
        keywords: "f1 formula 1 statistics almanac seasons",
        siteTitle: "F1 Almanac - Seasons",
      }}
      navigateBack="/"
      title="Seasons"
      breadcrumbs={[
        {
          path: "/",
          name: "Home",
        },
        {
          path: "/seasons",
          name: "Seasons",
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
        dataSource={seasons}
        renderItem={(season: Season) => (
          <List.Item>
            <Link to={`/seasons/${season.season}`}>
              <Card hoverable>
                <Typography.Text strong>{season.season}</Typography.Text>
              </Card>
            </Link>
          </List.Item>
        )}
      />
    </Base>
  )
}

export const query = graphql`
  query {
    allSeasonsJson(sort: { fields: [season], order: DESC }) {
      nodes {
        season
        url
      }
    }
  }
`
