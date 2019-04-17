import React, { ReactElement } from "react"
import { Row, Typography } from "antd"

export interface FooterProps {
  copyright: string
  version: string
}

function Footer({
  copyright,
  version,
}: FooterProps): ReactElement<FooterProps> {
  return (
    <Row type="flex" align="middle" justify="center" color="green-1">
      <Typography.Text>
        v{version} &copy; {copyright}&nbsp;
        <a href="https://github.com/holokron">Holokron</a>
      </Typography.Text>
    </Row>
  )
}

export default React.memo(Footer)
