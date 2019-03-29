import React from "react"
import { Link, graphql } from "gatsby"
import { Card, List, Typography } from "antd"
import Base from "./Base"
import { SeasonsList, Season } from "../types"
import Helmet from "react-helmet"

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
  const seasons = data.dataJson.SeasonTable.Seasons.reverse()

  return (
    <>
      <Helmet>
        <title>F1 Almanac - Seasons</title>
        <meta
          name="keywords"
          content="f1 formula 1 statistics almanac seasons"
        />
      </Helmet>
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
    </>
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
