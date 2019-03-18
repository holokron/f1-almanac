import * as React from "react"
import { Row } from "antd"
import Logo from "./logo.svg"
import * as styles from "./index.styles.scss"

export default React.memo(
  (): React.ReactElement => (
    <Row
      className={styles.headerRow}
      type="flex"
      align="middle"
      justify="center"
    >
      <Logo className={styles.headerLogo} />{" "}
      <span className={styles.headerSpan}>F1 Almanac</span>
    </Row>
  )
)
