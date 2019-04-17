import React, { ReactElement } from "react"
import { Layout, Row, Col } from "antd"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { Breadcrumb } from "../types"
import Content from "../components/Content"
import SiteMetadataQuery from "../queries/SiteMetadataQuery"
import Metadata from "../components/Metadata"

interface BaseProps {
  metadata?: {
    description?: string
    keywords?: string
    siteTitle?: string
  }
  breadcrumbs: Breadcrumb[]
  children: React.ReactNode
  title: string
  navigateBack?: string
}

export default function Base({
  metadata = {},
  breadcrumbs,
  children,
  title,
  navigateBack,
}: BaseProps): React.ReactElement<BaseProps> {
  return (
    <SiteMetadataQuery>
      {(siteMetadata): ReactElement => (
        <>
          <Metadata
            {...{
              ...siteMetadata,
              ...metadata,
            }}
          />
          <Layout>
            <Layout.Header
              style={{ position: "fixed", zIndex: 1000, width: "100%" }}
            >
              <Header title={siteMetadata.title} />
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
              <Footer
                version={siteMetadata.version}
                copyright={siteMetadata.copyright}
              />
            </Layout.Footer>
          </Layout>
        </>
      )}
    </SiteMetadataQuery>
  )
}
