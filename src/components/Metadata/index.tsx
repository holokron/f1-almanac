import React, { ReactElement } from "react"
import Helmet from "react-helmet"

interface MetadataProps {
  author: string
  description: string
  keywords: string
  title: string
  siteTitle?: string
}

function normalize(item: string | string[]): string[] {
  if (!Array.isArray(item)) {
    item = [item]
  }

  return item.filter(item => item)
}

function Metadata({
  author,
  description,
  keywords,
  title,
  siteTitle = "",
}: MetadataProps): ReactElement<MetadataProps> {
  return (
    <Helmet>
      <title>{normalize([title, siteTitle]).join(" - ")}</title>
      <meta name="description" content={normalize(description).join(" ")} />
      <meta name="keywords" content={normalize(keywords).join(" ")} />
      <meta name="author" content={author} />
    </Helmet>
  )
}

export default React.memo(Metadata)
