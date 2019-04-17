import React, { ReactNode } from "react"
import renderer from "react-test-renderer"
import Content from "."
import { Breadcrumb } from "../../types"

const breadcrumbs: Breadcrumb[] = [
  {
    name: "Foo",
    path: "/foo",
  },
  {
    name: "Bar",
    path: "/bar",
  },
]

describe("components/Content", (): void => {
  it.each([["Test", "Foo Bar", "/foo"]])(
    "data: %p",
    (children: ReactNode, title: string, navigateBack: string = ""): void => {
      const tree = renderer.create(
        <Content
          breadcrumbs={breadcrumbs}
          title={title}
          navigateBack={navigateBack}
        >
          {children}
        </Content>,
      )

      expect(tree.toJSON()).toMatchSnapshot()
    },
  )
})
