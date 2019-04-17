import React, { ReactElement } from "react"
import { Row } from "antd"
import styles from "./index.module.css"
import Logo from "./logo.svg"
import { Link } from "gatsby"

interface HeaderProps {
  title: string
}

function Header({ title }: HeaderProps): ReactElement<HeaderProps> {
  return (
    <Link to="/">
      <Row
        className={styles.headerRow}
        type="flex"
        align="middle"
        justify="center"
      >
        <Logo className={styles.headerLogo} />{" "}
        <span className={styles.headerSpan}>{title}</span>
      </Row>
    </Link>
  )
}

export default React.memo(Header)
