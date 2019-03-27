import React from "react"
import { Row } from "antd"
import styles from "./index.module.css"
import Logo from "./logo.svg"
import { Link } from "gatsby"

export default React.memo(
  (): React.ReactElement => (
    <Link to="/">
      <Row
        className={styles.headerRow}
        type="flex"
        align="middle"
        justify="center"
      >
        <Logo className={styles.headerLogo} />{" "}
        <span className={styles.headerSpan}>F1 Almanac</span>
      </Row>
    </Link>
  ),
)
