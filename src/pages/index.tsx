import React from "react"
import { Card, List, Typography } from "antd"
import { Link } from "gatsby"
import Base from "../layouts/Base"
import { SiteDataItem } from "../types"

export default React.memo(
  (): React.ReactElement => {
    return (
      <Base
        title={`Formula 1 Almanac`}
        breadcrumbs={[
          {
            name: "Home",
            path: "/",
          },
        ]}
      >
        <List
          grid={{
            gutter: 32,
          }}
          dataSource={[
            {
              link: `/seasons`,
              title: "Seasons",
            },
          ]}
          renderItem={(item: SiteDataItem) => (
            <List.Item>
              <Link to={item.link}>
                <Card hoverable>
                  <Typography.Text strong>{item.title}</Typography.Text>
                </Card>
              </Link>
            </List.Item>
          )}
        />
      </Base>
    )
  },
)
