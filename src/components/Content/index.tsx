import * as React from "react"
import { Row, PageHeader } from "antd"
import * as styles from "./index.styles.scss"
import { Breadcrumb } from "../../types/Breadcrumb"
import { Link } from "gatsby"

interface ContentProps {
  breadcrumbs: Breadcrumb[]
  children: React.ReactNode
  title: string
}

export default React.memo(
  ({
    breadcrumbs,
    children,
    title,
  }: ContentProps): React.ReactElement<ContentProps> => (
    <Row className={styles.contentRow}>
      <PageHeader
        className={styles.contentPageHeader}
        title={title}
        breadcrumb={{
          routes: breadcrumbs.map((item: Breadcrumb) => ({
            path: item.path,
            breadcrumbName: item.name,
          })),
          itemRender: (
            route: any,
            params: any,
            routes: Array<any>,
            paths: Array<string>
          ) => <Link to={route.path}>{route.breadcrumbName}</Link>,
        }}
      />
      {children}
    </Row>
  )
)
