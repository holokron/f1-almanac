import React from "react"
import { Row, Typography } from "antd"

export default React.memo(
  (): React.ReactElement => (
    <Row type="flex" align="middle" justify="center" color="green-1">
      <Typography.Text>
        v0.1.0 &copy; 2019&nbsp;
        <a href="https://github.com/holokron">Holokron</a>
      </Typography.Text>
    </Row>
  ),
)
