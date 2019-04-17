import React from "react"
import renderer from "react-test-renderer"
import Header from "."

describe("components/Header", (): void => {
  it.each([["Foo Bar"]])(
    "title: %p",
    (title: string): void => {
      const tree = renderer.create(<Header title={title} />)

      expect(tree.toJSON()).toMatchSnapshot()
    },
  )
})
