import React, { ReactElement } from "react"
import { SiteMetadata } from "../types/Gatsby"
import { StaticQuery, graphql } from "gatsby"

interface SiteMetadataQueryProps {
  children: { (siteMetadata: SiteMetadata): ReactElement }
}

export default function SiteMetadataQuery({
  children,
}: SiteMetadataQueryProps): ReactElement<SiteMetadataQueryProps> {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              author
              copyright
              description
              keywords
              title
              version
            }
          }
        }
      `}
    >
      {(data): ReactElement => children(data.site.siteMetadata)}
    </StaticQuery>
  )
}
