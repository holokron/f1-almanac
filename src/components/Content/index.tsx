import React from "react"
import { Row, PageHeader } from "antd"
import * as styles from "./index.styles.scss"
import { Breadcrumb } from "../../types"
import { Link, navigate } from "gatsby"

interface ContentProps {
  breadcrumbs: Breadcrumb[]
  children: React.ReactNode
  title: string
  navigateBack?: string
}

export default React.memo(
  ({
    breadcrumbs,
    children,
    title,
    navigateBack,
  }: ContentProps): React.ReactElement<ContentProps> => (
    <Row className={styles.contentRow}>
      <PageHeader
        onBack={navigateBack ? () => navigate(navigateBack) : undefined}
        className={styles.contentPageHeader}
        title={title}
        breadcrumb={{
          routes: breadcrumbs.map((item: Breadcrumb) => ({
            breadcrumbName: item.name,
            path: item.path,
          })),
          itemRender: (
            route: any,
            params: any,
            routes: Array<any>,
            paths: Array<string>,
          ) => <Link to={route.path}>{route.breadcrumbName}</Link>,
        }}
      />
      {children}
    </Row>
  ),
)
