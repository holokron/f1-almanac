import React from "react"
import renderer from "react-test-renderer"
import TeamsTable from "."
import { TeamsList } from "../../types"

describe("components/TeamsTable", (): void => {
  it.each([
    [[]],
    [
      [
        {
          constructorId: "foo",
          name: "Foo",
          nationality: "bar",
          url: "https://foo.bar",
        },
      ],
    ],
  ])(
    "data: %p",
    (data: TeamsList): void => {
      const tree = renderer.create(<TeamsTable data={data} />)

      expect(tree.toJSON()).toMatchSnapshot()
    },
  )
})
