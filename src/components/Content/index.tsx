import React, { ReactElement, ReactNode } from "react"
import { Row, PageHeader } from "antd"
import styles from "./index.module.css"
import { Breadcrumb } from "../../types"
import { Link, navigate } from "gatsby"

interface ContentProps {
  breadcrumbs: Breadcrumb[]
  children: ReactNode
  title: string
  navigateBack?: string
}

function Content({
  breadcrumbs,
  children,
  title,
  navigateBack,
}: ContentProps): ReactElement<ContentProps> {
  return (
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
  )
}

export default React.memo(Content)
