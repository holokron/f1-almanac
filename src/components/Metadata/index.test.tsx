import React from "react"
import renderer from "react-test-renderer"
import Metadata from "."

describe("components/Metadata", (): void => {
  it.each([["foo@bar.com", "Foo Bar", "foo bar test", "Foo", "Bar"]])(
    "data: %p",
    (
      author: string,
      description: string,
      keywords: string,
      title: string,
      siteTitle: string = "",
    ): void => {
      const tree = renderer.create(
        <Metadata
          author={author}
          description={description}
          keywords={keywords}
          title={title}
          siteTitle={siteTitle}
        />,
      )

      expect(tree.toJSON()).toMatchSnapshot()
    },
  )
})
