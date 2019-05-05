import React, { ReactElement } from "react"
import { Icon } from "antd"

interface ExternalLinkProps {
  title: string
  url: string
}

export default function ExternalLink({
  title,
  url,
}: ExternalLinkProps): ReactElement<ExternalLinkProps> {
  return (
    <a href={url} target="_blank">
      {title} <Icon type="link" />
    </a>
  )
}
