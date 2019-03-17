import * as React from "react"
import { Link } from "gatsby"
import { Layout, Row, PageHeader } from "antd"
import "antd/dist/antd.css"

interface Breadcrumb {
  path: string
  name: string
}

interface Props {
  breadcrumbs: Breadcrumb[]
  children: React.ReactNode
  title: string
}

export default function Base({
  breadcrumbs,
  children,
  title,
}: Props): React.ReactElement<Props> {
  return (
    <Layout>
      <Layout.Header>Formula 1 Almanac</Layout.Header>
      <Layout.Content>
        <Row style={{ padding: 32 }}>
          <PageHeader
            style={{ marginBottom: 32 }}
            title={title}
            breadcrumb={{
              routes: breadcrumbs.map((item: Breadcrumb) => ({
                path: item.path,
                breadcrumbName: item.name,
              })),
              itemRender: (
                route: any,
                params: any,
                routes: Array<any>,
                paths: Array<string>
              ) => <Link to={route.path}>{route.breadcrumbName}</Link>,
            }}
          />
          {children}
        </Row>
      </Layout.Content>
      <Layout.Footer>2019 &copy; Yogi</Layout.Footer>
    </Layout>
  )
}
