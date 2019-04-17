import React from "react"
import renderer from "react-test-renderer"
import Footer from "."

describe("components/Footer", (): void => {
  it.each([["2019", "1.2.3"]])(
    "data: %p",
    (copyright: string, version: string): void => {
      const tree = renderer.create(
        <Footer copyright={copyright} version={version} />,
      )

      expect(tree.toJSON()).toMatchSnapshot()
    },
  )
})
