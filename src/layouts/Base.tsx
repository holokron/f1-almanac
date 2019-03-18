import * as React from "react"
import { Layout } from "antd"
import "antd/dist/antd.css"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { Breadcrumb } from "../types/Breadcrumb"
import Content from "../components/Content"

interface BaseProps {
  breadcrumbs: Breadcrumb[]
  children: React.ReactNode
  title: string
}

export default React.memo(
  ({
    breadcrumbs,
    children,
    title,
  }: BaseProps): React.ReactElement<BaseProps> => (
    <Layout>
      <Layout.Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <Header />
      </Layout.Header>
      <Layout.Content style={{ marginTop: 64 }}>
        <Content title={title} breadcrumbs={breadcrumbs}>
          {children}
        </Content>
      </Layout.Content>
      <Layout.Footer>
        <Footer />
      </Layout.Footer>
    </Layout>
  )
)
