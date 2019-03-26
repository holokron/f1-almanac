import * as React from "react"
import { Link, graphql } from "gatsby"
import { Card, List } from "antd"
import Base from "./Base"
import { SeasonsList, Season } from "../types/Season"

interface SeasonsProps {
  data: {
    dataJson: {
      SeasonTable: {
        Seasons: SeasonsList
      }
    }
  }
}

export default function Seasons({
  data,
}: SeasonsProps): React.ReactElement<SeasonsProps> {
  const seasons = data.dataJson.SeasonTable.Seasons

  return (
    <Base
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
        dataSource={seasons.reverse()}
        renderItem={(season: Season) => (
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

export const query = graphql`
  query {
    dataJson(
      SeasonTable: { Seasons: { elemMatch: { season: { ne: null } } } }
    ) {
      SeasonTable {
        Seasons {
          season
          url
        }
      }
    }
  }
`
