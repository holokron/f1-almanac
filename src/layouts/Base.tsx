import React from "react"
import { Helmet } from "react-helmet"
import { Layout, Row, Col } from "antd"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { Breadcrumb } from "../types"
import Content from "../components/Content"

interface BaseProps {
  breadcrumbs: Breadcrumb[]
  children: React.ReactNode
  title: string
  navigateBack?: string
}

export default function Base({
  breadcrumbs,
  children,
  title,
  navigateBack,
}: BaseProps): React.ReactElement<BaseProps> {
  return (
    <>
      <Helmet>
        <title>F1 Almanac</title>
        <meta
          name="description"
          content="Formula 1 Almanac - Database of all F1 seasons"
        />
        <meta
          name="keywords"
          content="f1 formula 1 statistics almanac database"
        />
        <meta name="author" content="Holokron <michalv8@gmail.com>" />
      </Helmet>
      <Layout>
        <Layout.Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
          <Header />
        </Layout.Header>
        <Layout.Content style={{ marginTop: 64 }}>
          <Row type="flex" justify="center">
            <Col xs={24} md={24} lg={18}>
              <Content
                title={title}
                breadcrumbs={breadcrumbs}
                navigateBack={navigateBack}
              >
                {children}
              </Content>
            </Col>
          </Row>
        </Layout.Content>
        <Layout.Footer>
          <Footer />
        </Layout.Footer>
      </Layout>
    </>
  )
}
